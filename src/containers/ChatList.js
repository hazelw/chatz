import { connect } from 'react-redux';
import ChatList from '../components/ChatList';

const mapStateToProps = ({ chats }) => ({
    chats
});

export default connect(mapStateToProps, null)(ChatList);
