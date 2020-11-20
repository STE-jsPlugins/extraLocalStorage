# extraLocalStorage

A smart and simple array of functions to simplify your localStorage experience.

## How to install

Copy this:
```
<script src="https://ste-jsplugins.github.io/extraLocalStorage/plugin.js"></script>
```
and paste it in your `<head>` section.

## Functions

`store()` stores data that is retrievable using the key.
```
```
`getDat()` gets data by using the key from the function above.
`getAllLocals()` retrieves and returns all localStorage data into arrays.
`displayAllLocals()` displays localStorage in an organized array.

## Syntax

**store()** 
```
store(key,data);
```
**getDat()** 
```
getDat(key);
```
**getAllLocals()** 
```
var locals = getAllLocals();
/*returns variable containing two arrays

locals = {
name: [localStorage key(s)],
dat: [localStorage data]
}

*/
```
**displayAllLocals()** `displayAllLocals(<<documentElement>>,<<true|false>>);`
