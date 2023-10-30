import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';

const configPath = path.join(__dirname, '../../../config', `${env}.yml`);
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

export default config;