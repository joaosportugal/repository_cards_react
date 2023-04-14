import { useEffect, useState } from 'react';
import ReposList from "./components/ReposList";
import Perfil from './components/Perfil';

import '../src/global.css'


function App() {

  function alterarReposSendoExibido(nomeRepos) {
    setReposSendoExibido(nomeRepos)
  }

  function toggleReposState() {
    setReposState(reposState => !reposState)
  }

  const [reposState, setReposState] = useState(false);
  const [reposSendoExibido, setReposSendoExibido] = useState('');
  const [nomeNoInput, setNomeNoInput] = useState('');
  const [componentes, setComponentes] = useState([
    <Perfil 
      nome="joaosportugal" 
      avatar='https://github.com/joaosportugal.png'
      githubLink='https://github.com/joaosportugal'
      reposSendoExibido={reposSendoExibido}
      alterarReposSendoExibido={alterarReposSendoExibido}
      toggleReposState={toggleReposState}
      reposState={reposState}
      />
  ]);

  function adicionarPerfil() {
    setComponentes([...componentes, 
    <Perfil 
      nome={nomeNoInput}
      avatar={`https://github.com/${nomeNoInput}.png`}
      githubLink={`https://github.com/${nomeNoInput}`}
      reposSendoExibido={reposSendoExibido}
      alterarReposSendoExibido={alterarReposSendoExibido}
      toggleReposState={toggleReposState}
      reposState={reposState}
    />])
  }

  return (
    <>
      <div className="container">
        
        <h1>Repository Cards</h1>
        <form className="form_container">
            <input type="text" placeholder="Digite o nome do repositório" onChange={e => setNomeNoInput(e.target.value)}/>
            <button type="button" className="form_btn" onClick={adicionarPerfil}>Adicionar</button>
        </form>
        
        <section className='cards_display'>
          {componentes} 
        </section>

        {reposState && <ReposList reposSendoExibido={reposSendoExibido} reposState={reposState}/>}
        
      </div>
    </>
  )
}

export default App
