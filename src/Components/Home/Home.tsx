import { directive } from "@babel/types";
import { useEffect, useState,} from "react";
import { Project } from "../Project/Project";
import React  from "react";
import "./Home.css"
import {Routes, Route, Link, NavLink} from "react-router-dom";

export const Home = () => {


    return (
        <div className="content">
            <div className="name">
                <h1> Sylvain  </h1>
                <h1> Baudouin </h1>
                <div className="hoverContent" >
                    <NavLink to="/me"> Me </NavLink>
                    <NavLink to="/projects"> Projects </NavLink>
                    <NavLink to="/contact"> Contact </NavLink>
                </div>
                
            </div>
            
           
        </div>
    );
};