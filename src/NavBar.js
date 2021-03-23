import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";
import imgSrc from "./image/me_avater.JPG";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cnt: {
        flexGrow: 1,
    },
    toolbarTitle: {
        flexGrow: 1,
        '& *': {
            margin: theme.spacing(1, 1.5),
            textDecoration: 'none',
            color: "#ffffff"
        },
    },
}));


function NavBar(){
    const classes = useStyles();
    const activeStyle = {
        fontWeight: "bold",
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [viewCnt, setViewCnt] = useState(0);

    const handleClick = event => {
        setViewCnt(viewCnt + 1);
        console.log(viewCnt)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Button href={"/"}><Avatar src={imgSrc} className={classes.menuButton}/></Button>
            <Typography variant="h6" className={classes.title}>
                網路攻防實習
            </Typography>
            <Typography className={classes.cnt}>
                瀏覽人數：{viewCnt}
            </Typography>
            <button onClick={handleClick}>addCnt</button>
            <nav className={classes.toolbarTitle}>
                    <NavLink exact to="/chat">
                        聊天室
                    </NavLink>
                </nav>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    );
};
export default NavBar;

