import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { company, name, email } = body
    if (!company || !name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Company, name, and email are required.' },
        { status: 400 }
      )
    }

    // Log the inquiry
    console.log('[Wholesale Inquiry]', JSON.stringify(body, null, 2))

    // TODO: Send email notification (e.g., Resend, SendGrid, or SES)
    // TODO: Push to CRM (e.g., HubSpot, Salesforce)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    )
  }
}
