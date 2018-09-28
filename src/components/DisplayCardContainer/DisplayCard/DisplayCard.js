import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './DisplayCard.css';

const DisplayCard = (props) => {
    return (
        <Card
            style={{
                "margin": "10px"
            }}>
            <CardActionArea>
                <CardMedia
                    className='Media'
                    style={{
                        "padding": "10px",
                        "height": "200px"
                    }}
                    image={props.image}
                    title={props.title}>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    );
};

export default DisplayCard;