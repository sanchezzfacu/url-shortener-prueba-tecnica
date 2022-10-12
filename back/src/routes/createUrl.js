const express = require('express')
const router = express.Router()
const ShortUrl = require('../models/UrlModel')

router.post('/', async (req, res) => {
    let { fullUrlVersion } = req.body
    try {
        let urlCreated = await ShortUrl.create({ fullUrlVersion : fullUrlVersion })
        let saveUrlCreated = await ShortUrl.findOne({fullUrlVersion: urlCreated.fullUrlVersion})
        console.log(saveUrlCreated)
        res.send(saveUrlCreated).status(200)
    }
    catch(error) {
        res.send(error.message)
        res.status(500)
    }
})

module.exports = router