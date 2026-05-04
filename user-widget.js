(function () {

  /* ─── DARK MODE ─────────────────────────────────────── */
  const THEME_KEY   = 'np_theme';
  const PROFILE_KEY = 'np_profile';

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

  applyTheme(localStorage.getItem(THEME_KEY) === 'dark');

  /* ─── DARK MODE CSS ──────────────────────────────────── */
  const darkStyle = document.createElement('style');
  darkStyle.textContent = `
    body, header, footer, table, th, td, .card, .section,
    input, select, textarea, button, .modal-overlay, .modal-card,
    .table-wrapper, .chart-wrapper, .container, .action-bar,
    .hero, .highlight-box { transition: background 0.25s, color 0.25s, border-color 0.25s; }

    html.dark {
      --primary-green: #4aad75; --dark-green: #2d7a4f; --light-green: #0f2018;
      --bg-color: #0f1117; --card-bg: #181c27; --text-dark: #e2e8f0;
      --text-light: #94a3b8; --border-color: #2a3148; --warn-color: #f59e0b;
      --bg-panel: #181c27; --cream: #181c27; --sand: #3a3020;
      --text-muted: #64748b; --border: #2a3148;
    }
    html.dark body          { background: #0f1117; color: #e2e8f0; }
    html.dark header        { background: #141820 !important; border-color: #2d7a4f !important; }
    html.dark img[alt="Norman Produce"] { filter: brightness(0) invert(1) !important; }
    html.dark nav a         { color: #cbd5e1; }
    html.dark nav a:hover   { color: #4aad75; }
    html.dark nav a.nav-ingresos { background: #2d7a4f; color: #fff; }
    html.dark .btn-back     { color: #94a3b8; border-color: #2a3148; background: #1e2535; }
    html.dark .btn-back:hover { background: #263040; }
    html.dark .section      { background: #181c27; border-color: #2a3148; }
    html.dark .card         { background: #181c27 !important; border-color: #2a3148 !important; color: #e2e8f0 !important; }
    html.dark .card-value   { color: #e2e8f0 !important; }
    html.dark .card-label   { color: #94a3b8 !important; }
    html.dark .chart-wrapper { background: #181c27; border-color: #2a3148; }
    html.dark .chart-title  { color: #94a3b8; }
    html.dark .highlight-box { background: #0f2018; border-color: #2d7a4f; }
    html.dark .table-wrapper { background: #181c27; border-color: #2a3148; }
    html.dark .table-title  { background: #1e2535; color: #94a3b8; border-color: #2a3148; }
    html.dark table         { background: #181c27; }
    html.dark thead tr      { background: #1a5c35 !important; }
    html.dark th            { background: #1a5c35 !important; color: #e2e8f0 !important; border-color: #2d7a4f !important; }
    html.dark td            { color: #e2e8f0; border-color: #2a3148 !important; }
    html.dark tbody tr:nth-child(even) { background: #141820; }
    html.dark tbody tr:hover { background: #1e2535; }
    html.dark tfoot td      { background: #0f1a14 !important; color: #4aad75 !important; border-color: #2d7a4f !important; }
    html.dark input, html.dark select, html.dark textarea { background: #1e2535; color: #e2e8f0; border-color: #2a3148; }
    html.dark input:focus, html.dark select:focus { border-color: #4aad75; box-shadow: 0 0 0 3px rgba(74,173,117,0.15); }
    html.dark input::placeholder { color: #475569; }
    html.dark label         { color: #94a3b8; }
    html.dark .btn-action.sec { background: #1e2535; color: #cbd5e1; border-color: #2a3148; }
    html.dark .btn-action.sec:hover { background: #263040; }
    html.dark .action-bar   { background: #0f2018; border-color: #1a5c35; color: #4aad75; }
    html.dark .modal-overlay { background: rgba(0,0,0,0.7); }
    html.dark .modal-card   { background: #181c27; color: #e2e8f0; }
    html.dark .modal-header { border-color: #2a3148; }
    html.dark .modal-header h3 { color: #4aad75; }
    html.dark .modal-body   { background: #181c27; }
    html.dark .form-group label { color: #94a3b8; }
    html.dark .hero { background: linear-gradient(135deg, #1a3a22 0%, #0d1f13 100%) !important; }
    html.dark footer { background: #0a0d0f !important; border-color: #2d7a4f; }
    html.dark .right         { background: #181c27; }
    html.dark .form-header h2 { color: #e2e8f0; }
    html.dark .form-header p  { color: #94a3b8; }
    html.dark .field input   { background: #1e2535; border-color: #2a3148; color: #e2e8f0; }
    html.dark .cycle-selector h3 { color: #e2e8f0; }
    html.dark .cycle-item   { background: #1e2535; color: #e2e8f0; border-color: #2a3148; }
    html.dark .cycle-item:hover { background: #263040; }
    html.dark .cycle-label  { color: #4aad75; }
    html.dark .divider span { background: #181c27; color: #475569; }
    html.dark .btn-sso      { background: #1e2535; color: #94a3b8; border-color: #2a3148; }
    html.dark .uw-btn       { background: #1e2535 !important; border-color: #2a3148 !important; }
    html.dark .uw-btn:hover { background: #263040 !important; }
    html.dark .uw-name      { color: #e2e8f0 !important; }
    html.dark .uw-email     { color: #64748b !important; }
    html.dark .uw-dropdown  { background: #181c27 !important; border-color: #2a3148 !important; box-shadow: 0 8px 28px rgba(0,0,0,0.4) !important; }
    html.dark .uw-item      { color: #e2e8f0 !important; }
    html.dark .uw-item:hover { background: #1e2535 !important; }
    html.dark .uw-item svg  { color: #64748b !important; }
    html.dark .uw-item.uw-danger { border-color: #2a3148 !important; }
    html.dark #uwThemeBtn   { background: #1e2535 !important; border-color: #2a3148 !important; color: #e2e8f0 !important; }
    html.dark #uwThemeBtn:hover { background: #263040 !important; }
    html.dark .badge-op     { background: #0f2018; color: #4aad75; }
    html.dark .badge-adm    { background: #1a1530; color: #a78bfa; }
    html.dark .badge-cultivo { background: #1e1040; color: #c084fc; }
    html.dark .badge-todos  { background: #1e2535; color: #94a3b8; }
    html.dark ::-webkit-scrollbar { width: 8px; height: 8px; }
    html.dark ::-webkit-scrollbar-track { background: #0f1117; }
    html.dark ::-webkit-scrollbar-thumb { background: #2a3148; border-radius: 4px; }
    html.dark ::-webkit-scrollbar-thumb:hover { background: #3a4158; }

    /* Profile modal dark */
    html.dark .pf-overlay   { background: rgba(0,0,0,0.75) !important; }
    html.dark .pf-card      { background: #181c27 !important; color: #e2e8f0 !important; }
    html.dark .pf-header    { background: linear-gradient(135deg,#1a3a22,#0d1f13) !important; }
    html.dark .pf-field input, html.dark .pf-field select { background: #1e2535 !important; border-color: #2a3148 !important; color: #e2e8f0 !important; }
    html.dark .pf-field label { color: #94a3b8 !important; }
    html.dark .pf-section-title { color: #4aad75 !important; border-color: #2a3148 !important; }
    html.dark .pf-info-row  { border-color: #2a3148 !important; }
    html.dark .pf-info-label { color: #64748b !important; }
    html.dark .pf-info-value { color: #e2e8f0 !important; }
    html.dark .pf-btn-cancel { background: #1e2535 !important; color: #94a3b8 !important; border-color: #2a3148 !important; }
  `;
  document.head.appendChild(darkStyle);

  /* ─── PAGE TRANSITION LOADER ────────────────────────── */
  const loaderStyle = document.createElement('style');
  loaderStyle.textContent = `
    #npLoader {
      position: fixed; inset: 0; z-index: 999999;
      background: #0a0f07;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 0;
      pointer-events: all;
      transition: opacity 0.45s ease;
    }
    #npLoader.np-hidden { opacity: 0; pointer-events: none; }
    #npLoader .np-logo {
      height: 54px; object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: 0; transform: translateY(10px);
      transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
    }
    #npLoader.np-ready .np-logo { opacity: 1; transform: translateY(0); }
    #npLoader .np-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 10px; font-weight: 700; letter-spacing: 0.32em;
      text-transform: uppercase; color: #4a7a20;
      margin-top: 14px; margin-bottom: 36px;
      opacity: 0; transition: opacity 0.4s ease 0.15s;
    }
    #npLoader.np-ready .np-tag { opacity: 1; }
    #npLoader .np-bar-wrap {
      width: 140px; height: 2px;
      background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden;
    }
    #npLoader .np-bar {
      height: 100%; width: 0%;
      background: linear-gradient(90deg, #2e5c14, #6db33f, #a3e635);
      border-radius: 2px;
      transition: width 0.55s cubic-bezier(0.4,0,0.2,1);
    }
    #npLoader .np-grain {
      position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      background-size: 180px;
      opacity: 0.4;
    }
    @keyframes npFadeInPage { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
    .np-page-enter { animation: npFadeInPage 0.4s ease forwards; }
  `;
  document.head.appendChild(loaderStyle);

  function createLoader() {
    if (document.getElementById('npLoader')) return;
    const el = document.createElement('div');
    el.id = 'npLoader';
    el.innerHTML = `
      <div class="np-grain"></div>
      <img class="np-logo" src="Imagenes/norman_logo.png" alt="Norman">
      <div class="np-tag">Yaqui Valley Produce</div>
      <div class="np-bar-wrap"><div class="np-bar" id="npLoaderBar"></div></div>`;
    document.body.appendChild(el);
    // Animate in
    requestAnimationFrame(() => {
      el.classList.add('np-ready');
      setTimeout(() => { document.getElementById('npLoaderBar').style.width = '100%'; }, 80);
    });
  }

  function hideLoader() {
    const el = document.getElementById('npLoader');
    if (!el) return;
    el.classList.add('np-hidden');
    setTimeout(() => el.remove(), 480);
  }

  function navigateTo(href) {
    createLoader();
    setTimeout(() => { window.location.href = href; }, 520);
  }

  // Show loader on entry then fade out
  createLoader();
  window.addEventListener('load', () => {
    setTimeout(hideLoader, 280);
  });
  // Fallback if load already fired
  if (document.readyState === 'complete') setTimeout(hideLoader, 280);

  // Intercept internal navigation links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || a.target === '_blank') return;
    e.preventDefault();
    navigateTo(href);
  }, true);

  /* ─── AUTH ───────────────────────────────────────────── */
  const onIndexPage = location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname === '';
  if (!sessionStorage.getItem('np_logged')) {
    if (!onIndexPage) location.replace('index.html');
    return; // no montar widget si no hay sesión
  }

  const defaultUsers = [
    { id:'u1', nombre:'Carlos Robles', email:'carlos.robles@mail.com', username:'admin', password:'Norman01', rol:'Administrador', activo:true }
  ];

  function getStoredUser() {
    try { return JSON.parse(sessionStorage.getItem('np_current_user')); } catch { return null; }
  }

  function loadProfile() {
    const base = getStoredUser() || defaultUsers[0];
    try {
      const saved = JSON.parse(localStorage.getItem(PROFILE_KEY)) || {};
      return { foto: null, estado: 'Activo', ...base, ...saved };
    } catch { return { foto: null, estado: 'Activo', ...base }; }
  }

  function saveProfile(data) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(data));
    // Sync nombre back to session user
    const su = getStoredUser() || defaultUsers[0];
    su.nombre = data.nombre;
    sessionStorage.setItem('np_current_user', JSON.stringify(su));
  }

  let profile = loadProfile();

  /* ─── WIDGET CSS ─────────────────────────────────────── */
  const widgetStyle = document.createElement('style');
  widgetStyle.textContent = `
    .uw-group { display:flex; align-items:center; gap:8px; }
    .uw-wrap  { position:relative; display:inline-flex; align-items:center; }

    .uw-btn {
      display:flex; align-items:center; gap:8px; padding:5px 10px 5px 6px;
      background:#fff; border:1px solid #d4cdb8; border-radius:8px;
      cursor:pointer; font-family:'Barlow',sans-serif;
      box-shadow:0 1px 4px rgba(0,0,0,0.07);
      transition:background 0.2s, border-color 0.2s;
    }
    .uw-btn:hover { background:#f5f2ec; border-color:#c8b98a; }

    .uw-avatar {
      width:32px; height:32px; border-radius:50%;
      background:#4a7a20; color:#fff; font-family:'Barlow Condensed',sans-serif;
      font-size:12px; font-weight:700; letter-spacing:0.04em;
      display:flex; align-items:center; justify-content:center;
      flex-shrink:0; overflow:hidden;
    }
    .uw-avatar img { width:100%; height:100%; object-fit:cover; border-radius:50%; }

    .uw-info    { text-align:left; }
    .uw-name    { font-size:13px; font-weight:600; color:#0e1108; line-height:1.2; white-space:nowrap; }
    .uw-email   { font-size:11px; color:#7a7460; white-space:nowrap; }
    .uw-chevron { color:#7a7460; flex-shrink:0; transition:transform 0.2s; }
    .uw-wrap.open .uw-chevron { transform:rotate(180deg); }

    .uw-dropdown {
      display:none; position:absolute; top:calc(100% + 6px); right:0;
      min-width:210px; background:#fff; border:1px solid #d4cdb8;
      border-radius:10px; box-shadow:0 8px 28px rgba(0,0,0,0.12);
      overflow:hidden; z-index:9999; animation:uwFadeIn 0.15s ease;
    }
    @keyframes uwFadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
    .uw-wrap.open .uw-dropdown { display:block; }

    .uw-item {
      display:flex; align-items:center; gap:10px; padding:11px 16px;
      font-size:14px; font-family:'Barlow',sans-serif; color:#0e1108;
      background:none; border:none; width:100%; text-align:left;
      cursor:pointer; transition:background 0.15s;
    }
    .uw-item:hover { background:#f5f2ec; }
    .uw-item svg { flex-shrink:0; color:#7a7460; }
    .uw-item.uw-danger { color:#c0392b; border-top:1px solid #d4cdb8; }
    .uw-item.uw-danger svg { color:#c0392b; }

    #uwThemeBtn {
      display:flex; align-items:center; justify-content:center;
      width:34px; height:34px; background:#fff; border:1px solid #d4cdb8;
      border-radius:8px; cursor:pointer; color:#0e1108;
      box-shadow:0 1px 4px rgba(0,0,0,0.07);
      transition:background 0.2s, border-color 0.2s, color 0.2s; flex-shrink:0;
    }
    #uwThemeBtn:hover { background:#f5f2ec; border-color:#c8b98a; }

    /* ── Profile modal ── */
    .pf-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.55);
      display:flex; align-items:center; justify-content:center;
      z-index:99999; animation:uwFadeIn 0.2s ease;
    }
    .pf-card {
      background:#fff; border-radius:16px; width:420px; max-width:95vw;
      box-shadow:0 24px 60px rgba(0,0,0,0.18); overflow:hidden;
      font-family:'Barlow',sans-serif;
    }
    .pf-header {
      background:linear-gradient(135deg,#2d7a4f,#1a5c35);
      padding:32px 28px 24px; display:flex; flex-direction:column; align-items:center; gap:12px;
    }
    .pf-avatar-wrap { position:relative; cursor:pointer; }
    .pf-avatar-big {
      width:80px; height:80px; border-radius:50%; background:#4a7a20;
      color:#fff; font-family:'Barlow Condensed',sans-serif;
      font-size:28px; font-weight:700; letter-spacing:0.05em;
      display:flex; align-items:center; justify-content:center;
      border:3px solid rgba(255,255,255,0.35); overflow:hidden;
    }
    .pf-avatar-big img { width:100%; height:100%; object-fit:cover; }
    .pf-avatar-overlay {
      position:absolute; inset:0; border-radius:50%;
      background:rgba(0,0,0,0.45); display:flex; align-items:center;
      justify-content:center; opacity:0; transition:opacity 0.2s; color:#fff;
    }
    .pf-avatar-wrap:hover .pf-avatar-overlay { opacity:1; }
    .pf-header-name { color:#fff; font-size:18px; font-weight:700; margin:0; text-align:center; }
    .pf-role-badge {
      padding:3px 12px; border-radius:20px; font-size:12px; font-weight:600;
      letter-spacing:0.06em; text-transform:uppercase;
    }
    .pf-role-admin   { background:rgba(255,255,255,0.2); color:#fff; }
    .pf-role-usuario { background:rgba(100,180,255,0.25); color:#d0eaff; }
    .pf-status-dot {
      width:8px; height:8px; border-radius:50%; display:inline-block; margin-right:5px;
    }
    .pf-status-activo  { background:#4ade80; }
    .pf-status-linea   { background:#60a5fa; }
    .pf-status-ocupado { background:#f59e0b; }
    .pf-status-ausente { background:#94a3b8; }

    .pf-body { padding:24px 28px; }
    .pf-section-title {
      font-family:'Barlow Condensed',sans-serif; font-size:11px; font-weight:700;
      letter-spacing:0.2em; text-transform:uppercase; color:#4a7a20;
      border-bottom:1px solid #e8e4da; padding-bottom:6px; margin:0 0 16px;
    }
    .pf-field { margin-bottom:16px; }
    .pf-field label { display:block; font-size:12px; font-weight:600; color:#7a7460; margin-bottom:5px; }
    .pf-field input, .pf-field select {
      width:100%; padding:9px 12px; border:1px solid #d4cdb8; border-radius:8px;
      font-size:14px; font-family:'Barlow',sans-serif; color:#0e1108;
      background:#fff; outline:none; transition:border-color 0.2s, box-shadow 0.2s;
    }
    .pf-field input:focus, .pf-field select:focus {
      border-color:#4a7a20; box-shadow:0 0 0 3px rgba(74,122,32,0.12);
    }
    .pf-info-row {
      display:flex; justify-content:space-between; align-items:center;
      padding:10px 0; border-bottom:1px solid #f0ede6;
    }
    .pf-info-row:last-child { border-bottom:none; }
    .pf-info-label { font-size:12px; color:#9a8f80; }
    .pf-info-value { font-size:13px; font-weight:600; color:#0e1108; }
    .pf-footer {
      padding:16px 28px; display:flex; justify-content:flex-end; gap:10px;
      border-top:1px solid #f0ede6;
    }
    .pf-btn-cancel {
      padding:9px 18px; border:1px solid #d4cdb8; border-radius:8px;
      background:#fff; color:#7a7460; font-family:'Barlow',sans-serif;
      font-size:13px; cursor:pointer; transition:background 0.15s;
    }
    .pf-btn-cancel:hover { background:#f5f2ec; }
    .pf-btn-save {
      padding:9px 22px; border:none; border-radius:8px;
      background:#4a7a20; color:#fff; font-family:'Barlow',sans-serif;
      font-size:13px; font-weight:600; cursor:pointer; transition:background 0.15s;
    }
    .pf-btn-save:hover { background:#3a6018; }
  `;
  document.head.appendChild(widgetStyle);

  /* ─── AVATAR RENDER ──────────────────────────────────── */
  function renderAvatarInner(p, size = 'sm') {
    const initials = (p.nombre || '?').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    if (p.foto) return `<img src="${p.foto}" alt="${p.nombre}">`;
    return initials;
  }

  function statusDotColor(estado) {
    const map = { 'Activo':'activo', 'En línea':'linea', 'Ocupado':'ocupado', 'Ausente':'ausente' };
    return map[estado] || 'activo';
  }

  /* ─── BUILD WIDGET ───────────────────────────────────── */
  const group = document.createElement('div');
  group.className = 'uw-group';

  const themeBtn = document.createElement('button');
  themeBtn.id = 'uwThemeBtn';
  themeBtn.type = 'button';
  themeBtn.title = 'Cambiar tema';
  themeBtn.innerHTML = document.documentElement.classList.contains('dark') ? sunIcon() : moonIcon();
  themeBtn.addEventListener('click', e => { e.stopPropagation(); toggleTheme(); });

  const wrap = document.createElement('div');
  wrap.className = 'uw-wrap';
  wrap.id = 'uwWidget';

  function buildWrapHTML(p) {
    return `
      <button class="uw-btn" id="uwBtn" type="button">
        <div class="uw-avatar" id="uwAvatarSm">${renderAvatarInner(p)}</div>
        <div class="uw-info">
          <div class="uw-name" id="uwNameSm">${p.nombre}</div>
          <div class="uw-email" id="uwEmailSm">
            <span class="pf-status-dot pf-status-${statusDotColor(p.estado)}"></span>${p.estado || 'Activo'}
          </div>
        </div>
        <svg class="uw-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="uw-dropdown">
        <button class="uw-item" data-action="perfil">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Perfil
        </button>
        <button class="uw-item" data-action="config">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l-.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
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
      </div>`;
  }

  wrap.innerHTML = buildWrapHTML(profile);
  bindWrap();

  function bindWrap() {
    wrap.querySelector('#uwBtn').addEventListener('click', e => {
      e.stopPropagation();
      wrap.classList.toggle('open');
    });
    wrap.querySelectorAll('.uw-item').forEach(btn => {
      btn.addEventListener('click', () => {
        wrap.classList.remove('open');
        const action = btn.dataset.action;
        if (action === 'logout') {
          sessionStorage.removeItem('np_logged');
          sessionStorage.removeItem('np_current_user');
          location.replace('index.html');
        } else if (action === 'perfil') {
          openProfileModal();
        } else if (action === 'usuarios') {
          openUsersModal();
        } else {
          alert('Próximamente: ' + action.charAt(0).toUpperCase() + action.slice(1));
        }
      });
    });
  }

  document.addEventListener('click', () => wrap.classList.remove('open'));

  group.appendChild(themeBtn);
  group.appendChild(wrap);

  /* ─── PROFILE MODAL ──────────────────────────────────── */
  function roleBadgeClass(rol) {
    return rol === 'Administrador' ? 'pf-role-admin' : 'pf-role-usuario';
  }

  function openProfileModal() {
    const p = loadProfile();
    let tempFoto = p.foto;

    const overlay = document.createElement('div');
    overlay.className = 'pf-overlay';
    overlay.id = 'pfOverlay';

    const statusOptions = ['Activo','En línea','Ocupado','Ausente']
      .map(s => `<option value="${s}" ${p.estado === s ? 'selected' : ''}>${s}</option>`).join('');

    overlay.innerHTML = `
      <div class="pf-card">
        <div class="pf-header">
          <div class="pf-avatar-wrap" id="pfAvatarWrap" title="Cambiar foto">
            <div class="pf-avatar-big" id="pfAvatarBig">${p.foto ? `<img src="${p.foto}" id="pfAvatarImg">` : (p.nombre||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
            <div class="pf-avatar-overlay">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <input type="file" id="pfFileInput" accept="image/*" style="display:none">
          </div>
          <p class="pf-header-name" id="pfHeaderName">${p.nombre}</p>
          <span class="pf-role-badge ${roleBadgeClass(p.rol)}">${p.rol || 'Usuario'}</span>
        </div>

        <div class="pf-body">
          <div class="pf-section-title">Información Personal</div>

          <div class="pf-field">
            <label>Nombre completo</label>
            <input type="text" id="pfNombre" value="${p.nombre || ''}" placeholder="Tu nombre completo">
          </div>

          <div class="pf-field">
            <label>Estado</label>
            <select id="pfEstado">${statusOptions}</select>
          </div>

          <div class="pf-section-title" style="margin-top:20px;">Información de cuenta</div>
          <div class="pf-info-row">
            <span class="pf-info-label">Correo</span>
            <span class="pf-info-value">${p.email || '—'}</span>
          </div>
          <div class="pf-info-row">
            <span class="pf-info-label">Usuario</span>
            <span class="pf-info-value">${p.username || '—'}</span>
          </div>
          <div class="pf-info-row">
            <span class="pf-info-label">Rol</span>
            <span class="pf-info-value">${p.rol || 'Usuario'}</span>
          </div>
        </div>

        <div class="pf-footer">
          <button class="pf-btn-cancel" id="pfCancel">Cancelar</button>
          <button class="pf-btn-save" id="pfSave">Guardar cambios</button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    // Photo upload
    const avatarWrap = overlay.querySelector('#pfAvatarWrap');
    const fileInput  = overlay.querySelector('#pfFileInput');
    avatarWrap.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        tempFoto = e.target.result;
        const big = overlay.querySelector('#pfAvatarBig');
        big.innerHTML = `<img src="${tempFoto}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
      };
      reader.readAsDataURL(file);
    });

    // Live name preview
    overlay.querySelector('#pfNombre').addEventListener('input', e => {
      overlay.querySelector('#pfHeaderName').textContent = e.target.value || p.nombre;
    });

    // Cancel
    overlay.querySelector('#pfCancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    // Save
    overlay.querySelector('#pfSave').addEventListener('click', () => {
      const nombre = overlay.querySelector('#pfNombre').value.trim() || p.nombre;
      const estado = overlay.querySelector('#pfEstado').value;
      const updated = { ...p, nombre, estado, foto: tempFoto };
      saveProfile(updated);
      profile = updated;
      // Refresh widget header
      wrap.innerHTML = buildWrapHTML(updated);
      bindWrap();
      overlay.remove();
    });
  }

  /* ─── USERS MODAL ───────────────────────────────────── */
  const USERS_STORE = 'np_users';
  const uidGen = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_STORE)) || defaultUsers; } catch { return defaultUsers; }
  }
  function saveUsers(users) { localStorage.setItem(USERS_STORE, JSON.stringify(users)); }

  const ROLES = ['Administrador','Capturista','Consulta'];
  const ROL_COLORS = { Administrador:'#2d7a4f', Capturista:'#b45309', Consulta:'#1d4ed8' };
  const ROL_BG     = { Administrador:'#d1fae5', Capturista:'#fef3c7', Consulta:'#dbeafe' };

  function initials(nombre) {
    return (nombre||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  }

  function genPassword() {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789@#$!';
    return Array.from({length:10}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  }

  /* Users modal CSS */
  const usersStyle = document.createElement('style');
  usersStyle.textContent = `
    .um-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.55);
      display:flex; align-items:center; justify-content:center;
      z-index:99999; animation:uwFadeIn 0.2s ease;
    }
    .um-card {
      background:#fff; border-radius:16px; width:700px; max-width:96vw;
      max-height:90vh; display:flex; flex-direction:column;
      box-shadow:0 24px 60px rgba(0,0,0,0.18); font-family:'Barlow',sans-serif; overflow:hidden;
    }
    .um-header {
      display:flex; align-items:center; justify-content:space-between;
      padding:20px 28px; border-bottom:1px solid #e8e4da; flex-shrink:0;
    }
    .um-header h2 {
      font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:700;
      text-transform:uppercase; letter-spacing:0.08em; color:#1a2b0e; margin:0;
    }
    .um-header-actions { display:flex; gap:8px; align-items:center; }
    .um-btn-new {
      display:flex; align-items:center; gap:7px; padding:8px 16px;
      background:#2d7a4f; color:#fff; border:none; border-radius:8px;
      font-family:'Barlow',sans-serif; font-size:13px; font-weight:600;
      cursor:pointer; transition:background 0.15s;
    }
    .um-btn-new:hover { background:#1a5c35; }
    .um-close {
      width:32px; height:32px; border:none; background:none; cursor:pointer;
      color:#7a7460; border-radius:6px; display:flex; align-items:center;
      justify-content:center; transition:background 0.15s;
    }
    .um-close:hover { background:#f0ede6; color:#0e1108; }
    .um-body { flex:1; overflow-y:auto; padding:20px 28px; }
    .um-search {
      width:100%; padding:9px 12px 9px 36px; border:1px solid #d4cdb8;
      border-radius:8px; font-size:14px; font-family:'Barlow',sans-serif;
      color:#0e1108; background:#fff; outline:none; margin-bottom:18px;
      transition:border-color 0.2s, box-shadow 0.2s; box-sizing:border-box;
    }
    .um-search:focus { border-color:#4a7a20; box-shadow:0 0 0 3px rgba(74,122,32,0.12); }
    .um-search-wrap { position:relative; }
    .um-search-wrap svg { position:absolute; left:10px; top:50%; transform:translateY(-50%); color:#9a8f80; pointer-events:none; }
    .um-table { width:100%; border-collapse:collapse; }
    .um-table th {
      text-align:left; padding:8px 12px; font-size:11px; font-weight:700;
      letter-spacing:0.12em; text-transform:uppercase; color:#7a7460;
      border-bottom:2px solid #e8e4da; white-space:nowrap;
    }
    .um-table td { padding:12px 12px; border-bottom:1px solid #f0ede6; vertical-align:middle; }
    .um-table tr:last-child td { border-bottom:none; }
    .um-table tbody tr:hover { background:#fafaf8; }
    .um-user-cell { display:flex; align-items:center; gap:10px; }
    .um-avatar {
      width:36px; height:36px; border-radius:50%; background:#4a7a20; color:#fff;
      font-family:'Barlow Condensed',sans-serif; font-size:13px; font-weight:700;
      display:flex; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden;
    }
    .um-avatar img { width:100%; height:100%; object-fit:cover; border-radius:50%; }
    .um-user-info .um-uname { font-size:14px; font-weight:600; color:#0e1108; }
    .um-user-info .um-uemail { font-size:12px; color:#9a8f80; }
    .um-rol-badge {
      display:inline-block; padding:3px 10px; border-radius:20px;
      font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;
    }
    .um-status {
      display:inline-flex; align-items:center; gap:5px;
      font-size:12px; font-weight:600;
    }
    .um-status-dot { width:7px; height:7px; border-radius:50%; }
    .um-actions { display:flex; gap:4px; }
    .um-icon-btn {
      width:30px; height:30px; border:1px solid #e8e4da; background:#fff;
      border-radius:6px; cursor:pointer; display:flex; align-items:center;
      justify-content:center; color:#7a7460; transition:all 0.15s;
    }
    .um-icon-btn:hover { border-color:#4a7a20; color:#4a7a20; background:#f0faf4; }
    .um-icon-btn.danger:hover { border-color:#c0392b; color:#c0392b; background:#fff5f5; }
    .um-icon-btn.toggle-on  { background:#d1fae5; border-color:#4aad75; color:#1a5c35; }
    .um-icon-btn.toggle-off { background:#f1f5f9; border-color:#cbd5e1; color:#94a3b8; }
    .um-empty { text-align:center; padding:40px 20px; color:#9a8f80; font-size:14px; }

    /* User form sub-modal */
    .uf-overlay {
      position:fixed; inset:0; background:rgba(0,0,0,0.65);
      display:flex; align-items:center; justify-content:center;
      z-index:100000; animation:uwFadeIn 0.18s ease;
    }
    .uf-card {
      background:#fff; border-radius:14px; width:420px; max-width:95vw;
      box-shadow:0 24px 60px rgba(0,0,0,0.22); font-family:'Barlow',sans-serif; overflow:hidden;
    }
    .uf-header {
      padding:18px 24px; border-bottom:1px solid #e8e4da;
      display:flex; align-items:center; justify-content:space-between;
    }
    .uf-header h3 {
      font-family:'Barlow Condensed',sans-serif; font-size:17px; font-weight:700;
      text-transform:uppercase; letter-spacing:0.08em; color:#1a2b0e; margin:0;
    }
    .uf-body { padding:22px 24px; }
    .uf-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .uf-field { margin-bottom:14px; }
    .uf-field label { display:block; font-size:12px; font-weight:600; color:#7a7460; margin-bottom:5px; }
    .uf-field input, .uf-field select {
      width:100%; padding:9px 12px; border:1px solid #d4cdb8; border-radius:8px;
      font-size:14px; font-family:'Barlow',sans-serif; color:#0e1108;
      background:#fff; outline:none; box-sizing:border-box;
      transition:border-color 0.2s, box-shadow 0.2s;
    }
    .uf-field input:focus, .uf-field select:focus {
      border-color:#4a7a20; box-shadow:0 0 0 3px rgba(74,122,32,0.12);
    }
    .uf-toggle-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
    .uf-toggle-label { font-size:13px; font-weight:600; color:#0e1108; }
    .uf-toggle {
      position:relative; width:40px; height:22px;
      background:#cbd5e1; border-radius:11px; cursor:pointer;
      transition:background 0.2s; flex-shrink:0; border:none;
    }
    .uf-toggle.on { background:#2d7a4f; }
    .uf-toggle::after {
      content:''; position:absolute; top:3px; left:3px;
      width:16px; height:16px; border-radius:50%; background:#fff;
      transition:transform 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.2);
    }
    .uf-toggle.on::after { transform:translateX(18px); }
    .uf-error { font-size:12px; color:#c0392b; margin-top:4px; display:none; }
    .uf-error.show { display:block; }
    .uf-footer {
      padding:14px 24px; border-top:1px solid #f0ede6;
      display:flex; justify-content:flex-end; gap:8px;
    }
    .uf-btn-cancel {
      padding:9px 16px; border:1px solid #d4cdb8; border-radius:8px;
      background:#fff; color:#7a7460; font-family:'Barlow',sans-serif;
      font-size:13px; cursor:pointer; transition:background 0.15s;
    }
    .uf-btn-cancel:hover { background:#f5f2ec; }
    .uf-btn-save {
      padding:9px 20px; border:none; border-radius:8px; background:#2d7a4f;
      color:#fff; font-family:'Barlow',sans-serif; font-size:13px;
      font-weight:600; cursor:pointer; transition:background 0.15s;
    }
    .uf-btn-save:hover { background:#1a5c35; }

    /* Password reveal modal */
    .upw-card {
      background:#fff; border-radius:14px; width:360px; max-width:95vw;
      box-shadow:0 24px 60px rgba(0,0,0,0.22); font-family:'Barlow',sans-serif;
      overflow:hidden; padding:28px;
    }
    .upw-title { font-family:'Barlow Condensed',sans-serif; font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#1a2b0e; margin:0 0 8px; }
    .upw-sub   { font-size:13px; color:#7a7460; margin:0 0 20px; }
    .upw-pw    { background:#f0faf4; border:1px solid #4aad75; border-radius:8px; padding:12px 16px; font-family:monospace; font-size:18px; font-weight:700; color:#1a5c35; letter-spacing:0.12em; text-align:center; margin-bottom:18px; }
    .upw-note  { font-size:12px; color:#9a8f80; text-align:center; margin-bottom:20px; }
    .upw-btn   { width:100%; padding:10px; background:#2d7a4f; color:#fff; border:none; border-radius:8px; font-family:'Barlow',sans-serif; font-size:14px; font-weight:600; cursor:pointer; transition:background 0.15s; }
    .upw-btn:hover { background:#1a5c35; }

    /* Dark mode for users modal */
    html.dark .um-card      { background:#181c27 !important; }
    html.dark .um-header    { border-color:#2a3148 !important; }
    html.dark .um-header h2 { color:#e2e8f0 !important; }
    html.dark .um-close     { color:#64748b !important; }
    html.dark .um-close:hover { background:#1e2535 !important; color:#e2e8f0 !important; }
    html.dark .um-search    { background:#1e2535 !important; border-color:#2a3148 !important; color:#e2e8f0 !important; }
    html.dark .um-table th  { color:#64748b !important; border-color:#2a3148 !important; }
    html.dark .um-table td  { border-color:#1e2535 !important; }
    html.dark .um-table tbody tr:hover { background:#1e2535 !important; }
    html.dark .um-user-info .um-uname  { color:#e2e8f0 !important; }
    html.dark .um-user-info .um-uemail { color:#64748b !important; }
    html.dark .um-icon-btn  { background:#1e2535 !important; border-color:#2a3148 !important; color:#94a3b8 !important; }
    html.dark .um-icon-btn:hover { border-color:#4aad75 !important; color:#4aad75 !important; background:#0f2018 !important; }
    html.dark .um-icon-btn.toggle-on  { background:#0f2018 !important; border-color:#4aad75 !important; color:#4aad75 !important; }
    html.dark .um-icon-btn.toggle-off { background:#1e2535 !important; border-color:#2a3148 !important; color:#475569 !important; }
    html.dark .uf-card      { background:#181c27 !important; color:#e2e8f0 !important; }
    html.dark .uf-header    { border-color:#2a3148 !important; }
    html.dark .uf-header h3 { color:#e2e8f0 !important; }
    html.dark .uf-field label { color:#94a3b8 !important; }
    html.dark .uf-field input, html.dark .uf-field select { background:#1e2535 !important; border-color:#2a3148 !important; color:#e2e8f0 !important; }
    html.dark .uf-footer    { border-color:#2a3148 !important; }
    html.dark .uf-btn-cancel { background:#1e2535 !important; border-color:#2a3148 !important; color:#94a3b8 !important; }
    html.dark .uf-toggle-label { color:#e2e8f0 !important; }
    html.dark .upw-card     { background:#181c27 !important; }
    html.dark .upw-title    { color:#e2e8f0 !important; }
    html.dark .upw-pw       { background:#0f2018 !important; }
  `;
  document.head.appendChild(usersStyle);

  function openUsersModal() {
    const overlay = document.createElement('div');
    overlay.className = 'um-overlay';
    overlay.id = 'umOverlay';
    overlay.innerHTML = `
      <div class="um-card">
        <div class="um-header">
          <h2>Gestión de Usuarios</h2>
          <div class="um-header-actions">
            <button class="um-btn-new" id="umBtnNew">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Nuevo usuario
            </button>
            <button class="um-close" id="umClose">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div class="um-body">
          <div class="um-search-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input class="um-search" id="umSearch" type="text" placeholder="Buscar por nombre, correo o usuario…">
          </div>
          <table class="um-table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Acceso</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="umTbody"></tbody>
          </table>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    renderUsersTable('');

    overlay.querySelector('#umClose').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    overlay.querySelector('#umBtnNew').addEventListener('click', () => openUserForm(null, overlay));
    overlay.querySelector('#umSearch').addEventListener('input', e => renderUsersTable(e.target.value));

    function renderUsersTable(q) {
      const users = getUsers();
      const query = q.toLowerCase();
      const filtered = users.filter(u =>
        u.nombre.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query) ||
        u.username.toLowerCase().includes(query)
      );
      const currentUser = getStoredUser() || defaultUsers[0];
      const tbody = overlay.querySelector('#umTbody');

      if (!filtered.length) {
        tbody.innerHTML = `<tr><td colspan="5" class="um-empty">No se encontraron usuarios</td></tr>`;
        return;
      }

      const profileData = (() => { try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; } catch { return {}; } })();

      tbody.innerHTML = filtered.map(u => {
        const foto = (u.id === currentUser.id && profileData.foto) ? `<img src="${profileData.foto}">` : initials(u.nombre);
        const rolColor = ROL_COLORS[u.rol] || '#1d4ed8';
        const rolBg    = ROL_BG[u.rol]    || '#dbeafe';
        const isSelf   = u.id === currentUser.id;
        const dotColor = u.activo ? '#4ade80' : '#94a3b8';
        const statusTxt = u.activo ? 'Activo' : 'Inactivo';
        const toggleClass = u.activo ? 'toggle-on' : 'toggle-off';
        const toggleTitle = u.activo ? 'Desactivar cuenta' : 'Activar cuenta';
        return `
          <tr data-uid="${u.id}">
            <td>
              <div class="um-user-cell">
                <div class="um-avatar">${foto}</div>
                <div class="um-user-info">
                  <div class="um-uname">${u.nombre}</div>
                  <div class="um-uemail">${u.email}</div>
                </div>
              </div>
            </td>
            <td style="font-size:13px;color:#64748b;font-family:monospace;">@${u.username}</td>
            <td>
              <span class="um-rol-badge" style="background:${rolBg};color:${rolColor};">${u.rol}</span>
            </td>
            <td>
              <span class="um-status">
                <span class="um-status-dot" style="background:${dotColor};"></span>
                ${statusTxt}
              </span>
            </td>
            <td>
              <div class="um-actions">
                <button class="um-icon-btn btn-edit" title="Editar usuario">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="um-icon-btn btn-pw" title="Restablecer contraseña">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </button>
                <button class="um-icon-btn ${toggleClass} btn-toggle" title="${toggleTitle}" ${isSelf ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>
                  ${u.activo
                    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64A9 9 0 1 1 5.64 5.64"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`
                    : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`
                  }
                </button>
              </div>
            </td>
          </tr>`;
      }).join('');

      // Bind row actions
      tbody.querySelectorAll('tr[data-uid]').forEach(row => {
        const uid = row.dataset.uid;
        row.querySelector('.btn-edit').addEventListener('click', () => {
          const u = getUsers().find(x => x.id === uid);
          if (u) openUserForm(u, overlay, renderUsersTable.bind(null, q));
        });
        row.querySelector('.btn-pw').addEventListener('click', () => {
          showResetPassword(uid, overlay);
          renderUsersTable(q);
        });
        const toggleBtn = row.querySelector('.btn-toggle');
        if (toggleBtn && !toggleBtn.disabled) {
          toggleBtn.addEventListener('click', () => {
            const users = getUsers();
            const idx = users.findIndex(x => x.id === uid);
            if (idx >= 0) { users[idx].activo = !users[idx].activo; saveUsers(users); }
            renderUsersTable(q);
          });
        }
      });
    }

    function openUserForm(user, parentOverlay, onSave) {
      const isNew = !user;
      const u = user || { id: uidGen(), nombre:'', email:'', username:'', password:'', rol:'Capturista', activo:true };

      const fo = document.createElement('div');
      fo.className = 'uf-overlay';
      fo.innerHTML = `
        <div class="uf-card">
          <div class="uf-header">
            <h3>${isNew ? 'Nuevo Usuario' : 'Editar Usuario'}</h3>
            <button class="um-close" id="ufClose">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="uf-body">
            <div class="uf-row">
              <div class="uf-field">
                <label>Nombre completo *</label>
                <input id="ufNombre" type="text" value="${u.nombre}" placeholder="Nombre Apellido">
                <div class="uf-error" id="errNombre">Ingresa el nombre.</div>
              </div>
              <div class="uf-field">
                <label>Correo electrónico *</label>
                <input id="ufEmail" type="email" value="${u.email}" placeholder="correo@empresa.com">
                <div class="uf-error" id="errEmail">Correo inválido.</div>
              </div>
            </div>
            <div class="uf-row">
              <div class="uf-field">
                <label>Usuario *</label>
                <input id="ufUsername" type="text" value="${u.username}" placeholder="usuario123">
                <div class="uf-error" id="errUsername">Usuario requerido.</div>
                <div class="uf-error" id="errUsernameDup">Usuario ya existe.</div>
              </div>
              <div class="uf-field">
                <label>${isNew ? 'Contraseña *' : 'Nueva contraseña (opcional)'}</label>
                <input id="ufPassword" type="password" value="" placeholder="${isNew ? 'Mínimo 6 caracteres' : 'Dejar en blanco para no cambiar'}">
                <div class="uf-error" id="errPassword">Mínimo 6 caracteres.</div>
              </div>
            </div>
            <div class="uf-field">
              <label>Rol</label>
              <select id="ufRol">
                ${ROLES.map(r=>`<option value="${r}" ${u.rol===r?'selected':''}>${r}</option>`).join('')}
              </select>
            </div>
            <div class="uf-toggle-row">
              <span class="uf-toggle-label">Cuenta activa</span>
              <button class="uf-toggle ${u.activo?'on':''}" id="ufToggle" type="button"></button>
            </div>
          </div>
          <div class="uf-footer">
            <button class="uf-btn-cancel" id="ufCancel">Cancelar</button>
            <button class="uf-btn-save" id="ufSave">${isNew ? 'Crear usuario' : 'Guardar cambios'}</button>
          </div>
        </div>`;

      document.body.appendChild(fo);

      let activo = u.activo;
      fo.querySelector('#ufToggle').addEventListener('click', function() {
        activo = !activo;
        this.classList.toggle('on', activo);
      });

      fo.querySelector('#ufClose').addEventListener('click', () => fo.remove());
      fo.querySelector('#ufCancel').addEventListener('click', () => fo.remove());

      fo.querySelector('#ufSave').addEventListener('click', () => {
        const nombre   = fo.querySelector('#ufNombre').value.trim();
        const email    = fo.querySelector('#ufEmail').value.trim();
        const username = fo.querySelector('#ufUsername').value.trim();
        const password = fo.querySelector('#ufPassword').value;
        const rol      = fo.querySelector('#ufRol').value;
        let valid = true;

        const show = (id, v) => { fo.querySelector('#'+id).classList.toggle('show', v); if(v) valid=false; };
        show('errNombre',   !nombre);
        show('errEmail',    !email || !email.includes('@'));
        show('errUsername', !username);
        const users = getUsers();
        const dupUsername = users.some(x => x.username === username && x.id !== u.id);
        show('errUsernameDup', dupUsername);
        show('errPassword', isNew && password.length > 0 && password.length < 6);
        if (isNew && !password) { fo.querySelector('#errPassword').textContent = 'La contraseña es requerida.'; show('errPassword', true); }

        if (!valid) return;

        const finalPw = password || (isNew ? '' : u.password);
        const updated = { ...u, nombre, email, username, password: finalPw, rol, activo };
        const idx = users.findIndex(x => x.id === u.id);
        if (idx >= 0) users[idx] = updated; else users.push(updated);
        saveUsers(users);
        fo.remove();
        if (onSave) onSave(); else renderUsersTable('');
      });

      function renderUsersTable(q) {
        /* re-render inside the parent overlay */
        const search = parentOverlay.querySelector('#umSearch');
        const evt = new Event('input');
        if (search) search.dispatchEvent(evt);
      }
    }

    function showResetPassword(uid, parentOverlay) {
      const newPw = genPassword();
      const users = getUsers();
      const idx = users.findIndex(x => x.id === uid);
      if (idx < 0) return;
      users[idx].password = newPw;
      saveUsers(users);

      const fo = document.createElement('div');
      fo.className = 'uf-overlay';
      fo.innerHTML = `
        <div class="upw-card">
          <p class="upw-title">Contraseña restablecida</p>
          <p class="upw-sub">Nueva contraseña temporal para <strong>${users[idx].nombre}</strong>:</p>
          <div class="upw-pw" id="upwPw">${newPw}</div>
          <p class="upw-note">Comparte esta contraseña de forma segura. El usuario deberá cambiarla al ingresar.</p>
          <button class="upw-btn" id="upwCopy">Copiar y cerrar</button>
        </div>`;
      document.body.appendChild(fo);
      fo.querySelector('#upwCopy').addEventListener('click', () => {
        navigator.clipboard.writeText(newPw).catch(()=>{});
        fo.remove();
      });
      fo.addEventListener('click', e => { if (e.target === fo) fo.remove(); });
    }
  }

  /* ─── MOUNT ──────────────────────────────────────────── */
  // Exponer modales como globales para index.html
  window.npOpenProfileModal = openProfileModal;
  window.npOpenUsersModal   = openUsersModal;

  function mount() {
    // Si index.html ya tiene su propio widget, no montar el del script
    if (onIndexPage) return;

    document.querySelectorAll('[onclick*="cerrarSesion"], [title="Salir"]').forEach(el => el.remove());
    const target = document.querySelector('.header-right') || document.querySelector('.header-container');
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
