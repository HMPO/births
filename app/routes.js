//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/clear-session', function (req, res) {
  req.session.data = {};
  res.redirect('/');
});


// Import and attach other routes
require('./views/latest/_routes')(router);
require('./views/latest/informant/_routes')(router);
require('./views/latest/no-informant/_routes')(router);

require('./views/v1/_routes')(router);
require('./views/v1/informant/_routes')(router);
require('./views/v1/no-informant/_routes')(router);

require('./views/births/v1/_routes')(router);
require('./views/births/multipleBirths/_routes')(router);
require('./views/births/multipleBirths2/_routes')(router);
module.exports = router;





