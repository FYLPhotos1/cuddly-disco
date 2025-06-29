document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
