/* ============================================================
   WORDPRESS — Guia de Plug-ins WordPress
   Dados e renderização da seção interativa de Plug-ins WP.
   ============================================================ */

const WP_DATA = {

  /* ────────────────────────────────────────────────────────
     1. ESTRUTURA DE UM PLUG-IN
     ──────────────────────────────────────────────────────── */
  structure: {
    icon: '🧱',
    color: '#3b82f6',
    label: {
      pt: 'Estrutura',
      en: 'Structure',
      fr: 'Structure',
    },
    tagline: {
      pt: 'Todo plug-in WP começa com um arquivo PHP com um cabeçalho obrigatório e segue convenções de diretório que o core do WordPress espera encontrar.',
      en: 'Every WP plugin starts with a PHP file with a required header and follows directory conventions that the WordPress core expects to find.',
      fr: 'Chaque plugin WP commence par un fichier PHP avec un en-tête obligatoire et suit les conventions de répertoire que le cœur de WordPress s\'attend à trouver.',
    },
    when: {
      pt: 'Qualquer funcionalidade que vai além de um tema deve viver em um plug-in. Use essa estrutura base para qualquer plug-in, seja ele simples (arquivo único) ou complexo (MVC com múltiplos diretórios).',
      en: 'Any functionality that goes beyond a theme should live in a plugin. Use this base structure for any plugin, whether simple (single file) or complex (MVC with multiple directories).',
      fr: 'Toute fonctionnalité qui dépasse un thème doit vivre dans un plugin. Utilisez cette structure de base pour n\'importe quel plugin, qu\'il soit simple (fichier unique) ou complexe (MVC avec plusieurs répertoires).',
    },
    impact: {
      pt: '⚡ Impacto: Seguir a estrutura padrão garante compatibilidade com o instalador do WP, o mecanismo de atualizações e o repositório oficial. Plug-ins mal estruturados quebram na atualização do WP core.',
      en: '⚡ Impact: Following the standard structure ensures compatibility with the WP installer, the update mechanism and the official repository. Poorly structured plugins break on WP core updates.',
      fr: '⚡ Impact : Suivre la structure standard assure la compatibilité avec l\'installateur WP, le mécanisme de mises à jour et le dépôt officiel. Les plugins mal structurés se cassent lors des mises à jour du cœur WP.',
    },
    example: {
      pt: 'Estrutura de diretório e cabeçalho obrigatório do plug-in',
      en: 'Directory structure and required plugin header',
      fr: 'Structure de répertoire et en-tête obligatoire du plugin',
      code: `meu-plugin/
├── meu-plugin.php          ← arquivo principal (cabeçalho obrigatório)
├── uninstall.php           ← limpeza ao desinstalar
├── readme.txt              ← obrigatório para o repositório WP
├── includes/
│   ├── class-meu-plugin.php
│   ├── class-loader.php
│   └── helpers.php
├── admin/
│   ├── class-admin.php
│   └── css/admin.css
├── public/
│   ├── class-public.php
│   └── js/public.js
└── languages/
    └── meu-plugin-pt_BR.po

<?php
/**
 * Plugin Name:       Meu Plugin Incrível
 * Plugin URI:        https://exemplo.com/meu-plugin
 * Description:       Descrição clara e concisa do que o plug-in faz.
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Author:            Seu Nome
 * Author URI:        https://exemplo.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meu-plugin
 * Domain Path:       /languages
 */

// Segurança: impede acesso direto ao arquivo
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define constantes do plug-in
define( 'MEU_PLUGIN_VERSION', '1.0.0' );
define( 'MEU_PLUGIN_DIR',     plugin_dir_path( __FILE__ ) );
define( 'MEU_PLUGIN_URL',     plugin_dir_url( __FILE__ ) );

// Carrega a classe principal
require_once MEU_PLUGIN_DIR . 'includes/class-meu-plugin.php';

// Hook de ativação, desativação e desinstalação
register_activation_hook(   __FILE__, [ 'Meu_Plugin', 'activate' ] );
register_deactivation_hook( __FILE__, [ 'Meu_Plugin', 'deactivate' ] );

// Inicializa o plug-in
Meu_Plugin::get_instance()->run();`,
    },
    pros: {
      pt: [
        'Separação clara entre lógica admin e pública',
        'Facilita atualizações sem quebrar personalizações',
        'Compatível com o sistema de tradução do WP (i18n)',
        'Estrutura reconhecida por desenvolvedores de todo o mundo',
      ],
      en: [
        'Clear separation between admin and public logic',
        'Makes updates easier without breaking customizations',
        'Compatible with WP translation system (i18n)',
        'Structure recognized by developers worldwide',
      ],
      fr: [
        'Séparation claire entre la logique admin et publique',
        'Facilite les mises à jour sans casser les personnalisations',
        'Compatible avec le système de traduction WP (i18n)',
        'Structure reconnue par les développeurs du monde entier',
      ],
    },
    cons: {
      pt: [
        'Estrutura verbosa para plug-ins muito simples',
        'Curva de aprendizado para iniciantes em OOP no PHP',
        'Não há um padrão 100% único — existem variações',
      ],
      en: [
        'Verbose structure for very simple plugins',
        'Learning curve for beginners in OOP with PHP',
        'No 100% unique standard — variations exist',
      ],
      fr: [
        'Structure verbeuse pour les plugins très simples',
        'Courbe d\'apprentissage pour les débutants en POO PHP',
        'Pas de standard 100% unique — des variantes existent',
      ],
    },
    relations: ['hooks', 'shortcode', 'rest-api', 'app-integration'],
  },

  /* ────────────────────────────────────────────────────────
     2. COMO FUNCIONA (HOOKS)
     ──────────────────────────────────────────────────────── */
  hooks: {
    icon: '🪝',
    color: '#f59e0b',
    label: {
      pt: 'Hooks (Actions & Filters)',
      en: 'Hooks (Actions & Filters)',
      fr: 'Hooks (Actions & Filtres)',
    },
    tagline: {
      pt: 'O sistema de hooks é o coração do WordPress. Actions executam código em momentos específicos; Filters modificam dados antes de serem usados.',
      en: 'The hook system is the heart of WordPress. Actions execute code at specific moments; Filters modify data before it is used.',
      fr: 'Le système de hooks est le cœur de WordPress. Les Actions exécutent du code à des moments précis ; les Filtres modifient les données avant leur utilisation.',
    },
    when: {
      pt: 'Sempre que precisar reagir a um evento do WP (action) ou modificar um valor antes de exibi-lo (filter). Nunca modifique arquivos do core — use hooks. Preferir add_filter/add_action ao invés de sobrescrever funções nativas.',
      en: 'Whenever you need to react to a WP event (action) or modify a value before displaying it (filter). Never modify core files — use hooks. Prefer add_filter/add_action instead of overriding native functions.',
      fr: 'Chaque fois que vous devez réagir à un événement WP (action) ou modifier une valeur avant de l\'afficher (filtre). Ne modifiez jamais les fichiers du cœur — utilisez des hooks. Préférez add_filter/add_action plutôt que de remplacer les fonctions natives.',
    },
    impact: {
      pt: '⚡ Impacto: Hooks permitem que plug-ins co-existam sem se sobrescrever. Um hook mal posicionado (prioridade errada) pode fazer seu código rodar antes dos dados estarem prontos, causando bugs silenciosos.',
      en: '⚡ Impact: Hooks allow plugins to coexist without overriding each other. A badly positioned hook (wrong priority) can make your code run before data is ready, causing silent bugs.',
      fr: '⚡ Impact : Les hooks permettent aux plugins de coexister sans se remplacer. Un hook mal positionné (mauvaise priorité) peut faire s\'exécuter votre code avant que les données soient prêtes, causant des bugs silencieux.',
    },
    example: {
      pt: 'Actions, Filters e criação de hooks personalizados',
      en: 'Actions, Filters and creating custom hooks',
      fr: 'Actions, Filtres et création de hooks personnalisés',
      code: `<?php
// ─── ACTIONS — "faça algo neste momento" ─────────────────────

// Enfileira scripts e estilos do plug-in no front-end
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style(
        'meu-plugin-style',
        MEU_PLUGIN_URL . 'public/css/style.css',
        [],
        MEU_PLUGIN_VERSION
    );
    wp_enqueue_script(
        'meu-plugin-script',
        MEU_PLUGIN_URL . 'public/js/app.js',
        [ 'jquery' ],          // dependências
        MEU_PLUGIN_VERSION,
        true                   // carrega no rodapé (performance)
    );

    // Passa dados do PHP para o JS (evita hardcode de URLs)
    wp_localize_script( 'meu-plugin-script', 'MeuPluginVars', [
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'meu_plugin_nonce' ),
    ]);
});

// Cria tabela no banco ao ativar o plug-in
add_action( 'meu_plugin_activate', function() {
    global $wpdb;
    $table  = $wpdb->prefix . 'meu_plugin_logs';
    $sql    = "CREATE TABLE IF NOT EXISTS $table (
        id       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        mensagem TEXT            NOT NULL,
        criado   DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) {$wpdb->get_charset_collate()};";
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta( $sql );
});

// ─── FILTERS — "modifique este valor" ────────────────────────

// Adiciona texto ao final de cada post
add_filter( 'the_content', function( $content ) {
    if ( ! is_single() || ! in_the_loop() ) {
        return $content; // só modifica em posts únicos no loop
    }
    $cta = '<div class="meu-plugin-cta">
        <p>Gostou? <a href="/contato">Entre em contato!</a></p>
    </div>';
    return $content . $cta;
});

// Altera o título dos posts de uma CPT personalizada
add_filter( 'the_title', function( $title, $post_id ) {
    $post = get_post( $post_id );
    if ( $post && 'produto' === $post->post_type ) {
        return '🛒 ' . $title;
    }
    return $title;
}, 10, 2 ); // prioridade 10, 2 argumentos

// ─── HOOKS PERSONALIZADOS — crie seus próprios ────────────────
// No seu plug-in A (dispara o hook):
do_action( 'meu_plugin_apos_compra', $pedido_id, $usuario_id );
apply_filters( 'meu_plugin_preco', $preco, $produto_id );

// No plug-in B (escuta o hook do plug-in A):
add_action( 'meu_plugin_apos_compra', function( $pedido, $usuario ) {
    // envia e-mail, atualiza pontos, etc.
}, 10, 2 );`,
    },
    pros: {
      pt: [
        'Desacopla completamente os módulos do sistema',
        'Permite extensão sem modificar código existente (Open/Closed)',
        'Prioridade numérica oferece controle fino da execução',
        'Sistema testado por mais de 20 anos no ecossistema WP',
      ],
      en: [
        'Completely decouples system modules',
        'Allows extension without modifying existing code (Open/Closed)',
        'Numeric priority offers fine-grained execution control',
        'System tested for over 20 years in the WP ecosystem',
      ],
      fr: [
        'Découple complètement les modules du système',
        'Permet l\'extension sans modifier le code existant (Open/Closed)',
        'La priorité numérique offre un contrôle précis de l\'exécution',
        'Système testé depuis plus de 20 ans dans l\'écosystème WP',
      ],
    },
    cons: {
      pt: [
        'Debug difícil: a pilha de hooks pode ser grande',
        'Prioridade errada causa erros de ordenação sutis',
        'Excesso de hooks pode prejudicar a performance',
      ],
      en: [
        'Hard to debug: the hook stack can be large',
        'Wrong priority causes subtle ordering errors',
        'Too many hooks can hurt performance',
      ],
      fr: [
        'Débogage difficile : la pile de hooks peut être grande',
        'Mauvaise priorité cause des erreurs d\'ordre subtiles',
        'Trop de hooks peut nuire aux performances',
      ],
    },
    relations: ['structure', 'shortcode', 'rest-api'],
  },

  /* ────────────────────────────────────────────────────────
     3. SHORTCODES & CUSTOM POST TYPES
     ──────────────────────────────────────────────────────── */
  shortcode: {
    icon: '📋',
    color: '#10b981',
    label: {
      pt: 'Shortcodes & CPTs',
      en: 'Shortcodes & CPTs',
      fr: 'Shortcodes & CPTs',
    },
    tagline: {
      pt: 'Shortcodes inserem HTML dinâmico via [tag] no editor. Custom Post Types (CPTs) criam novos tipos de conteúdo além de posts e páginas.',
      en: 'Shortcodes insert dynamic HTML via [tag] in the editor. Custom Post Types (CPTs) create new content types beyond posts and pages.',
      fr: 'Les shortcodes insèrent du HTML dynamique via [tag] dans l\'éditeur. Les Custom Post Types (CPTs) créent de nouveaux types de contenu au-delà des articles et pages.',
    },
    when: {
      pt: 'Use shortcodes para embeds reutilizáveis no conteúdo (formulários, sliders, tabelas de preço). Use CPTs quando seu conteúdo tem campos únicos que posts comuns não suportam (produtos, imóveis, eventos).',
      en: 'Use shortcodes for reusable embeds in content (forms, sliders, price tables). Use CPTs when your content has unique fields that common posts don\'t support (products, properties, events).',
      fr: 'Utilisez les shortcodes pour des intégrations réutilisables dans le contenu (formulaires, sliders, tableaux de prix). Utilisez les CPTs quand votre contenu a des champs uniques que les articles courants ne supportent pas.',
    },
    impact: {
      pt: '⚡ Impacto: CPTs mal registrados não aparecem no menu ou nas buscas. Shortcodes que retornam HTML diretamente (sem return) duplicam o conteúdo no topo da página — um erro clássico de iniciante.',
      en: '⚡ Impact: Poorly registered CPTs don\'t appear in the menu or searches. Shortcodes that output HTML directly (without return) duplicate content at the top of the page — a classic beginner mistake.',
      fr: '⚡ Impact : Les CPTs mal enregistrés n\'apparaissent pas dans le menu ou les recherches. Les shortcodes qui affichent du HTML directement (sans return) dupliquent le contenu en haut de la page — une erreur classique de débutant.',
    },
    example: {
      pt: 'Registrando um CPT "Produto" e um Shortcode de tabela de preços',
      en: 'Registering a "Product" CPT and a pricing table Shortcode',
      fr: 'Enregistrement d\'un CPT "Produit" et d\'un Shortcode de tableau de tarifs',
      code: `<?php
// ─── CUSTOM POST TYPE: Produto ────────────────────────────────
add_action( 'init', function() {
    register_post_type( 'produto', [
        'labels' => [
            'name'          => 'Produtos',
            'singular_name' => 'Produto',
            'add_new_item'  => 'Adicionar Produto',
        ],
        'public'        => true,      // aparece no front-end e admin
        'show_in_rest'  => true,      // compatível com o editor Gutenberg
        'supports'      => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
        'menu_icon'     => 'dashicons-cart',
        'has_archive'   => true,      // cria a URL /produto/
        'rewrite'       => [ 'slug' => 'produto' ],
    ]);

    // Custom taxonomy: Categoria de Produto
    register_taxonomy( 'categoria_produto', 'produto', [
        'label'        => 'Categorias',
        'hierarchical' => true,   // funciona como categorias (não tags)
        'show_in_rest' => true,
        'rewrite'      => [ 'slug' => 'categoria-produto' ],
    ]);
});

// ─── SHORTCODE: Tabela de Preços ──────────────────────────────
// Uso no editor: [tabela_precos destaque="pro"]
add_shortcode( 'tabela_precos', function( $atts ) {
    // Sanitiza e define defaults dos atributos
    $atts = shortcode_atts([
        'destaque' => 'basico',   // valor padrão
        'moeda'    => 'BRL',
    ], $atts, 'tabela_precos' );

    $planos = [
        'basico' => [ 'nome' => 'Básico',       'preco' => '49' ],
        'pro'    => [ 'nome' => 'Pro',           'preco' => '99' ],
        'elite'  => [ 'nome' => 'Elite',         'preco' => '199' ],
    ];

    // ⚠️ SEMPRE use ob_start/ob_get_clean ou return — nunca echo direto!
    ob_start();
    ?>
    <div class="meu-plugin-tabela">
        <?php foreach ( $planos as $id => $plano ) :
            $destaque = ( $id === $atts['destaque'] ) ? 'destaque' : '';
        ?>
            <div class="plano <?php echo esc_attr( $destaque ); ?>">
                <h3><?php echo esc_html( $plano['nome'] ); ?></h3>
                <strong>
                    <?php echo esc_html( $atts['moeda'] ); ?>
                    <?php echo esc_html( $plano['preco'] ); ?>/mês
                </strong>
                <a href="/contato" class="btn">Começar</a>
            </div>
        <?php endforeach; ?>
    </div>
    <?php
    return ob_get_clean(); // retorna o HTML (não imprime)
});

// ─── Custom Meta Box (campos adicionais no CPT) ───────────────
add_action( 'add_meta_boxes', function() {
    add_meta_box(
        'produto_detalhes',
        'Detalhes do Produto',
        'render_produto_meta_box',
        'produto',
        'normal',
        'high'
    );
});

function render_produto_meta_box( $post ) {
    wp_nonce_field( 'salvar_produto', 'produto_nonce' );
    $preco = get_post_meta( $post->ID, '_preco', true );
    echo '<label>Preço: <input type="number" name="preco"
          value="' . esc_attr( $preco ) . '" /></label>';
}

add_action( 'save_post_produto', function( $post_id ) {
    if ( ! wp_verify_nonce( $_POST['produto_nonce'] ?? '', 'salvar_produto' ) ) return;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( isset( $_POST['preco'] ) ) {
        update_post_meta( $post_id, '_preco', sanitize_text_field( $_POST['preco'] ) );
    }
});`,
    },
    pros: {
      pt: [
        'CPTs organizam conteúdo estruturado de forma nativa',
        'Shortcodes funcionam em qualquer tema e no editor clássico',
        'Integra perfeitamente com ACF, Pods e outros plugins de campos',
        'CPTs com show_in_rest são compatíveis com Gutenberg',
      ],
      en: [
        'CPTs organize structured content natively',
        'Shortcodes work in any theme and the classic editor',
        'Integrates perfectly with ACF, Pods and other field plugins',
        'CPTs with show_in_rest are compatible with Gutenberg',
      ],
      fr: [
        'Les CPTs organisent le contenu structuré nativement',
        'Les shortcodes fonctionnent dans n\'importe quel thème et l\'éditeur classique',
        'S\'intègre parfaitement avec ACF, Pods et autres plugins de champs',
        'Les CPTs avec show_in_rest sont compatibles avec Gutenberg',
      ],
    },
    cons: {
      pt: [
        'Shortcodes são depreciados em favor dos blocos Gutenberg',
        'CPTs precisam de flush_rewrite_rules após registro ou URLs 404',
        'Meta boxes clássicas são verbosas — ACF reduz esse boilerplate',
      ],
      en: [
        'Shortcodes are deprecated in favor of Gutenberg blocks',
        'CPTs need flush_rewrite_rules after registration or URLs return 404',
        'Classic meta boxes are verbose — ACF reduces this boilerplate',
      ],
      fr: [
        'Les shortcodes sont dépréciés en faveur des blocs Gutenberg',
        'Les CPTs ont besoin de flush_rewrite_rules après l\'enregistrement ou les URLs retournent 404',
        'Les meta boxes classiques sont verbeux — ACF réduit ce boilerplate',
      ],
    },
    relations: ['hooks', 'rest-api', 'app-integration'],
  },

  /* ────────────────────────────────────────────────────────
     4. REST API
     ──────────────────────────────────────────────────────── */
  'rest-api': {
    icon: '🌐',
    color: '#8b5cf6',
    label: {
      pt: 'WP REST API',
      en: 'WP REST API',
      fr: 'WP REST API',
    },
    tagline: {
      pt: 'A REST API do WordPress expõe dados como JSON, permitindo que aplicações externas (React, Vue, mobile, Next.js) consumam e modifiquem o conteúdo do WP.',
      en: 'The WordPress REST API exposes data as JSON, allowing external apps (React, Vue, mobile, Next.js) to consume and modify WP content.',
      fr: 'L\'API REST de WordPress expose les données en JSON, permettant aux applications externes (React, Vue, mobile, Next.js) de consommer et modifier le contenu WP.',
    },
    when: {
      pt: 'Use quando precisar de um frontend desacoplado (headless), um app mobile que consome o WP como back-end, ou quando precisar expor endpoints personalizados para integrações externas.',
      en: 'Use when you need a decoupled frontend (headless), a mobile app consuming WP as a backend, or when you need to expose custom endpoints for external integrations.',
      fr: 'Utilisez quand vous avez besoin d\'un frontend découplé (headless), d\'une application mobile consommant WP comme backend, ou quand vous devez exposer des endpoints personnalisés pour des intégrations externes.',
    },
    impact: {
      pt: '⚡ Impacto: Endpoints sem autenticação expõem dados de usuários e conteúdo privado. Use nonces ou Application Passwords. Endpoints mal otimizados executam queries pesadas — sempre use WP_Query com argumentos cacheáveis.',
      en: '⚡ Impact: Endpoints without authentication expose user data and private content. Use nonces or Application Passwords. Poorly optimized endpoints run heavy queries — always use WP_Query with cacheable arguments.',
      fr: '⚡ Impact : Les endpoints sans authentification exposent les données utilisateur et le contenu privé. Utilisez des nonces ou des Application Passwords. Les endpoints mal optimisés exécutent des requêtes lourdes — utilisez toujours WP_Query avec des arguments cachéables.',
    },
    example: {
      pt: 'Criando endpoints REST personalizados no plug-in',
      en: 'Creating custom REST endpoints in the plugin',
      fr: 'Créer des endpoints REST personnalisés dans le plugin',
      code: `<?php
// ─── REGISTRA ENDPOINTS REST ──────────────────────────────────
add_action( 'rest_api_init', function() {

    // GET /wp-json/meu-plugin/v1/produtos
    register_rest_route( 'meu-plugin/v1', '/produtos', [
        'methods'             => WP_REST_Server::READABLE,  // GET
        'callback'            => 'mp_get_produtos',
        'permission_callback' => '__return_true',  // público
        'args' => [
            'categoria' => [
                'type'              => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            ],
            'por_pagina' => [
                'type'    => 'integer',
                'default' => 10,
            ],
        ],
    ]);

    // POST /wp-json/meu-plugin/v1/contato
    register_rest_route( 'meu-plugin/v1', '/contato', [
        'methods'             => WP_REST_Server::CREATABLE,  // POST
        'callback'            => 'mp_enviar_contato',
        'permission_callback' => function() {
            // Requer usuário logado com capacidade de ler
            return current_user_can( 'read' );
        },
    ]);

    // GET/PUT /wp-json/meu-plugin/v1/produto/{id}
    register_rest_route( 'meu-plugin/v1', '/produto/(?P<id>\\d+)', [
        [
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => 'mp_get_produto',
            'permission_callback' => '__return_true',
        ],
        [
            'methods'             => WP_REST_Server::EDITABLE,
            'callback'            => 'mp_update_produto',
            'permission_callback' => function() {
                return current_user_can( 'edit_posts' );
            },
        ],
    ]);
});

// ─── CALLBACKS DOS ENDPOINTS ─────────────────────────────────
function mp_get_produtos( WP_REST_Request $request ) {
    $args = [
        'post_type'      => 'produto',
        'posts_per_page' => $request->get_param( 'por_pagina' ),
        'tax_query'      => [],
    ];

    if ( $cat = $request->get_param( 'categoria' ) ) {
        $args['tax_query'][] = [
            'taxonomy' => 'categoria_produto',
            'field'    => 'slug',
            'terms'    => $cat,
        ];
    }

    $query   = new WP_Query( $args );
    $results = array_map( function( $post ) {
        return [
            'id'      => $post->ID,
            'titulo'  => $post->post_title,
            'slug'    => $post->post_name,
            'preco'   => get_post_meta( $post->ID, '_preco', true ),
            'imagem'  => get_the_post_thumbnail_url( $post->ID, 'medium' ),
        ];
    }, $query->posts );

    return rest_ensure_response( $results );
}

function mp_enviar_contato( WP_REST_Request $request ) {
    $nome  = sanitize_text_field( $request->get_param( 'nome' ) );
    $email = sanitize_email( $request->get_param( 'email' ) );
    $msg   = sanitize_textarea_field( $request->get_param( 'mensagem' ) );

    if ( empty( $nome ) || ! is_email( $email ) ) {
        return new WP_Error(
            'dados_invalidos',
            'Nome e e-mail válido são obrigatórios.',
            [ 'status' => 422 ]
        );
    }

    wp_mail( get_option('admin_email'), "Contato de $nome", $msg );

    return rest_ensure_response([
        'sucesso'  => true,
        'mensagem' => 'Mensagem enviada com sucesso!',
    ]);
}`,
    },
    pros: {
      pt: [
        'Permite arquitetura headless com qualquer front-end moderno',
        'Endpoints nativas para posts, users, media e taxonomias',
        'Integração nativa com Application Passwords (WP 5.6+)',
        'Testável com Postman, Insomnia ou fetch()',
      ],
      en: [
        'Allows headless architecture with any modern frontend',
        'Native endpoints for posts, users, media and taxonomies',
        'Native integration with Application Passwords (WP 5.6+)',
        'Testable with Postman, Insomnia or fetch()',
      ],
      fr: [
        'Permet une architecture headless avec n\'importe quel frontend moderne',
        'Endpoints natifs pour les articles, utilisateurs, médias et taxonomies',
        'Intégration native avec Application Passwords (WP 5.6+)',
        'Testable avec Postman, Insomnia ou fetch()',
      ],
    },
    cons: {
      pt: [
        'Endpoints públicos exigem atenção extra à segurança',
        'Performance inferior ao WP tradicional sem cache (Redis, Transients)',
        'Namespace de versão (v1, v2) precisa de planejamento desde o início',
      ],
      en: [
        'Public endpoints require extra attention to security',
        'Inferior performance to traditional WP without cache (Redis, Transients)',
        'Version namespace (v1, v2) needs planning from the start',
      ],
      fr: [
        'Les endpoints publics nécessitent une attention particulière à la sécurité',
        'Performance inférieure au WP traditionnel sans cache (Redis, Transients)',
        'L\'espace de noms de version (v1, v2) nécessite une planification dès le début',
      ],
    },
    relations: ['structure', 'hooks', 'app-integration'],
  },

  /* ────────────────────────────────────────────────────────
     5. INTEGRAÇÃO COM APP EXTERNO
     ──────────────────────────────────────────────────────── */
  'app-integration': {
    icon: '🔌',
    color: '#ec4899',
    label: {
      pt: 'Integração com App',
      en: 'App Integration',
      fr: 'Intégration App',
    },
    tagline: {
      pt: 'Como consumir um plug-in WordPress a partir de uma aplicação externa — React, Next.js, Vue ou app mobile — usando a REST API que o plug-in expõe.',
      en: 'How to consume a WordPress plugin from an external app — React, Next.js, Vue or mobile app — using the REST API that the plugin exposes.',
      fr: 'Comment consommer un plugin WordPress depuis une application externe — React, Next.js, Vue ou application mobile — en utilisant l\'API REST que le plugin expose.',
    },
    when: {
      pt: 'Quando o WordPress serve como back-end/CMS (headless) e o front-end é construído com uma tecnologia moderna separada. Também útil para integrar o WP a sistemas legados via webhook.',
      en: 'When WordPress serves as a backend/CMS (headless) and the frontend is built with a separate modern technology. Also useful for integrating WP with legacy systems via webhooks.',
      fr: 'Quand WordPress sert de backend/CMS (headless) et que le frontend est construit avec une technologie moderne séparée. Aussi utile pour intégrer WP à des systèmes legacy via webhooks.',
    },
    impact: {
      pt: '⚡ Impacto: CORS mal configurado bloqueia todas as requisições do app externo. Use Application Passwords para autenticação em produção — nunca exponha credenciais no front-end.',
      en: '⚡ Impact: Misconfigured CORS blocks all requests from the external app. Use Application Passwords for authentication in production — never expose credentials in the frontend.',
      fr: '⚡ Impact : Un CORS mal configuré bloque toutes les requêtes de l\'application externe. Utilisez Application Passwords pour l\'authentification en production — n\'exposez jamais les identifiants dans le frontend.',
    },
    example: {
      pt: 'Consumindo o plug-in em um app React/Next.js + configuração de CORS',
      en: 'Consuming the plugin in a React/Next.js app + CORS configuration',
      fr: 'Consommer le plugin dans une app React/Next.js + configuration CORS',
      code: `// ─── NO PLUG-IN (PHP): Habilita CORS para o app externo ─────
add_action( 'rest_api_init', function() {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

    add_filter( 'rest_pre_serve_request', function( $value ) {
        $origin  = $_SERVER['HTTP_ORIGIN'] ?? '';
        $allowed = [ 'https://meu-app.vercel.app', 'http://localhost:3000' ];

        if ( in_array( $origin, $allowed, true ) ) {
            header( 'Access-Control-Allow-Origin: '  . $origin );
            header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
            header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce' );
            header( 'Access-Control-Allow-Credentials: true' );
        }
        return $value;
    });
}, 15 );

// ═══════════════════════════════════════════════════════════
// NO APP REACT / NEXT.JS (JavaScript/TypeScript)
// ═══════════════════════════════════════════════════════════

// ─── api/wordpress.ts ─────────────────────────────────────
const WP_BASE = process.env.NEXT_PUBLIC_WP_URL;        // https://meusite.com
const WP_USER = process.env.WP_APP_USER;               // usuário WP (server only)
const WP_PASS = process.env.WP_APP_PASSWORD;           // Application Password

const wpAuthHeader = 'Basic ' + btoa(\`\${WP_USER}:\${WP_PASS}\`);

// ─── Busca todos os produtos (GET público) ────────────────
export async function getProdutos(categoria?: string) {
  const params = new URLSearchParams({ por_pagina: '12' });
  if (categoria) params.set('categoria', categoria);

  const res = await fetch(
    \`\${WP_BASE}/wp-json/meu-plugin/v1/produtos?\${params}\`,
    { next: { revalidate: 60 } }  // ISR no Next.js — revalida a cada 60s
  );

  if (!res.ok) throw new Error('Falha ao buscar produtos');
  return res.json();
}

// ─── Busca um produto por ID ──────────────────────────────
export async function getProduto(id: number) {
  const res = await fetch(
    \`\${WP_BASE}/wp-json/meu-plugin/v1/produto/\${id}\`,
    { next: { tags: [\`produto-\${id}\`] } }  // cache por tag (Next.js 13+)
  );
  if (!res.ok) throw new Error('Produto não encontrado');
  return res.json();
}

// ─── Envia formulário de contato (POST autenticado) ───────
export async function enviarContato(dados: {
  nome: string; email: string; mensagem: string;
}) {
  const res = await fetch(
    \`\${WP_BASE}/wp-json/meu-plugin/v1/contato\`,
    {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': wpAuthHeader,
      },
      body: JSON.stringify(dados),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Erro ao enviar contato');
  }
  return res.json();
}

// ─── Componente React que usa o plug-in ───────────────────
// app/produtos/page.tsx (Next.js App Router)
import { getProdutos } from '@/api/wordpress';

export default async function ProdutosPage() {
  const produtos = await getProdutos();  // SSR / ISR automático

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((p: any) => (
          <li key={p.id}>
            <img src={p.imagem} alt={p.titulo} />
            <h2>{p.titulo}</h2>
            <strong>R$ {p.preco}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}`,
    },
    pros: {
      pt: [
        'Separa completamente front-end e back-end (desacoplamento real)',
        'Qualquer tech stack pode consumir o WP (React, Vue, Flutter)',
        'Deploys independentes — front no Vercel, WP no servidor',
        'Application Passwords elimina OAuth complexo para integrações server-to-server',
      ],
      en: [
        'Completely separates frontend and backend (real decoupling)',
        'Any tech stack can consume WP (React, Vue, Flutter)',
        'Independent deploys — frontend on Vercel, WP on server',
        'Application Passwords eliminate complex OAuth for server-to-server integrations',
      ],
      fr: [
        'Sépare complètement frontend et backend (vrai découplage)',
        'N\'importe quelle stack peut consommer WP (React, Vue, Flutter)',
        'Déploiements indépendants — frontend sur Vercel, WP sur serveur',
        'Application Passwords éliminent l\'OAuth complexe pour les intégrations serveur à serveur',
      ],
    },
    cons: {
      pt: [
        'CORS precisa de configuração cuidadosa por ambiente',
        'SEO exige SSR (Next.js) ou pré-renderização — SPA puro é penalizado',
        'Preview de conteúdo (rascunhos WP) é mais complexo no headless',
        'Credenciais do servidor nunca devem vazar para o cliente',
      ],
      en: [
        'CORS requires careful configuration per environment',
        'SEO requires SSR (Next.js) or pre-rendering — pure SPA is penalized',
        'Content preview (WP drafts) is more complex in headless',
        'Server credentials must never leak to the client',
      ],
      fr: [
        'CORS nécessite une configuration soigneuse par environnement',
        'Le SEO nécessite SSR (Next.js) ou le pré-rendu — le SPA pur est pénalisé',
        'L\'aperçu du contenu (brouillons WP) est plus complexe en headless',
        'Les identifiants serveur ne doivent jamais fuiter vers le client',
      ],
    },
    relations: ['rest-api', 'hooks', 'shortcode', 'structure'],
  },

};

/* ============================================================
   I18N — WordPress Section
   ============================================================ */
const WP_I18N = {
  badge:           { pt: 'Guia Interativo', en: 'Interactive Guide', fr: 'Guide Interactif' },
  title:           { pt: 'Plug-ins WordPress', en: 'WordPress Plugins', fr: 'Plugins WordPress' },
  subtitle:        {
    pt: 'Estrutura, hooks, shortcodes, REST API e integração com apps externos — do zero ao headless.',
    en: 'Structure, hooks, shortcodes, REST API and integration with external apps — from scratch to headless.',
    fr: 'Structure, hooks, shortcodes, API REST et intégration avec des applications externes — de zéro au headless.',
  },
  when_label:      { pt: '🕐 Quando usar', en: '🕐 When to use', fr: '🕐 Quand utiliser' },
  impact_label:    { pt: '⚡ Impacto', en: '⚡ Impact', fr: '⚡ Impact' },
  example_label:   { pt: '💻 Exemplo de código', en: '💻 Code Example', fr: '💻 Exemple de code' },
  pros_label:      { pt: '✅ Vantagens', en: '✅ Advantages', fr: '✅ Avantages' },
  cons_label:      { pt: '⚠️ Cuidados', en: '⚠️ Watch out', fr: '⚠️ Attention' },
  relations_label: { pt: '🔗 Relacionado a', en: '🔗 Related to', fr: '🔗 En lien avec' },
  copy_btn:        { pt: '📋 Copiar', en: '📋 Copy', fr: '📋 Copier' },
  copied_btn:      { pt: '✅ Copiado!', en: '✅ Copied!', fr: '✅ Copié!' },
};

/* ============================================================
   RENDER WORDPRESS SECTION
   ============================================================ */
function renderWordPress(lang = 'pt') {
  const section = document.getElementById('wp-section');
  if (!section) return;

  // Header i18n
  const badge    = section.querySelector('[data-wp-i18n="badge"]');
  const title    = section.querySelector('[data-wp-i18n="title"]');
  const subtitle = section.querySelector('[data-wp-i18n="subtitle"]');
  if (badge)    badge.textContent    = WP_I18N.badge[lang];
  if (title)    title.textContent    = WP_I18N.title[lang];
  if (subtitle) subtitle.textContent = WP_I18N.subtitle[lang];

  const tabsEl  = document.getElementById('wp-tabs');
  const panelEl = document.getElementById('wp-panel');
  if (!tabsEl || !panelEl) return;

  tabsEl.innerHTML = '';
  const wpIds = Object.keys(WP_DATA);

  wpIds.forEach((id, i) => {
    const item = WP_DATA[id];
    const btn  = document.createElement('button');
    btn.className      = 'wp-tab' + (i === 0 ? ' active' : '');
    btn.dataset.wpId   = id;
    btn.style.setProperty('--wp-color', item.color);
    btn.innerHTML      = `<span class="wp-tab-icon">${item.icon}</span><span>${item.label[lang]}</span>`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tabsEl.appendChild(btn);
  });

  renderWPPanel(wpIds[0], lang);

  tabsEl.querySelectorAll('.wp-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.wp-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderWPPanel(btn.dataset.wpId, lang);
    });
  });
}

function renderWPPanel(id, lang) {
  const panelEl = document.getElementById('wp-panel');
  const item    = WP_DATA[id];
  if (!item || !panelEl) return;

  const i18n = WP_I18N;
  const l    = lang;

  const prosItems = (item.pros[l] || [])
    .map(p => `<li class="wp-list-item wp-pro-item">✅ ${p}</li>`).join('');
  const consItems = (item.cons[l] || [])
    .map(c => `<li class="wp-list-item wp-con-item">⚠️ ${c}</li>`).join('');

  const relPills = (item.relations || []).map(r => {
    const rel = WP_DATA[r];
    return rel
      ? `<button class="wp-rel-pill" data-wp-id="${r}" style="--wp-color:${rel.color}">${rel.icon} ${rel.label[l]}</button>`
      : `<span class="wp-rel-pill">${r}</span>`;
  }).join('');

  const codeEscaped = item.example.code
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  panelEl.innerHTML = `
    <div class="wp-panel-inner" style="--wp-color:${item.color}">

      <div class="wp-panel-head">
        <span class="wp-big-icon">${item.icon}</span>
        <div>
          <h3 class="wp-name">${item.label[l]}</h3>
          <p class="wp-tagline">${item.tagline[l]}</p>
        </div>
      </div>

      <div class="wp-info-grid">
        <div class="wp-info-block wp-when-block">
          <div class="wp-info-label">${i18n.when_label[l]}</div>
          <p class="wp-info-text">${item.when[l]}</p>
        </div>
        <div class="wp-info-block wp-impact-block">
          <div class="wp-info-label">${i18n.impact_label[l]}</div>
          <p class="wp-info-text">${item.impact[l]}</p>
        </div>
      </div>

      <div class="wp-code-block">
        <div class="wp-code-header">
          <span class="wp-code-label">
            <span class="wp-code-dot"></span>
            ${i18n.example_label[l]} — ${item.example[l]}
          </span>
          <button class="wp-copy-btn" onclick="wpCopyCode(this)">${i18n.copy_btn[l]}</button>
        </div>
        <pre class="wp-pre"><code class="wp-code">${codeEscaped}</code></pre>
      </div>

      <div class="wp-pros-cons-grid">
        <div class="wp-list-block">
          <div class="wp-list-header wp-pros-header">${i18n.pros_label[l]}</div>
          <ul class="wp-list">${prosItems}</ul>
        </div>
        <div class="wp-list-block">
          <div class="wp-list-header wp-cons-header">${i18n.cons_label[l]}</div>
          <ul class="wp-list">${consItems}</ul>
        </div>
      </div>

      <div class="wp-relations-block">
        <div class="wp-relations-label">${i18n.relations_label[l]}</div>
        <div class="wp-rel-pills">${relPills}</div>
      </div>
    </div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    panelEl.querySelector('.wp-panel-inner')?.classList.add('wp-panel-visible');
  });

  // Relation pill clicks
  panelEl.querySelectorAll('.wp-rel-pill[data-wp-id]').forEach(pill => {
    pill.addEventListener('click', () => {
      const targetId = pill.dataset.wpId;
      document.querySelectorAll('.wp-tab').forEach(t => {
        const active = t.dataset.wpId === targetId;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      renderWPPanel(targetId, lang);
    });
  });
}

function wpCopyCode(btn) {
  const lang = typeof APP !== 'undefined' ? APP.lang : 'pt';
  const code = btn.closest('.wp-code-block').querySelector('.wp-code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = WP_I18N.copied_btn[lang];
    setTimeout(() => (btn.textContent = WP_I18N.copy_btn[lang]), 2000);
  });
}
