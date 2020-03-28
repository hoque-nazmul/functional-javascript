// If we declare a function , we must call to work with it or use it.
// But if you want to use a function without calling, the IIFE function for you.. 


(function sayHello() {
    const name = "Nazmul Hoque";
    console.log("Hello, "+name);
})()

const sayName = (function sayName(){
    const name = "Mukta Hoque";
    return name;
})()

console.log(sayName);