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
 *  -->Declarative vs Imperative Programming ✔
 *  -->Predictable (Pure & Declarative) 
 *  -->Immutability (Safety)
 *  -->Pure vs Impure Functions ✔
 *  -->First Class Functions  (Transparent) ✔
 *  -->Higher Order Functions (Map, Filter, Reduce, forEach, Some, Every, Find, Includes)✔
 *  -->Functors ✔
 *  -->Closure ✔
 *  -->Currying 
 *  -->Composition 
 *  -->Recursion 
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



    /**                 ### PURE & IMPURE FUNCTIONS ###
     * ->this means that function does not include side effects.
     * -> Same imput will always give the same out put without side effects.This is known as idempotence.Eg f(x) = x + 2.This will always give out the value of x plus 2.
     * ->Idempotence means property of certain operations can be applied multiple times without changing the result.
     * ->An Idempotent function is one that when the results are reapplied to that function,the results remain the same without a different result.
     * -> Pure functions follow the following 2 properties:
     *  a)Referential transparency- this means that the fuction always gives the same return value for the same arguments.the function does not depend on any mutable state.
     *  b)Side effect free- function cannot cause side effect. 
     * =>SIDE EFFECTS: are when your code interacts(reads/writes to) with external mutable state eg I/O, reassigning a variable, modifying a mutable object.
     * ->External Mutable state is anything outside the function that would change the data in your program eg set a function,boolean or an object, delete properties on object.
     * -> Immutable means cannot be modified after being created.
     * Eg of mutability state being set inside function: 
     */
        function changeAvailability(){
          availability = true;
        }
        //state of availability is mutated to true boolean
      //Eg of Pure Functions
      function multiply(a, b){
        return a * b;
      } //For the same input, you get the same output.

      //Eg of Impure Functions
      let ageLimit = 45;
      function ageCheck(age){
        return age <= ageLimit;
      }/*this is an impure function coz it depends on captured ageLimit variable.
      ->Captured Variables  dont make a function impure, but mutable ones(re-assignable) do.Eg let keyword can be reassigned.
      Eg 2 of Impure functions
      */
     function multiply(a, b){
      console.log('Arguments: ', a, b);
      return a * b; 
     }
     /**
      * Program without impure functions is impossible because we need to interact with external values.General rule is that we use 80% pure functions and 20% impure of the necessity.
      */


/**                     
 *                      ### FIRST CLASS FUNCTION ###
 * -> Can be used as a variable/value and passed into another function or returned from another function.
 * -> In short, functions are treated like other variables.A function can be passed as an argument to another function, can be returned by another function, or can be assigned as a value to a variable. 
 * E.g of a First class function
 */
    const myFun = function(event){
      event.preventDefault();
    };
    //function is stored in the variable myFun.
    document.getElementById('#myId').addEventListener('click', myFun);
    //myFun is an argument for addEventListener.

      //Assign a function to a variable:
       const greeting = () =>{
        console.log('Hello')
       }
       greeting(); //OUTPUT: Hello - calling the function using the variable.
       /**We assigned an anonymous function to a variable greeting & invoke the function by using the variable with brackets - greeting() */

       //Pass a function as an argument
       function greet(){
        return 'Hello, ';
       }

       function salutation(helloMsg, name){
        console.log(helloMsg() + name);     //here  helloMsg has parenthesis coz we expect a function.In this case, greet function. If we dont use the parenthesis, it wont work.It will show the function syntax of greet.
       }
       salutation(greet, "Joe"); //OUTPUT: Hello, joe
       /**
        * We pass greet function as an argument to salutation function.
        * -> A function passed as an argument to another function is called a CallBack function. Eg greet function
        */ 

       //Return a function
       function greetings(){
        return () => {
          console.log("Hey!");
        }
       }
       /**
        * This eg we are returning a funtion(console .log ) from another function. Functions are treated as values in JavaScript.
        * -> A function that returns another function or takes another function as a parameter is called a Higher Order Function
        */

       /**
        *                   ###HIGHER ORDER FUNCTIONS#### 
        * -> Can take another function(callback function) as a parameter or return another function(or both).     
        * -> Its a function that receives or passes out another function
        * -> Javascript has in built array methods that support functional programming natively.
        * -> These functions call a function for you.Eg using map in a function that halves numbers in an array: 
        * 
        */
       const numbers = [2,4,6,8,10]
       //we can use map as follows:
       const halfNumbers =  numbers.map(value => value / 2);
       console.log(halfNumbers); //OUTPUT: [1,2,3,4,5]

       //or we can use declarative way: 
       const halfValues = value => value / 2;     //when you use parenthesis on a arrow functions you get errors.
       const halfNumbers = numbers.map(halfValues);
       console.log(halfNumbers); //OUTPUT: [1,2,3,4,5]
       //here we are just passing a function to be executed, the map will call the callback for us.Map returns a new array

       /**      ###The MAP METHOD###
        * -> returns a value of a new array which is a result of callback function.
        * -> it calls a provided callback function once on each array item in order & constructs a new array fromresults.
        * -> Syntax is : map((element) => {code block}) || 
        */


       /**    ###The FILTER METHOD###
        * -> when you are filtering out something, you are keeping what you want and gettin rid of what you dont want.
        * -> a good practice is to filter out things.Eg to get even numbers filter out the odd numbers.
        * 
        */
       const moreNumbers = [1,2,3,4,5,6,7,8,9,10]

       const evenNumbers = moreNumbers.filter(number => number % 2 === 0);
       console.log(evenNumbers); //OUTPUT [2,4,6,8,10]

       /**
        *       ###THE REDUCE METHOD###
        * ->in functional programming it is the most used method because it reduces things to a single value.
        * -> takes a user-supplied callback function & executes it on each element of the array in an orderly manner,passing the return value from calculation on the preceeding element.
        * -> The Reducer is a function that takes the accumulated value and the next item in the array &returns a new value.
        * -> final result of running the reducer function on all elements is a single value.->Reducer syntax is array.reduce(reducer)   
        * ->Reduce function syntax is: 
        *   reduce((previousValue, currentValue)=>{ code })
        *   reduce((previousValue, currentValue)=>{},initialValue)
        * -> Eg of reduce to add numbers in array
        */

        const numbers = [2,3,4]
        const addNumbers = numbers.reduce((sum, value) => sum + value);
        
        console.log(addNumbers); //OUTPUT: 9

        //To add one using ilnitial value
        const numbers = [2,3,4]
        const addNumbers = numbers.reduce((sum, value) => sum + value, 1);
        console.log(addNumbers); //OUTPUT: 10
        //The 1 is an initial value
        /**
         * -> initial value is a value to which previousValue is initialized when callback function is called for the first time.
         * -> If initialValue is specified, also the currentValue is initialized to the first value in the array.
         * -> If initialValue is not specified, previousValue is initialized to the first value of the array, & currentValue is initialized to the second value in the array.
         * Eg of reduce function with callbacks:
         */

        const add1 = number => number + 1;
        const add2 = number => number + 2;

        const inputFunction = (input, fn) => fn(input) //takes an input and a function and returns the function with the input given

        const reduceValue = [add1, add2].reduce(inputFunction, 1); //OUTPUT 4

        /**
         * ###THE FOREACH METHOD###
         * -> executes a callback function once for every array item in an ascending index order.
         * -> it returns undefined value.
         * -> Its syntax is:
         * function callback (){]
         *  array.forEach(callback)
         * 
         *  forEach((element) => {code})
         *  forEach((callbackFn) => {code})
         * -> callback fn is called once for each array element & unlike map() or reduce() it always returns undefilned & is not chainable.
         * -> forEach does not mutate the array on which is called on but the callback function might do so.
         * -> Eg 
         */
        const letters = ['a','b','c'];
        letters.forEach(element => console.log(element));//OUTPUT 'a' 'b' 'c'

        const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
        countries.forEach(country => console.log(country.toUpperCase())); //OUTPUT "FINLAND"
                     //"ESTONIA"
                    //"SWEDEN"
                   //"NORWAY"
        

/**
 * ###FUNCTOR###
 * -> in Math, a functor is a mapping between categories
 * -> functor data type is anything we can iterate/map over.
 * -> its a container whith an interface which can be used to apply a function to items inside it.
 * -> functor types are usually represented as an object with a .map() method that maps inputs & outputs while preserving structure.For this reason map() method can be chained.
 * -> a good example is an array, object, streams, trees. 
 * -> in short a functor is a function object.
 * -> JS built in array & promise objects act like functors.
 * ->if you map an identity function over a functor,the resulting functor must be equivalent to the original functor.The filter,reduce &forEach functions are not used to map as they return a different result from the original functor.
 * Eg of functor demo
 */

function add2(value){
  return value + 2;
}

console.log([2,3].map(add2)); //OUTPUT [4,5]

  //THIS EXAMPLE IS WRONG ABOUT FUNCTORS. A function that adds one or minus one on numbers or string

  function stringFunctor(value, fn) { //TAKES VALUE &FUNCTION AS PARAMS
    let chars = value.split("");      //SPLIT VALUE 
    return chars
      .map(function (char) {
        return String.fromCharCode(fn(char.charCodeAt(0))); //convert char to number & pass it to fn. we take return value of fn which is a number &convert to character.
      })
      .join(""); //joins them together.
  }

  function plus1(value){
    return value + 1;
  }

  
  function minus1(value){
    return value - 1;
  }

  [3,4].map(plus1) // OUTPUT: [4,5]
  stringFunctor("ABC", plus1) //OUTPUT: "BCD"
  stringFunctor("XYZ", minus1) //OUTPUT: "RXY"
  //this example is wrong coz the input structure of value was altered by splitting it

  /**
   * -> in short these are objects that implement map() method.
   * 
   * ->there is a difference between functors in functional programming & functors in mathematics.
   * When we talk about functors in functional programming (especially Haskell), a functor refers to that concept in category theory. Under that definition, Array#filter is not a functor.

But if we take a functor to simply mean a higher-order function, in this case, Array#forEach is a functor.
   */
 

/**### CLOSURES ### 
 * -> A Closure is a function enclosing a reference variable to its outer scope.
 * ->A Closure is the combination of a function enclosed with references to its surrounding state/lexical environment.
 * -> A closure gives you access to an outer function's scope from an inner function.
 * -> closures are created in JS every time a function is created at function creation time.
 * -> A closure is the combination of a function and the lexical environment within which that function was declared.
 * ->when you return a function from a function you create a closure.
 * -> closure is a way to make predictable state by enclosing behaviour
 * -> In a closure, the outer function returns the inner function.
 * -> Eg
*/
function outerFunction (){
  let outerFnValue = "out";
  function innerFunction(){
    console.log(`The value is : ${outerFnValue} `)
  }
  return innerFunction();
}
outerFunction(); //OUTPUT The value is out


/** Calling outer function when invoking inner function without return keyword */
function outer (){
  let value = 0;
  function inner(){
    value ++;
    console.log(value)
  }
  inner()             //Notice here we are not returnng the inner function but instead invoking it.
}

outer();// 1 - the js engine checks if variable value is present in inner function & if its not it checks the outer function & finds the variable present , increments the value by 1 & logs it to the console.
outer(); //1 - when outer function is called even twice, the output is the same because with every new invokation a temporary memory is established so value is reinitialised to 0. 


function outer (){
  let value = 0;
  function inner(){
    value ++;
    console.log(value)
  }
  return inner        //by returning the inner function we can invoke it at a later time.Then we can store it in a variable & call it via  the variable.Eg const fn = outer(); fn();  If we want to call the inner function immediately, we can write inner() without return keyword instead..
}
const fn = outer();  //the result of invoking the outer function is stored in a variable named fn. This result is the inner function.We are not executing the inner function from wthin the outer instead we are just returning it.To invoke the inner function, we call fn()
fn()
fn()
/**
 * ->the output will be 1 & 2.this is because when we return the inner function,we return it together with its scope.Function inner is bundled up with variable counter & that is a closure.In this situation the function persists/remember the value of the counter variable
 * -> when we call the fn function for the first time, counter id incremented to one & value ils logged to the terminal & fn remembers counter value is one.
 * ->Next time fn is called it increments value by one.
 * ->In closures the inner function has access to variables  in outer function scope even after outer function has finished execution.
 * 
 * SUMMARY OF CLOSURES
 * -> The outer function returns the inner function 
 * -> Inner function is executed in a different scope
 * -> Inner function continues to maintain access to the outer functions variables even though the outer function no longer exists. 
 * 
 * 
 *  Another Example
 */
 const greet = function(salutation) {
  return function(firstName) {
    return `${salutation} ${firstName}`
  }
}

 const howdy = greet("HOWDY"); //Assign salutation & Invoke the inner function & store it in howdy
 const hello = greet("Hello")

console.log(howdy("Joe")); //HOWDY Joe - assign Joe to inner function
console.log(hello("Joe")); //Hello Joe


/**
 *          ###CURRYING####
 * -> Is the transformation of a function eith multiple arguments to multiple functions with containing a single argument in a sequence
 * -> its wrapping a function inside a function. Parent function takes the first argument that returns the function taking the next argument.
 * -> Its syntax is 
 *    function fun(param1 param2 param3 param4)
 *    
 *  currying function
 *    function fun(param1){
 *      return function (param2){
 *        return function (param3){
 *          return function (param4){
 *          }
 *        }
 *      }
 *    }
 *  
 * Eg 
 */
//a function that performs currying for two arguments f(y,z) which translates to f(y)(z)
function curry(f){        //add is passed to f
  return function(y){     //
    return function (z){
      return f(y,z);
    }
  }
}

// Its usage 
function add(y,z){
  return y + z;
}
const currySum = curry(add)
console.log(currySum(1)(2)) //OUTPUT: 

//area = pi* r2
const getArea(pi, radius){
  return pi * (radius * radius);
}
getArea(3.142, 20)

//currying
const getArea(pi){
  return function(radius){
    return pi * (radius * radius);
  }
}


//without currying
function getVolume(length,width,height){
  return length * width * height;
}

console.log (getVolume(5,10,15)); //OUTPUT 750

//currying function to getVolume
function getVolume(length){
  return function(breadth){
    return function (height){
      return length * breadth * height;
    }
  }
}

console.log(getVolume(5)(10)(15)); //OUTPUT 750

/**
 * SUMMARY 
 * -> is a transform that makes f(a,b,c) callable as f(a)(b)(c)
 * 
 */


  //###React###
function myButton(){
  return (<div>Button</div>)  //JSX
}