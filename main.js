var math = 1 + 1 < 5;

console.log(math)

var multiplication = 4 * 5 <= 20;

console.log(multiplication)

var division = 6 - 2 >= 0;

console.log(division)

var likesDogs = false;

if (likesDogs === true){
    console.log("I'm a dog person!")
    
} else if (likesDogs === false){
    console.log("What's wrong with you?")
}

var timmy = {
    personsName: "Timothy",
    preferredLanguage: "English"
};

if (timmy.preferredLanguage === "English"){
    console.log(`Hello, ${timmy.personsName}!`)
} else {
    console.log(`Hola, ${timmy.personsName}`)
};

var grade = 78;

if (grade > 93){
    console.log("You have an A!")
} else if (grade < 93 && grade > 84){
    console.log("You have a B!")
} else if (grade < 84 && grade > 77){
    console.log("You have a C!")
} else if (grade < 77 && grade > 70){
    console.log("You have a D.")
}else {
    console.log("You have an F.")
}

