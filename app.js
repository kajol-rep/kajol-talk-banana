var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outPut=document.querySelector("#output")

console.log(txtInput)
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input

}

function errorHandler(error){
    console.log("error occured", error)
    alert("There is something wrong with server! try again after some time")
}

function clickHandler(){
    //console.log("clicked")
    //console.log("input =>", txtInput.value)
    //outPut.innerText = "kadunaggbaba " + txtInput.value
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outPut.innerText = translatedText})
        .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler)