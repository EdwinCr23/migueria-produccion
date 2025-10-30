// AdminForm.jsx
import React, { useState } from "react";
import { db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AdminForm = () => {
    const [nombre, setNombre] = useState("");
    const [area, setArea] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !area || !fecha) {
            alert("Por favor completa todos los campos.");
            return;
        }

        try {
            await addDoc(collection(db, "empleados"), {
                nombre,
                area,
                fechaNacimiento: fecha, // string "YYYY-MM-DD"
            });

            alert("Empleado registrado correctamente 🎉");
            setNombre("");
            setArea("");
            setFecha("");
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Hubo un error al guardar el empleado.");
        }
    };

    return (
        <div >
            <Header />
            <div style={{
                maxWidth: "700px",
                margin: "2rem auto",
                fontFamily: "Archer-Book-Pro"
            }}>
                <h2>Registrar empleado</h2>
                <form onSubmit={handleSubmit} style={{
                    marginBottom: "2rem",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    borderRadius: 3,

                }}>
                    <div>
                        <label>Nombre</label>
                        <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            type="text"
                            style={{
                                width: '100%',
                                padding: '4px',
                                margin: 10,
                                border: '1px solid #54351a',
                                fontFamily: 'Archer-Book-pro',
                                color: '#54351a',
                                borderRadius: 3
                            }} />
                    </div>
                    <div>
                        <label>Área</label>
                        <input
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            type="text"
                            style={{
                                width: '100%',
                                padding: '4px',
                                margin: 10,
                                border: '1px solid #54351a',
                                fontFamily: 'Archer-Book-pro',
                                color: '#54351a',
                                borderRadius: 3
                            }} />
                    </div>
                    <div>
                        <label>Cumpleaños</label>
                        <input
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            type="date"
                            style={{
                                width: '100%',
                                padding: '4px',
                                margin: 10,
                                border: '1px solid #54351a',
                                fontFamily: 'Archer-Book-pro',
                                color: '#54351a',
                                borderRadius: 3
                            }} />
                    </div>
                    <div>
                        <button
                            type="submit"
                            style={{
                                background: '#54351a',
                                color: '#eae3d7',
                                fontFamily: 'Hagins-Caps',
                                border: 'none',
                                borderRadius: 3,
                                padding: '8px',
                                marginRight: 10,
                                cursor: 'pointer'
                            }} >Guardar</button>
                        <button
                            style={{
                                background: '#54351a',
                                color: '#eae3d7',
                                fontFamily: 'Hagins-Caps',
                                border: 'none',
                                borderRadius: 3,
                                padding: '8px'

                            }}><Link
                                to='/migueria'
                                style={{
                                    textDecoration: 'none',
                                    color: '#eae3d7'
                                }}>Regresar</Link></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdminForm;
