function updateToggleUI() {
  const toggleText = document.getElementById('toggle-text');
  const themeIcon = document.getElementById('theme-icon');
  const isDark = document.body.classList.contains('dark-mode');

  if (toggleText) {
    toggleText.textContent = isDark ? 'Mode clair' : 'Mode sombre';
  }

  if (themeIcon) {
    themeIcon.innerHTML = isDark
      ? `<path d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,
        0.3-2.4c0.1-0.3,0-0.7-0.3-1c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,
        7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,
        0-0.7-0.3-1C22.1,13.7,21.7,13.6,21.4,13.7z"
        fill="currentColor"/>`
      : `<circle cx="12" cy="12" r="5" stroke="currentColor" fill="none" stroke-width="2"/>
         <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
         M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
         stroke="currentColor" fill="none" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round"/>`;
  }
}

function loadParticles() {
  const isDark = document.body.classList.contains('dark-mode');

  tsParticles.load("tsparticles", {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: isDark ? "#0f1117" : "#f5f5f5"
    },
    particles: {
      number: { value: 50 },
      color: { value: isDark ? "#3A506B" : "#4A4A4A" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 120,
        color: isDark ? "#3A506B" : "#999999",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "out"
      }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100 } }
    }
  });
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateToggleUI();
    loadParticles();
  });

  updateToggleUI();
}

function init() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  initThemeToggle();
  loadParticles();
}

document.addEventListener('DOMContentLoaded', () => {
  init();

  const swup = new Swup();

  document.addEventListener('swup:contentReplaced', () => {
    init();
  });
});
