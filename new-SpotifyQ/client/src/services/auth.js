import axios from 'axios';

const logout = () => {
	return axios.delete('/api/auth/logout')
		.then(response => {
			return response.data;
		})
		.catch(err => {
			return err.response.data;
		});
}

export { logout };
