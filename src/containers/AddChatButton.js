import { connect } from 'react-redux';
import { createChat } from '../actions/chatActions';
import AddChatButton from '../components/AddChatButton';

const mapDispatchToProps = (dispatch) => ({
    createChat: () => dispatch(createChat())
});

export default connect(null, mapDispatchToProps)(AddChatButton);
