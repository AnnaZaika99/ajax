const express = require('express');
var bodyParser = ('body-parser');

app.listen(300);

app.use(express.static('public'));

var urlencodeParser = bodyParser.urlencode({extended: false})

app.get('/user',urlenodeParser, (req, reply) => {
    console.log(req.body.data + ' **GET');
    reply.status(200).send('user get is deliverd');
});
 
app.post('/user',urlenodeParser, (req, reply) => {
    if(req.headers['user-agent'] !='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'){
        console.log(req.body.data + ' **POST');
        console.log(req.headers);
        console.log(req.headers.origin);
        reply.status(200).send('user get is deliverd'); 
        console.log('not a chrome')
    }else{
        console.log('chrome want to access')
    }
   
});