
let str = prompt("Enter a String to reverse");

console.log(reverseFun(str));
function reverseFun(str){
    return str.split("").reverse().join("");
}