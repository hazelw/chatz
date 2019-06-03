import React from 'react';
import PropTypes from 'prop-types';
import MessageBox from './MessageBox';

const MessageList = ({ messages }) => (
    <div className='message-list'>
        {messages.map(
            (message) => (
                <MessageBox
                    key={message.id}
                    date={message.datetime}
                    message={message.message}
                    position={message.position}
                />
            )
        )}
    </div>
);

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList;
