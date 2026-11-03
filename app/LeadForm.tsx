'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitLead } from './actions'
import { generateEventId, getTrackingData } from '@/lib/tracking'

export default function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, null)
  const pushedEventId = useRef<string | null>(null)

  useEffect(() => {
    if (!state?.success || !state.eventId || pushedEventId.current === state.eventId) return
    pushedEventId.current = state.eventId
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_success', event_id: state.eventId })
  }, [state])

  function handleSubmit(formData: FormData) {
    formData.set('event_id', generateEventId())
    for (const [key, value] of Object.entries(getTrackingData())) {
      if (value) formData.set(key, value)
    }
    action(formData)
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-[var(--space-sm)]">

      <div className="flex flex-col gap-[var(--space-xs)]">
        <label htmlFor="name" className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
          Nome completo *
        </label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className="ds-input"
          placeholder="Ex.: Maria Silva"
        />
      </div>

      <div className="flex flex-col gap-[var(--space-xs)]">
        <label htmlFor="phone" className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
          Telefone / WhatsApp *
        </label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          className="ds-input"
          placeholder="(62) 99999-9999"
        />
      </div>

      <div className="flex flex-col gap-[var(--space-xs)]">
        <label htmlFor="email" className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          className="ds-input"
          placeholder="exemplo@email.com"
        />
      </div>

      <div className="flex flex-col gap-[var(--space-xs)]">
        <label htmlFor="billValue" className="text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
          Valor médio da conta (opcional)
        </label>
        <input
          id="billValue"
          name="billValue"
          type="text"
          className="ds-input"
          placeholder="R$ 0,00"
        />
      </div>

      <label className="flex items-start gap-[var(--space-sm)] cursor-pointer mt-[var(--space-xs)]">
        <input
          type="checkbox"
          name="lgpd"
          required
          className="mt-[3px] h-4 w-4 rounded accent-[var(--accent)]"
        />
        <span className="text-[12px] leading-[1.4]" style={{ color: 'var(--muted)' }}>
          Li e concordo com a{' '}
          <a href="/politica-de-privacidade" className="underline hover:text-[var(--accent)]">Política de Privacidade</a>{' '}
          e autorizo o tratamento dos meus dados pessoais pela Vantage Energia para fins de
          contato comercial, conforme a LGPD (Lei nº 13.709/2018). *
        </span>
      </label>

      {state?.error && (
        <p
          className="text-[13px] leading-[1.4] px-[var(--space-sm)] py-[var(--space-xs)] rounded-[var(--radius-input)]"
          style={{ color: 'var(--danger-fg)', background: 'var(--danger-bg)' }}
        >
          {state.error}
        </p>
      )}

      {state?.success && (
        <p
          className="text-[13px] leading-[1.4] px-[var(--space-sm)] py-[var(--space-xs)] rounded-[var(--radius-input)]"
          style={{ color: 'var(--success-fg)', background: 'var(--success-bg)' }}
        >
          ✓ Recebemos seus dados! Entraremos em contato em breve.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="ds-btn-primary w-full mt-[var(--space-xs)]"
      >
        {pending ? 'Enviando...' : 'Garantir minha oferta Black Friday'}
      </button>
    </form>
  )
}
