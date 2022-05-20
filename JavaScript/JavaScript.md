# JavaScript Notes

<details>
<summary>  

> # What is JavaScript? 
</summary>
- Language that provides logic inside the JavaScript Runtime environment, which is present in browsers, like V8 Engine in Chrome, Firefox's SpiderMonkey, etc.
- Features/APIs are given by the Environment itself. E.g.
    - the line `console.log()` is not a part of JavaScript. It is a feature given the the env such as a browser or Node.js
    -  `setTimeout` is also considered to be a part of JS but is given by the browser. 
    - Various other tasks such as queueing, threading, etc. are taken care of by the environment. They are not a part of JS
- It is syntactically similar to Java, OOPS concepts were taken from Self, functional programming (where functions can behave as variables)
- ECMA Intl. laid out the standards based on which JS is supposed to behave, so JS is an implementation of the ECMAScript standard
    - ECMAScript is written by representative of the browsers who mutually decide the features of the script

- Node.js is an environment that supports JS
- Changing the UI is a very costly operation, so we wish to optimise it as much as possible, which is where frameworks/libraries such as Angular, Vue, React come in. They implement the optimisation of changing of UI components.

</details>

---

<details>
<summary>

> # Types of functions in JavaScript
</summary>

- Functions are very powerful in JavaScript and can be used in many ways, so much so that they are considered first-class citizens.
![](2022-04-18-17-57-41.png)

- If parameter is defined in the function definition but not passed while invokation, it will be considered         `undefined`
- There is no need to define the "type" of parameter in javascript and the function has no fixed return type.

- Functions are treated as a variable and can be re-assigned to another variable, if needed. 

![](2022-04-19-10-54-31.png)

- When let and const did not exist, var used to show unstable behaviour in some situations

- IIFE - Immediately Invoked Function Expression
    - It is invoked on its own as soon as the script is executed

![](2022-04-19-10-56-51.png)

- Arrow function - A way of defining functions that shortens the syntax. Used very often in React in concepts of `bind` and `this`
Syntax:
![](2022-04-19-11-22-20.png)
Shorthand for single parameter:
![](2022-04-19-11-22-54.png)

- Variable can be passed as a parameter, so a function, since it can be assigned, can be passed as a parameter in another function
    - When a function is passed as a parameter, its address is passed in the parameter
    - Example ![](2022-04-19-11-30-08.png)
    - Output: ![](2022-04-19-11-30-43.png)

- We can return a function as well
![](2022-04-19-11-34-11.png)
    - The returned value will be the address of the function,and can be stored in a variable, which in turn can be called.

</details>

---


<details>
<summary>

> # JS Code Execution | Hoisting | Execution Context
</summary>

![](2022-04-19-11-43-18.png)

Output: 


Reason:

Function `real` is allocated in the heap memory and its reference (address) is passed in the stack. 

The second time `real` is declared, it will be created once more in the heap, at a different address. The reference in the stack will change, and will point to the new address.

A new function will be created in the heap for the third declaration, and the stack will point to it now.

No matter where you call the function in the program, the latest `real` will be called as it was referenced in the stack before the code was executed


![](2022-04-19-12-11-04.png)    

_________


- JS code executes top to bottom, left to right

- Execution Context is a wrapper for our JS code which contains the following:
    1. Global object
        -  `console.log(global)` will print the global object in Node.js
        - It till print `window` object in the browser


    2. this
        - Whenever an execution context is created, so is `this`
        -   `console.log(this)` will return an empty object in Node.js and will return the `window` object in the browser


- Any piece of code that is not inside the function is global in nature
    - The wrapper for this code is known as global execution context


- Whenever execution context is created (creation phase) before the code is executed, we receive the following:
    1. Global object
    2. this
    3. the code itself is allocated memory


___


## Memory allocation
`var` : Memory is allocated, assigned `undefined` value. This mempry allocation process is known as "`hoisting`" 

![](2022-04-19-11-57-12.png)

Output: 

![](2022-04-19-11-57-52.png)


`functions` : Memory is allocated to the functions before the execution of the code. Functions are made in the heap and the reference in put in the stack.

![](2022-04-19-12-01-55.png)

Output:

![](2022-04-19-12-02-15.png)


Q:

![](2022-04-19-12-13-52.png)

Output:

![](2022-04-19-12-22-20.png)

Reason: `var` has undefined value by default

</details> 

___

<details> 
<summary>

> # Lexical scope and scope chain
</summary>

![](2022-04-19-12-47-39.png)

Output:


![](2022-04-19-14-15-15.png)




Reason: Lexically, searching "outside" means outside the definition of the function, not where it is called.

Note: After a function is done executing, it is removed from the call stack.

___

![](2022-04-19-12-51-55.png)

Output:

`20`

Reason:

Our code runs in the execution context, which is inside the call stack.

Our code runs inside the global execution context, which has the global object, this, and the code (i.e. the variables, functions etc. are alloted memory)

`varName` is set as undefined, and the function in in the made in heap memory, with the address reference in the call stack.

Whenever a `function is called`, its own execution context is created on the stack. 
The global object is passed on to this new context, and `this` is calculated. The variables inside the function are allocated memory, so a new `varName` is created, with value set as undefined. Then, the code is executed.


Q:

![](2022-04-19-13-04-56.png)

Output:

![](2022-04-19-13-05-26.png)

Reason: Line 5 is undefined because of the function's EC, which has allocated memory to a new `varName`

If we add the following block on code, it will pick up he value as 20 in line 8

![](2022-04-19-13-14-12.png)

This is due to the scope, which is the area where a function or a variable can be found.

So, if function `b()` does not have `varName`, it will search outside the function body, layer by layer, all the way till the global area, till the variable is found. This is called `scope chain` If not found, it will give an error.
</details> 

___

<details> 
<summary>

> #  Questions on var keyword & function scope
</summary>
![](2022-04-19-15-12-12.png)

Output:

![](2022-04-19-15-26-28.png)

___

`var`'s value can be re-assigned. 

Re-declaration is of no use as the variable has already been allotted memory

![](2022-04-19-15-18-28.png)

___
![](2022-04-19-15-20-09.png)

Output:

![](2022-04-19-15-23-28.png)

Reason:
`var` follows functional scope, so once a variable is declared inside a function, re-declaration will not have any effect, though the value can be re-assigned

___
![](2022-04-19-15-28-35.png)

Output:

![](2022-04-19-15-29-00.png)

</details> 

---
<details>
<summary>

> # Let, Const
</summary>

`let` and `const` were introduced in ES6

`let` : Declaration is the same as var, and the default value is undefined

The value can be re-assigned, but a variable cannot be re-declared in this case. Here, it will give an error while hoisting/interpreting, so code for valid lines will not be executed at all.

Temporal dead zone: An area for let and const between the line where code starts and the line in which the variable is declared.

This means that we cannot access a variable before it is declared in let and const, whereas in var it gave the value as undefined.

TDZ is not an error, but a safety measure.

![](2022-04-20-11-09-17.png)


`const` : Similar behavior as let wrt TDZ, but we have to assign the variable some value. 

We cannot re-assign the value of this variable nor can we re-declare it.

___

Block scope : Memory of a variable is allotted according to the block

![](2022-04-20-11-14-28.png)

Output:

![](2022-04-20-11-15-22.png)


Temporal dead zone is also valid inside the block
![](2022-04-20-11-16-33.png)

If the same variable is not defined inside the block, then it will look for it in outer blocks

![](2022-04-20-11-19-55.png)

Line 28 will print "orange"

___

Variable shadowing: A variable defined within an inner block shadows a variable of the same name defined in the outer block.

Illegal shadowing: var is function scoped, let and const are block scoped. Therefore, if `var` is defined in the inner block and a variable of the same name but with `let` or `const` is defined in the outer block, it is considered illegal and will give an error.

___

Summary:

`var`
- Scope: function
- Reassign: Allowed
- Redeclaration: Allowed
- Temporal dead zone: N/A

`let`
- Scope: block
- Reassign: Allowed
- Redeclaration: Not allowed
- Temporal dead zone: Yes

`const`
- Scope: block
- Reassign: Not allowed
- Redeclaration: Not allowed
- Temporal dead zone: Yes

___

Note:

![](2022-04-20-11-36-05.png)

Line 2 is a valid operation, Line 4 is not

When we define an array using const, the reference of the first element is stored in the variable, it should not be removable but an operation like `arr.shift()`, which removes the first value of the array, is valid. 
</details> 


---

<details>
<summary>

> # Everything is an object in JS

</summary>
An object consists of key value pair

The key can be string or a number
```
 let object = {
    name: "Arindam",
    lastName: "Keswani",
    sayHi: function () {
        console.log("Arindam says hi!")
    }
}
```

To loop over the object's keys and retrieve values:

![](2022-04-20-12-07-55.png)

Everything, including an array is an object in JS

![](2022-04-20-12-11-17.png)

Output:

![](2022-04-20-12-12-05.png)

If you try to run a for-in loop on this array like before, you will see the following:

![](2022-04-20-12-13-10.png)

Each "index" acts as a key. Defining a random index say `arr[90]=100` will give empty values in between.

Objects are emulated as arrays in JS

Therefore, to answer the question give at the end of the previous section.

When `.shift()` operation is performed, the "0" key is removed, but the reference remains the same.

___

We can assign properties to functions as well, which will treat the function like an object.

![](2022-04-20-12-33-53.png)

On printing the function, we will get:

![](2022-04-20-12-38-02.png)

So, function is an object, and has a key:value pair functionality

Extra feature: Code inside a function can be executed when you invoke the function.

Everything including Dates, erroes, modules are objects

Though, there are 6 primitive types -> number, string, boolean, undefined, null, symbol
</details>

___

<details>
<summary>

> # Pure functions

</summary>


Earlier, we have procedural programming, and OOPS, not functional programming is very common

Procedural: Go through the code line by line. We explain how to do a task.

OOPS: Break down the problem into objects and classes with concepts on inheritance, polymorphism, etc.

Functional programming:
There are two ways of writing code, imperative and declarative. 
Functional programming follows the latter.

It always focuses on immutability.

___

Imperative v/s Declarative

Imperative: Focuses on how to go about a problem

![](2022-04-20-13-07-49.png)

Declarative: Give me the problem, I will return the solution

![](2022-04-20-13-10-45.png)

___

Pure and Impure functions

Impure functions: Same function can give different return value even if the params passed to it are the same

![](2022-04-20-13-13-59.png)

Value of the function will change if `a` changes in value. So, a fnuction should not depend on an external factor

Pure functions: 

![](2022-04-20-13-15-57.png)

It will always return the same results for the same set of arguments passed to it.
Other than the result of the function, no external state should be changed, therefore `console.log()` changes the external screen and is a side effect.

So, the purest way to write it would be

![](2022-04-20-13-19-13.png)


___

Mutability and Immutability

Functional programming recommends immutable code so that the values that we have assigned cannot be altered

![](2022-04-20-13-25-00.png)

Data was mutated, even when we did not wish to. 

Solution:

![](2022-04-20-13-26-35.png)

Or, use Spread operator

![](2022-04-20-13-27-25.png)

Keep nesting in mind
</details>

---

<details>
<summary>

> # Higher order functions (map, filter, reduce)

</summary>

Higher order functions take another function as a parameter to which we pass some data to get some desired output.

![](2022-04-20-14-00-05.png)

`map` : Iterates over the entire array, takes each element as the parameter in the inner function and returns its updated value in a new array.

![](2022-04-20-14-05-42.png)

`filter` : Returns a new array, after iterating over the elements of the previous array and selecting those elements that fulfil a given condition. Whenever the condition is true, the value is selected, otherwise it is not.

![](2022-04-20-14-09-58.png)

`reduce` : Takes the value calculated so far (accumulated value), and the current element and returns a single accumulated value

Make sure that you initialize the accumulator (as done in line 25)

![](2022-04-20-14-13-26.png)


</details>

---

<details>

<summary>

> # Polyfills of map , filter & reduce

</summary>

Older browsers do not support some ES6 functions, so we need to write imperative code for those functions, which are known as polyfills

`map` 

Declarative code:

![](2022-04-20-15-26-17.png)

Imperative/polyfill code:

![](2022-04-20-15-29-57.png)


`filter`

Declarative code:

![](2022-04-20-15-32-43.png)

Imperative/polyfill code:

![](2022-04-20-15-34-59.png)
![](2022-04-20-15-36-37.png)


`reduce`

Imperative/polyfill code:

![](2022-04-20-15-42-01.png)

Polyfills using `this` and `Array.prototype` can be found [here](https://reeversedev.com/polyfill-for-foreach-map-filter-reduce)

</details>

---

<details>
<summary>

> # Closures in JavaScript

</summary>

## <u> Function scope </u>

![](2022-04-21-10-33-13.png)

If we run the above code anippet, we will get the following error

![](2022-04-21-10-33-47.png)

This is because we cannot access a variable defined inside a function from outside that function, irrespective of its initialization being done using `let`, `var`, or `const`.


## <u> Lexical scope </u>

![](2022-04-21-10-38-56.png)

Output: 
`9`

Reason: The variable `a` can be accessed from inside the function. A nested/child function can access its parent's variables.


## <u> Closures </u>

When a function returns something, its execution is over and it is removed from the stack.

Say we return a function from another function in the following manner

![](2022-04-21-10-45-38.png)

The inner function (addChild) will be stored in `catchAdd`. So now we can call it and the output will be `9` again, even though the child function is being called from outside the parent function.

This shows that the child function still has access to the parent function although the parent function has been removed from the stack. This is known as closures.

A function is always bundled with its lexical scope i.e. a function always has access to its lexical scope, even if the parent function does not exist on the call stack anymore


</details>

---

<details>
<summary>

> # Prototype and Polyfills of Map, Filter, & Reduce

</summary>
JS engines work behind the scenes in a browser to run JS code

Every browser has a different engine.

Chrome: V8 Engine (also used by Node.js)
Mozila Firefox: Spider Monkey
Internet Explorer: Chakra

When you define an array in the browser's console in the following manner, you will get a part of the output that says `[[Prototype]]`

![](2022-04-21-11-13-52.png)

On clicking the drop down menu we will see a list of functions. These are all the functions that we can use on a JS array. But it is not necessary that each browser supports all these functions. This means that if we wrote our code by using functions that are available in one browser and not available in another, it will cause errors in the latter browser.

We can use this Prototype to create our own functions which we can use in any browser. 

![](2022-04-21-11-18-21.png)


![](2022-04-21-11-20-50.png)

Output: The array itself

So, we can implement map filter and reduce in this manner

___

`map`


![](2022-04-21-11-26-25.png)


`filter`

![](2022-04-21-11-28-37.png)

![](2022-04-21-11-29-00.png)

</details>

---

<details>
<summary>

> # Introduction to OOPS in JavaScript

</summary>

Concepts to study:
1. this
    - Behaviour in browser
    - Behavior in Node
    - Strict, non-strict mode in both browser and Node 

2. Contructor functions
    - Create your own objects

3. Call, Apply, Bind
    - With Bind polyfill (using Prototype)

4. Prototypal inheritance
    - Passing the behavior of an object to another object, not similar to classic inheritance concept

</details>

---

<details> 

<summary>

> # this

</summary>

`this` keyword behaves differently in different environments

The environments mentioned here are:
1. Browser
2. Node.js

In them there are 2 modes in which run execute JS code:
1. Non-Strict mode
2. Strict mode

E.g.: the following code will run without problems

![](2022-04-21-12-29-10.png)

But if we use strict mode, it will give an error

![](2022-04-21-12-29-41.png)

Output:

![](2022-04-21-12-30-57.png)

To fix this, initialise the variable with var, let, or const



## <u> Node.js and non-strict mode </u>

4 cases:

1. ### Logging `this`

![](2022-04-21-12-36-24.png)

An empty object is returned

___

2. ### Logging `this` inside a function

![](2022-04-21-12-38-27.png)

Output: Returns the global object

![](2022-04-21-12-37-38.png)

___

3. ### Logging `this` inside a function in an object

![](2022-04-21-12-41-26.png)

Output: Returns the object in which it is defined

![](2022-04-21-12-44-50.png)


___

4. ### Logging `this` inside a nested function in an object

![](2022-04-21-12-45-45.png)

Output: Returns the global object
___

## <u> Node.js and strict mode </u>

4 cases:

1. ### Logging `this`

Output: Returns an empty object `{}`

___


2. ### Logging `this` inside a function

![](2022-04-21-12-49-40.png)

___


3. ### Logging `this` inside a function in an object

Output: Returns the object in which it is defined

___


4. ### Logging `this` inside a nested function in an object

Output: `undefined`

___


## <u> Browser and non-strict mode </u>


4 cases:

1. ### Logging `this`

Output: Returns `Window` object

![](2022-04-21-12-54-41.png)
___


2. ### Logging `this` inside a function

Output: Returns `Window` object

___


3. ### Logging `this` inside a function in an object

Output: Returns the object itself

___


4. ### Logging `this` inside a nested function in an object

Output: Returns `Window` object

___

## <u> Browser and strict mode </u>

4 cases:

1. ### Logging `this`

Output: Returns `Window` object

___


2. ### Logging `this` inside a function

Output: `undefined`

___


3. ### Logging `this` inside a function in an object

Output: The object itself is returned

___


4. ### Logging `this` inside a nested function in an object

Output: `undefined` 

</details>

---

<details>

<summary>

> # Call, Apply, Bind

</summary>

In the previous section, we saw how `this` can be used in different situations, and the output depends on the context.

There are some functions that use `this` to perform some operations, namely call, apply, and bind functions


![](2022-04-21-13-53-05.png)

Output:  ![](2022-04-21-13-53-31.png)

As `this` inside a function inside an object refers to the object itself



## `call`

Now, to do the same for `person2`, we need a better way to use the same function without making the same function inside the object, by re-using what is already created in `person1`, using `call` method

![](2022-04-21-13-59-16.png)

Output: ![](2022-04-21-14-00-55.png)



This is known as "function borrowing"

Let's say that we do not wish to give an object enough importance that every other object is borrowing functions from it. 

So, we can define this function globally

![](2022-04-21-14-03-37.png)

So, not we do not need to borrow the function from `person1` object

![](2022-04-21-14-04-14.png)


If we want to add parameters in this function, we can do so as follows:

![](2022-04-21-14-48-36.png)

___


## `apply`

Syntax (using the previous exmaple) :

![](2022-04-21-14-51-18.png)

Here, the argument is passed in as apart of an array

___

## `bind`


If we try to run the code in the same way as the call function, the output will be blank because the bind function did not actually make the call.

The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

Calling this function would get the desired value from the object it is bound to.

![](2022-04-21-15-06-44.png)

Output:

![](2022-04-21-15-06-57.png)


</details>

---


<details>

<summary>

> # Function currying

</summary>

Currying is helpful when you have to frequently call a function with a fixed argument.

![](2022-04-21-15-22-05.png)

![](2022-04-21-15-26-39.png)

Output for both:

`7`

### Currying using closures

![](2022-04-21-15-31-27.png)

The inner function is returned, and then it is called with a parameter (3). This returned function will have access of variable `x` because of closure property.

Here `x`=2 and `y`=3, So output will be `5`

</details>

---

<details>
<summary>

> # Bind polyfill

</summary>

Like we used Array prototype to implement polyfill of map, filter, reduce, we can use Function prototype to write the polyfill of bind.

Default usage of bind is as follows:

![](2022-04-21-16-05-55.png)


First step is to understand that `bind` returns a function

`this` points towards the function on which bind is applied

![](2022-04-21-16-11-13.png)

Next, we need to attach the object to which we want to bind the function.

The object is passed in the first argument.

![](2022-04-21-16-17-06.png)

Our bind function is able to refer to our object, but this will not handle the case of multiple parameters

![](2022-04-21-16-18-17.png)


To use these parameters, extract them by using `slice` but keep in mind that params will have an array.

![](2022-04-21-16-27-50.png)

Simple use apply instead of call to have the returned function accept the parameters as an array


![](2022-04-21-16-29-32.png)

Even after this, currying will cause problems and we will not be able to dynamically send parameters. 

For that, handle args in the returned function

![](2022-04-21-16-32-33.png)


</details>

--- 

<details>

<summary>

> # Constructor functions

</summary>

Let's say that we are expected to create objects which contain some details related to cars, so one way of doing that is as follows:

![](2022-05-04-11-34-28.png)


But this is a tedious way to do the task. 

A better way is to define a function with the details as the arguments, which returns the new object with the required properties

Constructor Functions can be used for such a job.

![](2022-05-04-11-45-54.png)

When `this` is defined inside a function, it returns the global object, but when constructor functions are defined and used with the `new` keyword, `this` returns an empty object.

Basically, it returns a new object in which we can define our properties.

We can then use `this` keyword to create properties and assign them values using the parameters that we have passed

![](2022-05-04-11-51-39.png)

Output:

![](2022-05-04-11-51-54.png)

You can create any number of such objects as follows:

![](2022-05-04-11-53-11.png)

You can access and mutate the object using dot `.` operator:
![](2022-05-04-11-55-18.png)


Adding a function insode the function can be done as follows:

![](2022-05-04-11-57-40.png)

Call the function:

![](2022-05-04-11-58-09.png)

Output: ![](2022-05-04-11-58-24.png)

</details>


---

<details>

<summary>

> # Prototype and Prototypal Inheritence

</summary>

### What are prototypes?

We have a lot of in-built functions for data structures such as arrays (map, filter, reduce, etc), and properties too (e.g. length) that we can access. Same goes for other data structures such as objects

![](2022-05-05-12-01-18.png)

`arr.__proto__` will return a list of functions that the array can use

Prototype can be understood to be an object that maintains the list of in-built functions of the respective data structure

It is the same as `Array.prototype`

![](2022-05-05-12-06-12.png)


The following returns properties related to an object that we can access:

![](2022-05-05-12-07-57.png)

The returned value in an object. Since the prototype of the prototype of the array represents the properties of an object, it can be implied that the array is actually an object in JS

Further proof of that:

![](2022-05-05-12-10-17.png)


Suppose we define an object as follows let's check out its prototype:

![](2022-05-05-12-12-40.png)

![](2022-05-05-12-13-17.png)

These are the properties that are available to an object

If we try to get its prototype even further, it will return `null`

![](2022-05-05-12-14-22.png)

___

### What is prototypal inheritance?

Imagine an object such as the one below:

![](2022-05-05-12-18-03.png)

Output: `Adam 25`

Create another object as follows:

![](2022-05-05-12-18-57.png)

Now, we will try to manipulate the prototype of `perosn2`

![](2022-05-05-12-20-16.png)

Output: `Steve` (which was the original name of `person2`, so the `name` property was overriden by `person2`)

But if we print the age (which is originally not present) as well:

![](2022-05-05-12-21-19.png)

Output: `Steve 25`

The output will be the same if we try to call ![](2022-05-05-12-22-49.png)

This is prototypal inheritance

</details>

---

<details>
<summary>

> # Creating Objects with Classes and Constructors

</summary>

JavaScript does not have in-built concept off classes. It is simply syntactical sugar.

To create an object using class, first define the class

![](2022-05-05-15-21-56.png)

![](2022-05-05-15-22-22.png)

`person1` will store an object as follows:

![](2022-05-05-15-22-54.png)

In this manner, we can create an object using a class and a constructor

To define a function in a class:

![](2022-05-05-15-27-42.png)

Output: ![](2022-05-05-15-28-02.png)  because `this` inside a function that is inside an object points to the object itself

We can use classical inheritance as well.

![](2022-05-05-15-30-10.png)

Output: `Steve`

We have inherited the `showDetails()` function.

It is not recommended to use inheritance in JS.

</details>

---

<details>

<summary>

> # Sync and Async programming with callbacks ft. event loop

</summary>

### Callbacks

Stopping the main thread for a long process is inefficient as the rest of the processes get halted

So we can tell these processes "I will resolve your process, but later. I will call you back.". Then we continue to solve processes in the thread and deal with this longer process later.

This is the concept of <u>Asyncronous JavaScript</u>

JavaScript is a synchronous, single-threaded language. Since this synchronous behavior can make the code run slowly, the concepts of callbacks, promises, async await were introduced.


Say we have the following function:

![](2022-05-06-11-38-28.png)

We want to move to `log` functionality to another function, as follows. 

![](2022-05-06-11-41-17.png)

We passed a function `logGreeting()` as a callback function to `greet()` as a parameter, and got the same output.

We can pass multiple functions as follows:

![](2022-05-06-11-44-56.png)

Output:

![](2022-05-06-11-45-16.png) 

The callbacks that we just encountered are known as synchronous callbacks, as the code executed line by line without interruptions.

Asynchronous callbacks can be understood as follows:

![](2022-05-06-12-54-44.png)

Output:
```
Hello
bye
*1 second delay*
I am st2
*1 more second delay*
I am st1
```

Initially, one would expect the output to be:

```
Hello
*2 second delay*
I am st1
*1 second delay*
I am st2
bye
```

The reason for the actual output can be understood by visualising the call stack, Node APIs, callback queue, and the <u>event loop</u>:

As soon as JS code is executed, the global execution context (GEC) in created in the call stack, which means that the main thread of processes goes to the call stack

![](2022-05-06-13-07-20.png)

Then line 1 will be executed and put on the call stack

![](2022-05-06-13-09-11.png)

Then `Hello` is logged and the process is removed from the call stack

![](2022-05-06-13-09-48.png)


Then we encounter `st1`.

Note: setTimeout() is not an in-built JS function. It is provided by Node.js

So it goes straight into the Node API

![](2022-05-06-13-12-51.png)

Then, `st2` is encountered and dealth with in the same way

![](2022-05-06-13-13-43.png)

After the two callbacks functions are done executing and their output is ready, the callback queue picks them up in FIFO order, So `st2` will be giving preference as its output was ready in 1 sec while `st1` took 2 secs

![](2022-05-06-13-18-22.png)

Then the event loop checks the call stack to see if it is empty, and in this case it is not as we have `sayBye` yet to be called

![](2022-05-06-13-22-17.png)

After getting called, and its output logged, it is removed from the call stack

![](2022-05-06-13-22-56.png)

Output so far:

![](2022-05-06-13-23-25.png)

Then the main thread is done executing and the call stack is now empty

So the event loop now gives permission to `st2` to the call stack

![](2022-05-06-13-25-45.png)

Then after executing its output, it will remove `st2` and bring `st1` to the call stack and log its output

![](2022-05-06-13-34-25.png)

With that, the execution will be completed

</details>

---

<details>

<summary>

> # Serial and Parallel execution of Code with callbacks ft. Event Loop

</summary>

As discussed in the previous section, the code flow can be sync or async

Similarly, tasks can be serial or parallel.

## Serial tasks:

E.g. We are supposed to upload a video, so the steps to do that will be the following:

1. Create the video
2. Edit the video
3. Upload the video

Each step is dependent on the previous one, and cannot process till the prev step is completed.

## Parallel tasks:

E.g. Downloading videos from a website. The order in which the videos are downloaded does not matter

These tasks are independent of each other.

___

We have the following snippet:

![](2022-05-06-15-25-14.png)

Note: Typo - `fs.readFile`

Output: ![](2022-05-06-15-27-24.png)

The Buffer portion of the output contains the data of the file, which can be printed as it is if we apppend a string to it.

Notice how the content is printed after the `after` line. 
The async nature is responsible for this.


Line 4 will be executed first, the process will be brought on to the call stack, then removed after the logging `before` is complete.

![](2022-05-06-15-35-16.png)

Note that `fs.readFile` is not a JS function, it is provided by Node, so it will go in the Node API section along with the callback function

![](2022-05-06-15-37-23.png)

Then line 18 will be executed, brought on to the call stack, `after` is logged, then process is removed from the call stack

Output so far:

![](2022-05-06-15-39-28.png)

After that, the callback function comes in the callback queue after its output is ready.

The event loop will check if the call stack is empty, and then push the callback function on it for its output to be executed

___

So how do we read files serially and parallely?

## Parallel:

![](2022-05-06-16-04-22.png)

Output:

![](2022-05-06-16-09-10.png)

Notice how the output is not displayed in the order in which it is encountered in the code. 

This is due to parallel reading of files in the Node API section. Whichever file is done executing first, is pushed to the callback queue first, which implies that it is brought to the call stack first, where the output is then printed.
 
If you run the code again, you may receive the file content in a different order

## Serial:

We need to make sure that the callback functions are called in the sequence in which we require them to.

We will have to use nesting for that.

![](2022-05-06-16-18-49.png)

Output:

![](2022-05-06-16-19-14.png)

The output will be the same no matter how many times we run it.

These nesting of callbacks is popularly known as "callback hell".

</details>

---

<details>

<summary>

> # SetTimeout and SetInterval Ft. setInterval Polyfill

</summary>

As discussed before, setTimeout and setInterval are not JS functions. They are provided by the environment in which we run our code, i.e. Node.js or the browser

## setTimeout

It is a function that takes a function as a callback and executes it after a certain specified period of time

Usage:

![](2022-05-06-18-04-37.png)

This will print `Hello` after 5 seconds

![](2022-05-06-18-06-32.png)

Output:
```
Byeeee
*5 second delay*
Hello
```
This is because Line 9 is executed as part of the main thread and setTimeout has been pushed to the Node API

After setTimeout is done executing, it will be brought to the callback queue, and from there it will be brought to the call stack as soon as the latter is empty (the main thread has completed its work) [this is verified by the event loop], after which the output is setTimeout is logged.

## setInterval

Works similar to setTimeout, but unlike setTimeout, which executes the code in it only once, setInterval will continue to repeatedly execute that block of code after the specified interval.

Usage:

![](2022-05-06-18-23-02.png)

Output:

`Hiiii` will repeatedly print after every 2 seconds

This process will happen infinitely, unless stopped.

To stop it, we can use `clearInterval`

Note: Every function such as setInterval has an ID assigned to it, so we need to catch the setInterval function inside a variable and pass the variable to the clearInterval() function as follows:

![](2022-05-07-11-43-32.png)

Output:
```
*2 second delay*
Hiii
*2 second delay*
Hiii
*2 second delay*
Hiii
```
___

## setInterval Polyfill

We need to create our own setInterval and clearInterval

The skeleton will be as follows:

![](2022-05-07-12-13-04.png)

In this function, we will define the functions required to implement the requirements

setInterval logic:

![](2022-05-07-12-16-00.png)

clearInterval logic:

![](2022-05-07-12-17-51.png)

To test the code, call the created functions:

![](2022-05-07-12-20-36.png)

The callback passed should be `greeting`, not `greet`.

</details>

---

<details>

<summary>

> # Promises Polyfill

</summary>

A few things to note:

Promise has 3 states:
1. Pending
2. Fulfilled
3. Rejected

Promise is not a function, it is an object.
After running a function, the Promise is visible after the output is returned.

Based on the output, the Promise returns one of the three above states.

We will be creating a Promise using a constructor function

Default states are as follows:

![](2022-05-07-13-55-04.png)

![](2022-05-07-13-55-48.png)


Now, we need to write `.then()` and `.catch()` functions


![](2022-05-07-15-16-47.png)

else condition signifies that we are yet to handle that callback, so we push it in the respective array, from where it will be sequentially handled.

Next, we will pass the resolve and reject functions in the executor

![](2022-05-07-16-18-48.png)

Create new Promises


![](2022-05-07-16-22-24.png)

`doWork` is actually the executor which is to be resolved

This will then run the `resolve` function and updates the values accordingly

Otherwise, it will be rejected and the respective function will be called

Make a new Promise

![](2022-05-07-16-28-29.png)

Output:

![](2022-05-07-16-28-57.png)

After changing the conditions to run the catch block, we get

![](2022-05-07-16-29-47.png)



</details>

---

<details>

<summary>

> # Micro Task Queue

</summary>

![](2022-05-07-16-46-09.png)

Output:

![](2022-05-07-16-48-59.png)

Note that "I am Set Time Out" is printed after a delay.

Explanation: 

1. GEC is created and put on the call stack
2. Line 1 is executed and process is put on the call stack
3. "Program Starts" is printed, removed from the call stack
4. SetTimeout block brought onto the call stack and is then pushed to the Node APIs for execution
5. Promise block is also pushed to the call stack, then to the Node APIs section, as it is not a JS functionality
6. Line 13 is executed, as the others are Node APIs. It is brought onto the call stack
7. "Program Ends" is printed and removed from the call stack
8. Similar to callback queue, we also have a micro task queue. Its job is to take in Promisified code's output.
9. setTimeout's output will be taken to the callback queue
10. Now that the main thread is done executing, the event loop can look at the queues for any output's that need to be dealt with
11. Microtask queue is given priority over callback queue, hence, the Promisified code is pushed to the call stack first, which is why we see Promise's output first.
12. Output for setTimeout is then printed in the end

</details>

---

<details>
<summary>

> # Promises and associated functions

</summary>

## .all()

![](2022-05-09-11-23-38.png)

Output:

![](2022-05-09-11-24-00.png)

Pass all promises as an array in this function, and get a promise in return.
By using .then(), we can get an array containing the results of the Promises as soon as they are resolved


![](2022-05-09-11-27-58.png)

Output:

![](2022-05-09-11-28-33.png)


In case a Promise is rejected (and a catch statement is added to catch the error)

![](2022-05-09-11-29-51.png)

 
![](2022-05-09-11-30-56.png)

Output:

![](2022-05-09-11-31-09.png)


Promise.all() wants all Promises to be resolved, otherwise it will go in the catch block and will not resolve any Promises even if one Promise is rejected

___

## .race()

[Referring to the original code, where all 3 promises were resolved]

This works in a similar way as .all() as we pass an array of promises here as well.
It returns a single value, which is the value of the first Promise that gets resolved. It does not wait for all Promises to get resolved.

![](2022-05-09-12-50-44.png)

Output:

![](2022-05-09-12-51-14.png)

In case of rejections:

![](2022-05-09-12-54-12.png)

Output:

![](2022-05-09-12-54-32.png)

Another case:

![](2022-05-09-13-20-30.png)

Output:
![](2022-05-09-13-20-45.png)

Reason: Race function returns the value of the first resolved Promise

___

## .allSettled()

After all Promises are settled (), returns the details of each in an object 


![](2022-05-09-13-28-47.png)

Output:

![](2022-05-09-13-29-10.png)

This function returns an object with a key "status" indicating the status of the Promise, and its "value".

In case of rejections,

![](2022-05-09-13-31-23.png)

Output:

![](2022-05-09-13-31-50.png)

___

## .finally()


`finally` block runs irrespective of the promise being resolved or rejected, i.e. whether we go in the `then` or `catch` block, the code inside the `finally` block will always run. This is usually used as a clean-up mechanism.

In the following scenario:

![](2022-05-09-14-10-20.png)

The output will be:

![](2022-05-09-14-10-42.png)

After adding a `finally` block as shown: 

Note: Line 2 : `var a=1+3`

![](2022-05-09-14-12-13.png)

Output:

![](2022-05-09-14-12-41.png)


## resolve()

Function that is used by a Promise to get resolved

It returns the resolved Promise and its value can be acquired using `.then()`

![](2022-05-09-14-18-24.png)

Output:

![](2022-05-09-14-18-50.png)


## reject()

`reject()` works in a similar way as `resolve()`, but instead of resolving the process it rejects it.

It is used with `catch` instead of `then`.

![](2022-05-09-14-24-45.png)

Output:

![](2022-05-09-14-25-14.png)

</details>

---

<details>

<summary>

> # Read Limited Files with Promises (Serial and Parallel)

</summary>

Earlier, using callbacks, we read files serially (using nesting) and in-parallel (reading them normally). 
We used `fs.readFile()` for that.

Using promises, we can achieve the same using `fs.promises.readFile`. This returns a Promise and upon its fulfilment, from where we can retrieve its value.

![](2022-05-09-15-41-02.png)

Output:

![](2022-05-09-15-41-39.png)

___

Use `.then()` to get the value of the file

![](2022-05-09-15-43-08.png)


Output:

![](2022-05-09-15-43-35.png)

To view the actual data, concatenate the data with a string

![](2022-05-09-15-44-47.png)


Output:

![](2022-05-09-16-40-42.png)

Run it again, and the order of output will change

![](2022-05-09-16-41-30.png)

This is how files are read in-parallel using Promises

Note: The concept of event loop and microtask queue applies here as well.

___

To read the files serially, we use chaining:

![](2022-05-09-16-54-20.png)

![](2022-05-09-16-55-22.png)

Output:

![](2022-05-09-16-55-37.png)


</details>

---

<details>

<summary>

> # Read 'n' files using Promises (Serial and Parallel)

</summary>

It is not practical to read a large number of files using chaining, so we loop over the files:

To read files in-parallel:

![](2022-05-09-17-22-21.png)

Output:

![](2022-05-09-17-22-36.png)

Note: All readFile operations will be performed in the Node API section, not the call stack. After the output is ready, it will be pushed to the microtask queue, and the event loop will push it on the call stack when possible.

To do the same task serially:

![](2022-05-09-17-31-18.png)

Output:

![](2022-05-09-17-32-02.png)

Data of all files except `f4.txt` is printed

To fix that, we will catch the data given by its Promise separately

![](2022-05-09-17-33-32.png)

Output:

![](2022-05-09-17-34-03.png)



</details>

---

<details>


<summary>

> # Promises over callbacks

</summary>

Apart from issues like "callback hell", callbacks are not trustworthy overall.

Suppose we have the following function:

![](2022-05-09-18-01-43.png)

It is imported in another file:

![](2022-05-09-18-27-58.png)

Output:

![](2022-05-09-18-28-22.png)

If we change the `updateAccount` code to the following:

![](2022-05-09-18-30-21.png)

Output:

![](2022-05-09-18-31-00.png)

So if a developer calls the callback more than once by mistake, the customer will be charged  multiple times for the same product.

We will use Promises to rectify this. We modify the previous code accordingly.

![](2022-05-09-18-37-11.png)

The function is called as follows:

![](2022-05-09-18-38-22.png)



</details>

---

<details>

<summary>

> # null Vs undefined Vs not defined

</summary>

## undefined

We have come across a similar code snippet before, while studying var, let, const, and hoisting:

![](2022-05-10-11-03-47.png)

Output: `undefined`

Reason: variable `a` is assigned memory, but its value is not initialized yet.

## not defined

But if we try to print the variable without assigning memory to it, it will be considered `not defined`

![](2022-05-10-11-08-21.png)

So, `undefined` means that we have the variable in our memory, but we do not have its value
`not defined` means that we do not have the variable in our memory

## null

In the following snippet:

![](2022-05-10-11-12-59.png)

If we try to run it, the output will be `null`, but if we remove the code in line 6, it will not give `undefined` as the output.

So, we had to assign the `null` value <b>explicitly</b>, unlike undefined.

___

Similarly, the following snippet will also return `undefined`:
![](2022-05-10-11-18-20.png)

But we know that the global object does exist. What if we tried to access a variable from an object that does not exist?

![](2022-05-10-11-21-14.png)

Output:

![](2022-05-10-11-21-33.png)

But if we make the object, and from it we try to access a non-existent variable:

![](2022-05-10-11-22-29.png)

Output: `undefined`

---

`undefined`: Value given by JS Engine when the variable is in the memory but they do not have an assigned value. This can also be explicitly defined.

`null`: Value given explicitly by us to some variables that exist, but we don't have their value.

`not defined`: Variable does not exist in memory at all.

___

More use cases:

In an object, if we have kept a key, we have to assign some value to it, otherwise it will throw an error

![](2022-05-10-11-31-36.png)

So, if one does not have a middle name, we can set it as `null` instead.

![](2022-05-10-11-32-57.png)

Output: `null`

If we try to access a key from the object that does not exist:

![](2022-05-10-11-33-59.png)

Output: `undefined`


</details>

---

<details>


<summary>

> # Comparision operators and Truth-y False-y Values

</summary>

Every variable, object, array, etc. has an innate boolean (true or false) assigned to it in JS.

## Comparison operators
(== and ===)

![](2022-05-10-15-45-54.png)

![](2022-05-10-15-46-41.png)


Notice that in the first example, the values look the same, and in the second one, the LHS is a number and RHS is a string, but the output is still `true`.

Reason: The `==` operator simply compares the two values, not their type.

This is also known as loose comparison.

So, if we use `===` to perform the same comparison

![](2022-05-10-15-52-11.png)

Output:
![](2022-05-10-15-52-50.png)

Reason: The type of the two elements (Number and String) is also checked, along with the values.


This is also known as strong comparison.

## Truthy and Falsy values

Check out the following block of code:

![](2022-05-10-15-56-09.png)

Output:
`Yes Equal`

Reason: A variable, when set with a non-zero numeric or a non-empty string value is assigned a `true` value.


All values are truthy unless they are defined as falsy. That is, all values are truthy except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.

So empty objects, arrays, functions, non-falsy(defined above) variables will return true.

![](2022-05-10-16-57-05.png)

We are creating an object in the above code snippet, so it is truthy.

</details>

---

<details>

<summary>

Shallow Copy and Deep Copy

</summary>

E.g. If we assign an array as another array, and then if we change the value of the copied data, the original data changes as well.

![](20220512113502.png)  

Output:
Index 1 changes for both arrays

![](20220512113601.png)  

This is because both the arrays are pointing to the same reference.


This can be an issue, which we can solve using spread (`...`) operator

## Shallow Copy

![](20220512114123.png)  

On printing the values, we will get the following output:

![](20220512114229.png)  

But this approach will not work for nested objects. Here, it will modify the original object as well.

![](20220512114441.png)  

Output:

![](20220512114603.png)  

The nested object gets changed for both the original and copied data, whereas the non-nested portion gets changes only for the copied data, as before.

So, spread operator creates a shallow copy.

___

Using `Array.from()` method will give the same output

![](20220512115018.png)  

Output:

![](20220512131649.png)  

___

Using .slice() method will give the same output as well

![](20220512131928.png)  

Objects behave in the same way:

1. Direct assignment attaches the same reference to the copied data.

![](20220512132437.png)  

2. Spread operator

![](20220512132554.png)  

Output:

![](20220512132611.png)  

You may use `Object.assign` as well.

![](20220512133227.png)  

Output:

![](20220512133316.png)  


## Deep copy

One way of achieving deep copy is using `JSON.parse(JSON.stringify(varName))`

This will create a different reference for the copied data.

Note: This is computationally expensive.

![](20220512132229.png)  

Output:

![](20220512132244.png)  

___

For objects:

![](20220512132951.png)  

Output:

![](20220512133009.png)  


## Summary:

Direct assignment of data to another variable attaches the same reference to the copied data as the original. Therefore, all changes to the copied data are reflected.

Shallow copy can be created using:

1. Spread operator
2. Array.from()
3. arr.slice(0)
4. Object.assign


Deep copy can be created using:
1. JSON.parse(JSON.stringify(varName))

<details>

---

<details>

<summary>

> # Flatten an object

</summary>

Flattening an object means that there should be no nesting in it. All items should be at the same level.

So an object like the following:

![](20220512182539.png)  

Becomes:

![](20220512182605.png)  

Code:
- Recursive approach that check whether every key is part of a parent object or not (i.e. it is at base level)
- If it is part of an object, "propertyName" becomes "parent_currKey", otherwise "currKey"
- If currKey is an object, go into it recursively and repeat the process, otherwise finalize the value of the new key "propertyName" to the value of "currKey".
- Return the resultant object

![](20220512182719.png)  

</details>

---

<details>

<summary>

> # Array.isArray()

</summary>

In JS, we can check the type of data in the following manner using `typeof`:

![](20220512184724.png)  

Doing the same for the other variables, we get:

obj: `object`

num: `number`

arr: `object`

This shows that reference data types are treated as <u>objects</u> in JS.

To check whether data is an array or not, we can do the following:

![](20220512185159.png)  

Output: `true`


</details>

---

<details>

<summary>

> # Questions on Promises 

</summary>

![](20220512211729.png)  

Output:

![](20220512211755.png)  

Reason:
`3` is printed because it is the first to go on the main thread
`4`
`5` is printed because of micro-task queue, which is used for Promises and is given preference over callback queue
`1`
`2`
`6` prints at the end because they are received by the main thread via the callback queue after all the other tasks are done.

___

Task: Convert it into a code that prints the number in order

Ans:

![](20220512212307.png)  

___

![](20220512212450.png)  

One would expect the code to go into the catch block and print the error, but the actual output is:

![](20220512212542.png)  

Despite the promise being rejected, it goes into the `.then` block.

Notice the parameters in then. They are `null` and a function

`.then` takes 2 callback functions as parameters, one for success, the other for failure.
The success callback was called when the Promise was resolved, and failure callback was called on Promise rejection (similar to how the catch block is used).

So if the code is changed to something like this:

![](20220512212906.png)  

This turns the function which we were using as a failure callback to a success callback.

Output:

![](20220512213009.png)  

___

Task: Create a setTimeout with Promises in the form of a function that takes time in miliseconds as an argument

![](20220512213135.png)  

Ans:

![](20220512213415.png)  

</details>

---

<details>

<summary>

Async Await

</summary>

![](20220517143111.png)  

Output:

`3`

Async functions return Promises. `inc(1)` returns 2, which is resolved and chained with `increment(2)`, which in turn returns 3, which is logged.

___

![](20220517143523.png)  

Output:

![](20220518003252.png)  

So the flow of code when to the .then() block and the failure callback was executed.

But in the following case:
![](20220518003508.png)  

Output:

![](20220518003532.png)  

___

![](20220518011737.png)  

Output:

![](20220518011923.png)  

___


![](20220518012221.png)  

Printing partial output for:

![](20220518012849.png)  

Output for this step:

![](20220518012351.png)  

Total time taken to execute the complete code (in the original question) will be:

1(for `a`) + 2(for `y`) + 1(1 extra second for `z`) = 4 seconds

`p` and `q` will not be resolved. A Promise will be returned.

And so far, values that we have are 1, 2, 3 from a, y, z, respectively.

Then `await p` and `await q` will add their own time (1 + 1 extra seconds)

In the Output, we had 6 already, and now 4 and 5 will be added to it.

Output:

![](20220518014021.png)  

Notice how time taken is only approx. 6 seconds

That is because p and q were resolved in overlapping fashion.
___





</details>

---

<details>

<summary>

Closures

</summary>

![](20220519123918.png)  

Output:
```
6
6
6
6
6
6
```

There is a single instance of var i which is created globally, and by the time setTimeout is executed, the value of i is already 6, and that is the value used in the output.

How do we print `0 1 2 3 4 5` as the output then? Change `var` to `let`
`let` is block scoped

How do we get this output without using `let` or `const`?
![](20220519124341.png)  

We used an IIFE, that sets `j` on every iteration with the current value of `i`.

___

Another case: variable is initialised outside the loop using let
![](20220519124829.png)  

Output:
![](20220519124906.png)  

Reason: Let was declared globally, so its value was updated to 6 before setTimeout was executed.

</details>

---

<details>

<summary>

Create private variables with closures

</summary>

Say we wish to keep a variable `name` private, we can do so with the help of getter and setter functions.

![](20220520011157.png)  

So we set the name using the function that we created, and we access the name via our function, instead of modifying or accessing the variable directly.

![](20220520011258.png)  

Output:

`Alex`

This will work for any name. Now, what if we tried to access the variable itself?

![](20220520011434.png)  

Output:

`undefined`

Reason: The variable is scoped and so it cannot be accessed outside its block without using functions as an intermediary.

Externally, we are only able to access those values that we have returned, i.e. the functions.

</details>

---

<details>

<summary>

Closures and Scope Interview questions

</summary>

![](20220520223134.png)  

Output: `0`

Reason: `immediateB` is receiving the value of `a` which is 0, from its parent, i.e. `immediateA`

___

![](20220520223604.png)  

Output:
```
1
0
```

Reason: Scope of line 5 is restricted to the `if` block whereas scope for line 7 is the function that is declared globally.

___

![](20220520223918.png)  

Output:
![](20220520224100.png)  

Reason: While we are trying to increment the value of `count` thrice, note that it is happening inside the function, so the `count` variable in the `increment` function is the different from the variable defined in line 2 due to its block scope. 

We cannot use the value of the `count` variable used in line 4 outside its function.

___

![](20220520224528.png)  

Output:

```
3
3
3
```
Reason: This is due to closures and async nature of JS.

The for-loop continues to execute while the setTimeout takes its time in the Node APIs section so by the time the setTimeout finishes its timer, the value of `i` is set to 3, which is the value that will be caught everytime.

How to print the value of `i` in serial order then?

Change the `var` to `let`.

![](20220520224848.png)  

Reason: `let` creates a new reference for `i` for every iteration as it is block-scoped, as it is going into a new block everytime.

To have the same behavior with `var`, do the following:

![](20220520225137.png)

</details>