import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads'
import { sendLeadNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, phone, county } = body

  if (!firstName || !lastName || !email || !phone || !county) {
    return NextResponse.json({ error: 'Required fields are missing' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
  }

  try {
    const lead = {
      name: `${firstName.trim()} ${lastName.trim()}`,
      email: email.trim(),
      phone: phone.trim(),
      county: county.trim(),
      estimatedPurchasePrice: body.estimatedPurchasePrice ?? '',
      language: body.language ?? 'en',
      sourcePath: body.sourcePath ?? '',
      sourceType: body.sourceType ?? 'unknown',
      submittedAt: new Date().toISOString(),
    }
    saveLead(lead).catch(err =>
      console.error('Lead file save failed:', err)
    )
    sendLeadNotification(lead).catch(err =>
      console.error('Lead email notification failed:', err)
    )
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}
