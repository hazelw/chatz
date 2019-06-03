import React from 'react';
import ChatButton from './ChatButton';
import '../App.css';

const ChatList = ({ chats }) => (
    <div className='chat-list'>
        {chats.map((chat) => {
            return <ChatButton
                text={chat.messages[chat.messages.length - 1].message}
                id={chat.id}
                key={chat.id}
            />
        })}
    </div>
);

export default ChatList;
