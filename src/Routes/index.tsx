import React from 'react';
import {
    BrowserRouter, Switch,Route
} from 'react-router-dom';
import Home from '../Pages/Home/index'
import User from '../Pages/User/index'
import Play from '../Pages/Play/index'
import MenuGlobal from '../components/menuGlobal'

const Routes: React.FC = () => (
    <BrowserRouter>

        <Switch>
            <MenuGlobal>    
                <Route path="/" component={Home} exact />
                <Route path="/play" component={Play} exact />
                <Route path="/user" component={User } exact />
            </MenuGlobal>

        </Switch>
    </BrowserRouter>
);
export default Routes;