document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    function setTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        if (isDark) {
            themeIcon.textContent = '☀️';
            toggleBtn.title = 'Switch to Light Mode';
            toggleBtn.querySelector('.sr-only').textContent = 'Switch to Light Mode';
        } else {
            themeIcon.textContent = '🌙';
            toggleBtn.title = 'Switch to Dark Mode';
            toggleBtn.querySelector('.sr-only').textContent = 'Switch to Dark Mode';
        }
    }

    // Set initial mode based on user preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);

    toggleBtn.addEventListener('click', function () {
        setTheme(!body.classList.contains('dark-mode'));
    });

    // Hamburger menu toggle
    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            const expanded = nav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', expanded);
        });
    }
});