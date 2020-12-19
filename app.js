var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outPut=document.querySelector("#output")

console.log(txtInput)

function clickHandler(){
    console.log("clicked")
    console.log("input =>", txtInput.value)
    outPut.innerText = "kadunaggbaba " + txtInput.value
}

btnTranslate.addEventListener("click", clickHandler)