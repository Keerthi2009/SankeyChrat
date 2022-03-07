import { useRef, useEffect } from "react";
import "./styles.css";
import * as d3 from "d3";
import { json, select } from "d3";
import { sankey } from "d3-sankey";

export default function App() {
  const svgRef = useRef(null);
  const margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 450 - margin.left - margin.right,
    height = 480 - margin.top - margin.bottom;
  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll("*").remove();
    svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate (" + margin.left + "," + margin.top + ")");

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const san = sankey().nodeWidth(36).nodePadding(290).extent([]);

    json("/data.json").then(console.log);
  });

  return <svg ref={svgRef} />;
}
