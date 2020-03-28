// Inner Function 
// Every function creates a local scope.
// If we want to get a child function, we must return in thier parent function.
function outerFunc(){
    console.log("I am from Outer Function");

    function innerFuncOne() {
        console.log("I am from Inner Function One!");
    }
    function innerFuncTwo() {
        console.log("I am from Inner Function Two!");
    }
    function innerFuncThree() {
        console.log("I am from Inner Function Three!");
    }

    return innerFuncOne(), innerFuncTwo(), innerFuncThree();
}

outerFunc();