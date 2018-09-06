const express = require('express'); //requerendo o express.

const ejs = require('ejs');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}));
//converte os dados enviados para json
app.use(bodyParser.json());

app.get('/', (req, resp) => {
    return resp.json({ msg: 'hello word from express'});
});

app.get('/michelle', (req, resp) => {
    return resp.json({msg: 'rota personalizada da michelle'});
});

//EJS template engine
app.get('/template', (req, resp) => {
    return resp.render('index', {
        msg : 'template engine'
    });

});

app.post('/send', (req, resp) => {
    console.log(req.body);

    return resp.json({ body: req.body });
});


app.listen(3000, () => console.log('Express has been started'));