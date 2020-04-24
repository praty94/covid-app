import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Cards.module.css';
import messages from '../../Messages/messages.json';
import CountUp from 'react-countup';
import cx from 'classnames';

const _Card = (props) => {
    let count = null;
    if(!props.data.value){
        count = props.data.value === 0 ? 0 : "...";
    }else{
        count = <CountUp start={0} end={props.data.value} duration={1} separator=","/>
    }
    return (
        <Card className={cx(styles.root,styles[props.data.type])}>
            <CardActionArea className={styles.textCenter}>
                <img alt={props.data.type} src={props.data.img} className={styles.media}></img>
                <CardContent>
                    <Typography variant="h4">
                        <b> {count}
                         </b>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {messages[props.data.type].heading}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {messages[props.data.type].subHeading}
                    </Typography>
                </CardContent>
            </CardActionArea>            
        </Card>
    );
}

export default _Card;