const bill = document.getElementById("bill")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyfive = document.getElementById("twentyfive")
const fifty = document.getElementById("fifty")
const custom = document.getElementById("custom")
const numbOfPeple = document.getElementById("numbOfPeple")
const tippAmaunt = document.getElementById("tippAmaunt")
const total = document.getElementById("total")


let billSting = "0"
let pepleSting = "0"
let percentSting = "1"

let billNumb = parseFloat(billSting)
let pepleNumb = parseFloat(pepleSting)
let percentNumb = parseFloat(percentSting)

let sum = 0
let tip = 0

function check(){
    //check the stings
    billSting = bill.value
    pepleSting = numbOfPeple.value
    billNumb = parseFloat(billSting)
    pepleNumb = parseFloat(pepleSting)
    percentNumb = parseFloat(percentSting)
}

function setFive(){
    // sett percent 
    check()
    percentSting = 0.05
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * 1.05 / pepleNumb

    addText()
}
function setTen(){
    check()
    percentSting = 0.1
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * 1.1 / pepleNumb

    addText()
}
function setFifteen(){
    check()
    percentSting = 0.15
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * 1.15 / pepleNumb

    addText()
}
function setTwentyfive(){
    check()
    percentSting = 0.25
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * 1.25 / pepleNumb

    addText()
}
function setFifty(){
    check()
    percentSting = 0.5
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * 1.5 / pepleNumb

    addText()
}
function setCustom(){
    check()
    let customValue = custom.value
    customValue /= 100
    percentSting = customValue
    customValue += 1
    percentNumb = parseFloat(percentSting)
    tip = billNumb * percentNumb / pepleNumb
    sum = billNumb * customValue / pepleNumb

    addText()
}

function addText(){
    tippAmaunt.innerHTML = "$" + tip.toFixed(2) 
    total.innerHTML = "$" + sum.toFixed(2)
}
addText()

function reset(){
    bill.value = 0 
    numbOfPeple.value = 0
    custom.value = 0
    tippAmaunt.innerHTML = "$" + 0
    total.innerHTML = "$" + 0
}