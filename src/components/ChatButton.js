import React from 'react';
import DeleteChatButton from '../containers/DeleteChatButton';
import './styles/ChatButton.css';

const ChatButton = ({text, id}) => (
    <div className='button'>
        <span className='button-text'>
            {text}
        </span>
        <DeleteChatButton id={id} />
    </div>
);

export default ChatButton;
