const NightWatchService = require("./service/NightWatchService");

// DOM
const btnExecute = document.getElementById("js-btn-execute");

// fake
const fakeData = [
    {
        "inputName": "username",
        "inputValue": "garcol"
    },
    {
        "inputName": "password",
        "inputValue": "iloveyou"
    }
]

const fakeUrl = "https://www.ecosia.org/";
// end fake

btnExecute.addEventListener("click", () => {
    NightWatchService.resolveTestCase("testfile", fakeUrl, fakeData);
})