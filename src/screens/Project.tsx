import React, {useEffect, useRef, useState} from "react";
import axios  from "axios";
import Chart from "chart.js/auto";
import {toASCII} from "punycode";
import {ProjectModel} from "../Model/Model";

export const Project = () => {
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [selected, setSelected] = useState(-1);
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/syysy/repos')
            const projects = response.data;
            for (const project in projects){
                projects[project] = new ProjectModel(projects[project]['name'], projects[project]['language']);
                const language = await axios.get('https://api.github.com/repos/syysy/'+ projects[project]['name'] +'/languages')
                projects[project]['language'] = language.data
            }
            setProjects(projects);
        }
        fetchProjects().then();
    }, []);
    useEffect(() => {
        const total = Object.values(projects[selected]['language']).reduce((a, b) => a + b, 0);
        if (chartRef.current) {
            if(chartInstanceRef.current) chartInstanceRef.current.destroy();
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // @ts-ignore
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: Object.keys(projects[selected]['language']),
                        datasets: [
                            {
                                data: (Object.values(projects[selected]['language'])*100/total),
                                backgroundColor: ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"],
                                hoverBackgroundColor: ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"],
                            },
                        ],
                    },
                });
            }
        }
    } , [selected]);

    const listColor: string[] = ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"];
    return (
        <div>
            <nav className="flex">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="py-2 px-4 cursor-pointer rounded"
                        style={{ backgroundColor: listColor[index % listColor.length]}}
                        onClick={() => setSelected(index)}
                    >
                        <h3 className="text-black">{project['name']}</h3>
                    </div>
                ))}

            </nav>
            {selected !== -1 ?
                <div style={{backgroundColor : listColor[selected % listColor.length]}}>
                    <p>{projects[selected]['description']}</p>
                    <p>{Object.keys(projects[selected]['language'])}</p>
                    <canvas ref={chartRef} width={1} height={1}/>
                </div> :
                <div></div>
            }
        </div>

    );

};