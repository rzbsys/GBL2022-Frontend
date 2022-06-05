export const INIT_BOOK_LIST = 'BOOK/INIT_BOOK_LIST';

export const InitBookList = (BookList) => {
    return {
        type: INIT_BOOK_LIST,
        payload : BookList
    }
}