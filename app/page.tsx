'use client'
import Header from '@/components/header'
import QueryForm from '@/components/QueryForm'
import RecordingsTable from '@/components/RecordingsTable'
import SaveAsForm from '@/components/SaveAsForm'

export default function Home() {
  return (
    <main>
      <Header />
      <QueryForm />
      <SaveAsForm />
      <RecordingsTable />
    </main>
  )
}