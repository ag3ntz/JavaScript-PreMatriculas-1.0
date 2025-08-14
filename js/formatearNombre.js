document.addEventListener("input", function (e) {
    if (["nombres", "apellidoPaterno", "apellidoMaterno", "nombreApoderado"].includes(e.target.id)) {
        e.target.value = e.target.value
            .toLowerCase()
            .replace(/\b\w/g, l => l.toUpperCase());
    }
});
