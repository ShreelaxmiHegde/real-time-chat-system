export const registerGroupHandlers = (io, socket) => {
    socket.on('join_group', async ({ groupId }) => {
        // const userId = socket.userId;
        socket.join(`group:${groupId}`);
    });
}