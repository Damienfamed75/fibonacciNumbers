///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.1.01                   ////
////   Summary: A function to list a specific number   ////
////      of fibonacci numbers within the sequence     ////
///////////////////////////////////////////////////////////


fib=n=>{
    var a = 1, b = 0, temp; // creates all needed variables
    while(n >= 0) { // keeps listing the sequence until given number = 0
        temp = a; // temp value = a's current value
        a = a + b; // changing a to equal a + b
        b = temp; // b = a's previous value
        n--; // subtracts given value by one
        console.log(a); // logs the value of a
    }
    return b; // returns value of b
}

fib(25); // Calls function