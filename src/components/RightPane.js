import React from 'react';
import MessageList from '../containers/MessageList';
import ReplyBox from './ReplyBox';
import '../App.css';

const RightPane = () => (
    <div className='message-list-wrapper'>
        <MessageList />    
        <div>
            <ReplyBox />
        </div>
    </div>
);

export default RightPane;
