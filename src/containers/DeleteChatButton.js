import { connect } from 'react-redux';
import DeleteChatButton from '../components/DeleteChatButton';
import { deleteChat } from '../actions/chatActions';

const mapDispatchToProps = (dispatch) => ({
    deleteChat: (id) => dispatch(deleteChat(id))
});

export default connect(null, mapDispatchToProps)(DeleteChatButton);
