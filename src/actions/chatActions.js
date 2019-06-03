export const createChat = () => ({
    type: 'CREATE_CHAT'
});

export const deleteChat = (id) => ({
    type: 'DELETE_CHAT',
    id
});
