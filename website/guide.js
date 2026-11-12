'use strict';
/* TokenWise V1.2: privacy-first adaptive help and mini encyclopedia.
   Shared topic facts; tailored suggestions by experience level.
   No API requests, tracking, storage, or account access. */
(() => {
  const refs = {
    usage: 'https://help.openai.com/en/articles/20001478-reviewing-work-and-codex-usage-and-using-personal-analytics-in-chatgpt-desktop',
    limits: 'https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits',
    work: 'https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex',
    general: 'https://help.openai.com/',
    developer: 'https://developers.openai.com/'
  };
  const catalog = {
    ru: {
      ui: {
        quickKicker: '01 / ПОМОЩНИК', quickTitle: 'С чем помочь в ChatGPT?',
        quickIntro: 'Выбери проблему и свой опыт. Получишь конкретные шаги — от простого объяснения до рекомендаций для разработчиков.',
        issueQuestion: 'Что хочешь решить?', roleQuestion: 'Как ты пользуешься ИИ?',
        roleNote: 'Нет правильного уровня. Выбирай тот, на котором удобнее читать.',
        answerLabel: 'ЧТО МОЖНО СДЕЛАТЬ', productQuestion: 'Где появилось ограничение?',
        personalTip: 'Совет для твоего уровня', honestNote: 'TokenWise не видит твой аккаунт, не добавляет лимиты и не меняет настройки. Доступные функции зависят от тарифа.',
        readMore: 'Читать справочник ↓', examplesLink: 'Примеры заданий ↓',
        libraryKicker: '02 / СПРАВОЧНИК', libraryTitle: 'Мини-энциклопедия ChatGPT',
        libraryDesc: 'Разбираем распространённые вопросы на понятном языке. Все объяснения можно читать бесплатно.',
        searchLabel: 'Найти тему или термин', searchPlaceholder: 'Например: лимиты, модель, промпт...',
        topicsTitle: 'Вопросы и ответы', articleLabel: 'ОБЪЯСНЯЕМ ПО-ПРОСТОМУ',
        sourceText: 'Проверить в официальной справке ↗', articleMeta: 'Возможности и ограничения зависят от тарифа и могут меняться.',
        glossaryTitle: 'Словарь без сложных слов', glossaryDesc: 'Нажми на слово — увидишь простой пример.',
        empty: 'Ничего не найдено. Попробуй другое слово.',
        examplesKicker: '03 / ПРАКТИКА', examplesTitle: 'Готовые примеры заданий',
        examplesDesc: 'Для писем, документов, поиска и работы с кодом. Выбирай и редактируй текст под себя.',
        exampleEdit: 'Готовое задание — можно изменить', copyExample: 'Скопировать задание',
        copied: 'Скопировано ✓', copyFailed: 'Не удалось скопировать. Выдели текст и скопируй вручную.',
        advancedTitle: 'Для опытных: расширенный конфигуратор Work и Codex',
        advancedDesc: 'Пять профессиональных сценариев, ограничения агентам и готовые промпты. Нажми, чтобы открыть.'
      },
      roles: {
        beginner: ['Только начинаю', 'Пошагово, без терминов'],
        regular: ['Пользуюсь регулярно', 'Письма, работа, поиск, быт'],
        maker: ['Создаю проекты с ИИ', 'Сайты, боты и автоматизации'],
        developer: ['Пишу код', 'Тесты, контекст и точечные правки']
      },
      products: {
        unknown: ['Не знаю', 'Проверь, в каком разделе появилось сообщение: обычный чат, выполнение действий на сайтах или работа с кодом. Ограничения и способы их проверки могут отличаться.'],
        chat: ['Обычный чат', 'У обычного ChatGPT доступность моделей и сообщений зависит от плана и текущих ограничений. Не предполагай, что у тебя есть тот же счётчик Usage, что у Work или Codex.'],
        work: ['Work', 'Work выполняет многошаговые действия. Уточни, какой лимит показан в интерфейсе, и не запускай несколько длительных задач без необходимости.'],
        codex: ['Codex', 'В Codex размер контекста, повторные правки и запуски проверок могут влиять на потребление. Смотри доступную аналитику и дату сброса именно в своём аккаунте.']
      },
      issues: {
        limits: {
          title:'Лимит заканчивается слишком быстро', short:'Выяснить причину и сократить лишние действия',
          intro:'Сначала определим, что именно ограничено. Не всякий лимит ChatGPT измеряется в процентах или обновляется одновременно.',
          steps:['Посмотри точный текст сообщения об ограничении и где оно появилось.','Проверь показанную в аккаунте информацию о доступном использовании и сроках восстановления, если такая информация есть.','Раздели крупную задачу на один понятный результат. Сравни расход похожих задач до и после изменения подхода, если доступен счётчик.'],
          tip:{
            beginner:'Для короткого вопроса не нужно включать сложные инструменты. Сначала попробуй обычный чат и задай один вопрос.',
            regular:'Для письма, перевода или объяснения сначала используй простой доступный режим. Более глубокие рассуждения включай, если они действительно нужны.',
            maker:'Ограничивай агенту страницы, файлы, число повторов и критерий остановки. Сначала составь краткий план в чате.',
            developer:'Сужай контекст, запускай только относящиеся к задаче тесты и избегай полного аудита репозитория ради мелкой правки.'
          }, source:'limits'
        },
        models: {
          title:'Не понимаю, какую модель выбрать', short:'Разница между моделью, режимом и размышлением',
          intro:'Для большинства простых вопросов начни с доступного обычного режима. Сложные задачи могут требовать больше рассуждений, но это не означает экономию.',
          steps:['Скажи себе, нужен ли тебе просто ответ или выполнение действий в других приложениях.','Начни с доступного простого режима для повседневного запроса. Если качество недостаточно, усложни режим.','Проверь результат: скорость и количество повторных попыток тоже важны.'],
          tip:{
            beginner:'Не нужно выбирать «самую мощную» модель для каждого сообщения. По умолчанию можно оставить обычный режим.',
            regular:'Для текстов и объяснений чаще достаточно обычного чата; для сложного анализа может пригодиться более глубокое рассуждение.',
            maker:'Разделяй проектирование, поиск информации и выполнение действий — это разные этапы и разные требования.',
            developer:'Выбирай усилие рассуждений по сложности кода и неопределённости задачи, а не по размеру репозитория.'
          },source:'work'
        },
        prompts: {
          title:'Хочу лучше формулировать задания', short:'Понятный запрос вместо долгих уточнений',
          intro:'Хорошее задание объясняет цель, важные условия и желаемый результат. Программировать для этого не нужно.',
          steps:['Напиши, что ты хочешь получить: письмо, сравнение, план, перевод или исправление.','Добавь 2–3 важных условия: кому адресовано, длина, стиль или ограничения.','Укажи формат результата и попроси задать вопрос, только если действительно не хватает информации.'],
          tip:{
            beginner:'Пример: «Напиши вежливое письмо управляющей компании о перебоях с водой, до 120 слов».',
            regular:'Попроси два варианта текста — краткий и подробный — и уточни тон письма.',
            maker:'Назови файлы/страницы, точную цель и критерий завершения; запрети лишние изменения.',
            developer:'Фиксируй репродукцию ошибки, ожидаемое поведение, допустимый diff и конкретные тесты.'
          },source:'general'
        },
        usage: {
          title:'Хочу понять, на что ушёл лимит', short:'Как проверить остаток и сравнить задачи',
          intro:'Показания Usage, если они доступны на твоём тарифе и в твоём интерфейсе, показывают расход определённых лимитов. Это не обязательно стоимость в деньгах или токенах.',
          steps:['Найди раздел сведений об использовании и ограничениях в своём интерфейсе ChatGPT/Work/Codex, если он доступен.','Запиши остаток до задачи, выполни только одну задачу, затем запиши остаток после.','Не сравнивай показания после сброса или при одновременной работе других задач. Калькулятор ниже показывает разницу в процентных пунктах.'],
          tip:{
            beginner:'Если процентов нигде нет — это не ошибка. Не все планы и режимы отображают одинаковые счётчики.',
            regular:'Проверяй похожие действия: одно письмо с одним письмом, один поиск с одним поиском.',
            maker:'Сравнивай законченные агентные задачи одинакового масштаба, а не отдельные сообщения.',
            developer:'Не приравнивай подписочные проценты к API-токенам. Фиксируй модель, область задачи и количество повторов.'
          },source:'usage'
        },
        tools: {
          title:'Не понимаю, когда нужен Work или Codex', short:'Когда ИИ отвечает, а когда выполняет действия',
          intro:'Обычный чат даёт ответы и помогает создавать текст. Агентные инструменты могут выполнять действия в браузере или работать с кодом — их не нужно использовать для каждого вопроса.',
          steps:['Если нужен ответ, письмо или объяснение — начни с чата.','Если нужно выполнить действие на сайте или изменить код, проверь, доступен ли соответствующий инструмент.','Дай одно ограниченное поручение и проверь итог. Для публикации, платежей и удаления оставь подтверждение за собой.'],
          tip:{
            beginner:'Для перевода и письма не нужны Work и Codex.',
            regular:'Для сложных действий на сайте полезен Work, но простые вопросы быстрее решаются в чате.',
            maker:'Используй агента для конкретного результата, а план проекта подготовь отдельно.',
            developer:'Codex имеет смысл для изменений и проверки кода; не путай его с обычным разговором о коде.'
          },source:'work'
        },
        coding: {
          title:'Использую ИИ для создания проектов', short:'Меньше повторов при разработке и вайбкодинге',
          intro:'Большой проект можно сделать понятнее для агента, если разделить его на небольшие проверяемые этапы.',
          steps:['Сначала сформулируй один результат и перечисли файлы или разделы, к которым можно прикасаться.','Попроси минимальное изменение без переписывания всего проекта.','Определи проверку и момент остановки. Если возникло препятствие, сначала запроси краткий отчёт.'],
          tip:{
            beginner:'Начни с маленькой задачи: например, изменить один заголовок сайта, а не «сделай всё».',
            regular:'Если создаёшь сайт с ИИ, записывай каждую правку и проверяй её отдельно.',
            maker:'Разделяй архитектуру, реализацию, проверку и публикацию. Не запускай общий аудит на каждом шаге.',
            developer:'Ограничивай разрешённые файлы, размер diff, тестовый контур и воспроизводимость результата.'
          },source:'developer'
        }
      },
      articles:[
        {id:'a-limits',title:'Почему заканчиваются лимиты?',intro:'Лимиты зависят от продукта, подписки и способа работы. Один долгий агентный процесс может отличаться от короткого вопроса в чате.',points:['Сначала установи, какое конкретно ограничение сработало и где оно показано.','Сброс и доступность моделей зависят от текущих правил; смотри точный текст в аккаунте.','Деление крупной задачи на небольшие этапы помогает контролировать работу, но не гарантирует экономию.'],source:'limits'},
        {id:'a-models',title:'Модель, режим, рассуждение и скорость',intro:'Это разные настройки. Название модели не то же самое, что уровень рассуждений. Instant, Medium и Standard нельзя складывать в один список моделей.',points:['Модель — система, которая отвечает на запрос.','Режим или инструмент — обычный чат, выполнение действий на сайтах или работа с кодом.','Уровень рассуждений влияет на глубину обработки; скорость — отдельная настройка, если доступна.'],source:'work'},
        {id:'a-prompts',title:'Как задавать вопросы ChatGPT',intro:'Нужны цель, контекст, ограничения и формат результата. Хороший запрос может быть коротким.',points:['Напиши конкретный результат, а не «сделай красиво».','Добавь адресата, стиль или исходные данные.','Попроси уточнить один важный пробел, а не задавать десятки вопросов.'],source:'general'},
        {id:'a-agents',title:'Когда нужны Work и Codex',intro:'Агенты полезны для выполнения действий, но могут делать больше шагов, чем требуется.',points:['Обычный вопрос или текст — сначала обычный чат.','Действие на сайте — Work, если он доступен.','Изменение файлов кода — Codex или соответствующий инструмент, если он доступен.'],source:'work'},
        {id:'a-usage',title:'Где увидеть расход и сброс',intro:'Некоторые интерфейсы показывают показатели Usage и даты обновления, но они не одинаковы для всех тарифов.',points:['Ищи раздел использования или ограничений в своём продукте.','Вводи в калькулятор ниже только реальные проценты, если они отображаются.','Разница в процентах не означает количество токенов или сумму денег.'],source:'usage'},
        {id:'a-problems',title:'Частые проблемы и что проверять',intro:'«Лимит исчерпан», «нет нужной модели» и «режим недоступен» — разные ситуации.',points:['Прочитай конкретное уведомление вместо предположений.','Проверь план, выбранный режим и время обновления, если оно отображается.','Если функция недоступна, используй другой доступный способ выполнить задачу без обхода ограничений.'],source:'limits'},
        {id:'a-glossary',title:'Словарь основных терминов',intro:'Термины проще понимать на бытовых примерах.',points:['Промпт — обычная инструкция для ИИ.','Контекст — информация, которую ИИ учитывает при ответе.','Токены — части обрабатываемого текста и другого содержимого, не равные процентам подписки.'],source:'general'}
      ],
      glossary:[
        ['Промпт','Твоё задание для ИИ','Например: «Объясни, как оплатить коммунальные услуги, в трёх шагах».'],
        ['Токены','Единицы содержимого, которое модель обрабатывает или создаёт','Это не то же самое, что доступные проценты подписки.'],
        ['Модель','Система ИИ, которая отвечает на запрос','Разные модели могут отличаться возможностями и доступностью.'],
        ['Контекст','Информация, учитываемая при ответе','Длинная переписка и вложенные документы увеличивают объём контекста.'],
        ['Reasoning','Уровень глубины рассуждений, если есть такая настройка','Для простого письма обычно не нужны максимальные рассуждения.'],
        ['Агент','Инструмент, который может выполнять цепочку действий','Например, открыть сайт, найти раздел и заполнить форму.'],
        ['Сброс лимита','Восстановление части доступного использования по правилам продукта','Время обновления зависит от конкретного ограничения и интерфейса.']
      ],
      examples:[
        ['Письмо','Напиши вежливое письмо управляющей компании о перебоях с горячей водой. Опиши проблему без лишних эмоций, попроси сроки решения. Не придумывай даты и факты. До 130 слов.'],
        ['Документ','Я вставлю текст документа. Составь краткое содержание в пяти пунктах: главное, сроки, обязательства, риски и вопросы для уточнения. Не выдумывай информацию, которой нет в тексте.'],
        ['Поиск и сравнение','Помоги сравнить три доступных варианта решения моей задачи. Отделяй проверенные факты от предположений, укажи критерии и короткий вывод. Если нужны свежие данные, сначала проверь источники.'],
        ['Сайт с ИИ','В моём проекте нужно изменить только текст заголовка на главной странице. Найди соответствующий файл, измени только заголовок, проверь результат и перечисли изменённые файлы. Ничего больше не меняй.'],
        ['Исправить код','Воспроизведи конкретную ошибку: [ОПИШИ ОШИБКУ]. Изучи только относящиеся к ней файлы, предложи минимальное исправление, запусти необходимые тесты и сообщи, что проверено. Не выполняй массовый рефакторинг.']
      ]
    },
    en: {
      ui: {
        quickKicker:'01 / PERSONAL GUIDE', quickTitle:'What do you need help with?',
        quickIntro:'Choose your issue and experience level. Get practical steps, from a plain explanation to developer guidance.',
        issueQuestion:'What would you like to solve?',roleQuestion:'How do you use AI?',
        roleNote:'There is no right level. Pick whichever explanation feels comfortable.',
        answerLabel:'WHAT TO DO NEXT',productQuestion:'Where did the limit appear?',
        personalTip:'Advice for your experience level',honestNote:'TokenWise cannot view your account, add allowance, or change your settings. Features depend on your plan.',
        readMore:'Explore the guide ↓',examplesLink:'Sample prompts ↓',
        libraryKicker:'02 / KNOWLEDGE BASE',libraryTitle:'A small ChatGPT encyclopedia',
        libraryDesc:'Straightforward answers to common questions. Read the topics in any order.',
        searchLabel:'Search a topic or term',searchPlaceholder:'Try: limits, model, prompt...',
        topicsTitle:'Questions and answers',articleLabel:'THE SIMPLE EXPLANATION',
        sourceText:'Check the official documentation ↗',articleMeta:'Features and limits depend on your plan and may change.',
        glossaryTitle:'Plain-language glossary',glossaryDesc:'Select a term to see an everyday example.',
        empty:'Nothing found. Try another search.',
        examplesKicker:'03 / PRACTICE',examplesTitle:'Ready-to-use sample prompts',
        examplesDesc:'Emails, documents, research and code. Select a prompt, edit it and copy it.',
        exampleEdit:'Your prompt — you can edit it',copyExample:'Copy prompt',copied:'Copied ✓',
        copyFailed:'Copy failed. Select the text and copy it manually.',
        advancedTitle:'Advanced: Work and Codex task configurator',
        advancedDesc:'Five technical presets, agent boundaries, and focused prompts. Open when needed.'
      },
      roles:{
        beginner:['Just starting','Simple steps, no jargon'],
        regular:['I use it regularly','Writing, work, search, life'],
        maker:['I build with AI','Websites, bots and workflows'],
        developer:['I write code','Tests, context, focused fixes']
      },
      products:{
        unknown:['Not sure','Check whether the message appeared in a normal chat, a website-action tool, or a coding tool. These may have different limits and usage indicators.'],
        chat:['ChatGPT chat','Model and message availability depend on your plan and current restrictions. Do not assume normal Chat shows the same Usage percentage as Work or Codex.'],
        work:['Work','Work performs multi-step actions. Identify the specific limit shown in your UI, and avoid unnecessary concurrent long tasks.'],
        codex:['Codex','In Codex, context size, retries and repeated tests can affect consumption. Check the available usage metrics and reset date for your account.']
      },
      issues:{
        limits:{
          title:'My limit runs out too fast',short:'Understand what happened and avoid wasted steps',
          intro:'First identify what was restricted. Not every ChatGPT limit is percentage-based or resets at the same time.',
          steps:['Read the exact limit message and note where it appeared.','Check the available usage and reset information in your account, if your interface offers it.','Break a large task into one clear deliverable. Compare similar completed tasks before and after, if usage metrics are available.'],
          tip:{
            beginner:'For a short question, you do not need advanced tools. Start with a normal chat and one request.',
            regular:'For emails, translations or explanations, try a simpler available mode first. Use deeper reasoning only when it helps.',
            maker:'Limit the agent to relevant pages and files, cap unnecessary retries and define when it must stop. Plan in Chat first.',
            developer:'Narrow the context, run only relevant tests and avoid full-repository audits for tiny changes.'
          },source:'limits'
        },
        models:{
          title:'Which model should I choose?',short:'Models, modes and thinking depth made clear',
          intro:'For simple tasks, begin with a standard available option. Complex tasks may benefit from deeper reasoning, but that does not guarantee lower usage.',
          steps:['Decide whether you want an answer or an action in another app.','Try an ordinary available mode first for an everyday request. Upgrade if quality is insufficient.','Check the result: speed and number of retries matter too.'],
          tip:{
            beginner:'You do not need the most capable model for every question. The default option is a reasonable starting point.',
            regular:'Normal chat may be enough for text and explanations; more complex analysis can need deeper reasoning.',
            maker:'Separate architecture, information gathering and execution into distinct steps.',
            developer:'Choose thinking depth by uncertainty and coding complexity, not merely repository size.'
          },source:'work'
        },
        prompts:{
          title:'How do I ask AI better questions?',short:'Clear instructions without a long back-and-forth',
          intro:'A helpful prompt explains your goal, relevant conditions and desired output. You do not need coding knowledge.',
          steps:['Describe the result: letter, summary, plan, translation or fix.','Add two or three important conditions: audience, length, tone or constraints.','Specify the output format. Ask for a follow-up question only if essential information is missing.'],
          tip:{
            beginner:'Example: “Write a polite 120-word email to my building manager about interrupted water supply.”',
            regular:'Ask for two versions — brief and detailed — and specify the tone.',
            maker:'Name the target files/pages, exact goal and stop condition; prohibit unrelated changes.',
            developer:'State reproduction steps, expected behavior, acceptable diff and targeted tests.'
          },source:'general'
        },
        usage:{
          title:'Where did my allowance go?',short:'Check available usage and compare tasks',
          intro:'If available in your plan and interface, Usage shows consumption of certain allowances. It is not necessarily a dollar price or token count.',
          steps:['Locate usage or limit details in the ChatGPT/Work/Codex interface you actually use, if available.','Record the amount remaining before one task, run it, and record the amount remaining afterwards.','Avoid comparisons across resets or concurrent tasks. The calculator below reports percentage-point differences.'],
          tip:{
            beginner:'If you cannot see percentages, that is not necessarily a problem. Different plans and tools show different metrics.',
            regular:'Compare similar requests: one email with another email, one research task with another.',
            maker:'Compare completed agent tasks of similar scope, rather than individual messages.',
            developer:'Do not convert subscription percentages to API tokens. Record model, scope and retries.'
          },source:'usage'
        },
        tools:{
          title:'When should I use Work or Codex?',short:'Answers versus taking actions',
          intro:'A normal chat answers questions and drafts text. Agent tools can act on websites or code; they are not needed for every request.',
          steps:['For an answer, explanation or email, start in chat.','For acting on a website or editing code, check whether the relevant tool is available.','Give one bounded task and verify the result. Keep confirmation for publishing, payment and deletion.'],
          tip:{
            beginner:'You do not need Work or Codex to translate or write a letter.',
            regular:'Work can help with website actions, but chat is enough for many simple questions.',
            maker:'Use an agent for one concrete output, but plan the project separately.',
            developer:'Codex can help change and test code; do not confuse it with a conversation about code.'
          },source:'work'
        },
        coding:{
          title:'I use AI to build projects',short:'Reduce repeated work in coding and vibe coding',
          intro:'Large projects become easier to manage when you split them into small, verifiable steps.',
          steps:['Set one deliverable and list the files or areas the agent may touch.','Ask for a minimal change instead of rewriting the project.','Define a check and stop condition. If blocked, request a short report first.'],
          tip:{
            beginner:'Start with a small task like changing one heading, not “build everything”.',
            regular:'If you are making a website with AI, record and check each change separately.',
            maker:'Separate architecture, implementation, testing and release. Avoid a full audit at every step.',
            developer:'Bound files, diff size, tests and reproducibility.'
          },source:'developer'
        }
      },
      articles:[
        {id:'a-limits',title:'Why do limits run out?',intro:'Limits depend on the product, subscription and task. A long-running agent may consume allowance differently from a short chat question.',points:['Identify the exact restriction and where it appeared.','Reset times and model availability vary; trust the details shown in your account.','Breaking up large tasks can help manage work, but savings are not guaranteed.'],source:'limits'},
        {id:'a-models',title:'Models, modes, thinking and speed',intro:'These are different settings. A model name is not a reasoning level. Instant, Medium and Standard should not be presented as one list of models.',points:['Model: the AI system responding to you.','Mode or tool: normal chat, website actions, or code editing.','Reasoning effort controls deliberation depth; speed is a separate option if available.'],source:'work'},
        {id:'a-prompts',title:'How to ask ChatGPT a clear question',intro:'State the goal, context, constraints and desired format. A good request can be short.',points:['Ask for a concrete outcome, not just “make it better”.','Include the audience, tone or background information.','Ask one follow-up question only when a critical detail is missing.'],source:'general'},
        {id:'a-agents',title:'When Work and Codex help',intro:'Agents can act on your behalf, but may take more steps than needed.',points:['Just a question or writing task? Start with chat.','Website actions? Consider Work if available.','Code edits? Consider Codex or another supported coding tool if available.'],source:'work'},
        {id:'a-usage',title:'How to find usage and reset details',intro:'Some plans and interfaces show Usage metrics and reset times, but these differ between products.',points:['Look for usage or restrictions in your own product.','Enter percentages in the calculator below only if those metrics appear.','A percentage difference is not a token total or dollar value.'],source:'usage'},
        {id:'a-problems',title:'Common limit and availability problems',intro:'“Usage limit reached”, “model not available” and “mode missing” are different situations.',points:['Read the exact notice rather than guessing.','Check your plan, active mode and shown reset time, if any.','If a feature is unavailable, use another permitted option rather than trying to bypass limits.'],source:'limits'},
        {id:'a-glossary',title:'Essential terms explained',intro:'Everyday examples make AI vocabulary easier.',points:['Prompt: your instruction to the AI.','Context: information considered in the response.','Tokens: portions of processed content, not the percentage of your subscription allowance.'],source:'general'}
      ],
      glossary:[
        ['Prompt','Your instruction to the AI','Example: “Explain how to pay a utility bill in three steps.”'],
        ['Tokens','Units of content processed or generated by a model','They are not the same as subscription allowance percentages.'],
        ['Model','The AI system that answers a request','Models can have different capabilities and availability.'],
        ['Context','Information that the model considers','A long chat or attached documents can add more context.'],
        ['Reasoning','How much deliberation the model applies, if configurable','A short email usually does not require maximum reasoning effort.'],
        ['Agent','A tool that can perform a sequence of actions','For example, opening a website, navigating and filling a form.'],
        ['Reset','Restoration of available usage under the product rules','The timing depends on the specific restriction and interface.']
      ],
      examples:[
        ['Email','Write a polite email to my building manager about interruptions to hot water. Describe the issue calmly and request an estimated resolution date. Do not invent dates or facts. Keep it under 130 words.'],
        ['Document','I will paste a document. Summarize it in five points: key message, deadlines, obligations, risks and questions to clarify. Do not invent details not present in the text.'],
        ['Research and comparison','Help me compare three available options for my goal. Separate verified facts from assumptions, list criteria and provide a concise conclusion. Check sources first if up-to-date facts are required.'],
        ['AI-built website','In my project, change only the homepage heading text. Find the relevant file, edit just the heading, check the result and list changed files. Do not modify anything else.'],
        ['Code fix','Reproduce this exact problem: [DESCRIBE BUG]. Inspect only relevant files, make a minimal fix, run necessary tests and report what was verified. Do not refactor unrelated code.']
      ]
    }
  };
  const state={issue:'limits',role:'regular',product:'unknown',article:'a-limits',example:0,edited:false};
  const getLang=()=>document.documentElement.lang==='en'?'en':'ru';
  const el=id=>document.getElementById(id);
  const node=(name,klass,text)=>{const x=document.createElement(name);if(klass)x.className=klass;if(text!==undefined)x.textContent=text;return x};
  const keys=['beginner','regular','maker','developer'];
  const issues=['limits','models','prompts','usage','tools','coding'];
  const products=['unknown','chat','work','codex'];
  function toggleButton(label,detail,selected,id){
    const b=node('button','guide-choice'+(selected?' is-selected':''));b.type='button';b.dataset.id=id;
    b.setAttribute('aria-pressed',String(selected));
    b.append(node('strong','',label));if(detail)b.append(node('small','',detail));
    return b;
  }
  function drawChoices(){
    const d=catalog[getLang()];
    el('guideIssueList').replaceChildren(...issues.map(id=>toggleButton(d.issues[id].title,d.issues[id].short,state.issue===id,id)));
    el('guideRoles').replaceChildren(...keys.map(id=>toggleButton(d.roles[id][0],d.roles[id][1],state.role===id,id)));
    el('guideProducts').replaceChildren(...products.map(id=>toggleButton(d.products[id][0],'',state.product===id,id)));
  }
  function drawAnswer(){
    const d=catalog[getLang()],x=d.issues[state.issue];
    el('guideAnswerTitle').textContent=x.title;el('guideAnswerIntro').textContent=x.intro;
    el('guideProductWrap').hidden=state.issue!=='limits';
    const steps=[...x.steps];if(state.issue==='limits')steps.push(d.products[state.product][1]);
    el('guideAnswerSteps').replaceChildren(...steps.map(s=>node('li','',s)));
    el('guideAnswerTip').textContent=x.tip[state.role];
    const a=el('guideArticleSource');
    a.href=refs[x.source]||refs.general;
  }
  function searchableText(obj){
    return [obj.title,obj.intro,...obj.points].join(' ').toLocaleLowerCase(getLang());
  }
  function drawArticles(){
    const d=catalog[getLang()],query=el('guideSearch').value.trim().toLocaleLowerCase(getLang());
    const visible=d.articles.filter(x=>!query||searchableText(x).includes(query));
    el('guideArticles').replaceChildren(...visible.map(x=>toggleButton(x.title,'',state.article===x.id,x.id)));
    el('guideNoResults').hidden=visible.length>0;
    el('guideNoResults').textContent=d.ui.empty;
    const selected=d.articles.find(x=>x.id===state.article);
    el('guideArticleTitle').textContent=selected.title;el('guideArticleIntro').textContent=selected.intro;
    el('guideArticlePoints').replaceChildren(...selected.points.map(p=>node('li','',p)));
    el('guideArticleMeta').textContent=d.ui.articleMeta;
    el('guideArticleSource').href=refs[selected.source]||refs.general;
    el('guideArticleSource').textContent=d.ui.sourceText;
    const terms=d.glossary.filter(row=>!query||row.join(' ').toLocaleLowerCase(getLang()).includes(query));
    el('guideGlossary').replaceChildren(...terms.map(row=>{
      const details=node('details','guide-term');details.append(node('summary','',row[0]));
      details.append(node('p','',row[1]));details.append(node('p','guide-term-example',row[2]));return details;
    }));
  }
  function drawExamples(resetText=false){
    const d=catalog[getLang()];
    el('guideExampleList').replaceChildren(...d.examples.map((x,i)=>toggleButton(x[0],'',state.example===i,String(i))));
    if(resetText||!state.edited)el('guideExampleText').value=d.examples[state.example][1];
    el('guideCopyStatus').textContent='';
  }
  function drawAll(){
    const d=catalog[getLang()];
    document.querySelectorAll('[data-guide-key]').forEach(x=>{const val=d.ui[x.dataset.guideKey];if(val!==undefined)x.textContent=val});
    el('guideSearch').placeholder=d.ui.searchPlaceholder;
    drawChoices();drawAnswer();drawArticles();drawExamples();
  }
  el('guideIssueList').addEventListener('click',e=>{
    const b=e.target.closest('button[data-id]');if(!b)return;
    state.issue=b.dataset.id;
    const map={limits:'a-limits',models:'a-models',prompts:'a-prompts',usage:'a-usage',tools:'a-agents',coding:'a-agents'};
    state.article=map[state.issue];drawChoices();drawAnswer();drawArticles();
  });
  el('guideRoles').addEventListener('click',e=>{
    const b=e.target.closest('button[data-id]');if(!b)return;
    state.role=b.dataset.id;drawChoices();drawAnswer();
  });
  el('guideProducts').addEventListener('click',e=>{
    const b=e.target.closest('button[data-id]');if(!b)return;
    state.product=b.dataset.id;drawChoices();drawAnswer();
  });
  el('guideArticles').addEventListener('click',e=>{
    const b=e.target.closest('button[data-id]');if(!b)return;
    state.article=b.dataset.id;drawArticles();el('guideArticleView').focus({preventScroll:true});
  });
  el('guideSearch').addEventListener('input',drawArticles);
  el('guideExampleList').addEventListener('click',e=>{
    const b=e.target.closest('button[data-id]');if(!b)return;
    state.example=Number(b.dataset.id);state.edited=false;drawExamples(true);
  });
  el('guideExampleText').addEventListener('input',()=>{state.edited=true});
  el('guideCopy').addEventListener('click',async()=>{
    const value=el('guideExampleText').value, d=catalog[getLang()];
    let ok=false;
    try{
      if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);ok=true}
      else{
        const tmp=node('textarea');tmp.value=value;tmp.style.position='fixed';tmp.style.left='-9999px';
        document.body.append(tmp);tmp.select();ok=document.execCommand('copy');tmp.remove();
      }
    }catch(_err){ok=false}
    el('guideCopyStatus').textContent=ok?d.ui.copied:d.ui.copyFailed;
    if(!ok){el('guideExampleText').focus();el('guideExampleText').select()}
  });
  // The existing language handler runs first, then the guide re-renders.
  el('ru').addEventListener('click',drawAll);
  el('en').addEventListener('click',drawAll);
  document.querySelectorAll('a[href="#config"]').forEach(a=>a.addEventListener('click',()=>{el('config').open=true}));
  // Re-open advanced content when visiting an explicit #config URL.
  if(window.location.hash==='#config')el('config').open=true;
  el('guideArticleView').setAttribute('tabindex','-1');
  drawAll();
  // Read-only test hooks for repeatable UI checks; no state is exported.
  window.TokenWiseGuideTest={issues:[...issues],roles:[...keys],articles:catalog.ru.articles.map(x=>x.id),examples:catalog.ru.examples.length};
})();