import logName from '../utilities/logName';
import app from '../index';

import supertest from 'supertest';

const request = supertest(app);
describe('test logName function', () => {
  it("should return 'keside' when logName() is run", () => {
    expect(logName()).toBe('keside');
  });
});

describe('test /api/image endpoint', () => {
  it('should return a status of 200', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(200);
  });
});
