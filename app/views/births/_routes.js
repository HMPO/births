module.exports = function(router) {
  

router.post('/latest/task-list-form', function (req, res) {

  req.session.data = req.session.data || {};

  const selectedOption = req.body.userMedicalInfoSource;


  req.session.data['userMedicalInfoSource'] = selectedOption;
  
  if (selectedOption === '1-informant' || selectedOption === '2-cn2-with-inf' || selectedOption === '4-informant') {
    res.redirect('informant/informant-triage/01-who-is-informant');
  } else if (selectedOption === '3-inquest-no-inf') {
    res.redirect('no-informant/task-list');
  } else {
    res.redirect('informant/task-list');
  }
});

router.get('/latest/informant/task-list-inf-form', function (req, res) {
  res.render('informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    
  });
});

router.get('/latest/no-informant/task-list-noi-form', function (req, res) {
  res.render('no-informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
   
  });
});
};