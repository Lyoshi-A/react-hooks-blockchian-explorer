import React from 'react';
import useDataApi from "../../hooks/use-data-api";
import {format} from '../../utils/format'

const ViewBlock = ({loader, param}) => {
    const [{ data, isLoading, isError }] = useDataApi(
        `https://blockchain.info/rawtx/${param}?format=json&cors=true`,
        null,
    );
    return <>
        {isError && <div className="container-red"><h3>"{param}" is invalid transaction hash.</h3></div>}
        {isLoading ? (loader) :
            data ?
            (<div className="container-details">
                <div>
                    <div className="block-caption">BITCOIN BLOCKCHAIN</div>
                    <div className="block-title">TRANSACTION</div>
                    <div className="block-height">{format(data.tx_index,3,1)}</div>
                    <div className="block-hash">{format(data.hash,4)}</div>
                    <div className="block-txs">{format(data.inputs.length,3,1)}</div>
                    <div className="block-txs-label">INPUTS</div>
                    <div className="block-size">{format(data.size,3,1)} b</div>
                    <div className="block-time">{new Date(data.time*1000).toISOString().slice(0, 19).replace('T', ' ')}</div>
                    <div className="block-merkle-title">RELAYED BY</div>
                    <div className="block-merkle">{data.relayed_by}</div>
                </div>
                <div>
                    {/*{data.out.map(o=>JSON.stringify(o))}*/}
                </div>
             </div>)
           :<div/>}
    </>
}

export default ViewBlock

