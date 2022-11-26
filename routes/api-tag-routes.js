const { Router } = require('express');

const { getTags, createTag } = require('../controllers/api-tag-controller');

const router = Router();

router.get('/tags', getTags);

router.post('/tags', createTag);

module.exports = router;
