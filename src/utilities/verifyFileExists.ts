import { accessSync, constants } from 'fs';

function verifyFileExists(path: string): boolean | null {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

export default verifyFileExists;
