let a=parseInt(prompt("Enter the number"))

var mul=1

for(let i=1; i<=a; i++){
	mul=mul*i
}

document.write(`Factorial of  ${a}  is = ${mul}`)