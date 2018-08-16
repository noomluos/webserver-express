const http = require("http");

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: "Soulmoon",
            edad: 24,
            url: req.url
        }

        //res.write("Hola mundo");
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);
console.log("Escuchando por el puerto 8080");