import createHttp from './BaseService';

const http = createHttp(true);

export const getOrder = (id) => http.get(`/order/${id}`)