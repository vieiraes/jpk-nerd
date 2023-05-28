import { IHands } from "./Hands.interface"

export interface IRound {
    id?: string,
    roundName: string,
    createdAt?: Date | string,
    hands?: IHands[]
}