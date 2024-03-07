Pokédex con HTML, CSS y JavaScript. 

Permite a los usuarios explorar información sobre los Pokémon, y se han utilizado varias técnicas y recursos para lograrlo:

Tecnologías utilizadas:

HTML: Estructura básica del sitio web.
CSS: Estilos para darle vida a la interfaz.
JavaScript: Lógica para cargar datos de la PokéAPI y mostrarlos en la página.

Características destacadas:

Almacenamiento local:

sessionStorage: Se utiliza para almacenar temporalmente datos en el navegador del usuario.
En este proyecto se utiliza para ver busquedas recientes.

localStorage: Permite almacenar datos de forma persistente en el navegador.
En el sitio se utiliza para ver el historial de busquedas y pokemons añadidos.

Consumo de API:
Se ha implementado un sistema CRUD (Crear, Leer, Actualizar, Eliminar) utilizando la PokéAPI.
Los datos de los Pokémon se obtienen mediante llamadas a esta API.

Manipulación del DOM:
Se crea y modifica el contenido de la página dinámicamente utilizando JavaScript. 
Por ejemplo, al cargar los datos de un Pokémon, se actualiza el DOM para mostrar su nombre, imagen y detalles.

Funciones, control de flujos y bucles:
Se han definido funciones para tareas específicas, como cargar datos o filtrar Pokémon por categoría.
Se utilizan estructuras de control de flujo (como if, else) y bucles (como for o while) para manejar diferentes situaciones.

Validaciones:
Se verifica que los datos obtenidos de la API sean válidos antes de mostrarlos en la interfaz.

Librerías:
Se ha utilizado la librería SweetAlert (Swal) para mostrar mensajes de alerta al usuario de manera más atractiva.

Cómo probarlo:
Puedes ver e interactuar con la versión final del proyecto en vivo aquí.
https://isa696.github.io/Pokedex-JS/
