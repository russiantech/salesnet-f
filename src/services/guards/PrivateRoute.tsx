import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {AxiosUsersService} from "../net/AxiosUsersService";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        AxiosUsersService.isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export default PrivateRoute

// // 
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
