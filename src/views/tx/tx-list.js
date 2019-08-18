import React from 'react';
import Table from '../../components/table'
import {headRows, rowsCells} from './options'
import useDataApi from "../../hooks/use-data-api";

const ViewTxList = ({loader}) => {
    const [{ data, isLoading, isError }] = useDataApi(
        `https://blockchain.info/unconfirmed-transactions?format=json&cors=true`,
        null,
    );

    return <>
        {isError && <div className="container-red"><h3>Invalid request.</h3></div>}
        {isLoading ? (loader) : data ? (
            (data.txs)&&(<Table  title='Latest Transations' rows={rowsCells(data.txs)} count ={10} collsCount={7} header={headRows} />)
            ):<div/>}
    </>
}

export default ViewTxList