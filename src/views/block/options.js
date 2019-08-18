export const headRows = [
    { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
    { id: 'height', numeric: true, disablePadding: true, label: 'Height' },
    { id: 'hash', numeric: false, disablePadding: false, label: 'Hash' },
    { id: 'main_chain', numeric: false, disablePadding: false, label: 'Main Chain' },
];

export const rowsCells = rows => rows.reduce((ac,row) => {
    ac.push({
        index: row.hash,
        url: `/block/hash/${row.hash}`,
        cells:[
            {
                align: 'center',
                url: null,
                value: new Date(row.time*1000).toISOString().slice(0, 19).replace('T', ' '),
                name: 'time'
            },
            {
                align: 'center',
                url: null,//`/block/height/${row.height}`,
                value: row.height,
                name: 'height'
            },
            {
                align: 'center',
                url: null,//`/block/hash/${row.hash}`,
                value: row.hash,
                name: 'hash'
            },
            {
                align: 'center',
                url: null,
                value: row.main_chain?'Yes':'No',
                name: 'main_chain'
            },

        ]
    })
    return ac;
},[])
