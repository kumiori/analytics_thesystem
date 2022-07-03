import React, { useState, useEffect, useRef, Component } from 'react';
import * as d3 from 'd3';

class Map extends Component {
  // d3map = useRef();

  constructor(props) {
    super(props);
    this.state = {
      dataset: {}
    };
  }

  componentDidMount() {
    //get placeholder data and count the words in the body of each element
    //then update the state with an array that has all these counts
    //we will make the bar charts using this array
    Promise.all([
      fetch('/data/seeds.json').then(response => response.json()),
      fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(response => response.json())
    ]).then(data => {
      console.log('raw data', data)
      this.setState({ dataset: { cities: data[0], world: data[1] } });

    });

  }
  componentDidUpdate() {
    this.drawChart();
  }
  drawChart() {
    //   console.log(this.state.dataset);
    //https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/
    //   let arr = this.state.dataset;
    const margin = {top: 100, right: 30, bottom: 30, left: 30}
    console.log('this.state.data', this.state.dataset);
    var cities = this.state.dataset.cities;
    var world = this.state.dataset.world;
    console.log('cities', cities);
    console.log('world', world);

    var projection = d3.geoMercator()
      .center([0, 20])                // GPS of location to zoom on
      .scale(80)                       // This is like the zoom
      .translate([ this.props.width/2, this.props.height/2 ]);

    var valueExtent = d3.extent(cities, d => +d.n)
    var size = d3.scaleSqrt()
      .domain(valueExtent)  // What's in the data
      .range([ 3, 7])  // Size in pixel

    const svg = d3
      .select(".map-wrapper")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height)
    //   .style("background-color", "#4a4a4a")
      .style("background-color", "white")
      .style("margin-left", -130)
    //   .style("margin-top", 100);

    svg.append("g")
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
      .style("background-color", "black")

    //   map circles
  svg
      .selectAll("myCircles")
      .data(cities.sort((a,b) => +b.n - +a.n ).filter((d,i) => i<1000))
      .enter()
      .append("circle")
        .attr("cx", d => projection([+d.lon, +d.lat])[0])
        .attr("cy", d => projection([+d.lon, +d.lat])[1])
        .attr("r", d => size(+d.n))
        .style("fill", "red")
        .attr("stroke", d => {if(d.n>3) "white"; else "none" })
        .attr("stroke-width", .9)
        .attr("fill-opacity", .5)

  svg
      .append("text")
      .attr("text-anchor", "end")
      .style("fill", "white")
      .attr("x", this.props.width/2+90)
      .attr("y", this.props.height - 30)
      .attr("width", 90)
      .html("The System finds its own seeds")
      .style("font-size", 14)

  var valuesToShow = [1, 10]
  var xCircle = 230
  var xLabel = 290
//   label circles
  svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("circle")
      .attr("cx", xCircle)
      .attr("cy", d=>  .7*this.props.height - size(d) )
      .attr("r", d=> size(d))
      .style("fill", "red")
    .attr("fill-opacity", .5)
    .attr("stroke", "black")
      .attr("stroke-width",  d=> size(1/d))

      svg
      .selectAll("pole")
      .data([0, 0])
      .enter()
      .append("circle")
      .attr("cx", this.props.width/2)
      .attr("cy",  this.props.height-20)
      .attr("r", 5)
      .style("fill", "white")
    .attr("fill-opacity", 1)
    // .attr("stroke", "black")
    //   .attr("stroke-width", 1)

      // Add legend: segments
  svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("line")
      .attr('x1', d=> xCircle  )
      .attr('x2', xLabel)
      .attr('y1', d=>  .7*this.props.height - 2*size(d) )
      .attr('y2', d=>  .7*this.props.height - 2*size(d) )
      .attr('stroke', '#4a4a4a')
      .style('stroke-dasharray', ('3,3'))
      .attr("stroke-width", .7)

  // Add legend: labels
  svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("text")
      .attr('x', xLabel)
      .attr('y', d=>  .7*this.props.height - 2*size(d) )
      .text( d=> d )
      .style("font-size", 10)
      .attr("stroke", "#4a4a4a")
      .attr('alignment-baseline', 'middle')

  }
  render() {
    return (
    <div style={{backgroundColor:'black'}} id={"#" + this.props.id}></div>
    );
  }
}

export default function SystemMap() {

  return (
    <>
      <div id="domain"
        style={{
            backgroundColor: 'lightpink',
            resize: 'horizontal',
            overflow: 'hidden',
            width: '900px',
            height: 'auto',
          }}
        >
        <Map height="600" width="900"/>
      </div>
    </>
  )
}
