import { Router } from 'express';
const router = Router();

import { renderIndex, renderNewEntry, createNewEntry, renderUpdateEntry, updateEntry, deleteEntry } from '../controllers/entries.controller';

router.get('/', renderIndex);

router.get('/new-entry', renderNewEntry);

router.post('/new-entry', createNewEntry);

router.get('/update-entry/:id', renderUpdateEntry);

router.post('/update-entry/:id', updateEntry);

router.get('/delete-entry/:id', deleteEntry);

module.exports = router;