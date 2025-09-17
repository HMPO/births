module.exports = function(router) {
  

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });




  // // TASK LIST
 router.get('/births/v1/task-list-inf-form', (req, res) => {
  req.session.data = req.session.data || {};
   res.render('task-list', { data: req.session.data });
 });



  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/births/v1/prepare-for-appointment-form', (req, res) => {
    res.render('supporting-info/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/births/v1/prepare-for-appointment-form', (req, res) => {
    // Ensure session data exists
    req.session.data = req.session.data || {};
    // Mark page as completed
    req.session.data.prepareForAppointmentCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });
 
  // 1.2: Uploads
  router.get('/births/v1/uploads-form', (req, res) => {
    res.render('supporting-info/uploads', { data: req.session.data });
  });

  router.post('/births/v1/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 1.2: Comments
  router.get('/births/v1/comments-form', (req, res) => {
    res.render('supporting-info/comments', { data: req.session.data });
  });

  router.post('/births/v1/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });


   // 2. Info from certificate


   // 2.0 f35 reason
  router.get('/births/v1/f35-reason-form', (req, res) => {
    res.render('cause-of-death/f35-reason', { data: req.session.data });
  });

  router.post('/births/v1/f35-reason-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.f35ReasonCompleted = true;
    res.redirect('task-list.html');
  //    if (req.session.data.checkAnswersVisited) {
  //   // If "Check your answers" has been visited, redirect back to it
  //   res.redirect('submit/check-answers-page');
  // } else {
  //   // Otherwise, redirect to the next page in the journey (Father's Name page)
  //   res.redirect('task-list.html');
  // }
  });

  // 2.1: Pregnancy and delivery
  router.get('/births/v1/pregnancy-del-form', (req, res) => {
    res.render('cause-of-death/pregnancy-delivery', { data: req.session.data });
  });

  router.post('/births/v1/pregnancy-del-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('cause-of-death/cause-of-death.html');
  }
  });


    // 2.2: Cause of death
  router.get('/births/v1/cause-of-death-form', (req, res) => {
    res.render('cause-of-death/cause-of-death', { data: req.session.data });
  });

  router.post('/births/v1/cause-of-death-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.codCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

 // 2.2 : Coroner details
  router.get('/births/v1/coroner-details-form', (req, res) => {
    res.render('cause-of-death/coroner-details', { data: req.session.data });
  });

  router.post('/births/v1/coroner-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.corDetailsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/births/v1/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });




    // 2.3 Cause of death summary
  router.get('/births/v1/medical-info-check-form', (req, res) => {
    res.render('cause-of-death/medical-info-check', { data: req.session.data });
  });

  router.post('/births/v1/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
    req.session.data.codCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

   // 3 Whose details
  

  // Cannot start yet (locked until 1 & 2 complete)
  // router.get('/births/v1/whose-details-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   if (req.session.data.pregCompleted && req.session.data.codCompleted) {
  //     res.render('/births/v1/informant-and-details', { data: req.session.data });
  //   } else {
  //     res.redirect('task-list.html');
  //   }
  // });

  router.post('/births/v1/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoseDetailsCompleted = true;
    //res.redirect('task-list.html');
    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });



// 4 child details
// 4.1 child name, sex, date
  router.get('/births/v1/name-date-form', (req, res) => {
    res.render('child-details/name-date', { data: req.session.data });
  });

  router.post('/births/v1/name-date-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.nameDateCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 4.2 place of stillbirth
  router.get('/births/v1/place-of-stillbirth-form', (req, res) => {
    res.render('child-details/place-of-stillbirth', { data: req.session.data });
  });

  router.post('/births/v1/place-of-stillbirth-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.placeCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });


  // 5 Parent's details
// 5.1 mothers name
  router.get('/births/v1/mothers-name-form', (req, res) => {
    res.render('parents-details/mothers-name', { data: req.session.data });
  });

  router.post('/births/v1/mothers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersNameCompleted = true;
    //res.redirect('../task-list.html');

    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.2 mothers details
  router.get('/births/v1/mothers-details-form', (req, res) => {
    res.render('parents-details/mothers-details', { data: req.session.data });
  });

  router.post('/births/v1/mothers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersDetailsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.3 fathers name
  router.get('/births/v1/fathers-name-form', (req, res) => {
    res.render('parents-details/fathers-name', { data: req.session.data });
  });

  router.post('/births/v1/fathers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersNameCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.4 fathers details
  router.get('/births/v1/fathers-details-form', (req, res) => {
    res.render('parents-details/fathers-details', { data: req.session.data });
  });

  router.post('/births/v1/fathers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersDetailsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 6 Statistics
// 6.1 Confidential stats
router.get('/births/v1/confidential-form', (req, res) => {
    res.render('stats/confidential', { data: req.session.data });
  });

  router.post('/births/v1/confidential-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsConfidentialCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

// 6.2 Voluntary stats
router.get('/births/v1/voluntary-form', (req, res) => {
    res.render('stats/voluntary', { data: req.session.data });
  });

  router.post('/births/v1/voluntary-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsVoluntaryCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });



// 7. Submit the registration Cannot start yet (locked until confidential stats complete)
// 7.1 Registrars details
  router.get('/births/v1/register-page-form', (req, res) => {
    res.render('submit/register-page', { data: req.session.data });
  });

  router.post('/births/v1/register-page-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.registerPageCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/births/v1/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 7.2 Check answers
// Route for the Check Your Answers page (GET request)
router.get('/births/v1/submit/check-answers-page', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data.checkAnswersVisited = true;

  // Render the "Check your answers" page
  res.render('/births/v1/submit/check-answers-page', { data: req.session.data });
});


  // router.get('/latest/submit/check-answers-form', (req, res) => {
  //   res.render('latest/submit/check-answers-page', { data: req.session.data });
  // });

  // router.post('/latest/submit/check-answers-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   req.session.data.checkAnswersCompleted = true;
  //   res.redirect('../task-list.html');
  // });

//need this at the end:
};