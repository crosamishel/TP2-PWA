import { crearHtml } from "./recursos.js";
import { mostarDetail, traerDetalle } from "./fetchs.js";
export const crearDetalle =async (id)=>{
    const header = document.createElement('header');

    const nav = document.createElement('nav');
    nav.classList.add('container', 'navbar');

    const ulNav = document.createElement('ul');

    const liNav = document.createElement('li');

    const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = 'assets/logo.png'; // Ruta de mi imagen JPG
    img.alt = 'Logo'; 
    img.classList.add('logo-img');
    a.textContent = 'PelisPro';
    a.appendChild(img);
    a.href = 'index.html';

    // const aDetalle = document.createElement('a');
    // aDetalle.textContent = 'detalle';
    // aDetalle.href = '#';

    liNav.append(a);

    ulNav.appendChild(liNav);   

    nav.appendChild(ulNav);

    header.appendChild(nav);

    document.body.appendChild(header);
    const article = crearHtml('article');
    const detalle = await traerDetalle(id);
    mostarDetail(detalle);

}

