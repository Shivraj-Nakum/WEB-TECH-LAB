//for do-while function

var x = 8;
var y = 6;
if 
(x > y)
{
  console.log("Hello World");
}



const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}

console.log(text);

let abc = "";
let i = 0;
do {
  abc += i + " ";
  i++;
}
while (i < 5);
console.log(abc);

function myFunction(p1, p2) {
    return p1 * p2;
}
  
let result = myFunction(4, 3);
console.log(result);


let text1 = "hello";
let text2 = "world";
let ans = text1.concat(text2);

console.log(ans);