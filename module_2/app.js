// packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// registering template engine with express
app.set('view engine', 'pug');
// telling express where to find the views
app.set('views', './module_2/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// serve our static files
app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404-page.html'));
});

app.listen(8080);
