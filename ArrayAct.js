//Activity 1.1
// let songs = [
//     "Hounds to Harmatia - Poets of the Fall ",
//     "Louder than Bombs - Bantan Boys ",
//     "Home In Florence - Jesper Kyd",
// ]
// console.log(songs)

// songs.push("Home - GD & TOP")
// console.log(songs)

// songs.pop()
// console.log(songs)



//Activity 1.2
// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use map() to create a new array with each number doubled
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

// Log the original array
console.log("Original numbers:", numbers);

// Log the new array with doubled numbers
console.log("Doubled numbers:", doubledNumbers);

/////////or////////
// Define an array of people objects
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Use map() to create a new array with just the names
let names = people.map(function(person) {
    return person.name;
});

// Log the original array of people
console.log("People:", people);

// Log the new array of names
console.log("Names:", names);




//Activity 2.1

//Activity 2.2
// Loop to generate and log 6 random numbers between 1 and 50
for (let i = 0; i < 6; i++) {
    // Generate a random number between 1 and 50
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    
    // Log the random number to the console
    console.log(randomNumber);
}
//////OR///////////
// Create an array to store the random numbers
let randomNumbers = [];

// Loop to generate 6 random numbers between 1 and 50
for (let i = 0; i < 6; i++) {
    // Generate a random number between 1 and 50
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    
    // Add the random number to the array
    randomNumbers.push(randomNumber);
}

// Log the array of random numbers to the console
console.log("Random Numbers:", randomNumbers);



//Activity 2.3
// Loop to count from 9 to 0
for (let i = 9; i >= 0; i--) {
    console.log(i);
}
//////OR///////////
// Initialize the counter
let i = 9;

// Loop to count from 9 to 0
while (i >= 0) {
    console.log(i);
    i--;
}
//////OR///////////
// Initialize the counter
let i = 9;

// Function to count down
function countDown() {
    console.log(i);
    i--;
    if (i < 0) {
        clearInterval(counting);
    }
}

// Set interval to call countDown every 1000 milliseconds (1 second)
let counting = setInterval(countDown, 1000);





//Activity 2.4
///Display 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the 3rd film in the array is Ghostbusters. If it is, return "Yay its Ghostbusters!". If it isn't return "Boo! We want Ghostbusters."

//Activity 2.5
///Generate a random number between 1-30 six times. For each random number generated, check if this number is divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not.

//Activity 2.6
///Imagine you're a programmer for a social media platform. You have been tasked with building a prototype for a mutual followers program. Create 2 arrays of followers e.g. bexsFollowers & GeorgesFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays. Using a nested loop iterate over both arrays and console.log out the matching followers.

//Activity 2.7
//Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. Give an examples of each. Waht are the pros and cons?