document.addEventListener('DOMContentLoaded', () =>{

    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+';

    function generarPass(tam){

        if(tam < 12 || tam > 50){
            return "La longitud debe estar entre 12 y 50 caracteres";
        }

        let caracteres = mayusculas + minusculas + numeros + simbolos; // metemos todos los caracteres en una única variable

        // garantizamos de que al menos haya una mayúscula., una miníscula, un número y una letra
        let pass = "";
        pass += mayusculas.charAt(Math.floor(Math.random() * mayusculas.length));
        pass += minusculas.charAt(Math.floor(Math.random() * minusculas.length));
        pass += numeros.charAt(Math.floor(Math.random() * numeros.length));
        pass += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

        for(let i = pass.length; i < tam; i++){
            pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return pass;

    }

    document.getElementById('generarContraseña').addEventListener('click', () => {
        const tamCadena = parseInt(document.getElementById('tamCadena').value); 
        let passFinal = generarPass(tamCadena);

        document.getElementById('passGenerada').textContent = passFinal;
    });

});