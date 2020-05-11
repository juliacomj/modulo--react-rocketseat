import React, { useState } from 'react';
import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e  Imutabilidade
 */

function App() {
    const [projects, setProjects ] = useState(['desenvolvimento', 'front-end']);
    // useSate retorna um array com 2 posições
    //
    //1. Variável com o seu valor
    //2. Função para atualizarmos esse valor
    function handleAddProject(){
        setProjects([...projects, `novo projeto ${Date.now()}`])
        console.log(projects);
    }
    return (
        <>
            <Header title="Projects" />
            <ul>
               {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
          <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>);
}

export default App;