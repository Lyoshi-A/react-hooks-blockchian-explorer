import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useDataApi from "../../hooks/use-data-api";

const groupingUnits = [
    ['day', [1]],
    ['week', [1, 2]],
    ['month', [1, 2, 6]]
]

const getConfig = (asset) =>  {
    if (!asset.length) return null
    const res = asset.reduce((a,d) => {
        if (a.min > d.y) a.min = d.y
        if (a.max < d.y) a.max = d.y
        a.data.push([d.x*1000, parseFloat(parseFloat(d.y).toFixed(2))])
        return a
    },{data:[], min:Infinity , max:-Infinity})
    return {
        title: {
            text: 'BTC - Average USD market price across major bitcoin exchanges.'
        },
        tooltip: {
            readerFormat: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y %M %d', this.value);
                }
            },
            shared: true,
            split: false,
            headerFormat: '<b style="font-size:12px">{point.x:%Y-%m-%d}</b><br/>'
        },
        scrollbar: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                groupPadding: 0.05,
                marker: {
                    enabled: false
                },
                dataGrouping: {
                    approximation: 'sum',
                    forced: true,
                    groupPixelWidth: 26
                }
            },            series: {
                dataGrouping: {
                    units: groupingUnits,
                    groupPixelWidth: 16
                }
            }
        },
        yAxis: [{
            title: {
                text: 'Price'
            },
            max : res.max,
            min: res.min
        }],
        xAxis: [{
            title: {
                text: 'Date'
            },
            type: 'datetime',
        }],
        series: [{
                // type: 'column',
                name: 'Market Price (USD)',
                data: res.data,
                tooltip: {
                    valueSuffix: ' USD'
                }
        }],
        rangeSelector : {
            inputEnabled: false,
            floating: true,
            buttons: [{
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 3,
                text: '3m'
            }, {
                type: 'month',
                count: 6,
                text: '6m'
            }, {
                type: 'year',
                count: 1,
                text: '1y'
            }, {
                type: 'all',
                text: 'All'
            }]
        }
    }
}

const ViewPriceChart = ({loader}) => {
    const [{ data, isLoading, isError }] = useDataApi(
        'https://api.blockchain.info/charts/market-price?format=json&cors=true',
        null,
    );

    return <div className="block">
        {isError && <div className="container-red"><h3>Invalid request.</h3></div>}
        {isLoading ? (loader) : data ? data.values&&(<>
            Current BTC price: <h4 className="MuiTypography-root MuiTypography-h4">{data.values[data.values.length-1].y.toFixed(2)} USD</h4>
            <HighchartsReact
                type="StockChart"
                grouped range="day" noLegend
                highcharts={Highcharts}
                options={getConfig(data.values)}
                />
        </>):<div/>}
    </div>
}

export default ViewPriceChart