"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
/**
 *
 * @param path The path tha we wish to verify it's existence
 *
 * @returns Boolean true | false
 */
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
