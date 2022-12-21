import { accessSync, constants } from 'fs';

/**
 *
 * @param path The path tha we wish to verify it's existence
 *
 * @returns Boolean true | false
 */
function verifyFileExists(path: string): boolean | null {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

export default verifyFileExists;
