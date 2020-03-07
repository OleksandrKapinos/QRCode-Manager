const express = require('express');
const router = express.Router();
const scanService = require('./scan.service');

// routes
router.post('/scan', scan);
router.post('/list', getScans);



module.exports = router;

function scan(req, res, next) {
    scanService.getScans(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getScans(req, res, next) {
    scanService.list()
      .then(scanedList => res.json(scanedList))
      .catch(err => next(err));
}
