import { instance } from "./lib/Instance";


export const GetUserBookList = async (userId) => {
    const res = await instance.get(`/booth/book/u/${userId}`);
    return res.data;
}

export const GetBoothBookList = async (boothId) => {
    const res = await instance.get(`/booth/book/${boothId}`);
    return res.data;
}


export const GenerateBook = async (boothId, user_id, time) => {
    const res = await instance.post(`/booth/book/${boothId}/${time}`, {
        user_id:user_id
    });
    return res.data;
}

export const DeleteBook = async (boothId, user_id, time) => {
    const res = await instance.post(`/booth/book/d/${boothId}/${time}`, {
        user_id:user_id
    });
    return res.data;
}