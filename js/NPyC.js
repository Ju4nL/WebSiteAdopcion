function toggleAnswer(card) {
    const answer = card.querySelector(".Respuesta"); // Selecciona la respuesta
    if (answer.classList.contains("visible")) {
        // Si está visible, la oculta
        answer.classList.remove("visible");
    } else {
        // Si está oculta, la muestra
        answer.classList.add("visible");
    }
}