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

## Unrelated but useful to know

`<script>` tags allow you to put javascript in html.

Parentheses on the end of functions denotes calling the function.
