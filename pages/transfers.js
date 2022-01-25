import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { getTransfers } from './api/getData';

// import dynamicColors from "../utils/dynamiccolors.js";
// import getDate from '../pages/transfers';

export async function getStaticProps() {
    var data = {};
    const tr = await getTransfers()
    data = { props: { transfers: tr } }
    console.log(tr)
    return data;
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


function timeData(transfers) {
    var _vt = [];
    var values = [];
    var colors = [];
    var colorsborder = [];
    console.log(transfers)

    var ts = [...new Set(transfers.map((tx, index) => (tx.timestamp)).sort())];
    var labels = ts;
    var vs = transfers.map((tx, index) => ({ ts: tx.timestamp, vi: tx.valueExact }))
    // console.log(ts)
    // console.log('length', ts.length)
    for (let i = 0; i < ts.length; i++) {
        console.log('ts[i]', ts[i])
        var cumulative = vs.filter(
            tx => tx.ts === ts[i]
        ).map(tx => (Number(tx.vi))).reduce((a, b) => { return a + b })
        console.log('cumulative', cumulative)
        values.push(cumulative)
    }
    // console.log('values', values)
    // console.log(ts)
    // console.log('cumsum', cumulativeSum(values))

    const dataset = {
        label: 'Value over time',
        data: cumulativeSum(values),
        // backgroundColor: 'black',
        borderColor: 'black',
    };
    return {
        props: { labels: labels, datasets: [dataset] }
    }
}

export default function Transfers({ transfers }) {
    return (
        <main className=" py-20 w-2/3 min-h-screen mx-auto items-center justify-center">
            <div className="mt-10 shadow-lg border rounded-xl p-4 bg-white dark:bg-gray-800 relative overflow-hiddenr">
                <ValueOverTime transfers={ transfers } />
            </div>
        </main>
    );
}


function ValueOverTime({ transfers }) {
    const data = timeData(transfers)
    console.log(transfers)
    var ts = [...new Set(transfers.map((tx, index) => (tx.timestamp)).sort())];
    return (
        <div>
            {/* {console.log(data.props)} */}
            <Line
                // labels={ [1, 2, 3, 4, 5]}
                // data={ [1, 2, 3, 4, 5] }
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}