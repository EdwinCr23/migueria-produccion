import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Calidad = () => {
    return (
        <div
            style={{
                padding: 10
            }}>
            <Card
                sx={{
                    width: 200,
                    height: 300,
                    borderRadius: 3,
                    background: '#eae3d7',
                    boxShadow: '2px 6px 15px #54351a',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.elmiguerito.com/Recursos/Images/calidad.jpg"
                        alt="logo-migueria"
                        sx={{
                            width: '100%',
                            padding: 'auto',
                            margin: 'auto'
                        }}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component="div"
                        sx={{
                            textAlign: 'center',
                            color: '#54351a',
                            fontFamily: 'Hagins-Caps'
                        }}>Calidad</Typography>
                    <Typography
                        variant='body2'
                        sx={{
                            textAlign: 'center',
                            color: '#54351a',
                            fontFamily: 'Hagins-Caps'
                        }}>Este es el Módulo de calidad</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        sx={{
                            width: '90%',
                            padding: 'auto',
                            margin: 'auto',
                            borderRadius: 3,
                            border: '1px solid #54351a'
                        }}><Link
                            style={{
                                textDecoration: 'none',
                                background: '#eae3d7',
                                fontFamily: 'Hagins-Caps',
                                color: '#54351a'
                            }} to='/calidad-cursos'>Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Calidad
