import express from 'express';
import checkImageDetails from '../middlewares/checkImageDetails';
import transformImage from '../utilities/transformImage';
import fs from 'fs/promises';
import path from 'path';
import verifyFileExists from '../utilities/verifyFileExists';

const api = express.Router();

api.get('/', (req, res): void => {
  res.status(200).send('welcome to the image processing api');
});

api.get(
  '/image',
  checkImageDetails,
  (
    req: { query: { file: string; width: string; height: string } },
    res
  ): void => {
    const { file, width, height } = req.query;
    const filename = file.split('.')[0];
    const folderPath = path.resolve(`./src/transformed/${filename}`);
    const filePath = path.resolve(`${folderPath}/${width}x${height}.jpg`);
    //check if folder exists
    if (verifyFileExists(folderPath)) {
      //if file exists in folder
      if (verifyFileExists(filePath)) {
        //return the file
        res.status(200).sendFile(filePath);
        return;
      }
      //if not, create the transformed image and serve
      transformImage(file, {
        width: Number(width),
        height: Number(height)
      }).then(() => {
        res.status(200).sendFile(filePath);
      });

      return;
    }

    // if folder does not exist,  create folder and create image and serve image
    console.log('folder does not exist');
    fs.mkdir(folderPath).then(() => {
      transformImage(file, {
        width: Number(width),
        height: Number(height)
      }).then(() => {
        res.status(200).sendFile(filePath);
        return;
      });

      // res.send('folder does not exist, !created it');
    });
  }
);

export default api;
