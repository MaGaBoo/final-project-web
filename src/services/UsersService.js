import http from './BaseService';

export const register = (data) => http.post('/register', data);