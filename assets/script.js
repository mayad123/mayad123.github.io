// Theme toggle with localStorage persistence
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }
  function currentTheme() {
    return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }
  function toggle() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }
  if (btn) btn.addEventListener('click', toggle);
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Projects tabs
  const tabsRoot = document.querySelector('[data-project-tabs]');
  if (tabsRoot) {
    const tabs = Array.from(tabsRoot.querySelectorAll('[role="tab"]'));
    const panels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"]'));

    function activateTab(nextTab) {
      tabs.forEach((tab) => {
        const active = tab === nextTab;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.tabIndex = active ? 0 : -1;
      });

      panels.forEach((panel) => {
        const active = panel.id === nextTab.getAttribute('aria-controls');
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        activateTab(nextTab);
        nextTab.focus();
      });
    });
  }
})();

