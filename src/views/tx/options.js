export const headRows = [
    { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
    { id: 'hash', numeric: false, disablePadding: false, label: 'Hash' },
    { id: 'inputs', numeric: false, disablePadding: false, label: 'Inputs' },
    { id: 'weight', numeric: false, disablePadding: false, label: 'Weight' },
    { id: 'size', numeric: false, disablePadding: false, label: 'Size' },
    { id: 'tx_index', numeric: false, disablePadding: false, label: 'TX Index' },
    { id: 'lock_time', numeric: false, disablePadding: false, label: 'Lock Time' },
];

export const rowsCells = rows => {
    return rows.reduce((ac,row) => {
        ac.push({
            index: row.hash,
            url: `/tx/${row.hash}`,
            cells:[
                {
                    align: 'center',
                    url: null,
                    value: new Date(row.time*1000).toISOString().slice(0, 19).replace('T', ' '),
                    name: 'time'
                },
                {
                    align: 'center',
                    url: null,//`/tx/hash/${row.hash}`,
                    value: row.hash,
                    name: 'hash'
                },
                {
                    align: 'center',
                    url: null,
                    value: row.inputs.length,
                    name: 'inputs'
                },
                {
                    align: 'center',
                    url: null,
                    value: row.weight,
                    name: 'weight'
                },
                {
                    align: 'center',
                    url: null,
                    value: row.size,
                    name: 'size'
                },
                {
                    align: 'center',
                    url: null,
                    value: row.tx_index,
                    name: 'tx_index'
                },
                {
                    align: 'center',
                    url: null,
                    value: new Date(row.time*1000).toISOString().slice(0, 19).replace('T', ' '),
                    name: 'lock_time'
                },
            ]
        })
        return ac;
    },[])
}
