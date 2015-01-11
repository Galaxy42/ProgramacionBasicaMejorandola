function aleatorio (minimo, maximo) 
{
	var numero = Math.floor( Math.random() *(maximo - minimo +1)  + minimo );
	return numero
}

var piedra= 0;
var papel= 1;
var tijera= 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\n Piedra: 0\n Papel: 1\n Tijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript(La máquina) eligió " + opciones[opcionMaquina]);

if (opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste :C");
	}
	else if(opcionMaquina == tijera)
		{
			alert("Ganaste :D");
		}
}
else if (opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Ganaste :D");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
		{
			alert("Perdiste :C");
		}
}
else if (opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste :C");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste :D");
	}
	else if(opcionMaquina == tijera)
		{
			alert("Empate!");
		}
}
else
{
	alert("Tienes que elegir 0, 1, 2 dependiendo del elemento con el que quieres jugar >_>");
}