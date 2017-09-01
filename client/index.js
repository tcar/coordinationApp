import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import grid from './public/css/grid.css'
import style from './public/css/style.css'

import Routes from './routes'
const root = document.getElementById('root')

ReactDOM.render(
    <MuiThemeProvider>
         <Routes />
    </MuiThemeProvider>
         ,root
)   