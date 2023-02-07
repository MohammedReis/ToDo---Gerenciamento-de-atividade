const express = require('express');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');
server.use(express.json());

server.listen(3000, () => {
    console.log('API ONLiNE')
});


server.use('/task', TaskRoutes);
