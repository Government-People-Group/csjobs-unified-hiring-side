const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post("/location-handler", function (req, res) {
	var locType = req.session.data['uk'];

		if (locType == "Remote") {
			res.redirect("new-campaign-set-up/contract-details");
		} else {
			res.redirect("new-campaign-set-up/locations-test");
		}
})


router.post("/location-handlerBlank", function (req, res) {
	var locType = req.session.data['uk'];

		if (locType == "Remote") {
			res.redirect("blank-campaign-set-up/contract-details");
		} else {
			res.redirect("blank-campaign-set-up/locations-test");
		}
})


router.post("/location-handlerAdCopy", function (req, res) {
	var locType = req.session.data['uk'];

		if (locType == "Remote") {
			res.redirect("adcopy-campaign-set-up/contract-details");
		} else {
			res.redirect("adcopy-campaign-set-up/locations-test");
		}
})


// router.post("/locations-handler", function (req, res) {
// 	var remote = req.session.data['uk']
// 	// if (req.session.data['edit2'] == "true") {
// 		res.redirect('new-campaign-set-up/summary-section-2')
// 	} else if (remote == "Remote") {
// 		res.redirect('new-campaign-set-up/contract-details')
// 	} else {
// 		res.redirect('new-campaign-set-up/locations-2')
// 	}
// })






router.post("/templateSelected", function (req, res) {

var ret = req.session.data['path'];
var template = req.session.data['org'];
var tmp = req.session.data['templateSelected']

console.log(tmp)

if (ret != ""){
	res.redirect("new-campaign-set-up/"+ret);

} else {
	res.redirect("/csu71/task-list-exp-co?template={{data['org']}}&banner=show");
}
})




router.post("/check-next-stepV5", function (req, res) {
	var src = req.session.data['source'];
	var list = req.session.data['selected'];
	var num = list.length;
console.log(src)
console.log(list)

	for (var a=0;a<num;a++){
		if (src == list[num]) {
			res.redirect("new-campaign-set-up/select-criteria-stage");
		} else if (src == list[a]){
			a=a+1;
			res.redirect("new-campaign-set-up/select-"+list[a]+"?template={{data['template']}}");
			break;
		}
	}
})


router.post("/check-next-stepAdCopy", function (req, res) {
	var src = req.session.data['source'];
	var list = req.session.data['selected'];
	var num = list.length;
console.log(src)
console.log(list)

	for (var a=0;a<num;a++){
		if (src == list[num]) {
			res.redirect("adcopy-campaign-set-up/select-criteria-stage");
		} else if (src == list[a]){
			a=a+1;
			res.redirect("adcopy-campaign-set-up/select-"+list[a]);
			break;
		}
	}
})

router.post("/check-next-stepBlank", function (req, res) {
	var src = req.session.data['source'];
	var list = req.session.data['selected'];
	var num = list.length;
console.log(src)
console.log(list)

	for (var a=0;a<num;a++){
		if (src == list[num]) {
			res.redirect("blank-campaign-set-up/select-criteria-stage");
		} else if (src == list[a]){
			a=a+1;
			res.redirect("blank-campaign-set-up/select-"+list[a]);
			break;
		}
	}
})




router.get("/methods-handler", function (req, res) {
  var choices = req.session.data['sift-method'].choices;
	var src = req.session.data['source'];
	var num = choices.length;


	for (var a=0;a<num;a++){
		if (src == choices[num]) {
			res.redirect("/csu71/home");
		} else if (src == choices[a]){
			a=a+1;
			res.redirect("new-campaign-set-up/select-"+choices[a]);
			break;
		}
	}
})




router.get("/selection-handlerV5", function (req, res) {
  var list = req.session.data['selected'];
console.log(list)

  for (var i=0;i<1;i++){
    res.redirect("/csu71/new-campaign-set-up/select-"+list[i]);
  }

  })

	router.get("/selection-handlerAdcopy", function (req, res) {
	  var list = req.session.data['selected'];
	console.log(list)

	  for (var i=0;i<1;i++){
	    res.redirect("/csu71/adcopy-campaign-set-up/select-"+list[i]);
	  }

	  })


		router.get("/selection-handlerBlank", function (req, res) {
		  var list = req.session.data['selected'];
		console.log(list)

		  for (var i=0;i<1;i++){
		    res.redirect("/csu71/blank-campaign-set-up/select-"+list[i]);
		  }

		  })


router.post("/basic-details-handler", function (req, res) {
	if (req.session.data['edit1'] == "true") {
		res.redirect('new-campaign-set-up/summary-section-1')
	} else {
		res.redirect('new-campaign-set-up/reserved-status-role')
	}
})

router.post("/basic-details-handlerAdcopy", function (req, res) {
	if (req.session.data['edit1'] == "true") {
		res.redirect('adcopy-campaign-set-up/summary-section-1')
	} else {
		res.redirect('adcopy-campaign-set-up/reserved-status-role')
	}
})

router.post("/basic-details-handlerBlank", function (req, res) {
	if (req.session.data['edit1'] == "true") {
		res.redirect('blank-campaign-set-up/summary-section-1')
	} else {
		res.redirect('blank-campaign-set-up/reserved-status-role')
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
		res.redirect('new-campaign-set-up/salary-and-benefits')
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
		res.redirect('new-campaign-set-up/attraction-methods')
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

router.post("/csu71/approval-altergo", function (req, res) {
  var approved = req.session.data['approval-status']
  if (approved == "Yes - approved")  {
    res.redirect('new-campaign-set-up/approval-upload')
  } else {
    res.redirect('new-campaign-set-up/reserve-list')
  }
})


router.post("/templates-altergo", function (req, res) {
  var template = req.session.data['template']

  if (template == "commando") {
    res.redirect('task-list-new-campaign')

  } else if (template == "csofficial"){
    res.redirect('template-csofficial')
	} else if (template == "preselected") {
		res.redirect('template-ad-duplicate')
		// res.redirect('task-list-exp-copy-ad')
  } else if (template == "duplicate") {
		res.redirect('template-ad-duplicate')

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
