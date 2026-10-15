import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MessageCircle, Mail } from 'lucide-react'
import { SERVICES, PILLARS, STEPS, SEGMENTS, MARQUEE, CONTACT, whatsappUrl } from '../data'
import logoAlfa from '../logoAlfa.png'
import { Badge, Icon, Reveal, Logo } from './ui'

export function Marquee({ items = MARQUEE, label }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-label={label}>
      <div className="marquee__track" aria-hidden="true">
        {row.map((t, i) => <span key={i} className="marquee__item">{t}</span>)}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <Reveal className="section__head">
          <Badge>O que fazemos</Badge>
          <h2>Dois eixos para uma gestão educacional sólida</h2>
          <p className="lead">Atuamos nas duas frentes que sustentam uma instituição de ensino: a organização administrativa e o equilíbrio financeiro.</p>
        </Reveal>
        <div className="services">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} as="article" className="card service" delay={i * 120}>
              <span className="service__icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((it) => <li key={it}><Icon name="check" size={16} />{it}</li>)}
              </ul>
              <a href="#contato" className="link">Conversar sobre este serviço <ArrowRight size={16} /></a>
              <i className="card__line" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pillars() {
  return (
    <section id="diferenciais" className="section section--alt">
      <div className="container split">
        <Reveal className="split__lead">
          <Badge>Nosso jeito de trabalhar</Badge>
          <h2>Por trás de uma boa decisão existe uma análise bem feita</h2>
          <p className="lead">Consultoria útil é a que o gestor consegue aplicar. Por isso unimos rigor técnico e conhecimento do dia a dia das instituições de ensino.</p>
        </Reveal>
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} className="pillar" delay={i * 90}>
              <span className="pillar__icon"><Icon name={p.icon} /></span>
              <div><h3>{p.title}</h3><p>{p.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <Reveal className="about__visual" aria-hidden="true">
          <div className="orb"><Logo withText={false} /></div>
          <span className="about__chip about__chip--a">Viabilidade</span>
          <span className="about__chip about__chip--b">Sustentabilidade</span>
        </Reveal>
        <Reveal className="about__text" delay={100}>
          <Badge>Sobre a Alfa</Badge>
          <h2>Não somos apenas consultores.</h2>
          <p>A Alfa Consultoria nasceu para apoiar quem gerencia educação e precisa de respostas claras para decisões difíceis: expandir, investir, reorganizar ou garantir que a instituição siga de pé.</p>
          <p>Trabalhamos com <strong>análise administrativa</strong> e <strong>planejamento econômico-financeiro</strong> de forma integrada, porque uma instituição só é sustentável quando a gestão e os números caminham juntos.</p>
          <a href="#contato" className="link">Fale com a nossa equipe <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  )
}

export function Process() {
  const ref = useRef(null)
  const [p, setP] = useState(0)
  useEffect(() => {
    const on = () => {
      const r = ref.current.getBoundingClientRect()
      const h = window.innerHeight
      setP(Math.max(0, Math.min(1, (h * 0.6 - r.top) / r.height)))
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return (
    <section id="processo" className="section section--alt">
      <div className="container">
        <Reveal className="section__head">
          <Badge>Como trabalhamos</Badge>
          <h2>Do diagnóstico ao resultado, em cinco etapas</h2>
          <p className="lead">Um processo estruturado para transformar um desafio de gestão em um plano que funciona.</p>
        </Reveal>
        <ol className="timeline" ref={ref} style={{ '--p': p }}>
          <span className="timeline__rail" aria-hidden="true"><i /></span>
          {STEPS.map((s, i) => (
            <li key={s.title} className={`step ${p * STEPS.length > i + 0.15 ? 'is-on' : ''}`}>
              <span className="step__dot" aria-hidden="true" />
              <span className="step__icon"><Icon name={s.icon} size={18} /></span>
              <small>Etapa {i + 1}</small>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Segments() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="section__head">
          <Badge>Para quem</Badge>
          <h2>Feita para quem gerencia educação</h2>
        </Reveal>
      </div>
      <div className="pills">
        <Marquee items={SEGMENTS} label="Tipos de instituição atendidas" />
        <Marquee items={[...SEGMENTS].reverse()} label="" />
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section id="contato" className="cta">
      <div className="cta__glow" aria-hidden="true" />
      <div className="container cta__inner">
        <h2>O futuro da sua instituição começa com uma boa conversa.</h2>
        <p className="lead">Conte o momento da sua instituição. Respondemos com os próximos passos, sem compromisso.</p>
        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar pelo WhatsApp</a>
          <a className="btn btn--ghost btn--lg" href={`mailto:${CONTACT.email}`}><Mail size={18} /> Enviar e-mail</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img className="logo__mark footer__logo" src={logoAlfa} alt="Alfa Consultoria" />
          <p>Consultoria e assessoria em educação para uma gestão clara e sustentável.</p>
        </div>
        <div><h4>Serviços</h4><a href="#servicos">Gestão e viabilidade administrativa</a><a href="#servicos">Sustentabilidade econômico-financeira</a></div>
        <div><h4>Empresa</h4><a href="#sobre">Sobre</a><a href="#processo">Processo</a><a href="#diferenciais">Diferenciais</a></div>
        <div><h4>Contato</h4><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Alfa Consultoria. Todos os direitos reservados.         <span>Desenvolvido por <a href="https://www.instagram.com/crystallcode/" target="_blank" rel="noreferrer">Crystal Code</a>.</span></span>
        <span>Consultoria em educação.</span>
      </div>
    </footer>
  )
}
