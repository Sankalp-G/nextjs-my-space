"use client"

import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

interface Props {
  targetUserId: string
  isFollowing: boolean
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isPending || isFetching

  const follow = async () => {
    const session = await getSession()
    if (!session) {
      router.push('/api/auth/signin')
      return
    }

    setIsFetching(true)
    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setIsFetching(false)
    startTransition(() => { router.refresh() })
  }

  const unfollow = async () => {
    const session = await getSession()
    if (!session) {
      router.push('/api/auth/signin')
      return
    }

    setIsFetching(true)
    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE'
    })
    setIsFetching(false)
    startTransition(() => { router.refresh() })
  }

  if (isFollowing) {
    return (
      <button className="btn btn-secondary w-36" onClick={unfollow}>
        {!isMutating ? 'Unfollow' : '...'}
      </button>
    )
  }
  else {
    return (
      <button className="btn btn-secondary w-36" onClick={follow}>
        {!isMutating ? 'Follow' : '...'}
      </button>
    )
  }
}
