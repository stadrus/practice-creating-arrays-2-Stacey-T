let firstArr = Array(7).fill("Hello");
console.log(firstArr);

let secondArr = firstArr.fill("Hi", 1, 4);
console.log(secondArr);

let numbersArr = Array(5)
for (let i = 0; i <numbersArr.length; i++){
    numbersArr[i] = i *10
}
console.log(numbersArr);