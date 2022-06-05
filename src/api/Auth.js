import { instance } from './lib/Instance';


export const GetUserTotalScore = async (UserId) => {
    const res = await instance.get(`/user/${UserId}/total_score`)
    return res.data;
}

export const GetUserExist = async (UserId) => {
    const res = await instance.get(`/user/${UserId}/exist`)
    return res.data;
}

export const PostUserSubject = async (UserId) => {
    const res = await instance.post('/user/', {
        id: UserId
    })
    return res.data;
}


export const GetAllSubject = async () => {
    const res = await instance.get('/subject/')
    return res.data;
}


export const GetUserSubject = async (uid) => {
    const res = await instance.get(`/subject/${uid}`)
    return res.data;
}

export const UpdateUserSubject = async (uid) => {
    const res = await instance.post(`/subject/${uid}`)
    return res.data;
}