function Pokemon(n,v,a)
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

function inicio()
{
	var rattata = new Pokemon("Rattata", 40, 2);
rattata.grito = ("Paredes!!!!")
rattata.gritar();

nombrePokemon.innerText = rattata.nombre;
}

//Asignación por valor
//Asignación por referencia



// function Pokemon(nombrePokemon, vidaPoke, ataPoke)
// {
// 	var estructuraPokemon =
// {
// 	nombre: nombrePokemon,
// 	vida: vidaPoke,
// 	ataque: ataPoke,
// 	datos: {tipo: "Tierra", debilidad: "Fuego"}
// };
// 	return estructuraPokemon;
// }
// var pikachu = Pokemon("Pikachu", 100, 55);
// var bulbasaur = Pokemon("Bulbasaur", 90, 50);

// console.log(bulbasaur);

//DOCUMENT OBJECT MODEL
//Objeto
//	Variables
//	Funciones

// document.write("Hola mamá!");
// var pi= 3.141592654
// pi=Math.ceil(pi);
// document.write(pi);

// var maxima;
// maxima = Math.max(5,23,4,5,12,24,23,100);
// document.write(maxima);