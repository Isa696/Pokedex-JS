/* url guardada en const */
const URL = "https://pokeapi.co/api/v2/pokemon/"

//Array para almacenar promesas API
const fetchPromises = []

//Consumo API
for (let i = 1 ; i <= 151 ; i++){
    fetchPromises.push(
        fetch(URL + i)
        .then((response) => response.json())
        .then((data) => {
            const pokemonData ={
                imgPkm : data.sprites.other["official-artwork"].front_default,
                alturaPkm : data.height,
                pesoPkm : data.weight
            }
            return pokemonData
        })
        )
    }

    // Función para agregar datos API dentro de cada objeto pokemon
    function agregarDatosApi(pokemon, pokemonData) {
        pokemon.imgPkm = pokemonData.imgPkm
        pokemon.alturaPkm = pokemonData.alturaPkm
        pokemon.pesoPkm = pokemonData.pesoPkm
    }

Promise.all(fetchPromises)
  .then((pokemonDataArray) => {
    for (let i = 0; i < lista.length; i++) {
      agregarDatosApi(lista[i], pokemonDataArray[i])
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos de la API:", error)
  })

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
let pokemon56 = new Pokemon(56, "Mankey", "luchador");
let pokemon57 = new Pokemon(57, "Primeape", "luchador");
let pokemon58 = new Pokemon(58, "Growlithe", "fuego");
let pokemon59 = new Pokemon(59, "Arcanine", "fuego");
let pokemon60 = new Pokemon(60, "Poliwag", "agua");
let pokemon61 = new Pokemon(61, "Poliwhirl", "agua");
let pokemon62 = new Pokemon(62, "Poliwrath", "agua luchador");
let pokemon63 = new Pokemon(63, "Abra", "psíquico");
let pokemon64 = new Pokemon(64, "Kadabra", "psíquico");
let pokemon65 = new Pokemon(65, "Alakazam", "psíquico");
let pokemon66 = new Pokemon(66, "Machop", "luchador");
let pokemon67 = new Pokemon(67, "Machoke", "luchador");
let pokemon68 = new Pokemon(68, "Machamp", "luchador");
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
let pokemon104 = new Pokemon(104, "Cubone", "tierra");
let pokemon105 = new Pokemon(105, "Marowak", "tierra");
let pokemon106 = new Pokemon(106, "Hitmonlee", "luchador");
let pokemon107 = new Pokemon(107, "Hitmonchan", "luchador");
let pokemon108 = new Pokemon(108, "Lickitung", "normal");
let pokemon109 = new Pokemon(109, "Koffing", "veneno");
let pokemon110 = new Pokemon(110, "Weezing", "veneno");
let pokemon111 = new Pokemon(111, "Rhyhorn", "tierra roca");
let pokemon112 = new Pokemon(112, "Rhydon", "tierra roca");
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

// añadir al Json datos del Localstorage
    localStorage.getItem("pokemones") ? lista = JSON.parse(localStorage.getItem("pokemones")) : lista = lista;

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
            let resultado = lista.filter ((pokemon) => removeAccents( pokemon.nombre).toLowerCase().includes(palabraClave))
                if (resultado.length > 0){
                    console.table(resultado)
                    localStoragePkmHistorial(resultado)
                    guardarSessionStoragePkm(resultado)

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
                console.table(resultado)
                localStoragePkmHistorial(resultado)
                guardarSessionStoragePkm(resultado)
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
            let resultado = lista.filter ((pokemon) => removeAccents(pokemon.tipo).toLowerCase().includes(palabraClave))
                if (resultado.length > 0){
                    console.table(resultado)
                    localStoragePkmHistorial(resultado)
                    guardarSessionStoragePkm(resultado)
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
    Swal.fire({
        title: "Agregar Pokemon",
        html:
        `<div style="display: flex; flex-direction: column;">
        <label>Nombre:</label> <input id="nombre-input" class="swal2-input" type="text" autofocus>
        <label>Tipo:</label> <input id="tipo-input" class="swal2-input" type="text" autofocus>
        <label>URL de la Imagen:</label> <input id="imagen-input" class="swal2-input" type="text" autofocus>
      </div>`,
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
            if (result.isConfirmed) {
                let numero = ultimoNumero () // asi el nuevo pokemon siempre sera el numero que sigue en la lista
                let nombre= document.getElementById("nombre-input").value.trim()
                let tipo = document.getElementById("tipo-input").value.trim()
                let imgPkm = document.getElementById("imagen-input").value

            if (!nombre || !tipo){ /* validacion para evitar string vacio y cancel */
                Swal.fire({
                    title: "Error",
                    text: "Por favor ingresa valores válidos.",
                    icon: 'error',
                    confirmButtonText: 'OK'
            })
                return
            }
            let pokemon = new Pokemon (numero, nombre, tipo, imgPkm)

            if (lista.some((nuevopkm) => nuevopkm.nombre === pokemon.nombre)) {
                Swal.fire({
                  icon: "warning",
                  title: "Advertencia",
                  text: "El pokemon ya existe en la lista."
                })
                return
              }
                lista.push(pokemon)
                localStoragePkmCreados(pokemon)
                localStoragePkmHistorial(pokemon)
                guardarSessionStoragePkm(pokemon)

                Swal.fire({
                    icon: "success",
                    title: "Pokemon añadido!!!",
                    text: `Se ha agregado el pokemon: "${pokemon.nombre}" a la lista.`,
                    timer: 3000 // Tiempo en milisegundos para cerrar la ventana automáticamente
                })
            }
        }
        )
}

//Ultimo numero
function ultimoNumero () {
    if(!localPkmCreados){
        return lista[lista.length - 1].numero +1 /* si localStrg es falsy, asigna ultimo num del array */
} else{
    localPkmCreadosParseado.reduce((max, localPkmCreadosParseado) => { /* Reduce para encontrar num max dentro del LocalStrg */
        return localPkmCreadosParseado.numero > max ? localPkmCreadosParseado.numero : max;
        }, -Infinity)
    }
}

//Funcion buscar aleatorio

function buscarAleatorio (){
    let aleatorio = Math.floor(Math.random() * 151) + 1
    let resultado = lista.filter ( (pokemon) => pokemon.numero === aleatorio)
    Swal.fire({
        title: 'Resultados de búsqueda',
        html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
        resultado.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
        confirmButtonText: 'OK'
        })
}

//Datos Creados Local Declarado globalmente
let localPkmCreados = localStorage.getItem('creados')
let localPkmCreadosParseado = localPkmCreados ? JSON.parse(localPkmCreados) : [];

//Añadir creados al Local storage

function localStoragePkmCreados(nuevoPokemon) {
    localPkmCreadosParseado.push(nuevoPokemon)
    
    localStorage.setItem('creados', JSON.stringify(localPkmCreadosParseado));
}

//Añadir Historial al Local storage

let localPkmHistParseado = JSON.parse( localStorage.getItem('historial')) || []

function localStoragePkmHistorial(nuevoPokemon) {
    localPkmHistParseado = localPkmHistParseado.concat(nuevoPokemon);
    localStorage.setItem('historial', JSON.stringify(localPkmHistParseado))
}

//Añadir recientes al session storage

let pokemonReciente = JSON.parse(sessionStorage.getItem('recientes')) || []

function guardarSessionStoragePkm(nuevoPokemon) {
    pokemonReciente = pokemonReciente.concat(nuevoPokemon);
    sessionStorage.setItem('recientes', JSON.stringify(pokemonReciente));
}

//funcion Mostrar recientes
function mostrarRecientes(){
    let pokemonReciente = JSON.parse(sessionStorage.getItem('recientes'))

    if (!pokemonReciente || pokemonReciente.length === 0) {
        Swal.fire({
          title: 'No hay búsquedas recientes',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        return;
      }
Swal.fire({
    title: 'Busquedas Recientes',
    html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
    pokemonReciente.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
    confirmButtonText: 'OK'
    })
}

//funcion Mostrar Historial
function mostrarHistorial(){
    let pokemonHistorial = JSON.parse(localStorage.getItem('historial'))

    if (!pokemonHistorial || pokemonHistorial.length === 0) {
        Swal.fire({
          title: 'Historial vacio',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        return;
      }
Swal.fire({
    title: 'Todas tus busquedas',
    html: '<table><tr><th>Numero</th><th>Nombre</th><th>Tipo</th></tr>' +
    pokemonHistorial.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
    confirmButtonText: 'OK'
    })
}

//Borrar Historial y recientes

function borrarStorage() {
    localStorage.removeItem('historial')
    sessionStorage.clear()
    Swal.fire({
        title: 'Historial y recientes borrado correctamente :D',
        icon: 'info',
        confirmButtonText: 'OK'
      });
}

//Borrar Pkm Creados

function borrarPkmCreados() {
    localStorage.removeItem('creados');
    Swal.fire({
        title: 'Pokemones creados borrados correctamente :(',
        icon: 'info',
        confirmButtonText: 'OK'
      });
  }
//Remover acentos
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

//funcion forEach para ver todos, Tambien para ver Tipos
function verTodos (tipoFiltro = null) {
    const pokemons = tipoFiltro ? lista.filter(pokemon => pokemon.tipo.includes(tipoFiltro)) : lista;
    pokemons.forEach(pokemon => {
    const pokemonCard = crearPokemonCard(pokemon);
    mainContainer.appendChild(pokemonCard);
})
}
//ver pokemon creados

function verPokemonCreados() {
    let localPkmCreados = JSON.parse(localStorage.getItem('creados'));
  
    if (!localPkmCreados || localPkmCreados.length === 0) {
      Swal.fire({
        title: 'No hay Pokémon creados',
        icon: 'info',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    Swal.fire({
      title: 'Pokémon Creados',
      html: '<table><tr><th>Numero</th><th>Nombre</th><th>Imagen</th><th>Tipo</th></tr>' +
        localPkmCreados.map(pokemon => `<tr><td>${pokemon.numero}</td><td>${pokemon.nombre}</td><td><img src="${pokemon.imgPkm}" alt="${pokemon.nombre}" width="100"></td><td>${pokemon.tipo}</td></tr>`).join('') + '</table>',
      confirmButtonText: 'OK'
    });
}

                //Botones
//buscar por nombre
let btnNombre = document.getElementById("btn-name")

btnNombre.addEventListener("click", buscarPokemon)

//buscar por numero
let btnNum = document.getElementById("btn-num")

btnNum.addEventListener("click", buscarNumero)

//buscar por tipo
let btnTipo = document.getElementById("btn-tipo")

btnTipo.addEventListener("click", buscarTipo)

//Añadir nuevo pkm
let btnAdd = document.getElementById("btn-add")

btnAdd.addEventListener("click", crearPokemon)

//Recientes
let btnHistorial = document.getElementById("btn-historial")

btnHistorial.addEventListener("click", mostrarHistorial)

//Buscar aleatorio
let btnRandom = document.getElementById("btn-random")

btnRandom.addEventListener("click", buscarAleatorio)

// ver creados
let btnverCreados = document.getElementById("btn-creados")

btnverCreados.addEventListener("click", verPokemonCreados)

//Recientes
let btnRecientes = document.getElementById("btn-recientes")

btnRecientes.addEventListener("click", mostrarRecientes)

    //ver todos
let botonTodos = document.getElementById("ver-todos")

botonTodos.addEventListener("click", () => {
    removerCards()
    verTodos()
})

        //Normal
let btnNormal = document.getElementById("normal")

btnNormal.addEventListener("click",() =>{
    removerCards()
    verTodos("normal")
})

        //fuego
let btnFuego = document.getElementById("fire")

btnFuego.addEventListener("click",() => {
    removerCards()
    verTodos("fuego")
})

        //agua
let btnAgua = document.getElementById("water")

btnAgua.addEventListener("click",() => {
    removerCards()
    verTodos("agua")
})

        //Planta
let btnPlanta = document.getElementById("grass")

btnPlanta.addEventListener("click",() => {
    removerCards()
    verTodos("planta")
})

        //Electrico
let btnElect = document.getElementById("electric")

btnElect.addEventListener("click",() => {
    removerCards()
    verTodos("eléctrico")
})

        //Hielo
let btnIce = document.getElementById("ice")

btnIce.addEventListener("click",() => {
    removerCards()
    verTodos("hielo")
})

        //Luchador
let btnLucha = document.getElementById("fighting")

btnLucha.addEventListener("click",() =>{
    removerCards()
    verTodos("luchador")
})

        //Veneno
let btnVen = document.getElementById("poison")

btnVen.addEventListener("click",() => {
    removerCards()
    verTodos("veneno")})

        //Tierra
let btnTierra = document.getElementById("ground")

btnTierra.addEventListener("click",() => {
    removerCards()
    verTodos("tierra")})

        //Volador
let btnVolador = document.getElementById("flying")

btnVolador.addEventListener("click",() => {
    removerCards()
    verTodos("volador")})

        //Psíquico
let btnPsiq = document.getElementById("psychic")

btnPsiq.addEventListener("click",() => {
    removerCards()
    verTodos("psíquico")})

        //Bicho
let btnBicho = document.getElementById("bug")

btnBicho.addEventListener("click",() => {
    removerCards()
    verTodos("bicho")})

        //Roca
let btnRoca = document.getElementById("rock")

btnRoca.addEventListener("click",() => {
    removerCards()
    verTodos("roca")})

        //Fantasma
let btnFant = document.getElementById("ghost")

btnFant.addEventListener("click",() => {
    removerCards()
    verTodos("fantasma")})

        //Dragón
let btnDrag = document.getElementById("dragon")

btnDrag.addEventListener("click",() => {
    removerCards()
    verTodos("dragón")})

        //Acero
let btnAcero = document.getElementById("steel")

btnAcero.addEventListener("click",() => {
    removerCards()
    verTodos("acero")})

        //Hada
let btnHada = document.getElementById("fairy")

btnHada.addEventListener("click",() => {
    removerCards()
    verTodos("hada")})

//Borrar Historial boton
let borrarHistorial = document.getElementById("btn-borrar-historial")

borrarHistorial.addEventListener("click", borrarStorage)

//Borrar Historial boton
let borrarPkm = document.getElementById("btn-borrar-pkm")

borrarPkm.addEventListener("click", borrarPkmCreados)

//Main contenedor de las cards declarado
const mainContainer = document.querySelector('main');

    //funcion remover cards
function removerCards() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }
}

//crear elementos en el DOM

function crearPokemonCard(pokemon) {
    //div con la clase "poke-card"
    const pokeCard = document.createElement('div');
    pokeCard.classList.add('poke-card');

    // numero pkmn
    const h2 = document.createElement('h2');
    h2.textContent = `# ${pokemon.numero}`;
    h2.classList.add("nav-title2")

const div = document.createElement("div");
    div.innerHTML = `
    <div class="pokemon-imagen">
        <img src="${pokemon.imgPkm}" alt="${pokemon.nombre}">
    </div>
    <div class="pokemon-stats">
        <p class="stat">${pokemon.alturaPkm}m</p>
        <p class="stat">${pokemon.pesoPkm}kg</p>
    </div>
    `
    // nombre pkmn
    const h3 = document.createElement('h3');
    h3.classList.add(`btn-header`)
    h3.textContent = pokemon.nombre;

    // tipo pkmn
    const p = document.createElement('p');
    p.textContent = pokemon.tipo;
    p.classList.add('btn-header')
    // Agregar numero, nombre y tipo
    pokeCard.appendChild(h2);
    pokeCard.appendChild(h3);
    pokeCard.appendChild(div)
    pokeCard.appendChild(p);

    return pokeCard;
}