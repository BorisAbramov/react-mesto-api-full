const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
const { celebrate, Joi, errors } = require('celebrate');
const cors = require('cors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');
const NotFoundError = require('./errors/NotFoundError');
const BadRequestError = require('./errors/BadRequestError');
const handleError = require('./errors/handleError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(express.json());

const method = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new BadRequestError('указанный URL не прошел валидацию');
};

app.use(requestLogger);
app.use(cors());

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(method),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);

app.use(auth);

app.use(cardsRouter);
app.use(usersRouter);

app.use('*', (req, res, next) => {
  next(new NotFoundError('Указанный адрес не существует'));
});

app.use(errorLogger);
app.use(errors());

app.use(handleError);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Running');
});
