import * as d3 from 'd3';
import { GeoMap } from "../interfaces";

import { Topology, GeometryCollection } from 'topojson-specification';
import * as topojson from 'topojson';

export class BasicMap extends GeoMap {
    private path = d3.geoPath().projection(this.geoProjection);

    constructor(
        private geoProjection: d3.GeoProjection,
        private topology: Topology,
        private objects: string,
        private stroke: number
    ) {
        super();
    }

    projection(): d3.GeoProjection {
        return this.geoProjection;
    }

    domain(): [[number, number], [number, number]] {
        return [[0,0],[0,0]];
    }

    apply(selection: d3.Selection<SVGGElement, any, any, any>): void {
        selection.html(null);

        selection.selectAll('path')
        .data(topojson.feature(this.topology, this.topology.objects[this.objects] as GeometryCollection).features)
        .enter().append('path')
        .attr('fill', 'black')
        .attr('fill-opacity', '10%')
        .attr('stroke', 'black')
        .attr('stroke-width', this.stroke)
        .attr('d', this.path);
    }
}