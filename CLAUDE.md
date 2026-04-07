# Nelson Eats - Project Context

## Working Status
- Check `.claude/status.md` at the start of every session for current progress, what's next, and recent decisions.
- Update `.claude/status.md` whenever meaningful work is completed or decisions are made.
- Close relevant GitHub issues (with a comment summarizing what was done) when their work is finished.
- These updates should happen automatically — do not wait for the user to ask.

## What This Is
Jekyll static site listing happy hour deals for restaurants in Nelson, BC.
Hosted on Cloudflare Pages. Data in `_data/restaurants.yml`.

## Data Schema
Full schema defined in `_data/schema.md`. All restaurant data lives in `_data/restaurants.yml`.

## Key Commands
- `bundle exec jekyll serve` — local dev at localhost:4000
- `bundle exec jekyll build` — builds to `_site/`
- Cloudflare auto-deploys on push to main

## Conventions
- Slugs: lowercase-hyphenated
- Times: 24-hour strings ("15:00")
- Days: 3-letter lowercase (mon, tue, wed, thu, fri, sat, sun)
- Neighborhoods: downtown, fairview, rosemont, north-shore
- Deal types: food, drink, both

## Outreach
- Send from katelyn@kasperweb.com
- Track in each restaurant's outreach.status field
- Templates in `_data/outreach_templates.yml`
- Tone: casual, neighborly, local — not corporate
