// this function return elements of an array.

const numbers = [20, 34, 54, 54, 23];

numbers.forEach(element => console.log(element))

numbers.forEach((element, index) => {
    console.log(element + " : " +index);
});

