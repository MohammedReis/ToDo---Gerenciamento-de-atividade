import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../Views/Home';
import Task from '../Views/Task';
import QrCode from "../Views/QrCode";

function Routers(){
    return (
        <Router>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/task"  element={<Task/>}/>
            <Route path="/task/:id"  element={<Task/>}/>
            <Route path="/qrcode"  element={<QrCode/>}/>
        </Routes>
        </Router>
    )
}

export default Routers