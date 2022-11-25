// PACKAGES
const express = require('express')
const router = express.Router()

//MOLDEL IMPORT
const Users = require('../models/users')


//GET LOGIN CONTROLLER
router.get('/login', (req, res) => {
	res.render('login')
})

//GET SIGNUP CONTROLLER
router.get('/signup', (req, res) => {
	res.render('signup')
})

//POST LOGIN CONTROLLER
router.post('/login', async (req, res, next) => {
	try {
		//USER/PW CHECK
		let searchUser = await Users.findOne({
			email: req.body.email,
			password: req.body.password
		})
		//LOGIN CHECK
		if (searchUser) {
			req.login(searchUser, (err) => {
				if (err) {
					throw err
				} else {
					res.redirect('/houses')
				}
			})
		} else {
			throw new Error('Wrong Username/Password Combination')
		}

	} catch(err) {
			next(err)
	}
})

//POST SINGNUP CONTROLLER
router.post('/signup', async (req, res, next) => {
	try {
	//USER EXSISTENCE CHECK
		let searchUser = await Users.findOne({email: req.body.email })
		console.log({searchUser});
		if (searchUser) {
			throw new Error('User-Email alread exsists')
		} else {
			let newUser = await Users.create(req.body)
	//LOGIN AUTOMATION
			req.login(newUser, (err) => {
				if (err) {
					throw err
				} else {
					res.redirect('/houses')
				}
			})
		}
	} catch(err) {
			next(err)
	}
})

router.get('/logout', (req, res, next) => {
	try {
		req.logout()
		req.session.destroy(err => {
			if (err) {
				next(err)
			}
			res.clearCookie('connect.sid')
			res.redirect('/auth/login')
		})
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
