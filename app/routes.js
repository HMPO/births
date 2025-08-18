//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

router.get('/', (req, res) => {
  res.render('index');
});


// router.post('/prepare-for-appointment-form', (req, res) => {

//     console.log('POST /prepare-for-appointment hit');
//     console.log('req.body =', req.body);
//     console.log('req.session.data before =', req.session.data);

//     req.session.data = req.session.data || {};
//     req.session.data.fullName = req.body.fullName || '';
//     req.session.data.prepareForAppointmentCompleted = true;

//     console.log('req.session.data after =', req.session.data);

//     res.redirect('/latest/task-list');
//   });

// Import and attach other routes
require('./views/latest/_routes')(router);

module.exports = router;