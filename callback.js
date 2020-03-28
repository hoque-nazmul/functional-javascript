// It's called callback function


function setName(name) {
    return name;
}
function greeting(msg, callback){
    return msg+", "+callback;
}

// If we pass a function as a argument of another function, is called callback function.
const welcome = greeting('Welcome', setName("Nazmul Hoque"))

console.log(welcome);