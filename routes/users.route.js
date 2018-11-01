const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/avatars/' })


//Controller
const controller = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', controller.getUser);

router.post('/', upload.single('avatar'), controller.postUser);

router.put('/:id', upload.single('avatar'), controller.updateUser);

router.delete('/:id', controller.deleteUser);


module.exports = router;