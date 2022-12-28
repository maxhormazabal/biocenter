window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod')
    }else if(scroll <20){
        header.classList.remove('nav_mod')
    }
}

// Scroll Up

document.getElementById("button_up").addEventListener("click",scrollUp)

buttonUp = document.getElementById("button_up");

function scrollUp(){
    currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll>0){
        window.scrollTo (0,0);
        buttonUp.style.transform = "scale(0)";
    }
}

window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    if (scroll > 100){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}


document.getElementById("btn_menu").addEventListener("click",mostrar_menu)

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){

    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){
    if(window.innerWidth > 800){
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
})


// Función para mostrar la ventana flotante

// Jorge
function showFloatingBox1() {
    document.getElementById("floating-box1").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox1() {
    document.getElementById("floating-box1").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

    
// Esther
function showFloatingBox2() {
    document.getElementById("floating-box2").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox2() {
    document.getElementById("floating-box2").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

    
// Alvaro
function showFloatingBox3() {
    document.getElementById("floating-box3").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox3() {
    document.getElementById("floating-box3").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

    
// MJose
function showFloatingBox4() {
    document.getElementById("floating-box4").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox4() {
    document.getElementById("floating-box4").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

    
// Carolina
function showFloatingBox5() {
    document.getElementById("floating-box5").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox5() {
    document.getElementById("floating-box5").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

    
// Evelyn
function showFloatingBox6() {
    document.getElementById("floating-box6").style.display = "block";
    document.getElementById("shadow-overlay").style.display = "block";
    }

    // Función para ocultar la ventana flotante
function hideFloatingBox6() {
    document.getElementById("floating-box6").style.display = "none";
    document.getElementById("shadow-overlay").style.display = "none";
    }

  
