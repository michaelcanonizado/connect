import { useAuthentication } from '@/store/useAuthentication';
import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
	timeout: 10000,
});

api.interceptors.request.use(async (config) => {
	const provider = useAuthentication((state) => state.provider);

	if (provider && provider.authenticated) {
		config.headers.Authorization = `Bearer ${provider.token}`;
	}

	return config;
});

export default api;
