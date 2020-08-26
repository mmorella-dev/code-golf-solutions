# code-golf-solutions

Solutions to JavaScript code golf challenges, from The Programmer's Hangout Discord.

## Password Generator

```js
// 61 bytes
for(i=s='';9>i++;)s+=String.fromCharCode(95*Math.random()+32)
```

## Caesar Cipher

```js
// 111 bytes + input length
// Prints all 25 ROT N shifts of the input string, S

S="Tqxxa iadxp!";for(i=26;--i;)console.log(S=S.replace(/[a-z]/gi,c=>String.fromCharCode(c.charCodeAt()-1+26*/a/i.test(c))))
```

## Running

These solutions were written to be executed on Repl.it. They sometimes exploit the behavior of Node's REPL to output without calling `console.log`.  As such, they may not produce output unless they are run in an interactive JavaScript REPL.

Use the `.load` command to reliably execute the scripts.

```
$ node
Welcome to Node.js
> .load 01_name_of_script.js
```
