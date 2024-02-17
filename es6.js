/**
 * ES6 문법 문제
 * 
 */

//1. 다음의 코드를 es6문법을 이용하여 재작성 하시오
let name = "noona's fruit store"
let fruits = ['bananan', 'apple', 'mango'];
let address = 'Seoul';

let store = { name : name, fruits:fruits, adress:adress}
console.log(store);


//2. es6문법으 애용하여 다음과 같이 출력하시오
제 가게 이름은 moona's fruit store입니다. 위치는 Seoul에 있습니다.

//3. 다음 코드를 Destructoring을 이용하여 해결하시오.
function calculate(obj){
    return a+b+calculate;
}
calculate(ga:1,b:2,c:3);
console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.location} 에 있습니다`)



let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
   let {name,address:{city}} = obj
    return name=="noona store" && city=="Seoul"
}

console.log(findStore({name,fruits,address}))

//5.오브젝트 안에 오브젝트는 address:{city} 다음과 같이 선택이 가능하다

function getNumber(){
    let array = [1,2,3,4,5,6]
    let [first,,third,forth]=array
    
    return {first,third,forth}
}

console.log(getNumber())
//6.참고 어레이에 건너뛰고싶은 부분이 있다면 , 를 이용해 그자리를 비울 수 있다.


function getCalendar(first, ...rest) {
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}

console.log(getCalendar("January","Febuary","March")); // 여기를 바꾸시오
function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min(...a,...b)
}

console.log(getMinimum())
function sumNumber() {
 
  const sum = (a, b)=> a+b
  return sum(40, 10);
}
function sumNumber() {

 
 let addNumber=(a)=>(b)=> (c)=> a + b + c;
 return addNumber(1)(2)(3);
   
}

console.log(sumNumber())