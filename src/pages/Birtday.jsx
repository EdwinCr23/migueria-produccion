// BirthdayCalendar.jsx
import React, { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BirthdayCalendar = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const parseToDate = (raw) => {
            // raw puede ser: "YYYY-MM-DD" (string), Timestamp (has toDate), o Date
            if (!raw) return null;

            if (typeof raw === "string") {
                const [y, m, d] = raw.split("-");
                if (!y || !m || !d) return null;
                return new Date(Number(y), Number(m) - 1, Number(d));
            }

            // Firestore Timestamp (tiene toDate)
            if (typeof raw.toDate === "function") {
                return raw.toDate();
            }

            // Date
            if (raw instanceof Date) {
                return raw;
            }

            return null;
        };

        const cargarCumpleaños = async () => {
            try {
                const snapshot = await getDocs(collection(db, "empleados"));
                const añoActual = new Date().getFullYear();

                const eventos = snapshot.docs.map((docSnap, index) => {
                    const data = docSnap.data();
                    const raw = data.fechaNacimiento;
                    const fechaNacimiento = parseToDate(raw);

                    if (!fechaNacimiento) {
                        // Si no se pudo parsear, lo ignoramos o mostramos sin fecha
                        console.warn("fechaNacimiento no válida para doc:", docSnap.id, raw);
                        return null;
                    }

                    // Creamos la fecha para este año (solo día/mes importan)
                    const fechaEsteAño = new Date(añoActual, fechaNacimiento.getMonth(), fechaNacimiento.getDate());

                    return {
                        id: docSnap.id || index,
                        title: `🎉 ${data.nombre || "Sin nombre"} (${data.area || ""})`,
                        start: fechaEsteAño.toISOString().split("T")[0],
                        allDay: true,
                    };
                }).filter(Boolean); // quitar nulls

                setEventos(eventos);
            } catch (err) {
                console.error("Error cargando cumpleaños:", err);
            }
        };

        cargarCumpleaños();
    }, []);

    return (
        <div>
            <Header />
            <h1>Cumpleaños de empleados</h1>
            <div className="bg-white p-4 rounded shadow">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="es"
                    events={eventos}
                    height="auto"
                />
            </div>
            <Footer />
        </div>
    );
};

export default BirthdayCalendar;
