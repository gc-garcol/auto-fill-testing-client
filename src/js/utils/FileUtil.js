const fs = require('fs');

class FileUtil {
    constructor() {

    }

    async write(path, content) {
        await fs.writeFileSync(`${path}`, content);
    }
}

const INSTANCE = new FileUtil();
module.exports = INSTANCE;