import { Suspense } from 'react'
import Hero from './_layouts/hero'

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      home
      <Suspense fallback={<div>loading...</div>}></Suspense>
    </main>
  )
}
