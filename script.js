let isDark = false;

const toggleButton = document.querySelector('#theme-toggle');
const footer = document.querySelector('#card-footer');

toggleButton.addEventListener('click', () => {
  isDark = !isDark;

  document.body.classList.toggle('dark', isDark);

  toggleButton.textContent = isDark
    ? `☀️ โหมดกลางวัน`
    : `🌙 โหมดกลางคืน`;
});


// เปลี่ยนชื่อหลักจาก input
const nameInput = document.querySelector('#card_bio');
const mainName = document.querySelector('#main-name');

nameInput.addEventListener('input', () => {
  mainName.textContent = nameInput.value;
});


// ปี footer
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} — Deploy ด้วย GitHub Pages 🚀`;