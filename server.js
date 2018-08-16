const express = require('express');
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/parciales");
hbs.registerPartials(__dirname + "/views");

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("home", {
        nombre: "SouLMoon"
    });
})

app.get('/about', (req, res) => {
    res.render("about", {
        nombre: "Soulmoon",
        img: "assets/img/meme.jpg"
    });
})


/* app.get('/', (req, res) => {
    //res.send('Hola mundo');
    let salida = {
        nombre: "Soulmoon",
        edad: 24,
        url: req.url
    }
    res.send(salida);
})
 */
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${port}`);
});