// Inner Function 
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