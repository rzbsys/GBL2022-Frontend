import * as actions from './action';


const initState = {
    isAdmin: false,
    BoothId: -1,
}

export default function AdminReducer(state = initState, action) {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                BoothId : action.payload,
                isAdmin : true
            }
        default:
            return state;
    }
}