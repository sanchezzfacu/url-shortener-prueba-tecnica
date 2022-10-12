const app = require('./src/index')
const mongoose = require('mongoose')
const UrlModel = require('./src/models/UrlModel')

mongoose.connect('mongodb+srv://facu:815241@cluster0.xantxxn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`<------------- server listening at ${process.env.PORT || 3001} ------------->`)
})
