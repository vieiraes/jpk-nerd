import express from 'express'
require('dotenv').config()
import * as controllers from './controllers'

const app = express()

app.use(express.json()) //para aceitar JSON

async function bootstrap(){
    const server = await app.listen(process.env.PORT, ()=>{
    })
    !server ? console.log('server not started') : console.log(`server started on port ${process.env.PORT}`)
}

app.use('/rounds', controllers.RoundsController)
app.use('/weights', controllers.WeightController)

bootstrap()