'use strict';

require('dotenv').config();

require('babel-core').transform('code');

require('./src/app').start(process.env.PORT);
