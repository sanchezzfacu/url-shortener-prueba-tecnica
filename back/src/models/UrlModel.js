const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    fullUrlVersion: {
        type: String,
        required: true,
    },
    shortUrlVersion: {
        type: String,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)