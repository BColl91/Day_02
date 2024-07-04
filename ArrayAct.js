//Activity 1.1
// let songs = [
//     "Hounds to Harmatia - Poets of the Fall ",
//     "Louder than Bombs - Bantan Boys ",
//     "Home In Florence - Jesper Kyd",
// ]
// console.log(songs)

// songs.push("Home - GD & TOP")
// songs.push("Break Stuff - Limp Bizkit")
// console.log(songs)

// songs.pop()
// console.log(songs)



//Activity 1.2
// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log("Original numbers:", numbers);
// console.log("Doubled numbers:", doubledNumbers);



// //Activity 2.1
// let films = [
//     "5 Centimeters Per Second",
//     "Cloud Atlas",
//     "Spiderman Homecoming",
//     "What We Do In The Shadows",
//     "Lord of the Rings: The Fellowship of the Ring",
// ]
// let index = 0;
// while (index < films.length) {
//     console.log(films[index]);
//     index++;
// }
// films.push("Deadpool");
// films.push("John Wick");
// console.log(films);


// //Activity 2.2
// for (let i = 0; i < 6; i++) {
//       let randomNumber = Math.floor(Math.random() * 50) + 1;
    
//     console.log(randomNumber);
// }

// // //Activity 2.3
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }


// // //Activity 2.4
// function displayFilms(films) {
//     for (let i = 0; i < films.length; i++) {
//       console.log(films[i]);
//     }
//      if (films[2] === "Ghostbusters") {
//       return "Yay it's Ghostbusters!";
//     } else {
//       return "Boo! We want Ghostbusters.";
//     }
//   }

//   const filmsList = ["Spiderman Homecoming", "Cloud Atlas", "Ghostbusters", "John Wick"];
//   console.log(displayFilms(filmsList));
//   console.log("")
//   const filmsList2 = ["Spiderman Homecoming", "Cloud Atlas", "What We Do in the Shadows", "John Wick"];
//   console.log(displayFilms(filmsList2));
  


// // //Activity 2.5
// function checkDivisibilityBy7() {
//     for (let i = 0; i < 6; i++) {
//       let randomNum = Math.floor(Math.random() * 30) + 1;
  
//       if (randomNum % 7 === 0) {
//         console.log(`${randomNum} is divisible by 7.`);
//       } else {
//         console.log(`${randomNum} is not divisible by 7.`);
//       }
//     }
//   }
  
//   checkDivisibilityBy7();
  

// // //Activity 2.6
// const bexsFollowers = ["Karlach", "Basil", "Ruby", "Connor"];
// const georgesFollowers = ["Karlach", "Spyro", "Frank", "Ruby"];

// for (let i = 0; i < bexsFollowers.length; i++) {
//   for (let x = 0; x < georgesFollowers.length; x++) {
//     if (bexsFollowers[i] === georgesFollowers[x]) {
//       console.log(`Matching follower: ${bexsFollowers[i]}`);
//     }
//   }
// }


// // //Activity 2.7
// let i = 0;
// do {
//   console.log(`Iteration number ${i}`);
//   i++;
// } while (i < 5);
// // Do..While Loop guarantees that the loop body will be executed at least once and is useful when the loop needs to execute at least once regardless of the condition, but Ccn lead to logic errors if the condition is meant to prevent any execution, and is less commonly used, which can make code less familiar to other developers.

// let i = 0;
// while (i < 5) {
//   console.log(`Iteration number ${i}`);
//   i++;
// }
// //While loops are good for scenarios where the number of iterations is not known before hand and can potentially result in fewer iterations if the condition becomes fals early. The cons are that if the condition is never false, it can become an infinate loop. Initialization and increment or decrement must be handled seperately, which can cause errors.

for (let i = 0; i < 5; i++) {
    console.log(`Iteration number ${i}`);
  }
//   //For loops are clear and concise and can be easier to understand, as initialization, condition and increment/decrement are all in one place. This method is ideal for iterating over arrays. For loops can unfortunately be less readable when the loop logic is complex and is not suitable for situations where the number of iterations is not known beforehand.