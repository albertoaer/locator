import * as d3 from 'd3';
import { GeoMap } from "../interfaces";

import { Topology, GeometryCollection } from 'topojson-specification';
import * as topojson from 'topojson';

export class BasicMap extends GeoMap {

    private topology: Promise<Topology> = d3.json(this.topoJsonUrl) as any;
    private path = d3.geoPath().projection(this.geoProjection);

    constructor(
        private geoProjection: d3.GeoProjection,
        private topoJsonUrl: string,
        private objects: string,
        private stroke: number
    ) {
        super();
    }

    projection(): d3.GeoProjection {
        return this.geoProjection;
    }

    async apply(selection: d3.Selection<SVGGElement, any, any, any>): Promise<void> {
        const t = await this.topology;

        selection.html(null);

        selection.selectAll('path')
        .data(topojson.feature(t, t.objects[this.objects] as GeometryCollection).features)
        .enter().append('path')
        .attr('fill', 'black')
        .attr('fill-opacity', '10%')
        .attr('stroke', 'black')
        .attr('stroke-width', this.stroke)
        .attr('d', this.path);
    }
}