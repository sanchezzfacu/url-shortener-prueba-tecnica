const express = require('express')
const router = express.Router()
const UrlModel = require('../models/UrlModel')

router.get('/', async (req, res) => {
    try {
        const shortUrls = await UrlModel.find({})
        res.send(shortUrls)
    }
    catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router