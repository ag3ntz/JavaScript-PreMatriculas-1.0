document.addEventListener("DOMContentLoaded", () => {
    const rutInputs = document.querySelectorAll("input[data-tipo='rut']");

    rutInputs.forEach(input => {
        const feedback = document.createElement("div");
        feedback.classList.add("rutFeedback");
        feedback.style.fontSize = "0.9em";
        input.insertAdjacentElement("afterend", feedback);

        input.addEventListener("input", () => {
            const rutLimpio = limpiarRut(input.value);
            input.value = formatearRut(rutLimpio);

            if (rutLimpio.length >= 8) {
                if (validarRut(rutLimpio)) {
                    input.classList.remove("input-invalido");
                    input.classList.add("input-valido");
                    feedback.textContent = "✔ RUT válido";
                    feedback.style.color = "green";
                } else {
                    input.classList.remove("input-valido");
                    input.classList.add("input-invalido");
                    feedback.textContent = "❌ RUT inválido";
                    feedback.style.color = "red";
                }
            } else {
                input.classList.remove("input-valido", "input-invalido");
                feedback.textContent = "";
            }
        });
    });

    // Validación general al enviar
    document.getElementById("formPrematricula").addEventListener("submit", function (e) {
        let rutValido = true;

        rutInputs.forEach(input => {
            const rutLimpio = limpiarRut(input.value);
            const valido = validarRut(rutLimpio);
            if (!valido) {
                rutValido = false;
                input.classList.remove("input-valido");
                input.classList.add("input-invalido");
                input.nextElementSibling.textContent = "RUT inválido";
                input.nextElementSibling.style.color = "red";
            }
        });

        if (!rutValido) {
            e.preventDefault();
            alert("Por favor, corrige los campos con RUT inválido antes de enviar el formulario.");
            const primerInvalido = document.querySelector(".input-invalido");
            if (primerInvalido) primerInvalido.focus();
        } else {
            alert("Formulario válido. Se enviará pronto...");
            // Aquí irá la integración con Google Sheets
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selectNacionalidad = document.getElementById("nacionalidad");
    const otraNacContainer = document.getElementById("otraNacionalidadContainer");
    const otraNacInput = document.getElementById("otraNacionalidad");

    selectNacionalidad.addEventListener("change", () => {
        if (selectNacionalidad.value === "Otro") {
            otraNacContainer.style.display = "block";
            otraNacInput.required = true; // lo hacemos obligatorio si elige "otro"
        } else {
            otraNacContainer.style.display = "none";
            otraNacInput.required = false; // no obligatorio en los demás casos
            otraNacInput.value = ""; // limpiar si cambia de opinión
        }
    });
});
