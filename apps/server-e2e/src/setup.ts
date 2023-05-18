import { Logger } from '@nestjs/common';

const logger = new Logger('MockServer');
beforeAll(() => {
  logger.log('Setting up server...');
});
