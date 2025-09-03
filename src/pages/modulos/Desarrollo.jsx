import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Desarrollo = () => {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia />
                </CardActionArea>
                <CardContent>
                    <Typography>Desarrollo</Typography>
                    <Typography>Este es el módulo de Desarrollo</Typography>
                </CardContent>
                <CardActions>
                    <Button><Link>Ver más</Link></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Desarrollo
