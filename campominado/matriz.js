//var menu = ["Productos", "Ventas", "Contacto"];
//document.write( menu[0] );

//var dofa = [ ["Fuerza", "Oportunidad"] , ["Debilidades", "Amenazas"]];

//document.write( dofa[1][1] );

function explosion()
{
	alert("BOOM!!");
	document.write("<h2>BOOM! Elegiste un área minada :c</h2>");
}
function ganaste()
{
	document.write("Eres un ganador :)");
}

//1= Bomba 0= No hay bomba
var campo = [ [ 1 , 0 , 0 ] ,
			  [ 0 , 1 , 0 ] ,
			  [ 1 , 0 , 1 ] ];

var x, y;

var textos = ["Cesped", "Bomba"];

alert("Estás en un campo minado\nElige una posición entre el 0 y el 2 para X y para Y");

x= prompt("Posición en X? (entre 0 y 2)");
y= prompt("Posición en Y? (entre 0 y 2)");

if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if(posicion == 1)
	{
		explosion();
	}
	else{
		ganaste();
	}
}
else{
	document.write("¡Te saliste del campo!");
	explosion();
}


