import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const ServicioCursos = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenidos al módulo de servicio</h1>
            <h2>Cursos</h2>
            <div className="cursos"
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <div
                    style={{
                        padding: 10
                    }}>
                    <Card
                        sx={{
                            width: 200,
                            height: 350,
                            background: '#eae3d7',
                            borderRadius: 3,
                            boxShadow: '2px 6px 15px #54351a',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/IMG_3897.JPG"
                                alt="servicio-logo"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Hagins-Caps'
                                }}>Puntos de venta</Typography>
                            <Typography variant="body2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Archer-Book-Pro'
                                }}>Conoce nuestros puntos de venta</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                sx={{
                                    width: '90%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    border: '1px solid #54351a',
                                    borderRadius: 3
                                }}><Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#54351a',
                                        fontFamily: 'hagins-Caps'
                                    }} to="https://elmiguerito.com/escuela/course/view.php?id=6"
                                    target='blank'>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div
                    style={{
                        padding: 10
                    }}>
                    <Card
                        sx={{
                            width: 200,
                            height: 350,
                            background: '#eae3d7',
                            borderRadius: 3,
                            boxShadow: '2px 6px 15px #54351a',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/IMG_1765.jpg"
                                alt="servicio-logo"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Hagins-Caps'
                                }}>Protocolo de servicios</Typography>
                            <Typography variant="body2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Archer-Book-Pro'
                                }}>Diseñado a partir del mapa de experiencia</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                sx={{
                                    width: '90%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    border: '1px solid #54351a',
                                    borderRadius: 3
                                }}><Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#54351a',
                                        fontFamily: 'hagins-Caps'
                                    }} to="https://elmiguerito.com/escuela/course/view.php?id=7"
                                    target='blank'>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div
                    style={{
                        padding: 10
                    }}>
                    <Card
                        sx={{
                            width: 200,
                            height: 350,
                            background: '#eae3d7',
                            borderRadius: 3,
                            boxShadow: '2px 6px 15px #54351a',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Frutos_Rojos.gif"
                                alt="Servicio-logo"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Hagins-Caps'
                                }}>Portafolio de producto</Typography>
                            <Typography variant="body2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Archer-Book-Pro'
                                }}>Conoce los productos que ofrece la Compañía</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                                sx={{
                                    width: '90%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    border: '1px solid #54351a',
                                    borderRadius: 3
                                }}><Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#54351a',
                                        fontFamily: 'hagins-Caps'
                                    }} to="https://elmiguerito.com/escuela/course/view.php?id=8"
                                    target='blank'>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div
                    style={{
                        padding: 10
                    }}>
                    <Card
                        sx={{
                            width: 200,
                            height: 350,
                            background: '#eae3d7',
                            borderRadius: 3,
                            boxShadow: '2px 6px 15px #54351a',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Hiopos.png"
                                alt="Servicio-logo"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                sx={{
                                    textAlign: 'center',
                                    color: '#54351a',
                                    fontFamily: 'Hagins-Caps'
                                }}>Hiopos</Typography>
                            <Typography sx={{
                                textAlign: 'center',
                                color: '#54351a',
                                fontFamily: 'Archer-Book-Pro'
                            }}>Actualización del sistema actual</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"
                                sx={{
                                    width: '90%',
                                    padding: 'auto',
                                    margin: 'auto',
                                    border: '1px solid #54351a',
                                    borderRadius: 3
                                }}><Link style={{
                                    textDecoration: 'none',
                                    color: '#54351a',
                                    fontFamily: 'hagins-Caps'
                                }} to="#"
                                    target='blank'>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ServicioCursos
