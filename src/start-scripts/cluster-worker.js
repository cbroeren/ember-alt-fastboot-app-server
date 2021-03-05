'use strict';

const ClusterWorker = require('../backing-classes/cluster-worker');
const worker = new ClusterWorker();
(async function () { await worker.start()})();
