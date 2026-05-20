# 🚀 SEO Setup Guide — Delara Bitar Website

This guide walks you through completing the SEO setup. The technical part is done — these are the **manual steps** you need to do yourself.

---

## ✅ What's Already Done (in the website code)

- ✅ Open Graph tags (Facebook, WhatsApp, Instagram previews)
- ✅ Twitter Card tags
- ✅ Schema.org structured data (LocalBusiness + Person + TattooParlor)
- ✅ Canonical URLs
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ Social preview image (`assets/social-preview.jpg`)
- ✅ Meta descriptions & keywords on every page
- ✅ Proper title tags
- ✅ Theme colors

---

## 📋 What YOU Need to Do

### 1️⃣ Google Search Console (CRITICAL — do first)

Tells Google your site exists, monitors performance, alerts on issues.

**Steps:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with Delara's Google account (or create one)
3. Click **"Add Property"** → choose **"URL prefix"**
4. Enter: `https://www.delarabitar.com`
5. **Verify ownership** — choose **"HTML tag"** method
6. Copy the meta tag they give you (looks like `<meta name="google-site-verification" content="ABC123...">`)
7. **Paste it into `index.html`** right after the `<meta name="theme-color">` line
8. Push the change to GitHub, wait 2 minutes
9. Click "Verify" in Search Console

**After verified:**
- Submit your sitemap: `https://www.delarabitar.com/sitemap.xml`
- Request indexing for each of your 4 pages

---

### 2️⃣ Google Analytics 4 (Track Visitors)

See who visits, what pages they view, where they come from.

**Steps:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in → click **"Start measuring"**
3. Create account: "Delara Bitar"
4. Create property: "delarabitar.com"
5. Set up "Web" data stream → enter `https://www.delarabitar.com`
6. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)
7. **Send me the ID** and I'll add the tracking snippet to all pages

OR add it yourself by pasting this code into each HTML page's `<head>` (replace `G-XXXXXXXXXX` with your actual ID):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 3️⃣ Google Business Profile (HUGE for local Lebanon searches!) 🇱🇧

This is **the most important step** for local visibility. When someone searches "art studio Amioun" or "tattoo North Lebanon", you want to appear in the Google Maps results.

**Steps:**
1. Go to [business.google.com](https://business.google.com)
2. Click **"Manage now"**
3. Enter business name: **Delara Bitar — Delar' arts & Delar Tattoo**
4. Choose category: **Art studio** (you can add "Tattoo shop" as secondary)
5. Add location: **Amioun, Serail Roundabout, Next to Smart Market, North Lebanon**
6. Add phone: **+961 3 341 253**
7. Add website: `https://www.delarabitar.com`
8. **Verify** (Google will send a postcard OR call OR email)
9. Once verified, complete the profile:
   - Add photos (storefront, work samples, Delara at work)
   - Add hours (Mon-Sat 11AM-5PM)
   - Add services (under "Services" tab)
   - Add description (use the same one from website)

**💡 Tip:** Ask happy clients to leave Google reviews — this dramatically boosts rankings!

---

### 4️⃣ Bing Webmaster Tools (Bonus — 5-10% of searches)

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in → "Add a site" → `https://www.delarabitar.com`
3. Choose "Import from Google Search Console" (saves time)
4. Submit sitemap: `https://www.delarabitar.com/sitemap.xml`

---

### 5️⃣ Test Your Social Previews

After deploying, test how your site looks when shared:

| Platform | Test Tool |
|----------|-----------|
| 📘 Facebook / WhatsApp | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) |
| 𝕏 Twitter | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) |
| 💼 LinkedIn | [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/inspect) |

Paste your URL → click "Debug" → you should see the social preview image + title + description.

---

### 6️⃣ Test Your Structured Data (Schema)

1. Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. Enter `https://www.delarabitar.com`
3. Should show valid LocalBusiness + Person markup ✅
4. Repeat for the other 3 pages

---

## 📊 SEO Strategy Going Forward

### Content Ideas (Monthly Blog Posts → Future)

Even without a blog yet, here are content ideas to mention in Instagram captions + Facebook posts (which all link back to the site):

- "5 things to ask before booking your first tattoo"
- "Best art classes for kids in North Lebanon"
- "How to choose a Byzantine icon for your home"
- "Bridal henna trends in Lebanon 2026"
- "Why hygiene matters in piercings"

### Local SEO Keywords to Target

| High-Priority | Volume Estimate |
|---------------|-----------------|
| art studio Amioun | 🔥 Low competition, easy win |
| tattoo Lebanon | 🔥🔥 Medium competition |
| henna Lebanon | 🔥🔥 Medium competition |
| art classes North Lebanon | 🔥 Low competition |
| kids birthday Amioun | 🔥 Low competition |
| Byzantine icons Lebanon | 🔥 Niche but valuable |
| piercing Lebanon | 🔥🔥 Medium competition |

### Backlinks Strategy

Get listed on:
- 🏛️ Lebanese business directories (lebanon.ws, daleel-madina.com)
- 🎨 Art directories (artsy.net, etc.)
- 📰 Local Lebanese news sites (lbcgroup.tv, annahar.com lifestyle section)
- 🤝 Partner with local schools (offer kids' art workshops → school links to you)
- 💒 Churches (for Byzantine icon commissions → church websites link back)

---

## 📈 What to Expect (Timeline)

| Timeframe | What Happens |
|-----------|--------------|
| Week 1 | Google starts crawling, page indexed |
| Week 2-4 | First Search Console data appears |
| Month 1-2 | First organic searches start finding you |
| Month 2-3 | Google Business Profile starts ranking locally |
| Month 3-6 | Steady traffic growth, especially for local searches |
| Month 6-12 | Strong rankings for branded terms + local SEO |

---

## ✅ Quick Checklist

- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Google Analytics installed
- [ ] Google Business Profile created & verified
- [ ] Bing Webmaster set up
- [ ] Social previews tested (Facebook + Twitter)
- [ ] Schema markup tested
- [ ] First 10 Google Business reviews collected

---

Questions? Just ask!
