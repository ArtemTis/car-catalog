import axios from 'axios';
import { ICar, TypeData } from '../types/car.interface';

export const CarService = {
    async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        return response.data
    },

    async getById(id: string) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
        return response.data[0]
    },

    async create(data: TypeData) {
        return axios.post(`https://jsonplaceholder.typicode.com/photos`, {
            data: {
                ...data,
            }
        })
    },
}