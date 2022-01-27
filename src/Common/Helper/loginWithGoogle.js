import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const handleGoogleLogin = (setUserData, push) => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(res => {
            GoogleAuthProvider.credentialFromResult(res);
            setUserData(res.user.email, res.user.accessToken, res.user.uid);
            push('/');
        })
        .catch(console.error)
}

export default handleGoogleLogin;