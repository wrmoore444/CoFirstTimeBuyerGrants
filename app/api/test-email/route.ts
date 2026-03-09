import { NextResponse } from 'next/server'
import { sendLeadNotification } from '@/lib/email'

export async function GET() {
  try {
    await sendLeadNotification({
      name: 'Test Lead',
      email: 'test@example.com',
      phone: '303-555-1234',
      county: 'Denver',
      estimatedPurchasePrice: '$400,000 - $500,000',
      language: 'en',
      sourcePath: '/en/contact',
      sourceType: 'contact',
      submittedAt: new Date().toISOString(),
    })
    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
