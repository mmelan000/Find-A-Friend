const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helper.js');
const { sequelize, sessionConfig } = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const hbs = exphbs.create({ helpers });

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      '\nServer running on port ${PORT}. Visit http://localhost:${PORT}!'
    )
  );
});
