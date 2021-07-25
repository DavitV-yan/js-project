

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("How many films do you watched ?", '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films do you watched ?", '');
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("You watched very less movies");
    } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
      console.log("You are a classic weever");
    } else if (personalMovieDB.count > 29) {
      console.log("You are a kinoman");
    } else {
      console.log("Error");
    }

  },
  showMyDB: () => {
    if (personalMovieDB.private == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 4; i++) {
      let genres = prompt(`Please enter your favorite genres number ${i}`, '');
      if (genres == '' || genres == null) {
        alert("Please fill again");
        i--;
      }else {
      personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) =>{
      alert(`Your favorite genres is ${item} number of ${++i}`);
    })
  }

};

