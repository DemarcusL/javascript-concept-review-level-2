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

function ex2() {
//I want the user to enter a string and i want it to be set to lower case automatically
let inputWord = prompt(' Enter a word ! ').toLowerCase();{
console.log(inputWord);
// now we need to return in the opposite case


}

}




//POE
ex1();
ex2();