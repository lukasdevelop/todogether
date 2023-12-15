import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world !!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})