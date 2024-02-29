const express = require('express')
const app = express()
var cors = require('cors')
const { default: mongoose } = require('mongoose')
const { addStudent, getStudent, getsinglestudent, updateStudent, deleteStudent } = require('./controllers/studentcontroller')
require('dotenv').config()
const port = process.env.PORT
// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/v1/student', getStudent)
app.get('/api/v1/student/:id', getsinglestudent)
app.post('/api/v1/student', addStudent)
app.delete('/api/v1/student/:id', deleteStudent)
app.put('/api/v1/student/:id', updateStudent)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('Data Base Connected');
    } catch (error) {
        console.log(error);

    }
}

connectDB().then(() => {
    app.listen(port)
}).catch((err) => {
    console.log(err);
})