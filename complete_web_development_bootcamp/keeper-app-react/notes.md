# React

By convention, we always create a div html element with an id of root and this is going to be the root of the application, `<div id="root"></div>`

### Babel

Babel is a javascript compiler that compiles next-gen javascript (e.g. ES6) down to brower-compatible javascript.

### `ReactDOM.render()`

`ReactDOM.render(<what you what to be displayed>, <where you want it to be displayed>)` can only take one html element at a time.

## JSX

Allows us to insert HMTL inside JS and then insert more JS inside that HTML.

To render JS variables inside HTML, wrap the variable in curly braces.

```
const name = "Chloe"

<h1>{name}</h1>
```

Inside curly braces, you can write any JS expression, but we CANNOT write JS statements.

```
INVALID CODE:
<p>
    if(name === "Chloe") {
        return 7;
    } else if (name === "Bart") {
        return 12;
    }
</p>
```

- JS expressions: evaluates to a value -> CAN be used in JSX

- JS statements: computer needs to evaluate and work out something e.g. if, else, while, for -> CANNOT be used in JSX

A ternary operator is an EXPRESSION but an if statement is not. This is because each individual section `CONDITION ? DO IF TRUE : DO IF FALSE` is an expression.

### Template Literals

Put within backticks.
Spaces etc. are evaluated as normal strings within the backticks.

```
const firstName = "Chloe"
const lastName = "Wong"

<h1> My name is {`${firstName} ${lastName}`} </h1>

OUTPUT >> My name is Chloe Wong
```

## Styling in JSX

You can use CSS the normal way with HTML (e.g. using the `class` attribute) but will get errors. This is because in JSX, even though it looks like HTML, it is still rendered down to JS. You must use the `className` attribute.

Using HTML attributes in JSX, you need to camel case the attributes e.g. from `contenteditable` to `contentEditable`.

Cannot just add the style property to JSX the way you do in normal HTML. i.e. `style="color: red"`. Styling needs to be added in as a JS object, and then because the object is JS, you need curly braces to interpret the JS object correctly inside an HTML element i.e. `style={{color : "red"}}`

### Inline Styling

Inline styling allows you to change CSS properties on the go.

## Components

Pascal case for naming components i.e. `OneListReturn`. This allows React to distinguish between custom components and inbuilt HTML elements.

By convention, if we have a component with no children, use self closing tags.

```
<Heading />
```

Use the [AirBnb Styling Guide for React/JSX](https://github.com/airbnb/javascript/tree/master/react) for good style conventions.

Most React projects will not have any HTML elements in `index.js` file. Instead they will make a custom component called `App` and this is what will be rendered in the React DOM. `App` will contain the start of the component tree.

## ES6 Import/Export

For DEFAULT exports and imports:

```
function subtract() {
    ...
}

export default subtract
---

import subtract from "./calculator"

// the default export can be imported in with any name
```

For non-default exports and imports:

```
function add() {
...
}

function multiply() {
...
}

export {add, multiply}
___

import { multiply, add } from "./calculator

//the order of imports doesn't have to be the same as exports so long as the name is exactly the same.
```

For both default and non-default exports/imports:

```
export default subtract
export {add, multiply}

---

import subtract, { add, multiply } from "./calculator"
```

## Components and props

Styling (e.g. `className`) always has to go inside the pre-determined HTML elements rather than in the props of a component. If you put it into the props, it will think it is a custom property.

## Functional programming

Instead of passing values around, you pass functions (lots of levels of functions).

## Mapping

Must pass a function to a map.

### Unique key error

`Warning: Each child in a list should have a unique "key" prop`

When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children.

Ex: `<li key="uniqueId1" >Item1</li>`

React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering an item in the array changes it. Then React will get confused and re-render the incorrect element.

Keys do not have to be unique globally. They just need to be unique across sibling elements.

Keys can be strings or numbers.

`key` is a special prop. It cannot be accessed as a prop. If it is needed, you should pass it as a different prop with the same value.

## Map/Filter/Reduce

- Map -Create a new array by doing something with each item in an array.

```
 function double(x) {
   return x * 2;
 }

 const newNumbers = numbers.map(double);
```

- Filter - Create a new array by keeping the items that return true.

```
 const newNumbers = numbers.filter(function(num) {
   return num < 10;
 });
```

- Reduce - Accumulate a value by doing something to each item in an array.

```
 var newNumber = numbers.reduce(function (accumulator, currentNumber) {
     return accumulator + currentNumber;
 })
```

- Find - find the first item that matches from an array.

```
 const newNumber = numbers.find(function (num) {
   return num > 10;
 })
```

- FindIndex - find the index of the first item that matches.

```
 const newNumber = numbers.findIndex(function (num) {
   return num > 10;
 })
```

### Differences Between the map and forEach Methods

The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn’t return anything.

You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used. Instead, it's great for when you need to do some action with each element of the array.

On the other hand, the map method is used for creating a new array, and thus, it’s chainable. You can call a number of map operations one after the other.

The forEach method doesn’t return anything, so you can’t chain it with any other methods—it’s not chainable.

## && in React

`CONDITION && EXPRESSION`

If the condition is true, then the expression is evaluated.
If the condition is false, then the expression is NOT evaluated.

Instead of `CONDITION ? EXPRESSION : null` you can use `CONDITION && EXPRESSION`.

## State

UI = function(state)

### Declarative vs Imperative

A declarative style, like what react has, allows you to control flow and state in your application by saying "It should look like this". An imperative style turns that around and allows you to control your application by saying "This is what you should do".

Good link >> https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js

### Hooks

Hooks must be used inside functional components.

## Destructuring

Destructuring arrays is what happens with `useState()`.

Useful link >>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

### Destructing nested objects
Consider this object, which contains information about a user.

```const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
```
The example below shows the property `fullname.firstName` being unpacked into a variable called name.
```
function whois({displayName, fullName: {firstName: name}}) {
  ...
}
```

### Destructuring nested arrays

The same can be done for nested arrays. Recall, in destructuring arrays you can call the property anything you like but it has to be in the right order. Below, the variable lName will be available to use (equal to lastName). 
```
function whois({displayName, fullName: [, lName]})
```

## Controlled Components
https://reactjs.org/docs/forms.html#controlled-components
We need to add the value that comes from our STATE as the value attribute of our input, to keep a single source of truth.

### event.preventDefault()
Prevents the default next behaviour of the event, which for a form `onSubmit` is refreshing the page. 

### Synthetic Events
https://reactjs.org/docs/events.html

Tldr , don't use `event.target` inside functions that are setting the state. 
## Unrelated but useful to know

`<script>` tags allow you to put javascript in html.

Parentheses on the end of functions denotes calling the function.

### CSS

```
#foo {} // will style the single element declared with an attribute id="foo"
.foo {} // will style all elements with an attribute class="foo"
header {} // will style the html element called header
```

### Operating System stuff

- Unix - is an operating system. Unix was and is (mostly) proprietary.

- Linux (aka Unix clone) - is a Unix-like computer operating system assembled under the model of free and open source software development and distribution. The defining component of Linux is the Linux kernel, an operating system kernel first released 5 October 1991 by Linus Torvalds.

- Ubuntu (flavour of Linux) - is a computer operating system based on the Debian Linux distribution and distributed as free and open source software, using its own desktop environment. As of 2012, Ubuntu is the most popular Linux distribution on desktop/laptop personal computers, and most Ubuntu coverage focuses on its use in that market.

### CircleCI executor

An executor type defines the underlying technology or environment in which to run a job. CircleCI enables you to run jobs in one of four environments:

Within Docker images (docker)
Within a Linux virtual machine (VM) image (machine)
Within a macOS VM image (macos)
Within a windows VM image (windows)
