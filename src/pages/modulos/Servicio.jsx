import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Servicio = () => {
    return (
        <div style={{ padding: 10 }}>
            <Card sx={{ width: 200, height: 300, background: '#eae3d7', borderRadius: 3, boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="src\assets\images\IMG_1765.jpg"
                        alt="logo"
                        sx={{ width: '100%', margin: 'auto', padding: 'auto' }}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{}}>Servicio</Typography>
                    <Typography>Este es el módulo de Servicio</Typography>
                </CardContent>
                <CardActions>
                    <Button><Link>Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Servicio
