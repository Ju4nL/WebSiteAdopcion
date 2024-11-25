function toggleAnswer(card) {
    const answer = card.querySelector(".Respuesta"); // Selecciona la respuesta
    const icon = card.querySelector(".icono"); // Selecciona el ícono

    // Alterna la visibilidad de la respuesta
    if (answer.classList.contains("visible")) {
        answer.classList.remove("visible"); // Oculta la respuesta
        card.classList.remove("expandida"); // Vuelve a la altura cuadrada
        icon.textContent = "+"; // Cambia el ícono a "+"
        icon.classList.remove("activo");
    } else {
        answer.classList.add("visible"); // Muestra la respuesta
        card.classList.add("expandida"); // Ajusta la altura para mostrar contenido
        icon.textContent = "-"; // Cambia el ícono a "-"
        icon.classList.add("activo");
    }
}

