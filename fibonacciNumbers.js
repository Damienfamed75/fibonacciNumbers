///////////////////////////////////////////////////////////
////             Made by: Damien Stamates              ////
////                 Version: 0.4.00                   ////
////   Summary: A function to list a specific number   ////
////      of fibonacci numbers within the sequence     ////
///////////////////////////////////////////////////////////


fib=n=>{var a=1,b=0,t;while(n>=-1){t=a;a=a+b;b=t;n--;}return b}