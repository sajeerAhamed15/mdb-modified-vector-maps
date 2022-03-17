import React$1 from 'react';

interface VectorMapProps extends Omit<React$1.AllHTMLAttributes<HTMLDivElement>, 'height' | 'width'> {
    hoverFill?: string;
    selectRegion?: string;
    readonly?: boolean;
    selectFill?: string;
    zoomEvents?: boolean;
    hover?: boolean;
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
    strokeOpacity?: number;
    strokeLinejoin?: string;
    tooltips?: boolean;
    markerFill?: string;
    markerStroke?: string;
    markerInnerFill?: string;
    btnClass?: string;
    map?: string | React$1.ComponentProps<any>;
    height?: number | null;
    width?: number | null;
    strokeWidth?: number;
    zoomMin?: number | null;
    zoomMax?: number | null;
    zoomStep?: number | null;
    scale?: number;
    markers?: Record<string, any>;
    markerStrokeWidth?: number;
    mapRef?: React$1.MutableRefObject<any>;
    colorMap?: Record<string, any>;
}

declare const MDBVectorMap: React.FunctionComponent<VectorMapProps>;

export { MDBVectorMap };
