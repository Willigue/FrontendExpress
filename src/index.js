import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom"
//import { App } from "./App";
import Router from './Router'
require('dotenv').config()

// ReactDom.render( <App /> , document.getElementById('root'))
ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter> 
    , document.getElementById('root'))