import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Map() {
    const d3map = useRef();

    useEffect(()=>{
        fetch('data/seeds.json')
        .then(response => response.json())
        .then(data=>{
            console.log(data)
        })
    
        const margin = {top: 50, right: 30, bottom: 30, left: 30}

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

            console.log('background-color', d3.select('#map').style('background-color'))
            console.log(d3map.current)
        }
    })

return (
    <div id="map" style={{width: 300, height: 200}} ref={d3map}>
      
    </div>
  )
}
