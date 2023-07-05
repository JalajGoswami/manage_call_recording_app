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

  useEffect(() => {
    axios.get('http://localhost:5000/api/campaign')
      .then(res => setCampaigns(res.data))
  }, [])
  return (
    <main>
      <Header />
      <QueryForm
        campaigns={campaigns}
        setRecordings={setRecordings}
      />
      <SaveAsForm />
      <RecordingsTable
        campaigns={campaigns}
        recordings={recordings}
      />
    </main>
  )
}