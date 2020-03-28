// filter return an array from another array or array object
const numbers = [23, 43, 54, 65, 76, 12, 65, 43]
const biggerNum = numbers.filter(num => num > 40)
console.log(biggerNum);

// On the other hand, find return an element from an array or array object
const findAction = numbers.find(num => num > 40)
console.log(findAction);

// Another example of filter & map.
const data = [
    {
        name: "Nazmul Hoque",
        adds: "Chittagong",
        age: 24,
        salary: 15000
    },
    {
        name: "Anayet Ullah",
        adds: "Chittagong",
        age: 25,
        salary: 10000
    },
    {
        name: "Murshed Fahim",
        adds: "Dhaka",
        age: 23,
        salary: 20000
    }
];

const richManData = data.filter(person => person.salary > 10000)
console.log(richManData);

const richManName = richManData.map(person => person.name)
console.log(richManName);