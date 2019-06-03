import { connect } from 'react-redux';
import ChatButton from '../components/ChatButton';
import { selectChat } from '../actions/chatActions';

const mapDispatchToProps = (dispatch) => ({
    selectChat: (id) => dispatch(selectChat(id))
});

export default connect(null, mapDispatchToProps)(ChatButton);
