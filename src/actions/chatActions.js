export const createChat = () => ({
    type: 'CREATE_CHAT',
    datetime: new Date()
});

export const deleteChat = (id) => ({
    type: 'DELETE_CHAT',
    id
});

export const selectChat = (id) => ({
    type: 'SELECT_CHAT',
    id
});
