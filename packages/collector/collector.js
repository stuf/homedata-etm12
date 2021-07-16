#!/usr/bin/env node
const { stat } = require('fs/promises');

const checkEnv = stat('./.env')
  .then(() => {
    const dotenv = require('dotenv');
    const env = dotenv.config({ debug: true });

    return { hasEnv: true, env };
  })
  .catch(e => {
    if (e.code === 'ENOENT') {
      return Promise.reject({ hasEnv: false });
    }

    return Promise.reject({ hasEnv: null });
  });

const ensureEnv = checkEnv.catch(s => {
  const envKeys = ['ETM12_API_ENDPOINT'];
  if (!s.hasEnv && envKeys.every(k => process.env[k])) {
    return Object.assign(
      {},
      s,
      { hasEnv: true },
      {
        env: { ETM12_API_ENDPOINT: process.env.ETM12_API_ENDPOINT },
      },
    );
  } else {
    return Promise.reject({ hasEnv: null, env: null });
  }
});

//

ensureEnv
  .then(x => {
    console.log(x.env, process.env.ETM12_API_ENDPOINT);
    require('./lib/collector');
  })
  .catch(console.error);

// require('dotenv').config();
// const { version } = require('./package.json');

// const { log } = require('./lib/logger');

// log('info', 'collector', `running ETM12 collector.js v${version}`);

// require('./lib/collector');
