'use client';
import { site } from './config';
import { useEffect, useRef, useState } from 'react';

const Arrow = () => <span aria-hidden>↗</span>;

export default function Page() {
  const [menu, setMenu] = useState(false);
  const [counts, setCounts] = useState<number[]>(site.stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Trigger the counter animation once the stats section enters the viewport.
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(site.stats.map((s) => Math.round(s.value * eased)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma conversa com ' + site.name + '.'
  )}`;
  const cta = 'Fale com o escritório';
  const tickerItems = site.areas.map((a) => a[0]);
  const tickerText = [...tickerItems, ...tickerItems, ...tickerItems].join(' · ') + ' · ';

  return (
    <main className={`theme-${site.theme}`}>
      <header>
        <a className="brand" href="#inicio">
          <img src="/logo.jpg" alt={site.name} className="brandLogo" />
          <span>{site.short}</span>
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="nav"
          aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
        >
          {menu ? 'Fechar' : 'Menu'}
        </button>
        <nav id="nav" className={menu ? 'open' : ''} aria-label="Navegação principal">
          <a href="#atuacao" onClick={() => setMenu(false)}>Atuação</a>
          <a href="#numeros" onClick={() => setMenu(false)}>Números</a>
          <a href="#escritorio" onClick={() => setMenu(false)}>Escritório</a>
          <a href="#contato" onClick={() => setMenu(false)}>Contato</a>
          <a className="navCta" href={wa}>Agendar <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img src={site.image} alt="Recepção do escritório Seno Petri Advogados Associados" fetchPriority="high" />
        <div className="veil" />
        <div className="seal" aria-hidden="true">
          <span className="sealYear">{site.foundedYear}</span>
          <small>DESDE</small>
        </div>
        <div className="heroCopy reveal">
          <small>{site.kicker}</small>
          <h1>{site.title}</h1>
          <p>{site.intro}</p>
          <div className="actions">
            <a className="primary" href={wa}>{cta} <Arrow /></a>
            <a className="textLink" href="#atuacao">Conheça a atuação ↓</a>
          </div>
        </div>
        <div className="scroll">Role para descobrir</div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="tickerTrack">
          <span>{tickerText}</span>
          <span>{tickerText}</span>
        </div>
      </div>

      <section className="stats" id="numeros" ref={statsRef}>
        <div className="sectionHead reveal">
          <span>01 · NÚMEROS QUE CONTAM UMA HISTÓRIA</span>
          <h2>Décadas se traduzem<br />em confiança.</h2>
          <p>Cada número abaixo é resultado de trabalho contínuo — não de um único caso, mas de gerações de clientes atendidos.</p>
        </div>
        <div className="statGrid">
          {site.stats.map((s, i) => (
            <div className="statItem reveal" key={s.label}>
              <strong>{counts[i]}{s.suffix}</strong>
              <small>{s.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="manifest reveal">
        <span>02 · NOSSA VISÃO</span>
        <blockquote>&ldquo;{site.quote}&rdquo;</blockquote>
      </section>

      <section className="areas" id="atuacao">
        <div className="sectionHead reveal">
          <span>03 · ÁREAS DE ATUAÇÃO</span>
          <h2>Direito explicado<br />com clareza.</h2>
          <p>Cada demanda começa com escuta atenta, análise responsável e orientação objetiva sobre os caminhos possíveis.</p>
        </div>
        <div className="areaGrid">
          {site.areas.map((a, i) => (
            <article className="reveal" key={a[0]}>
              <i>0{i + 1}</i>
              <h3>{a[0]}</h3>
              <p>{a[1]}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="escritorio">
        <div className="aboutVisual reveal">
          <img src="/detail.png" alt="Fachada do escritório Seno Petri Advogados Associados" loading="lazy" decoding="async" />
          <div className="stamp">{site.monogram}<small>PARAUAPEBAS · PA</small></div>
        </div>
        <div className="aboutCopy reveal">
          <span>04 · O ESCRITÓRIO</span>
          <h2>Presença que<br />atravessa gerações.</h2>
          <p>{site.about}</p>
          <ul>
            {site.values.map((v) => (
              <li key={v}><b>✓</b>{v}</li>
            ))}
          </ul>
          <a className="textLink" href={wa}>Converse sobre seu caso <Arrow /></a>
        </div>
      </section>

      <section className="timeline">
        <div className="sectionHead reveal">
          <span>05 · TRAJETÓRIA</span>
          <h2>Uma história construída<br />passo a passo.</h2>
        </div>
        <div className="timelineList">
          {site.milestones.map((m, i) => (
            <article className="reveal" key={m[0]}>
              <b>0{i + 1}</b>
              <h3>{m[0]}</h3>
              <p>{m[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contactTitle reveal">
          <small>06 · CONTATO</small>
          <h2>Vamos conversar?</h2>
          <p>Agende uma conversa inicial para apresentar sua demanda ao escritório.</p>
          <a className="primary light" href={wa}>{cta} <Arrow /></a>
        </div>
        <div className="contactInfo reveal">
          <div>
            <small>ENDEREÇO</small>
            <p>{site.address}</p>
            <a href={site.map}>Ver no Google Maps <Arrow /></a>
          </div>
          <div>
            <small>TELEFONE / WHATSAPP</small>
            <p>{site.phone}</p>
          </div>
          <div>
            <small>E-MAIL</small>
            <p>{site.email}</p>
          </div>
          {site.instagram && (
            <div>
              <small>INSTAGRAM</small>
              <a href={site.instagram}>Acessar perfil <Arrow /></a>
            </div>
          )}
        </div>
      </section>

      <footer>
        <div className="brand">
          <img src="/logo.jpg" alt={site.name} className="brandLogo" />
          <span>{site.short}</span>
        </div>
        <p>Conteúdo informativo. Cada situação jurídica exige análise individual.</p>
        <span>© 2026 {site.short} · Desde {site.foundedYear}</span>
      </footer>
      <a className="whatsapp" href={wa} aria-label="Falar pelo WhatsApp">WhatsApp</a>
    </main>
  );
}
