import express from 'express'
import { Request, Response } from 'express'
import { prisma } from '../libs/db'
import { IRound } from '../interfaces/Round.interface'
import { handleError } from '../libs/utils/handleError'
import { v4 as uuidv4 } from 'uuid'
import { IHands } from '../interfaces/Hands.interface'


const router = express.Router()

// /rounds
router.post('/', async (req: Request, res: Response) => {
    try {
        const { roundName }: { roundName: string } = req.body
        !roundName ? handleError(res, 400, 'round name is required') : undefined

        const roundCreated = await prisma.rounds.create({
            data: {
                id: uuidv4(),
                roundName: roundName,
                createdAt: new Date(),
                hands: {
                    create: []
                }
            }
        })

        res.status(201).send({
            "message": "Round created",
            roundCreated
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
        let handsReturn  = await prisma.rounds.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        res.status(200).send([handsReturn])
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