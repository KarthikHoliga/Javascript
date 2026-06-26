let a = 10
let b = 20
if (a>b)
    console.log(a);
else
    console.log(b);

//Swap without Third variable
let c=10;
let d=20;
[c=d]=[d=c];
console.log(a);
console.log(b);


//-Increment Operator
let e=10;
e++
console.log(a);



//Decrement Operator
let f=12;
d++
console.log(d)


//Largest of Two Numbers
let h = 50;
let i = 60;
if (a>b)
{
    console.log(h);
}
else
{
    console.log(i);
}


//Check if number even or odd
let num = 30;
if(num % 2 === 0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

//
function greet() {
 console.log("Welcome to Javascript");
}
greet();

//
function checkAge(age) {
if (age < 0) 
    return "Invalid age";
return age >= 18 ? "Adult" : "Minor";
}