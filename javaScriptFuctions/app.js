function addTwoNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById("answer").innerHTML =  num1 + num2;
    console.log(num1)
    console.log(num2)
}
function subTwoNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById("answer2").innerHTML = num1 - num2 ;
    
    console.log(num1)
    console.log(num2)

}
function multiplyTwoNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById("answer3").innerHTML = num1 * num2;
    console.log(num1)
    console.log(num2)
}
function divideTwoNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById("answer4").innerHTML = num1 / num2;
    console.log(num1)
    console.log(num2)
}