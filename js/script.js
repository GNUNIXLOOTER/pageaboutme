let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
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


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();

} 


const yearElement = document.getElementById('year'); // Obtén el elemento con el id 'year'
const currentYear = new Date().getFullYear(); // Obtiene el año actual

// Asigna el año actual al contenido del elemento
yearElement.innerText = `© Copyright 2020 - ${currentYear}`;