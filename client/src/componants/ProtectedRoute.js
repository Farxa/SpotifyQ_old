import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const ProtectedRoute = ({
	component: Component,
	user,
	path,
	token,
	redirectPath = '/login',
	...rest
}) => {
	return (
		<Route
			exact path={path}
			render={props => {
				return token ? (
					<Component {...props} {...rest} token={token} />
				) : (
					<Redirect to={redirectPath} />
				)
			}}
		/>
	)
}
export default ProtectedRoute;