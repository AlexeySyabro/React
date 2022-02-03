import './App.css';
import { Message } from './components/Message';
import { Counter } from './components/Counter';
import { useState } from 'react';
import { Form } from './components/Form';

const myText = "This could be your ad"

function App() {
  const [messageList, setMessageList] = useState([]);
  const handelMessageClick = () => {
    console.log('hello');
  };

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, text]);
  }

  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((text) => (
        <Message 
        text={text}
        onMessageClick={handelMessageClick} 
        />
        ))}
        {/* <Counter /> */}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
