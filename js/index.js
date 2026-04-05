/**
 * ============================================================
 * TECH MAP — js/index.js
 * Mapa Técnico Interativo | Interactive Tech Map
 * Carte Technique Interactive
 * ============================================================
 *
 * Estrutura de funções:
 *  1. Estado global da aplicação
 *  2. Inicialização (init)
 *  3. Carregamento de dados (loadData)
 *  4. Renderização do header (renderHeader)
 *  5. Renderização dos filtros de categoria (renderFilters)
 *  6. Renderização dos cards (renderCards)
 *  7. Criação de um único card (createCardElement)
 *  8. Abertura / fechamento do modal (openModal, closeModal)
 *  9. Construção do HTML interno do modal (buildModalContent)
 * 10. Tags de relações (buildRelationsTags)
 * 11. Eventos de filtro (bindFilterEvents)
 * 12. Evento de busca (bindSearchEvent)
 * 13. Troca de idioma (bindLangSwitcher, setLanguage)
 * 14. Aplicação de filtros combinados (applyFilters)
 * 15. Atualização do contador (updateStats)
 * 16. Utilitários (getColor, getCategoryLabel, escapeHtml)
 * ============================================================
 */

/* ============================================================
   1. ESTADO GLOBAL
   ============================================================ */
const APP = {
  lang: 'pt',
  data: null,
  activeCategory: 'all',
  searchQuery: '',
  openTechId: null,
};

/* ============================================================
   2. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  init();
});

async function init() {
  await loadData();

  // Detecta idioma do navegador e aplica se suportado
  const browserLang = navigator.language.slice(0, 2);
  if (['pt', 'en', 'fr'].includes(browserLang)) {
    APP.lang = browserLang;
  }

  renderHeader();
  renderFilters();
  renderCards();
  bindLangSwitcher();
  bindSearchEvent();
  updateStats();
  renderRoles(APP.lang);
  renderInterview(APP.lang);

  // Fecha modal ao clicar fora do painel
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });

  // Fecha modal com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ============================================================
   3. CARREGAMENTO DE DADOS
   ============================================================ */
async function loadData() {
  try {
    const response = await fetch('database/data.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    APP.data = await response.json();
  } catch (err) {
    console.error('[TechMap] Erro ao carregar data.json:', err);
    APP.data = {
      meta: { title: {}, subtitle: {}, labels: {}, search_placeholder: {} },
      categories: [],
      technologies: []
    };
  }
}

/* ============================================================
   4. RENDERIZAÇÃO DO HEADER
   ============================================================ */
function renderHeader() {
  const { meta } = APP.data;
  document.getElementById('app-title').textContent    = meta.title[APP.lang] || '';
  document.getElementById('app-subtitle').textContent = meta.subtitle[APP.lang] || '';
  document.getElementById('search-input').placeholder = meta.search_placeholder[APP.lang] || '';
}

/* ============================================================
   5. RENDERIZAÇÃO DOS FILTROS DE CATEGORIA
   ============================================================ */
function renderFilters() {
  const bar = document.getElementById('filter-bar');
  bar.innerHTML = '';

  const { categories, meta } = APP.data;
  const allLabel = meta.labels.filter_all?.[APP.lang] || 'All';

  // Chip "Todas"
  const allChip = createChip('all', '🗂️', allLabel, 'var(--accent-cyan)');
  if (APP.activeCategory === 'all') {
    allChip.classList.add('active');
    allChip.style.background = 'var(--accent-cyan)';
  }
  bar.appendChild(allChip);

  // Um chip para cada categoria
  categories.forEach(cat => {
    const label = cat.label[APP.lang] || cat.id;
    const chip  = createChip(cat.id, cat.icon, label, cat.color);
    if (APP.activeCategory === cat.id) {
      chip.classList.add('active');
      chip.style.background = cat.color;
    }
    bar.appendChild(chip);
  });

  // FIX: bindFilterEvents chamado UMA VEZ, depois de todos os chips criados
  bindFilterEvents();
}

/**
 * createChip — cria e retorna um elemento de chip de filtro.
 * NÃO adiciona o listener de clique aqui para evitar duplicação.
 */
function createChip(id, icon, label, color) {
  const chip = document.createElement('button');
  chip.className  = 'filter-chip';
  chip.dataset.category = id;
  chip.dataset.color    = color;
  chip.innerHTML = `<span>${icon}</span><span>${label}</span>`;
  return chip;
}

/* ============================================================
   6. RENDERIZAÇÃO DOS CARDS
   ============================================================ */
function renderCards() {
  const grid = document.getElementById('tech-grid');
  grid.innerHTML = '';

  APP.data.technologies.forEach((tech, index) => {
    const card = createCardElement(tech, index);
    grid.appendChild(card);
  });

  updateStats();
}

/* ============================================================
   7. CRIAÇÃO DE UM CARD
   ============================================================ */
function createCardElement(tech, index) {
  const card = document.createElement('div');
  card.className        = 'tech-card';
  card.dataset.id       = tech.id;
  card.dataset.category = tech.category;

  const color    = getColor(tech.category);
  const catLabel = getCategoryLabel(tech.category);

  card.style.setProperty('--cat-color', color);
  // Delay escalonado para animação de entrada suave
  card.style.animationDelay = `${Math.min(index * 40, 600)}ms`;

  // Pills de relações — limitado a 4
  const relationsHtml = (tech.relations || [])
    .slice(0, 4)
    .map(r => `<span class="relation-pill">${r}</span>`)
    .join('');

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon-name">
        <span class="card-icon">${tech.icon}</span>
        <span class="card-name">${tech.name}</span>
      </div>
      <span class="card-category-badge" style="background:${color}">${catLabel}</span>
    </div>
    <p class="card-description">${tech.description[APP.lang] || ''}</p>
    <div class="card-relations">${relationsHtml}</div>
  `;

  card.addEventListener('click', () => openModal(tech.id));
  return card;
}

/* ============================================================
   8. MODAL — ABERTURA E FECHAMENTO
   ============================================================ */
function openModal(techId) {
  const tech = APP.data.technologies.find(t => t.id === techId);
  if (!tech) return;

  APP.openTechId = techId;

  const overlay = document.getElementById('modal-overlay');
  const panel   = document.getElementById('modal-panel');
  const color   = getColor(tech.category);

  panel.style.setProperty('--modal-color', color);
  panel.innerHTML  = buildModalContent(tech, color);
  panel.scrollTop  = 0;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Botão fechar
  panel.querySelector('#modal-close').addEventListener('click', closeModal);

  // Tags de relação clicáveis
  panel.querySelectorAll('.relation-tag[data-id]').forEach(tag => {
    tag.addEventListener('click', () => {
      const relatedId = tag.dataset.id;
      if (APP.data.technologies.find(t => t.id === relatedId)) {
        openModal(relatedId);
      }
    });
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  APP.openTechId = null;
}

/* ============================================================
   9. CONSTRUÇÃO DO HTML DO MODAL
   ============================================================ */
function buildModalContent(tech, color) {
  const lang     = APP.lang;
  const labels   = APP.data.meta.labels;
  const catLabel = getCategoryLabel(tech.category);

  // --- Descrição ---
  const descHtml = `
    <div class="modal-section">
      <span class="section-label">${labels.what_is[lang]}</span>
      <p class="section-text">${tech.description[lang] || ''}</p>
    </div>`;

  // --- Exemplo prático + código ---
  const exampleText = tech.example[lang] || '';
  const codeHtml = tech.example.code
    ? `<div class="code-block">
        <div class="code-top-bar">
          <div class="code-dots">
            <span class="code-dot dot-red"></span>
            <span class="code-dot dot-yellow"></span>
            <span class="code-dot dot-green"></span>
          </div>
          <span class="code-lang-label">${tech.name}</span>
        </div>
        <pre>${escapeHtml(tech.example.code)}</pre>
      </div>`
    : '';

  const exampleHtml = `
    <div class="modal-section">
      <span class="section-label">${labels.example[lang]}</span>
      <p class="section-text">${exampleText}</p>
      ${codeHtml}
    </div>`;

  // --- Relações ---
  const relationsHtml = buildRelationsTags(tech.relations || []);
  const relSection = `
    <div class="modal-section">
      <span class="section-label">${labels.relations[lang]}</span>
      <div class="relations-grid">${relationsHtml}</div>
    </div>`;

  // --- Pros e Cons ---
  const pros = (tech.pros?.[lang] || []).map(p => `<li>${p}</li>`).join('');
  const cons = (tech.cons?.[lang] || []).map(c => `<li>${c}</li>`).join('');
  const prosConsHtml = `
    <div class="modal-section">
      <div class="pros-cons-grid">
        <div class="pros-block">
          <p class="pros-cons-title pros-title">✓ ${labels.pros[lang]}</p>
          <ul>${pros}</ul>
        </div>
        <div class="cons-block">
          <p class="pros-cons-title cons-title">✕ ${labels.cons[lang]}</p>
          <ul>${cons}</ul>
        </div>
      </div>
    </div>`;

  // --- Cenários de uso ---
  const scenarioHtml = `
    <div class="modal-section">
      <span class="section-label">${labels.scenarios[lang]}</span>
      <div class="scenario-box" style="--modal-color:${color}">
        ${tech.scenarios?.[lang] || ''}
      </div>
    </div>`;

  // --- Dicas para Entrevista (nova seção, se existir no JSON) ---
  let interviewHtml = '';
  if (tech.interview?.[lang]) {
    const interviewLabel = labels.interview?.[lang] || 'Interview Tips';
    interviewHtml = `
      <div class="modal-section">
        <span class="section-label">💡 ${interviewLabel}</span>
        <div class="interview-box">
          <strong>⚡ ${interviewLabel}</strong>
          ${tech.interview[lang]}
        </div>
      </div>`;
  }

  // --- Montagem final ---
  return `
    <div id="modal-header">
      <div class="modal-title-group">
        <span class="modal-icon">${tech.icon}</span>
        <div class="modal-title-text">
          <h2 class="modal-title" id="modal-title">${tech.name}</h2>
          <span class="modal-cat-badge" style="background:${color}">${catLabel}</span>
        </div>
      </div>
      <button id="modal-close" aria-label="${labels.close[lang]}">✕</button>
    </div>
    <div id="modal-body">
      ${descHtml}
      ${exampleHtml}
      ${relSection}
      ${prosConsHtml}
      ${scenarioHtml}
      ${interviewHtml}
    </div>`;
}

/* ============================================================
   10. TAGS DE RELAÇÕES
   ============================================================ */
function buildRelationsTags(relations) {
  return relations.map(relId => {
    const relTech = APP.data.technologies.find(t => t.id === relId);
    if (relTech) {
      return `<span class="relation-tag" data-id="${relId}" title="${relTech.name}">
        ${relTech.icon} ${relTech.name}
      </span>`;
    }
    return `<span class="relation-tag">${relId}</span>`;
  }).join('');
}

/* ============================================================
   11. EVENTOS DE FILTRO
   FIX: listeners adicionados UMA vez (ao invés de duplicar)
   ============================================================ */
function bindFilterEvents() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    // Usar clone para remover listeners anteriores ao re-renderizar
    chip.addEventListener('click', () => {
      APP.activeCategory = chip.dataset.category;
      const chipColor    = chip.dataset.color;

      // Atualiza visual de todos os chips
      document.querySelectorAll('.filter-chip').forEach(c => {
        c.classList.remove('active');
        c.style.background = '';
        c.style.color      = '';
      });

      chip.classList.add('active');
      chip.style.background = chipColor;
      chip.style.color      = '#080c14';

      applyFilters();
    });
  });
}

/* ============================================================
   12. EVENTO DE BUSCA
   ============================================================ */
function bindSearchEvent() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    APP.searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });
}

/* ============================================================
   13. TROCA DE IDIOMA
   ============================================================ */
function bindLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function setLanguage(lang) {
  if (!['pt', 'en', 'fr'].includes(lang)) return;
  APP.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderHeader();
  renderFilters();
  renderCards();
  applyFilters();
  renderRoles(APP.lang);
  renderInterview(APP.lang);

  if (APP.openTechId) openModal(APP.openTechId);
}

/* ============================================================
   14. APLICAÇÃO DE FILTROS COMBINADOS
   ============================================================ */
function applyFilters() {
  const cards = document.querySelectorAll('.tech-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const catMatch =
      APP.activeCategory === 'all' ||
      card.dataset.category === APP.activeCategory;

    const tech = APP.data.technologies.find(t => t.id === card.dataset.id);

    // Busca no nome, descrição, ID e também nas relações
    const searchableText = [
      tech?.name || '',
      tech?.description?.[APP.lang] || '',
      tech?.id || '',
      ...(tech?.relations || []),
    ].join(' ').toLowerCase();

    const searchMatch =
      APP.searchQuery === '' ||
      searchableText.includes(APP.searchQuery);

    if (catMatch && searchMatch) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  const emptyState = document.getElementById('empty-state');
  emptyState.style.display = visibleCount === 0 ? 'block' : 'none';

  updateStats(visibleCount);
}

/* ============================================================
   15. ATUALIZAÇÃO DO CONTADOR
   ============================================================ */
function updateStats(visible) {
  const total  = APP.data.technologies.length;
  const shown  = visible !== undefined ? visible : total;
  const statsEl = document.getElementById('stats-count');
  if (statsEl) statsEl.textContent = `${shown} / ${total}`;
}

/* ============================================================
   16. UTILITÁRIOS
   ============================================================ */

/** Retorna a cor CSS da categoria. Fallback: ciano. */
function getColor(categoryId) {
  const cat = APP.data.categories.find(c => c.id === categoryId);
  return cat ? cat.color : 'var(--accent-cyan)';
}

/** Retorna o label traduzido de uma categoria no idioma ativo. */
function getCategoryLabel(categoryId) {
  const cat = APP.data.categories.find(c => c.id === categoryId);
  return cat ? (cat.label[APP.lang] || categoryId) : categoryId;
}

/**
 * Escapa caracteres especiais HTML para exibição segura
 * dentro de blocos <pre><code>.
 */
function escapeHtml(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}

/* ============================================================
   PWA — Service Worker + Install Banner
   ============================================================ */

(function initPWA() {
  // 1. Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('[PWA] Service Worker registrado ✓'))
        .catch((err) => console.warn('[PWA] SW falhou:', err));
    });
  }

  // 2. Install prompt banner
  let deferredPrompt = null;
  const banner      = document.getElementById('pwa-banner');
  const installBtn  = document.getElementById('pwa-install-btn');
  const dismissBtn  = document.getElementById('pwa-dismiss-btn');

  if (!banner || !installBtn || !dismissBtn) return;

  // Capture the browser install event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Only show if user hasn't dismissed before
    if (!localStorage.getItem('pwa-dismissed')) {
      setTimeout(() => banner.classList.add('visible'), 2000);
    }
  });

  // Install button clicked
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('[PWA] Install outcome:', outcome);
    deferredPrompt = null;
    banner.classList.remove('visible');
  });

  // Dismiss button
  dismissBtn.addEventListener('click', () => {
    banner.classList.remove('visible');
    localStorage.setItem('pwa-dismissed', '1');
  });

  // Hide banner when app is installed
  window.addEventListener('appinstalled', () => {
    banner.classList.remove('visible');
    console.log('[PWA] App instalado com sucesso! ✓');
  });
})();
