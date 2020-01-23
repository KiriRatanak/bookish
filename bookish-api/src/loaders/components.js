const components = require('../components')

module.exports = async (app) => {
	await components(app)
	return app
}