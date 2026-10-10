import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui'

export default function Hero() {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <section id="topo" className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__intro">
          <Badge>Consultoria em educação</Badge>
          <h1>Gestão e finanças em equilíbrio para <span className="grad">instituições de ensino</span></h1>
          <p className="lead">Ajudamos escolas e instituições educacionais a decidir com clareza: da viabilidade administrativa à sustentabilidade econômico-financeira, com análise séria e acompanhamento de perto.</p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary btn--lg">Agendar uma conversa <ArrowRight size={18} /></a>
            <a href="#servicos" className="btn btn--ghost btn--lg">Conhecer os serviços</a>
          </div>
        </div>
      </div>
    </section>
  )
}
