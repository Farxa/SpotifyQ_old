const app = require("./app");
const socket = require('socket.io');
const cors = require('cors');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = 5005;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


const io = socket(server);

io.on('connection', socket => {
  console.log('socket id: ', socket.id);
  console.log('track added ', payload => {
    console.log('track added ', payload)
    io.emit('rack added', payload);
  })
})
