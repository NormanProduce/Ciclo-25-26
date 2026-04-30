(function () {

  /* ─── DARK MODE ─────────────────────────────────────── */
  const THEME_KEY = 'np_theme';

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    const btn = document.getElementById('uwThemeBtn');
    if (btn) btn.innerHTML = dark ? sunIcon() : moonIcon();
  }

  function toggleTheme() {
    const dark = !document.documentElement.classList.contains('dark');
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    applyTheme(dark);
  }

  function sunIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }

  function moonIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  // Apply saved theme immediately to avoid flash
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === 'dark');

  /* ─── DARK MODE CSS ──────────────────────────────────── */
  const darkStyle = document.createElement('style');
  darkStyle.textContent = `
    /* ── Transitions ── */
    body, header, footer, table, th, td, .card, .section,
    input, select, textarea, button, .modal-overlay, .modal-card,
    .table-wrapper, .chart-wrapper, .container, .action-bar,
    .hero, .highlight-box { transition: background 0.25s, color 0.25s, border-color 0.25s; }

    /* ── Dark variables ── */
    html.dark {
      --primary-green:  #4aad75;
      --dark-green:     #2d7a4f;
      --light-green:    #0f2018;
      --bg-color:       #0f1117;
      --card-bg:        #181c27;
      --text-dark:      #e2e8f0;
      --text-light:     #94a3b8;
      --border-color:   #2a3148;
      --warn-color:     #f59e0b;
      /* index.html vars */
      --bg-panel:       #181c27;
      --cream:          #181c27;
      --sand:           #3a3020;
      --text-muted:     #64748b;
      --border:         #2a3148;
    }

    /* ── Base ── */
    html.dark body          { background: #0f1117; color: #e2e8f0; }
    html.dark header        { background: #141820 !important; border-color: #2d7a4f !important; }

    /* ── Navigation ── */
    html.dark nav a         { color: #cbd5e1; }
    html.dark nav a:hover   { color: #4aad75; }
    html.dark nav a.nav-ingresos { background: #2d7a4f; color: #fff; }
    html.dark .btn-back     { color: #94a3b8; border-color: #2a3148; background: #1e2535; }
    html.dark .btn-back:hover { background: #263040; }

    /* ── Cards / Sections ── */
    html.dark .section      { background: #181c27; border-color: #2a3148; }
    html.dark .card         { background: #181c27 !important; border-color: #2a3148 !important; color: #e2e8f0 !important; }
    html.dark .card-value   { color: #e2e8f0 !important; }
    html.dark .card-label   { color: #94a3b8 !important; }
    html.dark .chart-wrapper { background: #181c27; border-color: #2a3148; }
    html.dark .chart-title  { color: #94a3b8; }
    html.dark .highlight-box { background: #0f2018; border-color: #2d7a4f; }

    /* ── Tables ── */
    html.dark .table-wrapper { background: #181c27; border-color: #2a3148; }
    html.dark .table-title  { background: #1e2535; color: #94a3b8; border-color: #2a3148; }
    html.dark table         { background: #181c27; }
    html.dark thead tr      { background: #1a5c35 !important; }
    html.dark th            { background: #1a5c35 !important; color: #e2e8f0 !important; border-color: #2d7a4f !important; }
    html.dark td            { color: #e2e8f0; border-color: #2a3148 !important; }
    html.dark tbody tr:nth-child(even) { background: #141820; }
    html.dark tbody tr:hover { background: #1e2535; }
    html.dark tfoot td      { background: #0f1a14 !important; color: #4aad75 !important; border-color: #2d7a4f !important; }

    /* ── Forms / Inputs ── */
    html.dark input, html.dark select, html.dark textarea {
      background: #1e2535; color: #e2e8f0;
      border-color: #2a3148;
    }
    html.dark input:focus, html.dark select:focus, html.dark textarea:focus {
      border-color: #4aad75; outline: none;
      box-shadow: 0 0 0 3px rgba(74,173,117,0.15);
    }
    html.dark input::placeholder { color: #475569; }
    html.dark label             { color: #94a3b8; }

    /* ── Buttons ── */
    html.dark .btn-action.sec  { background: #1e2535; color: #cbd5e1; border-color: #2a3148; }
    html.dark .btn-action.sec:hover { background: #263040; }

    /* ── Action bar ── */
    html.dark .action-bar { background: #0f2018; border-color: #1a5c35; color: #4aad75; }

    /* ── Modal ── */
    html.dark .modal-overlay   { background: rgba(0,0,0,0.7); }
    html.dark .modal-card      { background: #181c27; color: #e2e8f0; }
    html.dark .modal-header    { border-color: #2a3148; }
    html.dark .modal-header h3 { color: #4aad75; }
    html.dark .modal-body      { background: #181c27; }
    html.dark .form-group label { color: #94a3b8; }

    /* ── Hero ── */
    html.dark .hero { background: linear-gradient(135deg, #1a3a22 0%, #0d1f13 100%) !important; }

    /* ── Footer ── */
    html.dark footer { background: #0a0d0f !important; border-color: #2d7a4f; }

    /* ── index.html right panel ── */
    html.dark .right         { background: #181c27; }
    html.dark .form-header h2 { color: #e2e8f0; }
    html.dark .form-header p  { color: #94a3b8; }
    html.dark .field input   { background: #1e2535; border-color: #2a3148; color: #e2e8f0; }
    html.dark .cycle-selector h3 { color: #e2e8f0; }
    html.dark .cycle-item    { background: #1e2535; color: #e2e8f0; border-color: #2a3148; }
    html.dark .cycle-item:hover { background: #263040; }
    html.dark .cycle-label   { color: #4aad75; }
    html.dark .divider span  { background: #181c27; color: #475569; }
    html.dark .btn-sso       { background: #1e2535; color: #94a3b8; border-color: #2a3148; }

    /* ── User widget ── */
    html.dark .uw-btn        { background: #1e2535 !important; border-color: #2a3148 !important; }
    html.dark .uw-btn:hover  { background: #263040 !important; }
    html.dark .uw-name       { color: #e2e8f0 !important; }
    html.dark .uw-email      { color: #64748b !important; }
    html.dark .uw-dropdown   { background: #181c27 !important; border-color: #2a3148 !important; box-shadow: 0 8px 28px rgba(0,0,0,0.4) !important; }
    html.dark .uw-item       { color: #e2e8f0 !important; }
    html.dark .uw-item:hover { background: #1e2535 !important; }
    html.dark .uw-item svg   { color: #64748b !important; }
    html.dark .uw-item.uw-danger { border-color: #2a3148 !important; }
    html.dark #uwThemeBtn    { background: #1e2535 !important; border-color: #2a3148 !important; color: #e2e8f0 !important; }
    html.dark #uwThemeBtn:hover { background: #263040 !important; }

    /* ── Misc badges ── */
    html.dark .badge-op   { background: #0f2018; color: #4aad75; }
    html.dark .badge-adm  { background: #1a1530; color: #a78bfa; }
    html.dark .badge-cultivo { background: #1e1040; color: #c084fc; }
    html.dark .badge-todos   { background: #1e2535; color: #94a3b8; }

    /* ── Scrollbar (Webkit) ── */
    html.dark ::-webkit-scrollbar { width: 8px; height: 8px; }
    html.dark ::-webkit-scrollbar-track { background: #0f1117; }
    html.dark ::-webkit-scrollbar-thumb { background: #2a3148; border-radius: 4px; }
    html.dark ::-webkit-scrollbar-thumb:hover { background: #3a4158; }
  `;
  document.head.appendChild(darkStyle);

  /* ─── AUTH CHECK ─────────────────────────────────────── */
  const USERS_KEY = 'np_users';
  const defaultUsers = [
    { id: 'u1', nombre: 'Carlos Robles', email: 'carlos.robles@mail.com', username: 'admin', password: 'Norman01', rol: 'Administrador' }
  ];

  function getStoredUser() {
    try { return JSON.parse(sessionStorage.getItem('np_current_user')); } catch { return null; }
  }

  if (!sessionStorage.getItem('np_logged')) {
    location.replace('index.html');
    return;
  }

  const user = getStoredUser() || defaultUsers[0];
  const initials = user.nombre.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  /* ─── WIDGET CSS ─────────────────────────────────────── */
  const widgetStyle = document.createElement('style');
  widgetStyle.textContent = `
    .uw-group { display: flex; align-items: center; gap: 8px; }
    .uw-wrap { position: relative; display: inline-flex; align-items: center; }
    .uw-btn {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 10px 6px 7px;
      background: #fff; border: 1px solid #d4cdb8;
      border-radius: 8px; cursor: pointer;
      font-family: 'Barlow', sans-serif;
      transition: background 0.2s, border-color 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    }
    .uw-btn:hover { background: #f5f2ec; border-color: #c8b98a; }
    .uw-avatar {
      width: 30px; height: 30px; border-radius: 50%;
      background: #4a7a20; color: #fff;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 12px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; letter-spacing: 0.04em;
    }
    .uw-info { text-align: left; }
    .uw-name  { font-size: 13px; font-weight: 600; color: #0e1108; line-height: 1.2; white-space: nowrap; }
    .uw-email { font-size: 11px; color: #7a7460; white-space: nowrap; }
    .uw-chevron { color: #7a7460; flex-shrink: 0; transition: transform 0.2s; }
    .uw-wrap.open .uw-chevron { transform: rotate(180deg); }
    .uw-dropdown {
      display: none; position: absolute;
      top: calc(100% + 6px); right: 0;
      min-width: 210px;
      background: #fff; border: 1px solid #d4cdb8;
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(0,0,0,0.12);
      overflow: hidden; z-index: 9999;
      animation: uwFadeIn 0.15s ease;
    }
    @keyframes uwFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
    .uw-wrap.open .uw-dropdown { display: block; }
    .uw-item {
      display: flex; align-items: center; gap: 10px;
      padding: 11px 16px; font-size: 14px;
      font-family: 'Barlow', sans-serif;
      color: #0e1108; background: none; border: none;
      width: 100%; text-align: left; cursor: pointer;
      transition: background 0.15s;
    }
    .uw-item:hover { background: #f5f2ec; }
    .uw-item svg { flex-shrink: 0; color: #7a7460; }
    .uw-item.uw-danger { color: #c0392b; border-top: 1px solid #d4cdb8; }
    .uw-item.uw-danger svg { color: #c0392b; }

    /* Theme toggle button */
    #uwThemeBtn {
      display: flex; align-items: center; justify-content: center;
      width: 34px; height: 34px;
      background: #fff; border: 1px solid #d4cdb8;
      border-radius: 8px; cursor: pointer;
      color: #0e1108;
      box-shadow: 0 1px 4px rgba(0,0,0,0.07);
      transition: background 0.2s, border-color 0.2s, color 0.2s;
      flex-shrink: 0;
    }
    #uwThemeBtn:hover { background: #f5f2ec; border-color: #c8b98a; }
  `;
  document.head.appendChild(widgetStyle);

  /* ─── BUILD WIDGET HTML ──────────────────────────────── */
  const group = document.createElement('div');
  group.className = 'uw-group';

  // Theme toggle
  const themeBtn = document.createElement('button');
  themeBtn.id = 'uwThemeBtn';
  themeBtn.type = 'button';
  themeBtn.title = 'Cambiar tema';
  themeBtn.innerHTML = document.documentElement.classList.contains('dark') ? sunIcon() : moonIcon();
  themeBtn.addEventListener('click', e => { e.stopPropagation(); toggleTheme(); });

  // User widget
  const wrap = document.createElement('div');
  wrap.className = 'uw-wrap';
  wrap.id = 'uwWidget';
  wrap.innerHTML = `
    <button class="uw-btn" id="uwBtn" type="button">
      <div class="uw-avatar">${initials}</div>
      <div class="uw-info">
        <div class="uw-name">${user.nombre}</div>
        <div class="uw-email">${user.email}</div>
      </div>
      <svg class="uw-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="uw-dropdown">
      <button class="uw-item" data-action="perfil">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Perfil
      </button>
      <button class="uw-item" data-action="config">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        Configuración
      </button>
      <button class="uw-item" data-action="usuarios">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Usuarios
      </button>
      <button class="uw-item uw-danger" data-action="logout">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Cerrar sesión
      </button>
    </div>
  `;

  // Toggle dropdown
  wrap.querySelector('#uwBtn').addEventListener('click', e => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });

  // Menu actions
  wrap.querySelectorAll('.uw-item').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.classList.remove('open');
      const action = btn.dataset.action;
      if (action === 'logout') {
        sessionStorage.removeItem('np_logged');
        sessionStorage.removeItem('np_current_user');
        location.replace('index.html');
      } else {
        alert('Próximamente: ' + action.charAt(0).toUpperCase() + action.slice(1));
      }
    });
  });

  document.addEventListener('click', () => wrap.classList.remove('open'));

  group.appendChild(themeBtn);
  group.appendChild(wrap);

  /* ─── MOUNT ──────────────────────────────────────────── */
  function mount() {
    document.querySelectorAll('[onclick*="cerrarSesion"], [title="Salir"]').forEach(el => el.remove());

    const target =
      document.querySelector('.header-right') ||
      document.querySelector('.header-container');

    if (target) {
      target.appendChild(group);
    } else {
      group.style.cssText = 'position:fixed;top:14px;right:18px;z-index:9999;';
      document.body.appendChild(group);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

})();
