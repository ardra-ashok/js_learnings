let a = 50;
let b = 25;
let arr = ['+', '-', '/', '%'];

function operations(opr,a,b){
 switch (opr) {
  case '+':
   console.log(`Adding Two numbers:${a+b}`)
     break
   case '-':
     console.log(`Subtracting two numbers:${a-b}`)
     break
   case '/':
     console.log(`Dividing ${a}/${b}: ${a/b}`)
     break
  case '%':
     console.log(`finding modulus of ${a} % ${b}: ${a % b}`)
     break
 }
}

for (let op of arr) {
 console.log("\n");
 
 operations(op, a, b)
}

  
