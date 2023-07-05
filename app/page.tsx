'use client'
import Header from '@/components/header'
import styles from './page.module.css'
import CreateForm from '@/components/CreateForm'

export default function Home() {
  return (
      <main className={styles.main}>
      <Header />
      <CreateForm />
      </main>
  )
}
