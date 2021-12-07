const path = require('path');
const express = require('express');
const session = require('express-session');
const Services = require('../../databeses/Services');
const uploadImage = require('../../midleware/multer');

const createServer = () => {
  const app = express();
  const services = new Services();
  app.use(
    session({
      cookie: {
        maxAge: 2 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
      },
      store: new session.MemoryStore(),
      saveUninitialized: true,
      resave: false,
      secret: 'superSecretValue',
    }),
  );

  app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(express.static('express'));
  app.use('/public', express.static(path.join(__dirname, '/../../../public')));

  app.set('views', path.join(__dirname, '/../../../views'));
  app.set('view engine', 'hbs');

  app.get('/', async (req, res) => {
    try {
      const types = await services.getType();
      const heros = await services.gethero();
      res.render('index', {
        types,
        heros,
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.post('/type', async (req, res) => {
    try {
      const { type: name } = req.body;
      await services.addType({ name });
      req.session.message = {
        message: 'Type added successfully',
        type: 'success',
      };
      res.redirect('/');
    } catch (error) {
      console.log(error);
      req.session.message = {
        message: error.message,
        type: 'danger',
      };
      res.redirect('/');
    }
  });

  app.post('/heroes', uploadImage('photo'), async (req, res) => {
    try {
      const { hero: name, typeId } = req.body;
      const { filename: photo } = req.file;
      await services.addHero({ name, typeId, photo });
      req.session.message = {
        message: 'Hero added successfully',
        type: 'success',
      };
      res.redirect('/');
    } catch (error) {
      console.log(error);
      req.session.message = {
        message: error.message,
        type: 'danger',
      };
      res.redirect('/');
    }
  });

  return app;
};

module.exports = createServer;
