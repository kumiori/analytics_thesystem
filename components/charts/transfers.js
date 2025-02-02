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
    
    const dataset = {
        label: 'Value over time',
        data: cumulativeSum(values),
        backgroundColor: 'black',
        borderColor: 'black',
        // borderWidth: 1
    };
    // return {
    //     props: { labels: labels, datasets: [dataset] }

    // 

    var _vts = [];
    var _vm = [];
    var _vb = [];
    var _vtr = [];

    var labels = [];
    var colors_vt = [];
    var colors_vts = [];
    var colors_vm = [];
    var colors_vb = [];
    var colors_vtr = [];

    for (let i = 0; i < transfers.length; i++) {
        if (i == 0) {
            _vt.push(Number(transfers[i].valueExact))
            if (transfers[i].from == null) { _vm.push(Number(transfers[i].valueExact)) } else { _vm.push(Number(0)) }
            if (transfers[i].to == null) { _vb.push(Number(transfers[i].valueExact)) } else { _vb.push(Number(0)) }
            if ((transfers[i].to != null) && (transfers[i].from != null)) { _vtr.push(Number(transfers[i].valueExact)) } else { _vtr.push(Number(0)) }
            labels.push(getDate(transfers[i].timestamp));
        }
        else if (transfers[i].timestamp == transfers[i - 1].timestamp) {
            _vt[_vt.length - 1] = _vt[_vt.length - 1] + Number(transfers[i].valueExact)
            if (transfers[i].from == null) { _vm[_vm.length - 1] = _vm[_vm.length - 1] + Number(transfers[i].valueExact) }
            if (transfers[i].to == null) { _vb[_vb.length - 1] = _vb[_vb.length - 1] + Number(transfers[i].valueExact) }
            if ((transfers[i].to != null) && (transfers[i].from != null)) { _vtr[_vtr.length - 1] = _vtr[_vtr.length - 1] + Number(transfers[i].valueExact) }
        } else {
            _vt.push(Number(transfers[i].valueExact) + _vt[_vt.length - 1])
            if (transfers[i].from == null) { _vm.push(Number(transfers[i].valueExact) + _vm[_vm.length - 1]) } else { _vm.push(Number(_vm[_vm.length - 1])) }
            if (transfers[i].to == null) { _vb.push(Number(transfers[i].valueExact) + _vb[_vb.length - 1]) } else { _vb.push(Number(_vb[_vb.length - 1])) }
            if ((transfers[i].to != null) && (transfers[i].from != null)) { _vtr.push(Number(transfers[i].valueExact) + _vtr[_vtr.length - 1]) } else { _vtr.push(Number(_vtr[_vtr.length - 1])) }
            labels.push(getDate(transfers[i].timestamp))
        }
    }
    for (let j = 0; j < _vt.length; j++) {
        _vts.push(_vm[j] - _vb[j])
        colors_vt.push("blue")
        colors_vts.push("gray")
        colors_vm.push("green")
        colors_vb.push("red")
        colors_vtr.push("orange")
    }
    const dataset_vt = {
        label: 'Value over time',
        data: _vt,
        backgroundColor: colors_vt,
        borderColor: colors_vt,
        borderWidth: 1
    };
    const dataset_vts = {
        label: 'Total Supply over time',
        data: _vts,
        backgroundColor: colors_vts,
        borderColor: colors_vts,
        borderWidth: 1
    };
    const dataset_vm = {
        label: 'Mints over time',
        data: _vm,
        backgroundColor: colors_vm,
        borderColor: colors_vm,
        borderWidth: 1
    };
    const dataset_vb = {
        label: 'Burns over time',
        data: _vb,
        backgroundColor: colors_vb,
        borderColor: colors_vb,
        borderWidth: 1
    };
    const dataset_vtr = {
        label: 'Transfers over time',
        data: _vtr,
        backgroundColor: colors_vtr,
        borderColor: colors_vtr,
        borderWidth: 1
    };

    return {
        props: { labels: labels, datasets: [dataset_vt, dataset_vts, dataset_vm, dataset_vb, dataset_vtr] }
    }
}
export function ValueOverTime({ transfers }) {
    const data = timeData(transfers)
    return (
        <div>
            <Line
                data={data.props}
                width={400}
                height={200}
            />
        </div>
    );
}