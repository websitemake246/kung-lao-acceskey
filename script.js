// Theme toggle
const themeBtn = document.getElementById('toggleTheme');
function setTheme(mode) {
  document.body.classList.toggle('dark', mode === 'dark');
  themeBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', mode);
}
const saved = localStorage.getItem('theme') || 'light';
setTheme(saved);
themeBtn.onclick = () => {
  const newMode = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newMode);
};

// Passcode logic
const checkBtn = document.getElementById('checkBtn');
const resultBox = document.getElementById('resultBox');
const passcodeDiv = document.getElementById('passcode');

checkBtn.addEventListener('click', async () => {
  const username = document.getElementById('telegramUsername').value.trim();
  if (!username) return alert('Please enter your Telegram username.');

  checkBtn.disabled = true;
  checkBtn.textContent = 'Checking...';

  try {
    const res = await fetch(`https://your-api-url.com/check-user/${username}`);
    const data = await res.json();

    if (data.success) {
      passcodeDiv.textContent = data.passcode;
      resultBox.style.display = 'block';
    } else {
      alert('❌ ' + data.message);
    }
  } catch (err) {
    alert('Server error. Try again later.');
  }

  checkBtn.disabled = false;
  checkBtn.textContent = "✅ I've Joined All";
});
