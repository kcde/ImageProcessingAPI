"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function verifyFileExists(path) {
    try {
        (0, fs_1.accessSync)(path, fs_1.constants.F_OK);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.default = verifyFileExists;
