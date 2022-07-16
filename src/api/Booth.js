import { instance } from './lib/Instance';


export const GetBoothList = async () => {
    const res = await instance.get('/booth/')
    return res.data;
}

export const GetVideoUrl = async (bid) => {
    const res = await instance.get(`/booth/${bid}/video`);
    return res.data;    
}

export const GetPdfUrl = async (bid) => {
    const res = await instance.get(`/booth/${bid}/image`);
    return res.data;
}


export const GetBooth = async (bid) => {
    const res = await instance.get(`/booth/${bid}`)
    return res.data;    
}

export const GetCongestion = async (bid) => {
    const res = await instance.get(`/booth/congestion/${bid}`)
    return res.data;    
}

export const UpdateCongestion = async (bid, cong) => {
    const payload = {
        congestion : cong
    }

    const res = await instance.post(`/booth/congestion/${bid}`, payload);
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