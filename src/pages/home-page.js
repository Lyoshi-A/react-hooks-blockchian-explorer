import React, { lazy } from 'react'
import Loader from '../components/loader'
import MoreIcon from '@material-ui/icons/MoreHorizRounded';
const ViewPriceChart = lazy(() => import('../views/chart/price-chart'));
const ViewBlockList = lazy(() => import('../views/block/block-list'));
const ViewTxList = lazy(() => import('../views/tx/tx-list'));

const HomePage = () => {
    return <>
        <div className="container-top">
            <div className="item-chart">
                <div className="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                  <Loader View={ViewPriceChart} />
                </div>
            </div>
            <div className="item-grid1">
                <Loader View={ViewBlockList} title={<>Latest Blocks <a href="/blocks"><MoreIcon /></a></>}/>
            </div>
            <div className="item-grid2">
                <Loader View={ViewTxList} />
            </div>
        </div>
    </>
}

export default HomePage