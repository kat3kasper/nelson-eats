# Nelson Eats — Working Status

## Current Phase
Phase 2: Data Collection — starting deal research

## What Just Got Done
- Issue #8: Compiled master restaurant list (54 restaurants) — CLOSED
- Tested parallel agent research on Louie's Steakhouse and Broken Hill
- Established deal structure and research approach

## What's Next — Pick Up Here
Start batched deal research using parallel agents:
1. **Tier 1 first** (bars, breweries, pubs — most likely to have deals)
2. Run in batches of ~5 restaurants, Katelyn reviews each batch before data is written
3. Agents do first pass (website, contact info, PDFs, socials)
4. Katelyn fills in gaps from local knowledge
5. Remaining unknowns get resolved in Phase 4 outreach

### Test Results (Louie's + Broken Hill)
- Agents are good at: finding websites, contact info, PDFs, review snippets (~60-70%)
- Agents struggle with: Wix sites, image-only menus, Facebook posts, deals only findable by phone
- Hybrid approach needed: agent first pass → Katelyn review → outreach to confirm

### Tier 1 restaurants to research first (bars/breweries/pubs):
- Backroads Brewing, Torchlight Brewing, Nelson Brewing Company, BRIXX Brewhouse
- Finley's Irish (already has some data), The Royal, Mike's Place Pub
- Spiritbar, Library Lounge, Jackson's Hole, The Black Cauldron
- Broken Hill + Easy Tiger (tested but need actual deal data written)
- Louie's Steakhouse (tested, needs data written + Katelyn corrections)

## Open Phase 1 Issue
- Issue #7: Configure Gmail MCP for katelyn@kasperweb.com (needed for Phase 4)

## Key Decisions Made
- Deal structure: one deal per line item, price in description text, time window for grouping
- Late night menus are in scope
- Drinks and food can have different day ranges (separate entries)
- Schema lives in _data/schema.md (single source of truth)
- Neighborhoods: downtown, fairview, rosemont, north-shore
- Staying with Jekyll
- Hybrid research: agents → Katelyn review → outreach

## Key URLs
- Site: https://nelsoneats.ca
- Pages: https://nelson-eats.pages.dev
- Repo: https://github.com/kat3kasper/nelson-eats
