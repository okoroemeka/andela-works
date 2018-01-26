 /* Returns an array of integers within 0 and argument that sums to hundred */

 const input = prompt("enter an integer"); /*Getting input*/
 const number = parseInt(input);  /*converting the input to an integer*/
 
 sumToHundred = number =>{
    /* Type checking*/
     if (Number.isInteger(number)) {
         let sum = 0;
         let Integer_array = [];
         let difference = 0
         /* Generating integers from 1 to input array*/
        for (var i = 0; i <= number; i++) {
           sum = sum + i;
           Integer_array.push(i);
             if (sum > 100) {
                 difference = sum - 100;
                 break; 
             }
         } 
         /*checking to see if sum is less than hundred*/
         if (sum < 100) {
             return " It's not possible";
         }
 
         /* checking if the difference is in the already generated Array*/
         if (difference in Integer_array) {
             let index = Integer_array.indexOf(difference);
             Integer_array.splice(index,1);
         }
         return Integer_array;
     }
     else{
         return "You did not input an integer."
     } 
 }
 
 sumToHundred(number); /* calling the function*/