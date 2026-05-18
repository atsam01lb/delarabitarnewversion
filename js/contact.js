/* ============================================
   CONTACT PAGE — WhatsApp Form Submission
   ============================================ */

function sendWhatsAppMessage(event) {
  event.preventDefault();

  const name = document.getElementById('ct-name').value.trim();
  const phone = document.getElementById('ct-phone').value.trim();
  const email = document.getElementById('ct-email').value.trim();
  const subject = document.getElementById('ct-subject').value;
  const message = document.getElementById('ct-message').value.trim();

  if (!name || !subject || !message) {
    alert('Please fill in your name, subject, and message.');
    return;
  }

  // Build the WhatsApp message
  let waMessage = `*New Inquiry — ${subject}*\n\n`;
  waMessage += `*Name:* ${name}\n`;
  if (phone) waMessage += `*Phone:* ${phone}\n`;
  if (email) waMessage += `*Email:* ${email}\n`;
  waMessage += `\n*Message:*\n${message}`;

  // Encode and open WhatsApp
  const encodedMessage = encodeURIComponent(waMessage);
  const whatsappURL = `https://wa.me/9613341253?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}
