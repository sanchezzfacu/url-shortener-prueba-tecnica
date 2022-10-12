const { Router } = require('express');

const createUrl = require('./createUrl.js')
const getUrls = require('./getUrls.js')
const redirect = require('./redirect.js')

const router = Router()

router.use('/createUrl', createUrl)
router.use('/getUrls', getUrls)
router.use('/redirect', redirect)

module.exports = router;
