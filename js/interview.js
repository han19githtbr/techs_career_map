/* ============================================================
   INTERVIEW QUESTIONS SECTION
   ============================================================ */
const INTERVIEW_I18N = {
  badge: {
    pt: 'Guia de Entrevista',
    en: 'Interview Guide',
    fr: 'Guide d\'Entretien',
  },
  title: {
    pt: 'Perguntas e respostas para processos seletivos',
    en: 'Interview questions and answers',
    fr: 'Questions et réponses pour les entretiens',
  },
  subtitle: {
    pt: 'Treine com perguntas objetivas, respostas diretas e a explicação certa para cada cenário.',
    en: 'Practice with focused questions, direct answers and the right explanation for each scenario.',
    fr: 'Entraînez-vous avec des questions ciblées, des réponses directes et la bonne explication pour chaque scénario.',
  },
  answer_label: {
    pt: 'Resposta',
    en: 'Answer',
    fr: 'Réponse',
  },
  explanation_label: {
    pt: 'Por que',
    en: 'Why',
    fr: 'Pourquoi',
  },
  practice_show: {
    pt: 'Mostrar respostas',
    en: 'Show answers',
    fr: 'Afficher les réponses',
  },
  practice_hide: {
    pt: 'Ocultar respostas',
    en: 'Hide answers',
    fr: 'Masquer les réponses',
  },
  show_code: {
    pt: 'Mostrar código',
    en: 'Show code',
    fr: 'Afficher le code',
  },
  hide_code: {
    pt: 'Ocultar código',
    en: 'Hide code',
    fr: 'Masquer le code',
  },
  copy_code: {
    pt: 'Copiar código',
    en: 'Copy code',
    fr: 'Copier le code',
  },
  copied: {
    pt: 'Copiado',
    en: 'Copied',
    fr: 'Copié',
  },
};

let INTERVIEW_PRACTICE_MODE = false;
let INTERVIEW_ACTIVE_CATEGORY = 'all';

const INTERVIEW_CATEGORIES = [
  { id: 'all', label: { pt: 'Todas', en: 'All', fr: 'Toutes' } },
  { id: 'js', label: { pt: 'JavaScript', en: 'JavaScript', fr: 'JavaScript' } },
  { id: 'css', label: { pt: 'CSS', en: 'CSS', fr: 'CSS' } },
  { id: 'git', label: { pt: 'Git', en: 'Git', fr: 'Git' } },
  { id: 'a11y', label: { pt: 'Acessibilidade', en: 'Accessibility', fr: 'Accessibilité' } },
  { id: 'logic', label: { pt: 'Lógica', en: 'Logic', fr: 'Logique' } },
];

const INTERVIEW_DATA = [
  {
    id: 'lesson-string',
    title: {
      pt: 'Concatenação segura de lições',
      en: 'Safe lesson string building',
      fr: 'Construction sûre de la chaîne de leçons',
    },
    question: {
      pt: 'Precisa montar uma string que agrupa o status de 10 lições separadas por vírgula. Qual a abordagem mais moderna e menos propensa a erros de digitação de aspas?',
      en: 'You need to build a string that groups the status of 10 lessons separated by commas. Which approach is the most modern and least error-prone with quotes?',
      fr: 'Vous devez construire une chaîne qui regroupe le statut de 10 leçons séparées par des virgules. Quelle approche est la plus moderne et la moins sujette aux erreurs de guillemets ?',
    },
    answer: {
      pt: 'const data = [lesson1, lesson2, lesson3, ...].join(",");',
      en: 'const data = [lesson1, lesson2, lesson3, ...].join(",");',
      fr: 'const data = [lesson1, lesson2, lesson3, ...].join(",");',
    },
    explanation: {
      pt: 'Usar um array e join() evita concatenações longas e reduz o risco de erros com aspas e vírgulas.',
      en: 'Using an array and join() avoids long concatenations and reduces the risk of quote or comma mistakes.',
      fr: 'Utiliser un tableau et join() évite les concaténations longues et réduit le risque d\'erreurs avec les guillemets ou les virgules.',
    },
    category: 'js',
  },
  {
    id: 'card-gap',
    title: {
      pt: 'Espaçamento entre cards',
      en: 'Spacing between cards',
      fr: 'Espacement entre les cartes',
    },
    question: {
      pt: 'Você tem um componente card repetido 20 vezes. Qual a melhor forma de aplicar margem de 20px entre eles, garantindo que o último não tenha margem extra no final?',
      en: 'You have a card component repeated 20 times. What is the best way to apply 20px spacing between them while ensuring the last one has no extra margin at the end?',
      fr: 'Vous avez un composant carte répété 20 fois. Quelle est la meilleure façon d\'appliquer un espacement de 20px entre elles tout en garantissant que la dernière n\'ait pas de marge supplémentaire à la fin ?',
    },
    answer: {
      pt: 'Aplicar display:flex no container pai e usar gap: 20px;.',
      en: 'Set display:flex on the parent container and use gap: 20px;.',
      fr: 'Appliquer display:flex au conteneur parent et utiliser gap: 20px;.',
    },
    explanation: {
      pt: 'A propriedade gap funciona nativamente no container e elimina margens extras no último item.',
      en: 'The gap property works natively on the container and removes extra margins on the last item.',
      fr: 'La propriété gap fonctionne nativement sur le conteneur et supprime les marges supplémentaires sur le dernier élément.',
    },
    category: 'css',
  },
  {
    id: 'git-merge',
    category: 'git',
    title: {
      pt: 'Integração de branch no Git',
      en: 'Git branch integration',
      fr: 'Intégration de branche Git',
    },
    question: {
      pt: 'Durante o desenvolvimento, um programador trabalhou na branch feature/login e deseja integrar as alterações à branch main. Estando atualmente na main, qual comando realiza corretamente essa operação?',
      en: 'During development, a programmer worked on branch feature/login and wants to merge the changes into main. From main, which command performs that correctly?',
      fr: 'Pendant le développement, un programmeur a travaillé sur la branche feature/login et souhaite intégrer les modifications dans main. Depuis main, quelle commande le fait correctement ?',
    },
    answer: {
      pt: 'git merge feature/login',
      en: 'git merge feature/login',
      fr: 'git merge feature/login',
    },
    explanation: {
      pt: 'Ao estar em main, basta mesclar a branch de recurso em main com git merge feature/login.',
      en: 'While on main, you merge the feature branch into main using git merge feature/login.',
      fr: 'Lorsque vous êtes sur main, vous fusionnez la branche de fonctionnalité dans main avec git merge feature/login.',
    },
  },
  {
    id: 'scores-map',
    category: 'logic',
    title: {
      pt: 'Duplicar valores sem mutação',
      en: 'Double values without mutation',
      fr: 'Doubler les valeurs sans mutation',
    },
    question: {
      pt: 'Você tem o array const scores = [10, 20, 30]. Precisa criar um novo array onde cada valor seja o dobro do original, sem alterar scores. Qual método é mais adequado?',
      en: 'You have const scores = [10, 20, 30]. You need a new array with each value doubled, without mutating scores. Which method is most appropriate?',
      fr: 'Vous avez const scores = [10, 20, 30]. Vous devez créer un nouveau tableau où chaque valeur est doublée, sans modifier scores. Quelle méthode est la plus adaptée ?',
    },
    answer: {
      pt: 'scores.map(score => score * 2)',
      en: 'scores.map(score => score * 2)',
      fr: 'scores.map(score => score * 2)',
    },
    explanation: {
      pt: 'map() cria um novo array sem mutar o original, enquanto forEach e push modificam o mesmo array.',
      en: 'map() creates a new array without mutating the original, while forEach and push modify the same array.',
      fr: 'map() crée un nouveau tableau sans modifier l\'original, tandis que forEach et push modifient le même tableau.',
    },
  },
  {
    id: 'float-precision',
    title: {
      pt: 'Comparação de ponto flutuante',
      en: 'Floating point comparison',
      fr: 'Comparaison de nombres à virgule flottante',
    },
    question: {
      pt: 'Qual será o resultado de 0.1 + 0.2 === 0.3 no console?',
      en: 'What will be the result of 0.1 + 0.2 === 0.3 in the console?',
      fr: 'Quel sera le résultat de 0.1 + 0.2 === 0.3 dans la console ?',
    },
    answer: {
      pt: 'False.',
      en: 'False.',
      fr: 'False.',
    },
    explanation: {
      pt: 'Por causa da precisão de ponto flutuante em JavaScript, o valor não é exatamente 0.3.',
      en: 'Because of floating point precision in JavaScript, the result is not exactly 0.3.',
      fr: 'En raison de la précision des nombres à virgule flottante en JavaScript, le résultat n\'est pas exactement 0.3.',
    },
    category: 'js',
  },
  {
    id: 'js-strict-equals',
    title: {
      pt: 'Diferença entre == e ===',
      en: 'Difference between == and ===',
      fr: 'Différence entre == et ===',
    },
    question: {
      pt: 'Qual é a diferença principal entre == e === em JavaScript?',
      en: 'What is the main difference between == and === in JavaScript?',
      fr: 'Quelle est la principale différence entre == et === en JavaScript ?',
    },
    answer: {
      pt: '=== compara valor e tipo; == faz coerção de tipo antes de comparar.',
      en: '=== compares value and type; == coerces types before comparing.',
      fr: '=== compare la valeur et le type ; == convertit les types avant de comparer.',
    },
    explanation: {
      pt: 'Usar === evita resultados inesperados por coerção de tipo.',
      en: 'Using === avoids unexpected results from type coercion.',
      fr: 'Utiliser === évite des résultats inattendus dus à la coercition de type.',
    },
    category: 'js',
    code: 'const a = 0;\nconsole.log(a == "0", a === "0");',
  },
  {
    id: 'css-center',
    title: {
      pt: 'Centralizar com flexbox',
      en: 'Centering with flexbox',
      fr: 'Centrer avec flexbox',
    },
    question: {
      pt: 'Qual CSS é mais apropriado para centralizar horizontal e verticalmente um elemento dentro do container?',
      en: 'Which CSS is most appropriate to center an element horizontally and vertically inside its container?',
      fr: 'Quel CSS est le plus approprié pour centrer un élément horizontalement et verticalement à l\'intérieur de son conteneur ?',
    },
    answer: {
      pt: 'display: flex; justify-content: center; align-items: center;',
      en: 'display: flex; justify-content: center; align-items: center;',
      fr: 'display: flex; justify-content: center; align-items: center;',
    },
    explanation: {
      pt: 'Flexbox permite centralização nos dois eixos sem cálculos extras.',
      en: 'Flexbox allows centering on both axes without extra calculations.',
      fr: 'Flexbox permet de centrer sur les deux axes sans calculs supplémentaires.',
    },
    category: 'css',
    code: 'body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}',
  },
  {
    id: 'event-delegation',
    title: {
      pt: 'Delegação de eventos',
      en: 'Event delegation',
      fr: 'Délégation d\'événements',
    },
    question: {
      pt: 'Para lidar com muitos botões gerados dinamicamente, qual padrão de evento é mais eficiente?',
      en: 'To handle many dynamically generated buttons, which event pattern is more efficient?',
      fr: 'Pour gérer de nombreux boutons générés dynamiquement, quel modèle d\'événement est plus efficace ?',
    },
    answer: {
      pt: 'Adicionar um listener no pai e usar event.target para delegar.',
      en: 'Add a listener on the parent and use event.target to delegate.',
      fr: 'Ajouter un écouteur sur le parent et utiliser event.target pour déléguer.',
    },
    explanation: {
      pt: 'Isso reduz listeners individuais e funciona para elementos criados após o carregamento.',
      en: 'This reduces individual listeners and works for elements created after load.',
      fr: 'Cela réduit les écouteurs individuels et fonctionne pour les éléments créés après le chargement.',
    },
    category: 'js',
    code: 'document.querySelector("#parent").addEventListener("click", event => {\n  if (event.target.matches("button")) {\n    alert("Botão clicado");\n  }\n});',
  },
  {
    id: 'promise-all',
    title: {
      pt: 'Comportamento de Promise.all',
      en: 'Promise.all behavior',
      fr: 'Comportement de Promise.all',
    },
    question: {
      pt: 'O que acontece se uma das promessas passadas para Promise.all rejetar?',
      en: 'What happens if one of the promises passed to Promise.all rejects?',
      fr: 'Que se passe-t-il si l\'une des promesses passées à Promise.all est rejetée ?',
    },
    answer: {
      pt: 'Promise.all rejeita imediatamente com o motivo da primeira promessa rejeitada.',
      en: 'Promise.all rejects immediately with the reason of the first rejected promise.',
      fr: 'Promise.all est rejetée immédiatement avec la raison de la première promesse rejetée.',
    },
    explanation: {
      pt: 'Todas as outras promessas continuam, mas o resultado final já é considerado rejeitado.',
      en: 'All other promises continue, but the final result is already considered rejected.',
      fr: 'Toutes les autres promesses continuent, mais le résultat final est déjà considéré comme rejeté.',
    },
    category: 'js',
  },
  {
    id: 'nullish-coalescing',
    title: {
      pt: 'Operador nullish coalescing',
      en: 'Nullish coalescing operator',
      fr: 'Opérateur nullish coalescing',
    },
    question: {
      pt: 'Qual operador deve ser usado para fornecer um valor padrão apenas quando a variável for null ou undefined?',
      en: 'Which operator should be used to provide a default value only when the variable is null or undefined?',
      fr: 'Quel opérateur doit être utilisé pour fournir une valeur par défaut uniquement lorsque la variable est null ou undefined ?',
    },
    answer: {
      pt: 'const value = input ?? defaultValue;',
      en: 'const value = input ?? defaultValue;',
      fr: 'const value = input ?? defaultValue;',
    },
    explanation: {
      pt: '?? não substitui valores falsy como 0 ou string vazia, apenas null e undefined.',
      en: '?? does not replace falsy values like 0 or empty string, only null and undefined.',
      fr: '?? ne remplace pas les valeurs falsy comme 0 ou chaîne vide, seulement null et undefined.',
    },
    category: 'js',
    code: 'const value = input ?? "default";\nconst fallback = value === 0 ? 0 : input || "default";',
  },
  {
    id: 'semantic-button',
    title: {
      pt: 'Botão semântico',
      en: 'Semantic button',
      fr: 'Bouton sémantique',
    },
    question: {
      pt: 'Qual elemento HTML é mais adequado para um botão clicável que dispara uma ação?',
      en: 'Which HTML element is most appropriate for a clickable button that triggers an action?',
      fr: 'Quel élément HTML est le plus approprié pour un bouton cliquable qui déclenche une action ?',
    },
    answer: {
      pt: '<button> em vez de <div role="button">.',
      en: '<button> instead of <div role="button">.',
      fr: '<button> au lieu de <div role="button">.',
    },
    explanation: {
      pt: 'button traz acessibilidade nativa, foco e comportamento consistente.',
      en: 'button brings native accessibility, focus, and consistent behavior.',
      fr: 'button apporte accessibilité native, focus et comportement cohérent.',
    },
    category: 'a11y',
    code: '<button type="button">Enviar</button>',
  },
  {
    id: 'aria-label',
    title: {
      pt: 'Botões só com ícone',
      en: 'Icon-only buttons',
      fr: 'Boutons uniquement icônes',
    },
    question: {
      pt: 'Como descrever corretamente a ação de um botão que só mostra um ícone para leitores de tela?',
      en: 'How should you correctly describe the action of an icon-only button for screen readers?',
      fr: 'Comment devez-vous décrire correctement l\'action d\'un bouton uniquement icône pour les lecteurs d\'écran ?',
    },
    answer: {
      pt: 'Adicionar aria-label="Descrição da ação" ao botão.',
      en: 'Add aria-label="Action description" to the button.',
      fr: 'Ajouter aria-label="Description de l\'action" au bouton.',
    },
    explanation: {
      pt: 'Isso garante que usuários de tecnologias assistivas entendam a função do botão.',
      en: 'This ensures assistive technology users understand the button function.',
      fr: 'Cela garantit que les utilisateurs de technologies d\'assistance comprennent la fonction du bouton.',
    },
    category: 'a11y',
    code: '<button aria-label="Fechar" type="button">✕</button>',
  },
  {
    id: 'responsive-img',
    title: {
      pt: 'Imagens responsivas',
      en: 'Responsive images',
      fr: 'Images responsives',
    },
    question: {
      pt: 'Qual atributo HTML é usado para fornecer diferentes tamanhos de imagem dependendo da largura da tela?',
      en: 'Which HTML attribute is used to provide different image sizes depending on screen width?',
      fr: 'Quel attribut HTML est utilisé pour fournir différentes tailles d\'image en fonction de la largeur de l\'écran ?',
    },
    answer: {
      pt: 'O atributo srcset no elemento <img>.',
      en: 'The srcset attribute on the <img> element.',
      fr: 'L\'attribut srcset sur l\'élément <img>.',
    },
    explanation: {
      pt: 'srcset permite ao navegador escolher a imagem mais adequada para o dispositivo.',
      en: 'srcset lets the browser choose the best image for the device.',
      fr: 'srcset permet au navigateur de choisir la meilleure image pour l\'appareil.',
    },
    category: 'a11y',
    code: '<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" sizes="(max-width: 800px) 100vw, 800px" alt="Descrição" />',
  },
  {
    id: 'array-destructuring',
    title: {
      pt: 'Desestruturação de arrays',
      en: 'Array destructuring',
      fr: 'Destructuration de tableau',
    },
    question: {
      pt: 'Como extrair o primeiro e o segundo valor do array const numbers = [5, 10, 15] com sintaxe moderna?',
      en: 'How do you extract the first and second value from const numbers = [5, 10, 15] using modern syntax?',
      fr: 'Comment extraire la première et la deuxième valeur de const numbers = [5, 10, 15] avec une syntaxe moderne ?',
    },
    answer: {
      pt: 'const [first, second] = numbers;',
      en: 'const [first, second] = numbers;',
      fr: 'const [first, second] = numbers;',
    },
    explanation: {
      pt: 'A desestruturação permite atribuir itens de array a variáveis em uma linha.',
      en: 'Destructuring lets you assign array items to variables in one line.',
      fr: 'La destructuration permet d\'affecter des éléments de tableau à des variables en une ligne.',
    },
    category: 'js',
    code: 'const numbers = [5, 10, 15];\nconst [first, second] = numbers;\nconsole.log(first, second);',
  },
  {
    id: 'git-checkout',
    title: {
      pt: 'Alterar branch no Git',
      en: 'Switching branches in Git',
      fr: 'Changer de branche dans Git',
    },
    question: {
      pt: 'Qual comando você deve usar para mudar para a branch feature/login?',
      en: 'Which command should you use to switch to branch feature/login?',
      fr: 'Quelle commande devez-vous utiliser pour changer de branche vers feature/login ?',
    },
    answer: {
      pt: 'git checkout feature/login ou git switch feature/login',
      en: 'git checkout feature/login or git switch feature/login',
      fr: 'git checkout feature/login ou git switch feature/login',
    },
    explanation: {
      pt: 'Ambos mudam para a branch especificada, mas git switch é a forma mais moderna.',
      en: 'Both switch to the specified branch, but git switch is the more modern form.',
      fr: 'Les deux changent de branche, mais git switch est la forme la plus moderne.',
    },
    category: 'git',
    code: 'git checkout feature/login\n# or\ngit switch feature/login',
  },
  {
    id: 'css-specificity',
    title: {
      pt: 'Especificidade CSS',
      en: 'CSS specificity',
      fr: 'Spécificité CSS',
    },
    question: {
      pt: 'Qual regra ganha se um seletor de classe e um seletor de ID tiverem estilos conflitantes?',
      en: 'Which rule wins if a class selector and an ID selector have conflicting styles?',
      fr: 'Quelle règle gagne si un sélecteur de classe et un sélecteur d\'ID ont des styles en conflit ?',
    },
    answer: {
      pt: 'O seletor de ID tem maior especificidade e vence.',
      en: 'The ID selector has higher specificity and wins.',
      fr: 'Le sélecteur ID a une spécificité plus élevée et gagne.',
    },
    explanation: {
      pt: 'IDs são mais específicos que classes, então suas regras prevalecem.',
      en: 'IDs are more specific than classes, so their rules prevail.',
      fr: 'Les IDs sont plus spécifiques que les classes, donc leurs règles prévalent.',
    },
    category: 'css',
    code: '#card { color: blue; }\n.card { color: red; }',
  },
  {
    id: 'loop-closure',
    title: {
      pt: 'Closure em loops',
      en: 'Closure in loops',
      fr: 'Fermeture dans les boucles',
    },
    question: {
      pt: 'Por que ao imprimir os valores dentro de um setTimeout dentro de um for, todos mostram o valor final da variável i?',
      en: 'Why when printing values inside a setTimeout within a for loop, they all show the final value of variable i?',
      fr: 'Pourquoi tous les valeurs imprimées avec setTimeout dans une boucle for affichent la valeur finale de i ?',
    },
    answer: {
      pt: 'Porque a função enxerga a mesma variável i, que ao final do loop vale 10. Use let em vez de var ou uma IIFE.',
      en: 'Because the function sees the same variable i, which ends up being 10. Use let instead of var or wrap in an IIFE.',
      fr: 'Parce que la fonction voit la même variable i, qui termine à 10. Utilisez let à la place de var ou enveloppez dans une IIFE.',
    },
    explanation: {
      pt: 'var tem escopo de função, enquanto let tem escopo de bloco e cria uma nova variável a cada iteração.',
      en: 'var has function scope, while let has block scope and creates a new variable per iteration.',
      fr: 'var a une portée de fonction, tandis que let a une portée de bloc et crée une nouvelle variable par itération.',
    },
    category: 'logic',
    code: 'for (let i = 0; i < 5; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Prints 0, 1, 2, 3, 4',
  },
  {
    id: 'filter-vs-map',
    title: {
      pt: 'Diferença entre filter e map',
      en: 'Difference between filter and map',
      fr: 'Différence entre filter et map',
    },
    question: {
      pt: 'Qual método você usaria para remover elementos que não atendem a uma condição: filter() ou map()?',
      en: 'Which method would you use to remove elements that do not meet a condition: filter() or map()?',
      fr: 'Quelle méthode utiliseriez-vous pour supprimer les éléments qui ne répondent pas à une condition : filter() ou map() ?',
    },
    answer: {
      pt: 'filter() - remove elementos e retorna um array com tamanho possivelmente menor.',
      en: 'filter() - removes elements and returns an array of possibly smaller size.',
      fr: 'filter() - supprime les éléments et retourne un tableau de taille possiblement plus petite.',
    },
    explanation: {
      pt: 'map() transforma cada elemento mantendo o tamanho. filter() seleciona apenas os que atendem a condição.',
      en: 'map() transforms each element keeping the array size. filter() selects only elements meeting the condition.',
      fr: 'map() transforme chaque élément en conservant la taille. filter() sélectionne uniquement les conditions de réunion.',
    },
    category: 'logic',
    code: 'const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);',
  },
  {
    id: 'reduce-sum',
    title: {
      pt: 'Usar reduce para somar',
      en: 'Using reduce to sum',
      fr: 'Utiliser reduce pour additionner',
    },
    question: {
      pt: 'Como calcular a soma de todos os valores de um array com uma única linha usando reduce()?',
      en: 'How to calculate the sum of all array values in a single line using reduce()?',
      fr: 'Comment calculer la somme de toutes les valeurs du tableau en une seule ligne avec reduce() ?',
    },
    answer: {
      pt: '[1, 2, 3, 4].reduce((acc, val) => acc + val, 0)',
      en: '[1, 2, 3, 4].reduce((acc, val) => acc + val, 0)',
      fr: '[1, 2, 3, 4].reduce((acc, val) => acc + val, 0)',
    },
    explanation: {
      pt: 'reduce() percorre o array acumulando o resultado. O 0 é o valor inicial do acumulador.',
      en: 'reduce() traverses the array accumulating the result. 0 is the initial accumulator value.',
      fr: 'reduce() parcourt le tableau en accumulant le résultat. 0 est la valeur initiale de l\'accumulateur.',
    },
    category: 'logic',
    code: 'const nums = [10, 20, 30, 40];\nconst total = nums.reduce((acc, val) => acc + val, 0);\nconsole.log(total); // 100',
  },
  {
    id: 'git-rebase',
    title: {
      pt: 'Rebase vs Merge',
      en: 'Rebase vs Merge',
      fr: 'Rebase vs Fusion',
    },
    question: {
      pt: 'Qual é a diferença entre rebase e merge no Git? Quando usar cada um?',
      en: 'What is the difference between rebase and merge in Git? When to use each?',
      fr: 'Quelle est la différence entre rebase et merge dans Git ? Quand utiliser chacun ?',
    },
    answer: {
      pt: 'Merge cria um commit de mesclagem. Rebase reaplica commits numa nova base, criando um histórico linear.',
      en: 'Merge creates a merge commit. Rebase reapplies commits on a new base, creating linear history.',
      fr: 'Merge crée un commit de fusion. Rebase réapplique les commits sur une nouvelle base, créant un historique linéaire.',
    },
    explanation: {
      pt: 'Use merge para ramos públicos. Use rebase para branches locais para manter histórico limpo.',
      en: 'Use merge for public branches. Use rebase for local branches to keep history clean.',
      fr: 'Utilisez merge pour les branches publiques. Utilisez rebase pour les branches locales pour garder l\'historique propre.',
    },
    category: 'git',
    code: 'git rebase main\n# vs\ngit merge main',
  },
  {
    id: 'git-stash',
    title: {
      pt: 'Guardar mudanças com stash',
      en: 'Saving changes with stash',
      fr: 'Sauvegarder les modifications avec stash',
    },
    question: {
      pt: 'Você está trabalhando em uma branch e precisa mudar para outra sem commitar suas mudanças. O que fazer?',
      en: 'You are working on a branch and need to switch to another without committing your changes. What to do?',
      fr: 'Vous travaillez sur une branche et devez passer à une autre sans valider vos modifications. Que faire ?',
    },
    answer: {
      pt: 'Use git stash para guardar temporariamente as mudanças, depois git stash pop para recuperar.',
      en: 'Use git stash to temporarily save changes, then git stash pop to retrieve them.',
      fr: 'Utilisez git stash pour sauvegarder temporairement les modifications, puis git stash pop pour les récupérer.',
    },
    explanation: {
      pt: 'stash permite trabalhar em outra branch sem perder o progresso atual.',
      en: 'stash lets you work on another branch without losing current progress.',
      fr: 'stash vous permet de travailler sur une autre branche sans perdre la progression actuelle.',
    },
    category: 'git',
    code: 'git stash\ngit checkout another-branch\ngit checkout original-branch\ngit stash pop',
  },
  {
    id: 'git-reset',
    title: {
      pt: 'Desfazer commits com reset',
      en: 'Undoing commits with reset',
      fr: 'Annuler les commits avec reset',
    },
    question: {
      pt: 'Como desfazer o último commit mantendo as alterações no working tree?',
      en: 'How to undo the last commit while keeping changes in the working tree?',
      fr: 'Comment annuler le dernier commit tout en conservant les modifications dans l\'arborescence de travail ?',
    },
    answer: {
      pt: 'git reset --soft HEAD~1',
      en: 'git reset --soft HEAD~1',
      fr: 'git reset --soft HEAD~1',
    },
    explanation: {
      pt: '--soft desfaz o commit mas mantém as mudanças em staging. --hard removeria tudo.',
      en: '--soft undoes the commit but keeps changes staged. --hard would remove everything.',
      fr: '--soft annule le commit mais garde les modifications mises en scène. --hard supprimerait tout.',
    },
    category: 'git',
    code: 'git reset --soft HEAD~1\n# Or discard changes:\ngit reset --hard HEAD~1',
  },
  {
    id: 'color-contrast',
    title: {
      pt: 'Contraste de cores',
      en: 'Color contrast',
      fr: 'Contraste des couleurs',
    },
    question: {
      pt: 'Qual razão de contraste mínima é recomendada pela WCAG para texto normal e acessibilidade?',
      en: 'What minimum contrast ratio is recommended by WCAG for normal text and accessibility?',
      fr: 'Quel ratio de contraste minimal est recommandé par WCAG pour le texte normal et l\'accessibilité ?',
    },
    answer: {
      pt: '4.5:1 para texto normal. 3:1 para texto grande (18pt ou 14pt em bold).',
      en: '4.5:1 for normal text. 3:1 for large text (18pt or 14pt bold).',
      fr: '4,5:1 pour le texte normal. 3:1 pour le texte grand (18pt ou 14pt gras).',
    },
    explanation: {
      pt: 'Isso garante legibilidade para pessoas com daltonismo ou baixa visão.',
      en: 'This ensures readability for people with color blindness or low vision.',
      fr: 'Cela garantit la lisibilité pour les personnes daltoniens ou malvoyantes.',
    },
    category: 'a11y',
    code: '/* Good contrast */\n.text { color: #000; background: #fff; }\n/* 21:1 ratio */\n.bad { color: #ccc; background: #eee; }',
  },
  {
    id: 'keyboard-nav',
    title: {
      pt: 'Navegação por teclado',
      en: 'Keyboard navigation',
      fr: 'Navigation au clavier',
    },
    question: {
      pt: 'Como garantir que todos os elementos interativos são acessíveis via teclado?',
      en: 'How to ensure all interactive elements are keyboard accessible?',
      fr: 'Comment garantir que tous les éléments interactifs sont accessibles au clavier ?',
    },
    answer: {
      pt: 'Use elementos semânticos (<button>, <a>) e defina tabindex="0" para elementos customizados.',
      en: 'Use semantic elements (<button>, <a>) and set tabindex="0" for custom elements.',
      fr: 'Utilisez les éléments sémantiques (<button>, <a>) et définissez tabindex="0" pour les éléments personnalisés.',
    },
    explanation: {
      pt: 'Isso permite navegar com Tab e interagir com Enter/Espaço, essencial para usuários de teclado.',
      en: 'This allows navigation with Tab and interaction with Enter/Space, essential for keyboard users.',
      fr: 'Cela permet la navigation avec Tab et l\'interaction avec Entrée/Espace, essentiel pour les utilisateurs au clavier.',
    },
    category: 'a11y',
    code: '<button type="button">Submit</button>\n<div role="button" tabindex="0" onkeydown="...">Custom Button</div>',
  },
  {
    id: 'form-labels',
    title: {
      pt: 'Labels de formulário',
      en: 'Form labels',
      fr: 'Étiquettes de formulaire',
    },
    question: {
      pt: 'Como associar corretamente um label a um input para acessibilidade?',
      en: 'How to correctly associate a label with an input for accessibility?',
      fr: 'Comment associer correctement un label à un input pour l\'accessibilité ?',
    },
    answer: {
      pt: '<label for="email">Email</label> com <input id="email" type="email" />',
      en: '<label for="email">Email</label> with <input id="email" type="email" />',
      fr: '<label for="email">Email</label> avec <input id="email" type="email" />',
    },
    explanation: {
      pt: 'A associação via for/id permite screen readers conectar label ao input e aumenta a área clicável.',
      en: 'The for/id association lets screen readers connect label to input and increases clickable area.',
      fr: 'L\'association via for/id permet aux lecteurs d\'écran de connecter le label à l\'input et augmente la zone cliquable.',
    },
    category: 'a11y',
    code: '<label for="name">Nome:</label>\n<input id="name" type="text" required />',
  },
];

function renderInterview(lang = 'pt') {
  const section = document.getElementById('interview-section');
  const grid = document.getElementById('interview-grid');
  const toggle = document.getElementById('interview-practice-toggle');
  if (!section || !grid || !toggle) return;

  section.querySelector('[data-interview-i18n="badge"]').textContent = INTERVIEW_I18N.badge[lang];
  section.querySelector('[data-interview-i18n="title"]').textContent = INTERVIEW_I18N.title[lang];
  section.querySelector('[data-interview-i18n="subtitle"]').textContent = INTERVIEW_I18N.subtitle[lang];

  renderInterviewCategoryBar(lang);

  toggle.textContent = INTERVIEW_PRACTICE_MODE
    ? INTERVIEW_I18N.practice_show[lang]
    : INTERVIEW_I18N.practice_hide[lang];
  toggle.setAttribute('aria-pressed', String(INTERVIEW_PRACTICE_MODE));
  toggle.onclick = () => {
    INTERVIEW_PRACTICE_MODE = !INTERVIEW_PRACTICE_MODE;
    renderInterview(lang);
  };

  const filteredData = INTERVIEW_DATA.filter(item =>
    INTERVIEW_ACTIVE_CATEGORY === 'all' || item.category === INTERVIEW_ACTIVE_CATEGORY
  );

  grid.innerHTML = filteredData.map(item => createInterviewCard(item, lang)).join('');
  bindInterviewEvents(lang);
}

function renderInterviewCategoryBar(lang = 'pt') {
  const bar = document.getElementById('interview-category-bar');
  if (!bar) return;

  bar.innerHTML = INTERVIEW_CATEGORIES.map(category => {
    const isActive = category.id === INTERVIEW_ACTIVE_CATEGORY;
    return `
      <button
        class="interview-category-btn${isActive ? ' active' : ''}"
        type="button"
        data-category="${category.id}"
        aria-pressed="${isActive}"
      >${category.label[lang]}</button>`;
  }).join('');
}

function bindInterviewEvents(lang = 'pt') {
  document.querySelectorAll('.interview-category-btn').forEach(btn => {
    btn.onclick = () => {
      INTERVIEW_ACTIVE_CATEGORY = btn.dataset.category;
      renderInterview(lang);
    };
  });

  document.querySelectorAll('.interview-code-toggle').forEach(btn => {
    btn.onclick = () => {
      const card = btn.closest('.interview-card');
      const wrapper = card?.querySelector('.interview-code-wrapper');
      if (!wrapper) return;
      const show = wrapper.hidden;
      wrapper.hidden = !show;
      btn.textContent = show ? INTERVIEW_I18N.hide_code[lang] : INTERVIEW_I18N.show_code[lang];
      btn.setAttribute('aria-expanded', String(show));
    };
  });

  document.querySelectorAll('.interview-copy-btn').forEach(btn => {
    btn.onclick = async () => {
      const codeElement = btn.closest('.interview-code-panel')?.querySelector('code');
      if (!codeElement) return;
      const codeText = codeElement.textContent || '';
      try {
        await navigator.clipboard.writeText(codeText);
        const original = btn.textContent;
        btn.textContent = INTERVIEW_I18N.copied[lang];
        setTimeout(() => { btn.textContent = original; }, 1200);
      } catch (err) {
        console.warn('Clipboard failed', err);
      }
    };
  });
}

function createInterviewCard(item, lang) {
  const codeSection = item.code ? `
      <div class="interview-code-panel">
        <button class="interview-code-toggle" type="button" aria-expanded="false">
          ${INTERVIEW_I18N.show_code[lang]}
        </button>
        <div class="interview-code-wrapper" hidden>
          <button class="interview-copy-btn" type="button">${INTERVIEW_I18N.copy_code[lang]}</button>
          <pre class="interview-code"><code>${escapeHtml(item.code)}</code></pre>
        </div>
      </div>` : '';

  const hiddenClass = INTERVIEW_PRACTICE_MODE ? ' interview-hidden' : '';
  return `
    <article class="interview-card">
      <div class="interview-card-head">
        <h3>${item.title[lang]}</h3>
      </div>
      <p class="interview-question">${item.question[lang]}</p>
      <div class="interview-answer-block${hiddenClass}">
        <strong>${INTERVIEW_I18N.answer_label[lang]}:</strong>
        <p class="interview-answer">${item.answer[lang]}</p>
      </div>
      <div class="interview-explanation-block${hiddenClass}">
        <strong>${INTERVIEW_I18N.explanation_label[lang]}:</strong>
        <p class="interview-explanation">${item.explanation[lang]}</p>
      </div>
      ${codeSection}
    </article>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
