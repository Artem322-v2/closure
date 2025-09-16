// function someFunction () {
//     let variable = 0;

//     return function () {
//         variable ++;
//         return variable;
//     }
// }

// const valueCounter = someFunction();

// console.log(valueCounter());





//Задание 3


function calculations(n) {
    let counterFibanacci = 0;
    let number = 0;
    let currentResult = 1;

    return function (n) {

         if (n <= number) {
         counterFibanacci = 0;
         number = 0;
         currentResult = 1; 
    }


        while (number < n) {
            counterFibanacci = counterFibanacci + currentResult;
            currentResult = counterFibanacci - currentResult;
            number++;
        }

        return counterFibanacci;
    }

}

const createFibonacciCalculator = calculations();
console.log(createFibonacciCalculator(3));
console.log(createFibonacciCalculator(5));
console.log(createFibonacciCalculator(10));
console.log(createFibonacciCalculator(50));
console.log(createFibonacciCalculator(2));
