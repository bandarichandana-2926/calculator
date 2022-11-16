// function bodymass_Index(weight, height){
//     return (weight/(height * height));

// }
// var BMI =bodymass_Index(22,1.1);
// console.log(bodymass_Index());




function bmiCalculator(weight,height){
    return (Math.round(weight/(height*height)))
    
}
var  Bmi = bmiCalculator(65,1.8)
console.log(Bmi);
