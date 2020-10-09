'use strict';

var path = require('path');
const FastBootAppServer = require('../../src/backing-classes/cluster-master');

var server = new FastBootAppServer({
  distPath: path.resolve(__dirname, './basic-app'),
  username: 'tomster',
  password: 'zoey'
});

server.start();
