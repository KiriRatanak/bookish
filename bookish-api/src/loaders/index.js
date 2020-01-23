const expressLoader = require('./express')
const mongooseLoader = require('./database')
const componentsLoader = require('./components')

module.exports = async (app) => {
	await mongooseLoader()
	console.log('DB initialized')
	await expressLoader(app)
	console.log('Express initialized')
	await componentsLoader(app)
	console.log('Components loaded')
}