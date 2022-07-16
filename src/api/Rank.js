import { instance } from './lib/Instance';


export const NewScore = async (uid, bid, score) => {
    const payload = {
        user_id : uid,
        booth_id : bid,
        score : score
    }

    const res = await instance.post('/score', payload);
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

export const GetUserInfo = async (uid) => {
    const res = await instance.get(`/user/${uid}`);
    return res.data;
}
