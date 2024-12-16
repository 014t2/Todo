// Función para agregar una nueva tarea
function agregarTarea(event) {
    event.preventDefault();

    // Obtener el texto de la tarea
    const tareaInput = document.querySelector("input");
    const tarea = tareaInput.value;

    if (tarea.trim() === "") {
        alert("Por favor añade una tarea.");
        return;
    }

    // Crear un nuevo elemento <li>
    const lista = document.createElement("li");

    // Agregar una clase a la lista para alineación de flexbox
    lista.classList.add("flex", "items-center", "mb-2");

    // Crear un nuevo elemento <input> de tipo checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    // Agregar una clase para estilo del checkbox
    inputCheckbox.classList.add("mr-2", "appearance-none", "w-5", "h-5", "rounded-full", "border", "border-gray-400", "checked:bg-green-400", "checked:border-green-600");

    // Crear el texto de la tarea
    const tareaTexto = document.createElement("span");
    tareaTexto.textContent = tarea;

    // Crear un nuevo elemento <button> para eliminar la tarea
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // Estilo para el botón de eliminar
    botonEliminar.classList.add("border", "rounded-full", "bg-red-600", "text-white", "p-1");

    // Añadir el evento al botón para eliminar la tarea
    botonEliminar.addEventListener("click", function () {
        lista.remove();
    });

    // Crear nuevo elemento textarea
    const descripcion = document.createElement("textarea");

    // Asignar atributos
    descripcion.setAttribute("placeholder", "Pequeña descripción (opcional)");

    // Agregar estilos
    descripcion.classList.add("w-36", "p-2", "border", "rounded-lg", "m-auto");

    // Agregar el checkbox, el texto y el botón de eliminar a la tarea
    lista.appendChild(inputCheckbox);
    lista.appendChild(tareaTexto);
    lista.appendChild(descripcion);
    lista.appendChild(botonEliminar);

    // Agregar el evento 'change' al checkbox para actualizar el estilo cuando esté marcado
    inputCheckbox.addEventListener("change", function () {
        if (inputCheckbox.checked) {
            tareaTexto.classList.add("line-through", "text-gray-500"); // Tachado y color gris cuando está marcado
        } else {
            tareaTexto.classList.remove("line-through", "text-gray-500"); // Quitar el tachado y volver al color original
        }
    });

    // Agregar la tarea al contenedor con id "contenido"
    document.getElementById("contenido").appendChild(lista);

    // Vaciar el input después de agregar la tarea
    tareaInput.value = "";
}
