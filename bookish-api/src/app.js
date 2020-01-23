'use strict'
const loader = require('./loaders')
const express = require('express')
const config = require('./config')

async function startServer() {
	const app = express()
	await loader(app)
	app.listen(config.port || 5000, err => {
		if (err) {
			console.log(err)
			return
		}
		console.log(`Sever running on port ${config.port}`)
	})
}

startServer()