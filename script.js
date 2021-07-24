
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films do you watched ?", '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films do you watched ?", '');

  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movieName = prompt("Which are the last film do you see ?", ''),
      filmEstimation = +prompt("Please estimate the film", '');

    if (movieName != null && filmEstimation != null && movieName != '' && filmEstimation != '' && movieName.length < 50) {
      personalMovieDB.movies[movieName] = filmEstimation;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }

  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("You watched very less movies");
  } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    console.log("You are a classic weever");
  } else if (personalMovieDB.count > 29) {
    console.log("You are a kinoman");
  } else {
    console.log("Error");
  }

}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Please enter your favorite genres number ${i}`, '');
  }

}
writeYourGenres();
