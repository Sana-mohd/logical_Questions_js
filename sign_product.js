var input=require("readline-sync")
var num=input.question("enter how many product of numbers you want: ")
i=1
product=1
while (i<=num){
    var number=input.question("enter your  number: ")
    product*=number
    i++
} console.log(product>0?"+":"-")
