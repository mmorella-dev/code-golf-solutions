# code-golf-solutions

Solutions to JavaScript code golf challenges, from The Programmer's Hangout Discord.

## Password Generator

```js
// 61 bytes
for(i=s='';9>i++;)s+=String.fromCharCode(95*Math.random()+32)
```

## Running

These solutions were written to be executed on Repl.it. They sometimes exploit the behavior of Node's REPL to output without calling `console.log`.  As such, they may not produce output unless they are run in an interactive JavaScript REPL.

Use the `.load` command to reliably execute the scripts.

```
$ node
Welcome to Node.js
> .load 01_name_of_script.js
```
