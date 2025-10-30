import { useState, useEffect } from "react";
import { db } from "../components/firebase";
import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    doc,
    Timestamp
} from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [room, setRoom] = useState("Sala 1");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [name, setName] = useState("");
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [reservationCode, setReservationCode] = useState("");

    const reservationsRef = collection(db, "reservas_salas");

    // 🔹 Generar código único de 6 caracteres
    const generateCode = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    };

    // 🔹 Cargar reservas existentes y eliminar las que ya pasaron
    const fetchReservations = async () => {
        const q = query(reservationsRef, orderBy("fechaHoraInicio", "asc"));
        const snapshot = await getDocs(q);
        const now = new Date();

        const validReservations = [];
        for (const docSnap of snapshot.docs) {
            const data = docSnap.data();
            const fechaFin = data.fechaHoraFin?.toDate();

            if (fechaFin && fechaFin < now) {
                // 🔸 Eliminar automáticamente reservas pasadas
                await deleteDoc(doc(db, "reservas_salas", docSnap.id));
            } else {
                validReservations.push({
                    id: docSnap.id,
                    ...data,
                });
            }
        }

        setReservations(validReservations);
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    // 🔹 Guardar nueva reserva con validación de rango
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !date || !startTime || !endTime) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const start = new Date(`${date}T${startTime}`);
        const end = new Date(`${date}T${endTime}`);

        if (end <= start) {
            alert("⚠️ La hora final debe ser posterior a la hora inicial.");
            return;
        }

        setLoading(true);

        try {
            // Verificar si existe una reserva que se cruce
            const q = query(
                reservationsRef,
                where("sala", "==", room),
                where("fecha", "==", date)
            );
            const existing = await getDocs(q);

            const overlap = existing.docs.some((docSnap) => {
                const data = docSnap.data();
                const startDB = data.fechaHoraInicio.toDate();
                const endDB = data.fechaHoraFin.toDate();
                // Se cruza si el inicio es antes del fin guardado y el fin después del inicio guardado
                return start < endDB && end > startDB;
            });

            if (overlap) {
                alert("⚠️ Esa sala ya está reservada en ese rango horario.");
                setName("");
                setDate("");
                setStartTime("");
                setEndTime("");
                setLoading(false);
                return;
            }

            // 🔸 Generar código único
            const code = generateCode();

            await addDoc(reservationsRef, {
                nombre: name,
                sala: room,
                fecha: date,
                horaInicio: startTime,
                horaFin: endTime,
                fechaHoraInicio: Timestamp.fromDate(start),
                fechaHoraFin: Timestamp.fromDate(end),
                codigo: code, // 🔹 Guardar el código en Firestore
            });

            // Mostrar modal con el código
            setReservationCode(code);
            setModalVisible(true);

            // Resetear formulario
            setName("");
            setDate("");
            setStartTime("");
            setEndTime("");
            await fetchReservations();
        } catch (error) {
            console.error("Error al guardar la reserva:", error);
            alert("❌ Ocurrió un error al guardar la reserva.");
        }

        setLoading(false);
    };

    // 🔹 Eliminar reserva solicitando el código
    const handleDelete = async (id) => {
        const reserva = reservations.find((r) => r.id === id);
        if (!reserva) return;

        const codigoIngresado = prompt("🔒 Ingresa el código de eliminación para esta reserva:");

        if (codigoIngresado !== reserva.codigo) {
            alert("❌ Código incorrecto. No se puede eliminar la reserva.");
            return;
        }

        if (confirm("¿Seguro que deseas eliminar esta reserva?")) {
            await deleteDoc(doc(db, "reservas_salas", id));
            alert("🗑️ Reserva eliminada correctamente.");
            fetchReservations();
        }
    };

    // 🔹 Copiar código al portapapeles
    const copyCode = () => {
        navigator.clipboard.writeText(reservationCode);
        alert("📋 Código copiado al portapapeles");
    };

    return (
        <div>
            <Header />
            <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "Archer-Book-Pro" }}>
                <h2>📅 Reservar Sala de Juntas</h2>

                <form onSubmit={handleSubmit}
                    style={{
                        marginBottom: "2rem",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                        borderRadius: 3
                    }}>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Nombre:</label><br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Sala:</label><br />
                        <select
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            style={{ width: "100%", padding: "8px" }}
                        >
                            <option value="Sala 1">Sala 1</option>
                            <option value="Sala 2">Sala 2</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Fecha:</label><br />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Hora Inicial:</label><br />
                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Hora Final:</label><br />
                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{
                        display: 'block',
                        margin: 12,
                        alignItems: 'center'
                    }}>
                        <button type="submit" disabled={loading} style={{
                            padding: "10px 20px",
                            backgroundColor: "#54351a",
                            color: "#eae3d7",
                            fontFamily: 'Hagins-Caps',
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: 10
                        }}>
                            {loading ? "Guardando..." : "Reservar"}
                        </button>
                        <button style={{
                            padding: "10px 20px",
                            backgroundColor: "#54351a",
                            color: "#eae3d7",
                            fontFamily: 'Hagins-Caps',
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginRight: 10
                        }}><Link to='/migueria' style={{
                            textDecoration: 'none',
                            color: '#eae3d7'
                        }}>Regresar</Link></button>
                    </div>
                </form>

                <h2>📋 Reservas Existentes</h2>

                {reservations.length === 0 ? (
                    <p>No hay reservas registradas.</p>
                ) : (
                    <table style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "1rem"
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: "#eae3d7", textAlign: "center" }}>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Nombre</th>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Sala</th>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Fecha</th>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Hora Inicio</th>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Hora Fin</th>
                                <th style={{ padding: "10px", border: "1px solid #54351a" }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((r) => (
                                <tr key={r.id} style={{ textAlign: 'center' }}>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.nombre}</td>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.sala}</td>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.fecha}</td>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.horaInicio}</td>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.horaFin}</td>
                                    <td style={{ padding: "10px", border: "1px solid #54351a" }}>
                                        <button
                                            onClick={() => handleDelete(r.id)}
                                            style={{
                                                backgroundColor: "#54351a",
                                                color: "#eae3d7",
                                                border: "none",
                                                padding: "6px 12px",
                                                borderRadius: "5px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* 🔹 Modal para mostrar el código */}
            {modalVisible && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, width: "100%", height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: "#eae3d7",
                        padding: "2rem",
                        borderRadius: "10px",
                        textAlign: "center",
                        boxShadow: "0 0 20px rgba(0,0,0,0.2)"
                    }}>
                        <h3 style={{ color: "#54351a", marginBottom: "1rem", fontFamily: 'Hagins-Caps' }}>✅ Reserva Guardada</h3>
                        <p style={{ marginBottom: "0.5rem" }}>Código único generado:</p>
                        <h2 style={{ color: "#54351a", fontFamily: "Hagins-Caps" }}>{reservationCode}</h2>
                        <p style={{ fontSize: "0.9rem", color: "#54351a" }}>¡Guárdalo, lo necesitarás para cancelar tu reserva!</p>
                        <div style={{ marginTop: "1.5rem" }}>
                            <button onClick={copyCode} style={{
                                backgroundColor: "#54351a",
                                color: "#eae3d7",
                                fontFamily: 'Archer-Book-Pro',
                                border: "none",
                                padding: "8px 14px",
                                borderRadius: "5px",
                                marginRight: "10px",
                                cursor: "pointer"
                            }}>
                                Copiar Código
                            </button>
                            <button onClick={() => setModalVisible(false)} style={{
                                backgroundColor: "#ccc",
                                fontFamily: 'Archer-Book-Pro',
                                border: "none",
                                padding: "8px 14px",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Rooms;
