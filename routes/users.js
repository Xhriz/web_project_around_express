const router = require('express').Router();
const userController = require('../controllers/users');

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUsersId);
router.patch('/users/me', userController.updateUser);
router.patch('/users/me/avatar', userController.updateAvatar);

module.exports = router;
