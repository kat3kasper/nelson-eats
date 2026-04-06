# Nelson Eats - Project Context

## Working Status
Check `.claude/status.md` at the start of every session for current progress, what's next, and recent decisions. Update it at the end of any session where work was done.

## What This Is
Jekyll static site listing happy hour deals for restaurants in Nelson, BC.
Hosted on Cloudflare Pages. Data in `_data/restaurants.yml`.

## Data Schema
Each restaurant: slug, name, address, neighborhood, deals array.
Each deal: type (food/drink/both), days array, time_start, time_end, description, verified, source.
Outreach tracking: status, last_contact_date, contact_email, notes.

## Key Commands
- `bundle exec jekyll serve` — local dev at localhost:4000
- `bundle exec jekyll build` — builds to `_site/`
- Cloudflare auto-deploys on push to main

## Conventions
- Slugs: lowercase-hyphenated
- Times: 24-hour strings ("15:00")
- Days: 3-letter lowercase (mon, tue, wed, thu, fri, sat, sun)
- Neighborhoods: baker-street, vernon-street, north-shore, south-nelson, other
- Deal types: food, drink, both

## Outreach
- Send from katelyn@kasperweb.com
- Track in each restaurant's outreach.status field
- Templates in `_data/outreach_templates.yml`
- Tone: casual, neighborly, local — not corporate
