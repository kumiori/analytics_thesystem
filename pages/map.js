import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Map() {
    const d3map = useRef();
    const [cities, setCities] = useState("");
    const [world, setWorld] = useState("");

    useEffect( ()=>{
        Promise.all([
            fetch('data/seeds.json').then(response => response.json()),
            fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
                .then(response => response.json())
        ]).then(data =>  {
                console.log('boh')
                // setCities(data[0]);
                const cities = data[0];
                const world = data[1];
                console.log(cities);
                let p = document.createElement('p');
                p.textContent = cities.map((v, k) => v.name);
                document.getElementById('output').appendChild(p)
                const margin = {top: 50, right: 30, bottom: 30, left: 30}

                if (typeof window !== "undefined") {
                    const width = parseInt(d3.select('#map').style('width'))
                    const height = parseInt(d3.select('#map').style('height'))
                    console.log('width', width)
                    console.log('height', height)
                    
                    var projection = d3.geoMercator()
                        .center([0, 20])                // GPS of location to zoom on
                        .scale(99)                       // This is like the zoom
                        .translate([ width/2, height/2 ]);
                    console.log('cities', cities);

                    var valueExtent = d3.extent(cities, d => +d.n)
                    var size = d3.scaleSqrt()
                        .domain(valueExtent)  // What's in the data
                        .range([ 3, 10])  // Size in pixel

                    const svg = d3.select(d3map.current)
                        .attr('width', width)
                        .attr('height', height)

                    svg.append("g")
                            .attr('transform', 'translate(' + margin.left + ','
                                + margin.top + ')')
                        .selectAll("path")
                        .data(world.features)
                        .enter()
                        .append("path")
                          .attr("fill", "#b8b8b8")
                          .attr("d", d3.geoPath()
                              .projection(projection)
                          )
                        .style("stroke", "none")
                        .style("opacity", 1.)

                    svg
                        .selectAll("myCircles")
                        .data(data.sort((a,b) => +b.n - +a.n ).filter((d,i) => i<1000))
                        .enter()
                        .append("circle")
                          .attr("cx", d => projection([+d.lon, +d.lat])[0])
                          .attr("cy", d => projection([+d.lon, +d.lat])[1])
                          .attr("r", d => size(+d.n))
                          .style("fill", "red")
                          .attr("stroke", d => {if(d.n>3) "white"; else "none" })
                          .attr("stroke-width", .3)
                          .attr("fill-opacity", .3)

                    // Add title and explanation
                    svg
                        .append("text")
                        .attr("text-anchor", "end")
                        .style("fill", "red")
                        .attr("x", width - 10)
                        .attr("y", height - 30)
                        .attr("width", 90)
                        .html("The System find its own seeds")
                        .style("font-size", 14)

                    // Add legend: circles
                    var valuesToShow = [1, 10]
                    var xCircle = 40
                    var xLabel = 90
                    svg
                        .selectAll("legend")
                        .data(valuesToShow)
                        .enter()
                        .append("circle")
                        .attr("cx", xCircle)
                        .attr("cy", d=> height - size(d) )
                        .attr("r", d=> size(d))
                        .style("fill", "none")
                        .attr("stroke", "white")
                        .attr("stroke-width", .3)

                    // Add legend: segments
                    svg
                        .selectAll("legend")
                        .data(valuesToShow)
                        .enter()
                        .append("line")
                        .attr('x1', d=> xCircle + size(d) )
                        .attr('x2', xLabel)
                        .attr('y1', d=> height - size(d) )
                        .attr('y2', d=> height - size(d) )
                        .attr('stroke', 'white')
                        .style('stroke-dasharray', ('3,3'))
                        .attr("stroke-width", .3)

                    // Add legend: labels
                    svg
                        .selectAll("legend")
                        .data(valuesToShow)
                        .enter()
                        .append("text")
                        .attr('x', xLabel)
                        .attr('y', d=> height - size(d) )
                        .text( d=> d )
                        .style("font-size", 10)
                        .attr("stroke", "gray")
                        .attr('alignment-baseline', 'middle')

                //     console.log('background-color', d3.select('#map').style('background-color'))
                    console.log('projection', projection)
                    console.log('valueExtent', valueExtent)
                    console.log(d3map.current)
                }
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
