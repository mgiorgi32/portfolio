let menuVisible = false;
//funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById["nav"].classlist =""
        menuVisible = false
    }else{
        document.getElementById["nav"].classlist ="responsive"
        menuVisible = false;
    }
}
function seleccionar(){
    //oculta el menu una vez que selecciono la opcion
    document.getElementById["nav"].classlist =""
    menuVisible = false
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById["skills"]
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName["progreso"]
        habilidades[0].classlist.add("javascript")
        habilidades[1].classlist.add("html")
        habilidades[2].classlist.add("css")
        habilidades[3].classlist.add("photoshop")
        habilidades[4].classlist.add("comunicacion")
        habilidades[5].classlist.add("trabajo")
        habilidades[6].classlist.add("dedicacion")
        habilidades[7].classlist.add("creatividad")
    }
}
//detecta el scrolling para aplicar la animacion de la barra de habilidad
window.onscroll = function(){
    efectoHabilidades()
}