import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Migueria = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenid@</h1>
            <div className="cursos" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="cumpleanios" style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, borderRadius: 3, background: '#eae3d7', boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/compromiso.jpg"
                                alt="logo-migueria"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component='div' sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Cumpleaños</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer-Book-Pro', fontSize: '12px' }}>Registra la fecha de cumpleaños de los colaboradores</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link to='/admin' style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Ingresar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="salas" style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, borderRadius: 3, background: '#eae3d7', boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/compromiso.jpg"
                                alt="logo-migueria"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'contain' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component='div' sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Salas</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Archer-Book-Pro', fontSize: '12px' }}>Separa la sala de juntas para tus reuniones</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link to='/salas' style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Ingresar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Migueria
