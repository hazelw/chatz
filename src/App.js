import React from 'react';
import ChatButton from './components/ChatButton';
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className='header'>
      An adequate chat app
      </div>
      <div className='main'>
        <div className='chatList'>
            <ChatButton text='sup' id='0'/>
            <ChatButton text='hi' id='1'/>
        </div>
        <div className='messageList'>
            messages
        </div>
      </div>
    </div>
  );
}

export default App;
