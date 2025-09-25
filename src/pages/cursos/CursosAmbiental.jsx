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
            <div className="cursos" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 350, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Cambio-Climatico.png"
                                alt="ambiental-logo"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Cambio Climático</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer-Book-Pro' }}>Es la modificación de la temperatura y del resto de variables del clima</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'hagins-Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=5" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 350, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Gestion.png"
                                alt="ambiental-logo"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Gestión Ambiental</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer-Book-Pro' }}>Es un proceso que está orientado a resolver los problemas ambientales</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'hagins-Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=4" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 350, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Induccion.png"
                                alt="ambiental-logo"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" sx={{ textAlign: "center", color: '#54351a', fontFamily: 'Hagins-Caps' }}>Inducción</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer-Book-Pro' }}>Curso del área Ambiental</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=3" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 350, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Residuos.png"
                                alt="ambiental-logo"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", color: '#54351a', fontFamily: 'Hagins-Caps' }}>Manejo de Residuos</Typography>
                            <Typography variant="body2" sx={{ textAlign: "center", color: '#54351a', fontFamily: 'Archer-Book-Pro', fontSize: '12px' }}>Se componen principalmente de desechos procedentes de materiales </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=2" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CursosAmbiental
