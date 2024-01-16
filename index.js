

/* Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";

So that the variable a holds the value "8".
And the variable b holds the value "3".
When the code is run, it should output:

a is 8

b is 3

Do NOT change any of the existing code.
You are NOT allowed to type any numbers.
You should NOT redeclare the variables a and b.

Hint: Use this code playground to run your code and see if it matches your expectations.
Hint: The solution is just 3 lines of code. */

function test() {
    var a = "3";
    var b = "8";

/***********Do not change the code above 👆*******/
//Write your code in 3 lines:
var c = a;
a = b;
b = c;  
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

test()

/* 1st lesson - String Concatenation */

var message1 = "Good day";
var message2 = "Welcome to our hotel!";
var guestName = "Andrés";
console.log(message1 + " " + guestName + "." + " " + message2);

/* 2nd lesson - Length Property */ 

var tweet = "Hello world! My name is Guste, I'm a young woman, willing to become a programmer! Follow me in this exciting journey!";
/*In devtools of Chrome I use prompt function to create a pop up, to recreate
the Twitter box, so the user can leave a 140 characters max. message*/
var tweetCount = tweet.length;

/* After the tweet pop up, create an alert that counts how many characters the user wrote 
and how many are left*/
console.log("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters left.");

/* 3rd lesson - slice Property - creating in Chrome devtools an alert(prompt("Tweet something!").slice(0,140)); 
to create a tweet prompt first and then an alert that cuts the tweet at 140 characters*/

var tweet = "Hello world! My name is Guste, I'm a 26 years old young woman, willing to become a Full Stack JavaScript programmer! Follow me in this exciting journey!";
console.log(tweet.slice(0,140));

