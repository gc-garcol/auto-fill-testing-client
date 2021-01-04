class Logger {
    constructor() {

    }

    info(...logs) {
        console.log("####################");
        logs.forEach(log => {
            console.log(log);
        })
        console.log("// #################### //");
    }

}

const INSTANCE = new Logger();
module.exports = INSTANCE;