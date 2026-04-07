---
name: Research Restaurant
description: Research a single Nelson BC restaurant for happy hour deals
---

Given a restaurant name (and optionally a website URL):

1. Visit the restaurant's website, look for happy hour / specials / events pages
2. Look for PDF menus — deals are often in PDFs, not plain text on the page
3. Check for menu images that might contain deal info
4. Web search "{name} Nelson BC happy hour" and "{name} Nelson BC specials"
5. Check their Instagram and Facebook for posts about daily specials or happy hour
6. Check review sites (Yelp, Google, TripAdvisor) for mentions of deals in reviews
7. Look for late night menus too — those are in scope

Update the restaurant's entry in `_data/restaurants.yml` following the schema in `_data/schema.md`.

**Fill in as many fields as possible:**
- phone, website, instagram, google_maps_url, cuisine, has_patio, description

**For deals:**
- One deal per line item (not grouped paragraphs)
- Include price in the description text (e.g., "Korean Style Ribs (per rib) — $3.25")
- Drinks and food may have different day ranges — use separate entries
- Capture late night menus the same way as happy hour, just with later times

**If info is missing:**
- Leave `deals: []` if no deals found
- Add a note in outreach.notes explaining what was checked and what couldn't be accessed
- Flag Wix sites, image-only menus, or Facebook-only deals as needing manual verification

**Known limitations:**
- Wix sites often don't render for automated fetching
- Instagram/Facebook post content can't always be read directly
- Some deals are only findable by calling the restaurant
