import char from './chars';
import React from "react";
import Link from "next/link";
import $ from 'jquery';

var cw = {
    A: 10, B: 10, C: 9,
    D: 10, E: 9, F: 9,
    G: 10, H: 10, I: 5,
    J: 9, K: 9, L: 9,
    M: 10, N: 9, O: 10,
    P: 10, Q: 10, R: 10,
    S: 9, T: 9, U: 10,
    V: 10, W: 11, X: 10,
    Y: 9, Z: 9, ex: 5
};

// console.log(char)
// // console.log(cw)

var txt = "CODEPEN RADIO !!";
txt = txt.toUpperCase();
var pos = 0;
var spc = 5;
var scroll = [];
// var i, j, t, w, v;
for (var j = 0; j < 7; j++) {
    scroll[j] = [false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false];
}
for (var i = 0; i < txt.length; i++) {
    var t = txt.charAt(i);
    if (t == " ") {
        for (v = 0; v < spc; v++) {
            scroll[0].push(false);
            scroll[1].push(false);
            scroll[2].push(false);
            scroll[3].push(false);
            scroll[4].push(false);
            scroll[5].push(false);
            scroll[6].push(false);
        }
        continue;
    }
    else if (t == "!") t = "ex";
    var w = cw[t];
    for (j = 0; j < 7; j++) {
        for (var v = 0; v < w; v++) {
            if (char[t].charAt(j * w + v) == "#") scroll[j].push(true);
            else scroll[j].push(false);
        }
    }
}
var l = scroll[0].length;

export default class HitGame extends React.Component {
    constructor() {
        super();
    }

    jQuerycode = () => {
        $(function () {
            s = '';
            t = [];
            for (y = 0; y < 19; y++) {
                s += '<div>';
                t[y] = y;
                for (x = 0; x < 40; x++) {
                    s += '<input type="radio">';
                }
                s += '</div>';
            }
            $('body').append(s);
            setInterval(function () {
                for (y = 0; y < 40; y++) {
                    for (x = 0; x < 7; x++) {
                        if (pos + y >= l)
                            $('div').eq(6 + x).children().eq(y).attr('checked', false);
                        else
                            $('div').eq(6 + x).children().eq(y).attr('checked', scroll[x][pos + y]);
                    }
                }
                pos++;
                if (pos >= l) pos = 0;
            }, 100);
        });
    };

    // jQuerycode2 = () => {
    //     $('#btn').click(function () {
    //         $('input').toggleClass('show');
    //         $('div').toggleClass('bg');
    //     });
    // };

    render() {
    return ('');
}

}

{/* <div className=”ellipsis-click” onClick={this.handleToggle}> */ }

// };
