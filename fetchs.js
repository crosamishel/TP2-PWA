import { acortarTexto } from "./inicio.js";

export const traerPelis = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU0M2NmNThmZjBkNDZkNWQxNjgxNWMzMGJkZmYwZiIsIm5iZiI6MTcyMDE2NDEwOC43MDk1MjYsInN1YiI6IjY2NzI3ZWJlMGJkOWQwZWM1ZjM0NjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yBZZNr5Nmkz1rSmyEb57W4GcVG6EKObrMy9UeocOAWk'
        }
    };

    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const data = await res.json()
        console.log("lista de peliculas: ", data);
        return data.results
    } catch (error) {
        console.error(error.message);
    }
}

export const mostrarPelis = async () => {
    const pelis = await traerPelis();
    const section = document.querySelector('section');
    pelis.forEach(element => {
        section.innerHTML += `
        <figure>
            <h2>${element.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
            <figcaption>${acortarTexto(element.overview,80)}</figcaption>
            <button >🤍</button>
            <button class="detalle" data-id=${element.id}>Ver Detalle</button>
        </figure>
    `
    });
}

export const traerDetalle = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjU0M2NmNThmZjBkNDZkNWQxNjgxNWMzMGJkZmYwZiIsIm5iZiI6MTcyMDE2NDEwOC43MDk1MjYsInN1YiI6IjY2NzI3ZWJlMGJkOWQwZWM1ZjM0NjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yBZZNr5Nmkz1rSmyEb57W4GcVG6EKObrMy9UeocOAWk'
        }
    };
    try {
        // const data = await fetch(`https://api.themoviedb.org/3/movie/1022789?language=en-US`)
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
        const res = await data.json()
        // console.log(res);
        return res
    } catch (error) {
        console.log(error.message);
    }
  };

export const mostarDetail = async (detalle)=>{
    // const detalle = await traerDetalle();
    console.log(detalle);
    const genres = Array.isArray(detalle.genres) ? detalle.genres.map(genre => genre.name).join(', ') : 'No genres available';
    const article = document.querySelector('article');
    article.innerHTML += `
    <figure>
        <h2>${detalle.original_title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${detalle.poster_path}" alt="">
        <figcaption>${detalle.overview}</figcaption>
        <p><span class="text-blue">Release Date:</span> ${detalle.release_date}</p>
        <p><span class="text-blue">Vote Average:</span> ${detalle.vote_average}</p>
        <p><span class="text-blue">Genres:</span> ${genres}</p>
        <button >💛</button>
        
    </figure>
` 
}

