import React from 'react';
import {Home} from './Components/Home/Home';
import './App.css';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import {Project} from "./Components/Project/Project";
import { Personnal } from './Components/Personnal/Personnal';
import  { Contact } from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path ="/" element={ <Home/> }/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/me" element={<Personnal />}/>
          <Route path="/contact" element ={< Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
