import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading) return <Spinner />;

    return (
        <>
            <Link to='/' className='btn btn-light'>
                Atrás
            </Link>
            Disponible:{' '}
            {hireable ? (
                <i className='fas fa-check text-success'></i>
            ) : (
                <i className='fas fa-times-circle text-danger'></i>
            )}
            <div className='card grid-2'>
                <div className='all-center'>
                    <img
                        src={avatar_url}
                        className='round-img'
                        alt={name}
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Ubicación: {location}</p>
                </div>
                <div>
                    {bio && (
                        <>
                            <h3>Biografía</h3>
                            <p>{bio}</p>
                        </>
                    )}
                    <a
                        href={html_url}
                        className='btn btn-dark my-1'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Ver perfil de Github
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <>
                                    <strong>Usuario: </strong> {login}
                                </>
                            )}
                        </li>
                        <li>
                            {company && (
                                <>
                                    <strong>Compañia: </strong> {company}
                                </>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <>
                                    <strong>Website: </strong>{' '}
                                    <span className='text-seccondary'>
                                        {blog}
                                    </span>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>
                    Seguidores: {followers}
                </div>
                <div className='badge badge-success'>Seguidos: {following}</div>
                <div className='badge badge-light'>
                    Repositorios: {public_repos}
                </div>
                <div className='badge badge-dark'>Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </>
    );
};

export default User;
