module.exports = function (router) {
    console.log('Loading multipleBirths3 routes file');

    router.post('/births/multipleBirths3/tasks', function (req, res) {
        req.session.data = req.session.data || {};
        if (req.body.livingPlace) {
            console.log('This is a PLACE OF BIRTH form submission');
            req.session.data.placeCompleted = true;
            req.session.data.livingPlace = req.body.livingPlace;
            if (req.body['communal-name']) {
                req.session.data.communalName = req.body['communal-name'];
            }
        }

        else if (req.body.childFirstName || req.body.childLastName || req.body.sex) {
            console.log('This is a NAME-DATE form submission');
            const hasName = req.body.childFirstName || req.body.childLastName;
            const hasSex = req.body.sex;

            if (hasName && hasSex) {
                req.session.data.nameDateCompleted = true;
            }
            req.session.data.childFirstName = req.body.childFirstName;
            req.session.data.childLastName = req.body.childLastName;
            req.session.data.sex = req.body.sex;
        }

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/childsDetails/name-date-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasName = req.body.childFirstName || req.body.childLastName;
        const hasSex = req.body.sex;

        if (hasName && hasSex) {
            req.session.data.nameDateCompleted = true;
        }
        req.session.data.childFirstName = req.body.childFirstName;
        req.session.data.childLastName = req.body.childLastName;
        req.session.data['name-order'] = req.body['name-order'];
        req.session.data['custom-order'] = req.body['custom-order'];
        req.session.data['dob-day'] = req.body['dob-day'];
        req.session.data['dob-month'] = req.body['dob-month'];
        req.session.data['dob-year'] = req.body['dob-year'];
        req.session.data['dob-hour'] = req.body['dob-hour'];
        req.session.data['dob-minute'] = req.body['dob-minute'];
        req.session.data['dob-period'] = req.body['dob-period'];
        req.session.data.sex = req.body.sex;

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/parentsDetails/mothers-name-check', function (req, res) {
        req.session.data = req.session.data || {};
        const hasFirstName = req.body.mothersFirstName?.trim();
        const hasLastName = req.body.mothersLastName?.trim();

        if (hasFirstName && hasLastName) {
            req.session.data.mothersNameCompleted = true;
        }
        req.session.data.mothersFirstName = req.body.mothersFirstName;
        req.session.data.mothersMiddleName = req.body.mothersMiddleName;
        req.session.data.mothersLastName = req.body.mothersLastName;
        req.session.data.mothersMaidenName = req.body.mothersMaidenName;
        req.session.data.mothersLastMarriageName = req.body.mothersLastMarriageName;
        req.session.data['name-order'] = req.body['name-order'];
        req.session.data['custom-order'] = req.body['custom-order'];

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/parentsDetails/mothers-details-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasTown = req.body.addressTown?.trim();

        if (hasTown) {
            req.session.data.mothersDetailsCompleted = true;
        }

        req.session.data.mothersPlaceOfBirth = req.body.mothersPlaceOfBirth;
        req.session.data.mothersCountryOfBirth = req.body.mothersCountryOfBirth;
        req.session.data.SpanishNational = req.body.SpanishNational;
        req.session.data.mothersOccupation = req.body.mothersOccupation;
        req.session.data.MCCDAddressLine1 = req.body.MCCDAddressLine1;
        req.session.data.fatherdeceased = req.body.fatherdeceased;

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/parentsDetails/fathers-name-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasFirstName = req.body.fathersFirstName?.trim();
        const hasLastName = req.body.fathersLastName?.trim();

        if (hasFirstName && hasLastName) {
            req.session.data.fathersNameCompleted = true;
        }

        req.session.data.fathersFirstName = req.body.fathersFirstName;
        req.session.data.fathersMiddleName = req.body.fathersMiddleName;
        req.session.data.fathersLastName = req.body.fathersLastName;
        req.session.data['name-order'] = req.body['name-order'];
        req.session.data['custom-order'] = req.body['custom-order'];

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/parentsDetails/fathers-details-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasPlaceOfBirth = req.body.fathersPlaceOfBirth?.trim();

        if (hasPlaceOfBirth) {
            req.session.data.fathersDetailsCompleted = true;
        }
        req.session.data.fathersPlaceOfBirth = req.body.fathersPlaceOfBirth;
        req.session.data.fathersCountryOfBirth = req.body.fathersCountryOfBirth;
        req.session.data.SpanishNational = req.body.SpanishNational;
        req.session.data.fathersOccupation = req.body.fathersOccupation;
        req.session.data.fathersMCCDAddressLine1 = req.body.fathersMCCDAddressLine1;
        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/stats/confidential-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasMotherDOB = req.body.motherDOBknown;
        const hasFatherDOB = req.body.fatherDOBknown;
        const hasMarriageDate = req.body.marriageDateKnown;
        const hasPreviousMarriage = req.body.previousMarriageMother;
        const hasLiveBirths = req.body.liveBirthsMother;

        if (hasMotherDOB || hasFatherDOB || hasMarriageDate || hasPreviousMarriage || hasLiveBirths) {
            req.session.data.statsConfidentialCompleted = true;
        }

        req.session.data['mother-dob-day'] = req.body['mother-dob-day'];
        req.session.data['mother-dob-month'] = req.body['mother-dob-month'];
        req.session.data['mother-dob-year'] = req.body['mother-dob-year'];
        req.session.data['father-dob-day'] = req.body['father-dob-day'];
        req.session.data['father-dob-month'] = req.body['father-dob-month'];
        req.session.data['father-dob-year'] = req.body['father-dob-year'];
        req.session.data.marriageDateKnown = req.body.marriageDateKnown;
        req.session.data['marriageDate-day'] = req.body['marriageDate-day'];
        req.session.data['marriageDate-month'] = req.body['marriageDate-month'];
        req.session.data['marriageDate-year'] = req.body['marriageDate-year'];
        req.session.data.previousMarriageMother = req.body.previousMarriageMother;
        req.session.data.liveBirthsMother = req.body.liveBirthsMother;
        req.session.data.numberOfChildrenBornAlive = req.body.numberOfChildrenBornAlive;
        req.session.data.stillbirthsMother = req.body.stillbirthsMother;
        req.session.data.numberOfStillbornChildren = req.body.numberOfStillbornChildren;

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/stats/voluntary-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasMotherEmployment = req.body['employment-mother'];
        const hasFatherEmployment = req.body['employment-father'];

        if (hasMotherEmployment || hasFatherEmployment) {
            req.session.data.statsVoluntaryCompleted = true;
        }

        if (req.body['employment-mother']) {
            req.session.data['employment-mother'] = req.body['employment-mother'];
        }

        if (req.body['employment-father']) {
            req.session.data['employment-father'] = req.body['employment-father'];
        }

        if (req.body.industry) {
            req.session.data.industry = req.body.industry;
        }

        if (req.body['industry-father']) {
            req.session.data['industry-father'] = req.body['industry-father'];
        }

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/submit/register-check', function (req, res) {
        req.session.data = req.session.data || {};

        const hasRegistrarName = req.body.registrarName && req.body.registrarName.trim();
        const hasDesignation = req.body.designationSelector;

        if (hasRegistrarName || hasDesignation) {
            req.session.data.registerPageCompleted = true;
            req.session.data.checkAnswersCompleted = false;
        }

        if (req.body.registrarName) {
            req.session.data.registrarName = req.body.registrarName;
        }

        if (req.body.designationSelector) {
            req.session.data.designationSelector = req.body.designationSelector;
        }

        res.redirect('/births/multipleBirths3/tasks/');
    });

    router.post('/births/multipleBirths3/submit/check-answers-complete', function (req, res) {
        req.session.data = req.session.data || {};

        req.session.data.checkAnswersCompleted = true;

        res.redirect('/births/multipleBirths3/submit/confirmation');
    });

    router.post('/births/multipleBirths3/child2Details/place-check', function (req, res) {
        req.session.data = req.session.data || {};

        if (req.body.whereDoYouLive) {
            req.session.data['child2-whereDoYouLive'] = req.body.whereDoYouLive;
        }

        if (req.body.addressLine1) {
            req.session.data['child2-addressLine1'] = req.body.addressLine1;
        }
        if (req.body.addressLine2) {
            req.session.data['child2-addressLine2'] = req.body.addressLine2;
        }
        if (req.body.addressTown) {
            req.session.data['child2-addressTown'] = req.body.addressTown;
        }
        if (req.body.addressCounty) {
            req.session.data['child2-addressCounty'] = req.body.addressCounty;
        }
        if (req.body.addressPostcode) {
            req.session.data['child2-addressPostcode'] = req.body.addressPostcode;
        }

        req.session.data.child2PlaceCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/child2Details/name-date-check', function (req, res) {
        req.session.data = req.session.data || {};

        if (req.body['child2-deceasedFirstName']) {
            req.session.data['child2-deceasedFirstName'] = req.body['child2-deceasedFirstName'];
        }
        if (req.body['child2-deceasedMiddleName']) {
            req.session.data['child2-deceasedMiddleName'] = req.body['child2-deceasedMiddleName'];
        }
        if (req.body['child2-deceasedLastName']) {
            req.session.data['child2-deceasedLastName'] = req.body['child2-deceasedLastName'];
        }
        if (req.body['child2-name-order']) {
            req.session.data['child2-name-order'] = req.body['child2-name-order'];
        }
        if (req.body['child2-custom-order']) {
            req.session.data['child2-custom-order'] = req.body['child2-custom-order'];
        }

        if (req.body['child2-dob-day']) {
            req.session.data['child2-dob-day'] = req.body['child2-dob-day'];
        }
        if (req.body['child2-dob-month']) {
            req.session.data['child2-dob-month'] = req.body['child2-dob-month'];
        }
        if (req.body['child2-dob-year']) {
            req.session.data['child2-dob-year'] = req.body['child2-dob-year'];
        }
        if (req.body['child2-dob-hour']) {
            req.session.data['child2-dob-hour'] = req.body['child2-dob-hour'];
        }
        if (req.body['child2-dob-minute']) {
            req.session.data['child2-dob-minute'] = req.body['child2-dob-minute'];
        }
        if (req.body['child2-dob-second']) {
            req.session.data['child2-dob-second'] = req.body['child2-dob-second'];
        }
        if (req.body['child2-dob-period']) {
            req.session.data['child2-dob-period'] = req.body['child2-dob-period'];
        }

        if (req.body['child2-sex']) {
            req.session.data['child2-sex'] = req.body['child2-sex'];
        }

        req.session.data.child2NameDateCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/parentsDetailsChild2/mothers-name-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2MothersNameCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/parentsDetailsChild2/mothers-details-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2MothersDetailsCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/parentsDetailsChild2/fathers-name-check', function (req, res) {
        req.session.data = req.session.data || {};


        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2FathersNameCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/parentsDetailsChild2/fathers-details-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2FathersDetailsCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/statsChild2/confidential-check', function (req, res) {
        req.session.data = req.session.data || {};


        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2StatsConfidentialCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/statsChild2/voluntary-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2StatsVoluntaryCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/submitChild2/register-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2RegisterPageCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/submitChild2/check-answers-complete', function (req, res) {
        req.session.data = req.session.data || {};

        req.session.data.child2CheckAnswersCompleted = true;

        res.redirect('/births/multipleBirths3/submitChild2/confirmation-page-child2');
    });

    router.post('/births/multipleBirths3/additionalInfoChild2/comments-check', function (req, res) {
        req.session.data = req.session.data || {};

        Object.keys(req.body).forEach(key => {
            req.session.data[`child2-${key}`] = req.body[key];
        });

        req.session.data.child2CommentsCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.get('/births/multipleBirths3/submitChild2/confirmation-page-child2', function (req, res) {

        req.session.data = {};

        res.render('births/multipleBirths3/submitChild2/confirmation-page-child2');
    });


    router.get('/births/multipleBirths3/child2/mark-complete', function (req, res) {
        req.session.data = req.session.data || {};

        req.session.data.child2PlaceCompleted = true;
        req.session.data.child2NameDateCompleted = true;

        res.redirect('/births/multipleBirths3/tasks/child2index.html');
    });

    router.post('/births/multipleBirths3/additionalInfo/comments-check', function (req, res) {
        req.session.data = req.session.data || {};

        if (req.body.comments) {
            req.session.data.comments = req.body.comments;
        }

        const referer = req.get('Referer') || '/births/multipleBirths3/tasks/';
        res.redirect(referer.replace('/additionalInfo/comments', '/tasks/'));
    });

    router.post('/births/multipleBirths3/additionalInfoChild2/comments-check', function (req, res) {
        req.session.data = req.session.data || {};

        if (req.body.comments) {
            req.session.data.comments = req.body.comments;
        }

        const referer = req.get('Referer') || '/births/multipleBirths3/tasks/child2index.html';
        res.redirect(referer.replace('/additionalInfoChild2/commentsChild2', '/tasks/child2index.html'));
    });
};