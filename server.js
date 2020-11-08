const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const studentsControllers = require('./controllers/students')

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

app.get('/', studentsControllers.getStudents)

app.post('/', studentsControllers.saveStudent)

app.delete('/:id', studentsControllers.delStudent)

app.listen(port, () => console.log(`Server running on port ${port}`))