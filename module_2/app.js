// packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const adminRoutes = require('./routes/routes');

const app = express();

// registering template engine with express
app.set('view engine', 'ejs');

// telling express where to find the views
app.set('views', './module_2/views');

// Middleware
// Next can be passed as a third argument to the use callback and must be
// called to move onto the next registered app.use method
app.use(bodyParser.urlencoded({ extended: false }));

// serve our static files
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use(adminRoutes.routes);
// app.use(shopRoutes);

// 404 route
app.use((req, res) => {
  res.render('404-page', { pageTitle: 'Page Not Found' });
});

app.listen(8080);

// HandleBars
// const expressHbs = require('express-handlebars');
// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'module_2/views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   }),
// );
// app.set('view engine', 'hbs');

// Pug
// app.set('view engine', 'pug');
