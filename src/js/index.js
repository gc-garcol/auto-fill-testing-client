const NightWatchService = require("./service/NightWatchService");
const ReadFileStrategy = require("./core/ReadFileStrategy");
const Dropdown = require("./components/Dropdown");
const Logger = require("./utils/Logger");

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
        this.testCaseArea = document.getElementById("js-testCase");
        this.url = document.getElementById("js-url");

        this.readFileStratefy = null;

        this.initEventListeners();
    }

    initEventListeners() {
        this.inputFile.addEventListener("change", this.onFileChange.bind(this));
        this.inputFile.addEventListener("click", this.clearFile.bind(this));

        this.btnExecute.addEventListener("click", this.submit.bind(this));
    }

    onFileChange() {
        if (this.inputFile.files.length == 0) return;

        this.readFile();
    }

    async readFile() {
        this.readFileStratefy = new ReadFileStrategy();

        let sheets = await this.readFileStratefy.onReadFile(this.inputFile.files[0]);

        this.onRenderDropdown(sheets);
    }

    onRenderDropdown(sheets) {
        new Dropdown().render(this.testCaseArea, sheets, this.initDropdownEventListender.bind(this));
    }

    initDropdownEventListender() {
        
    }

    clearFile() {
        Logger.info("click clearFile");
        this.inputFile.value = '';
    }

    async submit() {
        // NightWatchService.resolveTestCase("testfile", fakeUrl, fakeData);

        let selectOption = document.getElementById("js-dropdown");

        if (!selectOption) return;

        let data = await this.readFileStratefy.onReadingSheet(this.inputFile.files[0], selectOption.value);
        NightWatchService.resolveTestCase(selectOption.value, this.url.value, data);
    }

}

new IndexLogic();