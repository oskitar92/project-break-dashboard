
document.addEventListener('DOMContentLoaded', () =>{

    let cuerpo = document.getElementById('cuerpo');

    let fotos = [
        "./img/fondo1.PNG",
        "./img/fondo2.PNG",
        "./img/fondo3.PNG",
        "./img/fondo4.PNG",
        "./img/fondo5.PNG",
    ];

    function cambiarFondo(){
        const numeroRandom = Math.floor(Math.random() * fotos.length);
        cuerpo.style.backgroundImage = `url(${fotos[numeroRandom]})`;
    }

    function fondoAleatorio(){
        setInterval(() =>{
            cambiarFondo();
        },5000);
    }

    fondoAleatorio();

});