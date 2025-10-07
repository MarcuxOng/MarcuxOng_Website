# EmailJS Setup Guide

Follow these steps to set up EmailJS for your contact form:

## 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended for personal use)
4. Connect your Gmail account (marcuxongzl@gmail.com)
5. Note down the **Service ID** (something like "service_xxxxxxx")

## 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hello Marcux,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (something like "template_xxxxxxx")

## 4. Get Your Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key** (something like "xxxxxxxxxxxxxxxx")

## 5. Update Environment Variables
Update your `.env.local` file with the actual values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## 6. Restart Your Development Server
After updating the environment variables, restart your Next.js development server:
```bash
npm run dev
```

## 7. Test Your Contact Form
1. Go to your contact page
2. Fill out the form
3. Submit it
4. Check your email (marcuxongzl@gmail.com) for the message

## Alternative: Direct Gmail Setup
If you prefer not to use EmailJS, you can also:
1. Set up a backend API route in Next.js
2. Use Nodemailer with Gmail SMTP
3. Store Gmail app passwords securely

## Rate Limits
EmailJS free tier allows:
- 200 emails per month
- 50 emails per day
- For higher volumes, consider upgrading or implementing a backend solution

## Security Notes
- EmailJS runs client-side, so your public key is visible in the browser
- This is normal and expected for EmailJS
- Never expose private keys or server credentials in client-side code