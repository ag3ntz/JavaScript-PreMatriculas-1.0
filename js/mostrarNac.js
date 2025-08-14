function mostrarNac(select) {
    const container = document.getElementById("otraNacionalidadContainer");
    container.style.display = (select.value === "Otro") ? "block" : "none";
}