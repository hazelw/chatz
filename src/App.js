import React from 'react';
import AddChatButton from './containers/AddChatButton';
import ChatList from './containers/ChatList';
import MessageBox from './components/MessageBox';
import ReplyBox from './components/ReplyBox';
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
        <div className='message-list-wrapper'>
            <div className='message-list'>
                <MessageBox date='Thu May 25 2017 20:11:44 GMT+0100 (BST)' message='Welcome to the chat' position='left' />
                <MessageBox date='2019-01-02' message='hello world' position='right' />
                <MessageBox date='2019-01-02' message='You said: hello world' position='left' />
            </div>
            <div>
                <ReplyBox />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
