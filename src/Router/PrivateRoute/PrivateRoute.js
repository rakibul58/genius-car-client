import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <h1>Loading...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}}></Navigate>;
};

export default PrivateRoute;