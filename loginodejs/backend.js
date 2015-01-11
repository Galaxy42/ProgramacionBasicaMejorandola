var basededatos = {
	usuario: "freddier",
	password: "mejorandola"
};
console.log("Arrancando server de Node :)");

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use( parcero.urlencoded() );
var servidor;

servidor = web.listen(8080, function () {
	console.log("Servidor arrancado :D");
});

web.get("/", function  (req, res) {
	res.sendfile("formulario.html");
});

web.post("/entrar", function  (req, res) {
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bienvenido al area secreta ;)");
	}
	else
	{
		res.send("Shu, shu!!! Fuera de aquiiii")
	}
});
