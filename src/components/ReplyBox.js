import React from 'react';
import './styles/ReplyBox.css';

const ReplyBox = () => (
    <div className='reply-box-wrapper'>
        <textarea className='reply-box' placeholder='Type your message here and press enter to send...' />
    </div>
);

export default ReplyBox;
