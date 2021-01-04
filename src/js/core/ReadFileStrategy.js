const readXlsxFile = require('read-excel-file');
const Logger = require("../utils/Logger");

class ReadFileStrategy {
    constructor() {
        this.sheetNames = [];
        this.sheetMap = {};
    }

    async onReadFile(file) {
        await this.onGettingSheets(file);
        Logger.info("all sheets", this.sheetNames);
        return this.sheetNames;
    }

    async onGettingSheets(file) {
        let self = this;

        await readXlsxFile(file, {getSheets: true}).then((sheets) => {
            sheets.forEach(data => {
                Logger.info(data);
                self.sheetNames.push(data.name);
            });
        });
    }

    async onReadingSheet(file, sheetName) {
        if (!this.sheetMap[sheetName]) {
            let self = this;
            await readXlsxFile(file, {sheet: sheetName}).then((rows) => {
                self.onBuildingSheet(sheetName, rows);
            });
        }

        return this.sheetMap[sheetName];
    }

    onBuildingSheet(sheetName, rows) {
        Logger.info(`sheetName: ${sheetName}`, rows);
        this.sheetMap[sheetName] = [];

        let self = this;
        rows.forEach((row, index) => {
            if (index != 0) {
                self.sheetMap[sheetName].push({
                    inputName: row[0],
                    inputValue: row[1]
                });
            }
        })

        Logger.info("parseRows", this.sheetMap[sheetName]);
    }
}

module.exports = ReadFileStrategy;