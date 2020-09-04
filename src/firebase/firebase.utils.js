import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config =
{
    apiKey: "AIzaSyDujl2CdEO3lLcdLAaFdS2G82158tVqPqo",
    authDomain: "crwn-db-ba502.firebaseapp.com",
    databaseURL: "https://crwn-db-ba502.firebaseio.com",
    projectId: "crwn-db-ba502",
    storageBucket: "crwn-db-ba502.appspot.com",
    messagingSenderId: "1002996498306",
    appId: "1:1002996498306:web:4a14ba2fd8f97f22c9199b",
    measurementId: "G-3ZNLLZHSN6"
};

export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })

        } catch (error) {

            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;