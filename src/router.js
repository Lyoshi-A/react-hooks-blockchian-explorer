import React from 'react'
import {Router, Switch, Route} from 'react-router'
import {createBrowserHistory} from 'history'
import Layout from './views/layout/layout'
import TopMenu from './views/layout/top-menu'

import HomePage from './pages/home-page'
import SearchPage from './pages/search-page'
import BlocksPage from './pages/blocks-page'
import BlockPage from './pages/block-page'
import TxPage from './pages/tx-page'
import NotFound from './pages/not-found'

const history = createBrowserHistory();

const AppLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout menu={<TopMenu/>}>
                <Component {...matchProps} />
            </Layout>
        )} />
    )
};

const AppRouter = () => {
    return <Router history={history} >
        <Switch>
            <AppLayoutRoute path='/' exact layout="Layout" component={HomePage}/>
            <AppLayoutRoute path='/search/:hash' exact layout="Layout" component={SearchPage}/>
            <AppLayoutRoute path='/blocks' exact layout="Layout" component={BlocksPage}/>
            <AppLayoutRoute path='/block/height/:height' exact layout="Layout" component={BlockPage}/>
            <AppLayoutRoute path='/block/hash/:hash' exact layout="Layout" component={BlockPage}/>
            <AppLayoutRoute path='/tx/:hash' exact layout="Layout" component={TxPage}/>
            <AppLayoutRoute layout="Layout" component={NotFound}/>
        </Switch>
    </Router>
}

export default AppRouter
