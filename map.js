// we can show specific data from an array by using it.
// By the way, It's return an array.

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

const personName = data.map(person => person.name);

console.log(personName);