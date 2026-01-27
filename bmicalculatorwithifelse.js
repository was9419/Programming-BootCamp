function bmiCalculator (weight, height) {
    var interpretation = Math.round(weight / (height * height));

    if (interpretation <= 18.5) { return("Your BMI is " + interpretation + ", so you are underweight."); 
}
     if (interpretation > 24.9) { return("Your BMI is " + interpretation + ", so you are overweight."); }
    
    if (interpretation > 18.5 <= 24.9) { return("Your BMI is " + interpretation + ", so you have a normal weight.");
    } 
   
    
}
