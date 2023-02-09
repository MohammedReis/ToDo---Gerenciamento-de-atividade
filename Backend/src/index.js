const express = require('express');
const cors = require('cors');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');
server.use(cors());
server.use(express.json());

server.listen(3001, () => {
    console.log('API ONLiNE')
});


server.use('/task', TaskRoutes);
