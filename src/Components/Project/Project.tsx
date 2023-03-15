import React, {useEffect, useState} from "react";
import axios  from "axios";
import {ProjectModel} from "../../Model/ProjectModel";
import {Content} from "../Content/Content";
import {Personnal} from "../Personnal/Personnal";
import {PersonnalContent} from "../Personnal/PersonnalContent";

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
            console.log(projects)
            setProjects(projects);
        }
        fetchProjects().then();
        setSelected(0)
    }, []);


    const listColor: string[] = ["#EB8FA6","#FAA6A0", "#FFF1DA", "#B0E5C6", "#907ECD", "#B991D9"];
    return (
        <div>
            <nav className="flex space-x-2">
                
                {projects.map((project, index) => (
                    <div key={index} className="py-2 px-4 cursor-pointer  shadow-md hover:shadow-lg "
                        style={{ backgroundColor: listColor[index % listColor.length]}}
                        onClick={() => setSelected(index)}>
                        <h3 className="text-black">{project['name']}</h3>
                    </div>
                ))}
            </nav>
            {selected !== -1 ?
                <Content project={projects[selected]} color = { listColor[selected]} />
                 :
                <div>
                </div>
            }
        </div>
    );

};