import express from 'express'
require('dotenv').config()


const app = express()
const router = express.Router()


app.use(express.json()) //para aceitar JSON


async function bootstrap(){
    const server = await app.listen(process.env.PORT, ()=>{
    })
    !server ? console.log('server not started') : console.log(`server started on port ${process.env.PORT}`)
}

bootstrap()


