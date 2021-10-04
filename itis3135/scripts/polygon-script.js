var age = prompt("Enter your age to enter Ablazed Raccoon LLC site ");
do{/*It tests to make sure whther or not the while loop will be needed*/
    var age = prompt("Enter your age to enter Ablazed Raccoon LLC site ");
    if(age > 0){/*it returns true if its a proper number for age*/
        alert("Welcome to the website, you are " + age);
}else if(age < 0){/*if user inputs a negative, will remake prompt also alert if user inputs a negative*/
        alert("Error:Age can't be less than 0");
}else if(isNaN(age)){/*same job but for if the user puts in anything other than a number*/
        alert("Error:Age must be a number");
}
}
while(age < 0 || isNaN(age));
/* product of trial and error
if(isNaN(age)){
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
    if (parseInt(sides) == 1){alert("henagon");/*makes sure its rounded up and returns what type of polygon it is
    same for the rest*/
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
getShape();
function validateEntry(){
    var entry = 0;
    if(entry >= 1 && entry <= 10 ){
        alert("Valid");
    }else{
        alert("Not Valid");  
    }
    
}
validateEntry();