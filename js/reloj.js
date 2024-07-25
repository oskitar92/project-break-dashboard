document.addEventListener('DOMContentLoaded', () =>{

    function actualizarReloj(){

        const ahora = new Date();

        // formato de la hora
        const hora = String(ahora.getHours()).padStart(2,'0');
        const minutos = String(ahora.getMinutes()).padStart(2,'0');
        const segundos = String(ahora.getSeconds()).padStart(2,'0');

        const relojCompleto = hora+':'+minutos+':'+segundos;

        //formato del día
        const dia = String(ahora.getDate()).padStart(2,'0');
        const mes = String(ahora.getMonth()+1).padStart(2,'0');
        const anyo = ahora.getFullYear();

        const fechaCompleta = dia+'/'+mes+'/'+anyo;

        let mensaje = '';

        if(hora >= '00' && hora < '07'){
            mensaje = 'Es hora de descansar. Apaga y sigue mañana';
        }else if(hora >= '07' && hora < '12'){
            mensaje = 'Buenos días, desayuna fuerte y a darle al código';
        }else if(hora >= '12' && hora < '14'){
            mensaje = 'Echa un rato más pero no olvides comer';
        }else if(hora >= '14' && hora < '16'){
            mensaje = 'Espero que hayas comido';
        }else if(hora >= '16' && hora < '18'){
            mensaje = 'Buenas tardes, el último empujón';
        }else if(hora >= '18' && hora < '22'){
            mensaje = 'Esto ya son horas extras, ... piensa en parar pronto';
        }else{
            mensaje = 'Buenas noches, es hora de pensar en parar y descansar';
        }

        document.getElementById('reloj').textContent = relojCompleto;
        document.getElementById('fecha').textContent = fechaCompleta;
        document.getElementById('mensaje').textContent = mensaje;
    }

    function actualizarIntervalo(){
        setInterval(() =>{
            actualizarReloj();
        },1000);
    }

    actualizarIntervalo();    

    //actualizarReloj();
});