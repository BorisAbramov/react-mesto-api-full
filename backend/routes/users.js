const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const {
  getUsers,
  getUser,
  updateUser,
  updateUserAvatar,
  getDataUser,
} = require('../controllers/users');
const BadRequestError = require('../errors/BadRequestError');

const method = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new BadRequestError('указанный URL не прошел валидацию');
};

router.get('/users/me', getDataUser);
router.get('/users', getUsers);
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
}), getUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateUser);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(method),
  }),
}), updateUserAvatar);

module.exports = router;
