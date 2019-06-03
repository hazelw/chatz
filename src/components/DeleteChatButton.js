import React from 'react';
import './styles/ChatButton.css';

const DeleteChatButton = ({ id }) => (
    <div className='delete-chat-button' onClick={() => console.log(id)}>
        x
    </div>
);

export default DeleteChatButton;
