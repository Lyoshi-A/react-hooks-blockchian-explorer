import React from 'react'
import {withRouter} from 'react-router'
import SearchBox from './search-box'
import logo from '../../logo.svg'

const TopMenu = () => {
    return  <div className="container-menu">
                <a href="/" className="logo"><img src={logo} className="App-logo" alt="logo" /></a>
                <div/>
                <SearchBox className="top-menu-block right"/>
            </div>
}

export default withRouter(TopMenu)