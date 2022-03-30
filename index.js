const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./model/Post');

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

 
    //Pegando dados do formulário
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
   

    //Rota
    app.get('/', (req, res) =>{
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })        
    })

    app.get('/cadastropostagem', (req, res) => {
        res.render('formulario')
    })  

    app.post('/recebimentoformulario', (req, res) => {
        let postData = req.body;
        Post.create({            
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function() {
            res.redirect('/')
        }).catch(function(erro) {
            res.send('Houve um erro: ' + erro)
        })       
    })

    app.post('/deletar/:id', (req, res)=>{
        const { id } = req.params
        Post.destroy({where: {id: Number(id)}}).then(() => {
            res.send('Postagem deletada com sucesso!')
        }).catch((erro)=> {
            res.send('Essa postagem não existe!')
        })
    })


app.listen(8081, () => {
    console.log('SERVIDOR RODANDO NA URL http://localhost:8081');
});