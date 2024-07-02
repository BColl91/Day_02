// Act 1//
// let age = 16;
// let serve = (age < 17) ? 'You arent old enough' : 'Yes I can serve you'
// console.log(serve)


//Act 2//
// let top = "Tuna";

// switch(top){
//     case "chicken":
//     case "pepperoni":
//         console.log("It sounds nice but I'm a pescetarian!");
//     break;
//     case "Cheese":
//         console.log("Can't go wrong with cheese~!");
//     break;
//     case "Tuna":
//         console.log("I need this topping on my pizza.");
//     break;
//     case "Pineapple":
//         console.log("Ew.")
//     default:
//         console.log("I don't tihnk I want this on my pizza.")    
// }


//Act 3//
// let password = "totallynotpassword"; 

// if (password.length < 8) {
//     console.log("The password is too short. Please try again.");
// } else {
//     console.log("Password Accepted. Welcome.");
// }



//Act 4//
// let num = 20;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizz buzz");
// } else if (num % 3 === 0) {
//     console.log("fizz");
// } else if (num % 5 === 0) {
//     console.log("buzz");
// } else {
//     console.log(num);
// }


//Act 5//
// let num = 2073;

// let numStr = num.toString();
// let reversedStr = numStr.split('').reverse().join('');
// if (numStr === reversedStr) {
//     console.log(`${num} is a palindrome.`);
// } else {
//     console.log(`${num} is not a palindrome.`);
// }


// Act 6//
// let time = 4;
// let placeOfWork = "the office";
// let townOfHome = "home";

// if (time >= 0 && time < 6) {
//     console.log(`At ${time}:00, I'm trying to sleep.`);
// } else if (time >= 6 && time < 8) {
//     console.log(`At ${time}:00, I'm at ${townOfHome}.`);
// } else if (time >= 8 && time < 9) {
//     console.log(`At ${time}:00, I'm commuting.`);
// } else if (time >= 9 && time < 17) {
//     console.log(`At ${time}:00, I'm at ${placeOfWork}.`);
// } else if (time >= 17 && time < 18) {
//     console.log(`At ${time}:00, I'm on my way home.`);
// } else if (time >= 18 && time < 24) {
//     console.log(`At ${time}:00, I'm at ${townOfHome}.`);
// } else {
//     console.log(`That's an invalid time.`);
// }



//Act 7//
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

const vowels = "aeiouAEIOU";

let lastVowelIndex = -1;

for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
        lastVowelIndex = i;
        break;
    }
}

console.log(`The index of the last vowel is: ${lastVowelIndex}`);


//Act 8//
// let word = "level";

// let isSame = word.length > 0 && word[0] === word[word.length - 1];

// console.log(isSame);

// //****OR****
// function isFirstAndLastSame(word) {
//     return word.length > 0 && word[0] === word[word.length - 1];
// }

// console.log(isFirstAndLastSame("radar"));
// console.log(isFirstAndLastSame("hello"));
// console.log(isFirstAndLastSame("level"));
// console.log(isFirstAndLastSame("world"));
// console.log(isFirstAndLastSame(""));


//Act 9//
// let num1 = 4;
// let num2 = 8;

// let sum = num1 + num2;

// let result;
// if (sum % 2 === 0) {
//     result = sum;
// } else {
//     result = num1 * num2;
// }

// console.log(result);
