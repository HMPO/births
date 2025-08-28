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
require('./views/coroner-inquest/_routes')(router);

module.exports = router;

// for the no/yes conditional display

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/medical-info-form', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var medicalInfoSourceVar = req.session.data['medicalInfoSource']

  // Check whether the variable matches a condition
  if (medicalInfoSourceVar == "1"){
    // Send user to next page
    res.redirect('/latest/task-list')
  } else {
    // Send user to ineligible page
    res.redirect('/coroner-inquest/task-list')
  }

})



