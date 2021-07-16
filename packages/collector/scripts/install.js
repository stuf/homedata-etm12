#!/usr/bin/env node
const {
  statSync: stat,
  mkdirSync: mkdir,
  symlinkSync: symlink,
  chmodSync: chmod,
} = require('fs');

const { resolve } = require('path');

const { HOME } = process.env;

const collectorPath = resolve(__dirname, '..', 'collector.js');

const installDir = resolve(HOME, '.etm12');
const binDir = resolve(installDir, 'bin');

const requiredDirs = [installDir, binDir];

const createIfNoDir = path => {
  try {
    const d = stat(path);
    if (!d.isDirectory) {
      throw new Error('path given not a directory');
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      mkdir(path, { recursive: true });
    }
  }
};

const ensureLocationsExist = dirs => dirs.forEach(dir => createIfNoDir(dir));

//

// First, ensure the location actually exists
ensureLocationsExist(requiredDirs);

// Symlink collector script to its correct location
const collectorBinPath = resolve(binDir, 'collector.js');

try {
  symlink(collectorPath, collectorBinPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    const binStat = stat(collectorBinPath);
    console.log(binStat);
    if (!binStat.isSymbolicLink()) {
      console.error(collectorBinPath);
      console.error(err);
      throw new Error('collector script already exists and is not a symlink');
    }
  }
}

chmod(collectorBinPath, 0o755);
