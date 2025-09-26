import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const SSTCursos = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenidos al módulo SST</h1>
            <h2>Cursos</h2>
            <div className="cursos" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Sistema-de-SG-SST.webp"
                                alt="logo-SST"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'cover' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Inducción sst</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Sistema-de-SG-SST.webp"
                                alt="logo-SST"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'cover' }}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Sagrilaft</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
                <div style={{ padding: 10 }}>
                    <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.elmiguerito.com/Recursos/Images/Sistema-de-SG-SST.webp"
                                alt="logo-SST"
                                sx={{ width: '100%', padding: 'auto', margin: 'auto', objectFit: 'cover' }} />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="h5" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Inducción para contratistas</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', color: '#54351a', fontFamily: 'Hagins-Caps' }}>Realizar</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SSTCursos
