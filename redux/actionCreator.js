export const sendMessage = text => ({
  type: 'SEND_MESSAGE',
  payload: { text }
});

export const receiveMessage = text => ({
  type: 'RECEIVE_MESSAGE',
  payload: { text }
});
