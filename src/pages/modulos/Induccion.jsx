import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Induccion = () => {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia />
                </CardActionArea>
                <CardContent>
                    <Typography>Inducción</Typography>
                    <Typography>Este es el módulo de Inducción</Typography>
                </CardContent>
                <CardActions>
                    <Button><Link>Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Induccion
