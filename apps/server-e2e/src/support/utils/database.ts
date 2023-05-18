import { MongoMemoryServer } from 'mongodb-memory-server';
import { join } from 'path';
import * as fs from 'fs';

/**
 * Creates a new json file and saves the connection uri to the in-memory mongo databases inside of it.
 * @param mongod
 */
const writeLocalConnectionString = (mongod: MongoMemoryServer) => {
  const cwd = process.cwd();
  const globalConfigPath = join(cwd, 'globalConfig.json');
  const mongoConfig = { mongoUri: mongod.getUri() };
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));
};

export { writeLocalConnectionString };
