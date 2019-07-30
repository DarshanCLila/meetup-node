const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send('ping pong');
});

app.listen(9000);