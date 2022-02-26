import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat"; 
import { ChatList } from "../ChatsList";
import { Main } from "../Main/main";
import { PrivateRouter } from "../PrivateRouter/PrivateRouter";
import { Profile } from "../Profile";
import { PublicRouter } from "../PublicRouter/PublicRouter";
import { ThemeContext } from "../utils/ThemeContext";
import { auth } from "../../servise/firebase";

export const Router = () => {
    const [authed, setAuthed] = useState(false);
    const authorize = () => {
        setAuthed(true);
    };
    const unauthorize = () => {
        setAuthed(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
        return unsubscribe;
    }, []);
    
    return (
    <ThemeContext.Provider value={{ theme: 'gray' }}>
    <BrowserRouter>
    <div>
        <Link to='/'>Main</Link>
    </div>
    <div>
        <Link to='/chats'>Chats</Link>
    </div>
    <div>
        <Link to='/articles'>Articles</Link>
    </div>
    <div>
        <Link to='/profile'>Profile</Link>
    </div>
        <Routes>
            <Route path='' element={<PublicRouter authed={authed} />}>
                <Route path='' element={<Main />} />
                <Route path='/signup' element={<Main isSignUp />} />
            </Route>
            <Route path='chats'  element={<ChatList />}>
                <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='articles' element={<Articles />}></Route>
            <Route path='profile' element={<PrivateRouter authed={authed} />}>
                <Route path='' element={<Profile onLogout={unauthorize} />} />
            </Route>
            <Route path='*' element={<h2>This page does not exist</h2>} />
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    );
};