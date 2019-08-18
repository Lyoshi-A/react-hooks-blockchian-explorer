import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
// import Footer from './footer'

function Layout ({children, menu}) {
    return <div className="container">
        {menu}
        {children}
        {/*<Footer/>*/}
    </div>
}

Layout.propTypes = {
    children: PropTypes.node,
    menu: PropTypes.element.isRequired
}

export default withRouter(Layout)
