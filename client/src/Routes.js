import React from "react";
import { Route, Switch } from 'react-router';
import Home from "./Scenes/Home";
import MensCuts from "./Scenes/MensCuts";
import WomensCuts from "./Scenes/WomensCuts";
import {BrowserRouter} from "react-router-dom";
import CutProfile from "./Scenes/CutProfile";
import Stylist from "./Scenes/Stylist";
import SignUp from "./Scenes/SignUp";


const Routes = () =>{


    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=><Home/> }/>
            <Route exact path="/cuts/men" component={()=><MensCuts/>}/>
            <Route exact path="/cuts/women" component={()=><WomensCuts/>}/>
            <Route exact path="/cuts/men/:title" component={()=><CutProfile/>}/>
            <Route exact path="/cuts/women/:title" component={()=><CutProfile/>}/>
            <Route exact path="/stylist/:id" component={()=><Stylist/>}/>
            <Route exact path="/signup" component={()=><SignUp/>}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routes;