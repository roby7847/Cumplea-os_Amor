const contador = document.getElementById("contador");
const mensajeContador = document.getElementById("mensajeContador");
const btnComenzar = document.getElementById("btnComenzar");

const cartaSeccion = document.getElementById("cartaSeccion");
const sobre = document.getElementById("sobre");
const indicacionCarta = document.getElementById("indicacionCarta");

const btnFotos = document.getElementById("btnFotos");
const fotosSeccion = document.getElementById("fotosSeccion");

const btnSorpresa = document.getElementById("btnSorpresa");

const videoSeccion = document.getElementById("videoSeccion");
const btnReiniciar = document.getElementById("btnReiniciar");

const modalFoto = document.getElementById("modalFoto");
const mensajeFoto = document.getElementById("mensajeFoto");
const cerrarModal = document.getElementById("cerrarModal");

let numero = 10;


/* =========================
   CUENTA REGRESIVA
========================= */

const cuentaRegresiva = setInterval(function () {

    numero--;

    contador.textContent = numero;

    if (numero <= 0) {

        clearInterval(cuentaRegresiva);

        contador.textContent = "❤️";

        mensajeContador.textContent =
            "Ya puedes descubrir tu sorpresa...";

        btnComenzar.classList.remove("oculto");

        btnComenzar.classList.add("aparecer");

    }

}, 1000);


/* =========================
   BOTÓN COMENZAR
========================= */

btnComenzar.addEventListener("click", function () {

    cartaSeccion.classList.remove("oculto");

    cartaSeccion.classList.add("aparecer");

    cartaSeccion.scrollIntoView({
        behavior: "smooth"
    });

    crearCorazones();

});


/* =========================
   ABRIR CARTA
========================= */

sobre.addEventListener("click", function () {

    sobre.classList.toggle("abierta");

    if (sobre.classList.contains("abierta")) {

        indicacionCarta.textContent =
            "❤️ Para ti, con todo mi amor ❤️";

        setTimeout(function () {

            btnFotos.classList.remove("oculto");

            btnFotos.classList.add("aparecer");

        }, 1200);

    }

});


/* =========================
   IR A LAS FOTOS
========================= */

btnFotos.addEventListener("click", function () {

    fotosSeccion.classList.remove("oculto");

    fotosSeccion.classList.add("aparecer");

    fotosSeccion.scrollIntoView({
        behavior: "smooth"
    });

    crearCorazones();

});


/* =========================
   ABRIR MENSAJES DE FOTOS
========================= */

const fotos = document.querySelectorAll(".foto-card");

fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        const mensaje =
            foto.getAttribute("data-mensaje");

        mensajeFoto.textContent = mensaje;

        modalFoto.classList.remove("oculto");

    });

});


/* =========================
   CERRAR MENSAJE
========================= */

cerrarModal.addEventListener("click", function () {

    modalFoto.classList.add("oculto");

});


/* =========================
   CERRAR TOCANDO AFUERA
========================= */

modalFoto.addEventListener("click", function (evento) {

    if (evento.target === modalFoto) {

        modalFoto.classList.add("oculto");

    }

});


/* =========================
   TECLA ESC
========================= */

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        modalFoto.classList.add("oculto");

    }

});


/* =========================
   IR AL VIDEO
========================= */

btnSorpresa.addEventListener("click", function () {

    videoSeccion.classList.remove("oculto");

    videoSeccion.classList.add("aparecer");

    videoSeccion.scrollIntoView({
        behavior: "smooth"
    });

    crearCorazones();

});


/* =========================
   REINICIAR
========================= */

btnReiniciar.addEventListener("click", function () {

    location.reload();

});


/* =========================
   CORAZONES
========================= */

let corazonesActivos = false;

function crearCorazones() {

    if (corazonesActivos) {
        return;
    }

    corazonesActivos = true;

    setInterval(function () {

        const corazon =
            document.createElement("div");

        corazon.classList.add("corazon");

        const corazones = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓"
        ];

        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() * corazones.length
                )
            ];

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            Math.random() * 15 + 15 + "px";

        document.body.appendChild(corazon);

        setTimeout(function () {

            corazon.remove();

        }, 6000);

    }, 500);

}