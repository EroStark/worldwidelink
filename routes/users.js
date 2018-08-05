var express = require('express');
let db = require('../db/queries');
var router = express.Router();

/* GET users listing. */
router.get('/getComments', db.getComments);

/* POST users listing. */
router.post('/newComment', db.newComment);

module.exports = router;
