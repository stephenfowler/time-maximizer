// import Express from 'express'
// import Webtask from 'webtask-tools'
// import bodyParser from 'body-parser'

// import {connectDisconnect} from './DbConnector'
// import mediaRoutes from './Routes/DBCrudFunctions'
// import SMSRoutes from './Routes/SMSFunctions'

// const app = Express()

// app.use(bodyParser.urlencoded({urlencoded: false}))
// app.use(bodyParser.json())

// app.use(connectDisconnect)
// mediaRoutes(app)
// SMSRoutes(app)



'use strict';

const Webtask = require('webtask-tools');
const api = require('./src/api');

api.boot()

module.exports = Webtask.fromRestify(api)