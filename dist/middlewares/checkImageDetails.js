"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const verifyFileExists_1 = __importDefault(require("../utilities/verifyFileExists"));
function checkImageDetails(req, res, next) {
    const { file, width, height } = req.query;
    const imagePath = path_1.default.resolve(`./src/images/${file}`);
    //check if image is in image folder
    const isImageAvailable = (0, verifyFileExists_1.default)(imagePath);
    //check if filename is provided
    if (!file) {
        res.status(400).send('Please provide file name');
        return;
    }
    //check if width and height is provided
    if (!width || !height) {
        res.status(400).send('Please provide intended width and height of image');
        return;
    }
    if (!isImageAvailable) {
        res.status(404).send('Image not found');
    }
    next();
}
exports.default = checkImageDetails;
