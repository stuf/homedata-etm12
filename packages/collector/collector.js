#!/usr/bin/env node
require('dotenv').config();

console.log('running collector');
require('./lib/collector');
