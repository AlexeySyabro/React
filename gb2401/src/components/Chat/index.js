import '../../App.css';
import { useEffect, useState, useRef } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { Navigate, useParams } from 'react-router-dom';

const chats = [{ chatId: 'chat1' }];
const messages = {
    chat1: [],
};

export function Chat() {
    const params = useParams();
    const { chatId } = params;

    const [messageList, setMessageList] = useState({
        chat1: [],
        chat2: [],
        chat3: [],
    });
    const messageEnd = useRef();
    const handleAddMessage = (text) => {
        sendMessage(text, AUTHORS.ME)
};

const sendMessage = (text, author) => {
    const newMsg = {
        text,
        author,
        id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => ({
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId], newMsg],
    }));
    };

useEffect(() => {
    //messageEnd.current?.scrollIntoView();
    let timeout;
    if (messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
        sendMessage("Hello, human", AUTHORS.BOT);
    }, 1000);
    }
    return () => {
        clearTimeout(timeout);
    };
}, [messageList]);

if (!messageList[chatId]) {
    return <Navigate to='/chats' replace />;
}

return (
    <div className="App">
    <header className="App-header">
        <MessageList messages={messageList[chatId]} />
        <FormMui onSubmit={handleAddMessage} />
        <div ref={messageEnd} />
    </header>
    </div>
);
}