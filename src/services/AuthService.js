import createHttp from './BaseService';

const http = createHttp({ useAccessToken: true })

export const registerRequest = (data) => http.post('/users', data);
export const loginRequest = (data) => http.post('/login', data);