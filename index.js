//API Send data requests to: http://www.omdbapi.com/?apikey=[yourkey]& 
// Poster API requests: http://img.omdbapi.com/?apikey=[yourkey]&
// KEY: 485a4ccb


async function main(filter) {

     await new Promise((resolve) => {
        setTimeout(() => {
            resolve([]);
        }, 1000);
}) 

    console.log(main)

    const movies = await fetch(`http://www.omdbapi.com/?apikey=485a4ccb&s=movie`);
    const movieData = await movies.json();

    
    
    let filteredMovies = movieData.Search;

if (filter === 'A_Z') {
    filteredMovies.sort((a, b) =>
        a.Title.localeCompare(b.Title)
    );
}

if (filter === 'Z_A') {
    filteredMovies.sort((a, b) =>
        b.Title.localeCompare(a.Title)
    );
}

    const movieCardEl = document.querySelector('.movie-grid');
    movieCardEl.innerHTML = filteredMovies.map(
    (movie) => movieHTML(movie)
    ).join("");
    
}

function filterMovies(event) {
        main(event.target.value)
    }

setTimeout(() => {
    main();
})



function movieHTML(movie) {

return `<div class="movie-card">
            <div class="movie-poster">
                <img src="${movie.Poster}" alt="Movie poster placeholder" >
            </div>
            <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p class="movie-year">${movie.Year}</p>
                <div class="movie-details">
                    <span>${movie.imdbID}</span>
                </div>
                <button class="details-button" onclick="alert('Not Available')"> View Details </button>
            </div>
        </div>`
}
   
// }

