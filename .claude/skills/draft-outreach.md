---
name: Draft Restaurant Outreach
description: Draft a personalized outreach email to a Nelson restaurant via Gmail
---

1. Read the restaurant's data from `_data/restaurants.yml`
2. Choose the appropriate template from `_data/outreach_templates.yml`
3. Personalize the email:
   - Use the restaurant name
   - Reference any deals we already found
   - If we have deals, ask them to confirm
   - If no deals, ask if they have a happy hour
4. Create a Gmail draft via `gmail_create_draft` to their contact_email
   - From: katelyn@kasperweb.com
   - Keep it under 150 words
   - Tone: friendly, casual, local — like a neighbor asking, not a business pitch
5. Update the restaurant's `outreach.status` to "contacted" and set `last_contact_date`
