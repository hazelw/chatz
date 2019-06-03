import React from 'react';
import AddChatButton from './components/AddChatButton';
import ChatButton from './components/ChatButton';
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className='header'>
      <span>An adequate chat app</span>
      <AddChatButton />
      </div>
      <div className='main'>
        <div className='chatList'>
            <ChatButton text='You said: hello world' id='0'/>
            <ChatButton text='You said: ok then' id='1'/>
        </div>
        <div className='messageList'>
            messages
        </div>
      </div>
    </div>
  );
}

export default App;
