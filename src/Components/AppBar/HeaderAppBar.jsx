import React from 'react';
import { Toolbar, AppBar, IconButton, Typography, Drawer } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Light from '@material-ui/icons/Brightness7';
import Dark from '@material-ui/icons/Brightness4';
import AsyncSearch from './AsyncSearch';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from '../AppDrawer/AppDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  rightButton: {
    marginLeft: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchDark: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HeaderAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const closeDrawer = () => {
    setState({ ...state, 'left': false });
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer('left', true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Covid-19 Tracker
          </Typography>

          <AsyncSearch country={props.country} routerHelper={props.routerHelper}></AsyncSearch>
          <IconButton
            edge="end"
            className={classes.rightButton}
            color="inherit"
            aria-label="Toggle Dark and Light mode"
            onClick={() => props.themeToggleHandler()}>
            {props.curTheme === "light" ? <Light /> : <Dark />}

          </IconButton>          
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={state.left} onClose={toggleDrawer('left', false)}>
        <AppDrawer routerHelper={props.routerHelper} closeDrawer={()=>closeDrawer()} anchor='left'></AppDrawer>
      </Drawer>
    </div>
  );
}