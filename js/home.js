/* ============================================
   HOME PAGE — Additional testimonials popup
   ============================================ */

const moreTestimonials = [
  {
    text: "I've been bringing my kids to Delar' arts for years. Delara has a gift for making children feel like real artists. The summer workshops are the highlight of their year.",
    name: "Carla M.",
    initial: "C",
    source: "Delar' arts client"
  },
  {
    text: "Got my piercing done at Delar Tattoo and was blown away by how professional everything was. Sterile, careful, and beautiful aftercare guidance. Healed perfectly.",
    name: "Yara S.",
    initial: "Y",
    source: "Delar Tattoo client"
  },
  {
    text: "Delara painted custom portraits of both my grandparents from old photos. The way she captured their souls — not just their faces — moved me to tears. Forever grateful.",
    name: "Joseph A.",
    initial: "J",
    source: "Custom portrait"
  }
];

function showMoreTestimonials() {
  const cards = moreTestimonials.map(t => `
    <div style="background: #fafafa; padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem;">
      <div style="font-family: var(--font-display); font-size: 2.5rem; line-height: 1; color: #FED606; margin-bottom: 0.25rem; font-style: italic;">"</div>
      <p style="font-size: 0.95rem; line-height: 1.7; color: #333; margin-bottom: 1rem; font-style: italic;">${t.text}</p>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #FED606, #FF5BB5); display: flex; align-items: center; justify-content: center; color: #000; font-weight: 700;">${t.initial}</div>
        <div>
          <div style="font-weight: 600; font-size: 0.9rem;">${t.name}</div>
          <div style="font-size: 0.75rem; color: #888;">${t.source}</div>
        </div>
      </div>
    </div>
  `).join('');

  const content = `
    <h3>More Stories</h3>
    <p style="margin-bottom: 1.5rem; color: #666;">Real words from real clients across both worlds.</p>
    ${cards}
  `;
  openModal(content);
}
