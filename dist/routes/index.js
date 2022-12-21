"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkImageDetails_1 = __importDefault(require("../middlewares/checkImageDetails"));
const transformImage_1 = __importDefault(require("../utilities/transformImage"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const verifyFileExists_1 = __importDefault(require("../utilities/verifyFileExists"));
const api = express_1.default.Router();
api.get('/', (req, res) => {
    res.send('welcome to the image processing api');
});
api.get('/image', checkImageDetails_1.default, (req, res) => {
    const { file, width, height } = req.query;
    const filename = file.split('.')[0];
    const folderPath = path_1.default.resolve(`./src/transformed/${filename}`);
    const filePath = path_1.default.resolve(`${folderPath}/${width}x${height}.jpg`);
    //check if folder exists
    if ((0, verifyFileExists_1.default)(folderPath)) {
        //if file exists in folder
        if ((0, verifyFileExists_1.default)(filePath)) {
            //return the file
            res.sendFile(filePath);
            return;
        }
        //if not, create the transformed image and serve
        (0, transformImage_1.default)(file, {
            width: Number(width),
            height: Number(height)
        }).then(() => {
            res.sendFile(filePath);
        });
        return;
    }
    // if folder does not exist,  create folder and create image and serve image
    console.log('folder does not exist');
    promises_1.default.mkdir(folderPath).then(() => {
        (0, transformImage_1.default)(file, {
            width: Number(width),
            height: Number(height)
        }).then(() => {
            res.sendFile(filePath);
            return;
        });
        // res.send('folder does not exist, !created it');
    });
});
exports.default = api;
