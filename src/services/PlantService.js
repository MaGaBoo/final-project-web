import createHttp from './BaseService';

const http = createHttp(true);

export const createPlant = (data) => http.post('/plant/new', data);
export const getPlant = (id) => http.get(`/plant/${id}`);
export const updatePlant = (id, data) => http.patch(`/plant/${id}`, data);
export const deletePlant = (id) => http.delete(`/plant/${id}`);
export const listPlants = () => http.get(`/plant`);
export const filterEvergreen = () => http.get(`/evergreen`);
export const filterOrchids = () => http.get(`/orchids`);
export const filterCactus = () => http.get(`/cactus-and-succulents`);