import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";


const AdminForm = () => {
    const [nombre, setNombre] = useState("");
    const [area, setArea] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !area || !fecha) return alert("Todos los campos son obligatorios");

        try {
            await addDoc(collection(db, "empleados"), {
                nombre,
                area,
                fechaNacimiento: new Date(fecha),
            });

            alert("Empleado guardado correctamente ✅");
            setNombre("");
            setArea("");
            setFecha("");
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Hubo un error al guardar.");
        }
    };

    return (
        <div className="p-4 max-w-md ">
            <Header />
            <h1 >Registrar empleado</h1>
            <h3 style={{ textAlign: 'center' }}>Para la fecha poner un día después de la fecha real</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#eae3d7',
                padding: '1rem'
            }}>
                <form onSubmit={handleSubmit}
                    style={{
                        maxWidth: '30rem',
                        margin: 'auto',
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '1rem',
                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                    <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                style={{ display: 'block', color: '#54351e', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', textAlign: 'left', fontFamily: 'Archer-Book-Pro' }}>Nombre del empleado
                            </label>
                            <input
                                type="text"
                                placeholder="Nombre del empleado"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                id="name"
                                style={{ width: '100%', padding: '0.75rem', outline: 'none', transition: 'box-shadow 0.2s ease-in-out' }}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="area" style={{
                                    display: 'block',
                                    color: '#54351a',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    textAlign: 'left'
                                }}
                            >Área
                            </label>
                            <input
                                type="text"
                                placeholder="Área"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                id="area"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #D1D5DB',
                                    borderRadius: '0.5rem',
                                    outline: 'none',
                                    transition: 'box-shadow 0.2s ease-in-out'
                                }}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="birth" style={{
                                    display: 'block',
                                    color: '#54351a',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    textAlign: 'left'
                                }}>Cumpleaños
                            </label>
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                id="birth"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #D1D5DB',
                                    borderRadius: '0.5rem',
                                    outline: 'none',
                                    transition: 'box-shadow 0.2s ease-in-out'
                                }}
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#eae3d7', // bg-sky-500
                                    color: '#54351a',
                                    fontWeight: 600,
                                    padding: '0.75rem',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease-in-out'
                                }}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdminForm;
