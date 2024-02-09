const express = require('express')
const router = express.Router()



router.post("/basic-details-handler", function (req, res) {
	if (req.session.data['edit1'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-1')
	} else {
		res.redirect('new-campaign-set-up/job-information')
	}
})

router.post("/locations-handler", function (req, res) {
	var remote = req.session.data['uk']
	if (req.session.data['edit2'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else if (remote == "Remote") {
		res.redirect('new-campaign-set-up/contract-details')
	} else {
		res.redirect('new-campaign-set-up/locations-2')
	}
})

router.post("/locations-2-handler", function (req, res) {
	if (req.session.data['edit3'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/contract-details')
	}
})

router.post("/contract-details-handler", function (req, res) {
	if (req.session.data['edit4'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/grades')
	}
})

router.post("/salary-handler", function (req, res) {
	if (req.session.data['edit5'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/benefits')
	}
})

router.post("/benefits-handler", function (req, res) {
	if (req.session.data['edit6'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/contact-details')
	}
})

router.post("/contact-details-handler", function (req, res) {
	if (req.session.data['edit7'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/contact-details-2')
	}
})

router.post("/contact-details-2-handler", function (req, res) {
	if (req.session.data['edit8'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-2')
	} else {
		res.redirect('new-campaign-set-up/reserved-status')
	}
})

router.post("/about-the-role-handler", function (req, res) {
	if (req.session.data['edit9'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-3')
	} else {
		res.redirect('new-campaign-set-up/essential-criteria')
	}
})


router.post("/essential-criteria-handler", function (req, res) {
	if (req.session.data['edit10'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-3')
	} else {
		res.redirect('new-campaign-set-up/tech-criteria')
	}
})


router.post("/tech-criteria-handler", function (req, res) {
	if (req.session.data['edit11'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-3')
	} else {
		res.redirect('new-campaign-set-up/pre-sift-questions')
	}
})



router.post("/pre-sift-questions-handler", function (req, res) {
	if (req.session.data['edit12'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-3')
	} else {
		res.redirect('new-campaign-set-up/additional-info')
	}
})

router.post("/how-sift-handler", function (req, res) {
	if (req.session.data['edit13'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/interview-evidence')
	}
})

router.post("/interview-evidence-handler", function (req, res) {
	if (req.session.data['edit14'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/experience')
	}
})


router.post("/experience-handler", function (req, res) {
	if (req.session.data['edit15'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/behaviours')
	}
})


router.post("/technical-handler", function (req, res) {
	if (req.session.data['edit16'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/other-methods')
	}
})


router.post("/online-tests-handler", function (req, res) {
	if (req.session.data['edit17'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/experience')
	}
})


router.post("/behaviours-handler", function (req, res) {
	if (req.session.data['edit18'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/sift-or-interview')
	}
})



router.post("/sift-or-interview-handler", function (req, res) {
	if (req.session.data['edit19'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/strengths-change')
	}
})

router.post("/strengths-change-handler", function (req, res) {
	if (req.session.data['edit20'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-4')
	} else {
		res.redirect('new-campaign-set-up/technical')
	}
})

router.post("/approach-handler", function (req, res) {
	if (req.session.data['edit21'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-5')
	} else {
		res.redirect('new-campaign-set-up/approval')
	}
})





router.post("/approval-handler", function (req, res) {
	if (req.session.data['edit22'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-5')
	} else {
		res.redirect('new-campaign-set-up/approval-upload')
	}
})



router.post("/approval-2-handler", function (req, res) {
	if (req.session.data['edit'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-5')
	} else {
		res.redirect('new-campaign-set-up/reserve-list')
	}
})


router.post("/reserve-list-handler", function (req, res) {
	if (req.session.data['edit23'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-5')
	} else {
		res.redirect('new-campaign-set-up/attraction-methods')
	}
})

router.post("/attraction-handler", function (req, res) {
	if (req.session.data['edit24'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-5')
	} else {
		res.redirect('new-campaign-set-up/summary-section-5')
	}
})


router.post("/interviews-handler", function (req, res) {
	if (req.session.data['edit25'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-6')
	} else {
		res.redirect('new-campaign-set-up/campaign-dates')
	}
})

router.post("/campaign-dates-handler", function (req, res) {
	if (req.session.data['edit26'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-6')
	} else {
		res.redirect('new-campaign-set-up/pre-submit-reviewer')
	}
})

router.post("/pre-submit-reviewer-handler", function (req, res) {
	if (req.session.data['edit27'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-6')
	} else {
		res.redirect('new-campaign-set-up/submit')
	}
})
// router.post("/job-information-handler", function (req, res) {
//   var checked = req.session.data['answers-checked']
//
//   if (checked != "true") {
//     res.redirect('new-campaign-set-up/locations')
//   }
//   else {
//     res.redirect('new-campaign-set-up/summary-section-1')
//   }
//   })







router.post("/submit", function (req, res) {
  var reserve = req.session.data['reserve']
  if (reserve == "yes") {
    res.redirect('new-campaign-set-up/reserve-candidates')
  } else {
    res.redirect('new-campaign-set-up/summary-section-6')
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


router.post("/templates-altergo", function (req, res) {
  var template = req.session.data['template']

  if (template == "basic-details-progress") {
    res.redirect('task-list-new-campaign')

  } else {
    res.redirect('task-list')
  }

})


router.post("/locations-handler", function (req, res){
  var remote = req.session.data['uk']
  if (remote == "Remote") {
    res.redirect('new-campaign-set-up/contract-details')
  } else {
    res.redirect('new-campaign-set-up/locations-2')
  }
})


module.exports = router
