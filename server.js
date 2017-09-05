const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.send({
        name: 'Lance',
        age: 41,
        city: 'Perth'
    });
});

app.get('/about', (request, response) => {
    response.send('About page');
});

app.get('/bad', (request, response) => {
    response.send({
        code: '999',
        message: 'Unabled to handle this request'
    });
});

app.listen('3000');