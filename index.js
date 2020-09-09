/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

    let votingAge = 19;

    if (votingAge > 18) {
        console.log("true");
    }
    





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let Var1 = 20;
let Var2 = 40;
if (Var2 = 40) {
    Var1 = 42
}
console.log(Var1);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999";
string = Number(string);
console.log(string);





//Task d: Write a function to multiply a*b 

function multiply (a, b){
    return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogyears (age){
    return age * 7;
}

console.log(dogyears(7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function food (weight, age) {
    if (weight <= 5 && age >=1) {
        return weight * .05
    }

    else if (weight >= 6 && weight <=10 && age>=1) {
        return weight * .04
    }

    else if (weight >= 11 && weight <= 15 && age>=1) {
        return weight * .03
    }

    else if (weight > 15 && age >= 1) {
        return weight * .02
    }

    else if (age >= .167 && age <= .333 ) {
        return weight * .1
    }

    else if (age >= .34 && age <= .583) {
        return weight * .05
    }

    else if (age >= .584 && age <= .999) {
        return weight *.04
    }
}
 console.log(food(8, .3));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// 0=rock 1=paper 2=scissors



  function RPS(select){

 
  let CPU =  Math.floor(Math.random()*3);
  console.log(CPU)

  if (select === "rock"){
    num = 0;
}

else if (select ==="paper"){
    num = 1;
}

else if (select==="scissors"){
    num = 2;
}

 if (num===0 && CPU ===1){
      return "Loser!";
  }
  
  else if (num===0 && CPU===2){
      return "Winner!";
  }
  else if (num===1 && CPU===0){
      return "Winner!";
  }
  else if (num===1 && CPU===2){
      return "Loser!";
  }
  else if (num===2 && CPU===0){
      return "Loser!"
  }
  else if (num===2 && CPU===1){
      return "Winner!";
  }
  else if (num===CPU){
      return "Tie!";
  }

  }

  console.log(RPS("rock"))
  
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function convert(km){
    return km * .62
}

console.log ('Miles = ' + convert(5))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function convert(feet){
    return feet * 30.38
}

console.log ('Centimeters = ' + convert(5))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(num){  
for(let i = num; num>0; num--){
      return num + "bottles of soda on the wall, " + num + " bottles of soda, take one down, pass it around " + (num - 1) + " bottles of soda on the wall"
    }
}
console.log(annoyingSong(88))



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(num){
    if (num >= 90){
        return "A";
    }
    else if (num >=80 && num <90){
        return "B";
    }
    else if (num >=70 && num <80){
        return "C";
    }
    else if (num >=60 && num <70){
        return "D";
    }
    else if (num <600){
        return "F";
    }
}
console.log(grade(75))

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





