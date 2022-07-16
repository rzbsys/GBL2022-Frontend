import { instance } from './lib/Instance';


export const GetBoothImage = async (booth_id) => {
    const res = await instance.get(`/booth/${booth_id}/image`);
    return res.data;
}
