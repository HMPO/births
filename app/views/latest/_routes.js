module.exports = function(router) {
  console.log('Task routes loaded!');

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });




  // TASK LIST
  router.get('/latest/task-list-form', (req, res) => {
    req.session.data = req.session.data || {};
    res.render('latest/03-tasklist', { data: req.session.data });
  });
  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/latest/supporting-info/prepare-for-appointment-form', (req, res) => {
    res.render('latest/supporting-info/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/latest/supporting-info/prepare-for-appointment-form', (req, res) => {
    // Ensure session data exists
    req.session.data = req.session.data || {};
    // Mark page as completed
    req.session.data.prepareForAppointmentCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });
 
  // 1.2: Uploads
  router.get('/latest/supporting-info/uploads-form', (req, res) => {
    res.render('latest/supporting-info/uploads', { data: req.session.data });
  });

  router.post('/latest/supporting-info/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

    // 1.2: Comments
  router.get('/latest/supporting-info/comments-form', (req, res) => {
    res.render('latest/supporting-info/comments', { data: req.session.data });
  });

  router.post('/latest/supporting-info/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
   // res.redirect('../03-tasklist.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });
   // 2. Info from certificate

    // 2.2: Cause of death
  router.get('/latest/cause-of-death/cause-of-death-form', (req, res) => {
    res.render('latest/cause-of-death/cause-of-death', { data: req.session.data });
  });

  router.post('/latest/cause-of-death/cause-of-death-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
   // res.redirect('../03-tasklist.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('medical-info-check.html');
  }
  });
    // 2.3 Cause of death summary
  router.get('/latest/cause-of-death/medical-info-check-form', (req, res) => {
    res.render('latest/cause-of-death/medical-info-check', { data: req.session.data });
  });

  router.post('/latest/cause-of-death/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
    req.session.data.codCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
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
    //res.redirect('03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('03-tasklist.html');
  }
  });

// 4 child details
// 4.1 child name, sex, date
  router.get('/latest/child-details/name-date-form', (req, res) => {
    res.render('latest/child-details/name-date', { data: req.session.data });
  });

  router.post('/latest/child-details/name-date-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.nameDateCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

  // 4.2 place of stillbirth
  router.get('/latest/child-details/place-of-stillbirth-form', (req, res) => {
    res.render('latest/child-details/place-of-stillbirth', { data: req.session.data });
  });

  router.post('/latest/child-details/place-of-stillbirth-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.placeCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });


  // 5 Parent's details
// 5.1 mothers name
  router.get('/latest/parents-details/mothers-name-form', (req, res) => {
    res.render('latest/parents-details/mothers-name', { data: req.session.data });
  });

  router.post('/latest/parents-details/mothers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersNameCompleted = true;
    //res.redirect('../03-tasklist.html');

    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

  // 5.2 mothers details
  router.get('/latest/parents-details/mothers-details-form', (req, res) => {
    res.render('latest/parents-details/mothers-details', { data: req.session.data });
  });

  router.post('/latest/parents-details/mothers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersDetailsCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

  // 5.3 fathers name
  router.get('/latest/parents-details/fathers-name-form', (req, res) => {
    res.render('latest/parents-details/fathers-name', { data: req.session.data });
  });

  router.post('/latest/parents-details/fathers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersNameCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

  // 5.4 fathers details
  router.get('/latest/parents-details/fathers-details-form', (req, res) => {
    res.render('latest/parents-details/fathers-details', { data: req.session.data });
  });

  router.post('/latest/parents-details/fathers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersDetailsCompleted = true;
   // res.redirect('../03-tasklist.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

    // 6 Statistics
// 6.1 Confidential stats
router.get('/latest/stats/confidential-form', (req, res) => {
    res.render('latest/stats/confidential', { data: req.session.data });
  });

  router.post('/latest/stats/confidential-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsConfidentialCompleted = true;
    //res.redirect('../03-tasklist.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

// 6.2 Voluntary stats
router.get('/latest/stats/voluntary-form', (req, res) => {
    res.render('latest/stats/voluntary', { data: req.session.data });
  });

  router.post('/latest/stats/voluntary-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsVoluntaryCompleted = true;
   // res.redirect('../03-tasklist.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });



// 7. Submit the registration Cannot start yet (locked until confidential stats complete)
// 7.1 Registrars details
  router.get('/latest/submit/register-page-form', (req, res) => {
    res.render('latest/submit/register-page', { data: req.session.data });
  });

  router.post('/latest/submit/register-page-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.registerPageCompleted = true;
   // res.redirect('../03-tasklist.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('../03-tasklist.html');
  }
  });

  // 7.2 Check answers
// Route for the Check Your Answers page (GET request)
router.get('/latest/submit/check-answers-page', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data.checkAnswersVisited = true;

  // Render the "Check your answers" page
  res.render('latest/submit/check-answers-page', { data: req.session.data });
});


  // router.get('/latest/submit/check-answers-form', (req, res) => {
  //   res.render('latest/submit/check-answers-page', { data: req.session.data });
  // });

  // router.post('/latest/submit/check-answers-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   req.session.data.checkAnswersCompleted = true;
  //   res.redirect('../03-tasklist.html');
  // });

//need this at the end:
};