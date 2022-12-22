import app from '../index';
import transformImage from '../utilities/transformImage';
import verifyFileExists from '../utilities/verifyFileExists';
import supertest from 'supertest';
import path from 'path';
import fs from 'fs/promises';

const request = supertest(app);

describe('test /api endpoint', () => {
  it('should return a status codeof 200', async () => {
    const response = await request.get('/api');

    expect(response.status).toBe(200);
  });
});

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
    const response = await request.get(
      '/api/image?file=santamonica.jpg&width=twelve&height=twelve'
    );

    expect(response.status).toBe(400);
  });
});

describe('test image processing function and verifyFileExists', () => {
  const filename = 'fjord.jpg';
  const imageTransformOptions = { width: 222, height: 222 };
  const transformedImageFolder = path.resolve(
    __dirname,
    '..',
    '..',
    'transformed',
    'fjord'
  );
  console.log(transformedImageFolder);

  const transformedImagePath = path.resolve(
    __dirname,
    '..',
    '..',
    'transformed',
    'fjord',
    '222x222.jpg'
  );

  beforeAll(async () => {
    if (!verifyFileExists(transformedImageFolder)) {
      await fs.mkdir(transformedImageFolder);
    }
  });

  afterAll(() => {
    //remove file
    fs.unlink(transformedImagePath);
    //delete folder
    //fs.rmdir(transformedImageFolder);
  });

  it('should return true when verifyFileExists() is run ', async () => {
    return transformImage(filename, imageTransformOptions).then(() => {
      expect(verifyFileExists(transformedImagePath)).toBeTruthy();
    });
  });
});
