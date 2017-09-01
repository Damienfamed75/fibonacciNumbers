////////////////////////////////////////////////////////////
////              Made by: Damien Stamates              ////
////                  Version: 0.6.19                   ////
////   Summary: A simple guessing game for an example   ////
////       to how to use the fibonacci calculation      ////
////////////////////////////////////////////////////////////


// Insert my code into your file or keep file external and reference using HTML

fib=n=>{var a=1,b=0,t;while(n>=-1){t=a;a=a+b;b=t;n--;}return b} // fibonacci number calc


switch(Math.floor((Math.random() * 10) + 5))
{                               // Generates random number 5-10
    case 5:                     // if 5
        numString = 'fifth';
        numFib = 5;
        break;
    case 6:                     // if 6
        numString = 'sixth';
        numFib = 6;
        break;
    case 7:                     // if 7
        numString = 'seventh';
        numFib = 7;
        break;
    case 8:                     // if 8
        numString = 'eighth';
        numFib = 8;
        break;
    case 9:                     // if 9
        numString = 'ninth';
        numFib = 9;
        break;
    case 10:                    // if 10
        numString = 'tenth';
        numFib = 10;
        break;
    default:                    // if error
        numString = 'eleventh';
        numFib = 11;
        break;
}

var prompt = require('prompt'); // gets npm plugin 'prompt'

console.log('What\'s the ' + numString + ' number of the fibonacci sequence?');
prompt.get(['number'], function(err, result) {  // stores user input into result.number
    if(err) done(); // checks if error occured
    else {
        if(parseInt(result.number) == fib(numFib)) console.log('right :: ' + fib(numFib)); // parses response and checks if it equals fibonacci number
        else console.log('wrong!\nfibonacci :: ' + fib(numFib) + '\nYou answered :: ' + result.number);
    }
})

done=()=>{console.log('\n\nERROR')} // error message