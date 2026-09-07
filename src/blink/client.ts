import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'ebe-distribuid-site-al19kxdl',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_-B6bRRRzakbiGxzD3zoAYt1sDRx3zpeL',
  authRequired: false,
  auth: { mode: 'managed' },
})
