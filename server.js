const app = require("./app");
// const socket= require('socket.io');
// const cors = require('cors');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


// const io = socket(server, {
//   cors: {
//     // this is the address where the react app runs on
//     origin: 'http://localhost:3000'
//   }
// });

// io.on('connection', socket => {
//   console.log('socket id: ', socket.id);
//   console.log('new connection');
//   socket.on('new track', payload => {
//     console.log('track added: ', payload)
//     // send this message to all other connected clients
//     io.emit('track added', payload);
//   })
// })
