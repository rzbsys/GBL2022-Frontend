import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from 'utils/FirebaseApp';

function GoogleLoginApi(callbackfunc) {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt:'select_account'
    })
    signInWithPopup(auth, provider).then((result) => {
        callbackfunc(result);
    });
}

export default GoogleLoginApi;