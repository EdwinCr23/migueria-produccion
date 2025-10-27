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

const Rooms = () => {
    const [room, setRoom] = useState("Sala 1");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);

    const reservationsRef = collection(db, "reservas_salas");

    // 🔹 Cargar reservas existentes y eliminar las que ya pasaron
    const fetchReservations = async () => {
        const q = query(reservationsRef, orderBy("fechaHora", "asc"));
        const snapshot = await getDocs(q);

        const now = new Date();

        // Filtrar y eliminar las reservas pasadas
        const validReservations = [];
        for (const docSnap of snapshot.docs) {
            const data = docSnap.data();
            const fechaHora = data.fechaHora.toDate();

            if (fechaHora < now) {
                // Eliminar automáticamente las reservas vencidas
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

    // 🔹 Guardar nueva reserva con validación
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !date || !time) {
            alert("Por favor completa todos los campos.");
            return;
        }

        setLoading(true);

        try {
            // Verificar si ya existe una reserva en esa sala, fecha y hora
            const checkQuery = query(
                reservationsRef,
                where("sala", "==", room),
                where("fecha", "==", date),
                where("hora", "==", time)
            );
            const existing = await getDocs(checkQuery);

            if (!existing.empty) {
                alert("⚠️ Esa sala ya está reservada para esa fecha y hora.");
                setLoading(false);
                return;
            }

            // Crear el objeto fecha-hora
            const fechaHora = new Date(`${date}T${time}`);

            // Guardar nueva reserva
            await addDoc(reservationsRef, {
                nombre: name,
                sala: room,
                fecha: date,
                hora: time,
                fechaHora: Timestamp.fromDate(fechaHora),
            });

            alert("✅ Reserva guardada correctamente");
            setName("");
            setDate("");
            setTime("");

            // Actualizar lista de reservas
            await fetchReservations();
        } catch (error) {
            console.error("Error al guardar la reserva:", error);
            alert("❌ Ocurrió un error al guardar la reserva.");
        }

        setLoading(false);
    };

    // 🔹 Eliminar reserva manualmente
    const handleDelete = async (id) => {
        if (confirm("¿Seguro que deseas eliminar esta reserva?")) {
            await deleteDoc(doc(db, "reservas_salas", id));
            alert("🗑️ Reserva eliminada");
            fetchReservations();
        }
    };

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "Archer-Book-Pro" }}>
            <h2>📅 Reservar Sala de Juntas</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'start', textAlign: 'center' }}>
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
                    <label>Hora:</label><br />
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <button type="submit" disabled={loading} style={{
                    padding: "10px 20px",
                    backgroundColor: "#54351a",
                    color: "#eae3d7",
                    fontFamily: 'Hagins-Caps',
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    {loading ? "Guardando..." : "Reservar"}
                </button>
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
                        <tr style={{ backgroundColor: "#eae3d7", textAlign: "center", fontStyle: 'bold' }}>
                            <th style={{ padding: "10px", border: "1px solid #54351a", fontFamily: 'Archer-Book-pro' }}>Nombre</th>
                            <th style={{ padding: "10px", border: "1px solid #54351a", fontFamily: 'Archer-Book-pro' }}>Sala</th>
                            <th style={{ padding: "10px", border: "1px solid #54351a", fontFamily: 'Archer-Book-pro' }}>Fecha</th>
                            <th style={{ padding: "10px", border: "1px solid #54351a", fontFamily: 'Archer-Book-pro' }}>Hora</th>
                            <th style={{ padding: "10px", border: "1px solid #54351a", fontFamily: 'Archer-Book-pro' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((r) => (
                            <tr key={r.id} style={{ textAlign: 'center' }}>
                                <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.nombre}</td>
                                <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.sala}</td>
                                <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.fecha}</td>
                                <td style={{ padding: "10px", border: "1px solid #54351a" }}>{r.hora}</td>
                                <td style={{ padding: "10px", border: "1px solid #54351a" }}>
                                    <button
                                        onClick={() => handleDelete(r.id)}
                                        style={{
                                            backgroundColor: "#54351a",
                                            color: "#eae3d7",
                                            fontFamily: 'Archer-Boook-Pro',
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
    );
};

export default Rooms;
