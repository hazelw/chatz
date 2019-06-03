import React from 'react';
import PropTypes from 'prop-types';
import './styles/ChatButton.css';

const DeleteChatButton = ({ id, deleteChat }) => (
    <div className='delete-chat-button' onClick={() => deleteChat(id)}>
        x
    </div>
);

DeleteChatButton.propTypes = {
    id: PropTypes.number.isRequired,
    deleteChat: PropTypes.func.isRequired
};

export default DeleteChatButton;
