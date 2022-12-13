import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import { HashRouter } from 'react-router-dom'
import Nav from '../template/Nav/Nav'
import Logo from '../template/Logo/Logo'
import Footer from '../template/Footer/Footer'

import Routes from './Routes'


export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />

        </div>
    </HashRouter>