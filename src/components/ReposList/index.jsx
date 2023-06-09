import { useEffect, useState } from "react"
import './reposList.css'

function ReposList({reposSendoExibido, closeRepos}) {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/users/${reposSendoExibido}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        });
    }, [reposSendoExibido])

    return (
        <>
            <header className="list_header">
            <h2 className="list_title">Repositórios de {reposSendoExibido}</h2>
            <span onClick={closeRepos} class="material-symbols-outlined">close</span>
            </header>
            <ul className="list">
                {repos.map(repositorio => (
                    <li className="list_item" key={repositorio.id}>
                        <b>Name:</b>{repositorio.name} <br />
                        <b>Language:</b>{repositorio.language} <br />
                        <a target="_blank" href={repositorio.html_url}>Visite no Github</a> 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList