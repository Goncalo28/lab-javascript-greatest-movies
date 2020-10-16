// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrOfMovies){

    const newArr = arrOfMovies.map(directors => directors.director);

    return newArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrOfHowManyMovies) {
    if (arrOfHowManyMovies.length === 0){
        return 0;
    }

    const newMoviesArr = arrOfHowManyMovies.filter(dramaGenre => dramaGenre.director.includes('Steven Spielberg'))

    let count = 0;

    for (let i = 0; i < newMoviesArr.length; i++){
        if(newMoviesArr[i].genre.includes('Drama')){
            count++;
        }
    }

    return count;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(ratesArray) {
    //array.reduce((accumulator, currentValue) => accumulator + currentValue)
    if (ratesArray.length === 0){
        return 0;
    }
    
    const withRates = ratesArray.filter(onlyRates => onlyRates.rate);
    
    const totalRates = withRates.reduce((accumulator, currentRate) => accumulator + currentRate.rate, 0);
    
    const averageRate = Number((totalRates/ratesArray.length).toFixed(2));

    return averageRate;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(dramaRatesArray){
    if (dramaRatesArray.length === 0){
        return 0;
    }

    const newDramaArr = dramaRatesArray.filter(dramaGenre => dramaGenre.genre.includes('Drama'));

    const totalRates = newDramaArr.reduce((acc, currentRate) => acc + currentRate.rate, 0);
    
    const averageRate = Number((totalRates/newDramaArr.length).toFixed(2));

    if(isNaN(averageRate)){
        return 0;
    }

    return averageRate;

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearArray){

    const numArray = yearArray.filter(byYear => byYear.year);

    numArray.sort((movie1, movie2) => {
        if(movie1.year === movie2.year){
            if(movie1.title > movie2.title){
                return 1;
            } else {
                return -1;
            }
        } else {
            return movie1.year - movie2.year;
        }
    })

    return numArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alphabeticArray){
    
    let orderByTitle = alphabeticArray.map(byTitle => byTitle.title).sort();

    let first20 = orderByTitle.slice(0,20);
    
    return first20;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average