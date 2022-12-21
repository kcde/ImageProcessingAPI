import { NextFunction, Request, Response } from 'express';
import path from 'path';
import verifyFileExists from '../utilities/verifyFileExists';
function checkImageDetails(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { file, width, height } = req.query;
  const imagePath = path.resolve(`./src/images/${file}`);

  //check if image is in image folder
  const isImageAvailable = verifyFileExists(imagePath);
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

export default checkImageDetails;
