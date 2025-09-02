module.exports = function(router) {
  

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });

  // TASK LIST
  // router.get('/latest/informant/task-list-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   res.render('task-list', { data: req.session.data });
  // });

router.post('/latest/task-list-form', function (req, res) {

   // Log the submitted form data
  console.log('Form submission:', req.body);
  // Ensure session data exists
  req.session.data = req.session.data || {};

  // Save the selected radio button values to the session
  const selectedOption = req.body.userMedicalInfoSource;
  const nestedOption = req.body.userPostMortemDetail; // May be undefined if not selected

   console.log('Selected option:', selectedOption);
  console.log('Nested option:', nestedOption);

  req.session.data['userMedicalInfoSource'] = selectedOption;
  req.session.data['userPostMortemDetail'] = nestedOption;

  // Redirect based on the selected option
  if (selectedOption === '1-informant' || selectedOption === '2' && nestedOption === '2-with-inf' || selectedOption === '4-informant') {
    res.redirect('informant/task-list');
  } else if (selectedOption === '2' && nestedOption === '2-no-inf' || selectedOption === '3-no-inf') {
    res.redirect('no-informant/task-list');
  } else {
    // Handle unexpected values (optional)
    res.redirect('informant/task-list'); // Redirect back to the form if no valid option is selected
  }
});

// Route for the informant task list
router.get('/latest/informant/task-list-inf-form', function (req, res) {
  res.render('informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    userPostMortemDetail: req.session.data['userPostMortemDetail']
  });
});

// Route for the no-informant task list
router.get('/latest/no-informant/task-list-noi-form', function (req, res) {
  res.render('no-informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    userPostMortemDetail: req.session.data['userPostMortemDetail']
  });
});




//need this at the end:
};