import http from './BaseService';

export const getCurrentUser = () => http.get('/users/me');