(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WA = '34644096351';

  /* ---------- idiomas (el español sale del propio HTML) ---------- */
  const T = {
    en: {
      'nav.casas': 'Houses and villas', 'nav.reformas': 'Renovations', 'nav.cubiertas': 'Roofs and porches', 'nav.naves': 'Warehouses', 'nav.contact': 'Contact',
      'hero.kicker': 'Urbanity Plus · Bolted steel structures',
      'hero.title': 'You dream it,<br><em>we build it.</em>',
      'hero.sub': 'Houses and villas, renovations, roofs and warehouses with bolted steel structures. Faster and cleaner than traditional building.',
      'hero.b1': 'Tell us about your dream ↗',
      'c1.t': 'Houses and villas', 'c1.d': 'Your made-to-measure home, from plan to keys, with a bolted steel structure.',
      'c2.t': 'Renovations', 'c2.d': 'Kitchens, bathrooms, full and interior renovations.',
      'c3.t': 'Roofs and porches', 'c3.d': 'Porches, terraces for homes and restaurants, and stables with a steel structure.',
      'c4.t': 'Industrial buildings', 'c4.d': 'Small, simple warehouses on rural estates or industrial parks.',
      'c.more': 'See more ↓',
      'casa.k': 'Houses and villas', 'casa.t': 'Your dream starts here.', 'casa.lead': 'This is how a house with a bolted steel structure is born: from the plan on paper to the finished home.',
      'vid.s1': 'Plan', 'vid.s2': 'Bolted structure', 'vid.s3': 'Walls and roof', 'vid.s4': 'Ready to live in',
      'how.k': 'How it works', 'how.t': 'Building with a bolted steel structure.',
      'how.1t': 'The plan', 'how.1d': 'We design your home with you and calculate every part of the structure.',
      'how.2t': 'Made-to-measure parts', 'how.2d': 'The steel is cut and drilled in the workshop, and every part arrives numbered.',
      'how.3t': 'Bolted assembly', 'how.3d': 'On site, beams and columns are joined with bolts. No welding.',
      'how.4t': 'Walls and finishes', 'how.4d': 'Walls, roof, windows, kitchen and bathrooms. Handed over ready to live in.',
      'cmp.t': 'Bolted structure vs traditional building', 'cmp.h1': 'Bolted structure', 'cmp.h2': 'Traditional building',
      'cmp.r1': 'Time', 'cmp.r1a': 'Assembled in far less time: the parts arrive ready.', 'cmp.r1b': 'Months of brick, concrete and drying.',
      'cmp.r2': 'Money', 'cmp.r2a': 'Fewer hours on site and fewer surprises.', 'cmp.r2b': 'More labour and more surprises in the budget.',
      'cmp.r3': 'Site', 'cmp.r3a': 'Clean and dry, no welding on site.', 'cmp.r3b': 'Rubble, dust and water.',
      'cmp.r4': 'Precision', 'cmp.r4a': 'Every part cut to size in the workshop.', 'cmp.r4b': 'Measurements taken by hand on site.',
      'cmp.r5': 'Extending', 'cmp.r5a': 'Easy to extend later.', 'cmp.r5b': 'Extending means another big job.',
      'adv.t': 'Advantages of this method', 'adv.1': 'You save time', 'adv.2': 'You save money', 'adv.3': 'A clean, tidy site', 'adv.4': 'A light, precise structure',
      'casa.cta': 'Tell us about your dream ↗',
      'ref.k': 'Renovations', 'ref.t': 'We renovate your home your way.', 'ref.lead': 'Move the bar to see the before and after.', 'ref.note': 'Sample images.',
      'ref.before': 'Before', 'ref.after': 'After',
      'ref.1t': 'Kitchens', 'ref.1d': 'Units, worktop and installations.', 'ref.2t': 'Bathrooms', 'ref.2d': 'Shower, tiling, fixtures and furniture.',
      'ref.3t': 'Full renovation', 'ref.3d': 'Your whole home or premises, from start to finish.', 'ref.4t': 'Interior renovations', 'ref.4d': 'Layout, floors, walls, ceilings and installations.',
      'ref.cta': 'Ready for your renovation ↗',
      'cub.k': 'Roofs and porches', 'cub.t': 'We build and extend spaces to cover your needs.', 'cub.lead': 'Gain usable space and enjoy it all year round.',
      'cub.1': 'Porches for houses', 'cub.2': 'Terraces for flats and houses', 'cub.3': 'Restaurant terraces',
      'cub.q': 'What kind of roof do you need?', 'cub.hint': 'Pick one and tell us on WhatsApp.',
      'cub.o1': 'Porch', 'cub.o2': 'House or flat terrace', 'cub.o3': 'Restaurant terrace', 'cub.o4': 'Stable', 'cub.o5': 'Other',
      'nav2.k': 'Warehouses', 'naves.t': 'Industrial and farm buildings.', 'naves.lead': 'Small, simple buildings, quick to assemble.',
      'naves.1t': 'Buildings on estates or industrial parks', 'naves.1d': 'For storage, workshops, machinery or your business.',
      'naves.2t': 'Horse stables', 'naves.2d': 'Stables and boxes with a steel structure.', 'naves.cta': 'Tell us about your project ↗',
      'svc.k': 'What we do', 'svc.t': 'All our services.',
      'svc.l1': 'Detached houses', 'svc.l2': 'Villas', 'svc.l3': 'Houses on rural estates', 'svc.l4': 'Bolted steel structures', 'svc.l5': 'Stables with a steel structure',
      'svc.l6': 'Small, simple warehouses', 'svc.l7': 'Buildings on rural estates', 'svc.l8': 'Buildings on industrial parks',
      'ct.kicker': 'The next step', 'ct.title': 'Let\'s talk about what you want to build.', 'ct.d': 'Tell us what you need and where the site is. We will get back to you as soon as possible.',
      'ct.zone': 'We work all over Spain. We speak Spanish, English, French and Swedish.',
      'f.int': 'I\'m interested in', 'f.o4': 'Warehouses and stables', 'f.o5': 'Something else',
      'f.name': 'Name', 'f.tel': 'Phone', 'f.mail': 'Email (optional)', 'f.place': 'Site location', 'f.msg': 'Tell us about your project',
      'f.rgpd': 'I have read and accept the <a href="privacidad.html">privacy policy</a>.', 'f.err': 'Please fill in name, phone and site location, and accept the privacy policy.',
      'f.send': 'Send via WhatsApp ↗', 'f.sendMail': 'Send by email',
      'soc.t': 'Follow us on',
      'ftr.claim': 'You dream it, we build it.', 'ftr.l1': 'Legal notice', 'ftr.l2': 'Privacy', 'ftr.l3': 'Cookies', 'wa': 'Let\'s talk'
    },
    fr: {
      'nav.casas': 'Maisons et villas', 'nav.reformas': 'Rénovations', 'nav.cubiertas': 'Toitures', 'nav.naves': 'Hangars', 'nav.contact': 'Contact',
      'hero.kicker': 'Urbanity Plus · Structure métallique boulonnée',
      'hero.title': 'Vous rêvez,<br><em>nous construisons.</em>',
      'hero.sub': 'Maisons et villas, rénovations, toitures et hangars en structure métallique boulonnée. Plus rapide et plus propre que la construction traditionnelle.',
      'hero.b1': 'Parlez-nous de votre rêve ↗',
      'c1.t': 'Maisons et villas', 'c1.d': 'Votre maison sur mesure, du plan aux clés, en structure métallique boulonnée.',
      'c2.t': 'Rénovations', 'c2.d': 'Cuisines, salles de bains, rénovations complètes et intérieures.',
      'c3.t': 'Toitures', 'c3.d': 'Porches, terrasses de maisons et de restaurants, et écuries en structure métallique.',
      'c4.t': 'Bâtiments industriels', 'c4.d': 'Petits hangars simples, sur domaine rural ou en zone industrielle.',
      'c.more': 'Voir plus ↓',
      'casa.k': 'Maisons et villas', 'casa.t': 'Votre rêve commence ici.', 'casa.lead': 'Ainsi naît une maison en structure métallique boulonnée : du plan sur papier à la maison terminée.',
      'vid.s1': 'Plan', 'vid.s2': 'Structure boulonnée', 'vid.s3': 'Murs et toiture', 'vid.s4': 'Prête à vivre',
      'how.k': 'Comment ça marche', 'how.t': 'Construire en structure métallique boulonnée.',
      'how.1t': 'Le plan', 'how.1d': 'Nous concevons votre maison avec vous et calculons chaque pièce de la structure.',
      'how.2t': 'Pièces sur mesure', 'how.2d': 'L\'acier est coupé et percé en atelier, et chaque pièce arrive numérotée.',
      'how.3t': 'Montage boulonné', 'how.3d': 'Sur le chantier, poutres et poteaux sont assemblés par boulons. Sans soudure.',
      'how.4t': 'Murs et finitions', 'how.4d': 'Murs, toiture, fenêtres, cuisine et salles de bains. Livrée prête à vivre.',
      'cmp.t': 'Structure boulonnée ou construction traditionnelle', 'cmp.h1': 'Structure boulonnée', 'cmp.h2': 'Construction traditionnelle',
      'cmp.r1': 'Temps', 'cmp.r1a': 'Montée en beaucoup moins de temps : les pièces arrivent prêtes.', 'cmp.r1b': 'Des mois de briques, de béton et de séchage.',
      'cmp.r2': 'Argent', 'cmp.r2a': 'Moins d\'heures de chantier et moins d\'imprévus.', 'cmp.r2b': 'Plus de main-d\'œuvre et plus de surprises sur le budget.',
      'cmp.r3': 'Chantier', 'cmp.r3a': 'Propre et sec, sans soudure sur place.', 'cmp.r3b': 'Gravats, poussière et eau.',
      'cmp.r4': 'Précision', 'cmp.r4a': 'Chaque pièce coupée sur mesure en atelier.', 'cmp.r4b': 'Mesures prises à la main sur le chantier.',
      'cmp.r5': 'Agrandir', 'cmp.r5a': 'Facile à agrandir plus tard.', 'cmp.r5b': 'Agrandir, c\'est un nouveau gros chantier.',
      'adv.t': 'Les avantages de cette méthode', 'adv.1': 'Vous gagnez du temps', 'adv.2': 'Vous économisez', 'adv.3': 'Un chantier propre et ordonné', 'adv.4': 'Une structure légère et précise',
      'casa.cta': 'Parlez-nous de votre rêve ↗',
      'ref.k': 'Rénovations', 'ref.t': 'Nous rénovons votre maison à votre goût.', 'ref.lead': 'Déplacez la barre pour voir l\'avant et l\'après.', 'ref.note': 'Images d\'exemple.',
      'ref.before': 'Avant', 'ref.after': 'Après',
      'ref.1t': 'Cuisines', 'ref.1d': 'Meubles, plan de travail et installations.', 'ref.2t': 'Salles de bains', 'ref.2d': 'Douche, carrelage, sanitaires et meubles.',
      'ref.3t': 'Rénovation complète', 'ref.3d': 'Toute votre maison ou votre local, du début à la fin.', 'ref.4t': 'Rénovations intérieures', 'ref.4d': 'Distribution, sols, murs, plafonds et installations.',
      'ref.cta': 'Prêt pour votre rénovation ↗',
      'cub.k': 'Toitures', 'cub.t': 'Nous construisons et agrandissons des espaces pour couvrir vos besoins.', 'cub.lead': 'Gagnez des mètres utiles et profitez-en toute l\'année.',
      'cub.1': 'Porches de maisons', 'cub.2': 'Terrasses d\'appartements et de maisons', 'cub.3': 'Terrasses de restaurants',
      'cub.q': 'Quel type de toiture vous faut-il ?', 'cub.hint': 'Choisissez-en une et dites-le-nous sur WhatsApp.',
      'cub.o1': 'Porche', 'cub.o2': 'Terrasse de maison ou d\'appartement', 'cub.o3': 'Terrasse de restaurant', 'cub.o4': 'Écurie', 'cub.o5': 'Autre',
      'nav2.k': 'Hangars', 'naves.t': 'Bâtiments industriels ou agricoles.', 'naves.lead': 'Petits bâtiments simples, rapides à monter.',
      'naves.1t': 'Hangars sur domaine ou en zone industrielle', 'naves.1d': 'Pour stockage, atelier, machines ou votre activité.',
      'naves.2t': 'Écuries pour chevaux', 'naves.2d': 'Écuries et boxes en structure métallique.', 'naves.cta': 'Parlez-nous de votre projet ↗',
      'svc.k': 'Ce que nous faisons', 'svc.t': 'Tous nos services.',
      'svc.l1': 'Maisons individuelles', 'svc.l2': 'Villas', 'svc.l3': 'Maisons sur domaine rural', 'svc.l4': 'Structures métalliques boulonnées', 'svc.l5': 'Écuries en structure métallique',
      'svc.l6': 'Petits hangars simples', 'svc.l7': 'Hangars sur domaine rural', 'svc.l8': 'Hangars en zone industrielle',
      'ct.kicker': 'La prochaine étape', 'ct.title': 'Parlons de ce que vous voulez construire.', 'ct.d': 'Dites-nous ce dont vous avez besoin et où se trouve le chantier. Nous vous répondons au plus vite.',
      'ct.zone': 'Nous travaillons dans toute l\'Espagne. Nous parlons espagnol, anglais, français et suédois.',
      'f.int': 'Je suis intéressé par', 'f.o4': 'Hangars et écuries', 'f.o5': 'Autre chose',
      'f.name': 'Nom', 'f.tel': 'Téléphone', 'f.mail': 'Email (facultatif)', 'f.place': 'Lieu du chantier', 'f.msg': 'Parlez-nous de votre projet',
      'f.rgpd': 'J\'ai lu et j\'accepte la <a href="privacidad.html">politique de confidentialité</a>.', 'f.err': 'Indiquez nom, téléphone et lieu du chantier, et acceptez la confidentialité.',
      'f.send': 'Envoyer par WhatsApp ↗', 'f.sendMail': 'Envoyer par email',
      'soc.t': 'Suivez-nous sur',
      'ftr.claim': 'Vous rêvez, nous construisons.', 'ftr.l1': 'Mentions légales', 'ftr.l2': 'Confidentialité', 'ftr.l3': 'Cookies', 'wa': 'On en parle ?'
    },
    sv: {
      'nav.casas': 'Hus och villor', 'nav.reformas': 'Renoveringar', 'nav.cubiertas': 'Tak och verandor', 'nav.naves': 'Hallar', 'nav.contact': 'Kontakt',
      'hero.kicker': 'Urbanity Plus · Bultade stålstommar',
      'hero.title': 'Du drömmer,<br><em>vi bygger.</em>',
      'hero.sub': 'Hus och villor, renoveringar, tak och hallar med bultad stålstomme. Snabbare och renare än traditionellt byggande.',
      'hero.b1': 'Berätta om din dröm ↗',
      'c1.t': 'Hus och villor', 'c1.d': 'Ditt hus efter mått, från ritning till nyckel, med bultad stålstomme.',
      'c2.t': 'Renoveringar', 'c2.d': 'Kök, badrum, total- och invändiga renoveringar.',
      'c3.t': 'Tak och verandor', 'c3.d': 'Verandor, terrasser för hem och restauranger, och stall med stålstomme.',
      'c4.t': 'Industrihallar', 'c4.d': 'Små, enkla hallar på gårdar eller i industriområden.',
      'c.more': 'Läs mer ↓',
      'casa.k': 'Hus och villor', 'casa.t': 'Din dröm börjar här.', 'casa.lead': 'Så föds ett hus med bultad stålstomme: från ritningen på papper till det färdiga huset.',
      'vid.s1': 'Ritning', 'vid.s2': 'Bultad stomme', 'vid.s3': 'Väggar och tak', 'vid.s4': 'Klart att bo i',
      'how.k': 'Så fungerar det', 'how.t': 'Att bygga med bultad stålstomme.',
      'how.1t': 'Ritningen', 'how.1d': 'Vi ritar ditt hus tillsammans med dig och beräknar varje del av stommen.',
      'how.2t': 'Delar efter mått', 'how.2d': 'Stålet kapas och borras i verkstaden, och varje del kommer numrerad.',
      'how.3t': 'Bultad montering', 'how.3d': 'På plats fogas balkar och pelare ihop med bultar. Ingen svetsning.',
      'how.4t': 'Väggar och ytskikt', 'how.4d': 'Väggar, tak, fönster, kök och badrum. Överlämnas klart att bo i.',
      'cmp.t': 'Bultad stomme jämfört med traditionellt byggande', 'cmp.h1': 'Bultad stomme', 'cmp.h2': 'Traditionellt byggande',
      'cmp.r1': 'Tid', 'cmp.r1a': 'Monteras på mycket kortare tid: delarna kommer färdiga.', 'cmp.r1b': 'Månader av tegel, betong och torktid.',
      'cmp.r2': 'Pengar', 'cmp.r2a': 'Färre arbetstimmar och färre överraskningar.', 'cmp.r2b': 'Mer arbetskraft och fler överraskningar i budgeten.',
      'cmp.r3': 'Bygget', 'cmp.r3a': 'Rent och torrt, ingen svetsning på plats.', 'cmp.r3b': 'Byggavfall, damm och vatten.',
      'cmp.r4': 'Precision', 'cmp.r4a': 'Varje del kapas efter mått i verkstaden.', 'cmp.r4b': 'Mått tas för hand på bygget.',
      'cmp.r5': 'Bygga ut', 'cmp.r5a': 'Lätt att bygga ut senare.', 'cmp.r5b': 'Att bygga ut blir ett nytt stort bygge.',
      'adv.t': 'Fördelarna med metoden', 'adv.1': 'Du sparar tid', 'adv.2': 'Du sparar pengar', 'adv.3': 'Ett rent och ordnat bygge', 'adv.4': 'En lätt och exakt stomme',
      'casa.cta': 'Berätta om din dröm ↗',
      'ref.k': 'Renoveringar', 'ref.t': 'Vi renoverar ditt hem som du vill ha det.', 'ref.lead': 'Dra i reglaget för att se före och efter.', 'ref.note': 'Exempelbilder.',
      'ref.before': 'Före', 'ref.after': 'Efter',
      'ref.1t': 'Kök', 'ref.1d': 'Skåp, bänkskiva och installationer.', 'ref.2t': 'Badrum', 'ref.2d': 'Dusch, kakel, sanitet och möbler.',
      'ref.3t': 'Totalrenovering', 'ref.3d': 'Hela ditt hem eller din lokal, från början till slut.', 'ref.4t': 'Invändiga renoveringar', 'ref.4d': 'Planlösning, golv, väggar, tak och installationer.',
      'ref.cta': 'Redo för din renovering ↗',
      'cub.k': 'Tak och verandor', 'cub.t': 'Vi bygger och utökar ytor efter dina behov.', 'cub.lead': 'Få fler användbara kvadratmeter och njut av dem året runt.',
      'cub.1': 'Verandor till hus', 'cub.2': 'Terrasser till lägenheter och hus', 'cub.3': 'Restaurangterrasser',
      'cub.q': 'Vilken typ av tak behöver du?', 'cub.hint': 'Välj ett och berätta för oss på WhatsApp.',
      'cub.o1': 'Veranda', 'cub.o2': 'Terrass till hus eller lägenhet', 'cub.o3': 'Restaurangterrass', 'cub.o4': 'Stall', 'cub.o5': 'Annat',
      'nav2.k': 'Hallar', 'naves.t': 'Industri- och gårdsbyggnader.', 'naves.lead': 'Små, enkla byggnader som går snabbt att montera.',
      'naves.1t': 'Hallar på gårdar eller i industriområden', 'naves.1d': 'För lager, verkstad, maskiner eller din verksamhet.',
      'naves.2t': 'Häststall', 'naves.2d': 'Stall och boxar med stålstomme.', 'naves.cta': 'Berätta om ditt projekt ↗',
      'svc.k': 'Vad vi gör', 'svc.t': 'Alla våra tjänster.',
      'svc.l1': 'Villor', 'svc.l2': 'Fritidshus', 'svc.l3': 'Hus på gårdar', 'svc.l4': 'Bultade stålstommar', 'svc.l5': 'Stall med stålstomme',
      'svc.l6': 'Små, enkla hallar', 'svc.l7': 'Hallar på gårdar', 'svc.l8': 'Hallar i industriområden',
      'ct.kicker': 'Nästa steg', 'ct.title': 'Låt oss prata om vad du vill bygga.', 'ct.d': 'Berätta vad du behöver och var bygget ligger. Vi svarar så snart som möjligt.',
      'ct.zone': 'Vi arbetar i hela Spanien. Vi talar spanska, engelska, franska och svenska.',
      'f.int': 'Jag är intresserad av', 'f.o4': 'Hallar och stall', 'f.o5': 'Något annat',
      'f.name': 'Namn', 'f.tel': 'Telefon', 'f.mail': 'E-post (valfritt)', 'f.place': 'Byggplats', 'f.msg': 'Berätta om ditt projekt',
      'f.rgpd': 'Jag har läst och godkänner <a href="privacidad.html">integritetspolicyn</a>.', 'f.err': 'Fyll i namn, telefon och byggplats, och godkänn integritetspolicyn.',
      'f.send': 'Skicka via WhatsApp ↗', 'f.sendMail': 'Skicka via e-post',
      'soc.t': 'Följ oss på',
      'ftr.claim': 'Du drömmer, vi bygger.', 'ftr.l1': 'Juridisk information', 'ftr.l2': 'Integritet', 'ftr.l3': 'Cookies', 'wa': 'Ska vi prata?'
    }
  };

  const nodes = $$('[data-i18n]');
  T.es = {};
  nodes.forEach(n => { if (!(n.dataset.i18n in T.es)) T.es[n.dataset.i18n] = n.innerHTML; });
  const titles = { es: document.title, en: 'Urbanity Plus · You dream it, we build it', fr: 'Urbanity Plus · Vous rêvez, nous construisons', sv: 'Urbanity Plus · Du drömmer, vi bygger' };
  let lang = 'es';

  function setLang(l) {
    if (!T[l]) l = 'es';
    lang = l;
    nodes.forEach(n => { const v = T[l][n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    document.documentElement.lang = l;
    document.title = titles[l];
    $$('.langs button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  }
  $$('.langs button').forEach(b => b.addEventListener('click', () => {
    setLang(b.dataset.lang);
    try { localStorage.setItem('up-lang', lang); } catch (e) {}
  }));
  let saved = null;
  try { saved = localStorage.getItem('up-lang'); } catch (e) {}
  if (saved && saved !== 'es') setLang(saved);

  /* ---------- menú móvil ---------- */
  const burger = $('.burger'), menu = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }));

  /* altura real de la cabecera */
  const hdr = $('.hdr');
  const fixH = () => document.documentElement.style.setProperty('--hdr', hdr.offsetHeight + 'px');
  fixH(); addEventListener('resize', fixH);

  /* ---------- aparición suave (con red de seguridad) ---------- */
  const rv = $$('.sec__head, .cat, .film, .how, .cmp, .adv li, .ba, .cards article, .gal3 figure, .pick, .duo article, .svc__col, .contact > *, .social__in');
  if ('IntersectionObserver' in window) {
    rv.forEach(el => el.classList.add('rv'));
    const io = new IntersectionObserver(list => list.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(el => io.observe(el));
    setTimeout(() => rv.forEach(el => el.classList.add('in')), 4000);
  }

  /* ---------- del plano a la casa ---------- */
  const film = $('#film'), v = $('.v', film), steps = $$('.film__steps li', film);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stage = 0, timer = null;
  function show(n) {
    stage = n;
    for (let i = 1; i <= 4; i++) v.classList.toggle('s' + i, i <= n);
    steps.forEach((li, i) => li.classList.toggle('on', i === n - 1));
  }
  function tick() {
    if (stage >= 4) {   // vuelve a empezar sin animar hacia atrás
      v.classList.add('reset'); show(0); void v.getBoundingClientRect(); v.classList.remove('reset');
      timer = setTimeout(() => { show(1); timer = setTimeout(tick, 3000); }, 400);
      return;
    }
    show(stage + 1);
    timer = setTimeout(tick, stage === 4 ? 5000 : 3200);
  }
  if (still) show(4);
  else if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !timer) tick();
      else if (!e.isIntersecting && timer) { clearTimeout(timer); timer = null; }
    }, { threshold: .35 }).observe(film);
  } else show(4);

  /* ---------- antes y después ---------- */
  const ba = $('#ba');
  if (ba) $('input', ba).addEventListener('input', e => ba.style.setProperty('--x', e.target.value + '%'));

  /* ---------- WhatsApp directo ---------- */
  const waMsg = { es: 'Hola, Urbanity Plus. Me interesa: ', en: 'Hello Urbanity Plus, I\'m interested in: ', fr: 'Bonjour Urbanity Plus, je suis intéressé(e) par : ', sv: 'Hej Urbanity Plus, jag är intresserad av: ' };
  $$('[data-wa]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(waMsg[lang] + a.textContent.trim()), '_blank', 'noopener');
  }));
  /* redes aún sin enlace: no saltar arriba */
  $$('[data-pendiente]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

  /* ---------- formulario ---------- */
  const form = $('#form'), err = $('.form__err');
  $$('[data-pick]').forEach(a => a.addEventListener('click', () => { form.interes.value = a.dataset.pick; }));

  function build() {
    const f = form;
    let ok = true;
    [f.nombre, f.tel, f.lugar].forEach(i => {
      const bad = !i.value.trim() || (i === f.tel && i.value.replace(/\D/g, '').length < 9);
      i.classList.toggle('bad', bad); if (bad) ok = false;
    });
    if (!f.rgpd.checked) ok = false;
    err.hidden = ok;
    if (!ok) return null;
    return [
      'Hola, Urbanity Plus. Os escribo desde la web.',
      `Me interesa: ${f.interes.value}`,
      `Nombre: ${f.nombre.value.trim()}`,
      `Teléfono: ${f.tel.value.trim()}`,
      f.email.value.trim() ? `Email: ${f.email.value.trim()}` : '',
      `Lugar de la obra: ${f.lugar.value.trim()}`,
      f.msg.value.trim() ? `Proyecto: ${f.msg.value.trim()}` : '',
      lang !== 'es' ? `Idioma: ${lang.toUpperCase()}` : ''
    ].filter(Boolean).join('\n');
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = build(); if (!t) return;
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });
  $('#byMail').addEventListener('click', () => {
    const t = build(); if (!t) return;
    location.href = 'mailto:info@urbanityplus.es?subject=' + encodeURIComponent('Presupuesto desde la web') + '&body=' + encodeURIComponent(t);
  });
})();
