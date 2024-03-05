
const express = require('express')
const mongoose = require('mongoose')

const user = require('./users.handler')

const app = express()

const port = 3000

app.use(express.json())

//mongoose.connect('mongodb+srv://dianac:D1@u@123@clusterdianis.yr8fkkp.mongodb.net/api-db?retryWrites=true&w=majority&appName=ClusterDianis')
mongoose.connect('mongodb+srv://gianalvarez2109:21092000@clustergiandeveloperpri.jico7en.mongodb.net/api-dbDiana?retryWrites=true&w=majority&appName=ClusterGianDeveloperPrincipal')

app.get('/api/', user.list)
app.post('/api/', user.create)
app.get('/api/:id', user.get)
app.put('/api/:id', user.update)
app.delete('/api/:id', user.delete)

app.listen(port, () => {
    console.log('El ejemplo se está ejecutando en el puerto ', port)
    console.log('Run in: http://localhost:3000/api')
})