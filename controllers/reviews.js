// Packages
const express = require('express')
const router = express.Router()

// Views

router.post('/', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
		res.send('profil')		}
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
