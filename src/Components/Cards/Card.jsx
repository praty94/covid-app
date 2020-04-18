import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css';
import messages from '../../Messages/messages.json';

const _Card = (props) => {
    return (
        <Card className={styles.root}>
            <CardActionArea className={styles.textCenter}>
                <img alt={props.data.type} src={props.data.img} className={styles.media}></img>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {messages[props.data.type].heading}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {messages[props.data.type].subHeading}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}

export default _Card;