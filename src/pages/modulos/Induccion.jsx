import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Induccion = () => {
    return (
        <div style={{ padding: 10 }}>
            <Card sx={{ width: 200, height: 300, borderRadius: 3, background: '#eae3d7', boxShadow: '2px 6px 15px #54351a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="src\assets\images\IMG_1765.jpg"
                        alt="logo-migueria"
                        sx={{ width: '100%', padding: 'auto', margin: 'auto' }}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Inducción</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', color: '#54351a', fontFamily: 'Hagin Caps' }}>Este es el módulo de Inducción</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ width: '90%', padding: 'auto', margin: 'auto', border: '1px solid #54351a', borderRadius: 3 }}><Link style={{ textDecoration: 'none', fontFamily: 'Hagin Caps', color: '#54351a' }} to="/induccion-cursos">Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Induccion
