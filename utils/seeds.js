
// The svg
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
// geoMercator
// Map and projection
var projection = d3.geoMercator()
    .center([0,20])                // GPS of location to zoom on
    .scale(99)                       // This is like the zoom
    .translate([ width/2, height/2 ])

d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")  // World shape
  .defer(d3.csv, "./seeds.csv") // Position of circles
  .await(ready);

function ready(error, dataGeo, data) {

  // Create a color scale
  var allContinent = d3.map(data, function(d){return(d.continent)}).keys()
  var color = d3.scaleOrdinal()
    .domain(allContinent)
    .range(d3.schemePaired);

  console.log(allContinent)

  // Add a scale for bubble size
  var valueExtent = d3.extent(data, function(d) { return +d.n;})
  var size = d3.scaleSqrt()
    .domain(valueExtent)  // What's in the data
    .range([ 3, 10])  // Size in pixel

  console.log(valueExtent)
  console.log(size)
  // Draw the map
  svg.append("g")
      .selectAll("path")
      .data(dataGeo.features)
      .enter()
      .append("path")
        .attr("fill", "#b8b8b8")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
      .style("stroke", "none")
      .style("opacity", .15)

  // Add circles:
  svg
    .selectAll("myCircles")
    .data(data.sort(function(a,b) { return +b.n - +a.n }).filter(function(d,i){ return i<1000 }))
    .enter()
    .append("circle")
      .attr("cx", function(d){ return projection([+d.lon, +d.lat])[0] })
      .attr("cy", function(d){ return projection([+d.lon, +d.lat])[1] })
      .attr("r", function(d){ return size(+d.n) })
      // .style("fill", function(d){ return color(d.continent) })
      .style("fill", "white")
      .attr("stroke", function(d){ if(d.n>3){return "white"} else {return "none"}  })
      .attr("stroke-width", .3)
      .attr("fill-opacity", .3)

  // Add title and explanation
  svg
    .append("text")
      .attr("text-anchor", "end")
      .style("fill", "white")
      .attr("x", width - 10)
      .attr("y", height - 30)
      .attr("width", 90)
      .html("The System find its own seeds")
      .style("font-size", 14)


  // --------------- //
  // ADD LEGEND //
  // --------------- //

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
      .attr("cy", function(d){ return height - size(d) } )
      .attr("r", function(d){ return size(d) })
      .style("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", .3)

  // Add legend: segments
  svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("line")
      .attr('x1', function(d){ return xCircle + size(d) } )
      .attr('x2', xLabel)
      .attr('y1', function(d){ return height - size(d) } )
      .attr('y2', function(d){ return height - size(d) } )
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
      .attr('y', function(d){ return height - size(d) } )
      .text( function(d){ return d } )
      .style("font-size", 10)
      .attr("stroke", "gray")
      .attr('alignment-baseline', 'middle')
}
