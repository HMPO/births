module.exports = function(router) {
  console.log('Task routes loaded!');

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });


router.get('/latest/informant/task-list-form', function (req, res) {
  res.render('informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    userPostMortemDetail: req.session.data['userPostMortemDetail']
  });
});

router.get('/latest/no-informant/task-list-form', function (req, res) {
  res.render('no-informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    userPostMortemDetail: req.session.data['userPostMortemDetail']
  });
});

// Run this code when a form is submitted via medical info radios

router.post('/latest/medical-info-form', function (req, res) {
  const medicalInfoSourceVar = req.session.data['medicalInfoSource']
  const postMortemDetailVar = req.session.data['postMortemDetail']

  // Store the detail for later use if needed
  req.session.data['userMedicalInfoSource'] = medicalInfoSourceVar
  req.session.data['userPostMortemDetail'] = postMortemDetailVar

  if (medicalInfoSourceVar === "1-informant") {

    res.redirect('informant/task-list')
  } 
  else if (medicalInfoSourceVar === "2") {
    if (postMortemDetailVar === "2-with-inf") {
      res.redirect('informant/task-list')
    } else if (postMortemDetailVar === "2-no-inf") {
      res.redirect('no-informant/task-list')
    } 
  } 
  else if (medicalInfoSourceVar === "3-no-inf") {
    res.redirect('no-informant/task-list')
  } 
  else if (medicalInfoSourceVar === "4-informant") {
    res.redirect('informant/task-list')
  } 
})



//need this at the end:
};