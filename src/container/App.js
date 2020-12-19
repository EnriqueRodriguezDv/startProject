import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HelloWorld from "../views/HelloWorld"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
            </Switch>
        </BrowserRouter>
    )
}

export default App