const numberOfFilms = +prompt("How many films do you watched ?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

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

let i = 0;
while (i < 2) {
  const movieName = prompt("Which are the last film do you see ?", ''),
    filmEstimation = +prompt("Please estimate the film", '');

  if (movieName != null && filmEstimation != null && movieName != '' && filmEstimation != '' && movieName.length < 50) {
    personalMovieDB.movies[movieName] = filmEstimation;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  i++;
}

let i = 0;
do {
  const movieName = prompt("Which are the last film do you see ?", ''),
  filmEstimation = +prompt("Please estimate the film", '');

if (movieName != null && filmEstimation != null && movieName != '' && filmEstimation != '' && movieName.length < 50) {
  personalMovieDB.movies[movieName] = filmEstimation;
  console.log('done');
} else {
  console.log('error');
  i--;
}
i++;

} while (i < 2);


if (personalMovieDB.count < 10) {
  console.log("You watched very less movies");
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
  console.log("You are a classic weever");
}else if(personalMovieDB.count > 29){
  console.log("You are a kinoman");
}else {
  console.log("Error");
}

console.log(personalMovieDB);


