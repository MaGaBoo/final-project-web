import createHttp from './BaseService';

const http = createHttp(true)
export const getCurrentUser = () => http.get('/users/me');

export const payment = (data) => http.post('/users/:userId/checkout');
//esta es la ruta que tenemos en API routes.js
