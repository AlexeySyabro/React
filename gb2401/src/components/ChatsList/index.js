import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from 'react-router-dom';

const chats = [
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

export const ChatList = () => (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
        <ListItem
            key={chat.id}
            disableGutters
            secondaryAction={
            <IconButton>
            <CommentIcon />
            </IconButton>
        }
        >
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        </ListItem>
    ))}
    </List>
    <Outlet />
    </>
);

