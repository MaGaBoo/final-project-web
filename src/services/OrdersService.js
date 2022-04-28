import createHttp from './BaseService';

const http = createHttp(true);

export const createOrder = (data) => http.post('/checkout', data)