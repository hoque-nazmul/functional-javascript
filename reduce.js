// Reduce Function is used for doing arithmatic operations in array or array objects.

const numbers = [20, 34, 54, 54, 23];
const total = numbers.reduce((total, num) => total + num, 0);
console.log(total);

// Another Example here:----
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

let totalSalary = data.reduce((totalSalary, personData) => totalSalary + personData.salary,0);

console.log("Total Salary: " + totalSalary);




