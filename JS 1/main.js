const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("diff");
const resultTxt3 = document.getElementById("prod");
const resultTxt4 = document.getElementById("quo");

let sum = 0;
let diff = 0;
let prod = 0;
let quo = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;

        diff= parseInt(num1Txt.value) - arseInt(num2Txt.value);
        resultTxt2.innerHTML = diff;

        prod = parseInt(num1Txt.value)  * arseInt(num2Txt.value);
        resultTxt3.innerHTML = prod;

        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultTxt4.innerHTML = quo;

    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;

}

