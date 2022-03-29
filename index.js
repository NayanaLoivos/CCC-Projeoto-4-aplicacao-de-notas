const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //conexão com MySQL
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('nomedobancodedados', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql' 
});




app.listen(8081, () => {
    console.log('SERVIDOR RODANDO NA URL http://localhost:8081');
});