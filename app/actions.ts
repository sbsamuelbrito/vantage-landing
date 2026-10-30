'use server'

const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://n8n.vantage.top/webhook/entradalpblack01'

export async function submitLead(
  _prevState: { success: boolean; error: string | null } | null,
  formData: FormData
) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const billValue = (formData.get('billValue') as string) || null
  const lgpdAccepted = formData.get('lgpd') === 'on'
  const utmSource = (formData.get('utm_source') as string) || null
  const utmMedium = (formData.get('utm_medium') as string) || null
  const utmCampaign = (formData.get('utm_campaign') as string) || null
  const utmTerm = (formData.get('utm_term') as string) || null
  const utmContent = (formData.get('utm_content') as string) || null

  if (!name || !phone || !email || !lgpdAccepted) {
    return { success: false, error: 'Preencha todos os campos obrigatórios e aceite os termos.' }
  }

  const payload = {
    name,
    phone,
    email,
    billValue,
    lgpdAccepted,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
    createdAt: new Date().toISOString(),
  }

  if (WEBHOOK_URL) {
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
  } else {
    console.log('[LEAD]', payload)
  }

  return { success: true, error: null }
}