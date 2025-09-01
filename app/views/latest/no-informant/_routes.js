module.exports = function(router) {
  console.log('Task routes loaded!');

// Name and date


// router.get('/coroner-inquest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });




  // TASK LIST
  router.get('/coroner-inquest/task-list-form', (req, res) => {
    req.session.data = req.session.data || {};
    res.render('coroner-inquest/task-list', { data: req.session.data });
  });
  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/coroner-inquest/supporting-info/prepare-for-appointment-form', (req, res) => {
    res.render('coroner-inquest/supporting-info/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/coroner-inquest/supporting-info/prepare-for-appointment-form', (req, res) => {
    // Ensure session data exists
    req.session.data = req.session.data || {};
    // Mark page as completed
    req.session.data.prepareForAppointmentCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });
 
  // 1.2: Uploads
  router.get('/coroner-inquest/supporting-info/uploads-form', (req, res) => {
    res.render('coroner-inquest/supporting-info/uploads', { data: req.session.data });
  });

  router.post('/coroner-inquest/supporting-info/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });

    // 1.2: Comments
  router.get('/coroner-inquest/supporting-info/comments-form', (req, res) => {
    res.render('coroner-inquest/supporting-info/comments', { data: req.session.data });
  });

  router.post('/coroner-inquest/supporting-info/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });
   // 2. Source of medical information

    // 2.1: Cause of death
  router.get('/coroner-inquest/cause-of-death/cause-of-death-form', (req, res) => {
    res.render('coroner-inquest/cause-of-death/cause-of-death', { data: req.session.data });
  });

  router.post('/coroner-inquest/cause-of-death/cause-of-death-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.causeDeathCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('coroner-details.html');
  }
  });

   // 2.2 : Coroner details
  router.get('/coroner-inquest/cause-of-death/coroner-details-form', (req, res) => {
    res.render('coroner-inquest/cause-of-death/coroner-details', { data: req.session.data });
  });

  router.post('/coroner-inquest/cause-of-death/coroner-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.corDetailsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('medical-info-check.html');
  }
  });

    // 2.3 Cause of death summary
  router.get('/coroner-inquest/cause-of-death/medical-info-check-form', (req, res) => {
    res.render('coroner-inquest/cause-of-death/medical-info-check', { data: req.session.data });
  });

  router.post('/coroner-inquest/cause-of-death/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
    req.session.data.codCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });

   // 3 Whose details
  

  // Cannot start yet (locked until 1 & 2 complete)
  router.get('/coroner-inquest/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    if (req.session.data.pregCompleted && req.session.data.codCompleted) {
      res.render('coroner-inquest/informant-and-details', { data: req.session.data });
    } else {
      res.redirect('task-list.html');
    }
  });

  router.post('/coroner-inquest/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoseDetailsCompleted = true;
    //res.redirect('task-list.html');
    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

// 4 child details
// 4.1 child name, sex, date
  router.get('/coroner-inquest/child-details/name-date-form', (req, res) => {
    res.render('coroner-inquest/child-details/name-date', { data: req.session.data });
  });

  router.post('/coroner-inquest/child-details/name-date-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.nameDateCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });

  // 4.2 place of stillbirth
  router.get('/coroner-inquest/child-details/place-of-stillbirth-form', (req, res) => {
    res.render('coroner-inquest/child-details/place-of-stillbirth', { data: req.session.data });
  });

  router.post('/coroner-inquest/child-details/place-of-stillbirth-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.placeCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });


    // 4.3 parents details
  router.get('/coroner-inquest/child-details/parents-details-form', (req, res) => {
    res.render('coroner-inquest/child-details/parents-details', { data: req.session.data });
  });

  router.post('/coroner-inquest/child-details/parents-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.parentsDetailsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });





// 7. Submit the registration Cannot start yet (locked until confidential stats complete)
// 7.1 Registrars details
  router.get('/coroner-inquest/submit/register-page-form', (req, res) => {
    res.render('coroner-inquest/submit/register-page', { data: req.session.data });
  });

  router.post('/coroner-inquest/submit/register-page-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.registerPageCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/coroner-inquest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../task-list.html');
  }
  });

  // 7.2 Check answers
// Route for the Check Your Answers page (GET request)
router.get('/coroner-inquest/submit/check-answers-page', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data.checkAnswersVisited = true;

  // Render the "Check your answers" page
  res.render('coroner-inquest/submit/check-answers-page', { data: req.session.data });
});


  // router.get('/coroner-inquest/submit/check-answers-form', (req, res) => {
  //   res.render('coroner-inquest/submit/check-answers-page', { data: req.session.data });
  // });

  // router.post('/coroner-inquest/submit/check-answers-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   req.session.data.checkAnswersCompleted = true;
  //   res.redirect('../task-list.html');
  // });

//need this at the end:
};