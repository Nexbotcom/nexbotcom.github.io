fetch('nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;

    document.getElementById('menu-toggle').onclick = () => {
      document.getElementById('menu-panel').style.display = 'flex';
    };
    document.getElementById('menu-close').onclick = () => {
      document.getElementById('menu-panel').style.display = 'none';
    };

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === currentPage) {
        link.style.color = '#6ee7ff';
        link.style.fontWeight = 'bold';
      }
    });
  });
