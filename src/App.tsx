import React from 'react';
import {Home} from './Components/Home/Home';
import './App.css';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import {Project} from "./Components/Project/Project";

function App() {
  return (
    <div className="App">

      <NavLink to="/"> Home </NavLink>
      <NavLink to="/projects"> Projects </NavLink>

        <Routes>
          <Route path ="/" element={ <Home/> }/>
          <Route path="/projects" element={<Project/>}/>
        </Routes>
    </div>
  );
}

export default App;
