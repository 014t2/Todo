// Función para agregar una nueva tarea
function agregarTarea(event) {
    
    event.preventDefault();
    

    // Obtener el texto de la tarea
    const tarea = document.querySelector("input").value;

    if(tarea.trim() === ""){
        alert("Por favor añade una tarea.");
        return;
    }

    // Crear un nuevo elemento <li>
    const lista = document.createElement("li");

    // Establecer el texto de la lista
    lista.textContent = tarea;

    // Agregar una clase a la lista
    lista.classList.add("flex", "justify-between","mb-2");

    // Crear un nuevo elemento <button>
    const botonEliminar = document.createElement("button");

    // Establecer el texto del boton
    botonEliminar.textContent = "Eliminar";

    // Agregar una clase a la lista
    botonEliminar.classList.add("ml-16", "border","rounded-full", "bg-red-600", "text-white","p-1");

    // Añadir el evento al botón para eliminar la tarea cuando se haga clic
    botonEliminar.addEventListener("click", function() {
        lista.remove();
    });

    // Agregar el botón a la tarea
    lista.appendChild(botonEliminar);

    // Agregar la tarea al contenedor con id "contenido"
    document.getElementById("contenido").appendChild(lista);
}

