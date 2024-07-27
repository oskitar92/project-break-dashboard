
document.addEventListener('DOMContentLoaded', () =>{

    let cuerpo = document.getElementById('cuerpo');

    let fotos = [
        "./img/1.webp",
        "./img/2.jpg",
        "./img/3.webp",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.webp",
        "./img/7.jpg",
        "./img/8.avif",
        "./img/9.jpg",
        "./img/10.jpg",
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