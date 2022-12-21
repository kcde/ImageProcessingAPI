"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logName_1 = __importDefault(require("../utilities/logName"));
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
describe('test logName function', () => {
    it("should return 'keside' when logName() is run", () => {
        expect((0, logName_1.default)()).toBe('keside');
    });
});
describe('test /api/image endpoint', () => {
    it('should return a status of 200', async () => {
        const response = await request.get('/api/image');
        expect(response.status).toBe(200);
    });
});
