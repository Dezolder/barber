import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Menu from "./layouts/menu";
import Masters from "./layouts/masters";
import Booking from "./layouts/record";
import Service from "./layouts/service";
import Time from "./layouts/time";

const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/select-master" component={Masters} />
            <Route path="/select-time" component={Time} />
            <Route path="/select-service" component={Service} />
            <Route path="/create-record" component={Booking} />
            <Redirect to="/menu" />
        </Switch>
    );
};

export default App;
