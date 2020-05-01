import React from 'react';
import SignIn from './container/signIn/signIn';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Routes from './routes';

export default() => {
  return(
    <>

    {/* components called */}
    <Switch>
      <Route path={"/signin"} exact component={SignIn} />
      <Route path={"/"} component={Routes} /> 
    </Switch>
    </>
  );
}


