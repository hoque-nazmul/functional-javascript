// We can sort array elements in ASC or DESC order by using sort function 

const nums = [32, 453, 54, 65, 2, 54, 65, 74, 22, 12, 454];
// ASC Order
const smallToBig = nums.sort(function (a, b){
    return a - b;
})
console.log(smallToBig);

// DESC Order
const bigToSmall = nums.sort(function (a, b){
    return b - a;
})
console.log(bigToSmall);

const data = [
    {name: "Nazmul Hoque", age: 25},
    {name: "Anayet Ullah", age: 22},
    {name: "Jhankar Mahbub", age: 45},
    {name: "Saima Khan", age: 18},
    {name: "Murshed Fahim", age: 21}
];
// ASC
const younger = data.sort(function (a, b){
    return a.age - b.age;
});
console.log(younger);

// DESC
const older = data.sort(function (a, b){
    return b.age - a.age;
});
console.log(older);

// Sort Array's elements by name or text 
const sortByName = data.sort(function (a, b){
    if(a.name > b.name){
        return 1;
    }
    else if (a.name < b.name){
        return -1;
    }
    else {
        return 0;
    }
});

console.log(sortByName);