//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

router.get('/', (req, res) => {
  res.render('index');
});


// Import and attach other routes
require('./views/latest/_routes')(router);



module.exports = router;

// for the no/yes conditional display


// Serve static files from views/latest



