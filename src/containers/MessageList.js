import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

const mapStateToProps = ({ chats, selectedChatId }) => {
    let messages = [];
    const selectedChat = chats.find(({ id }) => id === selectedChatId);
    if (selectedChat) {
        messages = selectedChat.messages
    }

    return { messages };
};

export default connect(mapStateToProps, null)(MessageList);
