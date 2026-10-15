// Ajuste aqui os dados de contato e os textos principais.
export const CONTACT = {
  whatsapp: '5579999855459', // DDI + DDD + número, só dígitos
  email: 'alfa.consult28@gmail.com',
  message: 'Olá! Gostaria de conversar com a Alfa Consultoria.',
}
export const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.message)}`

export const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#processo', label: 'Processo' },
  { href: '#sobre', label: 'Sobre' },
]

export const SERVICES = [
  {
    id: 'administrativa',
    icon: 'building',
    title: 'Gestão e Viabilidade Administrativa',
    short: 'Consultoria e assessoria à gestão e viabilidade administrativa',
    text: 'Organizamos a estrutura, os fluxos e as decisões da instituição para que a operação funcione com clareza e sem desperdício.',
    items: [
      'Diagnóstico da estrutura e dos processos administrativos',
      'Estudo de viabilidade para novos projetos e unidades',
      'Organização de rotinas, responsabilidades e indicadores',
      'Apoio à tomada de decisão da mantenedora e da direção',
    ],
  },
  {
    id: 'financeira',
    icon: 'chart',
    title: 'Gestão e Sustentabilidade Econômico-Financeira',
    short: 'Consultoria e assessoria à gestão e sustentabilidade econômico-financeira',
    text: 'Colocamos os números a serviço da missão educacional: receitas, custos e investimentos em equilíbrio para a instituição crescer com segurança.',
    items: [
      'Análise de receitas, custos e resultado da instituição',
      'Planejamento orçamentário e fluxo de caixa',
      'Precificação de mensalidades e modelos de receita',
      'Plano de sustentabilidade de médio e longo prazo',
    ],
  },
]

export const PILLARS = [
  { icon: 'search', title: 'Decisão baseada em dados', text: 'Cada recomendação parte de um diagnóstico real da instituição, não de modelos genéricos.' },
  { icon: 'compass', title: 'Visão de longo prazo', text: 'Planos pensados para a continuidade da instituição, não apenas para o próximo semestre.' },
  { icon: 'layers', title: 'Operação viável', text: 'Soluções que cabem na rotina da equipe e que podem ser colocadas em prática de verdade.' },
  { icon: 'handshake', title: 'Acompanhamento próximo', text: 'Seguimos ao lado do gestor durante a implementação e ajustamos o plano quando a realidade pede.' },
]

export const STEPS = [
  { icon: 'ear', title: 'Escuta e diagnóstico', text: 'Entendemos a instituição, seu momento e os objetivos da gestão antes de propor qualquer mudança.' },
  { icon: 'chart', title: 'Análise de viabilidade', text: 'Cruzamos dados administrativos e financeiros para mostrar o que é possível, e em que ritmo.' },
  { icon: 'map', title: 'Plano de ação', text: 'Transformamos a análise em um plano claro, com prioridades, responsáveis e prazos.' },
  { icon: 'rocket', title: 'Implementação assistida', text: 'Acompanhamos a equipe na execução para que o plano saia do papel.' },
  { icon: 'trend', title: 'Acompanhamento e ajustes', text: 'Monitoramos os indicadores e ajustamos a rota conforme a instituição evolui.' },
]

export const SEGMENTS = [
  'Escolas particulares', 'Redes de ensino', 'Educação infantil', 'Ensino fundamental e médio',
  'Ensino superior', 'Cursos técnicos', 'Cursos livres', 'Mantenedoras', 'Novos projetos educacionais',
]
export const MARQUEE = ['Gestão administrativa', 'Viabilidade', 'Planejamento financeiro', 'Sustentabilidade', 'Indicadores', 'Orçamento', 'Fluxo de caixa', 'Estratégia educacional']
