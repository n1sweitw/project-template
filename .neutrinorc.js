// const standard = require('@neutrinojs/standardjs');
const typescript = require('neutrino-typescript');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript(),
    react({
      html: {
        title: 'project-template'
      }
    }),
    jest(),
  ],
};
