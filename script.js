<<<<<<< Updated upstream
const obj = {
  name: "John",
  age: 42,
  isMarried: true
}
=======
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


>>>>>>> Stashed changes
