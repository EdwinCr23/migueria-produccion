import Header from '../components/Header'
import Footer from '../components/Footer'
import Ambiental from './modulos/Ambiental'
import Calidad from './modulos/Calidad'
import Servicio from './modulos/Servicio'
import SST from './modulos/SST'
import TalentoHumano from './modulos/TalentoHumano'

const School = () => {
    return (
        <div>
            <Header />
            <div className="school text-xl xl" style={{ fontFamily: 'Archer-Book-pro', padding: '21px' }}>
                <h1 className="text-xl xl">Finalidad</h1>
                <p style={{ textAlign: 'justify' }}>
                    La escuela de formación tiene como propósito brindarte herramientas para que tu ingreso y formación en la Miguería sea un proceso de aprendizaje amigable, donde puedas conocer nuestro ADN y el propósito de cada una de las labores que hacen parte de esta gran familia.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    En esta plataforma te encontraras con diferentes módulos que van desde lo general a lo especifico de acuerdo al área en la que te vayas a desempeñar.
                    Te pedimos compromiso con cada uno de los contenidos que son suministrados para tu aprendizaje, al final todos los módulos tienen su respectiva evaluación.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    Esperamos entre todos poder seguir construyendo esta gran familia. La ruta para que puedas acceder a los diferentes módulos es:
                    <ol className="school">
                        <li>Seleccionar el módulo al que desear ingresar</li>
                        <li>Se te desplegará una ventana que te va a pedir el usuario y la contraseña</li>
                        <li>Una vez esté en el módulo, se te desplegará el contenido que está dividdido en tres partes:
                            <ol>
                                <li>Videos</li>
                                <li>Información de lectura</li>
                                <li>Evaluación</li>
                            </ol>
                        </li>
                    </ol>
                </p>
            </div>
            <div className="modulos">
                <h1>Módulos</h1>
                <div className="mod" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <Ambiental />
                    <Calidad />
                    <Servicio />
                    <SST />
                    <TalentoHumano />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default School
