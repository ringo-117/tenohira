document.addEventListener('DOMContentLoaded', () => {
  fetch('parts/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
    });

  fetch('parts/availability.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('availability').innerHTML = html;
    });

  fetch('parts/line.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('line-bottom').innerHTML = html;
    });

  fetch('parts/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-footer').innerHTML = html;
    });
});