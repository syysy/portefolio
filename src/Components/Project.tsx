import React, {useEffect, useRef, useState} from "react";
import axios  from "axios";
import {ProjectModel} from "../Model/ProjectModel";
import {ChartModel} from "./ChartModel/ChartModel";

export const Project = () => {
    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [selected, setSelected] = useState(-1);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/syysy/repos')
            const projects = response.data;
            for (const project in projects){
                projects[project] = new ProjectModel(projects[project]['name'], projects[project]['description'],projects[project]['language']);
                const language = await axios.get('https://api.github.com/repos/syysy/'+ projects[project]['name'] +'/languages')
                projects[project]['language'] = language.data
            }
            setProjects(projects);
        }
        fetchProjects().then();
    }, []);


    const listColor: string[] = ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"];
    return (
        <div>
            <nav className="flex">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="py-2 px-4 cursor-pointer rounded"
                        style={{ backgroundColor: listColor[index % listColor.length]}}
                        onClick={() => setSelected(index)}>
                        <h3 className="text-black">{project['name']}</h3>
                    </div>
                ))}
            </nav>
            {selected !== -1 ?
                <ChartModel project={projects[selected]} color={listColor[selected]} />
                 :
                <div></div>
            }
        </div>
    );

};