function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    var yearsBeforeDeath = 90 - age;
    var monthsBeforeDeath = (yearsBeforeDeath) * 12;
    var weeksBeforeDeath = Math.floor((yearsBeforeDeath) * 52);
    var daysBeforeDeath = Math.floor((yearsBeforeDeath) * 365);
    
    console.log("You have " + daysBeforeDeath + " days, " + weeksBeforeDeath + " weeks, and " + monthsBeforeDeath + " months left.");
    
/*************Don't change the code below**********/
}
