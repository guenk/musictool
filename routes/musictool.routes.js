const express = require('express');
const router = express.Router();
const instrumentsController = require('../controllers/musictool.controller');

router.post('/', instrumentsController.addInstrument);
router.get('/', instrumentsController.getAllInstruments);
router.get('/:id', instrumentsController.getInstrumentById);
router.put('/:id', instrumentsController.updateInstrument);
router.delete('/:id', instrumentsController.deleteInstrument);

module.exports = router;