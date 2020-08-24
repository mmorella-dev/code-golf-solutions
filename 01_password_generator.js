// 61 bytes — Generates a random string of 9 ASCII characters
// only outputs when copy-pasted into interactive the Node repl.

for(i=s='';9>i++;)s+=String.fromCharCode(95*Math.random()+32)