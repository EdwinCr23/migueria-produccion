import React, { useEffect, useState } from "react";
import { db } from "../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid"
import "@fullcalendar/react"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Birtday = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const cargarCumpleaños = async () => {
            const querySnapshot = await getDocs(collection(db, "empleados"));
            const añoActual = new Date().getFullYear();

            const eventos = querySnapshot.docs.map((doc, index) => {
                const data = doc.data();
                const fechaNacimiento = data.fechaNacimiento.toDate();
                const fechaEsteAño = new Date(añoActual, fechaNacimiento.getMonth(), fechaNacimiento.getDate());


                return {
                    id: index,
                    title: `🎂 ${data.nombre} (${data.area})`,
                    start: fechaEsteAño.toISOString().split("T")[0],
                    allDay: true,
                };
            });

            setEventos(eventos);
        };

        cargarCumpleaños();
    }, []);

    return (
        <div>
            <Header />
            <div style={{ padding: 10, margin: 10 }}>
                <h1 className="text-2xl font-bold mb-4">Cumpleaños de empleados</h1>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={eventos}
                    locale="es"
                    height="auto"
                />
                <Footer />
            </div>
        </div>
    )
}

export default Birtday
