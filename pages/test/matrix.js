import React, { useState } from 'react';

function MatrixGame(props) {
    var computeMatrix = function (rows = 3, cols = 4) {
        let arr = Array(rows).fill()
            .map(() => Array.from(
                { length: cols },
                () => { return Math.round(Math.random()*10) })
            )
        console.log('arr', arr);

        return arr;
    };

    const [matrix, setMatrix] = useState(() => {
        return computeMatrix(3, 4);
    });


    var test = matrix.map((v, k) => { return (<tr key={k}><td>{v}</td></tr>) })
    // {/* matrix.map(v => {v.map(w => { return <input type="radio" /> })}) */}
    console.log('matrix', matrix)
    return (

        <table>
            <thead></thead>
            <tbody>
                {test}
            </tbody>
        </table>
    );

}

export default function Tricks() {
    return (
        <MatrixGame />
    );
}
