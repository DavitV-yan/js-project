const numberOfFilms = +prompt("How many films do you watched ?", '');

// alert(`You watched ${numberOfFilms}`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const movieName = prompt("Which are the last film do you see ?", '');
const filmEstimation = +prompt("Please estimate the film", '');

personalMovieDB.movies[movieName] =filmEstimation;

const object = JSON.stringify(personalMovieDB);

alert(object);
console.log(personalMovieDB);


