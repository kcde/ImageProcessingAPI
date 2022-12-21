"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const transformedImages = path_1.default.resolve('./src/transformed');
async function transformImage(image, options) {
    const imageToTransform = path_1.default.resolve(`./src/images/${image}`);
    const imageName = image.split('.')[0];
    return await (0, sharp_1.default)(imageToTransform)
        .resize(options)
        .toFile(`${transformedImages}/${imageName}/${options.width}x${options.height}.jpg`);
}
exports.default = transformImage;
