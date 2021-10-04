var age = prompt("Enter your age to enter Ablazed Raccoon LLC site ");
while(age > 0){
    alert("Welcome to the website, you are "+ age);
if(isNAN(age) && age < 0)break;
    alert("Error: Not a number or actual real number, please enter a number");
}
/*if(isNaN(age)){
    alert("Error:Age must be a number");
}else if(age < 0){
    do{
        alert("Error:Age can't be less than 0");
    }
    alert("Error:Age can't be less than 0");
}else{
    alert("Welcome to the website, you are " + age);
}*/

function getShape(){
    var sides = prompt("Enter a number between 1 and 10");
    if (parseInt(sides) == 1){alert("henagon");
}
    else if (parseInt(sides) == 2){alert("digon");
}
    else if (parseInt(sides) == 3){alert("trigon");
}
    else if (parseInt(sides) == 4){alert("tetragon");
}
    else if (parseInt(sides) == 5){alert("pentagon");
}
    else if (parseInt(sides) == 6){alert("hexagon");
}
    else if (parseInt(sides) == 7){alert("heptagon");
}
    else if (parseInt(sides) == 8){alert("octagon");
}
    else if (parseInt(sides) == 9){alert("enneagon");
}
    else if (parseInt(sides) == 10){alert("decagon");}
}
function validateEntry(){
    var entry = 0;
    if(entry >= 1 && entry <= 10 ){
        alert("Valid");
    }else{
        alert("Not Valid");  
    }
    
}