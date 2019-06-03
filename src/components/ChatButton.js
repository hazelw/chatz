import React from 'react';
import PropTypes from 'prop-types';
import DeleteChatButton from '../containers/DeleteChatButton';
import './styles/ChatButton.css';

const ChatButton = ({text, id, selectChat}) => (
    <div className='button' onClick={() => selectChat(id)}>
        <span className='button-text'>
            {text}
        </span>
        <DeleteChatButton id={id} />
    </div>
);

ChatButton.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number.isRequired,
    selectChat: PropTypes.func.isRequired
};

export default ChatButton;
