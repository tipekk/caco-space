const siteUrl = 'https://caco.space';

export const pages = [
  {
    id: 'home',
    paths: { sk: '/sk/', en: '/en/' },
    anchors: ['o-mne', 'prax', 'projekty', 'solvio', 'objektiv'],
    content: {
      sk: {
        title: 'Tomáš Čačo — IT infraštruktúra a vlastná tvorba',
        description: 'Osobný priestor Tomáša Čača: IT prevádzka, vlastná tvorba, Solvio a obraz mimo obrazovky.',
        socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'],
        heroKicker: 'TOMÁŠ ČAČO / OSOBNÝ PRIESTOR',
        heroIntro: 'IT prevádzka, vlastná tvorba a svet cez objektív. Rôzne smery. Jeden osobný priestor.',
        aboutKicker: '01 / O MNE', aboutTitle: 'IT v každodennej praxi.',
        aboutLead: 'V IT sa zameriavam na každodennú prevádzku služieb, zálohovanie, siete, identity a technickú dokumentáciu.',
        aboutText: 'Pri práci prepájam správu systémov s praktickým overovaním a podkladmi, ktoré pomáhajú udržať služby zrozumiteľné a použiteľné.',
        practiceKicker: '02 / PRAX', practiceTitle: 'Vybrané realizácie.',
        practiceLead: 'Anonymizovaný príbeh práce v citlivom prevádzkovom prostredí: čo bolo potrebné urobiť, čo som overil a kde sú hranice tvrdení.',
        practiceText: 'Detailná stránka ukazuje spôsob práce od orientácie v službách cez prístupy a obnovu až po riadenú zmenu a dokumentáciu.',
        practiceAction: 'Pozrieť moju prax',
        projectKicker: '03 / VLASTNÁ TVORBA', projectTitle: 'Vlastné projekty.', projectAside: 'Miesto pre malé experimenty aj väčšie nápady.',
        games: {
          category: 'HRA / VLASTNÝ PROJEKT',
          orbit: { title: 'Orbit Shifter', text: 'Meníš orbitu. Držíš smer.', action: 'Otvoriť hru' },
          tower: { title: 'Bastion Grid', text: 'Stavaj vyššie. Nestrácaj rovnováhu.', action: 'Otvoriť hru' }
        },
        homeLabTag: 'HOMELAB / DOMÁCA AUTOMATIZÁCIA', homeLabAction: 'Pozrieť HomeLab', homeLabImageAlt: 'Domáci rack s prepojenými zariadeniami.', labTitle: 'HomeLab', labText: 'Home Assistant, približne 60 Zigbee zariadení a prepojenie s Apple HomeKit aj Google Home. Osobný projekt, v ktorom prepájam automatizáciu, integrácie a správu domácej infraštruktúry.',
        preparing: 'Pripravujem',
        solvioKicker: '04 / FIRMA', solvioTitle: 'Solvio.', solvioLead: 'Firemné IT riešenia majú vlastný priestor. Volá sa Solvio.', solvioText: 'Viac o službách a možnostiach spolupráce nájdete na firemnom webe.', solvioAction: 'Spoznať Solvio',
        lensKicker: '05 / MIMO OBRAZOVKY', lensTitle: 'Foto a dron.', lensText: 'Osobné fotografie a zábery z dronu dostávajú vlastný priestor — zatiaľ pripravený na prvú sériu.', lensAction: 'Otvoriť obrazový priestor',
        cvAction: 'Otvoriť celé CV', cvHint: 'Kariérna chronológia, vzdelanie a oblasti znalostí.',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Tomáš Čačo — IT infrastructure and personal projects',
        description: 'Tomáš Čačo’s personal space for IT operations, personal projects, Solvio and visual work.',
        socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'],
        heroKicker: 'TOMÁŠ ČAČO / PERSONAL SPACE',
        heroIntro: 'IT operations, personal projects and a view through the lens. Different directions. One personal space.',
        aboutKicker: '01 / ABOUT', aboutTitle: 'IT in everyday practice.',
        aboutLead: 'My IT focus is the day-to-day operation of services, backups, networks, identities and technical documentation.',
        aboutText: 'I connect systems administration with practical verification and working notes that keep services understandable and usable.',
        practiceKicker: '02 / PRACTICE', practiceTitle: 'Selected work.',
        practiceLead: 'An anonymised account of work in a sensitive operational setting: what needed doing, what I verified and the boundaries of each claim.',
        practiceText: 'The detailed page follows the work from understanding services through access and recovery to controlled change and documentation.',
        practiceAction: 'See my practice',
        projectKicker: '03 / PERSONAL WORK', projectTitle: 'Personal projects.', projectAside: 'A space for small experiments and larger ideas.',
        games: {
          category: 'GAME / PERSONAL PROJECT',
          orbit: { title: 'Orbit Shifter', text: 'Shift your orbit. Hold your course.', action: 'Open game' },
          tower: { title: 'Bastion Grid', text: 'Build higher. Keep your balance.', action: 'Open game' }
        },
        homeLabTag: 'HOMELAB / HOME AUTOMATION', homeLabAction: 'View HomeLab', homeLabImageAlt: 'A home rack with connected devices.', labTitle: 'HomeLab', labText: 'Home Assistant, around 60 Zigbee devices and connections to Apple HomeKit and Google Home. A personal project combining automation, integrations and home infrastructure administration.',
        preparing: 'In progress',
        solvioKicker: '04 / COMPANY', solvioTitle: 'Solvio.', solvioLead: 'Business IT solutions have their own space. It is called Solvio.', solvioText: 'Find services and collaboration options on the company website.', solvioAction: 'Meet Solvio',
        lensKicker: '05 / BEYOND THE SCREEN', lensTitle: 'Photo and drone.', lensText: 'Personal photographs and drone footage now have their own space — ready for its first series.', lensAction: 'Open the image space',
        cvAction: 'View full CV', cvHint: 'Career timeline, education and areas of expertise.',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'practice',
    paths: { sk: '/sk/prax/', en: '/en/practice/' },
    anchors: ['prax', 'prax-01', 'prax-02', 'prax-03', 'prax-04', 'prax-05', 'story-end'],
    content: {
      sk: {
        title: 'Prax — Tomáš Čačo', description: 'Anonymizovaná prípadová štúdia práce Tomáša Čača v IT prevádzke.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'PRAX / PRÍPADOVÁ ŠTÚDIA', headline: 'Výsledky namiesto fráz.',
        intro: 'Anonymizovaný príbeh práce v IT prevádzke: čo som robil, čo bolo prakticky overené a kde sú hranice tvrdení.',
        backHome: 'Späť na úvod', way: 'Spôsob práce', skipStory: 'Preskočiť príbeh', result: 'Výsledok', scope: 'Rozsah', note: 'Táto prípadová štúdia používa len zovšeobecnený verejný rozsah. Neuvádza názov organizácie, topológiu, presné metriky, konfigurácie ani citlivé prevádzkové údaje. Jednotlivé overenia nevydávam za garanciu celého prostredia.', next: 'Pozrieť ďalšie projekty', footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá',
        chapters: [
          ['01 / PREVÁDZKA', 'Zorientovať sa v službách.', 'Spravoval som virtualizované služby a zhromažďoval podklady o ich konfigurácii a závislostiach.', 'Prevádzkové prostredie s dohľadateľnými väzbami v technických podkladoch.', 'Správa a dokumentácia; nie tvrdenie o výlučnom pôvodnom návrhu celej platformy.'],
          ['02 / PRÍSTUPY', 'Oddeliť prístupy a komunikáciu.', 'Pracoval som s vybranými sieťovými pravidlami, zónami a oprávneniami k dátovým službám. Kontrolované cesty som zapisoval do prevádzkových podkladov.', 'Oddelenie vybraných typov prevádzky a dokumentované pravidlá.', 'Ide o vybrané kontroly, nie test každej možnej komunikačnej cesty.'],
          ['03 / OBNOVA', 'Overiť, že záloha sa dá použiť.', 'Podieľal som sa na testoch obnovy vybraných služieb z lokálnych aj externých záloh a odlišoval štart systému od kontroly jeho funkcií.', 'Zaznamenaný test obnovy vybranej služby vrátane následnej kontroly.', 'Konkrétny test; nie garancia obnovy celého prostredia.'],
          ['04 / ZMENA', 'Pripraviť zásah a skontrolovať výsledok.', 'Pripravil som kontrolovaný aktualizačný postup: kontrolu balíka, zálohu pred zásahom a následné overenie spustenia. AI pri príprave slúžila iba ako asistencia.', 'Zdokumentovaný postup zmeny s následnou kontrolou aplikácie.', 'Jedna dodávateľská aplikácia a doložený postup; nie autorstvo aplikácie ani automatický rollback.'],
          ['05 / DOKUMENTÁCIA', 'Udržať prevádzkové znalosti použiteľné.', 'Konfiguroval som dokumentačnú platformu a pripravoval štruktúru stránok aj riadený prístup k technickým podkladom.', 'Interná znalostná báza s oddelenými oprávneniami a dohľadateľnými podkladmi.', 'Prevádzkovaná platforma; verejne neuvádzam jej interný obsah ani schvaľovacie procesy.']
        ]
      },
      en: {
        title: 'Practice — Tomáš Čačo', description: 'An anonymised case study of Tomáš Čačo’s work in IT operations.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'PRACTICE / CASE STUDY', headline: 'Evidence instead of slogans.',
        intro: 'An anonymised account of IT operations: what I did, what was practically verified, and the limits of each claim.',
        backHome: 'Back to home', way: 'How I work', skipStory: 'Skip the story', result: 'Outcome', scope: 'Scope', note: 'This case study uses only a generalised public scope. It does not name the organisation or expose topology, exact metrics, configurations or sensitive operational data. Individual checks are not presented as a guarantee for an entire environment.', next: 'View other projects', footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark',
        chapters: [
          ['01 / OPERATIONS', 'Understand the services.', 'I administered virtualised services and assembled working notes about their configuration and dependencies.', 'An operational picture with traceable links in technical notes.', 'Administration and documentation; not a claim of sole original design of the entire platform.'],
          ['02 / ACCESS', 'Separate access and communication.', 'I worked with selected network rules, zones and permissions for data services. The checked paths were recorded in operational notes.', 'Separation of selected types of traffic and documented rules.', 'Selected checks, not a test of every possible communication path.'],
          ['03 / RECOVERY', 'Verify that a backup can be used.', 'I participated in recovery tests for selected services from local and external backups, distinguishing a system start from a functional check.', 'A recorded recovery test of a selected service, including a follow-up check.', 'A specific test; not a guarantee of recovery for the entire environment.'],
          ['04 / CHANGE', 'Prepare an intervention and check the result.', 'I prepared a controlled update procedure: package checking, a pre-change backup and a follow-up startup check. AI was assistance only during preparation.', 'A documented change procedure with a follow-up application check.', 'One vendor application and a documented procedure; not authorship of the application or an automatic rollback.'],
          ['05 / DOCUMENTATION', 'Keep operational knowledge usable.', 'I configured a documentation platform and prepared a page structure with controlled access to technical notes.', 'An internal knowledge base with separated permissions and traceable materials.', 'An operated platform; its internal content and approval flows are not made public.']
        ]
      }
    }
  }
  ,
  {
    id: 'cv',
    paths: { sk: '/sk/cv/', en: '/en/cv/' },
    anchors: ['profil', 'cesta', 'vzdelanie', 'znalosti', 'experimenty', 'rozsah'],
    content: {
      sk: {
        title: 'Tomáš Čačo — CV | IT infraštruktúra a prevádzka',
        description: 'Kariérny prehľad Tomáša Čača: IT infraštruktúra, systémová správa, siete, zálohovanie a technická dokumentácia.',
        socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'],
        kicker: 'TOMÁŠ ČAČO / CV', headline: 'IT infraštruktúra a prevádzka.',
        intro: 'IT špecialista so zameraním na prevádzku infraštruktúry, systémovú správu, siete, zálohovanie, identity a technickú dokumentáciu. Praktickú správu služieb prepájam s overovaním a zrozumiteľnými prevádzkovými podkladmi.',
        micro: 'SYSTÉMY / SIETE / DOKUMENTÁCIA', explore: 'Prejsť kariérnou cestou', practiceAction: 'Pozrieť prax',
        journeyKicker: '01 / KARIÉRNA CESTA', journeyTitle: 'Profesijná prax', present: 'súčasnosť',
        career: [
          ['04 / 2023 — súčasnosť', 'solvio s.r.o. — Konateľ', 'Vedenie spoločnosti, rozhodovanie o technologickom smerovaní a dohľad nad realizáciou IT riešení a prevádzkových aktivít.', true],
          ['2020 — súčasnosť', 'VŠOUG v Košiciach — Informatik', 'Komplexná IT podpora, systémová správa a rozvoj infraštruktúry v odbornom pracovnom prostredí.', true],
          ['2017 — 2020', 'Záchranná služba Košice — Informatik', 'Správa informačných technológií v prostredí, kde je dôležitá spoľahlivosť, dostupnosť a rýchla reakcia.', false],
          ['2013 — 2017', 'Cona s.r.o. — Manažér IT', 'Zodpovednosť za IT agendu, prevádzku a koordináciu technických riešení.', false]
        ],
        educationKicker: '02 / VZDELANIE', educationTitle: 'Vzdelanie', educationRange: '2003 — 2013',
        education: [
          ['2008 — 2013', 'TUKE / FBERG', 'Inžinierske vzdelanie, ktoré pomohlo rozvíjať analytický prístup, disciplínu a technické uvažovanie.'],
          ['2003 — 2007', 'SOŠ Poprad', 'Stredoškolský základ, na ktorom vznikol dlhodobý záujem o technológie a systémové myslenie.']
        ],
        expertiseKicker: '03 / OBLASTI ZNALOSTÍ', expertiseTitle: 'Odborné zameranie',
        expertise: [
          ['Virtualizácia a servery', 'Prevádzka virtualizovaných Windows a Linux služieb.', 'Proxmox VE/PBS · Windows Server · Linux/Debian · Active Directory · Group Policy'],
          ['Siete a prístupy', 'Správa sietí UniFi, segmentácie, vybraných pravidiel prístupu a vzdialeného prístupu.', 'UniFi · segmentácia sietí · vybrané prístupové pravidlá · vzdialený prístup'],
          ['Zálohovanie a úložiská', 'Viacvrstvové zálohovanie a praktické overovanie obnovy vybraných služieb.', 'Proxmox Backup Server · Synology · zálohovanie · obnova vybraných služieb'],
          ['Cloud a ochrana endpointov', 'Identity, cloudové služby a vybrané endpointové politiky v doloženom rozsahu.', 'Microsoft 365 · Entra ID · MFA v doloženom rozsahu · ESET PROTECT'],
          ['Prevádzka a dokumentácia', 'Podklady, ktoré zmenu a každodennú správu robia dohľadateľnou.', 'monitoring · diagnostika · evidencia aktív · technická dokumentácia · koordinácia s dodávateľmi']
        ],
        experimentsKicker: '04 / OSOBNÉ TECHNICKÉ EXPERIMENTY', experimentsTitle: 'Skúšať mimo pracovnej praxe.',
        experiments: 'Home Assistant, Zigbee2mqtt, Matter, Thread a praktické používanie GenAI/LLM. Osobná tvorba, nie pracovná prax ani profesionálna certifikácia.',
        scope: 'Profil uvádza iba verejne zdieľateľný rozsah. Neuvádza interné architektúry, konfigurácie, metriky ani detaily organizácií.', scopePractice: 'Pozrieť prax', scopeHome: 'Späť na úvod',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Tomáš Čačo — CV | IT infrastructure and operations',
        description: 'Tomáš Čačo’s career overview: IT infrastructure, systems administration, networks, backups and technical documentation.',
        socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'],
        kicker: 'TOMÁŠ ČAČO / CV', headline: 'IT infrastructure and operations.',
        intro: 'IT specialist focused on infrastructure operations, systems administration, networks, backups, identities and technical documentation. I combine hands-on service administration with verification and clear operational documentation.',
        micro: 'SYSTEMS / NETWORKS / DOCUMENTATION', explore: 'Explore career path', practiceAction: 'View practice',
        journeyKicker: '01 / CAREER PATH', journeyTitle: 'Professional experience', present: 'present',
        career: [
          ['04 / 2023 — present', 'solvio s.r.o. — Managing Director', 'Leading the company, setting its technology direction and overseeing the delivery of IT solutions and operational activities.', true],
          ['2020 — present', 'VŠOUG v Košiciach — IT Specialist', 'Comprehensive IT support, systems administration and infrastructure development in a specialist working environment.', true],
          ['2017 — 2020', 'Záchranná služba Košice — IT Specialist', 'Administration of information technology in an environment where reliability, availability and rapid response matter.', false],
          ['2013 — 2017', 'Cona s.r.o. — IT Manager', 'Responsibility for the IT agenda, operations and coordination of technical solutions.', false]
        ],
        educationKicker: '02 / EDUCATION', educationTitle: 'Education', educationRange: '2003 — 2013',
        education: [
          ['2008 — 2013', 'TUKE / FBERG', 'Engineering education that developed analytical thinking, discipline and technical reasoning.'],
          ['2003 — 2007', 'SOŠ Poprad', 'Secondary-school foundation for a long-term interest in technology and systems thinking.']
        ],
        expertiseKicker: '03 / AREAS OF EXPERTISE', expertiseTitle: 'Areas of expertise',
        expertise: [
          ['Virtualisation and servers', 'Operation of virtualised Windows and Linux services.', 'Proxmox VE/PBS · Windows Server · Linux/Debian · Active Directory · Group Policy'],
          ['Networks and access', 'Administration of UniFi networks, segmentation, selected access rules and remote access.', 'UniFi · network segmentation · selected access rules · remote access'],
          ['Backups and storage', 'Multi-layer backups and practical recovery checks for selected services.', 'Proxmox Backup Server · Synology · backups · recovery checks for selected services'],
          ['Cloud and endpoint protection', 'Identities, cloud services and selected endpoint policies within the documented scope.', 'Microsoft 365 · Entra ID · MFA within the documented scope · ESET PROTECT'],
          ['Operations and documentation', 'Working notes that make change and day-to-day operations traceable.', 'monitoring · troubleshooting · asset records · technical documentation · supplier coordination']
        ],
        experimentsKicker: '04 / PERSONAL TECHNOLOGY EXPERIMENTS', experimentsTitle: 'Exploring outside employment.',
        experiments: 'Home Assistant, Zigbee2mqtt, Matter, Thread and practical use of GenAI/LLMs. Personal work, not employment experience or professional certification.',
        scope: 'This profile uses only a publicly shareable scope. It does not disclose internal architectures, configurations, metrics or organisation-specific details.', scopePractice: 'View practice', scopeHome: 'Back to home',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'homelab',
    paths: { sk: '/sk/homelab/', en: '/en/homelab/' },
    anchors: ['homelab', 'pristup', 'principy', 'hranice'],
    content: {
      sk: {
        title: 'HomeLab — Tomáš Čačo', description: 'Osobný HomeLab Tomáša Čača: domáca automatizácia, prepojené zariadenia a postupné praktické overovanie.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'HOMELAB / OSOBNÝ SYSTÉM', headline: 'Domov, ktorý reaguje s rozvahou.',
        intro: 'Osobný priestor pre automatizáciu, prepojené zariadenia a malé zlepšenia každodenných návykov. Home Assistant tu funguje ako riadiaca vrstva, nie ako výkladná skriňa.',
        backHome: 'Späť na úvod', explore: 'Pozrieť princípy', micro: 'SIGNÁL / SÚVISLOSŤ / RYTMUS',
        approachKicker: '01 / PRÍSTUP', approachTitle: 'Najprv signál. Potom rozhodnutie.', approachLead: 'Zaujíma ma automatizácia, ktorá doplní rutinu bez toho, aby si pýtala pozornosť.', approachText: 'Každý nápad začína pozorovaním situácie a končí až vtedy, keď je jeho správanie zrozumiteľné aj bez technického kontextu.',
        principlesKicker: '02 / PRINCÍPY', principlesTitle: 'Tichá technológia.',
        principles: [
          ['01', 'Všímať si', 'Rozumieť situácii skôr, než sa spustí pravidlo.'],
          ['02', 'Prepájať', 'Dávať zmysel súvislostiam medzi priestorom, zariadeniami a každodennými návykmi.'],
          ['03', 'Vylaďovať', 'Zlepšovať drobnosti postupne, s dôrazom na zrozumiteľnosť a možnosť zmenu vypnúť.']
        ],
        scopeKicker: '03 / VEREJNÝ ROZSAH', scopeTitle: 'Pohľad bez mapy.', scope: 'Táto stránka ukazuje iba tvorivý a verejne zdieľateľný pohľad na osobný HomeLab. Neuvádza topológiu, presné zariadenia, prístupy, adresy ani bezpečnostné pravidlá.', homeAction: 'Späť na úvod',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'HomeLab — Tomáš Čačo', description: 'Tomáš Čačo’s personal HomeLab: home automation, connected devices and gradual practical testing.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'HOMELAB / PERSONAL SYSTEM', headline: 'A home that responds with care.',
        intro: 'A personal space for automation, connected devices and small improvements to everyday routines. Home Assistant is the control layer here, not a display case.',
        backHome: 'Back to home', explore: 'Explore the principles', micro: 'SIGNAL / CONTEXT / RHYTHM',
        approachKicker: '01 / APPROACH', approachTitle: 'Signal first. Then a decision.', approachLead: 'I am interested in automation that supports a routine without demanding attention.', approachText: 'Each idea starts by observing a situation and is complete only when its behaviour remains understandable without technical context.',
        principlesKicker: '02 / PRINCIPLES', principlesTitle: 'Quiet technology.',
        principles: [
          ['01', 'Observe', 'Understand the situation before a rule is allowed to run.'],
          ['02', 'Connect', 'Give context to the relationship between space, devices and everyday routines.'],
          ['03', 'Refine', 'Improve small details gradually, with clarity and the option to turn a change off.']
        ],
        scopeKicker: '03 / PUBLIC SCOPE', scopeTitle: 'A view without the map.', scope: 'This page shares only a creative, publicly suitable view of a personal HomeLab. It does not disclose topology, exact devices, access, addresses or security rules.', homeAction: 'Back to home',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'photo',
    paths: { sk: '/sk/foto-a-dron/', en: '/en/photo-and-drone/' },
    anchors: ['obraz', 'skladba', 'formaty', 'prvy-material'],
    content: {
      sk: {
        title: 'Foto a dron — Tomáš Čačo', description: 'Pripravený osobný priestor pre fotografie a dronové videá Tomáša Čača.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'OBRAZ / OSOBNÁ ZBIERKA', headline: 'Priestor pre pohľad, nie pre zásobu obrázkov.',
        intro: 'Pripravený priestor pre osobné fotografie a pohyblivé zábery, primárne z dronu. Každá budúca séria tu môže dostať vlastný rytmus, kontext a miesto na pozorné pozeranie.',
        explore: 'Pozrieť skladbu priestoru', backHome: 'Späť na úvod', micro: 'OBRAZ / VÝŠKA / POHYB',
        emptyKicker: '01 / PRVÝ MATERIÁL', emptyTitle: 'Zbierka sa začne až skutočným záberom.', emptyText: 'Zatiaľ tu nie je vložená žiadna fotografia ani video. Tento prázdny stav je zámerný: nenahrádza budúci autorský obsah vymysleným miestom, časom ani obrazom.', emptyLabel: 'DIZAJNOVÝ NÁHĽAD · NIE JE FOTOGRAFIA',
        structureKicker: '02 / SKLADBA ZBIERKY', structureTitle: 'Tri spôsoby, ako nechať obraz dýchať.', structureLead: 'Stránka je pripravená na rôzne mierky jedného osobného archívu bez toho, aby sa zmenila na katalóg alebo technologický dashboard.',
        formats: [
          ['01', 'Série', 'Súvisiace fotografie alebo zábery spojené jedným pozorovaním. Úvodný text, rytmus a poradie zostanú vecou autora.'],
          ['02', 'Samostatné zábery', 'Jeden obraz, keď nepotrebuje vysvetlenie ani vedľajší obsah. Priestor okolo neho necháva vyniknúť vlastný moment.'],
          ['03', 'Pohyb', 'Dronové video alebo krátky pohyblivý záznam. Bude mať vlastnú titulnú plochu, stručný kontext a jasné ovládanie prehratia.']
        ],
        nextKicker: '03 / KEĎ PRÍDE PRVÝ MATERIÁL', nextTitle: 'Najprv výber. Potom rozprávanie.', nextText: 'Doplnenie série nebude vyžadovať novú stránku: vyberie sa typ záznamu, jeho vlastný názov a verejne vhodný opis. Miesto, čas, autorstvo a technické údaje sa uvedú iba vtedy, keď ich poskytne a schváli autor.',
        homeAction: 'Späť na úvod', footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Photo & drone — Tomáš Čačo', description: 'A prepared personal space for Tomáš Čačo’s photographs and drone videos.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'IMAGE / PERSONAL COLLECTION', headline: 'A space for looking, not a stock of images.',
        intro: 'A prepared space for personal photographs and moving images, primarily from a drone. Each future series can have its own rhythm, context and room for attentive viewing.',
        explore: 'Explore the structure', backHome: 'Back to home', micro: 'IMAGE / ALTITUDE / MOTION',
        emptyKicker: '01 / FIRST MATERIAL', emptyTitle: 'The collection starts only with a real frame.', emptyText: 'No photograph or video has been placed here yet. That empty state is intentional: it does not replace future authored material with an invented place, time or image.', emptyLabel: 'DESIGN PREVIEW · NOT A PHOTOGRAPH',
        structureKicker: '02 / COLLECTION STRUCTURE', structureTitle: 'Three ways to let an image breathe.', structureLead: 'The page is ready for different scales of one personal archive without turning into a catalogue or a technology dashboard.',
        formats: [
          ['01', 'Series', 'Related photographs or footage connected by one observation. The introduction, rhythm and order remain the author’s decision.'],
          ['02', 'Single frames', 'One image when it needs neither explanation nor supporting content. The space around it lets its own moment stand out.'],
          ['03', 'Motion', 'Drone video or a short moving record. It will have its own title surface, brief context and clear playback controls.']
        ],
        nextKicker: '03 / WHEN THE FIRST MATERIAL ARRIVES', nextTitle: 'Selection first. Then a story.', nextText: 'Adding a series will not require a new page: choose the record type, its own title and a publicly suitable description. Place, time, authorship and technical details appear only when supplied and approved by the author.',
        homeAction: 'Back to home', footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  }
];

export const byId = Object.fromEntries(pages.map(page => [page.id, page]));
