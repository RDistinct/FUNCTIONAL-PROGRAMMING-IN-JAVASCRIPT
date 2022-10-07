/**---FUNCTIONAL PROGRAMMING---*/

/**###SOURCES:
 * 1.  https://opensource.com/article/17/6/functional-javascript
 * 2.  https://github.com/Asabeneh/Functional-Programming-in-JavaScript
 * 3.  https://www.freecodecamp.org/news/functional-programming-in-javascript/
 * 
 * 
 * ==>TL;DR 
 *  ->Functional programming can be explained by these laws:  
 *    1. Your software is made of pure isolated functions
 *    2.Avoid mutability & side effects.
 *    3.Use Expressions & declarations.(fixed control flow)
 * 
 *  ->Functional programming is a declarative paradigm based on pure functions.FP languages are turing complete & based on lambda calculus.
 *  ->Object Oriented Programming was created to better manage the complexity of structure in procedural programming. OOP is good when you have a fixed set of operations on things.
 * -> Functional programming is good when you have a fixed set of things and as your code evolves, you primarily add new operations on those existing things
 *  ->Any number of parameters can be passed.
 * 
 * 
 * 
 *                  ###CONCEPTS###
 *  -->Declarative vs Imperative Programming
 *  -->Predictable (Pure & Declarative)
 *  -->Immutability (Safety)
 *  -->Pure vs Impure Functions
 *  -->First Class Functions  (Transparent)
 *  -->Higher Order Functions 
 *  -->Closure
 *  -->Recursion
 *  -->Currying
 *  -->Composition 
 * 
 */

/**                     ###DECLARATIVE vs IMPERATIVE PROGRAMMING PARADIGM###
 *                                  IMPERATIVE
 * ->The word imperative means an authoritative command/ of importance.
 * ->Imperative programming was the first paradigm & goes back in assembly year 1949
 * ->Imperative code generally describes the control flow in a more detailed manner(verbose).It focuses on the how.
 * -> We can trace the execution of the program as it runs & forces us to think like a computer in an operational way rather than a human.🤖
 * ->Under imperative paradigm we have Procedural & Object Oriented Programming
 * ->Imperative code uses statements.Statements tell the computer what to do.Code is based on Variables and changing values of those variables.Statements dont need input or output.They just call other functions or change a value somewhere outside of their internal state.
 * -> Side effects
 * 
 *                                  DECLARATIVE
 * ->Declarative means not requiring a specification of an exact procedure to be followed.
 * ->Declarative code expresses logic(describes what a program does).It abstracts the control flow.This is by use of functions/methods that shows what you want to do but not obvious what is happening under the hood.It focuses on what.Mostly you use predefined functions. Example of declarative language is HTML, CSS or SQL where you tell the computer WHAT to do without the HOW.Out of Declarative programming, we get FUNCTIONAL PROGRAMMING.
 * -> We cant trace the execution of the code and we are able to think like humans.👨‍💼
 * SUMMARY:
 *  let declarative = 'what'; 
 *  let imperative = 'how';
 * -> For DOM manipulation,we can encapsulate the logic in a component(eg a framework)
 * ->Declarative code uses Expressions.Expressions evaluate to a value based on their input by telling the computer what you want.Such an expression is called a pure function
 * ->Expressions that map input to output
 * ->In declarative functional programming changing external state or causing external action such as console.logs, saving a file or loading database record is called a side effect.Side effects are events caused by a system within a limited scope whose effects are felt outside of that scope.Eg is when a program has to store variables and retrieve them to perform a task.
 * ->Changing a value of anything is called a mutation 
 */
// Eg of Imperative code is a for loop to loop an array and remove numbers above 10 & retains those below 10.

const removeNumbersAboveTen = (arr) => {
  const val = [];
  for (let i = 0; i < arr.length; i++) {
    //CONTROL FLOW - have empty array,loop items
    if (arr[i] < 10) {
      val.push(arr[i]);
    }
  }
  return val;
};

const arrNum = [1,5,8,3,4,2,9,11,25,30];
console.log(removeNumbersAboveTen(arrNum)); //OUTPUT: [1,5,8,3,4,2,9]

//Eg of Declarative code using filter function
const removeNumbersAboveTen = (arr) => arr.filter(item => item < 10); 

const arrNum = [1,5,8,3,4,2,9,11,25,30];
console.log(removeNumbersAboveTen(arrNum)); //OUTPUT: [1,5,8,3,4,2,9]


//-> Under Declarative paradigm, we get FUNCTIONAL Programming, Logic languages, Domain Specific Languages
//-> JavaScript is said to be multi-paradigm because it supports both Declarative paradigm & Imperative paradigm
 
//Write a function that takes in an array and doubles every item.
//Declarative way 
const double = (arr) => arr.map((item) => item * 2);
const arrNum = [1, 5, 8, 3, 4, 2, 9, 11, 25, 30];
console.log(double(arrNum)); //OUTPUT: [2,10,16,6,8,4,18,22,50,60]

//Imperative way
function double(arr) {
  let arrVal = [];
  for (let i = 0; i < arr.length; i++) {
    arrVal.push(arr[i] * 2);
  }
  return arrVal;
}

const arrNum = [1,5,8,3,4,2,9,11,25,30];
console.log(double(arrNum));    //OUTPUT: [2,10,16,6,8,4,18,22,50,60]

/**
 * -> Writing reliable software is about properly managing complexity.This is by taking imperative operational code and abstracting it behind a declarative API.
 * -> Most declarative APIs have underlying imperative implementation.
 * -> Declarative code conforms to mental model of the developer rather than operation model of the machine.
 * -> Writing declarative code makes the program context independent(can be used in different programs & work fine).This is difficult with imperative code coz imperative code relies on context and current state of the program.
 * ->In JavaScript you use the in built functions to write declarative code.
 * 
 * 
 *                  STATE MANAGEMENT
 * -> State is anything in code that holds current value to my system.
 * Eg of state management using declarative & imperative paradigm
 */
    let state ={
        foreground:'#999999',
        backround:'#ffffff',
    };
    //state is represented by the object name state & turtles. it while declarative expressions dont change the external state.
    
    const imperativeChangeBgBlack = () => state.background = '#000000'; //Imperative code directly accesses the state & changes

    const declarativeChangeBgBlack = (state) => ({...state, background: '#000000'});
    //take current state as parameter, return a new state with different background value without changing the original state.
    //To return an object literal expression requires parentheses around expression.Eg (param) => ({name:'Ben'}) returns object {name:"Ben"}
    console.log(declarativeChangeBgBlack()); //OUTPUT: {background:'#000000'}
    console.log(state);//OUTPUT: {foreground:'#999999',backround:'#ffffff'}

    const tmnt = ['Donatelo','Michelangelo','Leonardo','Raphael'];

    const imperativeAddMember = (Shredder) => tmnt.push(Shredder);
    //changes the tmnt external array & returns new array.
    
    const declarativeAddMember = (tmnt) => Shredder => [...tmnt, Shredder]; //OUTPUT: Returns new array of tmnt without changing the original array. Double arrow functions is Currying.We will get there soon.

    /**
     * In declarative code you create a function composition which takes a number of small functions & strings them together which means one function passes its output to an input to the next functionin the line. 
     */



    /**                 ###PURE FUNCTIONS###
     * ->this means that function does not include side effects.
     * -> Same imput will always give the same out put without side effects.This is known as idempotence.Eg f(x) = x + 2.This will always give out the value of x plus 2.
     * ->Idempotence means property of certain operations can be applied multiple times without changing the result.
     * 
     */



/**                     ### HIGHER ORDER FUNCTION ###
 * -> Can take another function as a parameter or return another function(or both).
 * -> A function that receives or passes out another function
 * 
 * 
 *                      ### FIRST CLASS FUNCTION ###
 * -> Can be used as a variable/value and passed into another function or returned from another function.
 * E.g of a First class function
 */
    const myFun = function(event){
      event.preventDefault();
    };
    //function is stored in the variable myFun.
    document.getElementById('#myId').addEventListener('click', myFun);
    //myFun is an argument for addEventListener.