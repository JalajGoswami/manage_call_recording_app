import * as Yup from 'yup'
import { Response } from 'express'

export const filtersSchema = Yup.object({
    startDate: Yup.date(),
    endDate: Yup.date(),
    phoneNumber: Yup.string(),
    volunteerNumber: Yup.number(),
    agentId: Yup.number(),
    campaignId: Yup.string()
}).noUnknown()


export function getError(err: unknown) {
    let error = err as any

    if (error?.meta?.cause)
        return error.meta.cause

    if (error?.message) {
        let message = error.message.trim()
        return message
    }

    return error
}

export function handleError(res: Response, err: unknown) {
    const error = getError(err)
    return res.status(400).json({ error })
}