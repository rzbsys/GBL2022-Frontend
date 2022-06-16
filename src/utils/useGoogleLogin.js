import GoogleLoginApi from 'utils/GoogleLoginApi';

import { signOut, deleteUser } from "firebase/auth";
import CheckEmail from 'utils/CheckEmail';
import { toast } from "react-toastify";
import { auth } from 'utils/FirebaseApp';

import { GetUserExist } from 'api/Auth';

import { GetUserBookList } from 'api/Book';
import { InitBookList } from 'store/book/action';
import BookJsonToList from 'utils/BookJsonToList';
import { Login } from 'store/auth/action';


export function CheckValid(user, dispatch) {
    if (user && CheckEmail(user.email)) {
        const uid = user.uid;
        const displayName = user.displayName;
        const photoURL = user.photoURL;

        GetUserExist(uid).then((res) => {
            GetUserBookList(uid).then((bookapires) => {
                if (bookapires.booth_books) {
                    const booklist = BookJsonToList(bookapires.booth_books);
                    dispatch(InitBookList(booklist));
                } else {
                    const booklist = BookJsonToList([]);
                    dispatch(InitBookList(booklist));
                }
                dispatch(Login(displayName, uid, photoURL, res.exist));
            });
        }).catch(() => {
            toast.error('로그인에 실패하였습니다.');
        });
    }
}

function useGoogleLogin(dispatch) {
    const onClick = () => {
        GoogleLoginApi((result) => {
            const user = result.user;
            CheckValid(user, dispatch);
        });
    }

    return {
        onClick : onClick
    }
}

export default useGoogleLogin;