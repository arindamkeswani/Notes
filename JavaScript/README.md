## JavaScript Notes

> What is JavaScript?
- Language that provides logic inside the JavaScript Runtime environment, which is present in browsers, like V8 Engine in Chrome, Firefox's SpiderMonkey, etc.
- Features/APIs are given by the Environment itself. E.g.
    - the line `console.log()` is not a part of JavaScript. It is a feature given the the env such as a browser or Node.js
    -  `setTimeout` is also considered to be a part of JS but is given by the browser. 
    - Various other tasks such as queueing, threading, etc. are taken care of by the environment. They are not a part of JS
- It is syntactically similar to Java, OOPS concepts were taken from Self, functional programming (where functions can behave as variables)
- ECMA Intl. laid out the standards based on which JS is supposed to behave, so JS is an implementation of the ECMAScript standard
    - ECMAScript is written by representative of the browsers who mutually decide the features of the script

- Node.js is an environment that supports JS
- Changing the UI is a very costly operation, so we wish to optimise it as much as possible, which is where frameworks/libraries such as Angular, Vue, React come in. They implement the optimisation of changing of UI components

> Types of functions in JavaScript
- Functions are very powerful in JavaScript and can be used in many ways, so much so that they are considered first-class citizens.
![](2022-04-18-17-57-41.png)

- If parameter is defined in the function definition but not passed while invokation, it will be considered         `undefined`



