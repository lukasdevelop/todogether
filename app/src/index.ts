import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Teste de mudança')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})