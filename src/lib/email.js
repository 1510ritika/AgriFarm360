import emailjs from '@emailjs/browser'

// TODO: replace with your EmailJS keys
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
export const ENQUIRY_TEMPLATE_ID = 'YOUR_ENQUIRY_TEMPLATE_ID'
export const DEALER_TEMPLATE_ID = 'YOUR_DEALER_TEMPLATE_ID'
export const AGENT_TEMPLATE_ID = 'YOUR_AGENT_TEMPLATE_ID'

emailjs.init(EMAILJS_PUBLIC_KEY)

export async function sendEmail(templateId, data) {
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, templateId, data)
    return { ok: true }
  } catch (err) {
    console.error(err)
    return { ok: false, error: 'Failed to send. Check your EmailJS keys.' }
  }
}
