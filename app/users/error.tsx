"use client"

import { useEffect } from "react"

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="h-96 w-full flex flex-col gap-2 items-center justify-center">
      <span className="text-lg">Something went wrong :(</span>

      <button onClick={() => reset()} className="btn btn-primary btn-sm">
        Try Again
      </button>
    </div>
  )
}