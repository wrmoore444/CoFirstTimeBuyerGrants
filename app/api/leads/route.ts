import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// NOTE: This file-based storage works for local dev and VPS hosting.
// For Vercel deployment, replace with Vercel Postgres or another managed DB.
const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

interface Lead {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  submittedAt: string
}

function readLeads(): Lead[] {
  if (!fs.existsSync(LEADS_FILE)) return []
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8')) as Lead[]
  } catch {
    return []
  }
}

function writeLeads(leads: Lead[]): void {
  fs.mkdirSync(path.dirname(LEADS_FILE), { recursive: true })
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, phone, message } = body

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const lead: Lead = {
    id: Date.now(),
    firstName: String(firstName).trim(),
    lastName: String(lastName).trim(),
    email: String(email).trim(),
    phone: String(phone || '').trim(),
    message: String(message || '').trim(),
    submittedAt: new Date().toISOString(),
  }

  const leads = readLeads()
  leads.push(lead)
  writeLeads(leads)

  return NextResponse.json({ success: true })
}

export async function GET() {
  return NextResponse.json(readLeads())
}
