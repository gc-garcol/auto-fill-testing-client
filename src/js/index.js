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

const fakeUrl = "http://localhost:3000/test";
// end fake

btnExecute.addEventListener("click", () => {
    NightWatchService.resolveTestCase("testfile", fakeUrl, fakeData);
})