import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './container/home/home'
import Gallery from './container/gallery/gallery'
import About from './container/aboutUs/aboutUs'


export default () => {
    return (
        <Switch>
            
            <Route path={"/gallery"} component={Gallery} />
            <Route path={"/about"} component={About} />    
                    
            <Route path={"/"} exact={true} component={Home} />
        </Switch>
    );
}