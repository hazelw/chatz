const initialState = {
    chats: [
        {id: 0, messages: [{
            id: 0, message: 'Welcome to the chat', datetime: new Date()
        }]}
    ],
    selectedChatId: 0
};

const chats = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CHAT': {
            const lastChatId = state.chats.reduce(
                (current, {id}) => {return id > current ? id : current;},
                0
            );
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: lastChatId + 1,
                        messages: [
                            {id: 0, message: 'Welcome to the chat', datetime: action.datetime}
                        ]
                    }
                ]
            };
        }
        case 'DELETE_CHAT': {
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.id)
            };
        }
        default: {
            return state;
        }
    }
};

export default chats;
