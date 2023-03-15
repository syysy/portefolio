import {ChartModel} from "../ChartModel/ChartModel";
import React, {useEffect, useState} from "react";
import {projectProps} from "../../Model/ProjectModel";
import "./Content.css"
import {marked} from "marked";


export const Content : React.FC<projectProps> = (props) => {
   const [readMe, setReadMe] = useState<string>("");
   useEffect( () => {
       const fetchReadMe = async () => {
           await fetch('https://api.github.com/repos/syysy/' + props.project.name + '/readme')
               .then(res => res.json())
               .then(
                   data => {
                       const decoder = new TextDecoder();
                       const readmeContent = decoder.decode(Uint8Array.from(atob(data.content), c => c.charCodeAt(0)));
                       setReadMe(readmeContent); // mise à jour de l'état "readMe" avec le contenu du README converti en HTML
                   })
               .catch(error => console.log(error));
       }
       fetchReadMe().then();
   }, [props.project])

    useEffect(() => {
        const div = document.getElementsByClassName('readme')[0];
        const images = div.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            let imageUrl = images[i].getAttribute('src');
            if (!imageUrl?.startsWith('http')) {
                imageUrl = 'https://raw.githubusercontent.com/syysy/'+ props.project.name + '/master/'+imageUrl+''
                images[i].setAttribute('src', imageUrl);
            }
        }
    }, [readMe])
    
    const html = marked(readMe);
    return (
        <div className="content" style={{backgroundColor : props.color}}>
            <h1 className="text-black">{props.project['name']}</h1>
            <p className="text-black">{props.project['description']}</p>
            <ChartModel project={props.project} color={props.color}/>
            <div className="readme" dangerouslySetInnerHTML={{__html: html}}/>
        </div>

    );
}