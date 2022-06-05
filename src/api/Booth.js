import { instance } from './lib/Instance';


export const GetBoothList = async () => {
    const res = await instance.get('/booth/')
    return res.data;
}


export const GetBooth = async (bid) => {
    const res = await instance.get(`/booth/${bid}`)
    return res.data;
    
}


export const MakeBooth = async () => {
    const res = await instance.post('/booth/new')
    return res.data;
    
}


export const EditBooth = async () => {
    const res = await instance.post('/booth/edit')
    return res.data;
    
}