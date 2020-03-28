// if we use any variables or function in a function which is declered outside of function's scope, is called closure.

const name = "Nazmul Hoque";
function sayName() {
    console.log(name);
}

sayName();  //It's a closure. Becouse this funtion uses a 'name' variable which is outside it's scope.

// Another Example
function sayAddress(){
    const name = 'Nazmul Hoque';
    function address(address) {
        console.log(name + " : " + address);
    }
    address("Halishahar, Chittaging")
}
sayAddress();