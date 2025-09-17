import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const CursosAmbiental = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Bievenidos al módulo ambiental</h1>
                <h2>Cursos</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 350, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="ambiental-logo"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Cambio Climático</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer Book Pro' }}>Es la modificación de la temperatura y del resto de variables del clima</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=5" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300 }}>
                        <CardActionArea>
                            <CardMedia />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Gestión Ambiental</Typography>
                            <Typography></Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card>
                        <CardActionArea>
                            <CardMedia />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Inducción Gestión Ambiental</Typography>
                            <Typography></Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card>
                        <CardActionArea>
                            <CardMedia />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Manejo de Residuos</Typography>
                            <Typography></Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CursosAmbiental
