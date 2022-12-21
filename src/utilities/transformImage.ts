import sharp from 'sharp';
import path from 'path';

type TransformOptions = {
  width: number;
  height: number;
};

const transformedImages = path.resolve('./src/transformed');

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
