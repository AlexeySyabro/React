import './App.css';
import { useEffect, useState, useRef } from 'react';
import { AUTHORS } from './components/utils/constants';
import { MessageList } from './components/MessageList';
import { FormMui } from './components/FormMui';
import { GutterlessList } from './components/ChatsList';

function App() {
  const [messageList, setMessageList] = useState([]);
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
      setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
    };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("Hello, human", AUTHORS.BOT);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <div className="App">
      <GutterlessList />
      <header className="App-header">
        <MessageList messages={messageList} />
        <FormMui onSubmit={handleAddMessage} />
        <div ref={messageEnd} />
      </header>
    </div>
  );
  }

export default App;
