const numberOfFilms = +prompt("How many films do you watched ?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


const movieName = prompt("Which are the last film do you see ?", ''),
      filmEstimation = +prompt("Please estimate the film", '');

personalMovieDB.movies[movieName] = filmEstimation;

console.log(personalMovieDB);


