// Higher Order funciton

// It's called callback function
function setName(name) {
    return name;
}
function greeting(msg, callback){
    return msg+", "+callback;
}
const welcome = greeting('Welcome', setName("Nazmul Hoque"))

console.log(welcome);

// there are another type of higher order function 
// return a function inside from a parent function 
function welcomeMassage(name){
    return function msg(msg) {
        return msg + ", " + name;
    }
}

const welcomed = welcomeMassage("Mukta Hoque")("Good Morning");
console.log(welcomed);

