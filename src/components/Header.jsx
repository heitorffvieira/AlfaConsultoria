import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV } from '../data'
import { useActiveSection } from '../hooks'
import { Logo } from './ui'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['servicos', 'diferenciais', 'processo', 'sobre'])

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header__bar">
        <a href="#topo" className="header__logo" aria-label="Alfa Consultoria, início"><Logo /></a>
        <nav className="header__nav" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? 'is-active' : ''}>{n.label}</a>
          ))}
        </nav>
        <a href="#contato" className="btn btn--primary btn--sm header__cta">Falar com a Alfa</a>
        <button className="header__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className="header__drawer">
        {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        <a href="#contato" className="btn btn--primary" onClick={() => setOpen(false)}>Falar com a Alfa <ArrowRight size={18} /></a>
      </div>
    </header>
  )
}
