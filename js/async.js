/* ============================================================
   ASYNC — Guia de JavaScript Assíncrono
   Dados e renderização da seção interativa de JS Assíncrono.
   ============================================================ */

const ASYNC_DATA = {

  callback: {
    icon: '🔁',
    color: '#00d4ff',
    label: { pt: 'Callback', en: 'Callback', fr: 'Callback' },
    tagline: {
      pt: 'Função passada como argumento e chamada depois que uma operação termina.',
      en: 'A function passed as an argument and called after an operation finishes.',
      fr: 'Fonction passée en argument et appelée après la fin d\'une opération.',
    },
    when: {
      pt: 'Use quando precisar executar código após uma operação assíncrona simples — como eventos de DOM, timers ou APIs antigas (Node.js fs, etc.). Evite encadeamentos profundos ("Callback Hell").',
      en: 'Use when you need to run code after a simple async operation — like DOM events, timers or legacy APIs (Node.js fs, etc.). Avoid deep nesting ("Callback Hell").',
      fr: 'Utilisez quand vous devez exécuter du code après une opération asynchrone simple — comme des événements DOM, des timers ou des APIs legacy. Évitez les imbrications profondes ("Callback Hell").',
    },
    impact: {
      pt: '⚡ Impacto: Baixo overhead, mas encadeamentos profundos tornam o código ilegível e difícil de depurar. Bugs silenciosos são comuns quando o erro não é tratado.',
      en: '⚡ Impact: Low overhead, but deep nesting makes code unreadable and hard to debug. Silent bugs are common when errors are not handled.',
      fr: '⚡ Impact : Faible overhead, mais l\'imbrication profonde rend le code illisible. Les bugs silencieux sont fréquents si les erreurs ne sont pas gérées.',
    },
    example: {
      pt: 'Callback simples e o problema do "Callback Hell"',
      en: 'Simple callback and the "Callback Hell" problem',
      fr: 'Callback simple et le problème du "Callback Hell"',
      code: `// ✅ Callback simples — leitura de arquivo (Node.js)
const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler arquivo:', err);
    return; // sempre retorne após o erro!
  }
  console.log('Dados:', JSON.parse(data));
});

// ✅ Callback em evento DOM
document.getElementById('btn').addEventListener('click', (event) => {
  console.log('Botão clicado!', event.target);
});

// ✅ Callback com setTimeout
setTimeout(() => {
  console.log('Executado após 1 segundo');
}, 1000);

// ❌ CALLBACK HELL — evitar isso!
getUserFromDB(userId, (err, user) => {
  if (err) return handleError(err);
  getPostsByUser(user.id, (err, posts) => {
    if (err) return handleError(err);
    getCommentsByPost(posts[0].id, (err, comments) => {
      if (err) return handleError(err);
      // Profundidade infinita... impossível de manter 😱
      console.log(comments);
    });
  });
});`
    },
    pros: {
      pt: ['Compatível com toda versão de JS', 'Baixíssimo overhead', 'Onipresente em APIs do browser e Node.js'],
      en: ['Compatible with all JS versions', 'Very low overhead', 'Universal in browser and Node.js APIs'],
      fr: ['Compatible avec toutes les versions JS', 'Overhead très faible', 'Universel dans les APIs browser et Node.js'],
    },
    cons: {
      pt: ['Callback Hell em operações encadeadas', 'Tratamento de erro manual e verboso', 'Difícil de compor e testar'],
      en: ['Callback Hell in chained operations', 'Manual and verbose error handling', 'Hard to compose and test'],
      fr: ['Callback Hell pour les opérations chaînées', 'Gestion d\'erreur manuelle et verbeuse', 'Difficile à composer et tester'],
    },
    relations: ['promise', 'async-await', 'event-loop'],
  },

  promise: {
    icon: '🤝',
    color: '#a855f7',
    label: { pt: 'Promise', en: 'Promise', fr: 'Promise' },
    tagline: {
      pt: 'Objeto que representa um resultado futuro (ou erro) de uma operação assíncrona.',
      en: 'An object representing a future result (or error) of an async operation.',
      fr: 'Objet représentant un résultat futur (ou une erreur) d\'une opération asynchrone.',
    },
    when: {
      pt: 'Use quando precisar encadear operações assíncronas de forma legível, tratar erros de forma centralizada com `.catch()`, ou executar múltiplas operações em paralelo com `Promise.all()`.',
      en: 'Use when you need to chain async operations readably, handle errors centrally with `.catch()`, or run multiple operations in parallel with `Promise.all()`.',
      fr: 'Utilisez pour enchaîner des opérations asynchrones lisiblement, centraliser les erreurs avec `.catch()`, ou exécuter plusieurs opérations en parallèle avec `Promise.all()`.',
    },
    impact: {
      pt: '⚡ Impacto: Código mais legível e manutenível que callbacks. `Promise.all()` é crítico para performance — executa múltiplas requisições em paralelo, reduzindo o tempo total drasticamente vs. sequencial.',
      en: '⚡ Impact: Far more readable than callbacks. `Promise.all()` is critical for performance — runs multiple requests in parallel, dramatically reducing total time vs. sequential.',
      fr: '⚡ Impact : Bien plus lisible que les callbacks. `Promise.all()` est crucial pour la performance — exécute plusieurs requêtes en parallèle, réduisant drastiquement le temps total.',
    },
    example: {
      pt: 'Criando, encadeando e paralelizando Promises',
      en: 'Creating, chaining and parallelizing Promises',
      fr: 'Créer, chaîner et paralléliser des Promises',
      code: `// ✅ Criando uma Promise
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: 'Alice', email: 'alice@dev.com' });
      } else {
        reject(new Error('ID inválido'));
      }
    }, 500);
  });
}

// ✅ Encadeando com .then() e .catch()
buscarUsuario(1)
  .then(user => {
    console.log('Usuário:', user.nome);
    return buscarPostsDoUsuario(user.id); // retorna outra Promise
  })
  .then(posts => console.log('Posts:', posts.length))
  .catch(err => console.error('Erro:', err.message))
  .finally(() => console.log('Operação concluída')); // sempre executa

// ✅ Promise.all — executa em PARALELO (muito mais rápido!)
// Sem Promise.all: 3 requests sequenciais = ~3s
// Com Promise.all: 3 requests simultâneos = ~1s ⚡
const [usuario, produtos, config] = await Promise.all([
  fetch('/api/usuario'),
  fetch('/api/produtos'),
  fetch('/api/config'),
]);

// ✅ Promise.allSettled — não falha se uma rejeitar
const resultados = await Promise.allSettled([
  buscarUsuario(1),
  buscarUsuario(-1), // vai rejeitar
  buscarUsuario(2),
]);
resultados.forEach(r => {
  if (r.status === 'fulfilled') console.log('✅', r.value);
  else console.log('❌', r.reason.message);
});

// ✅ Promise.race — retorna o primeiro que resolver
const primeiraResposta = await Promise.race([
  fetch('https://api1.com/dados'),
  fetch('https://api2.com/dados'), // fallback mais rápido
]);`
    },
    pros: {
      pt: ['Encadeamento legível com .then()', 'Tratamento de erro centralizado com .catch()', 'Paralelismo nativo com Promise.all()', 'Base para async/await'],
      en: ['Readable chaining with .then()', 'Centralized error handling with .catch()', 'Native parallelism with Promise.all()', 'Foundation for async/await'],
      fr: ['Chaînage lisible avec .then()', 'Gestion centralisée des erreurs avec .catch()', 'Parallélisme natif avec Promise.all()', 'Base pour async/await'],
    },
    cons: {
      pt: ['Encadeamentos longos ainda ficam verbosos', '.then() aninhado pode recriar o Callback Hell', 'Microtask queue pode causar comportamentos surpreendentes'],
      en: ['Long chains are still verbose', 'Nested .then() can recreate Callback Hell', 'Microtask queue can cause surprising behavior'],
      fr: ['Les longues chaînes restent verbeuses', '.then() imbriqué peut recréer le Callback Hell', 'La microtask queue peut surprendre'],
    },
    relations: ['async-await', 'event-loop', 'microtask-queue', 'fetch'],
  },

  'async-await': {
    icon: '⏳',
    color: '#22c55e',
    label: { pt: 'async / await', en: 'async / await', fr: 'async / await' },
    tagline: {
      pt: 'Palavras-chave que tornam o uso de Promises muito mais legível — código assíncrono que parece síncrono.',
      en: 'Keywords that make Promises far more readable — async code that looks synchronous.',
      fr: 'Mots-clés qui rendent les Promises bien plus lisibles — code asynchrone qui ressemble à du synchrone.',
    },
    when: {
      pt: 'Use em praticamente todo código assíncrono moderno. É a forma recomendada de consumir Promises. Sempre use try/catch para capturar erros e nunca use await em loops sem intenção — prefira Promise.all() para paralelismo.',
      en: 'Use in virtually all modern async code. It\'s the recommended way to consume Promises. Always use try/catch for error handling, and never use await in loops unintentionally — prefer Promise.all() for parallelism.',
      fr: 'Utilisez dans quasiment tout code asynchrone moderne. C\'est la façon recommandée de consommer des Promises. Toujours utiliser try/catch et éviter await dans les boucles — préférez Promise.all() pour le parallélisme.',
    },
    impact: {
      pt: '⚡ Impacto crítico na legibilidade e manutenção. ATENÇÃO: await em loop sequencializa operações e mata performance. Sempre paralelize com Promise.all() quando possível.',
      en: '⚡ Critical impact on readability and maintenance. WARNING: await in a loop serializes operations and kills performance. Always parallelize with Promise.all() when possible.',
      fr: '⚡ Impact critique sur la lisibilité. ATTENTION : await dans une boucle sérialise les opérations. Parallélisez toujours avec Promise.all() quand c\'est possible.',
    },
    example: {
      pt: 'async/await na prática — boas e más práticas',
      en: 'async/await in practice — good and bad patterns',
      fr: 'async/await en pratique — bonnes et mauvaises pratiques',
      code: `// ✅ Forma básica — sempre declare a função como async
async function buscarDadosDoUsuario(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Falha ao buscar usuário:', error.message);
    throw error; // re-lança para quem chamou decidir o que fazer
  }
}

// ✅ Uso com arrow function
const getConfig = async () => {
  const res = await fetch('/api/config');
  return res.json();
};

// ❌ PROBLEMA CLÁSSICO — await em loop (sequencial = lento!)
// Cada iteração espera a anterior. Para 10 users = 10 * 500ms = 5s 😱
for (const id of userIds) {
  const user = await buscarUsuario(id); // ERRADO para paralelismo
  users.push(user);
}

// ✅ SOLUÇÃO — Promise.all() em paralelo (todos ao mesmo tempo!)
// Para 10 users = ~500ms independente da quantidade ⚡
const users = await Promise.all(
  userIds.map(id => buscarUsuario(id))
);

// ✅ async/await em classes
class UserService {
  async findById(id) {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (!user) throw new Error('Usuário não encontrado');
    return user;
  }

  async create(data) {
    const existing = await this.findByEmail(data.email);
    if (existing) throw new Error('Email já cadastrado');
    return db.insert('users', data);
  }
}`
    },
    pros: {
      pt: ['Código assíncrono legível como síncrono', 'try/catch funciona naturalmente', 'Debugging muito mais simples (stack traces melhores)', 'Padrão da indústria'],
      en: ['Async code reads like synchronous', 'try/catch works naturally', 'Much simpler debugging (better stack traces)', 'Industry standard'],
      fr: ['Code asynchrone lisible comme synchrone', 'try/catch fonctionne naturellement', 'Débogage bien plus simple', 'Standard de l\'industrie'],
    },
    cons: {
      pt: ['Await em loop sequencializa (bug de performance)', 'Não paraleliza automaticamente', 'Função deve ser async para usar await (efeito cascata)'],
      en: ['Await in loop serializes (performance bug)', 'Does not parallelize automatically', 'Function must be async to use await (cascade effect)'],
      fr: ['Await en boucle sérialise (bug de performance)', 'Ne parallélise pas automatiquement', 'La fonction doit être async (effet cascade)'],
    },
    relations: ['promise', 'event-loop', 'fetch', 'microtask-queue'],
  },

  'call-stack': {
    icon: '📚',
    color: '#ff6b35',
    label: { pt: 'Call Stack', en: 'Call Stack', fr: 'Call Stack' },
    tagline: {
      pt: 'Pilha de funções que estão sendo executadas naquele momento — o "histórico de execução" do JavaScript.',
      en: 'Stack of functions currently being executed — JavaScript\'s "execution history".',
      fr: 'Pile des fonctions en cours d\'exécution — l\'historique d\'exécution de JavaScript.',
    },
    when: {
      pt: 'Não é algo que você "usa" diretamente — é o mecanismo interno do JS. Compreender a Call Stack é essencial para depurar erros (stack traces), entender recursão, Maximum call stack exceeded e o comportamento single-thread do JavaScript.',
      en: 'Not something you "use" directly — it\'s JS\'s internal mechanism. Understanding the Call Stack is essential for debugging errors (stack traces), understanding recursion, Maximum call stack exceeded, and JavaScript\'s single-thread behavior.',
      fr: 'Pas quelque chose qu\'on utilise directement — c\'est le mécanisme interne de JS. Comprendre la Call Stack est essentiel pour déboguer (stack traces), comprendre la récursion et le comportement single-thread.',
    },
    impact: {
      pt: '⚡ Impacto direto na performance: funções pesadas na Call Stack bloqueiam a thread principal, congelando UI e impedindo eventos. Sempre mova processamento pesado para Web Workers.',
      en: '⚡ Direct performance impact: heavy functions on the Call Stack block the main thread, freezing UI and preventing events. Always move heavy processing to Web Workers.',
      fr: '⚡ Impact direct sur la performance : des fonctions lourdes bloquent le thread principal, gelant l\'UI. Déplacez toujours le traitement lourd vers des Web Workers.',
    },
    example: {
      pt: 'Como a Call Stack funciona na prática',
      en: 'How the Call Stack works in practice',
      fr: 'Comment fonctionne la Call Stack en pratique',
      code: `// ✅ Visualizando a Call Stack
function somar(a, b) {
  return a + b;        // 3. somar() entra na stack
}

function calcular() {
  const resultado = somar(2, 3); // 2. calcular() chama somar()
  console.log(resultado); // 4. somar() sai, resultado = 5
}

calcular(); // 1. calcular() entra na stack
// Stack em ordem (topo → base):
// [somar] ← topo (executando agora)
// [calcular]
// [main/global]

// ❌ Stack Overflow — recursão infinita
function infinita() {
  return infinita(); // chama a si mesma sem condição de parada
}
// infinita(); // RangeError: Maximum call stack exceeded 💥

// ✅ Recursão com condição de parada
function fatorial(n) {
  if (n <= 1) return 1; // condição de parada
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120

// ❌ Bloqueio da Call Stack — evite isso!
// Bloqueia a UI por 3 segundos — nenhum evento responde!
function operacaoPesada() {
  const inicio = Date.now();
  while (Date.now() - inicio < 3000) {
    // loop síncrono bloqueante — NUNCA faça isso!
  }
  console.log('Feito (mas a UI travou 3s) 😱');
}

// ✅ Solução: Web Worker para processamento pesado
const worker = new Worker('worker.js');
worker.postMessage({ dados: arrayGigante });
worker.onmessage = ({ data }) => {
  console.log('Resultado sem bloquear a UI:', data.resultado);
};

// ✅ Vendo a stack trace em erros
function a() { b(); }
function b() { c(); }
function c() { throw new Error('Algo deu errado'); }
// a();
// Error: Algo deu errado
//   at c (script.js:3)   ← origem do erro
//   at b (script.js:2)
//   at a (script.js:1)   ← quem chamou`
    },
    pros: {
      pt: ['Execução previsível e determinística', 'Stack trace facilita o debugging', 'Modelo mental simples de entender'],
      en: ['Predictable and deterministic execution', 'Stack trace makes debugging easy', 'Simple mental model to understand'],
      fr: ['Exécution prévisible et déterministe', 'Stack trace facilite le débogage', 'Modèle mental simple à comprendre'],
    },
    cons: {
      pt: ['Single-threaded — operações pesadas bloqueiam tudo', 'Stack Overflow com recursão infinita', 'Limite de profundidade de stack'],
      en: ['Single-threaded — heavy ops block everything', 'Stack Overflow with infinite recursion', 'Stack depth limit'],
      fr: ['Single-threaded — les opérations lourdes bloquent tout', 'Stack Overflow avec récursion infinie', 'Limite de profondeur de stack'],
    },
    relations: ['event-loop', 'task-queue', 'microtask-queue'],
  },

  'event-loop': {
    icon: '🔄',
    color: '#f59e0b',
    label: { pt: 'Event Loop', en: 'Event Loop', fr: 'Event Loop' },
    tagline: {
      pt: 'Responsável por organizar o que o JS executa primeiro — o coração do modelo assíncrono.',
      en: 'Responsible for organizing what JS executes first — the heart of the async model.',
      fr: 'Responsable de l\'ordre d\'exécution en JS — le cœur du modèle asynchrone.',
    },
    when: {
      pt: 'Não é algo que você "usa" — é o mecanismo que você precisa entender. O Event Loop permite que JS seja single-threaded mas ainda não-bloqueante. Essencial para entender a ordem de execução de Promises, setTimeout, e eventos.',
      en: 'Not something you "use" — it\'s the mechanism you need to understand. The Event Loop allows JS to be single-threaded yet non-blocking. Essential for understanding execution order of Promises, setTimeout, and events.',
      fr: 'Pas quelque chose qu\'on utilise directement. Le Event Loop permet à JS d\'être single-threaded mais non-bloquant. Essentiel pour comprendre l\'ordre d\'exécution.',
    },
    impact: {
      pt: '⚡ Impacto fundamental em performance e comportamento. Entender o Event Loop explica por que Promises resolvem antes de setTimeout(fn, 0), por que código após await continua na microtask queue, e como evitar starvation de tasks.',
      en: '⚡ Fundamental performance and behavior impact. Understanding the Event Loop explains why Promises resolve before setTimeout(fn, 0), why code after await continues in the microtask queue, and how to avoid task starvation.',
      fr: '⚡ Impact fondamental sur la performance. Comprendre le Event Loop explique pourquoi les Promises se résolvent avant setTimeout(fn, 0) et comment éviter la famine des tâches.',
    },
    example: {
      pt: 'A ordem de execução do Event Loop',
      en: 'The Event Loop execution order',
      fr: 'L\'ordre d\'exécution du Event Loop',
      code: `// 🔬 Experimento clássico — qual é a ordem?
console.log('1 - Síncrono (Call Stack)');

setTimeout(() => {
  console.log('4 - Macro-task (Task Queue)');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - Micro-task (Microtask Queue)');
});

console.log('2 - Síncrono (Call Stack)');

// Saída:
// 1 - Síncrono (Call Stack)
// 2 - Síncrono (Call Stack)
// 3 - Micro-task (Microtask Queue)   ← antes do setTimeout!
// 4 - Macro-task (Task Queue)

// 🔍 Por que? O Event Loop segue esta ordem:
// 1. Executa TODO o código síncrono (Call Stack)
// 2. Esvazia a Microtask Queue (Promises, queueMicrotask)
// 3. Pega UMA task da Task Queue (setTimeout, setInterval, I/O)
// 4. Repete desde o passo 2

// 🔬 Exemplo mais complexo
async function exemplo() {
  console.log('A - dentro da async function (síncrono)');
  await Promise.resolve();
  console.log('C - após await (microtask)');
}

console.log('início');
exemplo();
console.log('B - após chamar exemplo() (síncrono)');

// Saída: início → A → B → C

// ⚠️ Starvation de Task Queue
// Se você enfileirar microtasks infinitamente, as Tasks nunca executam!
function microtaskInfinita() {
  Promise.resolve().then(microtaskInfinita); // bloqueia Task Queue!
}
// NUNCA faça isso — setTimeout nunca vai executar`
    },
    pros: {
      pt: ['Permite I/O não-bloqueante em single-thread', 'Modelo mental claro quando entendido', 'Previsível quando você conhece a ordem'],
      en: ['Allows non-blocking I/O in single-thread', 'Clear mental model when understood', 'Predictable once you know the order'],
      fr: ['Permet l\'I/O non-bloquant en single-thread', 'Modèle clair quand il est compris', 'Prévisible une fois l\'ordre connu'],
    },
    cons: {
      pt: ['Curva de aprendizado íngreme', 'Bugs sutis de ordem de execução', 'Microtasks mal usadas causam starvation'],
      en: ['Steep learning curve', 'Subtle execution order bugs', 'Misused microtasks cause starvation'],
      fr: ['Courbe d\'apprentissage abrupte', 'Bugs subtils d\'ordre d\'exécution', 'Mauvaise utilisation des microtasks cause une famine'],
    },
    relations: ['call-stack', 'task-queue', 'microtask-queue', 'promise', 'async-await'],
  },

  'task-queue': {
    icon: '📋',
    color: '#ec4899',
    label: { pt: 'Task Queue', en: 'Task Queue', fr: 'Task Queue' },
    tagline: {
      pt: 'Fila onde callbacks ficam esperando para serem executados pelo Event Loop — também chamada de Macro-task Queue.',
      en: 'Queue where callbacks wait to be executed by the Event Loop — also called Macro-task Queue.',
      fr: 'File où les callbacks attendent d\'être exécutés par le Event Loop — aussi appelée Macro-task Queue.',
    },
    when: {
      pt: 'Importante entender quando usar setTimeout(fn, 0) para "agendar" código para depois da execução atual, quando usar setInterval para repetições, e como I/O, eventos e mensagens de Workers chegam na queue.',
      en: 'Important to understand when to use setTimeout(fn, 0) to "schedule" code after current execution, when to use setInterval for repetitions, and how I/O, events and Worker messages arrive in the queue.',
      fr: 'Comprendre quand utiliser setTimeout(fn, 0) pour planifier du code, setInterval pour les répétitions, et comment I/O et événements arrivent dans la queue.',
    },
    impact: {
      pt: '⚡ Impacto em UX e performance: setTimeout(fn, 0) é um truque para liberar a Call Stack e permitir que o browser renderize antes de continuar. Essencial para UX responsiva em operações longas.',
      en: '⚡ UX and performance impact: setTimeout(fn, 0) is a trick to free the Call Stack and let the browser render before continuing. Essential for responsive UX in long operations.',
      fr: '⚡ Impact sur l\'UX : setTimeout(fn, 0) libère la Call Stack pour permettre au navigateur de rendre avant de continuer. Essentiel pour une UX réactive.',
    },
    example: {
      pt: 'Task Queue na prática',
      en: 'Task Queue in practice',
      fr: 'Task Queue en pratique',
      code: `// O que vai para a Task Queue (Macro-tasks):
// - setTimeout, setInterval, setImmediate (Node.js)
// - Eventos do DOM (click, keydown...)
// - Callbacks de I/O (fetch resolve, fs.readFile...)
// - postMessage de Web Workers
// - requestAnimationFrame (tecnicamente, antes da task)

// ✅ setTimeout(fn, 0) — adia para o PRÓXIMO ciclo do Event Loop
console.log('antes');
setTimeout(() => console.log('task queue'), 0);
console.log('depois');
// Saída: antes → depois → task queue

// ✅ Truque clássico: deixar o browser renderizar antes de continuar
function processarListaGrande(items) {
  const chunkSize = 100;
  let index = 0;

  function processarProximoChunk() {
    const chunk = items.slice(index, index + chunkSize);
    chunk.forEach(item => processarItem(item));
    index += chunkSize;

    if (index < items.length) {
      // Cede o controle ao browser entre chunks — UI não trava!
      setTimeout(processarProximoChunk, 0);
    }
  }

  processarProximoChunk();
}

// ✅ setInterval — repetição controlada
let contador = 0;
const timer = setInterval(() => {
  contador++;
  console.log(\`Tick \${contador}\`);
  if (contador >= 5) {
    clearInterval(timer); // SEMPRE limpe intervals!
    console.log('Timer cancelado');
  }
}, 1000);

// ✅ queueMicrotask vs setTimeout — prioridade diferente!
setTimeout(() => console.log('B - task queue'), 0);
queueMicrotask(() => console.log('A - microtask queue'));
// Saída: A → B (microtask tem prioridade!)`
    },
    pros: {
      pt: ['Permite ceder controle ao browser entre tarefas', 'setInterval para polling simples', 'Modelo de agendamento previsível'],
      en: ['Allows yielding control to the browser between tasks', 'setInterval for simple polling', 'Predictable scheduling model'],
      fr: ['Permet de céder le contrôle au navigateur', 'setInterval pour le polling simple', 'Modèle de planification prévisible'],
    },
    cons: {
      pt: ['Menor prioridade que Microtask Queue', 'setTimeout não é preciso em ms', 'setInterval pode acumular se lento'],
      en: ['Lower priority than Microtask Queue', 'setTimeout is not precise in ms', 'setInterval can pile up if slow'],
      fr: ['Priorité inférieure à la Microtask Queue', 'setTimeout n\'est pas précis en ms', 'setInterval peut s\'empiler si lent'],
    },
    relations: ['event-loop', 'microtask-queue', 'call-stack'],
  },

  'microtask-queue': {
    icon: '⚡',
    color: '#64748b',
    label: { pt: 'Microtask Queue', en: 'Microtask Queue', fr: 'Microtask Queue' },
    tagline: {
      pt: 'Fila prioritária — Promises e queueMicrotask entram aqui. Executada ANTES da Task Queue em cada ciclo.',
      en: 'Priority queue — Promises and queueMicrotask go here. Executed BEFORE the Task Queue on each cycle.',
      fr: 'File prioritaire — Promises et queueMicrotask y entrent. Exécutée AVANT la Task Queue à chaque cycle.',
    },
    when: {
      pt: 'Você não agenda microtasks diretamente na maioria dos casos — elas são agendadas automaticamente por Promises (.then, .catch, await). Use queueMicrotask() quando precisar de alta prioridade sem usar uma Promise.',
      en: 'You rarely schedule microtasks directly — they are automatically scheduled by Promises (.then, .catch, await). Use queueMicrotask() when you need high priority without a Promise.',
      fr: 'Vous ne planifiez pas directement des microtasks — elles sont automatiquement planifiées par les Promises. Utilisez queueMicrotask() pour une haute priorité sans Promise.',
    },
    impact: {
      pt: '⚡ Impacto crítico: a Microtask Queue é esvaziada COMPLETAMENTE antes de cada task da Task Queue. Isso significa que código após await tem prioridade sobre setTimeout(fn, 0). Microtasks excessivas podem causar starvation da UI.',
      en: '⚡ Critical impact: the Microtask Queue is fully drained BEFORE each task from the Task Queue. This means code after await has priority over setTimeout(fn, 0). Excessive microtasks can starve the UI.',
      fr: '⚡ Impact critique : la Microtask Queue est entièrement vidée AVANT chaque tâche de la Task Queue. Cela signifie que le code après await a priorité sur setTimeout(fn, 0).',
    },
    example: {
      pt: 'Como a Microtask Queue funciona',
      en: 'How the Microtask Queue works',
      fr: 'Comment la Microtask Queue fonctionne',
      code: `// O que vai para a Microtask Queue:
// - Promise.then() / .catch() / .finally()
// - await (o código APÓS o await)
// - queueMicrotask()
// - MutationObserver callbacks

// ✅ Demonstração da prioridade
console.log('1️⃣ síncrono');

setTimeout(() => console.log('4️⃣ Task Queue (setTimeout)'), 0);

Promise.resolve()
  .then(() => console.log('3️⃣ Microtask Queue (Promise.then)'))
  .then(() => console.log('3️⃣ Microtask Queue (segunda .then)'));

queueMicrotask(() => console.log('3️⃣ Microtask Queue (queueMicrotask)'));

console.log('2️⃣ síncrono');

// Saída:
// 1️⃣ síncrono
// 2️⃣ síncrono
// 3️⃣ Microtask Queue (Promise.then)
// 3️⃣ Microtask Queue (queueMicrotask)  ← AMBAS antes do setTimeout!
// 3️⃣ Microtask Queue (segunda .then)
// 4️⃣ Task Queue (setTimeout)

// ⚠️ Perigo: microtasks geradas dentro de microtasks
// também executam antes de qualquer task!
Promise.resolve().then(() => {
  console.log('microtask 1');
  Promise.resolve().then(() => {
    console.log('microtask 2 — dentro de microtask 1');
    // O Event Loop NÃO vai para a Task Queue até esvaziar TUDO isso
  });
});
setTimeout(() => console.log('task — executa por último'), 0);

// ✅ queueMicrotask para casos de alta prioridade customizados
function notificarObservadores(dados) {
  // Garante que observadores são notificados na mesma "passagem"
  // mas após o código síncrono atual
  queueMicrotask(() => {
    observadores.forEach(obs => obs(dados));
  });
}`
    },
    pros: {
      pt: ['Alta prioridade garante consistência após Promises', 'Promises sempre resolvem antes de callbacks I/O', 'Comportamento previsível para código assíncrono'],
      en: ['High priority ensures consistency after Promises', 'Promises always resolve before I/O callbacks', 'Predictable behavior for async code'],
      fr: ['Haute priorité garantit la cohérence après Promises', 'Les Promises se résolvent toujours avant les callbacks I/O', 'Comportement prévisible pour le code asynchrone'],
    },
    cons: {
      pt: ['Microtasks em excesso bloqueiam a Task Queue (starvation)', 'Difícil de rastrear em debugging', 'Comportamento pode surpreender iniciantes'],
      en: ['Excessive microtasks block the Task Queue (starvation)', 'Hard to track during debugging', 'Behavior can surprise beginners'],
      fr: ['Les microtasks excessives bloquent la Task Queue', 'Difficile à tracer pendant le débogage', 'Comportement surprenant pour les débutants'],
    },
    relations: ['event-loop', 'promise', 'async-await', 'task-queue'],
  },

  fetch: {
    icon: '🌐',
    color: '#00d4ff',
    label: { pt: 'Fetch API', en: 'Fetch API', fr: 'Fetch API' },
    tagline: {
      pt: 'API nativa para fazer requisições HTTP que retorna uma Promise com a resposta — substitui o XMLHttpRequest.',
      en: 'Native API for HTTP requests that returns a Promise with the response — replaces XMLHttpRequest.',
      fr: 'API native pour les requêtes HTTP retournant une Promise — remplace XMLHttpRequest.',
    },
    when: {
      pt: 'Use fetch para qualquer comunicação com APIs externas ou internas. Combine com async/await para máxima legibilidade. Em produção, use Axios para interceptors, cancelamento automático e melhores defaults de erro.',
      en: 'Use fetch for any communication with external or internal APIs. Combine with async/await for maximum readability. In production, use Axios for interceptors, automatic cancellation and better error defaults.',
      fr: 'Utilisez fetch pour toute communication avec des APIs. Combinez avec async/await pour une lisibilité maximale. En production, Axios offre des interceptors et de meilleurs defaults.',
    },
    impact: {
      pt: '⚡ Impacto crítico em performance: fetch não rejeita em erros HTTP (4xx, 5xx) — você DEVE verificar response.ok. Use AbortController para cancelar requests em componentes desmontados (evita memory leaks em React).',
      en: '⚡ Critical performance impact: fetch does NOT reject on HTTP errors (4xx, 5xx) — you MUST check response.ok. Use AbortController to cancel requests in unmounted components (prevents React memory leaks).',
      fr: '⚡ Impact critique : fetch ne rejette pas les erreurs HTTP — vérifiez toujours response.ok. Utilisez AbortController pour annuler les requêtes et éviter les memory leaks.',
    },
    example: {
      pt: 'Fetch completo com todos os padrões de produção',
      en: 'Complete fetch with all production patterns',
      fr: 'Fetch complet avec tous les patterns de production',
      code: `// ✅ GET básico com async/await
async function buscarUsuario(id) {
  const response = await fetch(\`https://api.exemplo.com/users/\${id}\`);

  // ⚠️ ATENÇÃO: fetch NÃO rejeita em 404, 500, etc.!
  // Você DEVE verificar response.ok
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
  }

  return response.json(); // retorna outra Promise
}

// ✅ POST com body JSON
async function criarUsuario(dados) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${getToken()}\`,
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) throw new Error(\`Erro \${response.status}\`);
  return response.json();
}

// ✅ AbortController — cancela request (ESSENCIAL em React!)
async function buscarComTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();

  // Cancela automaticamente após o timeout
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Request cancelada por timeout');
    }
    throw err;
  }
}

// ✅ Uso em React — cancela ao desmontar componente
useEffect(() => {
  const controller = new AbortController();

  async function carregar() {
    try {
      const res = await fetch('/api/dados', {
        signal: controller.signal,
      });
      const data = await res.json();
      setDados(data);
    } catch (err) {
      if (err.name !== 'AbortError') setErro(err);
    }
  }

  carregar();
  return () => controller.abort(); // cleanup ao desmontar
}, []);

// ✅ Wrapper robusto para produção
async function api(path, options = {}) {
  const res = await fetch(\`/api\${path}\`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${localStorage.getItem('token')}\`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    logout(); // token expirado
    return;
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || \`HTTP \${res.status}\`);
  }

  return res.json();
}`
    },
    pros: {
      pt: ['API nativa — sem dependências', 'Baseado em Promises — funciona com async/await', 'AbortController para cancelamento', 'Suporte a streaming de resposta'],
      en: ['Native API — no dependencies', 'Promise-based — works with async/await', 'AbortController for cancellation', 'Response streaming support'],
      fr: ['API native — sans dépendances', 'Basé sur les Promises — fonctionne avec async/await', 'AbortController pour l\'annulation', 'Support du streaming de réponse'],
    },
    cons: {
      pt: ['Não rejeita em erros HTTP (4xx, 5xx) — bug comum', 'Sem interceptors nativos', 'Timeout manual via AbortController', 'Sem retry automático'],
      en: ['Does not reject on HTTP errors (4xx, 5xx) — common bug', 'No native interceptors', 'Manual timeout via AbortController', 'No automatic retry'],
      fr: ['Ne rejette pas les erreurs HTTP — bug courant', 'Pas d\'interceptors natifs', 'Timeout manuel via AbortController', 'Pas de retry automatique'],
    },
    relations: ['promise', 'async-await', 'event-loop', 'task-queue'],
  },
};

/* ============================================================
   I18N — Guia Assíncrono
   ============================================================ */
const ASYNC_I18N = {
  badge:        { pt: 'Guia Interativo', en: 'Interactive Guide', fr: 'Guide Interactif' },
  title:        { pt: 'JavaScript Assíncrono', en: 'Asynchronous JavaScript', fr: 'JavaScript Asynchrone' },
  subtitle:     {
    pt: 'Domine callbacks, Promises, async/await, Event Loop e muito mais — com exemplos reais, impacto na performance e dicas de entrevista.',
    en: 'Master callbacks, Promises, async/await, Event Loop and more — with real examples, performance impact and interview tips.',
    fr: 'Maîtrisez callbacks, Promises, async/await, Event Loop et plus — avec des exemples réels, l\'impact sur les performances et des conseils d\'entretien.',
  },
  when_label:    { pt: '🕐 Quando usar', en: '🕐 When to use', fr: '🕐 Quand utiliser' },
  impact_label:  { pt: '⚡ Impacto', en: '⚡ Impact', fr: '⚡ Impact' },
  example_label: { pt: '💻 Exemplo de código', en: '💻 Code Example', fr: '💻 Exemple de code' },
  pros_label:    { pt: '✅ Vantagens', en: '✅ Advantages', fr: '✅ Avantages' },
  cons_label:    { pt: '⚠️ Cuidados', en: '⚠️ Watch out', fr: '⚠️ Attention' },
  relations_label: { pt: '🔗 Relacionado a', en: '🔗 Related to', fr: '🔗 En lien avec' },
};

/* ============================================================
   RENDER ASYNC SECTION
   ============================================================ */
function renderAsync(lang = 'pt') {
  const section = document.getElementById('async-section');
  if (!section) return;

  // Header i18n
  const badge = section.querySelector('[data-async-i18n="badge"]');
  const title = section.querySelector('[data-async-i18n="title"]');
  const subtitle = section.querySelector('[data-async-i18n="subtitle"]');
  if (badge) badge.textContent = ASYNC_I18N.badge[lang];
  if (title) title.textContent = ASYNC_I18N.title[lang];
  if (subtitle) subtitle.textContent = ASYNC_I18N.subtitle[lang];

  // Tabs
  const tabsEl = document.getElementById('async-tabs');
  const panelEl = document.getElementById('async-panel');
  if (!tabsEl || !panelEl) return;

  tabsEl.innerHTML = '';
  const asyncIds = Object.keys(ASYNC_DATA);

  asyncIds.forEach((id, i) => {
    const item = ASYNC_DATA[id];
    const btn = document.createElement('button');
    btn.className = 'async-tab' + (i === 0 ? ' active' : '');
    btn.dataset.asyncId = id;
    btn.style.setProperty('--async-color', item.color);
    btn.innerHTML = `<span class="async-tab-icon">${item.icon}</span><span>${item.label[lang]}</span>`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tabsEl.appendChild(btn);
  });

  renderAsyncPanel(asyncIds[0], lang);

  tabsEl.querySelectorAll('.async-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.async-tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderAsyncPanel(btn.dataset.asyncId, lang);
    });
  });
}

function renderAsyncPanel(id, lang) {
  const panelEl = document.getElementById('async-panel');
  const item = ASYNC_DATA[id];
  if (!item || !panelEl) return;

  const i18n = ASYNC_I18N;
  const l = lang;

  const prosItems = (item.pros[l] || [])
    .map(p => `<li class="async-list-item async-pro-item">✅ ${p}</li>`).join('');
  const consItems = (item.cons[l] || [])
    .map(c => `<li class="async-list-item async-con-item">⚠️ ${c}</li>`).join('');

  const relPills = (item.relations || []).map(r => {
    const rel = ASYNC_DATA[r];
    return rel
      ? `<button class="async-rel-pill" data-async-id="${r}" style="--async-color:${rel.color}">${rel.icon} ${rel.label[l]}</button>`
      : `<span class="async-rel-pill">${r}</span>`;
  }).join('');

  const codeEscaped = item.example.code
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  panelEl.innerHTML = `
    <div class="async-panel-inner" style="--async-color:${item.color}">

      <div class="async-panel-head">
        <span class="async-big-icon">${item.icon}</span>
        <div>
          <h3 class="async-name">${item.label[l]}</h3>
          <p class="async-tagline">${item.tagline[l]}</p>
        </div>
      </div>

      <div class="async-info-grid">
        <div class="async-info-block async-when-block">
          <div class="async-info-label">${i18n.when_label[l]}</div>
          <p class="async-info-text">${item.when[l]}</p>
        </div>
        <div class="async-info-block async-impact-block">
          <div class="async-info-label">${i18n.impact_label[l]}</div>
          <p class="async-info-text">${item.impact[l]}</p>
        </div>
      </div>

      <div class="async-code-block">
        <div class="async-code-header">
          <span class="async-code-label">
            <span class="async-code-dot"></span>
            ${i18n.example_label[l]} — ${item.example[l]}
          </span>
          <button class="async-copy-btn" onclick="asyncCopyCode(this)">📋 Copiar</button>
        </div>
        <pre class="async-pre"><code class="async-code">${codeEscaped}</code></pre>
      </div>

      <div class="async-pros-cons-grid">
        <div class="async-list-block">
          <div class="async-list-header async-pros-header">${i18n.pros_label[l]}</div>
          <ul class="async-list">${prosItems}</ul>
        </div>
        <div class="async-list-block">
          <div class="async-list-header async-cons-header">${i18n.cons_label[l]}</div>
          <ul class="async-list">${consItems}</ul>
        </div>
      </div>

      <div class="async-relations-block">
        <div class="async-relations-label">${i18n.relations_label[l]}</div>
        <div class="async-rel-pills">${relPills}</div>
      </div>
    </div>
  `;

  // Animate
  requestAnimationFrame(() => {
    panelEl.querySelector('.async-panel-inner')?.classList.add('async-panel-visible');
  });

  // Relation pill clicks
  panelEl.querySelectorAll('.async-rel-pill[data-async-id]').forEach(pill => {
    pill.addEventListener('click', () => {
      const targetId = pill.dataset.asyncId;
      // Activate tab
      document.querySelectorAll('.async-tab').forEach(t => {
        const active = t.dataset.asyncId === targetId;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      renderAsyncPanel(targetId, lang);
    });
  });
}

function asyncCopyCode(btn) {
  const code = btn.closest('.async-code-block').querySelector('.async-code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✅ Copiado!';
    setTimeout(() => (btn.textContent = '📋 Copiar'), 2000);
  });
}
