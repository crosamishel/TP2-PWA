
const body = document.body;
export const crearHtml = (elemento="div",apertura=body)=>{
    const elementoCreado = document.createElement(elemento);
    apertura.appendChild(elementoCreado);
    // console.log(elementoCreado);
    return elementoCreado;
}