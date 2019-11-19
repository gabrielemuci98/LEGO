const express = require('express');
const lego_json = require('./lego.json'); //Copia il file lego.json dentro la variabile lego
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'SCEGLI QUALE LEGO VUOI FARE',
    lego: lego_json.profiles //Passa il vettore profiles alla pagina index.pug
  });
});
app.get('/profile', (req, res) => {
  const lego = lego_json.profiles.find((l) => l.id === req.query.id);
  res.render('profile', {
    title: `About ${lego.firstname}`,
    lego,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
