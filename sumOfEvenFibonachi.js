sumOfEvenFibonachis = ()=>{
    /* RETURNS THE SUM OF EVEN FIBONACHI NOT GREATER THAN 4000000 */ 

    let fibonachiArray = [1,2]  /*HOLDS THE GENERATED FIBONACHI*/
    let nextFibonachi = 0; /*HOLDS EACH FIBONACHI GENERATED*/
    let sum = fibonachiArray[1]; /*SUM OF EVEN FIBONACHI*/
    while (fibonachiArray [fibonachiArray.length-1] < 4000000) {

        nextFibonachi = fibonachiArray[fibonachiArray.length-1] + fibonachiArray[fibonachiArray.length-2];
        if (nextFibonachi < 4000000 ) {
            fibonachiArray.push(nextFibonachi);

            if (nextFibonachi % 2 === 0) {
                sum = sum + nextFibonachi;
            }
        }
        else {
            break;
        }
    }
    return sum;
}
sumOfEvenFibonachis() /*calling the function*/