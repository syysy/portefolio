import Chart from "chart.js/auto";
import React, {useEffect, useRef} from "react";
import {ProjectModel} from "../../Model/ProjectModel";
import "./ChartModel.css"
import {color} from "chart.js/helpers";

type chartProps = {
    project : ProjectModel
    color : string
}
export const ChartModel : React.FC<chartProps> = (props) => {

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
            const total = Object.values(props.project['language']).reduce((a, b) => a + b, 0);
            const languages = Object.values(props.project['language']);
            const percentages = languages.map((count: number) => count * 100 / total);
            if (chartRef.current) {
                if(chartInstanceRef.current) chartInstanceRef.current.destroy();
                const ctx = chartRef.current.getContext('2d');
                if (ctx) {
                    // @ts-ignore
                    chartInstanceRef.current = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: Object.keys(props.project['language']),
                            datasets: [
                                {
                                    data: percentages,
                                    backgroundColor: ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"],
                                    hoverBackgroundColor: ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"],
                                },
                            ],
                        },
                    });
                }
            }
        console.log('cc')
    } , [props.project]);

    return(
        <div className="chart-container">
            <canvas ref={chartRef}  > </canvas>
        </div>
    )
}