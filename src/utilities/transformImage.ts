import sharp from 'sharp';
import path from 'path';

type TransformOptions = {
  width: number;
  height: number;
};

const transformedImages = path.resolve('./src/transformed');

/**
 *
 * @param image A string that represents the name of the file that you wish to transform from the images folder
 * @param options An object with key value pairs of width and height which represent the width and height of the images and their values have to be a type of number
 * @returns returns a Promise<sharp.OutputInfo>
 */

async function transformImage(
  image: string,
  options: TransformOptions
): Promise<sharp.OutputInfo> {
  const imageToTransform = path.resolve(`./src/images/${image}`);
  const imageName = image.split('.')[0];
  return await sharp(imageToTransform)
    .resize(options)
    .toFile(
      `${transformedImages}/${imageName}/${options.width}x${options.height}.jpg`
    );
}

export default transformImage;
