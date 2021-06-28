import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants'
import '../styles/common.css'
const Router = () =>
    <BrowserRouter>
        <Switch>
            {routes.map(r =>
                <Route key={r.name} path={r.path} name={r.name} component={r.component} />
            )}
        </Switch>
    </BrowserRouter>


export default Router;