const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

module.exports = function (router) {
  router.get('/test-route', (req, res) => {
    res.send('The _routes.js file is working!');
  });
};

module.exports = function (router) {
  router.get('/test-alert', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Test Alert</title>
        </head>
        <body>
          <script>
            alert('The _routes.js file is working!');
          </script>
        </body>
      </html>
    `);
  });
};

module.exports = function (router) {
  router.get('/test-page', (req, res) => {
    res.render('test-page');
  });
};


