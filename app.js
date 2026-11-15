(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WA = '34644096351';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger) && !reduce;
  if (!hasGsap) document.documentElement.classList.add('no-anim');

  /* ---------- tornillos del esquema ---------- */
  const boltsG = $('#bolts');
  if (boltsG) {
    const NS = 'http://www.w3.org/2000/svg';
    const joints = [[110,215],[430,215],[270,145],[210,155],[530,155],[370,85],[110,300],[430,300],[210,240],[530,240],[270,300],[370,240]];
    const plates = [[104,377],[116,377],[424,377],[436,377],[204,317],[216,317],[524,317],[536,317]];
    const add = (x, y, r) => {
      const g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'boltg');
      g.dataset.o = `${x} ${y}`;
      const ring = document.createElementNS(NS, 'circle'); ring.setAttribute('class', 'bolt-ring');
      ring.setAttribute('cx', x); ring.setAttribute('cy', y); ring.setAttribute('r', r + 2.5);
      const c = document.createElementNS(NS, 'circle'); c.setAttribute('class', 'bolt');
      c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', r);
      g.append(ring, c); boltsG.append(g);
    };
    joints.forEach(([x, y]) => [[-5,-5],[5,-5],[-5,5],[5,5]].forEach(([dx, dy]) => add(x + dx, y + dy, 2.2)));
    plates.forEach(([x, y]) => add(x, y, 2));
  }

  /* ---------- loader ---------- */
  const pct = $('.loader__pct');
  let p = 0;
  const tick = setInterval(() => { p = Math.min(100, p + 7 + Math.random() * 12); if (pct) pct.textContent = Math.round(p); if (p >= 100) clearInterval(tick); }, 60);
  const reveal = () => {
    clearInterval(tick); if (pct) pct.textContent = 100;
    document.documentElement.classList.add('loaded');
    if (hasGsap) {
      gsap.from('.hero__title .ln>span', { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: .09, delay: .25 });
      gsap.from('.hero .eyebrow, .hero__sub, .hero__btns, .hero__spec', { y: 24, opacity: 0, duration: .9, ease: 'power3.out', stagger: .08, delay: .55 });
    }
  };
  window.addEventListener('load', () => setTimeout(reveal, 450));
  setTimeout(reveal, 2600);

  /* ---------- header, progreso, menú ---------- */
  const hdr = $('.hdr'), bar = $('.progress span');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    hdr.classList.toggle('is-solid', y > 40);
    hdr.classList.toggle('is-hidden', y > lastY && y > 400 && !document.body.classList.contains('menu-open'));
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const burger = $('.burger'), menu = $('.menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('.menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const navLinks = $$('.nav a');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));

  /* ---------- pasos del montaje (también sin GSAP) ---------- */
  const steps = $$('.assembly__steps li'), num = $('.assembly__num');
  const setStep = (i) => {
    steps.forEach((li, k) => li.classList.toggle('is-on', k === i));
    if (num) num.textContent = String(i + 1).padStart(2, '0');
  };

  /* ---------- animaciones ---------- */
  if (hasGsap) {
    gsap.registerPlugin(ScrollTrigger);

    // hero parallax
    gsap.to('.hero__bg img', { yPercent: 18, scale: 1.22, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__inner', { yPercent: -18, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'center center', end: 'bottom top', scrub: true } });

    // manifiesto palabra a palabra
    $$('.reveal-words').forEach(el => {
      el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
      gsap.fromTo(el.querySelectorAll('.w'), { opacity: .14 }, { opacity: 1, stagger: .05, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
    });

    // títulos y bloques
    $$('.h2, .intro__card, .vrow, .svc__item, .pitem, .acc details, .chips li, .contact__col > *, .ba__box').forEach(el => {
      gsap.from(el, { y: 40, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });

    // ESQUEMA DE MONTAJE
    const svg = $('.frame');
    const draw = (sel) => svg.querySelectorAll(sel);
    gsap.set(svg.querySelectorAll('.draw'), { strokeDashoffset: 1 });
    gsap.set(svg.querySelectorAll('.lbl, .callout, .found, .plate, .stamp'), { opacity: 0 });
    svg.querySelectorAll('.boltg').forEach(g => gsap.set(g, { svgOrigin: g.dataset.o, scale: 0, opacity: 0 }));
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    tl.addLabel('s0')
      .to(draw('.s0 .draw'), { strokeDashoffset: 0, duration: .8, stagger: .1 })
      .to(draw('.s0 .lbl'), { opacity: 1, duration: .3 }, '<.4')
      .addLabel('s1')
      .to(draw('.s1 .found'), { opacity: 1, duration: .4, stagger: .08 })
      .to(draw('.s1 .plate'), { opacity: 1, duration: .3, stagger: .08 }, '<.2')
      .to(draw('.s1 .callout'), { opacity: 1, duration: .3 })
      .addLabel('s2')
      .to(draw('.s1 .callout'), { opacity: 0, duration: .2 })
      .to(draw('.s2 .draw'), { strokeDashoffset: 0, duration: .8, stagger: .12 })
      .to(draw('.s2 .callout'), { opacity: 1, duration: .3 })
      .addLabel('s3')
      .to(draw('.s2 .callout'), { opacity: 0, duration: .2 })
      .to(draw('.s3 .draw'), { strokeDashoffset: 0, duration: .8, stagger: .1 })
      .to(draw('.s3 .callout'), { opacity: 1, duration: .3, stagger: .1 })
      .addLabel('s4')
      .to(draw('.s3 .callout'), { opacity: 0, duration: .2 })
      .to(draw('.boltg'), { scale: 1, opacity: 1, duration: .25, ease: 'back.out(3)', stagger: { each: .012, from: 'random' } })
      .to(draw('.s4 .callout'), { opacity: 1, duration: .3 })
      .addLabel('s5')
      .to(draw('.s4 .callout'), { opacity: 0, duration: .2 })
      .to(draw('.s5 .draw'), { strokeDashoffset: 0, duration: .6, stagger: .08 })
      .to(draw('.s5 .callout'), { opacity: 1, duration: .3 })
      .to(draw('.s5 .stamp'), { opacity: 1, duration: .3 })
      .from(draw('.s5 .stamp'), { scale: 1.6, svgOrigin: '545 39', duration: .4, ease: 'back.out(2)' }, '<')
      .to({}, { duration: .4 });

    const labels = ['s0','s1','s2','s3','s4','s5'].map(l => tl.labels[l] / tl.duration());
    ScrollTrigger.create({
      trigger: '.assembly__stage', start: 'top top', end: () => '+=' + innerHeight * 4,
      pin: true, scrub: .6, animation: tl, anticipatePin: 1,
      onUpdate: self => {
        let i = 0; labels.forEach((v, k) => { if (self.progress >= v - .001) i = k; });
        setStep(i);
        $('.assembly__bar span').style.transform = `scaleX(${self.progress})`;
      }
    });

    // proceso horizontal (solo escritorio)
    ScrollTrigger.matchMedia({
      '(min-width: 861px)': () => {
        const track = $('.process__track');
        const dist = () => track.scrollWidth - innerWidth;
        gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.process__pin', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: .6, invalidateOnRefresh: true } });
        $$('.pcard img').forEach(img => gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.process__pin', start: 'top top', end: () => '+=' + dist(), scrub: true } }));
      },
      '(max-width: 860px)': () => {
        $$('.pcard').forEach(c => gsap.from(c, { y: 50, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 88%', once: true } }));
      }
    });

    // Pie
    gsap.from('.ftr__giant', { yPercent: 60, ease: 'none', scrollTrigger: { trigger: '.ftr', start: 'top bottom', end: 'bottom bottom', scrub: true } });

    // botones magnéticos
    if (matchMedia('(pointer:fine)').matches) {
      $$('.magnetic').forEach(b => {
        b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 }); });
        b.addEventListener('mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.4)' }));
      });
    }
    addEventListener('load', () => ScrollTrigger.refresh());
  } else {
    // sin animaciones: los pasos se ven todos
    steps.forEach(li => li.classList.add('is-on'));
  }

  /* ---------- proyectos: filtro + lightbox ---------- */
  $$('.filters button').forEach(b => b.addEventListener('click', () => {
    $$('.filters button').forEach(x => x.classList.toggle('is-on', x === b));
    const f = b.dataset.f;
    $$('.pitem').forEach(it => it.classList.toggle('is-out', f !== 'all' && it.dataset.c !== f));
    if (hasGsap) { gsap.fromTo('.pitem:not(.is-out)', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .5, stagger: .05 }); ScrollTrigger.refresh(); }
  }));
  const lb = $('.lb');
  $$('.pitem').forEach(it => it.addEventListener('click', () => {
    const img = $('img', it);
    $('img', lb).src = img.src.replace(/w=\d+/, 'w=1800'); $('img', lb).alt = img.alt;
    $('.lb__cap', lb).textContent = $('figcaption b', it).textContent + ' · ' + $('figcaption span', it).textContent;
    lb.showModal ? lb.showModal() : lb.setAttribute('open', '');
  }));
  $('.lb__x').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

  /* ---------- antes / después ---------- */
  $$('.ba__box').forEach(box => {
    const r = $('input', box);
    r.addEventListener('input', () => box.style.setProperty('--pos', r.value + '%'));
  });

  /* ---------- formulario por pasos ---------- */
  const form = $('.wiz');
  const panes = $$('.wiz__pane', form), prev = $('.wiz__prev'), next = $('.wiz__next');
  let cur = 1;
  const m2 = form.elements.m2, m2out = $('.m2out');
  const fmtM2 = v => (+v >= 2000 ? 'más de 2000' : v);
  m2.addEventListener('input', () => m2out.textContent = fmtM2(m2.value));

  const show = (n) => {
    cur = n;
    panes.forEach(p => p.classList.toggle('is-on', +p.dataset.step === n));
    $('.wiz__step b').textContent = n;
    $('.wiz__bar span').style.width = (n / 3 * 100) + '%';
    prev.disabled = n === 1;
    next.textContent = n === 3 ? 'Ver y enviar →' : 'Siguiente →';
  };
  const err = (name, on) => { const e = $(`.err[data-for="${name}"]`, form); if (e) e.classList.toggle('show', on); return !on; };
  const valid = (n) => {
    const el = form.elements;
    if (n === 1) return err('tipo', !form.querySelector('input[name=tipo]:checked'));
    if (n === 2) return err('lugar', !el.lugar.value.trim());
    if (n === 3) {
      const telOk = el.tel.value.replace(/\D/g, '').length >= 9;
      const a = err('nombre', !el.nombre.value.trim() || !telOk);
      const b = err('rgpd', !el.rgpd.checked);
      return a && b;
    }
    return true;
  };
  form.addEventListener('change', e => { if (e.target.name === 'tipo') err('tipo', false); if (e.target.name === 'rgpd') err('rgpd', false); });

  const finish = () => {
    const el = form.elements, v = n => (form.querySelector(`[name=${n}]:checked`) || {}).value || '';
    const lines = [
      'Hola Urbanity Plus, quiero pedir presupuesto:',
      '',
      `• Tipo de obra: ${v('tipo')}`,
      `• Superficie aprox.: ${fmtM2(el.m2.value)} m²`,
      `• Municipio: ${el.lugar.value.trim()}`,
      `• Plazo: ${v('plazo')}`,
      `• ¿Planos o proyecto?: ${v('planos')}`,
      '',
      `• Nombre: ${el.nombre.value.trim()}`,
      `• Teléfono: ${el.tel.value.trim()}`,
    ];
    if (el.email.value.trim()) lines.push(`• Email: ${el.email.value.trim()}`);
    if (el.msg.value.trim()) lines.push('', `Detalles: ${el.msg.value.trim()}`);
    const txt = lines.join('\n');
    $('.wiz__sum').textContent = txt;
    $('.wa-send').href = `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
    $('.mail-send').href = `mailto:info@urbanityplus.es?subject=${encodeURIComponent('Presupuesto: ' + v('tipo'))}&body=${encodeURIComponent(txt)}`;
    panes.forEach(p => p.classList.remove('is-on'));
    form.classList.add('is-done'); $('.wiz__done').hidden = false;
    $('.wiz__bar span').style.width = '100%';
  };
  next.addEventListener('click', () => { if (!valid(cur)) return; cur < 3 ? show(cur + 1) : finish(); });
  prev.addEventListener('click', () => cur > 1 && show(cur - 1));
  $('.wiz__edit').addEventListener('click', () => { form.classList.remove('is-done'); $('.wiz__done').hidden = true; show(3); });
  form.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') { e.preventDefault(); next.click(); } });

  // los servicios rellenan el paso 1
  $$('[data-type]').forEach(a => a.addEventListener('click', () => {
    const r = form.querySelector(`input[name=tipo][value="${a.dataset.type}"]`);
    if (r) { r.checked = true; err('tipo', false); form.classList.remove('is-done'); $('.wiz__done').hidden = true; show(2); }
    else show(1);
  }));
})();
