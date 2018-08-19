import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link className="tab" to="/"> Home </Link>
                        <Link className="tab" to="/FirstComponent"> Page1 </Link>
                        <Link className="tab" to="/SecondComponent"> Page2 </Link>
                        <Link className="tab" to="/Weather"> Weather </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}