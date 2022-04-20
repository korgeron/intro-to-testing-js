// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function plusOne(num) {
    if (typeof num === "number") {
        return num + 1;
    } else {
        return 0;
    }

}

function sayHello(name) {
    if (name === true || name === false || name === undefined) {
        return "Hello, World!";
    } else if (!isNaN(name)) {
        return "not a name";
    }
    return "Hello, " + name + "!";
}

function isFive(input){
    return input = true;
}
