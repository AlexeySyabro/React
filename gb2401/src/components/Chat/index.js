import '../../App.css';
import { useEffect, useState, useRef } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { Navigate, useParams } from 'react-router-dom';

export function Chat({ messages, addMessage }) {
    const params = useParams();
    const { chatId } = params;

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
    addMessage(chatId, newMsg)
    };

useEffect(() => {
    //messageEnd.current?.scrollIntoView();
    let timeout;
    if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
        sendMessage("Hello, human", AUTHORS.BOT);
    }, 1000);
    }
    return () => {
        clearTimeout(timeout);
    };
}, [messages]);

if (!messages[chatId]) {
    return <Navigate to='/chats' replace />;
}

return (
    <div className="App">
    <header className="App-header">
        <MessageList messages={messages[chatId]} />
        <FormMui onSubmit={handleAddMessage} />
        <div ref={messageEnd} />
    </header>
    </div>
);
}