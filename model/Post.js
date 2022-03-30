const BancoDeDados = require('./Banco-de-dados');


const Post = BancoDeDados.sequelize.define('postagens', {
    titulo: {
        type: BancoDeDados.Sequelize.STRING
    },
    conteudo: {
        type: BancoDeDados.Sequelize.TEXT
    }
}
);

//Post.sync({force: true}) - uma única vez 

module.exports = Post;