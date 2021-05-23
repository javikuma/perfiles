import React from 'react';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';
import Alert from '../../components/layout/Alert';

const Home = () => {
    return (
        <>
            <Alert />
            <Search />
            <Users />
        </>
    );
};

export default Home;
