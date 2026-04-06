---
name: Research Restaurant
description: Research a single Nelson BC restaurant for happy hour deals
---

Given a restaurant name and website URL:

1. Visit the restaurant's website, look for happy hour / specials / events pages
2. Web search "{name} Nelson BC happy hour" and "{name} Nelson BC specials"
3. Check their Instagram or Facebook if available
4. Return findings as YAML matching our `_data/restaurants.yml` schema:

```yaml
deals:
  - type: drink|food|both
    days: [mon, tue, ...]
    time_start: "HH:MM"
    time_end: "HH:MM"
    description: "..."
    verified: false
    source: website|social-media
```

5. If no deals found, return `deals: []` with a note explaining what you checked
6. Include any useful info: phone number, exact address, website URL, Instagram handle
