import React, { lazy } from 'react'
import Loader from "../components/loader";
const ViewBlock = lazy(() => import('../views/block/block'));

const BlockPage = ({match}) => {
    return <div>
           <Loader View={ViewBlock} param={match.params.hash}/>
        </div>
}

export default BlockPage