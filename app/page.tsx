'use client'
import Header from '@/components/header'
import QueryForm from '@/components/QueryForm'
import RecordingsTable from '@/components/RecordingsTable'
import SaveAsForm from '@/components/SaveAsForm'
import { Campaign, Recording } from '@prisma/client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [recordings, setRecordings] = useState<Recording[] | null>()
  const [selected, setSelected] = useState<Recording>()

  useEffect(() => {
    axios.get('/api/campaign')
      .then(res => setCampaigns(res.data))
  }, [])
  return (
    <main>
      <Header />
      <QueryForm
        campaigns={campaigns}
        setRecordings={setRecordings}
      />
      <SaveAsForm
        recording={selected}
      />
      <RecordingsTable
        campaigns={campaigns}
        recordings={recordings}
        setSelected={setSelected}
      />
    </main>
  )
}