import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const TalentoHumano = () => {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia />
                </CardActionArea>
                <CardContent>
                    <Typography>Talento Humano</Typography>
                    <Typography>Este es el módulo de Talento Humano</Typography>
                </CardContent>
                <CardActions>
                    <Button><Link>Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TalentoHumano
