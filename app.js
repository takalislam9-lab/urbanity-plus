(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- idiomas (el español sale del propio HTML) ---------- */
  const T = {
    en: {
      'nav.services': 'Services', 'nav.system': 'The system', 'nav.process': 'How we work', 'nav.works': 'Examples', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
      'hero.kicker': 'Urbanity Plus · Construction company',
      'hero.title': 'Your project,<br><em>our priority.</em>',
      'hero.sub': 'We build houses, warehouses, porches and roofs with bolted steel structures, and we carry out complete renovations. All over Spain and across Europe.',
      'hero.b1': 'I\'m a homeowner ↗', 'hero.b2': 'I\'m a company or developer ↗', 'hero.more': 'See all services ↓',
      'who.kicker': 'Homeowners and companies', 'who.title': 'Spaces to live in.<br>Spaces to work in.',
      'who.lead': 'Tell us what you want to build and where. We\'ll tell you how we would do it, how long it would take and what it would cost.',
      'who.p.k': 'For homeowners', 'who.p.t': 'Your home. Your way.',
      'who.p.d': 'Detached houses, houses on rural estates, porches, terrace roofs and renovations of bathrooms, kitchens or the whole house.',
      'who.p.b': 'Talk about my home ↗',
      'who.e.k': 'For companies and developers', 'who.e.t': 'Warehouses, premises and developments.',
      'who.e.d': 'Industrial buildings up to 6 m high, restaurants, stables and new builds. A structure that is quick to assemble, with a fixed quote.',
      'who.e.b': 'Present my project ↗',
      'svc.kicker': 'What we do', 'svc.title': 'All our services.', 'svc.lead': 'From the structure to the last finish. One team and one quote.',
      'svc.g1': 'New builds', 'svc.g2': 'Renovations', 'svc.g3': 'Porches, roofs and restaurants', 'svc.g4': 'Horses', 'svc.g5': 'Gardens', 'svc.g6': 'Steel structures',
      'svc.s1': 'New-build construction', 'svc.s2': 'Detached houses', 'svc.s3': 'Houses on rural estates', 'svc.s4': 'Industrial buildings (up to 6 m high)', 'svc.s5': 'Restaurants',
      'svc.s6': 'Bolted steel structures', 'svc.s7': 'Sandwich panel', 'svc.s8': 'Porches', 'svc.s9': 'Terrace roofs', 'svc.s10': 'Horse stables',
      'svc.s11': 'Full renovations', 'svc.s12': 'Interior renovations', 'svc.s13': 'Bathrooms', 'svc.s14': 'Kitchens', 'svc.s15': 'Gardens and outdoor areas',
      'svc.cta': 'Get a free quote ↗',
      'sys.kicker': 'The system at a glance', 'sys.title': 'Bolted steel:<br>fast, clean and precise.',
      'sys.lead': 'Parts arrive cut to size and numbered. On site they are simply bolted together: no welding and far less wet work.',
      'sys.1t': 'Steel structure', 'sys.1d': 'Structural steel tube cut and drilled to size, joined with bolted connectors at every node.',
      'sys.2t': 'Cladding', 'sys.2d': 'Insulated walls and roof, made to fit each opening.',
      'sys.3t': 'Roof', 'sys.3d': 'Flat, single-pitch or gable. We choose the solution for its use and the local climate.',
      'sys.4t': 'Finishes', 'sys.4d': 'Interiors, bathrooms, kitchens and outdoor areas. Handed over ready to use.',
      'sys.f1t': 'CE marking', 'sys.f1d': 'Certified material (EN 1090-1)', 'sys.f2t': 'Meets the CTE', 'sys.f2d': 'Spanish Building Code',
      'sys.f3t': 'Engineer\'s calculation', 'sys.f3d': 'For each project and location', 'sys.f4t': '≈ 5 days', 'sys.f4d': 'Structure of a 100 m² house',
      'pro.kicker': 'How we work', 'pro.title': 'From your idea to the keys, in 6 steps.',
      'pro.1t': 'Tell us about your project', 'pro.1d': 'By WhatsApp, phone or the form. Photos or plans help.',
      'pro.2t': 'Visit and quote', 'pro.2d': 'We see the plot or premises and give you a clear quote.',
      'pro.3t': 'Calculation and plans', 'pro.3d': 'We prepare the plans and the detail of every part.',
      'pro.4t': 'Made to measure', 'pro.4d': 'Every part is cut and labelled before it reaches the site.',
      'pro.5t': 'Assembly', 'pro.5d': 'Our team assembles the structure and the cladding.',
      'pro.6t': 'Finishes and handover', 'pro.6d': 'We finish the interiors and hand the work over ready.',
      'obr.kicker': 'Examples', 'obr.title': 'Ideas for your project.', 'obr.lead': 'Some examples of what we can build for you.', 'obr.note': 'Sample images.',
      'obr.1': 'Detached house', 'obr.2': 'Steel structure', 'obr.3': 'House on a rural estate', 'obr.4': 'Interior renovation', 'obr.5': 'Kitchen', 'obr.6': 'New build',
      'zone.kicker': 'Where we work', 'zone.title': 'All over Spain and across Europe.',
      'zone.d': 'Our base is in Algete (Madrid). For projects outside Spain, we organise the shipping of materials and the assembly team.',
      'zone.langs': 'We speak:',
      'faq.title': 'Before you take the step.', 'faq.kicker': 'Frequently asked questions',
      'faq.1q': 'Do you work outside Madrid?', 'faq.1a': 'Yes. We work all over Spain and also take on projects in other European countries.',
      'faq.2q': 'What is the advantage of a bolted structure?', 'faq.2a': 'Parts arrive cut and numbered and are simply bolted on site. It is faster, cleaner and more precise than welding on site, and the structure is lighter.',
      'faq.3q': 'Do I need a permit?', 'faq.3a': 'It depends on the project and the municipality. We help you with the technical documents for the application.',
      'faq.4q': 'How long does a project take?', 'faq.4a': 'It depends on the size and the finishes. Your quote includes the timeline for your project.',
      'faq.5q': 'How much does it cost?', 'faq.5a': 'Every project is made to measure. Tell us what you need and we will prepare a free, no-obligation quote.',
      'ct.kicker': 'The next step', 'ct.title': 'Let\'s talk about what you want to build.', 'ct.d': 'Tell us what you need and where the site is. We will get back to you as soon as possible.',
      'f.int': 'I\'m interested as', 'f.o1': 'Homeowner · My house or renovation', 'f.o2': 'Company · Warehouse, premises or restaurant', 'f.o3': 'Developer · Housing development', 'f.o4': 'Something else',
      'f.name': 'Name', 'f.tel': 'Phone', 'f.mail': 'Email (optional)', 'f.place': 'Site location', 'f.msg': 'Tell us about your project',
      'f.rgpd': 'I have read and accept the <a href="privacidad.html">privacy policy</a>.', 'f.err': 'Please fill in name, phone and site location, and accept the privacy policy.',
      'f.send': 'Send via WhatsApp ↗', 'f.sendMail': 'Send by email',
      'ftr.claim': 'Quality, experience, innovation and commitment.', 'ftr.l1': 'Legal notice', 'ftr.l2': 'Privacy', 'ftr.l3': 'Cookies', 'wa': 'Let\'s talk'
    },
    fr: {
      'nav.services': 'Services', 'nav.system': 'Le système', 'nav.process': 'Notre méthode', 'nav.works': 'Exemples', 'nav.faq': 'Questions', 'nav.contact': 'Contact',
      'hero.kicker': 'Urbanity Plus · Entreprise de construction',
      'hero.title': 'Votre projet,<br><em>notre priorité.</em>',
      'hero.sub': 'Nous construisons des maisons, des hangars, des porches et des toitures en structure métallique boulonnée, et nous réalisons des rénovations complètes. Dans toute l\'Espagne et en Europe.',
      'hero.b1': 'Je suis un particulier ↗', 'hero.b2': 'Je suis une entreprise ou un promoteur ↗', 'hero.more': 'Voir tous les services ↓',
      'who.kicker': 'Particuliers et entreprises', 'who.title': 'Des espaces pour vivre.<br>Des espaces pour travailler.',
      'who.lead': 'Dites-nous ce que vous voulez construire et où. Nous vous dirons comment nous le ferions, en combien de temps et à quel prix.',
      'who.p.k': 'Pour les particuliers', 'who.p.t': 'Votre maison. À votre façon.',
      'who.p.d': 'Maisons individuelles, maisons sur domaine rural, porches, toitures de terrasse et rénovation de salles de bains, de cuisines ou de toute la maison.',
      'who.p.b': 'Parler de ma maison ↗',
      'who.e.k': 'Pour les entreprises et promoteurs', 'who.e.t': 'Hangars, locaux et programmes immobiliers.',
      'who.e.d': 'Bâtiments industriels jusqu\'à 6 m de hauteur, restaurants, écuries et constructions neuves. Une structure rapide à monter et un devis ferme.',
      'who.e.b': 'Présenter mon projet ↗',
      'svc.kicker': 'Ce que nous faisons', 'svc.title': 'Tous nos services.', 'svc.lead': 'De la structure à la dernière finition. Une seule équipe et un seul devis.',
      'svc.g1': 'Construction neuve', 'svc.g2': 'Rénovations', 'svc.g3': 'Porches, toitures et restaurants', 'svc.g4': 'Chevaux', 'svc.g5': 'Jardins', 'svc.g6': 'Structures métalliques',
      'svc.s1': 'Construction neuve', 'svc.s2': 'Maisons individuelles', 'svc.s3': 'Maisons sur domaine rural', 'svc.s4': 'Bâtiments industriels (jusqu\'à 6 m)', 'svc.s5': 'Restaurants',
      'svc.s6': 'Structures métalliques boulonnées', 'svc.s7': 'Panneau sandwich', 'svc.s8': 'Porches', 'svc.s9': 'Toitures de terrasse', 'svc.s10': 'Écuries pour chevaux',
      'svc.s11': 'Rénovations complètes', 'svc.s12': 'Rénovations intérieures', 'svc.s13': 'Salles de bains', 'svc.s14': 'Cuisines', 'svc.s15': 'Jardins et extérieurs',
      'svc.cta': 'Demander un devis gratuit ↗',
      'sys.kicker': 'Le système en bref', 'sys.title': 'L\'acier boulonné :<br>rapide, propre et précis.',
      'sys.lead': 'Les pièces arrivent coupées sur mesure et numérotées. Sur le chantier, il suffit de les boulonner : sans soudure et avec beaucoup moins de travaux humides.',
      'sys.1t': 'Structure métallique', 'sys.1d': 'Tube d\'acier de construction coupé et percé sur mesure, assemblé par des pièces boulonnées à chaque nœud.',
      'sys.2t': 'Bardage', 'sys.2d': 'Façade et toiture isolées, à la mesure de chaque ouverture.',
      'sys.3t': 'Toiture', 'sys.3d': 'Plate, à un ou deux versants. Nous choisissons selon l\'usage et le climat local.',
      'sys.4t': 'Finitions', 'sys.4d': 'Intérieurs, salles de bains, cuisines et extérieurs. Livré prêt à l\'emploi.',
      'sys.f1t': 'Marquage CE', 'sys.f1d': 'Matériel certifié (EN 1090-1)', 'sys.f2t': 'Conforme au CTE', 'sys.f2d': 'Code technique espagnol du bâtiment',
      'sys.f3t': 'Calcul d\'ingénieur', 'sys.f3d': 'Pour chaque projet et son emplacement', 'sys.f4t': '≈ 5 jours', 'sys.f4d': 'Structure d\'une maison de 100 m²',
      'pro.kicker': 'Notre méthode', 'pro.title': 'De votre idée aux clés, en 6 étapes.',
      'pro.1t': 'Vous nous présentez votre projet', 'pro.1d': 'Par WhatsApp, téléphone ou le formulaire. Avec photos ou plans, c\'est mieux.',
      'pro.2t': 'Visite et devis', 'pro.2d': 'Nous voyons le terrain ou le local et vous remettons un devis clair.',
      'pro.3t': 'Calcul et plans', 'pro.3d': 'Nous préparons les plans et le détail de chaque pièce.',
      'pro.4t': 'Fabrication sur mesure', 'pro.4d': 'Chaque pièce est coupée et étiquetée avant d\'arriver sur le chantier.',
      'pro.5t': 'Montage', 'pro.5d': 'Notre équipe monte la structure et le bardage.',
      'pro.6t': 'Finitions et livraison', 'pro.6d': 'Nous terminons les intérieurs et vous livrons l\'ouvrage prêt.',
      'obr.kicker': 'Exemples', 'obr.title': 'Des idées pour votre projet.', 'obr.lead': 'Quelques exemples de ce que nous pouvons construire pour vous.', 'obr.note': 'Images d\'exemple.',
      'obr.1': 'Maison individuelle', 'obr.2': 'Structure métallique', 'obr.3': 'Maison sur domaine rural', 'obr.4': 'Rénovation intérieure', 'obr.5': 'Cuisine', 'obr.6': 'Construction neuve',
      'zone.kicker': 'Où nous travaillons', 'zone.title': 'Dans toute l\'Espagne et en Europe.',
      'zone.d': 'Notre base est à Algete (Madrid). Pour les chantiers hors d\'Espagne, nous organisons l\'envoi du matériel et l\'équipe de montage.',
      'zone.langs': 'Nous parlons :',
      'faq.title': 'Avant de vous lancer.', 'faq.kicker': 'Questions fréquentes',
      'faq.1q': 'Travaillez-vous hors de Madrid ?', 'faq.1a': 'Oui. Nous travaillons dans toute l\'Espagne et réalisons aussi des chantiers dans d\'autres pays européens.',
      'faq.2q': 'Quel est l\'avantage d\'une structure boulonnée ?', 'faq.2a': 'Les pièces arrivent coupées et numérotées, et il suffit de les boulonner sur place. C\'est plus rapide, plus propre et plus précis que la soudure sur chantier, et la structure est plus légère.',
      'faq.3q': 'Ai-je besoin d\'un permis ?', 'faq.3a': 'Cela dépend du projet et de la commune. Nous vous aidons avec les documents techniques pour la demande.',
      'faq.4q': 'Combien de temps dure un chantier ?', 'faq.4a': 'Cela dépend de la taille et des finitions. Le devis indique les délais de votre projet.',
      'faq.5q': 'Combien ça coûte ?', 'faq.5a': 'Chaque projet est sur mesure. Dites-nous ce dont vous avez besoin et nous préparons un devis gratuit et sans engagement.',
      'ct.kicker': 'La prochaine étape', 'ct.title': 'Parlons de ce que vous voulez construire.', 'ct.d': 'Dites-nous ce dont vous avez besoin et où se trouve le chantier. Nous vous répondons au plus vite.',
      'f.int': 'Je suis', 'f.o1': 'Particulier · Ma maison ou rénovation', 'f.o2': 'Entreprise · Hangar, local ou restaurant', 'f.o3': 'Promoteur · Programme de logements', 'f.o4': 'Autre chose',
      'f.name': 'Nom', 'f.tel': 'Téléphone', 'f.mail': 'Email (facultatif)', 'f.place': 'Lieu du chantier', 'f.msg': 'Parlez-nous de votre projet',
      'f.rgpd': 'J\'ai lu et j\'accepte la <a href="privacidad.html">politique de confidentialité</a>.', 'f.err': 'Indiquez nom, téléphone et lieu du chantier, et acceptez la confidentialité.',
      'f.send': 'Envoyer par WhatsApp ↗', 'f.sendMail': 'Envoyer par email',
      'ftr.claim': 'Qualité, expérience, innovation et engagement.', 'ftr.l1': 'Mentions légales', 'ftr.l2': 'Confidentialité', 'ftr.l3': 'Cookies', 'wa': 'On en parle ?'
    },
    sv: {
      'nav.services': 'Tjänster', 'nav.system': 'Systemet', 'nav.process': 'Så arbetar vi', 'nav.works': 'Exempel', 'nav.faq': 'Frågor', 'nav.contact': 'Kontakt',
      'hero.kicker': 'Urbanity Plus · Byggföretag',
      'hero.title': 'Ditt projekt,<br><em>vår prioritet.</em>',
      'hero.sub': 'Vi bygger hus, hallar, verandor och tak med bultade stålstommar, och vi gör kompletta renoveringar. I hela Spanien och i Europa.',
      'hero.b1': 'Jag är privatperson ↗', 'hero.b2': 'Jag är företag eller byggherre ↗', 'hero.more': 'Se alla tjänster ↓',
      'who.kicker': 'Privatpersoner och företag', 'who.title': 'Platser att bo i.<br>Platser att arbeta i.',
      'who.lead': 'Berätta vad du vill bygga och var. Vi berättar hur vi skulle göra, hur lång tid det tar och vad det kostar.',
      'who.p.k': 'För privatpersoner', 'who.p.t': 'Ditt hem. På ditt sätt.',
      'who.p.d': 'Villor, hus på landsbygdsfastigheter, verandor, terrasstak och renovering av badrum, kök eller hela huset.',
      'who.p.b': 'Prata om mitt hem ↗',
      'who.e.k': 'För företag och byggherrar', 'who.e.t': 'Hallar, lokaler och bostadsprojekt.',
      'who.e.d': 'Industrihallar upp till 6 m höjd, restauranger, stall och nybyggen. En stomme som går snabbt att montera, till fast pris.',
      'who.e.b': 'Presentera mitt projekt ↗',
      'svc.kicker': 'Vad vi gör', 'svc.title': 'Alla våra tjänster.', 'svc.lead': 'Från stommen till sista detaljen. Ett team och en offert.',
      'svc.g1': 'Nybyggnation', 'svc.g2': 'Renoveringar', 'svc.g3': 'Verandor, tak och restauranger', 'svc.g4': 'Hästar', 'svc.g5': 'Trädgård', 'svc.g6': 'Stålstommar',
      'svc.s1': 'Nybyggnation', 'svc.s2': 'Villor', 'svc.s3': 'Hus på landsbygdsfastigheter', 'svc.s4': 'Industrihallar (upp till 6 m höjd)', 'svc.s5': 'Restauranger',
      'svc.s6': 'Bultade stålstommar', 'svc.s7': 'Sandwichpaneler', 'svc.s8': 'Verandor', 'svc.s9': 'Terrasstak', 'svc.s10': 'Häststall',
      'svc.s11': 'Totalrenoveringar', 'svc.s12': 'Invändiga renoveringar', 'svc.s13': 'Badrum', 'svc.s14': 'Kök', 'svc.s15': 'Trädgård och utemiljö',
      'svc.cta': 'Begär en kostnadsfri offert ↗',
      'sys.kicker': 'Systemet i korthet', 'sys.title': 'Bultat stål:<br>snabbt, rent och exakt.',
      'sys.lead': 'Delarna levereras kapade efter mått och numrerade. På plats skruvas de bara ihop: ingen svetsning och mycket mindre våtarbete.',
      'sys.1t': 'Stålstomme', 'sys.1d': 'Konstruktionsrör av stål, kapade och borrade efter mått, sammanfogade med bultade knutpunkter.',
      'sys.2t': 'Fasad', 'sys.2d': 'Isolerad fasad och isolerat tak, anpassade efter varje öppning.',
      'sys.3t': 'Tak', 'sys.3d': 'Platt, pulpet eller sadeltak. Vi väljer efter användning och lokalt klimat.',
      'sys.4t': 'Ytskikt', 'sys.4d': 'Interiörer, badrum, kök och utemiljö. Överlämnas klart att använda.',
      'sys.f1t': 'CE-märkt', 'sys.f1d': 'Certifierat material (EN 1090-1)', 'sys.f2t': 'Uppfyller CTE', 'sys.f2d': 'Spanska byggreglerna',
      'sys.f3t': 'Ingenjörsberäkning', 'sys.f3d': 'För varje projekt och plats', 'sys.f4t': '≈ 5 dagar', 'sys.f4d': 'Stomme till ett hus på 100 m²',
      'pro.kicker': 'Så arbetar vi', 'pro.title': 'Från idé till nyckel, i 6 steg.',
      'pro.1t': 'Berätta om ditt projekt', 'pro.1d': 'Via WhatsApp, telefon eller formuläret. Bilder eller ritningar hjälper.',
      'pro.2t': 'Besök och offert', 'pro.2d': 'Vi tittar på tomten eller lokalen och ger dig en tydlig offert.',
      'pro.3t': 'Beräkning och ritningar', 'pro.3d': 'Vi tar fram ritningarna och detaljerna för varje del.',
      'pro.4t': 'Tillverkning efter mått', 'pro.4d': 'Varje del kapas och märks innan den kommer till bygget.',
      'pro.5t': 'Montering', 'pro.5d': 'Vårt team monterar stommen och fasaden.',
      'pro.6t': 'Ytskikt och överlämning', 'pro.6d': 'Vi gör klart interiören och lämnar över bygget färdigt.',
      'obr.kicker': 'Exempel', 'obr.title': 'Idéer för ditt projekt.', 'obr.lead': 'Några exempel på vad vi kan bygga åt dig.', 'obr.note': 'Exempelbilder.',
      'obr.1': 'Villa', 'obr.2': 'Stålstomme', 'obr.3': 'Hus på landsbygdsfastighet', 'obr.4': 'Invändig renovering', 'obr.5': 'Kök', 'obr.6': 'Nybygge',
      'zone.kicker': 'Var vi arbetar', 'zone.title': 'I hela Spanien och i Europa.',
      'zone.d': 'Vår bas ligger i Algete (Madrid). För projekt utanför Spanien ordnar vi frakt av material och monteringsteam.',
      'zone.langs': 'Vi talar:',
      'faq.title': 'Innan du tar steget.', 'faq.kicker': 'Vanliga frågor',
      'faq.1q': 'Arbetar ni utanför Madrid?', 'faq.1a': 'Ja. Vi arbetar i hela Spanien och gör även projekt i andra europeiska länder.',
      'faq.2q': 'Vad är fördelen med en bultad stomme?', 'faq.2a': 'Delarna kommer kapade och numrerade och skruvas bara ihop på plats. Det är snabbare, renare och mer exakt än att svetsa på bygget, och stommen blir lättare.',
      'faq.3q': 'Behöver jag bygglov?', 'faq.3a': 'Det beror på projektet och kommunen. Vi hjälper dig med de tekniska handlingarna för ansökan.',
      'faq.4q': 'Hur lång tid tar ett bygge?', 'faq.4a': 'Det beror på storlek och ytskikt. Offerten anger tidsplanen för ditt projekt.',
      'faq.5q': 'Vad kostar det?', 'faq.5a': 'Varje projekt görs efter mått. Berätta vad du behöver så tar vi fram en kostnadsfri offert utan förpliktelser.',
      'ct.kicker': 'Nästa steg', 'ct.title': 'Låt oss prata om vad du vill bygga.', 'ct.d': 'Berätta vad du behöver och var bygget ligger. Vi svarar så snart som möjligt.',
      'f.int': 'Jag är', 'f.o1': 'Privatperson · Mitt hus eller renovering', 'f.o2': 'Företag · Hall, lokal eller restaurang', 'f.o3': 'Byggherre · Bostadsprojekt', 'f.o4': 'Något annat',
      'f.name': 'Namn', 'f.tel': 'Telefon', 'f.mail': 'E-post (valfritt)', 'f.place': 'Byggplats', 'f.msg': 'Berätta om ditt projekt',
      'f.rgpd': 'Jag har läst och godkänner <a href="privacidad.html">integritetspolicyn</a>.', 'f.err': 'Fyll i namn, telefon och byggplats, och godkänn integritetspolicyn.',
      'f.send': 'Skicka via WhatsApp ↗', 'f.sendMail': 'Skicka via e-post',
      'ftr.claim': 'Kvalitet, erfarenhet, innovation och engagemang.', 'ftr.l1': 'Juridisk information', 'ftr.l2': 'Integritet', 'ftr.l3': 'Cookies', 'wa': 'Ska vi prata?'
    }
  };

  /* descripciones de servicios, ficha y textos actualizados */
  Object.assign(T.en, {
    'zone.d': 'For projects outside Spain, we organise the shipping of materials and the assembly team.',
    'svc.d1': 'Homes and buildings from scratch, with a steel structure and all finishes.', 'svc.d2': 'Your made-to-measure home: structure, cladding and finishes, with one team.',
    'svc.d3': 'Homes on rural estates and plots, with a light structure and fast assembly.', 'svc.d4': 'Buildings for storage, workshops or business.',
    'svc.d5': 'Construction and renovation of restaurant premises.', 'svc.d6': 'Steel cut to size and bolted together, with no welding on site.',
    'svc.d7': 'Insulated roofs and walls, cut to size.', 'svc.d8': 'Steel porches for your home, with the roof of your choice.',
    'svc.d9': 'Cover your terrace so you can use it all year round.', 'svc.d10': 'Horse stables and boxes with a steel structure.',
    'svc.d11': 'We renovate your whole home or premises, from start to finish.', 'svc.d12': 'Layout, floors, walls, ceilings and installations.',
    'svc.d13': 'New bathrooms: shower, tiling, fixtures and furniture.', 'svc.d14': 'Complete kitchens: units, worktop and installations.',
    'svc.d15': 'Paths, lawn, plants and outdoor areas.',
    'dlg.hint': 'Tell us what you need and we will prepare a free, no-obligation quote.', 'dlg.wa': 'Ask via WhatsApp ↗', 'dlg.q': 'Request a quote',
    'vid.k': 'How we raise your project', 'vid.t': 'Fast assembly.<br>Clean site.', 'vid.d': 'Parts arrive ready to assemble. Fewer weeks of work, less noise and fewer surprises.', 'vid.b': 'Request a quote ↗', 'b3.1': 'Foundation', 'b3.2': 'Columns', 'b3.3': 'Beams and bolted joints', 'b3.4': 'Roof structure', 'b3.5': 'Walls and roof', 'b3.6': 'Windows and finishes',
    'svc.s4s': 'Industrial buildings', 'svc.s6s': 'Steel structures'
  });
  Object.assign(T.fr, {
    'zone.d': 'Pour les chantiers hors d\'Espagne, nous organisons l\'envoi du matériel et l\'équipe de montage.',
    'svc.d1': 'Logements et bâtiments à partir de zéro, avec structure métallique et toutes les finitions.', 'svc.d2': 'Votre maison sur mesure : structure, bardage et finitions, avec une seule équipe.',
    'svc.d3': 'Maisons sur domaines et parcelles, avec une structure légère et un montage rapide.', 'svc.d4': 'Bâtiments pour stockage, atelier ou commerce.',
    'svc.d5': 'Construction et rénovation de restaurants.', 'svc.d6': 'Acier coupé sur mesure et boulonné, sans soudure sur chantier.',
    'svc.d7': 'Toitures et façades isolées, coupées sur mesure.', 'svc.d8': 'Porches métalliques pour votre maison, avec la toiture de votre choix.',
    'svc.d9': 'Couvrez votre terrasse pour en profiter toute l\'année.', 'svc.d10': 'Écuries et boxes pour chevaux en structure métallique.',
    'svc.d11': 'Nous rénovons toute votre maison ou votre local, du début à la fin.', 'svc.d12': 'Distribution, sols, murs, plafonds et installations.',
    'svc.d13': 'Salles de bains neuves : douche, carrelage, sanitaires et meubles.', 'svc.d14': 'Cuisines complètes : meubles, plan de travail et installations.',
    'svc.d15': 'Allées, pelouse, plantes et espaces extérieurs.',
    'dlg.hint': 'Dites-nous ce dont vous avez besoin et nous préparons un devis gratuit et sans engagement.', 'dlg.wa': 'Demander par WhatsApp ↗', 'dlg.q': 'Demander un devis',
    'vid.k': 'Ainsi s\'élève votre projet', 'vid.t': 'Montage rapide.<br>Chantier propre.', 'vid.d': 'Les pièces arrivent prêtes à monter. Moins de semaines de travaux, moins de bruit et moins de surprises.', 'vid.b': 'Demander un devis ↗', 'b3.1': 'Fondations', 'b3.2': 'Poteaux', 'b3.3': 'Poutres et assemblages boulonnés', 'b3.4': 'Charpente de toiture', 'b3.5': 'Murs et toiture', 'b3.6': 'Fenêtres et finitions',
    'svc.s4s': 'Bâtiments industriels', 'svc.s6s': 'Structures métalliques'
  });
  Object.assign(T.sv, {
    'zone.d': 'För projekt utanför Spanien ordnar vi frakt av material och monteringsteam.',
    'svc.d1': 'Bostäder och byggnader från grunden, med stålstomme och alla ytskikt.', 'svc.d2': 'Ditt hus efter mått: stomme, fasad och ytskikt, med ett team.',
    'svc.d3': 'Hus på landsbygdsfastigheter och tomter, med lätt stomme och snabb montering.', 'svc.d4': 'Hallar för lager, verkstad eller verksamhet.',
    'svc.d5': 'Byggnation och renovering av restauranglokaler.', 'svc.d6': 'Stål kapat efter mått och ihopbultat, utan svetsning på plats.',
    'svc.d7': 'Isolerade tak och fasader, kapade efter mått.', 'svc.d8': 'Verandor i stål till ditt hus, med det tak du väljer.',
    'svc.d9': 'Täck över terrassen och använd den året runt.', 'svc.d10': 'Stall och boxar för hästar med stålstomme.',
    'svc.d11': 'Vi renoverar hela ditt hem eller din lokal, från början till slut.', 'svc.d12': 'Planlösning, golv, väggar, tak och installationer.',
    'svc.d13': 'Nya badrum: dusch, kakel, sanitet och möbler.', 'svc.d14': 'Kompletta kök: skåp, bänkskiva och installationer.',
    'svc.d15': 'Gångar, gräsmatta, växter och utemiljö.',
    'dlg.hint': 'Berätta vad du behöver så tar vi fram en kostnadsfri offert utan förpliktelser.', 'dlg.wa': 'Fråga via WhatsApp ↗', 'dlg.q': 'Begär offert',
    'vid.k': 'Så reser vi ditt projekt', 'vid.t': 'Snabb montering.<br>Rent bygge.', 'vid.d': 'Delarna kommer färdiga att montera. Färre veckors arbete, mindre buller och färre överraskningar.', 'vid.b': 'Begär offert ↗', 'b3.1': 'Grund', 'b3.2': 'Pelare', 'b3.3': 'Balkar och bultade förband', 'b3.4': 'Takstomme', 'b3.5': 'Väggar och tak', 'b3.6': 'Fönster och ytskikt',
    'svc.s4s': 'Industrihallar', 'svc.s6s': 'Stålstommar'
  });

  const nodes = $$('[data-i18n]');
  T.es = {};
  nodes.forEach(n => { T.es[n.dataset.i18n] = n.innerHTML; });
  const titles = { es: document.title, en: 'Urbanity Plus · Construction and bolted steel structures', fr: 'Urbanity Plus · Construction et structures métalliques boulonnées', sv: 'Urbanity Plus · Byggnation och bultade stålstommar' };
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
  const rv = $$('.sec__head, .split, .svc__col, .parts li, .facts li, .steps li, .gal figure, .band__in > div, .faq details, .contact > *');
  if ('IntersectionObserver' in window) {
    rv.forEach(el => el.classList.add('rv'));
    const io = new IntersectionObserver(list => list.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(el => io.observe(el));
    setTimeout(() => rv.forEach(el => el.classList.add('in')), 4000);
  }

  /* ---------- ficha de cada servicio ---------- */
  const dlg = $('#dlg');
  const waMsg = { es: 'Hola, Urbanity Plus. Me interesa: ', en: 'Hello Urbanity Plus, I\'m interested in: ', fr: 'Bonjour Urbanity Plus, je suis intéressé(e) par : ', sv: 'Hej Urbanity Plus, jag är intresserad av: ' };
  let current = null;
  const showDlg = () => { if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', ''); };
  function openGroup(col) {
    current = col;
    const name = $('h3', col).textContent.trim();
    $('#dlg-g').textContent = $('[data-i18n="nav.services"]').textContent.trim();
    $('#dlg-t').textContent = name;
    $('#dlg-d').textContent = '';
    $('#dlg-d').hidden = true;
    const ul = $('#dlg-l');
    ul.innerHTML = '';
    $$('li', col).forEach(li => {
      const item = document.createElement('li');
      item.innerHTML = '<b></b><span></span>';
      $('b', item).textContent = $('b', li).textContent.trim();
      $('span', item).textContent = $('p', li).textContent.trim();
      ul.appendChild(item);
    });
    ul.hidden = false;
    $('.dlg__ic use').setAttribute('href', '#' + col.dataset.icon);
    $('#dlg-wa').href = 'https://wa.me/34644096351?text=' + encodeURIComponent(waMsg[lang] + name);
    showDlg();
  }
  function openSvc(li) {
    current = li;
    $('#dlg-l').hidden = true;
    $('#dlg-d').hidden = false;
    const name = $('b', li).textContent.trim();
    $('#dlg-t').textContent = name;
    $('#dlg-d').textContent = $('p', li).textContent.trim();
    $('#dlg-g').textContent = $('h3', li.closest('.svc__col')).textContent.trim();
    $('.dlg__ic use').setAttribute('href', $('svg use', li).getAttribute('href'));
    $('#dlg-wa').href = 'https://wa.me/34644096351?text=' + encodeURIComponent(waMsg[lang] + name);
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function closeDlg() { if (dlg.open) dlg.close ? dlg.close() : dlg.removeAttribute('open'); }
  $$('.svc li').forEach(li => {
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.addEventListener('click', () => openSvc(li));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSvc(li); } });
  });
  $$('.hero__svc a[data-group]').forEach(a => a.addEventListener('click', e => {
    const col = $(a.getAttribute('href'));
    if (col) { e.preventDefault(); openGroup(col); }
  }));
  $('.dlg__x').addEventListener('click', closeDlg);
  dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });
  $('#dlg-q').addEventListener('click', () => {
    if (current) {
      const name = ($('b', current) && current.tagName === 'LI' ? $('b', current) : $('h3', current)).textContent.trim();
      const g = /s-(naves|restaurantes)/.test(current.id) ? 'Empresa' : 'Particular';
      form.interes.value = g;
      if (!form.msg.value.trim()) form.msg.value = name + ': ';
    }
    closeDlg();
  });

  /* ---------- formulario ---------- */
  const form = $('#form'), err = $('.form__err');
  $$('[data-pick]').forEach(a => a.addEventListener('click', () => { form.interes.value = a.dataset.pick === 'empresa' ? 'Empresa' : 'Particular'; }));

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
    window.open('https://wa.me/34644096351?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });
  $('#byMail').addEventListener('click', () => {
    const t = build(); if (!t) return;
    location.href = 'mailto:info@urbanityplus.es?subject=' + encodeURIComponent('Presupuesto desde la web') + '&body=' + encodeURIComponent(t);
  });
})();
