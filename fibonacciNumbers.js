///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.3.01                   ////
////   Summary: A function to list a specific number   ////
////      of fibonacci numbers within the sequence     ////
///////////////////////////////////////////////////////////


fib=n=>{var a=1,b=0,t;while(n>=0){t=a;a=a+b;b=t;n--;console.log(a)}return b}

fib(100);