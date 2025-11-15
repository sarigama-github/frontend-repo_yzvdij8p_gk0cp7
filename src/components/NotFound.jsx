import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-primary text-white">
      <div className="text-center">
        <div className="text-8xl font-display tracking-widest bg-gradient-to-r from-neonBlue to-electricCyan bg-clip-text text-transparent">404</div>
        <p className="mt-4 text-white/60">Page not found. Return to the grid.</p>
      </div>
    </div>
  )
}
