const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shahbaz:Kozvg0d1vEwqLOID@cluster0.xnkbr.mongodb.net/btc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const dbobject = mongoose.connection

dbobject.on('connected', () => { console.log('Mongo DB Connection Successfull') })
dbobject.on('error', () => { console.log('Mongo DB Connection Failed') })

module.exports = mongoose