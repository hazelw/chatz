import React from 'react';
import PropTypes from 'prop-types';
import './styles/AddChatButton.css';

const AddChatButton = ({ createChat }) => (
    <button className='add-chat-button' onClick={createChat}>
        Add Chat
    </button>
);

AddChatButton.propTypes = {
    createChat: PropTypes.func.isRequired
};

export default AddChatButton;
