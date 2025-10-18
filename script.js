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


function calculations() {

    return function (n) {

        if (n <= 1) {
            return n;
        }

        let number = 2;
        let fibanacci = [0, 1];


        while (number <= n) {
            fibanacci[number] = fibanacci[number - 1] + fibanacci[number - 2];
            number++;
        }

        return fibanacci[n];
    }

}

const createFibonacciCalculator = calculations();
console.log(createFibonacciCalculator(3));
console.log(createFibonacciCalculator(1));
console.log(createFibonacciCalculator(10));
console.log(createFibonacciCalculator(50));
console.log(createFibonacciCalculator(5));