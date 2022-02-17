import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import { Chat } from "../Chat"; 
import { ChatList } from "../ChatsList";
import { Profile } from "../Profile";
import { ThemeContext } from "../utils/ThemeContext";

const Main = () => <h2>Main page</h2>;

const initialChats = [
    {
        name: 'Chat 1',
        id: 'chat1',
    },
    {
        name: 'Chat 2',
        id: 'chat2', 
    },
    {
        name: 'Chat 3',
        id: 'chat3',
    },

];


const initialMessages = initialChats.reduce((acc, el) => {
    acc[el.id] = [];
    return acc;
}, {});

export const Router = () => {
    const [messages, setMessages] = useState(initialMessages);
    const chatList = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMsg) => {
        setMessages((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMsg],
        }));
    };

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        dispatch(addChat(newId, newChatName));
        setMessages(prevMessages => ({
            ...prevMessages,
            [newId]: [],
        }));
    };

    const handleDeleteChat = (inToDelete) => {
    dispatch(deleteChat(inToDelete));
    setMessages((prevMessages) => {
        const newMsgs = { ...prevMessages };
        delete newMsgs[inToDelete];
        return newMsgs;
    });
    };

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
        <Link to='/profile'>Profile</Link>
    </div>
        <Routes>
            <Route path='' element={<Main />}></Route>
            <Route path='chats'  element={<ChatList 
            onDeleteChat={handleDeleteChat} 
            onAddChat={handleAddChat} 
            chats={chatList} />}>
                <Route path=':chatId' element={<Chat 
                messages={messages} 
                addMessage={handleAddMessage} />} />
            </Route>
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<h2>This page does not exist</h2>} />
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    );
};