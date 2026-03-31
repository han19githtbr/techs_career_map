/* ============================================================
   ROLES — Papéis & Responsabilidades
   Dados e renderização da seção de papéis profissionais.
   ============================================================ */

const ROLES_DATA = {
  frontend: {
    icon: '🖥️',
    color: '#00d4ff',
    label: { pt: 'Front-end', en: 'Front-end', fr: 'Front-end' },
    tagline: {
      pt: 'Quem transforma interfaces em experiências funcionais no navegador.',
      en: 'Who transforms interfaces into functional browser experiences.',
      fr: 'Qui transforme les interfaces en expériences fonctionnelles dans le navigateur.',
    },
    alert: {
      pt: '⚠️ É um equívoco comum exigir que devs Front-end também sejam designers UX/UI. São profissões distintas — acumular as duas sobrecarrega o profissional e prejudica a qualidade do produto.',
      en: '⚠️ It\'s a common mistake to require Front-end devs to also be UX/UI designers. These are distinct professions — stacking both overloads the professional and hurts product quality.',
      fr: '⚠️ C\'est une erreur courante d\'exiger que les devs Front-end soient aussi designers UX/UI. Ce sont des métiers distincts — les cumuler surcharge le professionnel et nuit à la qualité du produit.',
    },
    owns: {
      pt: [
        '💻 HTML semântico, acessibilidade (ARIA, WCAG)',
        '🎨 CSS, animações, responsividade e performance visual',
        '⚡ JavaScript / TypeScript no lado do cliente',
        '⚛️ Frameworks: React, Vue, Angular, Svelte',
        '🔗 Consumo de APIs REST e GraphQL',
        '📦 Bundlers: Vite, Webpack, esbuild',
        '🧪 Testes de componente (Vitest, Testing Library)',
        '📊 Monitoramento de performance (Lighthouse, Web Vitals)',
        '🔐 Autenticação no cliente (tokens, cookies, OAuth flow)',
      ],
      en: [
        '💻 Semantic HTML, accessibility (ARIA, WCAG)',
        '🎨 CSS, animations, responsiveness and visual performance',
        '⚡ JavaScript / TypeScript on the client side',
        '⚛️ Frameworks: React, Vue, Angular, Svelte',
        '🔗 Consuming REST and GraphQL APIs',
        '📦 Bundlers: Vite, Webpack, esbuild',
        '🧪 Component testing (Vitest, Testing Library)',
        '📊 Performance monitoring (Lighthouse, Web Vitals)',
        '🔐 Client-side authentication (tokens, cookies, OAuth flow)',
      ],
      fr: [
        '💻 HTML sémantique, accessibilité (ARIA, WCAG)',
        '🎨 CSS, animations, responsive et performance visuelle',
        '⚡ JavaScript / TypeScript côté client',
        '⚛️ Frameworks: React, Vue, Angular, Svelte',
        '🔗 Consommation d\'APIs REST et GraphQL',
        '📦 Bundlers: Vite, Webpack, esbuild',
        '🧪 Tests de composant (Vitest, Testing Library)',
        '📊 Suivi de performance (Lighthouse, Web Vitals)',
        '🔐 Authentification côté client (tokens, cookies, OAuth flow)',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Criar wireframes, protótipos ou sistemas de design',
        '🚫 Definir fluxos de usuário e arquitetura de informação',
        '🚫 Realizar pesquisas com usuários (user research)',
        '🚫 Implementar lógica de negócio no servidor',
        '🚫 Gerenciar banco de dados ou infraestrutura de nuvem',
        '🚫 Escrever testes E2E de ponta a ponta (responsabilidade de QA)',
        '🚫 Definir identidade visual ou brand guidelines',
      ],
      en: [
        '🚫 Creating wireframes, prototypes or design systems',
        '🚫 Defining user flows and information architecture',
        '🚫 Conducting user research',
        '🚫 Implementing business logic on the server',
        '🚫 Managing databases or cloud infrastructure',
        '🚫 Writing end-to-end E2E tests (QA responsibility)',
        '🚫 Defining visual identity or brand guidelines',
      ],
      fr: [
        '🚫 Créer des wireframes, prototypes ou systèmes de design',
        '🚫 Définir les flux utilisateurs et l\'architecture de l\'information',
        '🚫 Mener des recherches utilisateurs (user research)',
        '🚫 Implémenter la logique métier côté serveur',
        '🚫 Gérer la base de données ou l\'infrastructure cloud',
        '🚫 Écrire des tests E2E de bout en bout (responsabilité QA)',
        '🚫 Définir l\'identité visuelle ou les brand guidelines',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Vite', 'Tailwind', 'SASS', 'Vitest'],
  },

  backend: {
    icon: '⚙️',
    color: '#a855f7',
    label: { pt: 'Back-end', en: 'Back-end', fr: 'Back-end' },
    tagline: {
      pt: 'Quem constrói a lógica de negócio, as APIs e toda a infraestrutura invisível que sustenta a aplicação.',
      en: 'Who builds business logic, APIs and all the invisible infrastructure that sustains the application.',
      fr: 'Qui construit la logique métier, les APIs et toute l\'infrastructure invisible qui soutient l\'application.',
    },
    alert: null,
    owns: {
      pt: [
        '🗄️ Design e gerenciamento de banco de dados (SQL e NoSQL)',
        '🔌 Criação e documentação de APIs (REST, GraphQL, gRPC)',
        '🔒 Segurança: autenticação, autorização, criptografia',
        '📬 Filas e mensageria (RabbitMQ, Kafka, SQS)',
        '🚀 Node.js, Python, Java, Go, PHP, Ruby, Rust',
        '🐳 Containerização (Docker, Kubernetes)',
        '☁️ Serviços de nuvem (AWS, GCP, Azure)',
        '⚡ Cache e performance (Redis, CDN)',
        '📜 Logs, monitoramento e observabilidade',
      ],
      en: [
        '🗄️ Database design and management (SQL and NoSQL)',
        '🔌 API creation and documentation (REST, GraphQL, gRPC)',
        '🔒 Security: authentication, authorization, encryption',
        '📬 Queues and messaging (RabbitMQ, Kafka, SQS)',
        '🚀 Node.js, Python, Java, Go, PHP, Ruby, Rust',
        '🐳 Containerization (Docker, Kubernetes)',
        '☁️ Cloud services (AWS, GCP, Azure)',
        '⚡ Cache and performance (Redis, CDN)',
        '📜 Logs, monitoring and observability',
      ],
      fr: [
        '🗄️ Conception et gestion de base de données (SQL et NoSQL)',
        '🔌 Création et documentation d\'APIs (REST, GraphQL, gRPC)',
        '🔒 Sécurité: authentification, autorisation, cryptographie',
        '📬 Files d\'attente et messagerie (RabbitMQ, Kafka, SQS)',
        '🚀 Node.js, Python, Java, Go, PHP, Ruby, Rust',
        '🐳 Conteneurisation (Docker, Kubernetes)',
        '☁️ Services cloud (AWS, GCP, Azure)',
        '⚡ Cache et performance (Redis, CDN)',
        '📜 Logs, monitoring et observabilité',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Estilizar ou construir interfaces visuais',
        '🚫 Garantir a responsividade ou acessibilidade da UI',
        '🚫 Criar layouts ou componentes de tela',
        '🚫 Realizar testes de interface com usuário (responsabilidade de QA)',
        '🚫 Definir fluxos de UX ou tomar decisões de design visual',
      ],
      en: [
        '🚫 Styling or building visual interfaces',
        '🚫 Ensuring UI responsiveness or accessibility',
        '🚫 Creating screen layouts or components',
        '🚫 Conducting user interface testing (QA responsibility)',
        '🚫 Defining UX flows or making visual design decisions',
      ],
      fr: [
        '🚫 Styliser ou construire des interfaces visuelles',
        '🚫 Assurer la réactivité ou l\'accessibilité de l\'interface',
        '🚫 Créer des mises en page ou des composants d\'écran',
        '🚫 Mener des tests d\'interface utilisateur (responsabilité QA)',
        '🚫 Définir les flux UX ou prendre des décisions de design visuel',
      ],
    },
    stack: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Kafka', 'Nginx'],
  },

  fullstack: {
    icon: '🔁',
    color: '#22c55e',
    label: { pt: 'Full Stack', en: 'Full Stack', fr: 'Full Stack' },
    tagline: {
      pt: 'Quem atua em ambas as camadas — front e back — mas não substitui especialistas em nenhuma delas.',
      en: 'Who works on both layers — front and back — but does not replace specialists in either.',
      fr: 'Qui travaille sur les deux couches — front et back — mais ne remplace pas les spécialistes dans aucune d\'elles.',
    },
    alert: {
      pt: '⚠️ Full Stack não significa "faz tudo". Em equipes grandes, o Full Stack atua onde há lacunas ou em projetos menores onde o custo de ter especialistas separados é inviável. Exigir que o mesmo profissional também cubra UX/UI e QA é um abuso de escopo.',
      en: '⚠️ Full Stack doesn\'t mean "does everything". In large teams, Full Stack fills gaps or works on smaller projects where having separate specialists isn\'t viable. Requiring the same professional to also cover UX/UI and QA is scope abuse.',
      fr: '⚠️ Full Stack ne signifie pas "fait tout". Dans les grandes équipes, le Full Stack comble les lacunes ou travaille sur des projets plus petits où des spécialistes séparés ne sont pas viables. Exiger que le même professionnel couvre aussi UX/UI et QA est un abus de périmètre.',
    },
    owns: {
      pt: [
        '🖥️ Desenvolvimento de interfaces funcionais (Front-end)',
        '⚙️ APIs, banco de dados e lógica de negócio (Back-end)',
        '🔗 Integração entre camadas e gerenciamento de estado global',
        '🐳 Deploy básico e CI/CD pipelines',
        '📐 Arquitetura de aplicações de pequeno/médio porte',
        '🔍 Debugging em toda a stack',
      ],
      en: [
        '🖥️ Functional interface development (Front-end)',
        '⚙️ APIs, database and business logic (Back-end)',
        '🔗 Layer integration and global state management',
        '🐳 Basic deployment and CI/CD pipelines',
        '📐 Small/medium application architecture',
        '🔍 Full-stack debugging',
      ],
      fr: [
        '🖥️ Développement d\'interfaces fonctionnelles (Front-end)',
        '⚙️ APIs, base de données et logique métier (Back-end)',
        '🔗 Intégration entre couches et gestion de l\'état global',
        '🐳 Déploiement basique et pipelines CI/CD',
        '📐 Architecture d\'applications petites/moyennes',
        '🔍 Débogage sur toute la stack',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Design de interfaces e pesquisa com usuários (UX/UI)',
        '🚫 Testes automatizados de regressão em larga escala (QA)',
        '🚫 DevOps avançado e gestão de infraestrutura complexa',
        '🚫 Segurança avançada e pen-testing',
        '🚫 Machine Learning e ciência de dados',
      ],
      en: [
        '🚫 Interface design and user research (UX/UI)',
        '🚫 Large-scale automated regression testing (QA)',
        '🚫 Advanced DevOps and complex infrastructure management',
        '🚫 Advanced security and pen-testing',
        '🚫 Machine Learning and data science',
      ],
      fr: [
        '🚫 Design d\'interface et recherche utilisateur (UX/UI)',
        '🚫 Tests de régression automatisés à grande échelle (QA)',
        '🚫 DevOps avancé et gestion d\'infrastructure complexe',
        '🚫 Sécurité avancée et pen-testing',
        '🚫 Machine Learning et science des données',
      ],
    },
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Git', 'REST APIs', 'Prisma', 'Redis', 'CI/CD'],
  },

  uiux: {
    icon: '🎨',
    color: '#ec4899',
    label: { pt: 'UI / UX', en: 'UI / UX', fr: 'UI / UX' },
    tagline: {
      pt: 'Quem pesquisa, protótipa e projeta a experiência — muito antes de uma linha de código ser escrita.',
      en: 'Who researches, prototypes and designs the experience — long before a line of code is written.',
      fr: 'Qui recherche, prototypise et conçoit l\'expérience — bien avant qu\'une ligne de code soit écrite.',
    },
    alert: {
      pt: '⚠️ UI e UX são especialidades distintas. UX foca em pesquisa, fluxos e usabilidade; UI foca na aparência visual e sistema de design. Ambos diferem completamente do dev Front-end, que implementa — não projeta — a interface.',
      en: '⚠️ UI and UX are distinct specialties. UX focuses on research, flows and usability; UI focuses on visual appearance and design system. Both differ completely from Front-end dev, who implements — not designs — the interface.',
      fr: '⚠️ UI et UX sont des spécialités distinctes. UX se concentre sur la recherche, les flux et l\'utilisabilité; UI sur l\'apparence visuelle et le système de design. Les deux diffèrent complètement du dev Front-end, qui implémente — pas conçoit — l\'interface.',
    },
    owns: {
      pt: [
        '🔬 Pesquisa com usuários: entrevistas, testes de usabilidade',
        '🗺️ Arquitetura de informação e mapeamento de jornadas',
        '📐 Wireframes, protótipos de baixa e alta fidelidade',
        '🎭 Figma, Adobe XD, Sketch, Principle',
        '🎨 Sistemas de design, tokens de design, style guides',
        '♿ Acessibilidade e heurísticas de usabilidade (Nielsen)',
        '📊 Análise de dados qualitativos (heatmaps, gravações)',
        '🔄 Iteração com base em feedback e testes A/B',
      ],
      en: [
        '🔬 User research: interviews, usability testing',
        '🗺️ Information architecture and journey mapping',
        '📐 Low and high fidelity wireframes and prototypes',
        '🎭 Figma, Adobe XD, Sketch, Principle',
        '🎨 Design systems, design tokens, style guides',
        '♿ Accessibility and usability heuristics (Nielsen)',
        '📊 Qualitative data analysis (heatmaps, recordings)',
        '🔄 Iteration based on feedback and A/B testing',
      ],
      fr: [
        '🔬 Recherche utilisateur: entretiens, tests d\'utilisabilité',
        '🗺️ Architecture de l\'information et cartographie des parcours',
        '📐 Wireframes et prototypes basse et haute fidélité',
        '🎭 Figma, Adobe XD, Sketch, Principle',
        '🎨 Systèmes de design, tokens de design, style guides',
        '♿ Accessibilité et heuristiques d\'utilisabilité (Nielsen)',
        '📊 Analyse de données qualitatives (cartes de chaleur, enregistrements)',
        '🔄 Itération basée sur les retours et les tests A/B',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Implementar código HTML/CSS/JS',
        '🚫 Conectar APIs ou gerenciar estado da aplicação',
        '🚫 Configurar servidores ou banco de dados',
        '🚫 Escrever casos de teste ou automações de QA',
        '🚫 Tomar decisões de arquitetura técnica',
      ],
      en: [
        '🚫 Writing HTML/CSS/JS code',
        '🚫 Connecting APIs or managing application state',
        '🚫 Configuring servers or databases',
        '🚫 Writing test cases or QA automation',
        '🚫 Making technical architecture decisions',
      ],
      fr: [
        '🚫 Écrire du code HTML/CSS/JS',
        '🚫 Connecter des APIs ou gérer l\'état de l\'application',
        '🚫 Configurer des serveurs ou des bases de données',
        '🚫 Écrire des cas de test ou des automatisations QA',
        '🚫 Prendre des décisions d\'architecture technique',
      ],
    },
    stack: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Maze', 'Hotjar', 'Notion', 'Miro', 'Zeroheight', 'UserTesting'],
  },

  qa: {
    icon: '🧪',
    color: '#f59e0b',
    label: { pt: 'QA', en: 'QA', fr: 'QA' },
    tagline: {
      pt: 'Quem garante a qualidade do software em todos os níveis — antes, durante e depois do desenvolvimento.',
      en: 'Who ensures software quality at all levels — before, during and after development.',
      fr: 'Qui garantit la qualité du logiciel à tous les niveaux — avant, pendant et après le développement.',
    },
    alert: {
      pt: '⚠️ QA não é "só clicar pra ver se funciona". É uma área técnica robusta com automação, performance, segurança e gerenciamento de riscos. Delegar isso informalmente a devs sem treinamento específico gera débito técnico invisível.',
      en: '⚠️ QA isn\'t "just clicking to see if it works". It\'s a robust technical area with automation, performance, security and risk management. Delegating this informally to untrained devs creates invisible technical debt.',
      fr: '⚠️ QA n\'est pas "juste cliquer pour voir si ça marche". C\'est un domaine technique robuste avec automatisation, performance, sécurité et gestion des risques. Déléguer cela informellement à des devs sans formation spécifique crée une dette technique invisible.',
    },
    owns: {
      pt: [
        '📋 Planejamento e escrita de casos de teste',
        '🤖 Automação: Selenium, Cypress, Playwright, Appium',
        '🔍 Testes funcionais, regressão, integração e E2E',
        '⚡ Testes de performance e carga (k6, JMeter, Gatling)',
        '🔐 Testes de segurança e vulnerabilidades (básico)',
        '📱 Testes mobile (Android, iOS, cross-browser)',
        '🐛 Gerenciamento de bugs e ciclo de vida de defeitos',
        '📊 Relatórios de qualidade, cobertura e métricas',
        '🔄 Integração de testes em pipelines CI/CD',
      ],
      en: [
        '📋 Test case planning and writing',
        '🤖 Automation: Selenium, Cypress, Playwright, Appium',
        '🔍 Functional, regression, integration and E2E testing',
        '⚡ Performance and load testing (k6, JMeter, Gatling)',
        '🔐 Security and vulnerability testing (basic)',
        '📱 Mobile testing (Android, iOS, cross-browser)',
        '🐛 Bug management and defect lifecycle',
        '📊 Quality reports, coverage and metrics',
        '🔄 Test integration in CI/CD pipelines',
      ],
      fr: [
        '📋 Planification et rédaction de cas de test',
        '🤖 Automatisation: Selenium, Cypress, Playwright, Appium',
        '🔍 Tests fonctionnels, de régression, d\'intégration et E2E',
        '⚡ Tests de performance et de charge (k6, JMeter, Gatling)',
        '🔐 Tests de sécurité et de vulnérabilité (basique)',
        '📱 Tests mobile (Android, iOS, cross-browser)',
        '🐛 Gestion des bugs et cycle de vie des défauts',
        '📊 Rapports de qualité, couverture et métriques',
        '🔄 Intégration des tests dans les pipelines CI/CD',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Desenvolver funcionalidades ou corrigir bugs no código',
        '🚫 Projetar a interface ou definir fluxos de UX',
        '🚫 Gerenciar infraestrutura ou banco de dados',
        '🚫 Aprovar ou priorizar requisitos de produto (PM)',
        '🚫 Tomar decisões de arquitetura de software',
      ],
      en: [
        '🚫 Developing features or fixing bugs in code',
        '🚫 Designing the interface or defining UX flows',
        '🚫 Managing infrastructure or databases',
        '🚫 Approving or prioritizing product requirements (PM)',
        '🚫 Making software architecture decisions',
      ],
      fr: [
        '🚫 Développer des fonctionnalités ou corriger des bugs dans le code',
        '🚫 Concevoir l\'interface ou définir les flux UX',
        '🚫 Gérer l\'infrastructure ou les bases de données',
        '🚫 Approuver ou prioriser les exigences du produit (PM)',
        '🚫 Prendre des décisions d\'architecture logicielle',
      ],
    },
    stack: ['Cypress', 'Playwright', 'Selenium', 'Jest', 'k6', 'JMeter', 'Postman', 'Jira', 'TestRail', 'Appium'],
  },

  automation: {
    icon: '🤖',
    color: '#f97316',
    label: { pt: 'Automação', en: 'Automation', fr: 'Automatisation' },
    tagline: {
      pt: 'Quem projeta, implementa e mantém fluxos automatizados que eliminam trabalho manual repetitivo.',
      en: 'Who designs, implements and maintains automated flows that eliminate repetitive manual work.',
      fr: 'Qui conçoit, implémente et maintient des flux automatisés qui éliminent le travail manuel répétitif.',
    },
    alert: {
      pt: '⚠️ Automação não é "só conectar Zapier". Envolve análise de processos, tratamento de erros, monitoramento, logs e impacto de negócio mensurável. Mal implementada, automatiza o caos.',
      en: '⚠️ Automation is not "just connecting Zapier". It involves process analysis, error handling, monitoring, logs and measurable business impact. Badly implemented, it automates chaos.',
      fr: '⚠️ L\'automatisation ne se résume pas à "connecter Zapier". Elle implique l\'analyse des processus, la gestion des erreurs, la surveillance, les logs et un impact métier mesurable. Mal implémentée, elle automatise le chaos.',
    },
    owns: {
      pt: [
        '🔗 Mapeamento e análise de processos manuais repetitivos',
        '⚙️ Implementação de fluxos em n8n, Zapier, Make/Integromat',
        '🤖 Scripts de automação (Python, Node.js, Bash)',
        '🌐 Web scraping e extração de dados (Puppeteer, Playwright, Scrapy)',
        '📊 Integração entre sistemas via APIs e webhooks',
        '🔄 Pipelines de dados (ETL) e sincronização de bases',
        '🐛 Monitoramento, alertas e tratamento de erros em fluxos',
        '📜 Documentação de processos automatizados',
        '📈 Métricas de ROI: tempo economizado, erros reduzidos',
      ],
      en: [
        '🔗 Mapping and analysis of repetitive manual processes',
        '⚙️ Flow implementation in n8n, Zapier, Make/Integromat',
        '🤖 Automation scripts (Python, Node.js, Bash)',
        '🌐 Web scraping and data extraction (Puppeteer, Playwright, Scrapy)',
        '📊 System integration via APIs and webhooks',
        '🔄 Data pipelines (ETL) and database synchronization',
        '🐛 Monitoring, alerts and error handling in flows',
        '📜 Documentation of automated processes',
        '📈 ROI metrics: time saved, errors reduced',
      ],
      fr: [
        '🔗 Cartographie et analyse des processus manuels répétitifs',
        '⚙️ Implémentation de flux dans n8n, Zapier, Make/Integromat',
        '🤖 Scripts d\'automatisation (Python, Node.js, Bash)',
        '🌐 Web scraping et extraction de données (Puppeteer, Playwright)',
        '📊 Intégration entre systèmes via APIs et webhooks',
        '🔄 Pipelines de données (ETL) et synchronisation de bases',
        '🐛 Surveillance, alertes et gestion des erreurs dans les flux',
        '📜 Documentation des processus automatisés',
        '📈 Métriques ROI : temps économisé, erreurs réduites',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Desenvolver funcionalidades de produto (responsabilidade de dev)',
        '🚫 Redesenhar processos de negócio estruturais (responsabilidade de analista/PMO)',
        '🚫 Gerenciar banco de dados em produção',
        '🚫 Tomar decisões de arquitetura de software complexas',
        '🚫 Substituir QA — automação de processos ≠ automação de testes',
      ],
      en: [
        '🚫 Developing product features (dev responsibility)',
        '🚫 Redesigning structural business processes (analyst/PMO responsibility)',
        '🚫 Managing production databases',
        '🚫 Making complex software architecture decisions',
        '🚫 Replacing QA — process automation ≠ test automation',
      ],
      fr: [
        '🚫 Développer des fonctionnalités produit (responsabilité dev)',
        '🚫 Reconcevoir les processus métier structurels (responsabilité analyste/PMO)',
        '🚫 Gérer la base de données en production',
        '🚫 Prendre des décisions d\'architecture logicielle complexes',
        '🚫 Remplacer le QA — automatisation de processus ≠ automatisation de tests',
      ],
    },
    stack: ['n8n', 'Zapier', 'Make', 'Python', 'Node.js', 'Puppeteer', 'Playwright', 'Airtable', 'Webhook', 'REST APIs'],
  },

  seo: {
    icon: '🔍',
    color: '#10b981',
    label: { pt: 'Especialista SEO', en: 'SEO Specialist', fr: 'Spécialiste SEO' },
    tagline: {
      pt: 'Quem otimiza a visibilidade orgânica de sites nos motores de busca — combinando técnica, conteúdo e análise de dados.',
      en: 'Who optimizes the organic visibility of sites in search engines — combining technique, content and data analysis.',
      fr: 'Qui optimise la visibilité organique des sites dans les moteurs de recherche — combinant technique, contenu et analyse de données.',
    },
    alert: {
      pt: '⚠️ SEO não é "botar palavras-chave no texto". É uma disciplina técnica e estratégica que envolve arquitetura de site, performance, dados estruturados, link building e análise contínua. Resultados levam de 3 a 12 meses.',
      en: '⚠️ SEO is not "putting keywords in the text". It\'s a technical and strategic discipline involving site architecture, performance, structured data, link building and continuous analysis. Results take 3 to 12 months.',
      fr: '⚠️ Le SEO ne se résume pas à "mettre des mots-clés dans le texte". C\'est une discipline technique et stratégique impliquant l\'architecture du site, la performance, les données structurées, le link building et une analyse continue. Les résultats prennent de 3 à 12 mois.',
    },
    owns: {
      pt: [
        '🔍 Pesquisa e seleção de palavras-chave (keyword research)',
        '🏗️ Auditoria técnica de SEO (crawlability, indexação, redirects)',
        '⚡ Otimização de Core Web Vitals (LCP, CLS, INP)',
        '📝 Briefings e revisão de conteúdo otimizado para busca',
        '🔗 Estratégia de link building e autoridade de domínio',
        '📊 Análise de dados: Google Search Console, Analytics, Ahrefs',
        '🏷️ Implementação de dados estruturados (schema.org)',
        '🗺️ Arquitetura de informação e estratégia de URLs',
        '📱 SEO para mobile e experiência de página',
      ],
      en: [
        '🔍 Keyword research and selection',
        '🏗️ Technical SEO audit (crawlability, indexing, redirects)',
        '⚡ Core Web Vitals optimization (LCP, CLS, INP)',
        '📝 Briefings and review of search-optimized content',
        '🔗 Link building strategy and domain authority',
        '📊 Data analysis: Google Search Console, Analytics, Ahrefs',
        '🏷️ Structured data implementation (schema.org)',
        '🗺️ Information architecture and URL strategy',
        '📱 Mobile SEO and page experience',
      ],
      fr: [
        '🔍 Recherche et sélection de mots-clés',
        '🏗️ Audit SEO technique (crawlabilité, indexation, redirections)',
        '⚡ Optimisation des Core Web Vitals (LCP, CLS, INP)',
        '📝 Briefings et révision de contenu optimisé pour la recherche',
        '🔗 Stratégie de link building et autorité de domaine',
        '📊 Analyse des données : Google Search Console, Analytics, Ahrefs',
        '🏷️ Implémentation des données structurées (schema.org)',
        '🗺️ Architecture de l\'information et stratégie d\'URLs',
        '📱 SEO mobile et expérience de page',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Escrever o conteúdo completo dos artigos (responsabilidade de redator)',
        '🚫 Implementar código de performance no servidor (responsabilidade de dev)',
        '🚫 Gerenciar campanhas pagas (Google Ads — responsabilidade de mídia)',
        '🚫 Criar identidade visual ou brand guidelines',
        '🚫 Tomar decisões de arquitetura de software',
      ],
      en: [
        '🚫 Writing complete article content (copywriter responsibility)',
        '🚫 Implementing server-side performance code (dev responsibility)',
        '🚫 Managing paid campaigns (Google Ads — media responsibility)',
        '🚫 Creating visual identity or brand guidelines',
        '🚫 Making software architecture decisions',
      ],
      fr: [
        '🚫 Rédiger le contenu complet des articles (responsabilité rédacteur)',
        '🚫 Implémenter le code de performance côté serveur (responsabilité dev)',
        '🚫 Gérer les campagnes payantes (Google Ads — responsabilité média)',
        '🚫 Créer l\'identité visuelle ou les brand guidelines',
        '🚫 Prendre des décisions d\'architecture logicielle',
      ],
    },
    stack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4', 'PageSpeed Insights', 'schema.org', 'Next.js', 'WordPress', 'DataStudio'],
  },

  whatsappDev: {
    icon: '💬',
    color: '#25d366',
    label: { pt: 'Dev WhatsApp/Bots', en: 'WhatsApp/Bot Dev', fr: 'Dev WhatsApp/Bots' },
    tagline: {
      pt: 'Quem constrói integrações com WhatsApp Business API e fluxos conversacionais para automação de atendimento.',
      en: 'Who builds WhatsApp Business API integrations and conversational flows for service automation.',
      fr: 'Qui construit des intégrations WhatsApp Business API et des flux conversationnels pour l\'automatisation du service.',
    },
    alert: {
      pt: '⚠️ Bots WhatsApp não oficiais (via Baileys, WPPConnect) violam os Termos de Serviço da Meta e podem ter o número banido permanentemente. Para produção real, use sempre a API oficial.',
      en: '⚠️ Unofficial WhatsApp bots (via Baileys, WPPConnect) violate Meta\'s Terms of Service and may get the number permanently banned. For real production, always use the official API.',
      fr: '⚠️ Les bots WhatsApp non officiels (via Baileys, WPPConnect) violent les Conditions d\'utilisation de Meta et peuvent entraîner le bannissement permanent du numéro. Pour la production réelle, utilisez toujours l\'API officielle.',
    },
    owns: {
      pt: [
        '📱 Integração com WhatsApp Business Cloud API (Meta)',
        '🤖 Arquitetura e implementação de fluxos conversacionais',
        '💾 Gerenciamento de estado de sessão (Redis, DB)',
        '🔌 Integração com CRMs, ERPs e sistemas internos',
        '📊 Relatórios de engajamento, entregas e conversões',
        '🔒 Conformidade com LGPD no tratamento de dados de mensagens',
        '🚨 Monitoramento e alertas de falhas em fluxos',
        '📝 Gestão de templates aprovados pela Meta',
        '🧪 Testes de fluxos com contas sandbox',
      ],
      en: [
        '📱 Integration with WhatsApp Business Cloud API (Meta)',
        '🤖 Architecture and implementation of conversational flows',
        '💾 Session state management (Redis, DB)',
        '🔌 Integration with CRMs, ERPs and internal systems',
        '📊 Engagement, delivery and conversion reports',
        '🔒 LGPD compliance in message data handling',
        '🚨 Monitoring and alerts for flow failures',
        '📝 Management of Meta-approved templates',
        '🧪 Flow testing with sandbox accounts',
      ],
      fr: [
        '📱 Intégration avec WhatsApp Business Cloud API (Meta)',
        '🤖 Architecture et implémentation des flux conversationnels',
        '💾 Gestion de l\'état de session (Redis, DB)',
        '🔌 Intégration avec CRMs, ERPs et systèmes internes',
        '📊 Rapports d\'engagement, livraison et conversions',
        '🔒 Conformité RGPD dans le traitement des données de messages',
        '🚨 Surveillance et alertes pour les défaillances de flux',
        '📝 Gestion des templates approuvés par Meta',
        '🧪 Tests de flux avec des comptes sandbox',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Criar scripts de conteúdo e copywriting das mensagens',
        '🚫 Definir estratégia de relacionamento com cliente (CRM)',
        '🚫 Gerenciar campanhas de disparo em massa (operação de marketing)',
        '🚫 Tomar decisões de produto sobre o fluxo de negócio',
        '🚫 Garantir conformidade legal de mensagens comerciais',
      ],
      en: [
        '🚫 Creating message content scripts and copywriting',
        '🚫 Defining customer relationship strategy (CRM)',
        '🚫 Managing mass messaging campaigns (marketing operation)',
        '🚫 Making product decisions about the business flow',
        '🚫 Ensuring legal compliance of commercial messages',
      ],
      fr: [
        '🚫 Créer des scripts de contenu et le copywriting des messages',
        '🚫 Définir la stratégie de relation client (CRM)',
        '🚫 Gérer des campagnes d\'envoi en masse (opération marketing)',
        '🚫 Prendre des décisions produit sur le flux métier',
        '🚫 Assurer la conformité légale des messages commerciaux',
      ],
    },
    stack: ['WhatsApp Cloud API', 'Node.js', 'Redis', 'n8n', 'Twilio', 'Zenvia', 'Dialogflow', 'OpenAI API', 'PostgreSQL', 'BullMQ'],
  },

  ecommerceDev: {
    icon: '🛒',
    color: '#6366f1',
    label: { pt: 'Dev E-commerce', en: 'E-commerce Dev', fr: 'Dev E-commerce' },
    tagline: {
      pt: 'Quem constrói e mantém lojas virtuais — desde plataformas prontas até arquiteturas headless customizadas.',
      en: 'Who builds and maintains online stores — from ready platforms to custom headless architectures.',
      fr: 'Qui construit et maintient des boutiques en ligne — des plateformes prêtes aux architectures headless personnalisées.',
    },
    alert: {
      pt: '⚠️ Dev de e-commerce não é responsável por estratégia de precificação, gestão de estoque ou campanhas de marketing. São funções de negócio distintas. Confundir isso gera sobrecarga técnica e decisões ruins de produto.',
      en: '⚠️ E-commerce dev is not responsible for pricing strategy, inventory management or marketing campaigns. These are distinct business functions. Confusing this creates technical overload and poor product decisions.',
      fr: '⚠️ Le dev e-commerce n\'est pas responsable de la stratégie de tarification, de la gestion des stocks ou des campagnes marketing. Ce sont des fonctions métier distinctes. Les confondre crée une surcharge technique et de mauvaises décisions produit.',
    },
    owns: {
      pt: [
        '🛍️ Implementação de catálogo, carrinho e checkout',
        '💳 Integração com gateways de pagamento (Stripe, MP, Pagar.me)',
        '🔗 Integração com plataformas (Shopify, VTEX, Nuvemshop)',
        '📦 APIs de frete e logística (Correios, Melhor Envio)',
        '🔍 SEO técnico para páginas de produto e categoria',
        '⚡ Performance: lazy loading, CDN, imagens otimizadas',
        '🔒 Segurança: PCI compliance, LGPD, prevenção a fraudes',
        '📊 Integração com analytics e pixels de conversão',
        '🧪 Testes A/B de páginas de produto e checkout',
      ],
      en: [
        '🛍️ Catalog, cart and checkout implementation',
        '💳 Payment gateway integration (Stripe, MP, Pagar.me)',
        '🔗 Platform integration (Shopify, VTEX, Nuvemshop)',
        '📦 Shipping and logistics APIs (Correios, Melhor Envio)',
        '🔍 Technical SEO for product and category pages',
        '⚡ Performance: lazy loading, CDN, optimized images',
        '🔒 Security: PCI compliance, LGPD, fraud prevention',
        '📊 Analytics and conversion pixel integration',
        '🧪 A/B testing on product pages and checkout',
      ],
      fr: [
        '🛍️ Implémentation du catalogue, panier et checkout',
        '💳 Intégration des passerelles de paiement (Stripe, MP)',
        '🔗 Intégration de plateformes (Shopify, VTEX)',
        '📦 APIs de livraison et logistique',
        '🔍 SEO technique pour les pages produit et catégorie',
        '⚡ Performance : lazy loading, CDN, images optimisées',
        '🔒 Sécurité : conformité PCI, RGPD, prévention de la fraude',
        '📊 Intégration analytics et pixels de conversion',
        '🧪 Tests A/B sur les pages produit et le checkout',
      ],
    },
    notOwns: {
      pt: [
        '🚫 Definir preços, descontos e políticas comerciais',
        '🚫 Gerenciar estoque e operação de fulfillment',
        '🚫 Criar campanhas de anúncios e e-mail marketing',
        '🚫 Fotografar ou criar conteúdo visual dos produtos',
        '🚫 Definir estratégia de mix de produtos e categorias',
      ],
      en: [
        '🚫 Setting prices, discounts and commercial policies',
        '🚫 Managing inventory and fulfillment operations',
        '🚫 Creating ad campaigns and email marketing',
        '🚫 Photographing or creating visual product content',
        '🚫 Defining product mix and category strategy',
      ],
      fr: [
        '🚫 Définir les prix, remises et politiques commerciales',
        '🚫 Gérer les stocks et les opérations de fulfillment',
        '🚫 Créer des campagnes publicitaires et d\'emailing',
        '🚫 Photographier ou créer du contenu visuel des produits',
        '🚫 Définir la stratégie de mix produits et catégories',
      ],
    },
    stack: ['Next.js', 'Shopify', 'Stripe', 'Mercado Pago', 'VTEX IO', 'Algolia', 'Prisma', 'Redis', 'Cloudinary', 'Google Analytics 4'],
  },

};

/* ============================================================
   I18N labels for Roles section
   ============================================================ */
const ROLES_I18N = {
  roles_badge:      { pt: 'Guia de Responsabilidades', en: 'Responsibility Guide', fr: 'Guide des Responsabilités' },
  roles_title:      { pt: 'Papéis & Responsabilidades', en: 'Roles & Responsibilities', fr: 'Rôles & Responsabilités' },
  roles_subtitle:   {
    pt: 'Entenda o escopo real de cada função — o que é cobrado, o que está fora do escopo e por que confundir essas fronteiras sobrecarrega equipes.',
    en: 'Understand the real scope of each role — what is expected, what is out of scope, and why blurring these boundaries overloads teams.',
    fr: 'Comprenez la portée réelle de chaque rôle — ce qui est attendu, ce qui est hors périmètre, et pourquoi brouiller ces frontières surcharge les équipes.',
  },
  owns_label:    { pt: '✅ É responsabilidade', en: '✅ Is responsible for', fr: '✅ Est responsable de' },
  not_owns_label:{ pt: '🚫 Não é responsabilidade', en: '🚫 Not responsible for', fr: '🚫 N\'est pas responsable de' },
  stack_label:   { pt: '🛠️ Stack principal', en: '🛠️ Core stack', fr: '🛠️ Stack principale' },
};

/* ============================================================
   RENDER ROLES SECTION
   ============================================================ */
function renderRoles(lang = 'pt') {
  const tabsEl  = document.getElementById('roles-tabs');
  const panelEl = document.getElementById('roles-panel');
  if (!tabsEl || !panelEl) return;

  // Update i18n static labels
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (ROLES_I18N[key]) el.textContent = ROLES_I18N[key][lang] || el.textContent;
  });

  // Build tabs
  tabsEl.innerHTML = '';
  const roleIds = Object.keys(ROLES_DATA);

  roleIds.forEach((id, i) => {
    const role = ROLES_DATA[id];
    const btn  = document.createElement('button');
    btn.className    = 'role-tab' + (i === 0 ? ' active' : '');
    btn.dataset.role = id;
    btn.style.setProperty('--role-color', role.color);
    btn.innerHTML    = `<span class="role-tab-icon">${role.icon}</span><span>${role.label[lang]}</span>`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tabsEl.appendChild(btn);
  });

  // Render first role
  renderRolePanel(roleIds[0], lang);

  // Tab click events
  tabsEl.querySelectorAll('.role-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.role-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderRolePanel(btn.dataset.role, lang);
    });
  });
}

function renderRolePanel(roleId, lang) {
  const panelEl = document.getElementById('roles-panel');
  const role    = ROLES_DATA[roleId];
  if (!role || !panelEl) return;

  const l       = lang;
  const i18n    = ROLES_I18N;

  const alertHtml = role.alert ? `
    <div class="role-alert">
      <p>${role.alert[l]}</p>
    </div>` : '';

  const ownsItems = (role.owns[l] || [])
    .map(item => `<li class="role-list-item owns-item">${item}</li>`)
    .join('');

  const notOwnsItems = (role.notOwns[l] || [])
    .map(item => `<li class="role-list-item not-owns-item">${item}</li>`)
    .join('');

  const stackPills = (role.stack || [])
    .map(s => `<span class="stack-pill" style="--role-color:${role.color}">${s}</span>`)
    .join('');

  panelEl.innerHTML = `
    <div class="role-panel-inner" style="--role-color:${role.color}">
      <div class="role-panel-head">
        <span class="role-big-icon">${role.icon}</span>
        <div>
          <h3 class="role-name">${role.label[l]}</h3>
          <p class="role-tagline">${role.tagline[l]}</p>
        </div>
      </div>

      ${alertHtml}

      <div class="role-lists-grid">
        <div class="role-list-block">
          <div class="role-list-header owns-header">
            <span>${i18n.owns_label[l]}</span>
          </div>
          <ul class="role-list">${ownsItems}</ul>
        </div>
        <div class="role-list-block">
          <div class="role-list-header not-owns-header">
            <span>${i18n.not_owns_label[l]}</span>
          </div>
          <ul class="role-list">${notOwnsItems}</ul>
        </div>
      </div>

      <div class="role-stack-block">
        <div class="role-stack-label">${i18n.stack_label[l]}</div>
        <div class="role-stack-pills">${stackPills}</div>
      </div>
    </div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    panelEl.querySelector('.role-panel-inner')?.classList.add('panel-visible');
  });
}
