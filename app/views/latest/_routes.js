module.exports = function(router) {
  console.log('Task routes loaded!');

  // TASK LIST
  router.get('/latest/task-list-form', (req, res) => {
    req.session.data = req.session.data || {};
    res.render('latest/03-tasklist', { data: req.session.data });
  });
  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/latest/prepare-for-appointment-form', (req, res) => {
    res.render('latest/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/latest/prepare-for-appointment-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.prepareForAppointmentCompleted = true;
    res.redirect('03-tasklist.html');
  });
 
  // 1.2: Uploads
  router.get('/latest/uploads-form', (req, res) => {
    res.render('latest/uploads', { data: req.session.data });
  });

  router.post('/latest/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsCompleted = true;
    res.redirect('03-tasklist.html');
  });

    // 1.2: Comments
  router.get('/latest/comments-form', (req, res) => {
    res.render('latest/comments', { data: req.session.data });
  });

  router.post('/latest/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
    res.redirect('03-tasklist.html');
  });
   // 2. Info from certificate
    // 2 Cause of death
  router.get('/latest/medical-info-check-form', (req, res) => {
    res.render('latest/medical-info-check', { data: req.session.data });
  });

  router.post('/latest/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
    req.session.data.codCompleted = true;
    res.redirect('03-tasklist.html');
  });

   // 3 Whose details
  

  // Cannot start yet (locked until 1 & 2 complete)
  router.get('/latest/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    if (req.session.data.pregCompleted && req.session.data.codCompleted) {
      res.render('latest/informant-and-details', { data: req.session.data });
    } else {
      res.redirect('03-tasklist.html');
    }
  });

  router.post('/latest/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoseDetailsCompleted = true;
    res.redirect('03-tasklist.html');
  });
};

