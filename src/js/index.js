const NightWatchService = require("./service/NightWatchService");
const ReadFileStrategy = require("./core/ReadFileStrategy");

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


class IndexLogic {

    constructor() {
        this.btnExecute = document.getElementById("js-btn-execute");
        this.inputFile = document.getElementById("js-file");
        this.readFileStratefy = null;

        this.initEventListeners();
    }

    initEventListeners() {
        this.inputFile.addEventListener("change", this.onFileChange.bind(this));
        this.inputFile.addEventListener("click", this.onFileChange.bind(this));

        this.btnExecute.addEventListener("click", this.submit.bind(this));
    }

    onFileChange() {
        if (this.inputFile.files.length == 0) return;

        this.readFile();
    }

    async readFile() {
        this.readFileStratefy = new ReadFileStrategy();

        await this.readFileStratefy.onReadFile(this.inputFile.files[0]);

        await this.readFileStratefy.onReadingSheet(this.inputFile.files[0], "MZMO01_testcase02");
    }

    clearFile() {
        this.inputFile.value = '';
    }

    submit() {
        NightWatchService.resolveTestCase("testfile", fakeUrl, fakeData);s
    }

}

new IndexLogic();