import React, { useState, useEffect } from 'react';
import './App.css'
import api from './services/api';
import Header from './components/Header';
import backgroundImage from './assets/backgroundImage.jpeg'

/**
 * Componente
 * Propriedade
 * Estado e  Imutabilidade
 */

function App() {
    const [projects, setProjects ] = useState([]);
    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data)
        });
    }, [])
    // useSate retorna um array com 2 posições
    //
    //1. Variável com o seu valor
    //2. Função para atualizarmos esse valor
   async function handleAddProject(){
        //setProjects([...projects, `novo projeto ${Date.now()}`])
      const response = await  api.post('/projects', {
            title: `projeto ${Date.now()}`,
	        owner: "teste"
        });
      const project = response.data;
      setProjects([...projects, project])
    }

    return (
        <>
            <Header title="Projects" />
            <img width="300px" src={backgroundImage} alt=""/>
            <ul>
               {projects.map(project => <li key={project.id}> {project.title}</li>)}
            </ul>
          <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>);
}

export default App;