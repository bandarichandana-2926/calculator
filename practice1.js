function lifeInWeeks(age) {  //age is parameter.  lifeInWeeks is functionName.
    
  
var yearsRemaining = 90-age;
var days = yearsRemaining*365;
var weeks = yearsRemaining*52;
var months = yearsRemaining*12;

  console.log("You have " + days + " days, "+ weeks +" weeks, and "+ months +" months left.");
    

}
lifeInWeeks(22);

//22 arguments 

// age(parameter)=22(arguments)