import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import dynamicColors from "../../utils/dynamiccolors.js";
import getDate from "../../utils/getdate";

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
export default function timeData(transfers) {
    var _vt = [];
    var values = [];
    var colors = [];
    var colorsborder = [];
    var ts = [...new Set(transfers.map((tx, index) => (tx.timestamp)).sort())];
    var labels = ts;
    var vs = transfers.map((tx, index) => ({ts: tx.timestamp, vi: tx.valueExact}))
    console.log(ts)
    console.log('length', ts.length)
    for (let i = 0; i < ts.length; i++) {
        console.log('ts[i]', ts[i])
        var cumulative = vs.filter(
            tx => tx.ts === ts[i]
        ).map(tx => (Number(tx.vi))).reduce((a, b) => { return a + b })
            // .reduce((sum, record) => sum + tx.valueExact)
        console.log('cumulative', cumulative)
        values.push(cumulative)
    }
    console.log('values', values)
    console.log(ts)
    console.log('cumsum', cumulativeSum(values))
    // for (let i = 0; i < transfers.length; i++) {
    //     // totalS.push(transfers[i].totalSupply.valueExact);
    //     labels.push(transfers[i].timestamp);
    //     if  (i==0)
    //         _vt.push(Number(transfers[i].valueExact))
    //     else
    //         _vt.push(Number(_vt[i-1])+Number(transfers[i].valueExact))

    //     console.log(transfers[i].timestamp)
    //     var color = dynamicColors(-10);
    //     colors.push(color[1])
    //     // colorsborder.push(color[0])
    // }
    const dataset = {
        label: 'Value over time',
        data: cumulativeSum(values),
        backgroundColor: 'black',
        borderColor: 'black',
        // borderWidth: 1
    };
    // console.log(_vt)
    return {
        props: { labels: labels, datasets: [dataset] }
        // props: { labels: labels }
    }
}
export function ValueOverTime({ transfers }) {
    const data = timeData(transfers)
    console.log(data.props.labels)
    return (
        <div>
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