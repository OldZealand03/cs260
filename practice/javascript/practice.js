// Chapter 2

for (i = 1; i <= 100; ++i) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log("Fizz")
        }
    }
    else if (i % 5 == 0) {
        if (i % 3 == 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log("Buzz")
        }
    }
    else {
        console.log(i)
    }
}

// Chapter 3

function min(a, b) {
    if (a > b) {
        return b;
    }
    else if (b > a) {
        return a;
    }
    else if (a == b) {
        console.log("They are the same number.")
        return a;
    }
    else {
        console.log("You must not have inputed numbers")
    }
}

function isEven(number) {
    if (number == 0) {
        return true;
    }
    else if (number == 1) {
        return false;
    }
    else if (number < 0) {
        return isEven(number * -1);
    }
    else {
        return isEven(number - 2);
    }
}

// Chapter 4

function range(start, end, step = 1) {
    array = [];
    if (step < 0) {
        for (i = start; i > end - 1; i += step) {
            array.push(i);
        }
    }
    else {
        for (i = start; i < end + 1; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    sum = 0;
    for (const i of array) {
        sum += i;
    }
    return sum;
}

// Lists and Arrays

function arrayToList(array) {
    var list = new Object();

    if (array.length == 1) {
        list.value = array[array.length - 1];
        list.rest = null;
        return list;
    } else {
        list.value = array[0];
        array.splice(0, 1);

        list.rest = arrayToList(array);
        return list;
    }
}
function listToArray(list) {
    array = []
    while (list.rest != null) {
        array.push(list.value)
        list = list.rest
    }
    return array;

}
function prepend(val, res) {
    list = {};
    list.value = val;
    list.rest = res;
    return list;
}
function nth(list, n) {
    var num;
    count = 0;
    while (count != n + 1) {
        num = list.value;
        list = list.rest;
        count++;
    }
    return num;
}

// Chapter 5

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((finalArray, index) => { finalArray.concat(index); }, 0));


function every(array, test) {
    let passed = false;
    array.forEach((index) => {
        passed = passed || !test(index);
    });
    return !passed;
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
  // → true
