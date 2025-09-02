// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista y limpiar el input
    listaDeAmigos.push(nombre);
    input.value = "";

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista mostrada en pantalla
function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista anterior

    listaDeAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}

// Función para limpiar la lista
function limpiarLista() {
    // Vaciar la lista de amigos
    listaDeAmigos = [];

    // Limpiar la lista visual y el resultado del sorteo
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    
    // Limpiar también el input por si tiene texto
    document.getElementById("amigo").value = "";
}