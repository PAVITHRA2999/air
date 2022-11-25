const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('bookings', {
	author: {
		type: ObjectId,
		ref: 'users'
	},
	date: {
		type: ObjectId,
		ref: 'houses'
	},
	description: {
		type: String,
		required: true
	},
	house: {
		type: ObjectId,
		ref: 'houses'
	},

})
