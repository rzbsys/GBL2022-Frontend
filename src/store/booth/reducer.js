import * as actions from './action';

const initState = {
    boothlist : [],
    imglist : []
}

function BoothReducer(state=initState, action) {
    switch (action.type) {
        case actions.BOOTH_IN:
            return {
                ...state,
                boothlist: action.payload
            }
        case actions.BOOTH_IMAGE_IN:
            return {
                ...state,
                imglist: action.payload
            }
        default:
            return state;
    }
}

export default BoothReducer;