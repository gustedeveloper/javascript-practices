function lifeInWeeks(age) {
  const yearsLeft = 90 - age;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
    console.log(
      "You have " +
        daysLeft +
        " days, " +
        weeksLeft +
        " weeks, and " +
        monthsLeft +
        " months left."
    );
  }

  lifeInWeeks(26);


  /*Calculating BMI*/

  function bmiCalculator(weight, height) {

    let bmi = weight /(Math.pow(height, 2));
    
    return bmiInterpretation(Math.round(bmi))

}

function bmiInterpretation(roundedBmi) {

  if(roundedBmi < 18.5) {
    return "Your BMI is " + roundedBmi + ", so you are underweight."
  } else if (roundedBmi > 18.5 && roundedBmi < 24.9) {
    return "Your BMI is " + roundedBmi + ", so you have a normal weight."
  } else {
    return "Your BMI is " + roundedBmi + ", so you are overweight."
  }
}

console.log(bmiCalculator(45, 1.8));




//BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

//BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

//BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."