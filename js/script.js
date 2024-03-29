let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;

    // Desmarcar el checkbox para reiniciar el menú hamburguesa
    document.getElementById("checkbox").checked = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  let skills = document.getElementById("skills");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("html");
    habilidades[2].classList.add("css");
    habilidades[3].classList.add("sass");
    habilidades[4].classList.add("tailwind");
    habilidades[5].classList.add("php");
    habilidades[6].classList.add("laravel");
    habilidades[7].classList.add("bootstrap");
    habilidades[8].classList.add("java");
    habilidades[9].classList.add("mysql");
    habilidades[10].classList.add("sqlserver");
    habilidades[11].classList.add("git");
    habilidades[12].classList.add("comunicacion");
    habilidades[13].classList.add("trabajo");
    habilidades[14].classList.add("creatividad");
    habilidades[15].classList.add("dedicacion");
    habilidades[16].classList.add("disciplina");
    habilidades[17].classList.add("cooperación");
    habilidades[18].classList.add("tolerancia");
    habilidades[19].classList.add("organizacion");
    habilidades[20].classList.add("orientadoResultados");
    habilidades[21].classList.add("planeacion");
    habilidades[22].classList.add("iniciativa");
  }
}

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollUp = document.getElementById("scroll-up");
  // Evento de desplazamiento para mostrar u ocultar el botón
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      // Mostrar el botón cuando el desplazamiento es mayor a 100px
      scrollUp.classList.remove("hidden");
    } else {
      // Ocultar el botón cuando el desplazamiento está en la parte superior
      scrollUp.classList.add("hidden");
    }
  });
});

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

const yearElement = document.getElementById("year"); // Obtén el elemento con el id 'year'
const currentYear = new Date().getFullYear(); // Obtiene el año actual

// Asigna el año actual al contenido del elemento
yearElement.innerText = `Copyright © 2020 - ${currentYear}`;

document.addEventListener("DOMContentLoaded", function () {
  const colorSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

  function cambiaTema(ev) {
    const temaSeleccionado = ev.target.checked ? "light" : "dark";

    // Guardar la preferencia de tema en localStorage
    localStorage.setItem("temaSeleccionado", temaSeleccionado);

    // Aplicar el tema seleccionado al documento
    document.documentElement.setAttribute("tema", temaSeleccionado);
  }

  colorSwitch.addEventListener("change", cambiaTema);

  // Verificar si hay una preferencia de tema almacenada en localStorage
  const temaAlmacenado = localStorage.getItem("temaSeleccionado");

  if (temaAlmacenado) {
    // Aplicar la preferencia de tema almacenada al documento
    document.documentElement.setAttribute("tema", temaAlmacenado);

    // Actualizar el interruptor de tema según la preferencia almacenada
    colorSwitch.checked = temaAlmacenado === "light";
  }
});

//Codigo de envios de correos
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const sendEmail = document.getElementById("email");

  function handleSendEmail(event) {
    // Evitar que el formulario se envíe de manera predeterminada
    event.preventDefault();

    const fd = new FormData(this);

    sendEmail.setAttribute(
      "href",
      `mailto:andresparradoparrado@gmail.com?
        subject=${fd.get("subject")}&body=${fd.get("message")}`
    );

    sendEmail.click();
  }

  form.addEventListener("submit", handleSendEmail);
});

document.addEventListener("DOMContentLoaded", function () {
  let redesElement = document.querySelector(".inicio .contenido-banner .social-buttons");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      redesElement.classList.add("fixed");
    } else {
      redesElement.classList.remove("fixed");
    }
  });
});

function changeLang(lang) {
  // Obtenemos la parte antes del fragmento (sin el #)
  const url = window.location.href.split("#")[0];

  // Almacenamos el idioma en localStorage
  localStorage.setItem("yt-widget", `{"lang":"${lang}","active":true}`);

  // Combinamos la parte antes del fragmento y el fragmento, y recarga la página
  window.open(url, "_top");
}

function descargarCV() {
  // Obtenemos el idioma almacenado en localStorage
  const lang = JSON.parse(localStorage.getItem("yt-widget")).lang;

  // Construimos la URL de la CV según el idioma
  let cvUrl = "";
  if (lang === "es") {
    cvUrl = "cvpdf/CV.pdf";
  } else if (lang === "en") {
    cvUrl = "cvpdf/CV_ENGLISH.pdf";
  }

  // Abrimos la URL en una nueva ventana/tab
  window.open(cvUrl, "_blank");
}

  function showMessage() {

    let languageSelect = document.querySelector('.language .click-select');

    let popup = document.getElementById("messagePopup");
    popup.style.display = "block";

    // Obtenemos el idioma almacenado en localStorage
    const language = JSON.parse(localStorage.getItem("yt-widget")).lang;

      if (language === "es") {
        document.getElementById("messageContent").innerText =
          "Descarga mi currículum en función del idioma seleccionado.";
      } else if (language === "en") {
        document.getElementById("messageContent").innerText =
          "Download my resume based on the selected language.";
      }

    // se ajusta el tiempo en milisegundos para que el mensaje se cierre automáticamente
    let autoCloseTimeout = 5000; // 7 segundos

    // Si autoCloseTimeout es mayor que 0, establece un temporizador para cerrar automáticamente el mensaje
    if (autoCloseTimeout > 0) {
      setTimeout(function () {
        closeMessage();
      }, autoCloseTimeout);
    }

  }

  // Agrega un event listener al documento para detectar cuándo se hace clic en algún lugar
document.addEventListener('click', (event) => {
  // Verifica si el clic proviene del elemento que activa showMessage
  if (event.target.matches('.language .click-select')) {
    showMessage();
  }
});

function closeMessage() {
  let popup = document.getElementById("messagePopup");
  popup.style.display = "none";
}