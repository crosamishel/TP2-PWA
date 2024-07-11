
export function crearInicio(){
const header = document.createElement('header');

const nav = document.createElement('nav');
nav.classList.add('container', 'navbar');

const divNav = document.createElement('div');
divNav.classList.add('site-logo');

const ulNav = document.createElement('ul');

const liNav = document.createElement('li');

const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = 'assets/logo.png'; // Ruta de mi imagen JPG
    img.alt = 'Logo'; 
    img.classList.add('logo-img');
    a.textContent = 'PelisPro';
    a.appendChild(img);
    a.href = '#';

// const aDetalle = document.createElement('a');
// aDetalle.textContent = 'detalle';
// aDetalle.href = '/detalle.html';

const main = document.createElement('main');

const sectionPeliculas = document.createElement('section');

const h1 = document.createElement('h1');
h1.textContent="Peliculas Destacadas";

const footer = document.createElement('footer');

const parrafoFooter = document.createElement('p');
parrafoFooter.textContent = '© 2024 ✿ PelisPro Made by Mishel Poma Crosa.'; 

liNav.append(a);

ulNav.appendChild(liNav);   

nav.appendChild(ulNav);

header.appendChild(nav);

footer.appendChild(parrafoFooter);

main.append(h1,sectionPeliculas ,footer);

document.body.append(header,main);
}

export function acortarTexto(texto, longitud) {
    return texto.length > longitud ? texto.substring(0, longitud) + "..." : texto;
}
