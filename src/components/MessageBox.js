import React from 'react';
import './styles/MessageBox.css';

const MessageBox = ({ date, message, position }) => {
    const style = `${position}-message-box`;

    return (
        <div className={style}>
            <div className='datetime'>Sent on {date.toString()}</div>
            <div className='message'>{message}</div>
        </div>
    );
};

export default MessageBox;
