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
    return input === 5;

}

function isEven(input){
 if (input === 0){
     return false;
 }
    return parseFloat(input) % 2 === 0;
}

function isVowel (vow){
    return vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u' || vow === 'A' || vow === 'E' || vow === 'I' || vow === 'O' || vow === 'U';

}

function add(num1 , num2){
    return num1 + num2;
}
