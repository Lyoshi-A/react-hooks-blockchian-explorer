import React from 'react';
import Table from '../../components/table'
import useDataApi from "../../hooks/use-data-api";
import {headRows, rowsCells} from '../tx/options'
import {format} from '../../utils/format'

const ViewBlock = ({loader, param}) => {
    const [{ data, isLoading, isError }] = useDataApi(
        `https://blockchain.info/rawblock/${param}?format=json&cors=true`,
        null,
    );
    return <>
        {isError && <div className="container-red"><h3>"{param}" is invalid block hash.</h3></div>}
        {isLoading ? (loader) : data ? (
            <div className="container-details">
                <div>
                    <div className="block-caption">BITCOIN BLOCKCHAIN</div>
                    <div className="block-title">BLOCK</div>
                    <div className="block-height">{format(data.height,3,1)}</div>
                    <div className="block-hash">{format(data.hash,4)}</div>
                    <div className="block-txs">{format(data.n_tx,3,1)}</div>
                    <div className="block-txs-label">transactions</div>
                    <div className="block-size">{format(data.size,3,1)} b</div>
                    <div className="block-time">{new Date(data.time*1000).toISOString().slice(0, 19).replace('T', ' ')}</div>
                    <div className="block-subgrid">
                        <div className="block-subgrid-col">
                            <div className="block-index-label">INDEX</div>
                            <div className="block-index">{format(data.block_index,3, 1)}</div>
                        </div>
                        <div className="block-subgrid-col">
                            <div className="block-nonce-label">NONCE</div>
                            <div className="block-nonce">{format(data.nonce,5,1)}</div>
                        </div>
                    </div>
                    <div className="block-merkle-title">MERKLE ROOT</div>
                    <div className="block-merkle">{format(data.mrkl_root,4)}</div>
                </div>
                {data.tx&&<Table  title='Transations' rows={rowsCells(data.tx)} count ={20} collsCount={7} header={headRows} />}
            </div>
            ):<div/>}
    </>
}

export default ViewBlock

