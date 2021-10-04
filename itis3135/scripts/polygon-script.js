var age = prompt("Enter your age to enter Ablazed Raccoon LLC site ");
if( age >= 1){ alert("Welcome to the website");
} /* Welcomes to website if you input a age greater than or equal to 1 */
else if (isNAN(age)){ prompt("Error:Enter your age to enter Ablazed Raccoon LLC site ");
}

function getShape(){
    var sides = prompt("Enter a number between 1 and 10");
    if (parse(sides) == 1){alert("henagon");
}
    else if (parse(sides) == 2){alert("digon");
}
    else if (parse(sides) == 3){alert("trigon");
}
    else if (parse(sides) == 4){alert("tetragon");
}
    else if (parse(sides) == 5){alert("pentagon");
}
    else if (parse(sides) == 6){alert("hexagon");
}
    else if (parse(sides) == 7){alert("heptagon");
}
    else if (parse(sides) == 8){alert("octagon");
}
    else if (parse(sides) == 9){alert("enneagon");
}
    else if (parse(sides) == 10){alert("decagon");}
}
function validateEntry(){
    var entry = 0;
    if(entry >= 1 && entry <= 10 ){
        alert("Valid");
    }else{
        alert("Not Valid");  
    }
    
}