import React from 'react';
import './styles/MessageBox.css';

const MessageBox = ({ date, message, position }) => {
    const style = `${position}-message-box`;

    return (
        <div className={style}>
            <span className='datetime'>{date}</span>
            <span className='message'>{message}</span>
        </div>
    );
};

export default MessageBox;
