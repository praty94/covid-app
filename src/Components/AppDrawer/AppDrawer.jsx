import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function AppDrawer(props) {
  const classes = useStyles();  
  const goHome = () => {    
    props.history.push('/covid-app');
  }
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: props.anchor === 'top' || props.anchor === 'bottom',
      })}
      role="presentation"
      onClick={props.closeDrawer}
      onKeyDown={props.closeDrawer}
    >
      <List>
      <ListItem button key='Home' onClick={()=>goHome()}>
            <ListItemIcon><Home></Home></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
      </List>
      
    </div>
  );
}

export default withRouter(AppDrawer);