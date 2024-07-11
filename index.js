import { crearInicio} from "./inicio.js";
import { mostrarPelis } from "./fetchs.js";
import { crearDetalle } from "./detalle.js";
import { crearHtml } from "./recursos.js";
// import { mostarDetail,traerDetalle } from "./fetchs.js";
const currentPage = location.pathname.split("/").pop();
// const currentPage = location.pathname.split("/").pop();
console.log(currentPage);

async function renderizar() {
    if (currentPage === 'index.html') {
         crearInicio();
         await mostrarPelis();

    } else if (currentPage === 'detalle.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log(id,urlParams,urlParams.get('id'),window.location.search);
        if (id) {
            await crearDetalle(id);
        }

    } else {
        console.error('Página no reconocida');
    }
}

// Llama a la función para renderizar la página correcta
renderizar();

document.body.addEventListener('click', async(e)=>{
    //if(e.target.matches('.detalle')){
      //  window.location.href = `detalle.html`;
        // console.log('detalle',e.target.dataset.id);
        //await mostrarPelis(e.target.dataset.id);

        // const detalle = await traerDetalle(e.target.dataset.id)
            // window.location.href = `detalle.html`;
    //}
    if (e.target.matches('.detalle')) {
        const id = e.target.dataset.id;
        window.location.href = `detalle.html?id=${id}`;
    }
})



