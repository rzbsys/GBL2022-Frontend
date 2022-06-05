function BookJsonToList(bookjson) {
    const maxCnt = parseInt(process.env.REACT_APP_MAX_BOOK_CNT) + 1;
    var booklist = new Array(maxCnt).fill(-1);

    for (var i = 0; i < bookjson.length; i++) {
        booklist[bookjson[i].period] = bookjson[i].period;
    }

    return booklist;
}

export default BookJsonToList;