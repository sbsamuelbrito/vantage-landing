const STORAGE_KEY = 'vantage_tracking'

export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
  'wbraid',
  'gbraid',
  'ttclid',
  'li_fat_id',
] as const

export const TRACKING_COOKIES = ['_fbp', '_fbc'] as const

export const TRACKING_FIELDS = [...TRACKING_PARAMS, ...TRACKING_COOKIES] as const

export type TrackingField = (typeof TRACKING_FIELDS)[number]
export type TrackingData = Partial<Record<TrackingField, string>>

function readStored(): TrackingData {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as TrackingData) : {}
  } catch {
    return {}
  }
}

function writeStored(data: TrackingData) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage can be unavailable (private mode, quota); tracking must never break the page.
  }
}

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

/** Reads click IDs/UTMs from the URL and merges them into localStorage (latest click wins). */
export function captureTrackingParams(): TrackingData {
  if (typeof window === 'undefined') return {}

  const url = new URLSearchParams(window.location.search)
  const stored = readStored()
  let changed = false

  for (const key of TRACKING_PARAMS) {
    const value = url.get(key)
    if (value && stored[key] !== value) {
      stored[key] = value
      changed = true
    }
  }

  // Build _fbc from fbclid when the Pixel has not set it yet (Meta format: fb.1.<ts>.<fbclid>).
  const fbclid = url.get('fbclid')
  if (fbclid && !readCookie('_fbc') && !stored._fbc?.endsWith(`.${fbclid}`)) {
    stored._fbc = `fb.1.${Date.now()}.${fbclid}`
    changed = true
  }

  if (changed) writeStored(stored)
  return stored
}

/** Returns all persisted tracking data plus the freshest Meta cookies. */
export function getTrackingData(): TrackingData {
  const data = captureTrackingParams()
  for (const name of TRACKING_COOKIES) {
    const value = readCookie(name)
    if (value) data[name] = value
  }
  return data
}

export function generateEventId(): string {
  const random = Math.random().toString(36).slice(2, 10)
  return `vantage_${Date.now()}_${random}`
}
