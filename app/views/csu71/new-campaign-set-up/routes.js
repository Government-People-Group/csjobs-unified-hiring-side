const express = require('express')
const router = express.Router()



const express = require('express')
const router = express.Router()

// Job library entry




// summary1
// router.post('/', function (req, res) {
//
// if (summary1 == "true") {
//   res.redirect('new-campaign-set-up/summary-section-1')
// } else {
//   res.redirect('new-campaign-set-up/basic-details')
// }
// })

// router.post('/', function (req, res) {
//
//   if (summary1 == "true") {
//     res.redirect('new-campaign-set-up/summary-section-1')
//   }
//   })
//

// summary2

router.post("/locations-altergo", function (req, res) {
  var remote = req.session.data['uk']
  if (remote == "Remote") {
      res.redirect('new-campaign-set-up/contract-details')
  } else {
    res.redirect('new-campaign-set-up/locations-2')
  }
    })


    router.post("/submit", function (req, res) {
      var reserve = req.session.data['reserve']
      if (reserve == "yes") {
          res.redirect('new-campaign-set-up/reserve-candidates')
      } else {
        res.redirect('new-campaign-set-up/summary-section-6')
      }
        })



// summary3

router.post("/templates-altergo", function (req, res) {
  var template = req.session.data['template']

  if (template == "basic-details-progress") {
    res.redirect('task-list-new-campaign')

  } else {
    res.redirect('task-list')
  }

})
router.post("/basic-details-alterego", function (req, res) {
  var checker = req.session.data['summary1']

if (checker == "true") {
  res.redirect('new-campaign-set-up/summary-section-1')

} else {
    res.redirect('new-campaign-set-up/job-information')
}

})


router.post("/job-information", (req, res, next) => {
res.render('job-information')
})


  if (req.session.data['summary1'] == "true") {
    res.redirect('new-campaign-set-up/summary-section-1')

  } else {
    res.redirect('new-campaign-set-up/job-information')
  }

})








router.post("/approval-altergo", function (req, res) {
  var approved = req.session.data['approval-status']
  if (approved == "Yes - approved")  {
    res.redirect('new-campaign-set-up/approval-upload')
  } else {
    res.redirect('new-campaign-set-up/reserve-list')
  }
})

// router.post("/locations2-altergo", function (req, res) {
//   var check = req.session.data['bpss-correct']

//   if (check !== "") {
//     res.redirect('new-campaign-set-up/summary-section-2')

//   } else {
//     res.redirect('new-campaign-set-up/contract-details')
//   }
// })

router.post("/locations2-altergo", function (req, res) {
if (req.session.data['edit'] == "true") {
  res.redirect('new-campaign-set-up/summary-section-2')

} else {
  res.redirect('new-campaign-set-up/contract-details')
}
})


router.post("contract-details", function (req, res) {
  if (req.session.data['edit'] == "true") {
    res.redirect('new-campaign-set-up/summary-section-2')

  } else {
    res.redirect('new-campaign-set-up/grades')
  }
})

// router.post("/locations-altergo", function (req, res) {
//   var remote = req.session.data['uk']
//   var number = req.session.data['number-loc']
//     if (remote == "Remote") {
//       res.redirect('new-campaign-set-up/contract-details')
//   } elseif (req.session.data['edit'] == "true") {
//     res.redirect('new-campaign-set-up/summary-section-2')
//   } else {
//     res.redirect('new-campaign-set-up/locations-2')
//   }
//     })

    router.post("/contract-details-altergo", function (req, res) {
      res.redirect('new-campaign-set-up/grades')
})

        router.post("/contract-details-altergo", function (req, res) {
          var contract = req.session.data['contract']
            if (contract !== "") {
              if (req.session.data['edit'] == "true"){
                res.redirect('new-campaign-set-up/summary-section-2')
              } else {
                res.redirect('new-campaign-set-up/grades')
              }
            } else {
              res.redirect('new-campaign-set-up/grades')

            }
          })


    router.post("/grades-altergo", function (req, res) {
            res.redirect('new-campaign-set-up/benefits')
      })


router.post("/jobinfo-altergo", function (req, res) {
  res.redirect('new-campaign-set-up/summary-section-1')
})

router.post("/attract-altergo", function (req, res) {
  res.redirect('new-campaign-set-up/summary-section-5')
})

// router.post('/doIt', function (req, res, next) => {
//   const { data } = req.session;
//   const basic = data.basic;
// })
//
// router.post('/check', function (req, res, next) {
//   const { data } = req.session;
//   const section1 = data.section1;
//
//   if (section1.id) {
//     amendSection1(data.sectionIndex, section1);
//   } else {
//     section1.id = data.sectionIndex.length +1;
//     data.sectionIndex.push(section1);
//   }
//   res.render('/summary-section-1', { section1: data.section1 });
// })







module.exports = router




// Job library entry

router.post("/templates-alterego", function (req, res) {
  var template = req.session.data['template']

if (template == "no") {
  res.redirect('task-list-new-campaign')

} else {
    res.redirect('task-list')
}

})

router.post("/basic-details-alterego", function (req, res) {
  var checker = req.session.data['answers-checked1']

if (checker == "true") {
  res.redirect('new-campaign-set-up/summary-section-1')

} else {
    res.redirect('new-campaign-set-up/job-information')
}

})

router.post("/locations-altergo", function (req, res) {
  var remote = req.session.data['uk']
  var number = req.session.data['number-loc']

if (remote == "Remote") {
  res.redirect('new-campaign-set-up/contract-details')

} else {
    res.redirect('new-campaign-set-up/locations-2')
    if (number == "1") {
      res.render()
    }
}

})

module.exports = router
