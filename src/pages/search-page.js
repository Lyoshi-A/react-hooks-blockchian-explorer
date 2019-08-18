import React, { lazy } from 'react'
import Loader from "../components/loader";
const ViewBlock = lazy(() => import('../views/block/block'));
const ViewTx = lazy(() => import('../views/tx/tx'));

const BlockPage = ({match}) => {
    return <div>
        <Loader View={ViewBlock} param={match.params.hash}/>
        <Loader View={ViewTx} param={match.params.hash}/>
    </div>
}

export default BlockPage