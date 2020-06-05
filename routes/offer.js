/*
create offer

step 1: list what you are willing to offer(pre filled out with profile info)

step 2: list what your needs are

step 3: give a descriptive overview

save all steps in session then submit to server once final button is clicked

return instant matches in dashboard
*/

module.exports.offerStep = async (req, res) => 
	{
	let step = req.body.step;
	let data = req.body.data;
	if (step == 0 || step == 1 || step == 2)
		{
		req.session.step[step] = data; 	
		}
	}

