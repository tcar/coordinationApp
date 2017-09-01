import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import grid from './public/css/grid.css'
import style from './public/css/style.css'


import Routes from './routes'
const root = document.getElementById('root')

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store ={store}>
         <Routes />
         </Provider>
    </MuiThemeProvider>
         ,root
)   