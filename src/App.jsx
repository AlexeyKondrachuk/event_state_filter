
import React from 'react';
import Portfolio from "./components/Portfolio.jsx"
import './App.css';
import {filters, projects} from './components/data'

function App() {
 
    return (
      <div className='main'>
      <Portfolio filters={filters} projects={projects} />
      </div>
    )
  
}

export default App;