/* ============================================
   DELAR TATTOO PAGE — Services & Gallery
   ============================================ */

// ============================================
// SERVICES DATA — 3 categories
// ============================================
const tattooServices = [
  {
    title: 'Tattoos',
    icon: 'tattoo',
    tagline: 'Custom designs, cover-ups & touch-ups',
    sections: [
      {
        heading: 'Custom Design Work',
        body: 'Every tattoo begins with a conversation. Bring an idea, a memory, a feeling, or a rough sketch — Delara translates it into a hand-drawn design crafted for your body, your style, and your story. No flash-sheet copies, no shortcuts.'
      },
      {
        heading: 'Styles We Work With',
        body: 'Fine line, blackwork, minimal & geometric, botanical, lettering & script, religious & symbolic, traditional, realism, watercolor, dotwork, and more. Not sure what style suits you? We figure it out together in your consultation.'
      },
      {
        heading: 'Cover-Ups & Touch-Ups',
        body: 'Have an old tattoo you regret, or one that\'s faded over time? We specialize in thoughtful cover-ups and crisp touch-ups that breathe new life into your skin\'s history.'
      },
      {
        heading: 'The Process',
        body: 'Free consultation → custom design preview → booking deposit → tattoo session → written aftercare → free touch-up if needed within 30 days. Pricing is consultation-based, depending on size, complexity, and placement.'
      }
    ]
  },
  {
    title: 'Henna',
    icon: 'henna',
    tagline: 'Bridal, events & traditional designs',
    sections: [
      {
        heading: 'Bridal Henna',
        body: 'The most important henna of your life deserves the most beautiful designs. Intricate bridal patterns for hands, feet, and arms — traditional, contemporary, or a blend of both. We block out dedicated time for brides so the entire experience feels calm and luxurious.'
      },
      {
        heading: 'Event & Party Henna',
        body: 'Engagements, sweet-sixteens, baby showers, henna nights, Eid celebrations, and special gatherings. We can come to you or host you in the studio — small designs to elaborate full-arm work, sized to your event.'
      },
      {
        heading: 'Walk-In Henna',
        body: 'Drop by during studio hours for a quick henna design. Perfect for special occasions, a personal treat, or simply because today felt like a henna kind of day.'
      },
      {
        heading: 'About the Henna We Use',
        body: '100% natural henna paste — no chemicals, no black henna, no skin irritants. Safe for all skin types, including children and pregnant women. Designs last 1–3 weeks depending on placement and aftercare.'
      }
    ]
  },
  {
    title: 'Piercings',
    icon: 'piercing',
    tagline: 'All types — ear, facial, oral, body',
    sections: [
      {
        heading: 'Ear Piercings',
        body: 'Standard lobe, second lobe, third lobe, helix, forward helix, conch (inner & outer), tragus, anti-tragus, daith, rook, snug, and industrial. From classic single studs to curated multi-piercing ear projects designed as one cohesive arrangement.'
      },
      {
        heading: 'Facial Piercings',
        body: 'Nostril, septum, high nostril, bridge, eyebrow, anti-eyebrow, and dermal piercings. Done with precision placement that complements your facial structure.'
      },
      {
        heading: 'Oral Piercings',
        body: 'Tongue, lip (labret, vertical labret, Monroe, Madonna, Medusa, snake bites, spider bites), and smiley/anti-smiley. Detailed aftercare guidance for oral healing.'
      },
      {
        heading: 'Body Piercings',
        body: 'Navel (belly button), nipple, and surface piercings. Performed in a private, comfortable area of the studio with full hygiene protocols.'
      },
      {
        heading: 'Jewelry & Aftercare',
        body: 'All initial jewelry is implant-grade titanium, surgical steel, or 14K gold. Each piercing comes with detailed written aftercare instructions, suggested cleaning solutions, and a follow-up window if anything feels off during healing.'
      }
    ]
  }
];

function openServiceModal(index) {
  const s = tattooServices[index];
  const sectionsHtml = s.sections.map(section => `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-display); font-size: 1.15rem; color: #B22222; margin-bottom: 0.5rem; font-weight: 700;">${section.heading}</h4>
      <p style="font-size: 0.98rem; line-height: 1.75; color: #333;">${section.body}</p>
    </div>
  `).join('');

  const content = `
    <h3 style="color: #000;">${s.title}</h3>
    <p style="font-style: italic; color: #888; margin-bottom: 1.5rem; font-size: 1rem;">${s.tagline}</p>
    ${sectionsHtml}
    <a href="https://wa.me/9613341253?text=Hi%20Delar%20Tattoo!%20I'd%20like%20to%20book%20a%20consultation%20for%20${encodeURIComponent(s.title)}." target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1rem; background: #000; color: #D4AF37; padding: 0.95rem 2rem; border: 1px solid #D4AF37; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; font-size: 0.8rem; transition: all 0.3s ease;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      Book a Consultation
    </a>
  `;
  openModal(content);
}

// ============================================
// GALLERY DATA — 3 categories
// ============================================
const tattooGallery = [
  { name: 'Tattoos', count: 12, desc: 'A selection of custom tattoo work — across styles, sizes, and stories.' },
  { name: 'Henna', count: 8, desc: 'Bridal designs, event work, and intricate traditional patterns.' },
  { name: 'Piercings', count: 10, desc: 'Single piercings and curated ear arrangements, freshly done and healed.' }
];

function openGalleryModal(index) {
  const g = tattooGallery[index];
  const placeholders = Array.from({length: g.count}, (_, i) =>
    `<div class="modal-gallery-placeholder">${g.name}<br>#${i + 1}<br><small>Photo coming soon</small></div>`
  ).join('');
  const content = `
    <h3>${g.name}</h3>
    <p style="margin-bottom: 1rem; color: #666;">${g.desc}</p>
    <div class="modal-gallery">${placeholders}</div>
  `;
  openModal(content);
}
