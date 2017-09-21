/*Hola Mundo de Node (usando el método debug)
Información de último momento, Node.js es lo más!! (usando el método info)
Tirando warnings como campeones (usando el método warn)
Algo no está bien!!! (usando el método error)*/

const Logger = require('logplease');
const logger = Logger.create('utils');

logger.debug(`Hola mundo`);
logger.info(`Información de último momento, Node.js es lo más!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);


