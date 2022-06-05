import * as actions from './action';

const initState = {
    books: [],
}


const BookReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.INIT_BOOK_LIST:
            return {
                ...state,
                books : action.payload
            }
        default:
            return state;
    }
}


export default BookReducer;