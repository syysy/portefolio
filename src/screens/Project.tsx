import React, {useEffect, useState} from "react";
import axios  from "axios";

export const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/syysy/repos')
            const projects = response.data;
            setProjects(projects);
        }
        fetchProjects().then();
        console.log(projects);
    }, []);

    const listColor: string[] = ["pink", "red", "yellow", "green", "blue", "indigo", "purple", "gray"];

    return (
        <div>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`container mt-10 rounded border-2 border-${listColor[index]}-400 bg-${listColor[index]} opacity-20 hover:opacity-100 hover:bg-${listColor[index]}-400 hover:border-${listColor[index]}-400`}
                >
                    <h3>{project['name']}</h3>
                    <p>{project['description']}</p>

                </div>
            ))}
        </div>
    );

};