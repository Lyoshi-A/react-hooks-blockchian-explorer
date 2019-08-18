import React, { lazy } from 'react'
import Loader from "../components/loader";
const ViewTx = lazy(() => import('../views/tx/tx'));

const TxPage = ({match}) => {
    return <div>
        <Loader View={ViewTx} param={match.params.hash}/>
    </div>
}

export default TxPage