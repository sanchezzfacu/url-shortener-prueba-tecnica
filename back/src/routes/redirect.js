const express = require('express')
const router = express.Router()
const UrlModel = require('../models/UrlModel')

router.get('/:shortUrl', async (req, res) => {
    try {
        const shortUrl = await UrlModel.findOne({shortUrlVersion: req.params.shortUrl})
    
        shortUrl.clicks++
        shortUrl.save()
    
        res.status(200).send(shortUrl.fullUrlVersion)
    } catch (error) {
        res.sendStatus(404)
        throw new Error
    }
})

module.exports = router