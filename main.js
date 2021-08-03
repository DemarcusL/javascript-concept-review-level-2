//Ex 1
function ex1() {
let enteredText = true;
while (enteredText) {
    // 
    let response = prompt(
        ' Enter this sentence "in a galaxy far far away" .'
    ).toLowerCase(); // user should enter 'y' or 'n'
    if (response === "in a galaxy far far away" || response === "In A Galaxy Far Far Away") {
        enteredText = false;
        //we return the edited version only if the entered in full low
        //console.log(" in A galaxy Far far Away ");
        alert(" in A galaxy Far far Away ");
    } else {
        alert(
            " Invalid Entry, Try Again ! "
        );
    }

}
}

//Ex 2
// let ex2 = true;
// while (ex2) {
//     let responce1 = [];
//     let responce2 = [];

// }

function ex2() {//I want the user to enter a string

let inputWord = prompt(' Enter a word ! ');{
// console.log(inputWord);

    return (inputWord).toUpperCase(); // now we need to return in the opposite case
}

}

//EX 3
//Return first n number of elements
let numEntered = []
//Write a JavaScript function called first() to get the first n element(s) of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// function first() {
//     for (let numEntered = 0; numEntered <= length.; numEntered++) {
//         const element = array[index];
        
//     }


// }

//Ex 4
//Write a JavaScript function to remove an element with a specific value from an array.

//EX 5
//Create a new empty array called pet_list. Add 3 pet objects (via object literals) to the pet_list array (each pet should have a type, age and a color property) You can choose the pets.
// we want name, fur color, fur length, Cut or Natural Ears
function Pet(petType, petAge, petColor) {
    //these  attr keep everything in this function and object
    //these are the attributes that we've already made
    this.petType = petType;
    this.petAge = petAge;
    this.petColor = petColor;

}

let pet_list = [
    new Pet('Cat', 4, 'Beige' ),
    new Pet('Dog', 5, 'Brown' ),
    new Pet('Cat', 2, 'White' ),
];

console.log(pet_list);


//POE
// ex1();
// ex2();
// first();
Pet();