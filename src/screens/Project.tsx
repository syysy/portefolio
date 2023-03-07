import React, {useEffect, useState} from "react";
import axios  from "axios";

export const Project = () => {
    const [projects, setProjects] = useState([]);
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('https://api.github.com/users/syysy/repos')
            const projects = response.data;
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
                        onClick={() => setSelected(index)}
                    >
                        <h3 className="text-black">{project['name']}</h3>
                    </div>
                ))}

            </nav>
            {selected !== null ?
                <div style={{backgroundColor : listColor[selected % listColor.length]}}>
                    <p>{projects[selected]['description']}</p>
                </div> :
                <div></div>
            }
        </div>

    );

};