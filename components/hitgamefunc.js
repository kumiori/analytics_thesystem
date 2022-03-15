import char from './chars';
import Link from "next/link";
import $ from 'jquery';
import React, { useEffect, useState, useRef } from "react";

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

var txt = "CODEPEN RADIO !!";
txt = txt.toUpperCase();
var pos = 0;
var spc = 5;
var scroll = [];
var number1 = 19; // rows 
var number2=40; // cols
var number3=7;
var number4=6;
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
console.log('scroll len', l);
console.log('scroll', scroll);

export default function HitGame(props) {
    const radioPanel = useRef(null);
    // use effect
    function computeRadio() {
        var s = '';
        var t = [];
        for (var y = 0; y < number1; y++) {
            s += '<div>';
            t[y] = y;
            for (var x = 0; x < number2; x++) {
                s += '<input type="radio">';
            }
            s += '</div>';
        }
        return s;
    };

    const [string, setString] = useState(() => {
        return computeRadio();
    });
    console.log('string', string);

    function shiftRadio() {
        for (var y = 0; y < number2; y++) {
            for (var x = 0; x < number3; x++) {
                if (pos + y >= l)
                    // rows vs. columns  
                    $('div').eq(number4 + x).children().eq(y).attr('checked', false);
                else
                    $('div').eq(number4 + x).children().eq(y).attr('checked', scroll[x][pos + y]);
            }
        }
        pos++;
        if (pos >= l) pos = 0;
    }
    function renderRadio () {
        let radio
        for (let y = 0; y < number1; y++) {
            // const element = array[index];
            radio+=<tr key={y} />;
                for(var x = 0; x < number2; x++) {
                    // radio+=<input type="radio"/>
                }
            // radio+=</tr>;
            console.log('rad', radio);
        }
        // for(var y = 0; y < number1; y++) {
        //    radio+=<tr key={y}>;
        //     {/* for(var x = 0; x < number2; x++) {
        //         <input type="radio"/>
        //     } */}
        //     </tr>
        //    si=si+4
        // }    
        return radio  
     }
    // jQuerycode = () => {
    //     $(function () {
    //         $('body').append(s);
    //         setInterval(, 100);
    //     });
    // };
    renderRadio()
    console.log('radioPanel', radioPanel)
    return (
        <div 
            ref={ radioPanel }
            dangerouslySetInnerHTML={{ __html: string }}
        />
        // <div  />
    );

}
// {/* <div className=”ellipsis-click” onClick={this.handleToggle}> */ }

// };
    // jQuerycode2 = () => {
    //     $('#btn').click(function () {
    //         $('input').toggleClass('show');
    //         $('div').toggleClass('bg');
    //     });
    // };