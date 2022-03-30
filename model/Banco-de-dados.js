const Sequelize = require('sequelize');

//Conexão com MySQL    
const sequelize = new Sequelize('postapp', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}