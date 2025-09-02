import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="body-home">
                <h1>Bienvenidos al portal web del empleado</h1>
                <div className="video">
                    <video src="src\assets\video\video.mp4" autoPlay muted></video>
                </div>
            </div>
            <div className="historia">
                <h2>Un poco de historia</h2>
                <p>Hace más de una década, en un pequeño rincón de Suramericana, dos almas emprendedoras, Juan Guillermo y Gloria Stella, decidieron dar vida a su sueño. Todo comenzó con un pequeño horno y una batidora. Los inicios fueron modestos, pero cada torta que salía de ese rincón cercano al Estadio Atanasio Girardot llevaba consigo el amor y el esfuerzo de una familia que veía en cada horneado una oportunidad de crecimiento. Con el tiempo, Tradiciones Repostería, como se llamaba entonces, se convirtió en algo más grande. Más sabores, más tamaños, más texturas se sumaron a la oferta inicial. La demanda creció, y con ella, la necesidad de abrir una segunda sede. Así nació Tradiciones Repostería el 2 en noviembre del 2010, una nueva etapa que consolidó su presencia en el sector y atrajo a clientes desde diferentes rincones de Medellín. Las jornadas de trabajo eran largas, pero gratificantes. Fue entonces cuando Juan Guillermo y Gloria Stella decidieron ir más allá, no solo en nombre sino en identidad. Nació La Miguería, con el concepto de "las migas del pan, las tortas y las migas de las abuelas", simbolizando amistad y afecto tejidos en cada producto.</p>
            </div>
            <div>
                <div className="mision">
                    <h2>Misión</h2>
                    <p>Somos reconocidos como una marca líder en el sector de Repostería y Panadería,
                        que se caracteriza por su excelente servicio y calidad en los procesos;
                        además por nuestro compromiso para generar oportunidades
                        que redunden en una mejor calidad de vida y crecimiento personal
                        para todos nuestros colaboradores, clientes, proveedores y socios</p>
                </div>
                <div className="vision">
                    <h2>Visión</h2>
                    <p>Inspirados en nuestros principios, seremos una empresa innovadora
                        donde el ser humano es pilar fundamental para nuestro crecimiento y consolidación;
                        ofeciendo experiencias positivas de gran recordación por medio de productos
                        de la mejor calidad, un excelente servicio y recetas originales, que evocan
                        en nuestros clientes lo mejor de la tradición familiar</p>
                </div>
            </div>
            <div className="valores">
                <h2>Valores</h2>
                <article>
                    <ul>
                        {[
                            "Respeto",
                            "Amor",
                            "Prestigio",
                            "Trabajo en equipo",
                            "Superación",
                            "Universalidad",
                            "Éxito",
                            "Esfuerzo",
                            "Orgullo",
                        ].map((valor, index) => (
                            <li key={index}>
                                <img src="src\assets\images\Gorrito.png" alt={valor} />
                                <span>{valor}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default Home
