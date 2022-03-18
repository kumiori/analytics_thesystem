import React, {  Component } from 'react';
import * as d3 from 'd3';

class SeedsList extends Component {
  // d3map = useRef();

  constructor(props) {
    super(props);
    this.state = {
      dataset: {}
    };
  }

  componentDidMount() {

    fetch('/data/seeds.json').then(response => response.json())
    .then(data => {
      console.log('raw data', data)
      var seedNames = data.map((v, k) => v.name)
      this.setState({ dataset: seedNames });
    });


  }
  componentDidUpdate() {
    // data = this.state.dataset;
  }

  render() {
    return (
        <><p className="sys-text pt-2 sys-fonts-style display-4">
            Currently seeding</p>
        <p> {Object.values(this.state.dataset).map(
            (city, idx) => {
            return <span>{city}{idx != this.state.dataset.length-1 ? ',' : '..:' } </span>;
        })}
        </p></>
    );
  }
}

export default function Seeds() {

  return (
    <>
        <SeedsList />
    </>
  )
}
