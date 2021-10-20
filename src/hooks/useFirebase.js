import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
            console.log(result.user)
        })
    }


    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
        })
    }, []);



    const handleEmailChange = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleRegister = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
            setError(error.message)
        })
        console.log(email, password)
    }

    return {
        user,
        error,
        logOut,
        handleRegister,
        handleEmailChange,
        handleGoogleSignIn,
        handlePasswordChange
    }
}

export default useFirebase;