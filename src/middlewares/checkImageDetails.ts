import { NextFunction, Request, Response } from 'express';
import path from 'path';
import verifyFileExists from '../utilities/verifyFileExists';
function checkImageDetails(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const file = req.query.file as unknown as string;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;

  const imagePath = path.resolve(__dirname, '..', '..', 'images', file);

  const imageHeight = Number(height);
  const imageWidth = Number(width);
  //check if image is in image folder
  const isImageAvailable = verifyFileExists(imagePath);
  //check if filename is provided
  if (!file) {
    res.status(400).send('Please provide file name');
    return;
  }
  if (!isImageAvailable) {
    res.status(400).send('Image not found');
    return;
  }
  //check if width and height is provided
  if (!width || !height) {
    res.status(400).send('Please provide intended width and height of image');
    return;
  }

  if (
    isNaN(imageHeight) ||
    isNaN(imageWidth) ||
    imageWidth <= 0 ||
    imageHeight <= 0
  ) {
    res
      .status(400)
      .send('image and height should be a positive number greater than 0');
    return;
  }

  next();
}

export default checkImageDetails;
