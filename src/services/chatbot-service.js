import socketIOClient from 'socket.io-client'

const API_URL = 'http://localhost:3001';
let socket;

const generateToken = () => {
  return fetch(API_URL + '/generate-token')
    .then(data => data.json());
}

const onMessageFromBot = callback => {
  if (socket){
    socket.on('MessageFromBot', data => {
      callback(data);
    });
  }
}

const connect = (token, callback) => {
  socket = socketIOClient(API_URL);
  socket.emit('HandshakeFromUser', { token });

  onMessageFromBot(callback);
}

export const establishConnection = callback => {
  const token = localStorage.getItem('chatbot_token');
  if (token) {
    connect(token, callback);
  } else {
    generateToken()
    .then(data => {
      localStorage.setItem('chatbot_token', data.token);
      connect(data.token, callback);
    });
  }
}

export const emitMessageFromUser = text => {
  const token = localStorage.getItem('chatbot_token');
  if (socket) {
    socket.emit('MessageFromUser', { token, content: text });
  }
}
