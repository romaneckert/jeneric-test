const Logger = require('./src/module/logger');

class Jeneric {
    constructor() {
        this.module.logger = new Logger();
    }

    boot() {

    }
}

module.exports = new Jeneric();