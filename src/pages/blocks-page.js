import React, { lazy } from 'react'
import Loader from '../components/loader'
const ViewBlockList = lazy(() => import('../views/block/block-list'));

const HomePage = () => {
    return <Loader View={ViewBlockList} count={25} title={'Blocks'}/>
}

export default HomePage