// GUESS THE NUMBER VOLGENS BASIS REQUIREMENTS:
let numberToGuess = Math.floor((Math.random() * 26) + 0);
let userName = prompt("Welkom! Wat is je naam?", []);

alert("Hey " + userName);

alert("Probeer het getal (tussen 0 en 25) te raden.. ");
let guess = parseInt(prompt("Voer een getal om het spel te beginnen..", []));

if (guess == numberToGuess){
    alert("Gefeliciteerd! Je had het meteen de eerste keer goed!!");
    alert("We gaan het spel nu afsluiten. Tot de volgende keer " + userName);
} 

while (guess !== numberToGuess){
    if (guess < numberToGuess) {
            alert("Nee dat is te laag!");
            guess = parseInt(prompt("Gok nog eens:", []));
        } else if (guess > numberToGuess){
            alert("Nee dat is te hoog!");
            guess = parseInt(prompt("Gok nog eens:", []));
        }
}

alert("ja gefeliciteerd je hebt het geraden!");
alert("Dag " + userName + ". Tot de volgende keer!");






/*// KLOPPEND VOLGENS BASISREQUIREMENTS ZONDER HOGER/LAGER: 
let numberToGuess = Math.floor((Math.random() * 26) + 0);
let userName = prompt("Welkom! Wat is je naam?", []);

alert("Hey " + userName);

alert("Probeer het getal (tussen 0 en 25) te raden.. ");
let guess = parseInt(prompt("Voer een getal om het spel te beginnen..", []));
 

alert("nee" + numberToGuess);
 

if (guess == numberToGuess){
    alert("Gefeliciteerd! Je had het meteen de eerste keer goed!!");
    alert("We gaan het spel nu afsluiten. Tot de volgende keer " + userName);
} 

while (guess !== numberToGuess){
    if (guess === numberToGuess) {
        alert("ja gefeliciteerd je hebt het geraden!");
        alert("Dag " + userName + ". Tot de volgende keer!");
        } else if (guess !== numberToGuess){
            alert("Nee dat is niet goed!");
            guess = parseInt(prompt("Gok nog eens:", []));
        } else {
            alert("ja gefeliciteerd je hebt het geraden");
            alert("Dag " + userName + ". Tot de volgende keer!");
        }
}

alert("ja gefeliciteerd je hebt het geraden!");
alert("Dag " + userName + ". Tot de volgende keer!");
*/



/*// POGING NIET GELUKT OM MAX 5 GUESSES TE DOEN!: 
let numberToGuess = Math.floor((Math.random() * 26) + 0);
let userName = prompt("Welkom! Wat is je naam?", []);

alert("Hey " + userName);

alert("Probeer het getal (tussen 0 en 25) te raden.. Je krijgt 5 pogingen.");
let guess = parseInt(prompt("Voer een getal om het spel te beginnen..", []));
 

alert("nee" + numberToGuess);
 

if (guess == numberToGuess){
    alert("Gefeliciteerd! Je had het meteen de eerste keer goed!!");
    alert("We gaan het spel nu afsluiten. Tot de volgende keer " + userName);
} 

for (numberOfGuesses=1; numberOfGuesses <5; numberOfGuesses++) {
    if (guess === numberToGuess) {
        alert("ja gefeliciteerd je hebt het geraden in de " + (numberOfGuesses) + "e poging!");
        numberOfGuesses === 10
    } else if (guess !== numberToGuess){
        alert("Nee dat is niet goed!");
        guess = parseInt(prompt("Gok nog eens:", []));
    } 
}
// het klopt niet! vooral het laatste stuk. En als je het goed raad op de laatste poging zegt hij nog steeds dat de pogingen op zijn. 

if (numberOfGuesses === 5){
    alert("Helaas! je 5 pogingen zijn op. Het getal was " + numberToGuess + ". Je hebt verloren.");
    alert("Dag " + userName + ". Tot de volgende keer!");
} else {
    alert("Dag " + userName + ". Tot de volgende keer!");
}

*/




/*// VOLGENS BASISREQUIREMENTS: 

let userName = prompt("Welkom! Wat is je naam?", []);

alert("Hey " + userName);

let guess = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..", []));

let numberToGuess = (getRandom(26))

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

while (guess !== numberToGuess){
    guess = parseInt(prompt("Dat is niet correct. Voer opnieuw een nummer in..", []));
    if (guess !== numberToGuess) {
        alert("Helaas..");
    } else {
        alert("Dat is correct!")
    }
};

alert("Je hebt gewonnen! Dag " + userName + ". Tot de volgende keer!");
*/

//////////////////////////
/*
const checkAge = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const sayHello = function(age) {
    if (checkAge(age)) {
        return "Hello there";
    } else {
        return "Hey Kiddo";
    }
};
*/


// loop gebruiken
// zolang checkNummer = false: blijf uitvoeren. 
// maar checkNummer ook veranderen. want de return moeten gewoon false of true zijn
// en dan als true : gefeliciteerd + 


/*
if (checkNummer = false){
    let nummer = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..", [])
}
*/


/*
// VORGE OPDRACHTEN:

// 3. GRADE ASSIGNER:
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

// Voortaan beter i gebruiken ipv 'score'
for (score = 60; score <= 100; score++){
    console.log("Voor " + score + " punten, krijg je een " + assignGrade(score));
}



// 2. MULSTIPLICATION TABLES:

// ALLE TAFELS: NESTED FOR-LOOP:

// Voortaan beter i gebruiken ipv number. Geldt niet voor numberTable!!
for (numberTable=1; numberTable <= 10; numberTable++) {
    for (number=1; number <= 10; number++) {
        sum = number * (numberTable);
        console.log(number + " x " + numberTable + " = " + sum)
    }
}

// TAFEL VAN 9: // SINGLE-FOR-LOOP:

// Voortaan beter i gebruiken ipv number. Geldt niet voor numberTable!!
const numberTable = 9
for (table=1; table <= 10; table++) {
    sum = table * numberTable;
    console.log(table + " x " + numberTable + " = " + sum)
};




// 1. EVEN ODD REPORTER:

// BETER i GEBRUIKEN IPV NUMBER. 
// zo zie ik het iedereen doen. voor eerste loop is i, voor nested-loop k, daarna j?
for (number = 0; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is oneven");
    }
};



// OPDRACHT: ITERATORS - OUDE EN NIEUWE STIJL:

// OUDE STIJL -> WHILE LOOP: 
const colorsWhile = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colorsWhile.length) {
    console.log(colorsWhile[i]);
    i++; // blijkbaar geen returnstatement in een loop, dan werkt hij niet meer. 
}


// OUDE STIJL -> FOR LOOP:
const colorsFor = ['yellow', 'blue', 'red', 'orange'];

for (let j = 0; j < colorsFor.length; j++){
    console.log(colorsFor[j]);
};


// NIEUWE STIJL -> ARRAY METHODS:
const colorsArray = ['yellow', 'blue', 'red', 'orange'];
colorsArray.forEach(color => console.log(color));


// ALLE PROPERTIES VAN EEN OBJECT NAAR DE CONSOLE LOGGEN MET "FOR...IN-STATEMENT" (je kunt namelijk geen array method gebruiken op een object)
const person = {voornaam:"John", achternaam:"Doe", age:25, adress:"Dorpsstraat 1", woonplaat:"Mijn Dorp"}; 
let k;
for (k in person) {
   console.log(person[k]);
}

// OPDRACHT: FUNCTIONS CALLING FUNCTIONS:
// HEY KIDDO:
const checkAge = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const sayHello = function(age) {
    if (checkAge(age)) {
        return "Hello there";
    } else {
        return "Hey Kiddo";
    }
};

console.log(sayHello(65));
console.log(sayHello(17));

// SHORTER ARROW-FUNCTION:
const isAdultShort = age => age >= 18;

const greetShort = age => (isAdultShort(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); 
console.log(greetShort(10)); 


// VAT EXERCISE 1: van excl-btw naar btw en incl-btw:
const calculateVAT = function(basePrice, VATPercentage){
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000,21));
console.log(calculatePriceIncludingVAT(2, 9));


// VAT EXERCISE 2: van incl-btw naar btw en excl-btw:

const calculateBasePrice = function(PriceIncludingVAT, VATPercentage) {
    const basePrice = PriceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(PriceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(PriceIncludingVAT, VATPercentage);
    const VAT = PriceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));
*/