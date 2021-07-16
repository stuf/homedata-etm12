const log = (level, label, ...args) => {
  if (!(level in console)) return;

  const now = new Date();
  const log = [now.toISOString(), `[${level}]`, `<${label}>`].join(' ');

  console[level](log, ...args);
};

module.exports = {
  log,
};
