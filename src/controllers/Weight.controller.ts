import express from 'express'
import { Request, Response } from 'express'
import { prisma } from '../libs/db'
import { IWeight } from '../interfaces/Weight.interface'
import { handleError } from '../libs/utils/handleError'
import { v4 as uuidv4 } from 'uuid'


const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const { handName }: { handName: string } = req.body
        const { weight }: { weight: number } = req.body
        !handName ? handleError(res, 400, "handName is required") : undefined
        const weightReturn = await prisma.weight.create({
            data: {
                id: uuidv4(),
                handName: handName,
                weight: weight,
                createdAt: new Date().toISOString()
            }

        })
        res.status(201).send({
            "message": "Weight Created",
            weightReturn
        })
    } catch (error) {
        console.error("Error", error)
        res.status(400).send({
            "message": "Error",
            "error": error
        })
        throw Error
    }
})


router.get('/', async (req: Request, res: Response) => {
    try {
        const weightReturn = await prisma.weight.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        res.status(200).send([weightReturn])
    } catch (error) {
        console.error("Error", error)
        res.status(400).send({
            "message": "Error",
            "error": error
        })
        throw Error
    }
})


export { router }