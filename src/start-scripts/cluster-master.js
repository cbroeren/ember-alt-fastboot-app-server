'use strict';

const Connecter = require('../backing-classes/connector');
const ClusterMaster = require('../backing-classes/cluster-master');

const config = {
  connector: new Connecter(),
  host: 'localhost',
  port: '4200',
  workerCount: 1
};

const master = new ClusterMaster(config);

master.start();
