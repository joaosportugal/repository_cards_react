import { useEffect } from 'react';
import './perfil.css';

const Perfil = ({avatar, nome, githubLink, alterarReposSendoExibido, exibirRepos}) => {

    return (
        <div className='perfil_card'>
            <div className="perfil_card_content">
                <img className="perfil_avatar"src={avatar} />
                <h2>{nome}</h2>
                <a className="github_link" target="_blank" href={githubLink}>Abrir Github</a>
                <button type="button" onClick=
                    {() => {
                        alterarReposSendoExibido(nome);
                        exibirRepos();
                    }}>
                    Ver Repositórios
                </button>
            </div>
        </div>
    )
}

export default Perfil;