import '../../App.css';
import { useEffect, useRef } from 'react';
import { AUTHORS } from '../utils/constants';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/message/selectors';
import { addMessageWithThunk } from '../../store/message/actions';

export function Chat() {
    const params = useParams();
    const { chatId } = params;

    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

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
    dispatch(addMessageWithThunk(chatId, newMsg));
    };

useEffect(() => {
    //messageEnd.current?.scrollIntoView();
    // let timeout;
    // if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME) {
    //     timeout = setTimeout(() => {
    //     sendMessage("Hello, human", AUTHORS.BOT);
    // }, 1000);
    // }
    // return () => {
    //     clearTimeout(timeout);
    // };
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