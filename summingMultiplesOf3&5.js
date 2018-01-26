const input = prompt("enter an integer");/*Asking for input*/
const integer = parseInt(input); /* converting input to integer*/

addMultiples = integer =>{
    /*docstring for summing multiples below an integer input*/
    let sumOfMultiples = 0;
    // type checking
    if (Number.isInteger(integer)  && integer > 0) {
    //    generating natural numbers below the input integer
        for (var index = 1; index < integer; index++) {

    // checking for the multiples of 3 or 5 in the range of integer
            if (index % 3 === 0 || index % 5 === 0) { 

                sumOfMultiples = sumOfMultiples + index;
            }       
        }
        return sumOfMultiples; 
    }
    else{
        console.log("You did not enter an integer or the integer you entered is less than zero.")
    }  
}

addMultiples(integer);