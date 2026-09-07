import { useState, type ReactNode } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Check, Clock3, Globe2, MapPin, Menu, Package, ShieldCheck, Sparkles, Star, X } from 'lucide-react'

const links = {
  instagram: 'https://www.instagram.com/ebedistribuidora/',
  facebook: 'https://www.facebook.com/emporiobemestarsaudepravida',
  maps: 'https://maps.app.goo.gl/en1EANhtg9dKGBY67',
}

const categories = [
  ['Vitaminas e minerais', 'Opções para complementar sua rotina de cuidados e alimentação.', ShieldCheck],
  ['Suplementos esportivos', 'Produtos voltados à prática esportiva, energia, recuperação e desempenho.', Sparkles],
  ['Produtos naturais', 'Uma grande variedade de opções naturais para o dia a dia.', Package],
  ['Grãos, sementes e cereais', 'Alternativas versáteis para uma alimentação mais equilibrada.', Check],
  ['Óleos e extratos naturais', 'Produtos naturais para diferentes formas de cuidado e utilização.', Sparkles],
  ['Cuidados pessoais', 'Seleção complementar de cosméticos e produtos para o autocuidado.', ShieldCheck],
] as const

const reviews = [
  ['RM', 'Rosa Maria', 'Local bem receptivo e com produtos muito bons.'],
  ['NC', 'Novo Cosmo', 'Ótimo lugar, preços bons de suplementos! Sempre compro e recomendo.'],
  ['FF', 'Fernando José Ferreira', 'Minha experiência foi excelente. Fui muito bem recebido e encontrei produtos de ótima qualidade, com preços acessíveis. Recomendo.'],
  ['JM', 'Jefferson Marques', 'Uma grande variedade e excelente atendimento.'],
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'EBE Distribuidora | Vitaminas, Suplementos e Produtos Naturais' },
      { name: 'description', content: 'Vitaminas, suplementos e produtos naturais em Marituba–PA. Conheça a EBE Distribuidora, confira nossos horários e encontre a melhor rota.' },
      { name: 'theme-color', content: '#0a280f' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'EBE Distribuidora | Marituba–PA' },
      { property: 'og:description', content: 'Vitaminas, suplementos e produtos naturais para sua rotina.' },
      { property: 'og:image', content: '/assets/ebe-logo.png' },
      { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'icon', type: 'image/png', href: '/assets/ebe-logo.png' }],
  }),
  component: Home,
})

function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noreferrer noopener" className={className}>{children}</a>
}

function Logo({ compact = false }: { compact?: boolean }) {
  return <img src="/assets/ebe-logo.png" alt="EBE Distribuidora — Empório Bem Estar Distribuidora" className={compact ? 'h-10 w-24 object-contain object-left' : 'h-16 w-52 object-contain'} />
}

function Stars({ small = false }: { small?: boolean }) {
  return <span className="flex gap-0.5 text-accent" aria-label="5 estrelas"><Star className={small ? 'h-3.5 w-3.5 fill-current' : 'h-4 w-4 fill-current'} />{[1, 2, 3, 4].map((item) => <Star key={item} className={small ? 'h-3.5 w-3.5 fill-current' : 'h-4 w-4 fill-current'} />)}</span>
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mapVisible, setMapVisible] = useState(false)
  const year = new Date().getFullYear()
  const navItems = [['Início', '#inicio'], ['Produtos', '#produtos'], ['Diferenciais', '#diferenciais'], ['Avaliações', '#avaliacoes'], ['Localização', '#localizacao']]

  return (
    <main className="overflow-x-hidden bg-background pb-20 text-foreground lg:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="Voltar ao início"><Logo compact /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <ExternalLink href={links.maps} className="hidden min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:flex">Visitar a loja <ArrowRight className="h-4 w-4" /></ExternalLink>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Menu mobile">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center border-b border-border/60 text-sm font-semibold">{label}</a>)}<ExternalLink href={links.maps} className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">Visitar a loja</ExternalLink></nav>}
      </header>

      <section id="inicio" className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#0a280f] pt-20 text-[#f0efea]">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#9d9c7d]/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div className="relative z-10 max-w-2xl animate-fade-in">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d2b66b]"><span className="h-px w-8 bg-[#d2b66b]" />Vitaminas • Suplementos • Produtos naturais</p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Mais saúde, energia e bem-estar para a sua rotina.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#d7ddd2] sm:text-lg">Vitaminas, suplementos e uma grande variedade de produtos naturais, com qualidade, bons preços e um atendimento que faz a diferença.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ExternalLink href={links.maps} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d2b66b] px-6 font-bold text-[#0a280f] transition-transform hover:-translate-y-0.5">Como chegar <MapPin className="h-4 w-4" /></ExternalLink><a href="#produtos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#8c9d87] px-6 font-bold text-[#f0efea] transition-colors hover:border-[#d2b66b] hover:text-[#d2b66b]">Conhecer os produtos <ArrowRight className="h-4 w-4" /></a></div>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#d7ddd2]"><Stars /> <span><strong className="text-[#f0efea]">4,8 no Google</strong> — 13 avaliações</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end"><div className="absolute -inset-3 rounded-[2rem] border border-[#d2b66b]/30" /><div className="relative overflow-hidden rounded-[1.5rem] bg-[#0a280f] shadow-2xl"><img src="/assets/ebe-logo.png" alt="Logo oficial da EBE Distribuidora" className="h-auto w-full object-contain" /></div><p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[#9eaf99]">Empório Bem Estar Distribuidora · Marituba–PA</p></div>
        </div>
      </section>

      <section className="border-b border-border bg-card"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-5 py-0 sm:grid-cols-4 sm:divide-y-0 lg:px-8">{[['4,8', 'estrelas no Google'], ['Ampla', 'variedade de produtos'], ['Bons', 'preços acessíveis'], ['Sempre perto', 'atendimento elogiado']].map(([value, label]) => <div key={label} className="flex min-h-32 flex-col justify-center px-4 py-5 first:pl-0 sm:px-6"><strong className="font-serif text-xl text-primary sm:text-2xl">{value}</strong><span className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{label}</span></div>)}</div></section>

      <section id="produtos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Um só lugar para sua rotina</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Tudo para complementar seu bem-estar</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Encontre produtos para diferentes objetivos, necessidades e momentos da sua rotina.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([title, description, Icon], index) => <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></div><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-7 text-lg font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div><ExternalLink href={links.instagram} className="mt-10 inline-flex min-h-11 items-center gap-2 font-bold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-foreground">Veja novidades no Instagram <ArrowRight className="h-4 w-4" /></ExternalLink></section>

      <section id="diferenciais" className="bg-secondary/60"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-28"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Por que escolher a EBE</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Variedade, qualidade e atendimento de verdade</h2></div><div><p className="text-lg leading-8 text-muted-foreground">A EBE Distribuidora reúne vitaminas, suplementos e uma ampla variedade de produtos naturais para diferentes necessidades e estilos de vida. Nossa proposta é oferecer produtos selecionados, preços acessíveis e um atendimento próximo, ajudando cada cliente a encontrar as melhores opções para a sua rotina.</p><div className="mt-10 grid gap-6 sm:grid-cols-3">{[['01', 'Variedade em um só lugar'], ['02', 'Produtos selecionados'], ['03', 'Atendimento receptivo']].map(([number, title]) => <div key={number} className="border-t border-primary/30 pt-4"><span className="font-mono text-xs text-accent-foreground">{number}</span><h3 className="mt-6 font-bold text-primary">{title}</h3></div>)}</div></div></div></section>

      <section id="avaliacoes" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Experiências reais</p><h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Quem conhece, recomenda</h2></div><div className="flex items-center gap-4"><span className="font-serif text-4xl text-primary">4,8</span><div><Stars /><p className="mt-1 text-xs text-muted-foreground">Com base em 13 avaliações</p></div></div></div><div className="mt-12 grid gap-4 sm:grid-cols-2">{reviews.map(([initials, name, quote]) => <article key={name} className="rounded-2xl border border-border bg-card p-6"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{initials}</div><div><h3 className="font-bold text-primary">{name}</h3><p className="text-xs text-muted-foreground">Avaliação do Google</p></div><Stars small /></div><p className="mt-6 text-sm leading-6 text-muted-foreground">“{quote}”</p></article>)}</div></section>

      <section id="localizacao" className="bg-[#0a280f] text-[#f0efea]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28"><div className="min-h-[360px] overflow-hidden rounded-2xl bg-[#102f17]">{mapVisible ? <iframe title="Mapa da EBE Distribuidora" src="https://www.google.com/maps?q=Rua%20do%20Fio%2C%2066%2C%20Novo%20Horizonte%2C%20Marituba%20PA%2067208-130&output=embed" loading="lazy" className="h-full min-h-[360px] w-full border-0" /> : <button type="button" onClick={() => setMapVisible(true)} className="flex h-full min-h-[360px] w-full flex-col items-center justify-center gap-4 border border-[#789072]/40 text-center transition-colors hover:bg-[#153c1d]"><MapPin className="h-9 w-9 text-[#d2b66b]" /><span className="font-bold">Carregar mapa</span><span className="max-w-xs text-sm text-[#b9c6b5]">Veja como chegar à EBE Distribuidora em Marituba.</span></button>}</div><div className="flex flex-col justify-center"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d2b66b]">Visite a loja física</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Estamos perto de você</h2><p className="mt-6 flex gap-3 text-base leading-7 text-[#d7ddd2]"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#d2b66b]" />Rua do Fio, 66 — Novo Horizonte, Marituba–PA<br />CEP 67208-130</p><div className="mt-8 border-t border-[#789072]/40 pt-7"><div className="flex gap-3"><Clock3 className="h-5 w-5 shrink-0 text-[#d2b66b]" /><div><h3 className="font-bold">Horários</h3><p className="mt-2 text-sm leading-7 text-[#d7ddd2]">Segunda, quarta, sexta e sábado: 08:00–12:00 e 16:00–19:00<br />Terça e quinta: 08:00–12:00 e 16:00–18:30<br />Domingo: fechado</p></div></div></div><ExternalLink href={links.maps} className="mt-9 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#d2b66b] px-6 font-bold text-[#0a280f] transition-transform hover:-translate-y-0.5">Abrir rota no Google Maps <ArrowRight className="h-4 w-4" /></ExternalLink></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28"><div className="rounded-3xl border border-border bg-secondary/60 px-6 py-14 text-center sm:px-12"><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Conteúdos para o dia a dia</p><h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">Acompanhe a EBE nas redes sociais</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Veja produtos, novidades, dicas e ofertas publicadas pela loja.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><ExternalLink href={links.instagram} className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 text-left text-primary-foreground transition-transform hover:-translate-y-0.5"><Globe2 /><span><strong className="block">Instagram</strong><small className="font-normal text-primary-foreground/75">Confira nossos produtos e novidades.</small></span></ExternalLink><ExternalLink href={links.facebook} className="flex min-h-14 items-center justify-center gap-3 rounded-xl border border-primary/25 bg-card px-7 text-left text-primary transition-transform hover:-translate-y-0.5"><Globe2 /><span><strong className="block">Facebook</strong><small className="font-normal text-muted-foreground">Acompanhe as publicações da EBE.</small></span></ExternalLink></div></div></section>

      <section className="relative overflow-hidden bg-[#0a280f] px-5 py-24 text-center text-[#f0efea] sm:px-8"><div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d2b66b]/10 blur-3xl" /><div className="relative mx-auto max-w-3xl"><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Encontre o que precisa para cuidar melhor da sua rotina.</h2><p className="mx-auto mt-5 max-w-xl text-[#d7ddd2]">Visite a EBE Distribuidora e conheça nossa variedade de vitaminas, suplementos e produtos naturais.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><ExternalLink href={links.maps} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d2b66b] px-6 font-bold text-[#0a280f]">Como chegar <MapPin className="h-4 w-4" /></ExternalLink><ExternalLink href={links.instagram} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#789072] px-6 font-bold text-[#f0efea]">Ver no Instagram <Globe2 className="h-4 w-4" /></ExternalLink></div></div></section>

      <footer className="bg-[#061b0a] px-5 pb-8 pt-16 text-[#d7ddd2] lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-[#9eaf99]">Vitaminas, suplementos e produtos naturais para uma rotina com mais bem-estar.</p></div><div><h2 className="font-bold text-[#f0efea]">Visite a EBE</h2><p className="mt-4 text-sm leading-6">Rua do Fio, 66 — Novo Horizonte<br />Marituba–PA · CEP 67208-130</p><ExternalLink href={links.maps} className="mt-4 inline-block text-sm font-bold text-[#d2b66b]">Abrir no Google Maps</ExternalLink></div><div><h2 className="font-bold text-[#f0efea]">Horários</h2><p className="mt-4 text-sm leading-6">Seg, qua, sex e sáb: 08:00–12:00<br />e 16:00–19:00<br />Ter e qui: até 18:30<br />Domingo: fechado</p></div><div><h2 className="font-bold text-[#f0efea]">Navegação</h2><div className="mt-4 flex flex-col gap-3 text-sm">{navItems.slice(0, 4).map(([label, href]) => <a key={href} href={href} className="hover:text-[#d2b66b]">{label}</a>)}<ExternalLink href={links.facebook} className="hover:text-[#d2b66b]">Facebook</ExternalLink><ExternalLink href={links.instagram} className="hover:text-[#d2b66b]">Instagram</ExternalLink></div></div></div><div className="mx-auto mt-14 max-w-7xl border-t border-[#789072]/30 pt-6 text-xs text-[#9eaf99]">© {year} EBE Distribuidora · Empório Bem Estar Distribuidora</div></footer>
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card/95 p-2 shadow-lg backdrop-blur lg:hidden"><ExternalLink href={links.maps} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground"><MapPin className="h-4 w-4" />Como chegar</ExternalLink><ExternalLink href={links.instagram} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-secondary text-sm font-bold text-primary"><Globe2 className="h-4 w-4" />Instagram</ExternalLink></div>
    </main>
  )
}
