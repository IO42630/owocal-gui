import { Component, OnInit, Output, EventEmitter, AfterViewChecked, AfterViewInit } from '@angular/core';


import * as d3 from 'd3';
import { width, height, svg } from './config';
import { data } from './data-mock.service';


@Component({
    selector: 'app-graph-display',
    styles: [],
    templateUrl: './graph-display.component.html',

})
export class GraphDisplayComponent implements AfterViewInit, AfterViewChecked {


    @Output()
    nodeSelected = new EventEmitter();


    ngAfterViewInit() {
        const [width, height] = [600, 600];
        const svg: d3.Selection<any, any, any, any> = d3.select('#Target').attr('width', width).attr('height', height);


        const {nodes, links} = data;


        const gravity = -100;

        const forceManyBody = d3.forceManyBody()
            .strength(gravity);

        const forceLink = d3.forceLink(links)
            .id((d: any) => d.id)
            .distance(50);


        // @ts-ignore
        let simulation = d3.forceSimulation(nodes)

            .force('link', forceLink)
            .force('charge', forceManyBody)
            .force('center', d3.forceCenter(width / 2, height / 2));



        // LINK INIT

        const lineGenerator = d3.line()
            .curve(d3.curveCardinal);

        const linkFoo = svg
            .selectAll('path.link')
            .data(data.links)
            .enter()
            .insert('path')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-dasharray', '3 2')
            .attr('stroke-width', 1)
            .attr('fill', 'none');


        simulation.on('tick', () => {
            console.log('tick happens');

            // NODE
            const colorScale = d3.scaleOrdinal(d3.schemeCategory10);


            const node = svg
                .selectAll('circle')
                .data(nodes)
                .join('circle')
                .attr('r', 10)
                .attr('stroke', '#ccc')
                .attr('stroke-width', 0.5)
                .style('fill', (d: any) => colorScale(d.zone));


            node
                .attr('cx', (d: any) => d.x)
                .attr('cy', (d: any) => d.y);

            const drag: any = (simulation: any) => {

                const dragstarted = (d: any) => {

                    if (!d3.event.active) {

                        simulation.alphaTarget(0.3).restart();

                    }

                    d.fx = d.x;
                    d.fy = d.y;

                };

                const dragged = (d: any) => {

                    d.fx = d3.event.x;
                    d.fy = d3.event.y;

                };

                const dragended = (d: any) => {

                    if (!d3.event.active) {

                        simulation.alphaTarget(0);

                    }

                    d.fx = null;
                    d.fy = null;

                };

                return d3.drag()
                    .on('start', dragstarted)
                    .on('drag', dragged)
                    .on('end', dragended);

            };


            node.call(drag(simulation));

            // LINK
            linkFoo.attr("d", (d) => {


                const mid = [
                    // @ts-ignore
                    (d.source.x + d.target.x) / 2,
                    // @ts-ignore
                    (d.source.y + d.target.y) / 2
                ];

                return lineGenerator([
                    // @ts-ignore
                    [d.source.x, d.source.y],
                    // @ts-ignore
                    mid,
                    // @ts-ignore
                    [d.target.x, d.target.y]
                ]);

            });
        });

    }

    ngAfterViewChecked(): void {
    }


}
