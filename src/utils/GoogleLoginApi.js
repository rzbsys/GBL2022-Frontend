import { GoogleAuthProvider, signInWithPopup, browserLocalPersistence, setPersistence } from "firebase/auth";
import { auth } from 'utils/FirebaseApp';
import CheckEmail from "./CheckEmail";

function GoogleLoginApi(callbackfunc) {
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            return signInWithPopup(auth, provider)
                .then((result) => {
                    if (!CheckEmail(result.user.email)) {

                    } else {
                        callbackfunc(result);
                    }
                })
        })
}

export default GoogleLoginApi;