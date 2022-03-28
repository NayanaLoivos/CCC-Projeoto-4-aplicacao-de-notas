const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.listen(8081, () => {
    console.log('SERVIDOR RODANDO NA URL http://localhost:8081');
});