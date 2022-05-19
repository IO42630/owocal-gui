import { Component, Output, EventEmitter, AfterViewChecked, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';


import * as d3 from 'd3';
import { Simulation, BaseType } from 'd3';
import { width, height } from './config';
import { data } from './data-mock.service';


@Component({
    selector: 'app-graph-display',
    styles: [],
    templateUrl: './graph-display.component.html',

})
export class GraphDisplayComponent implements AfterViewInit, AfterViewChecked, OnChanges {

    private simulation?: Simulation<any, any>;
    private node?: any;
    private link?: any;

    textContainer: any;

    @Input()
    taskSelectedFromDetail: number = 0;

    @Output()
    taskSelectedFromGraph = new EventEmitter();


    ngAfterViewInit() {
        const [width, height, gravity] = [600, 600, -100];
        const svg: d3.Selection<BaseType, any, HTMLElement, any> = d3.select('#Target')
            .attr('width', width)
            .attr('height', height);

        const forceManyBody = d3.forceManyBody()
            .strength(gravity);

        const forceLink = d3.forceLink(data.links)
            .id((d: any) => d.id)
            .distance(50);


        // @ts-ignore
        this.simulation = d3.forceSimulation(data.nodes)
            .force('link', forceLink)
            .force('charge', forceManyBody)
            .force('center', d3.forceCenter(width / 2, height / 2));

        // LINKS
        this.link = svg
            .selectAll('path.links')
            .data(data.links)
            .join('path')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-dasharray', '3 2')
            .attr('stroke-width', 1)
            .attr('fill', 'none');

        // NODES
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        this.node = svg
            .selectAll('circle')
            .data(data.nodes)
            .join('circle')
            .attr('r', 10)
            .attr('stroke', '#ccc')
            .attr('stroke-width', 0.5)
            .style('fill', (d: any) => colorScale(d.zone));


        // LABELS
        const fontSizeScale = d3.scaleLinear()
            .range([7, 12]);

        this.textContainer = svg
            .selectAll('g.label')
            .data(data.nodes)
            .enter()
            .append('g');

        this.textContainer
            .append('text')
            .text((d: any) => d.title)
            .attr('font-size', (d: any) => fontSizeScale(d.influence))
            .attr('transform', (d: any) => {

                const scale = 10;
                const x = scale + 2;
                const y = scale + 4;
                return `translate(${x}, ${y})`;

            });


    }

    /**
     * Replaces this.simulation.on('tick', () => {});
     */
    ngAfterViewChecked(): void {
        // NODE
        this.node.attr('cx', (d: any) => d.x)
            .attr('cy', (d: any) => d.y)
            .call(this.drag(this.simulation));
        // LINK
        this.link.attr('d', (d: any) => {
            const mid: any = [
                (d.source.x + d.target.x) / 2,
                (d.source.y + d.target.y) / 2
            ];
            const lineGenerator = d3.line().curve(d3.curveCardinal);
            return lineGenerator([
                [d.source.x, d.source.y],
                mid,
                [d.target.x, d.target.y]
            ]);
        });
        // LABELS
        this.textContainer
            .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);
    }

    drag(simulation?: Simulation<any, any>): any {
        const dragStarted = (d: any) => {
            if (!d3.event.active) {
                simulation?.alphaTarget(0.3).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        };

        const dragged = (d: any) => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        };

        const dragEnded = (d: any) => {
            if (!d3.event.active) {
                simulation?.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        };

        return d3.drag()
            .on('start', dragStarted)
            .on('drag', dragged)
            .on('end', dragEnded);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('graph changes', this.taskSelectedFromDetail);
    }


}
