import React from "react";
import "./PersonnalContent.css"

export const PersonnalContent = () => {
    return (
        <div className="personnalContent" style={{backgroundColor : "#77b5fe"}}>
            <h1> Bienvenue sur mon Portfolio ! </h1>
            <h5>Qui suis-je ?</h5>
            <p>
                Je m'appelle <strong>Sylvain Baudouin</strong>, j'ai 19 ans et je suis actuellement en 2ème année de
                BUT Informatique à l'Université de Nantes. Je suis passioné par l'informatique et la programmation depuis
                mon plus jeune âge.
            </p>
        </div>
    );
}