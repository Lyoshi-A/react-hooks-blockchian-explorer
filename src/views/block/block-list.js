import React from 'react';
import Table from '../../components/table'
import useDataApi from "../../hooks/use-data-api";
import {headRows, rowsCells} from './options'

const ViewBlockList = ({loader, count=10, title}) => {
    const current = new Date().getTime();
    const [{ data, isLoading, isError }] = useDataApi(
        `https://blockchain.info/blocks/${current}?format=json&cors=true`,
        {},
    );

    return <>
        {isError && <div className="container-red"><h3>Invalid request.</h3></div>}
        {isLoading ? (loader) : data ?  (
            <Table title={title} rows={rowsCells(data.blocks?data.blocks:[])} count ={count} collsCount={4} header={headRows} />
            ):<div/>}
    </>
}

export default ViewBlockList

