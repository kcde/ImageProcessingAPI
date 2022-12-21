"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const transformImage_1 = __importDefault(require("../utilities/transformImage"));
const verifyFileExists_1 = __importDefault(require("../utilities/verifyFileExists"));
const supertest_1 = __importDefault(require("supertest"));
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const request = (0, supertest_1.default)(index_1.default);
describe('test /api/image endpoint', () => {
    it('should return a response code of 400 if image query is not provided', async () => {
        const response = await request.get('/api/image?width=70&height=300');
        expect(response.status).toBe(400);
    });
    it('should return a response code of 400 if height and width is not provided', async () => {
        const response = await request.get('/api/image?file=fjord.jpg&width=70');
        expect(response.status).toBe(400);
    });
    it('should return a response code of 400 if height and width is not a number', async () => {
        const response = await request.get('/api/image?file=santamonica.jpg&width=twelve&height=twelve');
        expect(response.status).toBe(400);
    });
});
describe('test image processing function', () => {
    const filename = 'fjord.jpg';
    const imageTransformOptions = { width: 222, height: 222 };
    const transformedImageFolder = path_1.default.resolve('./src/transformed/fjord');
    const transformedImagePath = path_1.default.resolve('./src/transformed/fjord/222x222.jpg');
    beforeAll(async () => {
        await promises_1.default.mkdir(transformedImageFolder);
    });
    afterAll(() => {
        //remove file
        promises_1.default.unlink(transformedImagePath);
        //delete folder
        promises_1.default.rmdir(transformedImageFolder);
    });
    it('should return true when verifyFileExists() is run ', async () => {
        console.log(transformedImageFolder);
        return (0, transformImage_1.default)(filename, imageTransformOptions).then(() => {
            expect((0, verifyFileExists_1.default)(transformedImagePath)).toBeTruthy();
        });
    });
    // folder should be in transformed
    //file should be in it's folder
});
// describe('Test Image processing ',()=>{
// })
