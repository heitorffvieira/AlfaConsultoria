import { Building2, BarChart3, Search, Compass, Layers, Handshake, Ear, Map, Rocket, TrendingUp, Check } from 'lucide-react'
import { useInView } from '../hooks'
import mark from '../logo-mark.png'

const ICONS = { building: Building2, chart: BarChart3, search: Search, compass: Compass, layers: Layers, handshake: Handshake, ear: Ear, map: Map, rocket: Rocket, trend: TrendingUp, check: Check }
export function Icon({ name, size = 20, ...rest }) {
  const C = ICONS[name]
  return C ? <C size={size} strokeWidth={1.75} aria-hidden="true" {...rest} /> : null
}

export function Logo({ withText = true }) {
  return (
    <span className="logo">
      <img className="logo__mark" src={mark} alt="" />
    </span>
  )
}

export function Badge({ children }) {
  return <span className="badge"><i aria-hidden="true" />{children}</span>
}

export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const [ref, seen] = useInView({ threshold: 0.15 })
  return <Tag ref={ref} className={`reveal ${seen ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>{children}</Tag>
}
