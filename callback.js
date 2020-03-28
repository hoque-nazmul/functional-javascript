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

// Have a fun with callback function 
// We can use a function in multiple ways by using callback function 
function sayGreeting (name, print){
    print(name);
}

sayGreeting("Nazmul Hoque", function(data){
    console.log("Hello, " + data);
})

sayGreeting("Nazmul Hoque", function(data){
    console.log("Hey, How are you" + data + "?");
})

sayGreeting("Nazmul Hoque", function(data){
    console.log("The Length of " + data + " is : " + data.length);
})

// Sweet Example of Callback
const person = { name: "Nazmul Hoque", age : 25, email: "nazmul.hoquecu98@gmail.com" }

function printPerson(data, callback) {
    console.log(data.name + " ( "+ data.age +" ) ");
    if(data.age > 18){
        callback(data.email);
    }else {
        console.log("You are too small!");
    }
}
printPerson(person, function(email){
    console.log("Email sent to: " + email);
});

// Another Sweet Example
function setTextDecoration (text, callback1, callback2){
    console.log("The Data is : ",text);
    callback1(text);
    callback2(text);
}

setTextDecoration("Think for the beTTer!", function(data){
    const upperCase = data.toUpperCase();
    console.log("Uppercase: " + upperCase);
}, function(data2){
    const lowerCase = data2.toLowerCase();
    console.log("LowerCase: " + lowerCase);
})