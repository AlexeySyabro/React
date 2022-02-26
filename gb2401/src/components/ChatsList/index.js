import List from '@mui/material/List';
import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { chatsRef, getChatsRefById, getMesssagesRefByChatId } from '../../servise/firebase';
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';


export const ChatList = () => {
    const [chats, setChats] = useState([]);
    
    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        set(getChatsRefById(newId), { id: newId, name: newChatName });
        set(getMesssagesRefByChatId(newId), { empty: true });
    };

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            const newChats = [];
            snapshot.forEach((child) => {
                newChats.push(child.val());
            });
            setChats(newChats);
        });

        return unsubscribe;
    });

    return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
    ))}
    </List>
    <FormMui onSubmit={handleAddChat} />
    <Outlet />
    </>
    );
};

