import List from '@mui/material/List';
import { Outlet } from 'react-router-dom';
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';


export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
        <ChatItem chat={chat} onDeleteChat={onDeleteChat} />
    ))}
    </List>
    <FormMui onSubmit={onAddChat} />
    <Outlet />
    </>
);

