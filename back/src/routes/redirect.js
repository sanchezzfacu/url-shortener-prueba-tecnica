const express = require('express')
const router = express.Router()
const UrlModel = require('../models/UrlModel')

router.get('/:shortUrl', async (req, res) => {
    try {
        const shortUrl = await UrlModel.findOne({shortUrlVersion: req.params.shortUrl})
    
        shortUrl.clicks++
        shortUrl.save()
    
        res.status(200).send(shortUrl.fullUrlVersion)
    } catch (err) {
        res.status(404).send(err)
    }
})

module.exports = router