module.exports = {
  diff: true,
  'inline-diffs': false,
  colors: true,
  extension: ['ts'],
  require: [
    'ts-node/register',
    './test/setup.js'
  ],
  slow: 75,
  spec: 'test/**/*.spec.ts',
  'watch-files': 'test/**/*.spec.ts'
};
