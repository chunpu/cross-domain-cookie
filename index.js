var express = require('express')
var app = express()
var cors = require('cors')
var http = require('http')
var cookieParser = require('cookie-parser')

var NO_CORS_REQUEST = 'no-cors-request'
var CORS_REQUEST = 'cors-request'

app.use(cookieParser())
app.use(cors({origin: true, credentials: true}))
app
	.use('/static', express.static(__dirname + '/static'))
	.get('/' + NO_CORS_REQUEST, (req, res) => {
		res.cookie(NO_CORS_REQUEST, NO_CORS_REQUEST, {maxAge: 9000000000, domain: req.headers.host})
		res.send(NO_CORS_REQUEST)
	})
	.get('/' + CORS_REQUEST, (req, res) => {
		res.cookie(CORS_REQUEST, CORS_REQUEST, {maxAge: 9000000000, domain: req.headers.host})
		res.send(CORS_REQUEST)
	})
	.get('/cookie', (req, res) => {
		res.send(req.cookies)
	})

var server1 = http.createServer(app)
var server2 = http.createServer(app)

server1.listen(80)
server1.listen(3000)
server2.listen(3001)