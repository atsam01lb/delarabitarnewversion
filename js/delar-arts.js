/* ============================================
   DELAR' ARTS PAGE — Services, Activities, Gallery
   ============================================ */

// ============================================
// SERVICES DATA
// ============================================
const services = [
  {
    icon: '🎂',
    title: 'Birthday Events',
    desc: 'Make their special day unforgettable. Choose any theme — an art theme, a princess theme, dinosaurs, superheroes, anything you can imagine — and we transform the studio into that world. Kids get to dive into the activity of their choice (painting, clay modeling, tote bag decorating, and more), and Delar\' arts handles all the decoration, setup, and creative direction. You bring the birthday cake, we bring the magic.'
  },
  {
    icon: '🌸',
    title: 'Seasonal Events',
    desc: 'Themed art events aligned with the season or holiday — Easter egg painting, Christmas ornament workshops, Mother\'s Day handmade gifts, Father\'s Day keepsakes, Family Day collaborative art, and special workshops for Eid al-Adha and Eid al-Fitr. Each event is designed to celebrate the moment while creating something meaningful and beautiful to take home.'
  },
  {
    icon: '🎨',
    title: 'Walk-In Activities',
    desc: 'No appointment? No problem. Walk into the studio anytime during our hours, browse our full menu of activities, and pick whatever speaks to you that day — paint on canvas, decorate a tote bag, work on clay, create a dream catcher, or try something completely new. Perfect for spontaneous creativity, solo sessions, or just an afternoon escape.'
  },
  {
    icon: '📚',
    title: 'Private Art Classes',
    desc: 'One-on-one art instruction tailored to your level, interests, and goals. Whether you\'re a complete beginner discovering art for the first time, a hobbyist refining technique, or someone preparing a portfolio, private classes give you Delara\'s undivided attention. Topics covered include drawing, painting, color theory, composition, and any specialized technique you want to learn.'
  },
  {
    icon: '🖼️',
    title: 'Art Projects',
    desc: 'Custom art commissions for any purpose — a portrait of a loved one, a religious icon for your home or church, decorative pieces for your interior, a wedding gift, a memorial piece, or any concept you have in mind. Every project starts with a conversation to understand your vision, and ends with a one-of-a-kind artwork crafted entirely by hand.'
  },
  {
    icon: '💫',
    title: 'Art Therapy Events',
    desc: 'Therapeutic art sessions designed to support mental wellness, emotional expression, and personal growth. Through guided creative exercises, participants can process feelings, reduce stress, and reconnect with themselves in a safe, non-judgmental space. Suitable for individuals, small groups, schools, and corporate wellness programs.'
  }
];

function openServiceModal(index) {
  const s = services[index];
  const content = `
    <div style="font-size: 3rem; margin-bottom: 0.5rem;">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <a href="https://wa.me/9613341253?text=Hi%20Del'%20Arts!%20I'd%20like%20to%20know%20more%20about%20${encodeURIComponent(s.title)}." target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.5rem; background: #000; color: #FED606; padding: 0.85rem 1.75rem; border-radius: 50px; font-weight: 600; transition: all 0.3s ease;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      Book on WhatsApp
    </a>
  `;
  openModal(content);
}

// ============================================
// ACTIVITIES DATA
// ============================================
const activities = [
  {
    emoji: '🎨',
    name: 'Drawing on Paper & Canvas',
    desc: 'Traditional drawing on paper, canvas, sketchbooks, and beyond — using pencils, charcoal, ink, pastels, or markers. Perfect for building foundational skills, exploring your style, or creating finished pieces you\'re proud to frame.'
  },
  {
    emoji: '🪟',
    name: 'Painting on Glass (Vitrail)',
    desc: 'Vitrail is the classic art of painting on glass, creating luminous stained-glass effects on windows, mirrors, vases, and decorative pieces. Each piece catches light beautifully and turns ordinary glass into a glowing work of art.'
  },
  {
    emoji: '👕',
    name: 'Painting on Clothes',
    desc: 'Turn anything you wear into a one-of-a-kind piece — hats, T-shirts, jackets, jeans, dresses, even shoes. Using specialized fabric paints, your custom design becomes permanent, wash-friendly, and uniquely yours.'
  },
  {
    emoji: '🪨',
    name: 'Painting on Stones',
    desc: 'A peaceful, meditative craft. Smooth stones become canvases for tiny landscapes, mandalas, animals, or symbolic patterns. Wonderful as paperweights, garden decorations, or thoughtful little gifts.'
  },
  {
    emoji: '🏺',
    name: 'Clay Modeling',
    desc: 'Shape clay with your hands into anything you can imagine — bowls, sculptures, jewelry, decorative figures, or abstract forms. A grounding, hands-on activity that connects you to one of the oldest art forms in human history.'
  },
  {
    emoji: '🪞',
    name: 'Mirror Mosaic',
    desc: 'The intricate art of arranging tiny mirror pieces into stunning patterns on frames, trays, walls, or decorative objects. The result sparkles from every angle and brings depth, light, and luxury into any space.'
  },
  {
    emoji: '✝️',
    name: 'Religious Icons',
    desc: 'Hand-painted Byzantine icons and religious art for personal devotion, gifts, or churches. Each icon is created with reverence, traditional techniques, and an understanding of the sacred symbolism behind every line and color.'
  },
  {
    emoji: '👜',
    name: 'Tote Bags',
    desc: 'Plain canvas tote bags transformed into wearable art. Choose any design — quotes, illustrations, abstract patterns, your name — and walk away with a tote that\'s genuinely one-of-a-kind. Great for gifts and personal use.'
  },
  {
    emoji: '💍',
    name: 'Accessories',
    desc: 'Custom-painted accessories — phone cases, jewelry boxes, keychains, pencil cases, headbands, and more. Small canvases for big personalities, perfect for adding a personal touch to everyday objects.'
  },
  {
    emoji: '🪶',
    name: 'Dream Catchers',
    desc: 'Handcrafted dream catchers using traditional weaving techniques combined with feathers, beads, threads, and personal touches. Beautiful as wall art, gifts, or symbolic keepsakes — each one unique to its maker.'
  },
  {
    emoji: '🖼️',
    name: 'Antique Recovery',
    desc: 'Lovingly restore old and precious things — vintage furniture pieces, frames, mirrors, family heirlooms, and forgotten treasures. We breathe new life into what time has worn down, preserving the soul of the original.'
  },
  {
    emoji: '🎭',
    name: 'Wood, Masks & More',
    desc: 'Painting on wood (boxes, frames, signs, panels), masks (Venetian-style, ceremonial, theatrical), and any other surface that takes paint. If it can hold color, we can transform it.'
  }
];

function renderActivities() {
  const grid = document.getElementById('activities-grid');
  if (!grid) return;
  grid.innerHTML = activities.map((a, i) => `
    <div class="da-activity-card reveal ${i > 3 ? 'reveal-delay-' + (i % 5 + 1) : ''}" onclick="openActivityModal(${i})">
      <div class="da-activity-emoji">${a.emoji}</div>
      <div class="da-activity-name">${a.name}</div>
    </div>
  `).join('');

  // Re-bind reveal observer for newly created elements
  const newReveals = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  newReveals.forEach(el => observer.observe(el));
}

function openActivityModal(index) {
  const a = activities[index];
  const content = `
    <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">${a.emoji}</div>
    <h3>${a.name}</h3>
    <p>${a.desc}</p>
    <a href="https://wa.me/9613341253?text=Hi%20Del'%20Arts!%20I'd%20love%20to%20try%20${encodeURIComponent(a.name)}." target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.5rem; background: #000; color: #FED606; padding: 0.85rem 1.75rem; border-radius: 50px; font-weight: 600; transition: all 0.3s ease;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      Try this activity
    </a>
  `;
  openModal(content);
}

// ============================================
// GALLERY DATA
// ============================================
// Build the Portraits image list (cover + 20 popup images)
const portraitImages = Array.from({length: 20}, (_, i) =>
  `../images/portrait-${String(i + 1).padStart(2, '0')}.jpg`
);

// Build the Canvas image list (cover + 12 popup images)
const canvasImages = Array.from({length: 12}, (_, i) =>
  `../images/canvas-${String(i + 1).padStart(2, '0')}.jpg`
);

// Build the Vitrail image list (cover + 10 popup images)
const vitrailImages = Array.from({length: 10}, (_, i) =>
  `../images/vitrail-${String(i + 1).padStart(2, '0')}.jpg`
);

// Build the Clothes Paint image list (existing cover popup + 18 popup images)
const clothesImages = [
  '../images/clothes-cover.jpg',
  ...Array.from({length: 18}, (_, i) =>
    `../images/clothes-${String(i + 1).padStart(2, '0')}.jpg`
  )
];

// Build the Religious Icons image list (10 popup images)
const iconImages = Array.from({length: 10}, (_, i) =>
  `../images/icon-${String(i + 1).padStart(2, '0')}.jpg`
);

// Build the Invitations image list (1 popup image)
const invitationImages = [
  '../images/invitation-01.jpg'
];

const galleryCategories = [
  { name: 'Portraits', initial: 'P', cover: '../images/portrait-cover.jpg', images: portraitImages },
  { name: 'Canvas', initial: 'C', cover: '../images/canvas-cover.jpg', images: canvasImages },
  { name: 'Vitrail', initial: 'V', cover: '../images/vitrail-cover.jpg', images: vitrailImages },
  { name: 'Clothes Paint', initial: 'CP', cover: '../images/clothes-cover.jpg', images: clothesImages },
  { name: 'Religious Icons', initial: 'RI', cover: '../images/icon-cover.jpg', images: iconImages },
  { name: 'Dream Catchers', initial: 'DC', cover: null, images: [], count: 4 },
  { name: 'Tote Bags', initial: 'TB', cover: null, images: [], count: 8 },
  { name: 'Invitations', initial: 'I', cover: '../images/invitation-cover.jpg', images: invitationImages }
];

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = galleryCategories.map((g, i) => {
    const hasImages = g.images && g.images.length > 0;
    const count = hasImages ? g.images.length : (g.count || 0);
    const cardInner = (hasImages && g.cover)
      ? `<img src="${g.cover}" alt="${g.name} by Delara Bitar" class="da-gallery-img" loading="lazy">`
      : `<div class="da-gallery-placeholder">${g.initial}</div>`;
    return `
    <div class="da-gallery-card reveal ${i > 3 ? 'reveal-delay-' + (i % 5 + 1) : ''}" onclick="openGalleryModal(${i})">
      ${cardInner}
      <div class="da-gallery-count">+${count}</div>
      <div class="da-gallery-overlay">
        <span class="da-gallery-label">${g.name}</span>
      </div>
    </div>
  `;
  }).join('');

  // Re-bind reveal observer
  const newReveals = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  newReveals.forEach(el => observer.observe(el));
}

function openGalleryModal(index) {
  const g = galleryCategories[index];
  const hasImages = g.images && g.images.length > 0;
  let inner;
  if (hasImages) {
    inner = g.images.map((src, i) =>
      `<img src="${src}" alt="${g.name} #${i + 1} by Delara Bitar" class="modal-gallery-img" loading="lazy" onclick="openLightbox('${src}')">`
    ).join('');
  } else {
    const cnt = g.count || 0;
    inner = Array.from({length: cnt}, (_, i) =>
      `<div class="modal-gallery-placeholder">${g.name}<br>#${i + 1}<br><small>Photo coming soon</small></div>`
    ).join('');
  }
  const content = `
    <h3>${g.name}</h3>
    <p style="margin-bottom: 1rem; color: #666;">A selection of Delara's ${g.name.toLowerCase()} work.</p>
    <div class="modal-gallery">${inner}</div>
  `;
  openModal(content);
}

// Lightbox: click a gallery image to view it large
function openLightbox(src) {
  let lb = document.getElementById('da-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'da-lightbox';
    lb.className = 'da-lightbox';
    lb.onclick = () => { lb.classList.remove('open'); };
    lb.innerHTML = '<img src="" alt="Artwork by Delara Bitar"><span class="da-lightbox-close">&times;</span>';
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src;
  lb.classList.add('open');
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderActivities();
  renderGallery();
});
