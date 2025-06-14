'use client'

import { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export default function AdminPage() {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return (
    <div className="min-h-screen bg-ivory">
      <div id="nc-root" />
    </div>
  )
} 