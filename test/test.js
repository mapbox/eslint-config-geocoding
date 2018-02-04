'use strict';

const CLIEngine = require('eslint').CLIEngine;
const cli = new CLIEngine({ configFile: `${__dirname}/../eslintrc.json` });
const tape = require('tape');

tape('test config with invalid js', (assert) => {
  const report = cli.executeOnFiles([`${__dirname}/fixtures/cracklepop-invalid.js`]);
  assert.equal(report.errorCount, 34, 'finds errors in invalid file');
  assert.end();
});

tape('test config with valid js', (assert) => {
  const report = cli.executeOnFiles([`${__dirname}/fixtures/cracklepop-valid.js`]);
  assert.equal(report.errorCount, 0, 'finds no errors in valid file');
  assert.end();
});

