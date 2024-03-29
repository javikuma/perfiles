import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Por favor complete el campo', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = (e) => {
        setText(e.target.value);
        alertContext.hideAlert();
    };

    return (
        <div>
            <form autoComplete='off' onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Busca usuarios...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Buscar'
                    className='btn btn-dark btn-block'
                />
            </form>
            {githubContext.users.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={githubContext.clearUsers}
                >
                    Limpiar usuarios
                </button>
            )}
        </div>
    );
};

export default Search;
