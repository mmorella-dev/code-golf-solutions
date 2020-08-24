// 216 bytes + name of input file
// determines whether the input is a valid solution to a sudoku puzzle
// i.e. whether each row, column, and 3x3 block contains the numbers 1-9 with no duplicates.

A=require('fs').readFileSync('03_sudoku_input.csv','utf8').split`
`.map(l=>l.split`,`);for(R=i=9;i--;)R=R&&[A[i],A.map(r=>r[i]),A.slice((y=(i/3|0)*3),y+3).flatMap(n=>n.slice((x=(i%3)*3),x+3))].every(a=>a.reduce((r,c)=>r|1<<c-1,0)==511)
