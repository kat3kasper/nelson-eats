---
name: Research Restaurant
description: Research a single Nelson BC restaurant for happy hour deals
---

Given a restaurant name (and optionally a website URL):

1. Visit the restaurant's website, look for happy hour / specials / events pages
2. Web search "{name} Nelson BC happy hour" and "{name} Nelson BC specials"
3. Check their Instagram or Facebook if available
4. Update the restaurant's entry in `_data/restaurants.yml` following the schema in `_data/schema.md`
5. Fill in as many fields as possible: phone, website, instagram, google_maps_url, cuisine, has_patio, description
6. Add any deals found to the deals array
7. If no deals found, leave `deals: []` and add a note in outreach.notes explaining what was checked
