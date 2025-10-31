import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const DesarrolloCursos = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenidos al módulo de Desarrollo</h1>
            <h2>Aliados</h2>
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
                            height: 300,
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
                                image="https://www.elmiguerito.com/Recursos/Images/caja.png"
                                alt="logo-calidad"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Comfama</Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
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
                            height: 300,
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
                                image="https://www.elmiguerito.com/Recursos/Images/sena.png"
                                alt="logo-calidad"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Sena</Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
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
                            height: 300,
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
                                image="https://www.elmiguerito.com/Recursos/Images/"
                                alt="logo-calidad"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>ARL</Typography>
                        </CardContent>
                        <CardActions>
                            <Button></Button>
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
                            height: 300,
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
                                image="https://www.elmiguerito.com/Recursos/Images/"
                                alt="logo-calidad"
                                sx={{
                                    width: '100%',
                                    padding: 'auto',
                                    margin: 'auto'
                                }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>Fondo de Cesantías</Typography>
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

export default DesarrolloCursos
