const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post("/check-next-stepV5", function (req, res) {
	var src = req.session.data['source'];
	var list = req.session.data['selected'];
	var num = list.length;

	for (var a=0;a<num;a++){
		if (src == list[num]) {
			res.redirect("/v05/select-criteria-stage");
		} else if (src == list[a]){
			a=a+1;
			res.redirect("/v05/select-"+list[a]);
			break;
		}
	}
})

router.get("/selection-handlerV5", function (req, res) {
  var list = req.session.data['selected'];


  for (var i=0;i<1;i++){
    res.redirect("/v05/select-"+list[i]);
  }

  })


module.exports = router
