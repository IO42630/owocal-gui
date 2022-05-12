import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';
import { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';

interface Frequency {
    letter: string;
    frequency: number;
}

interface MyNode extends SimulationNodeDatum {
    id: string;
}


@Component({
    selector: 'app-graph-display',
    styles: [`
        .links line {
            stroke: #999;
            stroke-opacity: 0.6;
        }

        .nodes circle {
            stroke: #fff;
            stroke-width: 1.5px;
        }
    `],
    templateUrl: './graph-display.component.html',

})
export class GraphDisplayComponent implements OnInit {


    @Output()
    nodeSelected = new EventEmitter();


    ngOnInit() {
        let svg = d3.select('svg');
        console.log('svg', svg);
        let width = +svg.attr('width');
        let height = +svg.attr('height');


        let nodes: SimulationNodeDatum[] = [
            {index: 1},
            {index: 2}
        ];

        let node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 5)
            .attr('fill', 'red');

        console.log(node);

        let links_data: SimulationLinkDatum<SimulationNodeDatum>[] = [
            {source: nodes[0], target: nodes[1]}
        ];

        let link_force = d3.forceLink(links_data)
            .id(function (d) { return d.index + ''; });


        let link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links_data)
            .enter().append('line')
            .attr('stroke-width', 2);


      // TODO fix this with https://observablehq.com/@d3/force-directed-graph


      node
          .attr("cx", (d: any) => {return d.x; })
          .attr("cy",  (d: any) => {return d.y; });


      link
          .attr("x1", (d: any) => {return d.source.x; })
          .attr("y1", (d: any) => {return d.source.y; })
          .attr("x2", (d: any) => {return d.target.x; })
          .attr("y2", (d: any) => {return d.target.y; });

      let simulation = d3.forceSimulation(nodes)
          .force('charge_force', d3.forceManyBody())
          .force('center_force', d3.forceCenter(width / 2, height / 2))
          .force('links', link_force);

    }




}
