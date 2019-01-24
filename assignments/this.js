/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global object binding means when in the global scope, in other words not inside the body of an object (an object smaller than the window object)
 the value of “this” will be the window/console Object and will print out all of the window methods when logged to the console.

* 2. Implicit Binding means when a function is an object method and is called with a preceding dot and that dot itself is preceded by the object name,
that object name refers to the 'this' keyword. 

* 3. New Binding means when a constructor function (function that's a template for creating objects) is used, 'this' keyword 
refers to the new object (instance) that's created off the constructor function template.

* 4. If you change the context of the method using call or apply like so, " instance.method.call(new instance) " or " instance.method.apply(new instance) "
it returns the results and also the object body of the new instance rather than the instance that was the previous instance. And so the 'this' keyword
now refers to the object body of the new instance. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function songLyrics(lyrics) {
    console.log(this);
    return lyrics;
}
songLyrics('baby one more time');


// Principle 2 
// code example for Implicit Binding
const songObj = {
    prevLyricSentence : 'Hit me',
    fullLyricSentence: function(nextSentence) {
        console.log(`${this.prevLyricSentence} ${nextSentence}`);
    }
}
songObj.fullLyricSentence('baby one more time');

// Principle 3
// code example for New Binding

function artistSays(artist) {
    this.firstLyric = '...baby';
    this.artist = artist;
    this.sings = function() {
        console.log(`${this.artist} sings: ${this.firstLyric}`);
    }
}
const gwen = new artistSays('Gwen');
const britney = new artistSays('Britney');
gwen.sings();
britney.sings();

// Principle 4
// code example for Explicit Binding
gwen.sings.call(britney);
britney.sings.apply(gwen);
