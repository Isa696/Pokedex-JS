//funcion constructora
const Pokemon = function(numero, nombre, tipo) {
    this.numero = numero
    this.nombre = nombre
    this.tipo = tipo
    }

//pokemones lista con datos

let pokemon1 = new Pokemon(1, "Bulbasaur", "planta veneno");
let pokemon2 = new Pokemon(2, "Ivysaur", "planta veneno");
let pokemon3 = new Pokemon(3, "Venusaur", "planta veneno");
let pokemon4 = new Pokemon(4, "Charmander", "fuego");
let pokemon5 = new Pokemon(5, "Charmeleon", "fuego");
let pokemon6 = new Pokemon(6, "Charizard", "fuego volador");
let pokemon7 = new Pokemon(7, "Squirtle", "agua");
let pokemon8 = new Pokemon(8, "Wartortle", "agua");
let pokemon9 = new Pokemon(9, "Blastoise", "agua");
let pokemon10 = new Pokemon(10, "Caterpie", "bicho");
let pokemon11 = new Pokemon(11, "Metapod", "bicho");
let pokemon12 = new Pokemon(12, "Butterfree", "bicho volador");
let pokemon13 = new Pokemon(13, "Weedle", "bicho veneno");
let pokemon14 = new Pokemon(14, "Kakuna", "bicho veneno");
let pokemon15 = new Pokemon(15, "Beedrill", "bicho veneno");
let pokemon16 = new Pokemon(16, "Pidgey", "normal volador");
let pokemon17 = new Pokemon(17, "Pidgeotto", "normal volador");
let pokemon18 = new Pokemon(18, "Pidgeot", "normal volador");
let pokemon19 = new Pokemon(19, "Rattata", "normal");
let pokemon20 = new Pokemon(20, "Raticate", "normal");
let pokemon21 = new Pokemon(21, "Spearow", "normal volador");
let pokemon22 = new Pokemon(22, "Fearow", "normal volador");
let pokemon23 = new Pokemon(23, "Ekans", "veneno");
let pokemon24 = new Pokemon(24, "Arbok", "veneno");
let pokemon25 = new Pokemon(25, "Pikachu", "eléctrico");
let pokemon26 = new Pokemon(26, "Raichu", "eléctrico");
let pokemon27 = new Pokemon(27, "Sandshrew", "tierra");
let pokemon28 = new Pokemon(28, "Sandslash", "tierra");
let pokemon29 = new Pokemon(29, "Nidoran♀", "veneno");
let pokemon30 = new Pokemon(30, "Nidorina", "veneno");
let pokemon31 = new Pokemon(31, "Nidoqueen", "veneno tierra");
let pokemon32 = new Pokemon(32, "Nidoran♂", "veneno");
let pokemon33 = new Pokemon(33, "Nidorino", "veneno");
let pokemon34 = new Pokemon(34, "Nidoking", "veneno tierra");
let pokemon35 = new Pokemon(35, "Clefairy", "hada");
let pokemon36 = new Pokemon(36, "Clefable", "hada");
let pokemon37 = new Pokemon(37, "Vulpix", "fuego");
let pokemon38 = new Pokemon(38, "Ninetales", "fuego");
let pokemon39 = new Pokemon(39, "Jigglypuff", "normal hada");
let pokemon40 = new Pokemon(40, "Wigglytuff", "normal hada");
let pokemon41 = new Pokemon(41, "Zubat", "veneno volador");
let pokemon42 = new Pokemon(42, "Golbat", "veneno volador");
let pokemon43 = new Pokemon(43, "Oddish", "planta veneno");
let pokemon44 = new Pokemon(44, "Gloom", "planta veneno");
let pokemon45 = new Pokemon(45, "Vileplume", "planta veneno");
let pokemon46 = new Pokemon(46, "Paras", "bicho planta");
let pokemon47 = new Pokemon(47, "Parasect", "bicho planta");
let pokemon48 = new Pokemon(48, "Venonat", "bicho veneno");
let pokemon49 = new Pokemon(49, "Venomoth", "bicho veneno");
let pokemon50 = new Pokemon(50, "Diglett", "tierra");
let pokemon51 = new Pokemon(51, "Dugtrio", "tierra");
let pokemon52 = new Pokemon(52, "Meowth", "normal");
let pokemon53 = new Pokemon(53, "Persian", "normal");
let pokemon54 = new Pokemon(54, "Psyduck", "agua");
let pokemon55 = new Pokemon(55, "Golduck", "agua");
let pokemon56 = new Pokemon(56, "Mankey", "lucha");
let pokemon57 = new Pokemon(57, "Primeape", "lucha");
let pokemon58 = new Pokemon(58, "Growlithe", "fuego");
let pokemon59 = new Pokemon(59, "Arcanine", "fuego");
let pokemon60 = new Pokemon(60, "Poliwag", "agua");
let pokemon61 = new Pokemon(61, "Poliwhirl", "agua");
let pokemon62 = new Pokemon(62, "Poliwrath", "agua lucha");
let pokemon63 = new Pokemon(63, "Abra", "psíquico");
let pokemon64 = new Pokemon(64, "Kadabra", "psíquico");
let pokemon65 = new Pokemon(65, "Alakazam", "psíquico");
let pokemon66 = new Pokemon(66, "Machop", "lucha");
let pokemon67 = new Pokemon(67, "Machoke", "lucha");
let pokemon68 = new Pokemon(68, "Machamp", "lucha");
let pokemon69 = new Pokemon(69, "Bellsprout", "planta veneno");
let pokemon70 = new Pokemon(70, "Weepinbell", "planta veneno");
let pokemon71 = new Pokemon(71, "Victreebel", "planta veneno");
let pokemon72 = new Pokemon(72, "Tentacool", "agua veneno");
let pokemon73 = new Pokemon(73, "Tentacruel", "agua veneno");
let pokemon74 = new Pokemon(74, "Geodude", "roca tierra");
let pokemon75 = new Pokemon(75, "Graveler", "roca tierra");
let pokemon76 = new Pokemon(76, "Golem", "roca tierra");
let pokemon77 = new Pokemon(77, "Ponyta", "fuego");
let pokemon78 = new Pokemon(78, "Rapidash", "fuego");
let pokemon79 = new Pokemon(79, "Slowpoke", "agua psíquico");
let pokemon80 = new Pokemon(80, "Slowbro", "agua psíquico");
let pokemon81 = new Pokemon(81, "Magnemite", "eléctrico acero");
let pokemon82 = new Pokemon(82, "Magneton", "eléctrico acero");
let pokemon83 = new Pokemon(83, "Farfetch'd", "normal volador");
let pokemon84 = new Pokemon(84, "Doduo", "normal volador");
let pokemon85 = new Pokemon(85, "Dodrio", "normal volador");
let pokemon86 = new Pokemon(86, "Seel", "agua");
let pokemon87 = new Pokemon(87, "Dewgong", "agua hielo");
let pokemon88 = new Pokemon(88, "Grimer", "veneno");
let pokemon89 = new Pokemon(89, "Muk", "veneno");
let pokemon90 = new Pokemon(90, "Shellder", "agua");
let pokemon91 = new Pokemon(91, "Cloyster", "agua hielo");
let pokemon92 = new Pokemon(92, "Gastly", "fantasma veneno");
let pokemon93 = new Pokemon(93, "Haunter", "fantasma veneno");
let pokemon94 = new Pokemon(94, "Gengar", "fantasma veneno");
let pokemon95 = new Pokemon(95, "Onix", "roca tierra");
let pokemon96 = new Pokemon(96, "Drowzee", "psíquico");
let pokemon97 = new Pokemon(97, "Hypno", "psíquico");
let pokemon98 = new Pokemon(98, "Krabby", "agua");
let pokemon99 = new Pokemon(99, "Kingler", "agua");
let pokemon100 = new Pokemon(100, "Voltorb", "eléctrico");
let pokemon101 = new Pokemon(101, "Electrode", "eléctrico");
let pokemon102 = new Pokemon(102, "Exeggcute", "planta psíquico");
let pokemon103 = new Pokemon(103, "Exeggutor", "planta psíquico");
let pokemon104 = new Pokemon(104, "Cubone", "suelo");
let pokemon105 = new Pokemon(105, "Marowak", "suelo");
let pokemon106 = new Pokemon(106, "Hitmonlee", "lucha");
let pokemon107 = new Pokemon(107, "Hitmonchan", "lucha");
let pokemon108 = new Pokemon(108, "Lickitung", "normal");
let pokemon109 = new Pokemon(109, "Koffing", "veneno");
let pokemon110 = new Pokemon(110, "Weezing", "veneno");
let pokemon111 = new Pokemon(111, "Rhyhorn", "suelo roca");
let pokemon112 = new Pokemon(112, "Rhydon", "suelo roca");
let pokemon113 = new Pokemon(113, "Chansey", "normal");
let pokemon114 = new Pokemon(114, "Tangela", "planta");
let pokemon115 = new Pokemon(115, "Kangaskhan", "normal");
let pokemon116 = new Pokemon(116, "Horsea", "agua");
let pokemon117 = new Pokemon(117, "Seadra", "agua");
let pokemon118 = new Pokemon(118, "Goldeen", "agua");
let pokemon119 = new Pokemon(119, "Seaking", "agua");
let pokemon120 = new Pokemon(120, "Staryu", "agua");
let pokemon121 = new Pokemon(121, "Starmie", "agua psíquico");
let pokemon122 = new Pokemon(122, "Mr. Mime", "psíquico hada");
let pokemon123 = new Pokemon(123, "Scyther", "bicho volador");
let pokemon124 = new Pokemon(124, "Jynx", "hielo psíquico");
let pokemon125 = new Pokemon(125, "Electabuzz", "eléctrico");
let pokemon126 = new Pokemon(126, "Magmar", "fuego");
let pokemon127 = new Pokemon(127, "Pinsir", "bicho");
let pokemon128 = new Pokemon(128, "Tauros", "normal");
let pokemon129 = new Pokemon(129, "Magikarp", "agua");
let pokemon130 = new Pokemon(130, "Gyarados", "agua volador");
let pokemon131 = new Pokemon(131, "Lapras", "agua hielo");
let pokemon132 = new Pokemon(132, "Ditto", "normal");
let pokemon133 = new Pokemon(133, "Eevee", "normal");
let pokemon134 = new Pokemon(134, "Vaporeon", "agua");
let pokemon135 = new Pokemon(135, "Jolteon", "eléctrico");
let pokemon136 = new Pokemon(136, "Flareon", "fuego");
let pokemon137 = new Pokemon(137, "Porygon", "normal");
let pokemon138 = new Pokemon(138, "Omanyte", "roca agua");
let pokemon139 = new Pokemon(139, "Omastar", "roca agua");
let pokemon140 = new Pokemon(140, "Kabuto", "roca agua");
let pokemon141 = new Pokemon(141, "Kabutops", "roca agua");
let pokemon142 = new Pokemon(142, "Aerodactyl", "roca volador");
let pokemon143 = new Pokemon(143, "Snorlax", "normal");
let pokemon144 = new Pokemon(144, "Articuno", "hielo volador");
let pokemon145 = new Pokemon(145, "Zapdos", "eléctrico volador");
let pokemon146 = new Pokemon(146, "Moltres", "fuego volador");
let pokemon147 = new Pokemon(147, "Dratini", "dragón");
let pokemon148 = new Pokemon(148, "Dragonair", "dragón");
let pokemon149 = new Pokemon(149, "Dragonite", "dragón volador");
let pokemon150 = new Pokemon(150, "Mewtwo", "psíquico");
let pokemon151 = new Pokemon(151, "Mew", "psíquico");

// pokemones Lista array

let lista = [
    pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8, pokemon9, pokemon10,
    pokemon11, pokemon12, pokemon13, pokemon14, pokemon15, pokemon16, pokemon17, pokemon18, pokemon19, pokemon20,
    pokemon21, pokemon22, pokemon23, pokemon24, pokemon25, pokemon26, pokemon27, pokemon28, pokemon29, pokemon30,
    pokemon31, pokemon32, pokemon33, pokemon34, pokemon35, pokemon36, pokemon37, pokemon38, pokemon39, pokemon40,
    pokemon41, pokemon42, pokemon43, pokemon44, pokemon45, pokemon46, pokemon47, pokemon48, pokemon49, pokemon50,
    pokemon51, pokemon52, pokemon53, pokemon54, pokemon55, pokemon56, pokemon57, pokemon58, pokemon59, pokemon60,
    pokemon61, pokemon62, pokemon63, pokemon64, pokemon65, pokemon66, pokemon67, pokemon68, pokemon69, pokemon70,
    pokemon71, pokemon72, pokemon73, pokemon74, pokemon75, pokemon76, pokemon77, pokemon78, pokemon79, pokemon80,
    pokemon81, pokemon82, pokemon83, pokemon84, pokemon85, pokemon86, pokemon87, pokemon88, pokemon89, pokemon90,
    pokemon91, pokemon92, pokemon93, pokemon94, pokemon95, pokemon96, pokemon97, pokemon98, pokemon99, pokemon100,
    pokemon101, pokemon102, pokemon103, pokemon104, pokemon105, pokemon106, pokemon107, pokemon108, pokemon109, pokemon110,
    pokemon111, pokemon112, pokemon113, pokemon114, pokemon115, pokemon116, pokemon117, pokemon118, pokemon119, pokemon120,
    pokemon121, pokemon122, pokemon123, pokemon124, pokemon125, pokemon126, pokemon127, pokemon128, pokemon129, pokemon130,
    pokemon131, pokemon132, pokemon133, pokemon134, pokemon135, pokemon136, pokemon137, pokemon138, pokemon139, pokemon140,
    pokemon141, pokemon142, pokemon143, pokemon144, pokemon145, pokemon146, pokemon147, pokemon148, pokemon149, pokemon150,
    pokemon151
]

//funciones buscar por nombre

function buscarPokemon(){
    Swal.fire({
        title: 'Ingresa el nombre que deseas buscar',
        icon: "question",
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.toLowerCase().trim()
            let resultado = lista.filter ((pokemon) => pokemon.nombre.toLowerCase().includes(palabraClave))
                if (resultado.length > 0){
                    console.table(resultado)

                    Swal.fire({
                        title: 'Resultados de búsqueda',
                        html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
                        resultado.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
                        confirmButtonText: 'OK'
                        })
                    return
                    }else{
                        Swal.fire({
                        title: 'No se encontraron coincidencias con: ' + palabraClave,
                        icon: 'error',
                        confirmButtonText: 'OK'
                        })
                    }
                }
    }
)}

//funcion buscar numero

function buscarNumero(){
        Swal.fire({
        title: 'Que pokemon quieres buscar, segun su numero pokedex?',
        icon: "question",
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

            preConfirm: (numBuscado) => {
                numBuscado = parseInt(numBuscado)
                let resultado = lista.filter ( (pokemon) => pokemon.numero === numBuscado)
                if(resultado.length > 0){
                console.table(resultado);

                    Swal.fire({
                        title: 'Resultados de búsqueda',
                        html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
                        resultado.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
                        confirmButtonText: 'OK'
                        })
                }else{
                Swal.fire({
                    title: "no se encontro ninguna coincidencia con: " + numBuscado,
                    icon: 'error',
                    confirmButtonText: 'OK'
                    })
                }
            }
        })
}

//funcion buscar por tipo

function buscarTipo(){
    Swal.fire({
        title: 'Ingresa el tipo de pokemon que deseas buscar',
        icon: "question",
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,

        preConfirm: (palabraClave) => {
            palabraClave = palabraClave.toLowerCase().trim()
            let resultado = lista.filter ((pokemon) => pokemon.tipo.toLowerCase().includes(palabraClave))
                if (resultado.length > 0){
                    console.table(resultado)

                    Swal.fire({
                        title: 'Resultados de búsqueda',
                        html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
                        resultado.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
                        confirmButtonText: 'OK'
                        })
                    return
                    }else{
                        Swal.fire({
                        title: 'No se encontraron coincidencias con: ' + palabraClave,
                        icon: 'error',
                        confirmButtonText: 'OK'
                        })
                    }
                }
    }
)}

//funcion crear

function crearPokemon() {
    let nombre =  prompt("ingresa el nombre del pokemon")
    let tipo = prompt("que tipo es?")
    
    if ( (nombre == ("" || null)) || (tipo == ("" || null))){
        alert("por favor ingresa valores validos")
        return
    }
    let numero = lista.length ++ // asi el nuevo pokemon siempre sera el numero que sigue en la lista

    let pokemon = new Pokemon (numero, nombre, tipo)
    lista.push(pokemon)
    console.table(lista[lista.length - 1])
    ultimoNumero = lista[lista.length - 1].numero
    Swal.fire({
        icon: "success",
        title: "Pokemon añadido!!!",
        text: `Se ha agregado el pokemon: "${pokemon.nombre}" a la lista.`,
        timer: 3000 // Tiempo en milisegundos para cerrar la ventana automáticamente
      });
}

//cont ultimo numero declarado globalmente

let ultimoNumero = lista[lista.length - 1].numero

                //Botones
//buscar por nombre
let boton = document.getElementById("btn-name")

boton.addEventListener("click", buscarPokemon)

//buscar por numero
let boton2 = document.getElementById("btn-num")

boton2.addEventListener("click", buscarNumero)

//buscar por tipo
let boton3 = document.getElementById("btn-tipo")

boton3.addEventListener("click", buscarTipo)

//Añadir nuevo pkm
let boton5 = document.getElementById("btn-add")

boton5.addEventListener("click", crearPokemon)