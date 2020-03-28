// js arguments is an array like object. It's not an array. but it's look like array.
// We can easily convert arguments(array like obj) to Array by using 'Spread Operator' 

function addNums () {
    // let num = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     const element = arguments[i];
    //     num = num + element;
    // }
    // return num;
    const argInArray = [...arguments];
    let total = argInArray.reduce((total, nums) => total + nums, 0);
    return total;
}

const add = addNums(23, 27, 50, 32)
console.log(add);

function pirntSortedName() {
    const argArray = [...arguments];
    let sortedName = argArray.sort(function(a, b){
        if(a > b){
            return 1;
        }else if (a < b) {
            return -1;
        }else {
            return 0;
        }
    });
    return sortedName;
}

console.log(pirntSortedName("Nazmul", "Anayet", "Towhid", "Mukta"));