import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Chat } from "../Chat"; 
import { ChatList } from "../ChatsList";

const Main = () => <h2>Main page</h2>;
const Profile = () => <h2>Profile page</h2>;

export const Router = () => {
    return (
    <BrowserRouter>
    <div>
        <Link to='/'>Main</Link>
    </div>
    <div>
        <Link to='/chats'>Chats</Link>
    </div>
    <div>
        <Link to='/profile'>Profile</Link>
    </div>
        <Routes>
            <Route path='' element={<Main />}></Route>
            <Route path='chats'  element={<ChatList />}>
                <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<h2>This page does not exist</h2>} />
        </Routes>
    </BrowserRouter>
    );
};