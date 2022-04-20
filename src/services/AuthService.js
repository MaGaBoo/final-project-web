import http from './BaseService';


export const register = (data) => http.post('/users', data);
export const login = (data) => http.post('/login', data);