import express, { Express } from 'express'
import db from '../prisma/db'
import path from 'path'

const PORT = 5000

const app: Express = express()

async function main() {

    // body parsers
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // static file serving
    console.log(path.join(__dirname, '../out'))
    app.use('/', express.static(path.join(__dirname, '../out')))

    // routes
    app.get('/api/campaign', async (req, res) => {
        return res.json(await db.campaign.findMany())
    })

    app.get('/api/recording', async (req, res) => {
        return res.json({})
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