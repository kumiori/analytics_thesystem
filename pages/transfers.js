import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getTransfers } from './api/getData';
import { gql } from "@apollo/client";
import client from "../apollo-client.js";
import { ValueOverTime } from '../components/charts/transfers';

// import dynamicColors from "../utils/dynamiccolors.js";
function getDate(_timestamp) {
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit'}).format(_timestamp*1000)
        // , minute: '2-digit', second: '2-digit' 
    return date
}

export async function getExchanged() {
    const { data } = await client.query({
        query: gql`
      query Tokens {
    transfers(where: { from_not: null, to_not: null }) {
        valueExact
        timestamp
    token {
            id
            uri
        }
    }
}
`,
    });

    return data.transfers
}

export async function getAccounts() {
    const { data } = await client.query({
        query: gql`
      query Tokens {
            accounts {
                id
            }
        }
`,
    });

    return data.accounts
}

export async function getSacrificed() {
    const { data } = await client.query({
        query: gql`
      query Tokens {
  transfers(where: {to: null}) {
    id
    timestamp
    valueExact
  }
}
`,
    });

    return data.transfers
}

export async function getStaticProps() {
    var data = {};
    const tr = await getTransfers()
    const _sacr = await getSacrificed()
    const _exch = await getExchanged()
    const _acct = await getAccounts()

    data = {
        props: {
            transfers: tr,
            sacrifices: _sacr,
            exchanged: _exch,
            accounts: _acct
        }
    }
    // console.log(tr)
    return data;
}

function getTimeseries(transactions, steps = 100) {
    // get first and last timesteps, return discrete time
    const _ = require("lodash");            

    var _tmax = Math.max(...transactions.map((tx) => (Number(tx.timestamp))))
    var _tmin = Math.min(...transactions.map((tx) => (Number(tx.timestamp))))
    // var times = transactions.map((tx) => (Number(tx.timestamp)))

    return _.range(_tmin, _tmax, steps)
}

const cumulativeSum = arr => {
    const creds = arr.reduce((acc, val) => {
        let { sum, res } = acc;
        sum += val;
        res.push(sum);
        return { sum, res };
    }, {
        sum: 0,
        res: []
    });
    return creds.res;
};

// Linear interpolation
// http://hevi.info/do-it-yourself/interpolating-and-array-to-fit-another-size/
// changes the size of an given array to given fitCount and protects its fluctuation pattern
function linearInterpolate(before, after, atPoint) {
    return before + (after - before) * atPoint;
};

function interpolateArray(data, fitCount) {
    var newData = new Array();
    var springFactor = new Number((data.length - 1) / (fitCount - 1));
    newData[0] = data[0]; // for new allocation
    for (var i = 1; i < fitCount - 1; i++) {
        var tmp = i * springFactor;
        var before = new Number(Math.floor(tmp)).toFixed();
        var after = new Number(Math.ceil(tmp)).toFixed();
        var atPoint = tmp - before;
        newData[i] = this.linearInterpolate(data[before], data[after], atPoint);
    }
    newData[fitCount - 1] = data[data.length - 1]; // for new allocation
    return newData;
};


function timeData(transactions, label="Value over time", timearray=[]) {
    var values = [];
    
    if(timearray===[]) {
        var _times = getTimeseries(transactions)
    }
    else {
        var _times = timearray
    }
    var ts = [...new Set(transactions.map((tx, index) => (tx.timestamp)).sort())];
    
    var labels = ts.map(ti => { return getDate(ti) });

    var vs = transactions.map((tx, index) => ({ ts: tx.timestamp, vi: tx.valueExact }))

    for (let i = 0; i < ts.length; i++) {
        var cumulative = vs.filter(
            tx => tx.ts === ts[i]
        ).map(tx => (Number(tx.vi))).reduce((a, b) => { return a + b })
        values.push(cumulative)
    }

    const dataset = {
        label: label,
        data: cumulativeSum(values),
        // backgroundColor: 'black',
        borderColor: 'black',
    };
    return {
        props: { labels: labels, datasets: [dataset] }
    }
}

export default function Transfers({ transfers, sacrifices, exchanged, accounts }) {

    const _timeseries = getTimeseries(transfers)
    // console.log('timeseries', _timeseries)

    return (
        <main className=" py-20 w-2/3 min-h-screen mx-auto items-center justify-center">
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ValueOverTime transfers={transfers} label={'Transfers'} timeaxis = {_timeseries}/>
            </div>
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ValueOverTime transfers={sacrifices} label={'Sacrificed'} timeaxis = {_timeseries}/>
            </div>
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ValueOverTime transfers={exchanged} label={'Exchanged'} timeaxis={_timeseries} />
            </div>
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ScatterData transfers={transfers} label={'Scatter'} />
            </div>
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ScatterAccounts accounts={accounts} label={'Scattered accounts'} />
            </div>
        </main>
);
}

const cumulateSum = (sum => value => sum += value)(0);

// export 
function ScatterData({transfers, label}) {
    var _dataxy = transfers.map((tx, index) => ({ x: tx.timestamp / 1e9, y: tx.valueExact }))
    var _sorted = _dataxy.sort((a, b)=> Number(a.x) - Number(b.x))
    var _cumulated = _sorted.map((tx) => ({ x: tx.x, y: cumulateSum(Number(tx.y)) }))
    console.log('_sorted', _sorted)
    console.log('_cumulated', _cumulated)

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                type: 'linear',
                position: 'bottom'
            }
        },
    };

    const dataset = {
        label: label,
        data: _cumulated,
        borderColor: 'black',
    };

    const data = {
        datasets: [
            dataset
        ],
    };
    console.log('data', data)

    return (
        <div>
            <Scatter
                data={data}
                options={options}
                width={400}
                height={200}
            />
        </div>
    )
}


// export 
function ScatterAccounts({ accounts, label }) {
    var _addresses = accounts.map((tx, index) => tx.id )
    
    // console.log(_addresses.splice(0, 1))
    console.log(_addresses)

    const coords = _addresses.map((addr, idx) => {
        if (idx === 0) {
            return ({x: 0, y: 0})
        }
        else
            return ({ x: Math.random() - .5, y: Math.random() - .5 })
    })

    console.log(coords)
    // var _sorted = _dataxy.sort((a, b) => Number(a.x) - Number(b.x))
    // var _cumulated = _sorted.map((tx) => ({ x: tx.x, y: cumulateSum(Number(tx.y)) }))
    // console.log('_sorted', _sorted)
    // console.log('_cumulated', _cumulated)



    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                type: 'linear',
                position: 'bottom'
            }
        },
        plugins: {
            autocolors: false,
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 0.,
                        yMax: 0.,
                        borderColor: 'red',
                        borderWidth: 2,
                    }
                }
            }
        }
    };
    console.log(_addresses)

    const dataset = {
        label: label,
        data: coords,
        borderColor: 'black',
        backgroundColor: 'rgb(255, 99, 132)'
    };

    const data = {
        datasets: [
            dataset,
            {
                label: '0x0',
                data: [{ x: 0., y: 0. }],
                borderColor: 'black',
                borderWidth: 10,
                backgroundColor: 'black'
            }
        ],
    };
    // console.log('data', data)

    return (
        <div>
            <Scatter
                data={data}
                options={options}
                width={400}
                height={400}
            />
        </div>
    )
}

function ValueOverTime({ transfers, label='', timeaxis}) {
    const data = timeData(transfers, label = label, timeaxis)
    var _timeseries
    // console.log(transfers)
    // var ts = [...new Set(transfers.map((tx, index) => (tx.timestamp)).sort())];
    return (
        <div>
            {/* {console.log(data.props)} */}
            <Line
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}