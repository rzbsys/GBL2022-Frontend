import * as actions from './action';

const initState = {
    boothlist : null
}

function BoothReducer(state=initState, action) {
    switch (action.type) {
        case actions.BOOTH_IN:
            return {
                ...state,
                boothlist: action.payload
            }
        default:
            return state;
    }
}

export default BoothReducer;