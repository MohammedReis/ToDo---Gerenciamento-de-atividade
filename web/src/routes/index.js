import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../Views/Home';
import Task from '../Views/Task';

function Routers(){
    return (
        <Router>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/task"  element={<Task/>}/>
        </Routes>
        </Router>
    )
}

export default Routers