// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const mappedArr = moviesArray.map(movie => (movie.director));

    return mappedArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const drama = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    
    return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoresTab = [];

    if (moviesArray.length === 0) {
    return 0;
  }

    moviesArray.forEach((movie) => {
        if (!movie.score) {
         scoresTab.push(0);
     } else {
         scoresTab.push(movie.score);
     }
    });

    const sum = scoresTab.reduce((value1, value2) => {
        if (scoresTab.length === 0) {
          return (sum = 0);
        } else {
        return value1 + value2;
     }
  });

  const moy = sum / moviesArray.length;

  return parseFloat(moy.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));

    let moy = scoresAverage(dramaMovies);

    return moy;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortYear = moviesArray.sort(function(movie1, movie2){
        if( movie1.year < movie2.year) {
            return -1;
            } else if (movie1.year === movie2.year) {
               if (movie1.title < movie2.title) {
                 return -1;
                } else {
                    return 1;
                }

            } else{
                 return 1;
            }
        });

    const mapYear = sortYear.map(movie => movie);

    return mapYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titles = moviesArray.map(movie => movie.title) 

    titles.sort()

    if (titles.length < 20) {
      return titles;
    } else {
      return titles.splice(0,20)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
