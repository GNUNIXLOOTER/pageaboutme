<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Pablo Andres | Web developer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- MENU ENCABEZADO -->
    <div class="contenedor-header">
        <header>
            <div class="logo">
                <a href="#">PABLO</a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" onclick="seleccionar()">Home</a></li>
                    <li><a href="#sobremi" onclick="seleccionar()">Acerca de mi</a></li>
                    <li><a href="#skills" onclick="seleccionar()">Habilidades</a></li>
                    <li><a href="#curriculum" onclick="seleccionar()">Curriculum vitae</a></li>
                    <li><a href="#portfolio" onclick="seleccionar()">Proyectos</a></li>
                    <li><a href="#contacto" onclick="seleccionar()">Contacto</a></li>
                </ul>
            </nav>
            <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>

    <!-- SECCION INICIO -->
    <section id="inicio" class="inicio">
        <div class="contenido-banner">
            <div class="contenedor-img">
                <img src="img/foto.png" alt="foto">
            </div>
            <h1>PABLO PARRADO</h1>
            <h2>Ingeniero informático</h2>
            <div class="redes">
                <a href="https://www.facebook.com/andres.parrado.982" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/PABLOANDRES0605" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/gnunixlooter/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/pablo-andr%C3%A9s-parrado-parrado-3127161a5" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <!--<a href="#"><i class="fa-solid fa-rss"></i></a>-->
            </div>
        </div>
    </section>
    <div class="linea"></div>
    <!-- SECCION SOBRE MI -->
    <section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
            <h2>Acerca de mi</h2>
            <p><span>Hola, soy Pablo Andres Parrado Parrado.</span> Soy desarrollador web junior y practicante de Ingeniería
                Informática y estoy en búsqueda de mi primera oportunidad
                laboral como desarrollador de software, tengo habilidades en el desarrollo de aplicaciones y sistemas orientada a
                objetos en java Desktop, JavaScript, PHP, HTML, CSS, Tailwind CSS, Css/SASS, Ajax y Git. Manejo de bases de datos
                SQL
                SERVER y MYSQL. Tambien algunos conocimientos en el sistema operativo Linux y Help Desk Support.</p>
            
            <p>
                Me considero una persona responsable, creativa y autodidacta, ademas me gusta trabajar en equipo en alta disciplina
                y
                responsabilidad, con iniciativa para resolver problemas eficientemente y lograr las metas y objetivos trazados.
            </p>

            <div class="fila">
                <!-- datos personales -->
                <div class="col">
                    <h3>Informacion personal</h3>
                    <ul>
                        <li>
                            <strong>Teléfono</strong>
                            +57 3015752105
                        </li>
                        <li>
                            <strong>Email</strong>
                            andresparradoparrado@gmail.com
                        </li>
                        <li>
                            <strong>Linkedin</strong>
                            linkedin.com/in/pablo-andr%C3%A9s-parrado-parrado-3127161a5
                        </li>
                        <li>
                            <strong>Dirección</strong>
                            Santander de Quilichao, Cauca
                        </li>
                        <li>
                            <strong>Cargo Actual</strong>
                            <span>Help Desk Support</span>
                        </li>
                    </ul>
                </div>

                <!-- intereses 
                <div class="col">
                    <h3>Interests</h3>
                    <div class="contenedor-intereses">
                        <div class="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>ENGLISH</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-plane"></i>
                            <span>VIAJAR</span>
                        </div>
                        <div class="interes">
                            <i class="fa-brands fa-apple"></i>
                            <span>MAC OS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-person-hiking"></i>
                            <span>DEPORTE</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-car"></i>
                            <span>AUTOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-camera"></i>
                            <span>FOTOS</span>
                        </div>
                        
                    </div>
                </div>
                -->

            </div>
            <!--
            <button href="cvpdf/HOJA_DE_VIDA.pdf">
                Descargar CV <i class="fa-solid fa-download"></i>
                <span class="overlay"></span>
            </button>
            -->
            <a class="fa-solid fa-download" href="cvpdf/CV.pdf" target="_blank"> Descargar CV
                <span class="overlay"></span>
            </a>
        </div>
    </section>

    <div class="linea"></div>

    <!-- SECCION SKILLS -->
    <section class="skills" id="skills">
        <div class="contenido-seccion">
            <h2>Habilidades</h2>
            <div class="fila">
                <!-- Technical Skill -->
                <div class="col">
                    <h3>Habilidades técnicas</h3>
                    <div class="skill">
                        <span>Javascript</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Html</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Css</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Sass</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Tailwind CSS</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Php</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Laravel</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Bootstrap</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Java</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>MySQL</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Sql Server</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Git</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Professional Skills -->
                <div class="col">
                    <h3>Habilidades profesionales</h3>
                    <div class="skill">
                        <span>Comunicación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Trabajo en Equipo</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Creatividad</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Dedicación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Disciplina</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Cooperación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Tolerancia</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Organización</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Orientación a resultados</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Planeación</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="skill">
                        <span>Iniciativa</span>
                        <div class="barra-skill">
                            <div class="progreso">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-check" viewBox="0 0 16 16">
                                        <path
                                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <div class="linea"></div>

    <!-- SECCION CURRICULUM -->
    <section id="curriculum" class="curriculum">
        <div class="contenido-seccion">
            <h2>Curriculum vitae</h2>
            <div class="fila">
                <div class="col izquierda">
                    <h3>Educación</h3>
                    <div class="item izq">
                        <h4>Ingenieria Informatica</h4>
                        <span class="casa">Fundacion Universitaria Internacional de la Rioja</span>
                        <span class="fecha">Actualmente estudiante de 8.° semestre</span>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                    <div class="item izq">
                        <h4>Analisis y Desarrollo de Sistemas de Informacion</h4>
                        <span class="casa">Cenigraf-Sena</span>
                        <span class="fecha">2018 - 2020</span>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                    <!--
                    <div class="item izq">
                        <h4>Arte y Multimedia</h4>
                        <span class="casa">Universidad de Oxford</span>
                        <span class="fecha">2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>
                    </div>
                -->
                </div>

                <div class="col derecha">
                    <h3>Experiencia laboral</h3>
                    <div class="item der">
                        <h4>Help Desk Support</h4>
                        <span class="casa">ETB-Yeapdata Rama Judicial-Consejo Superior de la Judicatura</span>
                        <span class="fecha">2022 - Actualmente Trabajando</span>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <div class="item der">
                        <h4>Help Desk Support</h4>
                        <span class="casa">Ut Icom2018 Rama Judicial-Consejo Superior de la Judicatura</span>
                        <span class="fecha">2021 - 2022</span>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <div class="item der">
                        <h4>Help Desk Support</h4>
                        <span class="casa">Alianza Gráfica S.A.</span>
                        <span class="fecha">2020 - 2021</span>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                    <!--
                    <div class="item der">
                        <h4>Front Developer</h4>
                        <span class="casa">Nombre de Compañía</span>
                        <span class="fecha">2005 - 2008</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>
                    </div>
                -->
                </div>
            </div>
        </div>
    </section>

    <div class="linea"></div>

    <!-- SECCION PORTFOLIO -->
    <section id="portfolio" class="portfolio">
        <div class="contenido-seccion">
            <h2>Mis proyectos</h2>
            <div class="galeria">
                <div class="proyecto">
                    <img src="img/calculatorBMI.png" alt="Imagen Calculator">
                    <div class="overlay">
                       <a href="https://calculadora-peso-corporal.netlify.app/" target="_blank"><h3>BMI Calculator</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/freelancer.png" alt="Imagen freelancer">
                    <div class="overlay">
                       <a href="https://pagefreelancerfin.netlify.app/" target="_blank"><h3>PAGE FREELANCER</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/store.png" alt="Imagen store">
                    <div class="overlay">
                      <a href="https://storefrontendfin.netlify.app/" target="_blank"><h3>FRONTEND STORE</h3></a>
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/blogcafe.png" alt="imagen blog de cafe">
                    <div class="overlay">
                       <a href="https://blogdecafefin.netlify.app/" target="_blank"><h3>BLOG DE CAFE</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/festivalmusic.png" alt="Imagen Festival">
                    <div class="overlay">
                       <a href="https://festivalmusicfin.netlify.app/" target="_blank"><h3>FESTIVAL MUSIC</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/appsalon.png" alt="Imagen Salon">
                    <div class="overlay">
                       <a href="https://appsalonfin.netlify.app/" target="_blank"><h3>APP SALON</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/bienesraices.png" alt="Imagen Bienes">
                    <div class="overlay">
                       <a href="https://1bienesraices.netlify.app/" target="_blank"><h3>BIENES RAICES</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/escolar.png" alt="Imagen escolar">
                    <div class="overlay">
                       <a href="https://possymoderno.ga/vistas/login.html" target="_blank"><h3>SISTEMA ESCOLAR</h3></a> 
                    </div>
                </div>
                <div class="proyecto">
                    <img src="img/portafolio.png" alt="Imagen portafolio">
                    <div class="overlay">
                       <a href="#"><h3>PAGE ABOUT ME</h3></a> 
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="linea"></div>
    
    <!-- SECCION CONTACTO -->
    <section id="contacto" class="contacto">
        <div class="contenido-seccion">
            <h2>Contacto</h2>
            <div class="fila">

                <!-- Formulario -->
                <form class="col" action="https://formsubmit.co/andresparradoparrado@gmail.com" method="POST">
                    <div >
                        
                        <input id="name" name="name" type="text" placeholder="Nombre" required>

                        <input id="subject" name="subject" type="text" placeholder="Asunto">

                        <!--<input id="name" name="name" type="number" placeholder="Número telefónico" required>-->
                        <input id="email" name="email" type="email" placeholder="Dirección de correo" required>

                        <textarea id="message" name="message" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                        
                        <button>
                            Enviar<i class="fa-solid fa-paper-plane"></i>
                            <span class="overlay"></span>
                        </button>
                    </div>
                </form>
                
                <!-- Mapa -->
                <div class="col">
                    <img src="img/ubicacion2.png" alt="">
                    <div class="info">
                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                Santander de Quilichao, Cauca
                            </li>
                            <li>
                                <i class="fa-solid fa-mobile-screen"></i>
                                Contactame: +57 3015752105 
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                Email: andresparradoparrado@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="linea"></div>
    
    <!-- footer -->
    <footer>
        
        <!-- Scroll to top -->
    <i class="ir-arriba" id="scroll-up"
    ><img
      src="img/upward-arrow.gif"
      class="up-arrow"
      alt="Git Arriba"
  /></i>
        <!--<a href="#inicio" id="scroll-up" class="arriba">
            <i class="fa-solid fa-angles-up"></i>
        </a>-->
        <div class="redes">
                <a href="https://www.facebook.com/andres.parrado.982" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/PABLOANDRES0605" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/gnunixlooter/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/pablo-andr%C3%A9s-parrado-parrado-3127161a5" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
        <p class="copy">&copy; Copyright 2022</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
