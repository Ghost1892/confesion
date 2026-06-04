function mostrarMensaje() {
    document.getElementById("declaracion").classList.add("mostrar");
    var musica = document.getElementById("musicaFondo");
    musica.play().catch(function(error) { console.log(error); });
}

function pantallaFinal() {
    var cartaPrincipal = document.getElementById("cartaPrincipal");
    cartaPrincipal.style.opacity = "0";
    cartaPrincipal.style.transform = "translateY(-20px)";
    
    // Cambia a la imagen real de Cinnamoroll que subiste
    document.getElementById("cinnamorollCentro").src = "cinnamoroll.png";
    
    setTimeout(function() {
        cartaPrincipal.style.display = "none";
        var cartaFinal = document.getElementById("cartaFinal");
        cartaFinal.style.display = "block";
        
        setTimeout(function() {
            cartaFinal.style.opacity = "1";
            cartaFinal.style.transform = "translateY(0)";
            // Activa la lluvia de tus archivos locales
            crearLluviaSanrio();
        }, 50);
    }, 600);
}

function crearLluviaSanrio() {
    const contenedor = document.getElementById("contenedorPersonajes");
    
    // Lista de tus imágenes locales subidas a GitHub
    const personajesLocales = [
        "mocha.png",
        "chiffon.png",
        "cappuccino.png",
        "espresso.png"
    ];

    setInterval(() => {
        const imgPersonaje = document.createElement("img");
        // Escoge una foto al azar de tu carpeta
        imgPersonaje.src = personajesLocales[Math.floor(Math.random() * personajesLocales.length)];
        imgPersonaje.className = "personaje-flotante-js";
        
        // Configuración de movimiento aleatorio
        imgPersonaje.style.left = Math.random() * 85 + 5 + "%";
        imgPersonaje.style.width = Math.random() * 20 + 65 + "px"; 
        imgPersonaje.style.height = imgPersonaje.style.width;
        imgPersonaje.style.animationDuration = Math.random() * 3 + 5 + "s"; 
        
        contenedor.appendChild(imgPersonaje);

        // Borra para que el celular no se trabe
        setTimeout(() => { imgPersonaje.remove(); }, 8000);
    }, 900);
}