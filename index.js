// spread operator :- packed element convert indiviual elements

let array = [2,3]
let array2 =[1,...array,4,5]
console.log(array2);


// Rest Operators : - individual element into convert packed element

let [b,a, ...args] =[1,2,3,5,4]
console.log(args);

//template literal :- symblo(``) backticks 

let user="mushu"
let time = 5

let content = `hi,Good morning ${user} , it is ${time}pm  evening`

console.log(content);


//ternary operator

let speed = 100

let result = speed>100?"overspeed":"Avg"
console.log(result);

let input=document.createElement('input')
input.type='text'

let body= document.getElementById("body")
body.appendChild(input)



input.addEventListener("keydown",function(event){
     let outCome =  event.key==="Enter"? input.value>100 ?"overSpeed":"slow" : ""
     console.log(outCome);
})

// function

//default function
function defaulFun(a=2,b=4){
    console.log(a+b);
}
defaulFun()

//expreesion function

let expressionFun = function(){
    console.log("it is an expression function");
}

expressionFun()


//Arrow Function

let arrowfun = (a=3,b=5)=>{
    let c = a+b
    console.log(c);
    
}
arrowfun()


// Factory Function

// function functionName(color,brand){
//     return {
//         color: color,
//         brand: brand,
//         start: function() {
//             console.log("starting");
//         }
//     }
// }

// let car1= functionName("red","Audi")
// let car2 = functionName("blue","benze")
// let car3 = functionName("white","tata")

// console.log(car1);
// console.log(car2);
// console.log(car3);


// Constructor Function

// function name should be PascalCase     starting C 

function FunctionConstructor(color,flower){
    this.color= color
    this.flower= flower
    this.start=function(){
        console.log("starting");
    }
}

let fun1=new FunctionConstructor("red","rose")
let fun2 = new FunctionConstructor("pink","lotus")
let fun3 = new FunctionConstructor("white","mallepuvuu")

console.log(fun1);
console.log(fun2);
console.log(fun3);


// deafault properties for function 

// 1. name 2. length 3. constructor 4. prototype , etc

// default method for function 

//1.apply() 2.bind() 3.call() 4.toSring(),etc

// Bulit-Constructor Function

// 1. function Date()
// 2. function Error()
// 3. function Promise()
// 4. function Object()
// 5. function String()
// 6. function Number() etc.

// Creating Date Objects

// 1. new Date()

console.log(new Date());

// 2. new Date(milliseconds)

console.log(new Date(100000000));


// 3. new Date(datestring)

console.log(new Date("2024-06-28"));

// 4. new Date(year,month , day,hours,minutes,seconds,milliseconds)
console.log(new Date(2021,1,20,4,12,11))




