'use server'

import { headers } from 'next/headers'
import { TRACKING_FIELDS } from '@/lib/tracking'

const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://n8n.vantage.top/webhook/entradalpblack01'

type LeadState = { success: boolean; error: string | null; eventId?: string } | null

function getField(formData: FormData, key: string, maxLength = 500): string | null {
  const value = formData.get(key)
  if (typeof value !== 'string') return null
  const trimmed = value.trim().slice(0, maxLength)
  return trimmed || null
}

export async function submitLead(_prevState: LeadState, formData: FormData): Promise<LeadState> {
  const name = getField(formData, 'name')
  const phone = getField(formData, 'phone')
  const email = getField(formData, 'email')
  const billValue = getField(formData, 'billValue')
  const lgpdAccepted = formData.get('lgpd') === 'on'

  if (!name || !phone || !email || !lgpdAccepted) {
    return { success: false, error: 'Preencha todos os campos obrigatórios e aceite os termos.' }
  }

  const rawEventId = getField(formData, 'event_id', 100)
  const eventId =
    rawEventId && /^vantage_[\w-]+$/.test(rawEventId)
      ? rawEventId
      : `vantage_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

  const tracking = Object.fromEntries(
    TRACKING_FIELDS.map((key) => [key, getField(formData, key)])
  )

  const h = await headers()
  const clientIp =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || null
  const clientUserAgent = h.get('user-agent') || null

  const payload = {
    event_id: eventId,
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    name,
    phone,
    email,
    billValue,
    lgpdAccepted,
    ...tracking,
    client_ip_address: clientIp,
    client_user_agent: clientUserAgent,
    event_source_url: h.get('referer') || null,
    createdAt: new Date().toISOString(),
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      console.error('[WEBHOOK] Failed:', res.status, await res.text())
      return { success: false, error: 'Erro ao enviar dados. Tente novamente.' }
    }
  } catch (err) {
    console.error('[WEBHOOK] Error:', err)
    return { success: false, error: 'Erro de conexão. Tente novamente.' }
  }

  return { success: true, error: null, eventId }
}
