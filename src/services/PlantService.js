import http from './BaseService';

export const createPlant = (data) => http.post('/plant/new', data);
export const getPlant = (id) => http.get(`/plant/${id}`);
export const updatePlant = (id, data) => http.patch(`/plant/${id}`, data);
export const deletePlant = (id) => http.delete(`/plant/${id}`);