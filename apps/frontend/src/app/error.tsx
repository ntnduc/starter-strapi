'use client'

export default function Error({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="container mx-auto space-y-5 text-center">
      <p>{error.message}</p>
    </section>
  )
}
