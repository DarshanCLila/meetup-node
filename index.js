const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(9000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('started on 9000');
    }
});