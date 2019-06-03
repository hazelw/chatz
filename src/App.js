import React from 'react';
import AddChatButton from './containers/AddChatButton';
import ChatList from './containers/ChatList';
import RightPane from './components/RightPane';
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className='header'>
      <span>An adequate chat app</span>
      <AddChatButton />
      </div>
      <div className='main'>
        <ChatList />
        <RightPane />
      </div>
    </div>
  );
}

export default App;
