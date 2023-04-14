import { useEffect, useState } from 'react';
import ReposList from "./components/ReposList";
import Perfil from './components/Perfil';

import '../src/global.css'


function App() {

  function alterarReposSendoExibido(nomeRepos) {
    setReposSendoExibido(nomeRepos)
  }

  function exibirRepos() {
    setReposVisible(true)
  }

  function closeRepos() {
    setReposVisible(false);
  }

  const [reposVisible, setReposVisible] = useState(false);
  const [reposSendoExibido, setReposSendoExibido] = useState('');
  const [nomeNoInput, setNomeNoInput] = useState('');
  const [componentes, setComponentes] = useState([
    <Perfil 
      nome="joaosportugal" 
      avatar='https://github.com/joaosportugal.png'
      githubLink='https://github.com/joaosportugal'
      reposSendoExibido={reposSendoExibido}
      alterarReposSendoExibido={alterarReposSendoExibido}
      exibirRepos={exibirRepos}
      reposVisible={reposVisible}
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
      exibirRepos={exibirRepos}
      reposVisible={reposVisible}
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

        {reposVisible && <ReposList reposSendoExibido={reposSendoExibido} reposVisible={reposVisible}
        closeRepos={closeRepos}/>}
        
      </div>
    </>
  )
}

export default App
