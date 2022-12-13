import React from "react";
import { Switch, Route, Redirect } from 'react-router'
import Home from '../Home/Home'
import User from '../User/User'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Redirect from="*" to='/' />
    </Switch>