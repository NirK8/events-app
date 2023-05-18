import { MongoMemoryServer } from 'mongodb-memory-server';
import { writeLocalConnectionString } from './utils/database';

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;
let mongod: MongoMemoryServer;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up external services...');
  console.log('\nSetting up in-memory mongo database...');
  mongod = await MongoMemoryServer.create();
  writeLocalConnectionString(mongod);

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...';
  globalThis.__MONGO__ = mongod;
};
