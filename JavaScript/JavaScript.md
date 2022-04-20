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