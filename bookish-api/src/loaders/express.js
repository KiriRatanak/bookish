const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = async (app) => {
	app.get('/status', (req, res) => { res.status(200).end() })
	app.head('/status', (req, res) => { res.status(200).end() })
	app.enable('trust proxy')
	app.use(cors())
	app.use(require('morgan')('dev'))
	app.use(bodyParser.urlencoded({ extended:false }))
	app.use(bodyParser.json())
	return app
}
