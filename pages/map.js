import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Map() {
    const d3map = useRef();

    useEffect(()=>{
        // const res = await Promise.all([
        //     fetch('data/seeds.json').then(response => response.json()),
        //     fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then(response => response.json()),
        // ].map(promise => promise.catch(error => error)))
        Promise.all([
            fetch('data/seeds.json').then(response => response.json()),
            fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
                .then(response => response.json())
        ]).then(data =>  {
            // data.forEach(element => {
            //     console.log(element)
                console.log(data);
                const worlddata = data[1];
                const citydata = data[0];

                console.log('worlddata', worlddata);
                console.log('citydata', citydata);

                let p = document.createElement('p');
                p.textContent = citydata.map((v, k) => v.name);
                document.getElementById('output').appendChild(p)
            // });
        }).catch(err => {

        });
        const margin = {top: 50, right: 30, bottom: 30, left: 30}
        // console.log(res)

        if (typeof window !== "undefined") {
            const width = parseInt(d3.select('#map').style('width'))
            const height = parseInt(d3.select('#map').style('height'))
            console.log('width', width)
            console.log('height', height)
            console.log('background-color', d3.select('#map').style('background-color'))

            const svg = d3.select(d3map.current)
                            .attr('width', width)
                            .attr('height', height)
                            .style('background-color', 'black')
                            .append('g')
                                .attr('transform', 'translate(' + margin.left + ','
                                    + margin.top + ')');
            var projection = d3.geoMercator()
                .center([0,20])                // GPS of location to zoom on
                .scale(99)                       // This is like the zoom
                .translate([ width/2, height/2 ]);
            console.log('background-color', d3.select('#map').style('background-color'))
            console.log(d3map.current)
        }
    })

return (
    <>
        <div id="output"></div>
        <div id="map" style={{ width: 300, height: 200 }} ref={d3map}></div>
    </>
  )
}
