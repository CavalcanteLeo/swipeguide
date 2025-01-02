const { config } = require('dotenv-cra');
process.env.NODE_ENV = process.env.NODE_ENV || 'test';
config({ env: process.env.NODE_ENV });

import 'react-native-gesture-handler/jestSetup';
