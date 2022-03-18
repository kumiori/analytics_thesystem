import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Map() {
    const d3map = useRef();
    const [cities, setCities] = useState("");
    const [world, setWorld] = useState("");

    useEffect( ()=>{
        Promise.all([
            fetch('/data/seeds.json').then(response => response.json()),
            fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
                .then(response => response.json())
        ]).then(data =>  {
                console.log('raw data', data);
                const cities = data[0];
                const world = data[1];
                // console.log(cities);
                let p = document.createElement('p');
                p.textContent = cities.map((v, k) => v.name);
                document.getElementById('output').appendChild(p)
                const margin = {top: 50, right: 30, bottom: 30, left: 30}

                // if (typeof window !== "undefined") {
                const width = parseInt(d3.select('#map').style('width'))
                const height = parseInt(d3.select('#map').style('height'))
                console.log('width', width)
                console.log('height', height)
                
                const svg = d3.select(d3map.current)
                    .attr('width', width)
                    .attr('height', height)
                    // .style('background-color', 'black')

                svg.append("g")
                    // .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
                
                var x = d3.scaleLinear()
                    .domain([0, 100])
                    .range([ 0, width ]);
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
                
                var y = d3.scaleLinear()
                    .domain([0, 100])
                    .range([ height, 0]);
                svg.append("g")
                    .call(d3.axisLeft(y));
                
                const _data = cities.map(c => [{lat : c.lat, lon: c.lon}])
                  // Add dots
                  svg.append('g')
                    .selectAll("dot")
                    .data(_data).enter()
                    .append("circle")
                    .attr("cx", d => x(d.lat) )
                    .attr("cy", d => y(d.lon) )
                    .attr("r", 1.5)
                    .style("fill", "#69b3a2")
                    console.log(d3map.current)
                    console.log(cities)
                    console.log('_data', _data)
                // }
        });
        // .catch(err => {

        // });
        console.log('loop?')

    })

return (
    <>
        <div id="output"></div>
        <div id="map" style={{ width: 800, height: 600 }} ref={ d3map }></div>
    </>
  )
}
