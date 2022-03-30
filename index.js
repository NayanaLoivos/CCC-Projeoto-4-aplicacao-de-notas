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
        Post.findAll().then(function(posts){
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


app.listen(8081, () => {
    console.log('SERVIDOR RODANDO NA URL http://localhost:8081');
});