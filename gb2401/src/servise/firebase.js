// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5A90s0Mpk76W42RkSRGrO-il_b-WbNMo",
    authDomain: "reactjs-gb2401.firebaseapp.com",
    projectId: "reactjs-gb2401",
    storageBucket: "reactjs-gb2401.appspot.com",
    messagingSenderId: "331933093019",
    appId: "1:331933093019:web:a9a8185c389f42286cca3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const singUp = (email, pass) => 
    createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => 
    signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, 'profile');
export const profileNameRef = ref(db, 'profile/name');
export const profileShowNameRef = ref(db, 'profile/showName');
export const chatsRef = ref(db, 'chats');
export const getChatsRefById =  (chatId) => ref(db, `chats/${chatId}`); 
export const messagesRef = ref(db, 'messages');
export const getMesssagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMesssageListRefByChatId = (chatId) => 
    ref(db, `messages/${chatId}/messageList`);
export const getMesssageRefById = (chatId, msgId) =>
    ref(db, `messages/${chatId}/messageList/${msgId}`);