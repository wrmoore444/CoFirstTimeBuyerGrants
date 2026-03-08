import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'demo-leads.json')

export type Lead = {
  name: string
  email: string
  phone: string
  county: string
  estimatedPurchasePrice: string
  language: string
  sourcePath: string
  sourceType: string
  submittedAt: string
}

export async function saveLead(lead: Lead): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true })

  let leads: Lead[] = []
  try {
    const raw = await fs.readFile(LEADS_FILE, 'utf-8')
    leads = JSON.parse(raw)
  } catch {
    // File does not exist yet — start fresh
  }

  leads.push(lead)
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8')
}
