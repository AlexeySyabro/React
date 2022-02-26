import '../../App.css';
import { useEffect, useRef, useState } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { Navigate, useParams } from 'react-router-dom';
import { onChildAdded, onValue, set } from 'firebase/database';
import { getMesssageListRefByChatId, getMesssageRefById, getMesssagesRefByChatId } from '../../servise/firebase';

export function Chat() {
    const params = useParams();
    const { chatId } = params;

    const [messages, setMessages] = useState([]);

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
    set(getMesssageRefById(chatId, newMsg.id), newMsg);
    };

    useEffect(() => {
        const unsubscribe = onChildAdded(getMesssageListRefByChatId(chatId),
        (snapshot) => {
            setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
        });

        return unsubscribe;
    }, [chatId]);

    useEffect(() => {
        const unsubscribe = onValue(getMesssagesRefByChatId(chatId), (snapshot) => {
            if (!snapshot.val()?.empty) {
                setMessages(null);
            }
        });

        return unsubscribe;
    }, [chatId]);

    // useEffect(() => {
    //     const unsubscribe = onChildRemoved(getMesssagesRefByChatId(chatId),
    //     (snapshot) => {
    //         setMessages((prevMessages) => 
    //         prevMessages.filter(({ id }) => id !== snapshot.val()?.id));
    //     });

    //     return unsubscribe;
    // }, [chatId]);

useEffect(() => {
    //messageEnd.current?.scrollIntoView();
}, [messages]);

if (!messages) {
    return <Navigate to='/chats' replace />;
}

return (
    <div className="App">
    <header className="App-header">
        <MessageList messages={messages} />
        <FormMui onSubmit={handleAddMessage} />
        <div ref={messageEnd} />
    </header>
    </div>
);
}