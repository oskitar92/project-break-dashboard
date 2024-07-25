document.addEventListener('DOMContentLoaded', () => {

    const btnLink = document.getElementById('btnLink');
    const listaLink = document.getElementById('listaLinks');

    cargarLinks();

    btnLink.addEventListener('click', () =>{

        const titulo = document.getElementById('tituloLink').value;
        const url = document.getElementById('urlLink').value;

        insertarLink(titulo,url);
        guardarLink(titulo,url);

        document.getElementById('tituloLink').value = '';
        document.getElementById('urlLink').value = '';
    });


    function insertarLink(titulo,url){

        const linkItem = document.createElement('div');
        linkItem.classList.add('links');

        linkItem.innerHTML = `
            <a href="https://${url}" target="_blank">${titulo}</a>
            <button class="eliminar-link">Eliminar</button>
        `;

        linkItem.querySelector('.eliminar-link').addEventListener('click', () => {
            linkItem.remove();
            eliminarLink(titulo,url);
        });

        listaLink.appendChild(linkItem);

    }

    function guardarLink(titulo,url){

        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.push({titulo,url});
        localStorage.setItem('links', JSON.stringify(links));

    }

    function cargarLinks(){
        const links = JSON.parse(localStorage.getItem('links')) || [];
        links.forEach(element => {
            insertarLink(element.titulo,element.url);
        });
    }
    
    function eliminarLink(titulo, url){
        let links = JSON.parse(localStorage.getItem('links')) || [];
        links = links.filter(item => item.titulo !== titulo || item.url != url);
        localStorage.setItem('links', JSON.stringify(links));
    }

});