# Restaurant Data Schema

All restaurant data lives in `_data/restaurants.yml`. Each entry follows this structure:

## Restaurant Fields

```yaml
- slug: lowercase-hyphenated        # URL-safe identifier
  name: "Display Name"              # Full restaurant name
  address: "123 Baker St"           # Street address only (no city/province)
  neighborhood: downtown             # One of: downtown, fairview, rosemont, north-shore
  phone: "250-555-1234"             # With area code, null if unknown
  website: "https://example.com"    # Full URL, null if unknown
  instagram: "handle"               # Without @, null if unknown
  google_maps_url: "https://..."    # Direct Google Maps link, null if unknown
  cuisine:                          # Array of tags, empty [] if unknown
    - pub-food
  has_patio: false                  # true/false
  description: "Short blurb."       # One sentence, null if unknown
  deals: []                         # Array of deals, empty [] if none found
  outreach:
    status: not-started             # One of: not-started, not-contacted, contacted, responded, verified, no-response
    last_contact_date: null         # YYYY-MM-DD
    contact_email: null
    contact_name: null
    notes: null
```

## Deal Fields

```yaml
deals:
  - type: drink                     # One of: food, drink, both
    days: [mon, tue, wed]           # 3-letter lowercase: mon, tue, wed, thu, fri, sat, sun
    time_start: "15:00"             # 24-hour format
    time_end: "17:00"               # 24-hour format
    description: "$4 pints"         # Human-readable deal description
    verified: false                 # true if confirmed by restaurant
    verified_date: null             # YYYY-MM-DD
    source: website                 # One of: website, social-media, outreach, in-person
```

## Conventions

- Restaurants with empty `deals: []` are tracked but not displayed on the site
- Times are 24-hour strings ("15:00" not "3pm")
- Days are 3-letter lowercase (mon, tue, wed, thu, fri, sat, sun)
- Slugs are lowercase-hyphenated (e.g., "finleys-irish")
- Multi-location restaurants get separate entries with distinct slugs (e.g., "lc-french-bakery-baker", "lc-french-bakery-radio")
