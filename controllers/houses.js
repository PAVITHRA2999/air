// Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

//HOUSES CONTROLLER
router.get('/', async (req, res, next) => {
	try {
		//FIND HOUSES
		let houses = await Houses.find({})
		console.log(houses);
		//PASS TO TEMPLATE
		res.render('houses/list', { user: req.user, houses })
	} catch (err) {
		next(err)
	}
})


//CREATE HOUSES CONTROLLER
router.get('/create', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			// RENDER CREATE HOUSE PAGE
			res.render('houses/create', { user: req.user })
		}
	} catch(err) {
		next(err)
	}
})

//RENDER ONE-HOUSE-PAGE CONTROLLER
router.get('/:id', async (req, res, next) => {
	try {
		// FIND HOUSE + POPULATE HOST
		let house = await Houses.findById(req.params.id).populate('host')
		// PASS DATA TO TEMPLATE
		res.render('houses/one', {user: req.user, house})
	} catch (err) {
			next (err)
	}
})
//RENDER HOUSE-PAGE CONTROLLER
router.get('/:id/edit', async (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			//FIND HOUSE
			let house = await Houses.findById(req.params.id).populate('host')
			console.log(house);
			//PASS DATA TO TEMPLATE
			res.render('houses/edit', { user: req.user, house})
		}
	} catch(err) {
		next(err)
	}
})

//CREATE HOUSE CONTROLLER
router.post('/', async (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			//PASS USER-ID TO HOUSE OBJECT
			req.body.host = req.user._id
			//CREATE NEW HOUSE IN DATABASE
			let house = await Houses.create(req.body)
			//REDIRECT TO NEW HOUSE PAGE
			res.redirect(`/houses/${house._id}`)
			}
	} catch(err) {
		next(err)
	}
})

//EDIT HOUSE CONTROLLER
router.patch('/:id', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			console.log('hello');
		}
	} catch(err) {
		next(err)
	}
})

//DELETE HOUSE CONTROLLER
router.delete('/:id', (req, res, next) => {
	try {
		if (!req.isAuthenticated()){
			res.redirect('auth/login')
		} else {
			res.send('houses')
		}
	} catch(err) {
		next(err)
	}
})

// Export
module.exports = router
