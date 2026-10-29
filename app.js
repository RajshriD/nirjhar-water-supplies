const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuToggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
const result = document.getElementById('formResult');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    'NIRJHAR supply enquiry',
    `Name: ${data.name}`,
    `Business: ${data.business || 'Not provided'}`,
    `Mobile: ${data.phone}`,
    `Email: ${data.email || 'Not provided'}`,
    `Interest: ${data.interest}`,
    `Message: ${data.message || 'Not provided'}`
  ].join('\n');
  result.style.display = 'block';
  result.textContent = 'Your enquiry is ready to copy. This prototype has not sent or saved your information.\n\n' + message;
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(message);
      result.textContent = 'Enquiry details copied to your clipboard. This prototype has not sent or saved your information. Paste the message into your preferred email or messaging app.\n\n' + message;
    } catch (_) {}
  }
});
