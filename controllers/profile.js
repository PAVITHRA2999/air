// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')


// Views

router.get('/', async (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			//FIND AND LIST ALL USER HOUSES
			let houses = await Houses.find({host: req.user})
			res.render('profile', {
				user: req.user,
				houses
			})
		}
	} catch(err) {
		next(err)
	}
})


router.patch('/', async (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			//FIND AND UPDATE USER
			{{host: req.user._id}}
			let user = await Users.findByIdAndUpdate(req.user._id, req.body, {new: true})
			console.log(user);
			req.login(user, (err) => {
				if (err) {
					throw err
				} else {
					res.redirect('/profile')
				}
			})
		}
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
