import { instance } from './lib/Instance';


export const NewScore = async () => {
    const res = await instance.post('/score')
    return res.data;   
}


export const GetUserScoreList = async (uid) => {
    const res = await instance.get(`/score/${uid}`)
    return res.data;
    
}

export const GetTotalScore = async (uid) => {
    const res = await instance.get(`/score/${uid}/total_score`)
    return res.data;    
}


export const GetAllScores = async () => {
    const res = await instance.get('/score/')
    return res.data;
}