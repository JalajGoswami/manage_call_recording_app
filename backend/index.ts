import express, { Express } from 'express'
import db from '../prisma/db'
import path from 'path'
import { filtersSchema, handleError } from './utils'

const PORT = 5000

const app: Express = express()

async function main() {

    // body parsers
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // static file serving
    app.use('/', express.static(path.join(__dirname, '../out')))

    // routes
    app.get('/api/campaign', async (req, res) => {
        return res.json(await db.campaign.findMany())
    })

    app.get('/api/recording', async (req, res) => {
        try {
            const { campaignId, startDate, endDate, ...queryParams
            } = filtersSchema.validateSync(req.query)

            const campaignIds = campaignId?.split(',').map(Number)

            const recordings = await db.recording.findMany({
                where: {
                    ...queryParams,
                    callTime: { gte: startDate, lte: endDate },
                    campaignId: campaignIds ? { in: campaignIds } : undefined
                }
            })

            return res.json(recordings)
        }
        catch (err) { handleError(res, err) }
    })

    app.listen(PORT, () =>
        console.log(`⚡️ Server running on http://localhost:${PORT}`)
    )
}

main()
    .catch((err) =>
        console.error(err)
    )
    .finally(() =>
        db.$disconnect()
    )