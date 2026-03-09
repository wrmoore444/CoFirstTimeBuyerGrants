import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'memrich@pivotlending.com'
const FROM_EMAIL = 'leads@cofirsttimebuyergrants.com'

interface LeadData {
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

export async function sendLeadNotification(lead: LeadData): Promise<void> {
  const sourceLabel = lead.sourcePath || 'unknown page'
  const priceLabel = lead.estimatedPurchasePrice || 'Not specified'
  const langLabel = lead.language === 'es' ? 'Spanish' : 'English'

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New Lead: ${lead.name} — ${lead.county} County`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #003d7a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Lead — CoFirstTimeBuyerGrants</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; width: 40%; color: #666; font-size: 14px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; font-size: 14px;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px;"><a href="mailto:${lead.email}" style="color: #003d7a;">${lead.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px;"><a href="tel:${lead.phone}" style="color: #003d7a;">${lead.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-size: 14px;">County</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px;">${lead.county}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-size: 14px;">Est. Purchase Price</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px;">${priceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-size: 14px;">Language</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 14px;">${langLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px;">Source</td>
              <td style="padding: 10px 0; font-size: 14px;">${sourceLabel}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Submitted: ${new Date(lead.submittedAt).toLocaleString('en-US', { timeZone: 'America/Denver' })} MT
          </p>
        </div>
      </div>
    `,
  })
}
