import React, { useState, useEffect, useRef, Component } from 'react';
import * as d3 from 'd3';

class Bars extends Component {
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
        let url3 = "https://jsonplaceholder.typicode.com/posts";
        d3.json(url3).then(d => {
            const myArr = d.map(x => x.body.split(" ").length);
            // this.setState({ dataset: myArr });
        });

        Promise.all([
            fetch('/data/seeds.json').then(response => response.json()),
            fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
                .then(response => response.json())
        ]).then(data => {
            console.log('raw data', data)
            this.setState({ dataset: { cities: data[0], world: data[1] } });

        });



        // }
        // componentDidMount() {
        //     let url3 = "https://jsonplaceholder.typicode.com/posts";
        //   d3.json(url3).then(d => {
        //     const myArr = d.map(x => x.body.split(" ").length);
        //     this.setState({ dataset: myArr });
        //   });
        //   fetch('/data/seeds.json').then(response => response.json()).then(data => console.log(data));
        //   // Promise.all([
        //   //   fetch('/data/seeds.json').then(response => response.json()),
        //   //   fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        //   //       .then(response => {
        //   //         response.json() })
        //   //   ]).then(data => console.log('data', data))
        //   //   // .then(data =>  {
        //   //   //         const cities = data[0];
        //   //   //         const world = data[1];
        //   //   //         this.setState( {dataset: {cities: data[0], world: data[1]}} );
        //   //   //         console.log('dataset', this.state.dataset);
        //   //   //         console.log('boh')});

        //   d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv", function(data) {
        //     console.log('data', data);

        //     var x = d3.scaleLinear()
        //     .domain([0, 1000])
        //     // .range([0, width]);
        //     this.setState({ dataset: myArr });
        //     console.log('x', x);
        // })  

    }
    componentDidUpdate() {
        this.drawChart();
    }
    drawChart() {
        //   console.log(this.state.dataset);
        //https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/
        //   let arr = this.state.dataset;
        //limit array size to 10 to properly display bars and text
        console.log('this.state.data', this.state.dataset);

        let p = document.createElement('p');
        p.textContent = cities.map((v, k) => v.name);
        document.getElementById('output').appendChild(p)




        //   arr.length = 10;
        const svg = d3
            .select("body")
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("margin-left", 100);

        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 50)
            .attr("y", (d, i) => this.props.height - d * 30)
            .attr("width", 40)
            .attr("height", (d, i) => d * 30)
            .attr("fill", "red");

        svg
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(d => d)
            .attr("x", (d, i) => i * 50)
            .attr("y", (d, i) => this.props.height - d * 30);
    }
    render() {
        return <div id={"#" + this.props.id} />;
    }
}


export default function D3Simple() {

    return (
        <>
            <div id="output">
                <Bars height="500" />
            </div>
        </>
    )
}
