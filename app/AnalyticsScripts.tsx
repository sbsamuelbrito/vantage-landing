'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { captureTrackingParams } from '@/lib/tracking'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''

interface FbqFunction {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  loaded?: boolean
  version?: string
  queue?: unknown[]
  push?: (...args: unknown[]) => void
}

export default function AnalyticsScripts() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    captureTrackingParams()
  }, [pathname, searchParams])

  useEffect(() => {
    if (!FB_PIXEL_ID) return

    // Inject Facebook Pixel script once
    if (!document.getElementById('fb-pixel-script')) {
      const script = document.createElement('script')
      script.id = 'fb-pixel-script'
      script.async = true
      script.src = `https://connect.facebook.net/en_US/fbevents.js`
      document.head.appendChild(script)

      // Initialize fbq safely with explicit typing
      const fbqFn: FbqFunction = (...args: unknown[]) => {
        fbqFn.callMethod ? fbqFn.callMethod(...args) : fbqFn.queue?.push(args)
      }
      fbqFn.push = fbqFn
      fbqFn.loaded = true
      fbqFn.version = '2.0'
      fbqFn.queue = []

      window.fbq = window.fbq || fbqFn
      window.fbq('init', FB_PIXEL_ID)
      window.fbq('track', 'PageView')
    } else {
      // Track page view on navigation
      window.fbq?.('track', 'PageView')
    }
  }, [pathname, searchParams])

  useEffect(() => {
    if (!GTM_ID) return

    // Inject GTM script once
    if (!document.getElementById('gtm-script')) {
      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    }
  }, [])

  return null
}

// Type augmentation for fbq
declare global {
  interface Window {
    fbq?: FbqFunction
    dataLayer?: Record<string, unknown>[]
  }
}
