import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const CalidadCursos = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Bienvenidos al módulo de Calidad</h1>
                <h2>Cursos</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="logo-calidad"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Inducción Calidad</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=14" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="logo-calidad"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Alérgenos de alimentos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=13" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="logo-calidad"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Generalidades de la microbiología en alimentos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=15" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="logo-calidad"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Manejo de productos químicos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=16" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src\assets\images\IMG_1765.jpg"
                                alt="logo-calidad"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Manual de buenas prácticas para transporte</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagin Caps' }} to="https://elmiguerito.com/escuela/course/view.php?id=17" target="blank">Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CalidadCursos
