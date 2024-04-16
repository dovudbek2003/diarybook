const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')

const { serverPort } = require('./config/dotenv.config')
const db = require('./model/index.model')
const myDiaryBookRouter = require('./router/diary')

const app = express()

app.engine('hbs', engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/diary', myDiaryBookRouter)


const PORT = serverPort || 3000

const start = async () => {
    try {
        await db.sequelize.sync(/*{ force: true }*/)
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/diary/my`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()