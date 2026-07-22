import { createFileRoute } from "@tanstack/react-router";
import { 
  Scissors, 
  CalendarDays, 
  Wifi, 
  Car, 
  Accessibility, 
  Baby, 
  Star, 
  Instagram, 
  Facebook, 
  MessageSquare,
  MapPin,
  Clock,
  CreditCard,
  Wallet,
  Smartphone,
  Phone,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";
import heroAsset from "@/assets/hero-sales-v3.jpeg.asset.json";
const heroImage = heroAsset.url;
import logoAsset from "@/assets/sales-logo-v3.jpeg.asset.json";
const logoImage = logoAsset.url;
import wl9Asset from "@/assets/wl9.webp.asset.json";
import wl8Asset from "@/assets/wl8.webp.asset.json";
import iiiAsset from "@/assets/iii.jpg.asset.json";
const galleryImages = [
  { src: wl9Asset.url, alt: "Corte degradê com risco de navalha" },
  { src: wl8Asset.url, alt: "Corte moderno com acabamento preciso" },
];
const avatarTiago = "/images/avatar-tiago.jpg";
const avatarDenise = "/images/avatar-denise.jpg";
const avatarMarcos = "/images/avatar-marcos.jpg";

const phone = "5585988016749";
const formattedPhone = "+55 85 98801‑6749";
const whatsappText = encodeURIComponent("Olá! Gostaria de agendar um horário na Sales Barbearia Ancuri.");
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

const services = [
  { name: "Barba", price: "R$ 25,00", duration: "45 min", description: "A partir de R$ 25,00", image: "/images/barba.jpg" },
  { name: "Corte Degradê", price: "R$ 30,00", duration: "45 min", description: "Corte moderno com transição suave", image: "/images/corte.jpg" },
  { name: "Corte Degradê Navalhado", price: "R$ 30,00", duration: "45 min", description: "Acabamento ultra rente com navalha", image: "/images/corte.jpg" },
  { name: "Corte Social", price: "R$ 30,00", duration: "45 min", description: "Corte clássico e elegante", image: "/images/corte.jpg" },
  { name: "Degradê + Barba", price: "R$ 45,00", duration: "60 min", description: "Combo completo de estilo", image: "/images/tratamento.jpg" },
  { name: "Pezinho", price: "R$ 10,00", duration: "15 min", description: "Apenas o contorno", image: "/images/corte.jpg" },
  { name: "Risquinho", price: "R$ 10,00", duration: "15 min", description: "Detalhe artístico no corte", image: "/images/corte.jpg" },
  { name: "Sobrancelha", price: "Consultar", duration: "15 min", description: "Design e limpeza", image: "/images/tratamento.jpg" },
  { name: "Social + Barba", price: "R$ 45,00", duration: "60 min", description: "O clássico completo", image: "/images/tratamento.jpg" },
];

const testimonials = [
  { name: "Tiago Alcântara", rating: 5, text: "Muito bom! Deixou meu cabelo e o cabelo dos meus filhos excelentes. Atendimento nota 10, ambiente limpo e voltarei sempre.", date: "3 semanas atrás", avatar: avatarTiago, role: "Cliente frequente" },
  { name: "Denise Nogueira", rating: 5, text: "Perfeita 🤩 nota infinita… ambiente acolhedor e profissionalismo em cada detalhe. Levo meu filho e ele adora!", date: "5 meses atrás", avatar: avatarDenise, role: "Cliente há 2 anos" },
  { name: "Marcos Oliveira", rating: 5, text: "Excelente atendimento e técnica impecável. O degradê ficou perfeito e a barba impecável. Recomendo fortemente.", date: "1 mês atrás", avatar: avatarMarcos, role: "Cliente novo" },
];

const clientReviews = [
  { name: "Rafael Costa", role: "Cliente há 6 meses", date: "2 semanas atrás", text: "Cortei com o Marcos e fiquei impressionado com a atenção aos detalhes. Ambiente super organizado e cheiroso. Já virei cliente fixo!" },
  { name: "Juliana Mendes", role: "Mãe de cliente", date: "1 mês atrás", text: "Trago meu filho toda semana e ele já pede pra vir sozinho de tão bem que é tratado. Equipe paciente e capricho no acabamento." },
  { name: "Eduardo Farias", role: "Cliente frequente", date: "4 dias atrás", text: "Melhor barba da região, sem dúvida. Toalha quente, navalha bem afiada e um cheiro de barbearia raiz que eu amo." },
  { name: "Bruno Teixeira", role: "Cliente novo", date: "3 semanas atrás", text: "Cheguei sem hora marcada e fui super bem atendido. O corte ficou exatamente como eu queria, e olha que sou exigente 😅" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const amenities = [
    { icon: Wifi, label: "Wi-fi", description: "Conexão de alta velocidade gratuita" },
    { icon: Car, label: "Estacionamento", description: "Vagas privativas para clientes" },
    { icon: Accessibility, label: "Acessibilidade", description: "Ambiente adaptado para todos" },
    { icon: Baby, label: "Atende crianças", description: "Especialistas em corte kids" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-2xl transition-all duration-500 border-b border-white/[0.03]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="font-heading text-xl font-bold tracking-tighter text-white md:text-2xl">
                SALES BARBEARIA <span className="text-gradient-gold">ANCURI</span>
              </h1>
              <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                <span className="font-bold text-primary">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-1 opacity-60">(+100 reviews)</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 lg:flex">
            {["inicio", "servicos", "profissionais", "avaliacoes"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-[13px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-primary hover:tracking-[0.25em]"
              >
                {item === 'inicio' ? 'Início' : item === 'servicos' ? 'Serviços' : item === 'avaliacoes' ? 'Avaliações' : 'Profissionais'}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              className="hidden text-[13px] font-bold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-white sm:block"
            >
              Meus Horários
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              className="rounded-full bg-primary px-8 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
            >
              Agendar
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Layered background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${heroImage})`, opacity: 0.55 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]" />

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        {/* Corner ornaments */}
        <div className="pointer-events-none absolute left-8 top-28 hidden h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
        <div className="pointer-events-none absolute right-8 bottom-32 hidden h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Eyebrow */}
          <div className="mb-10 flex items-center justify-center gap-4 opacity-0 animate-fade-in [animation-delay:100ms] [animation-fill-mode:forwards]">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="inline-block rounded-full border border-primary/20 bg-primary/[0.04] px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary backdrop-blur-md">
              Desde 2015 · Itaitinga
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          {/* Headline */}
          <h2 className="mb-8 font-heading text-6xl font-extrabold leading-[1.05] tracking-tighter text-white md:text-8xl">
            <span className="block opacity-0 animate-reveal-up [animation-delay:200ms] [animation-fill-mode:forwards]">
              Tradição lapidada
            </span>
            <span className="block opacity-0 animate-reveal-up [animation-delay:400ms] [animation-fill-mode:forwards]">
              pela <span className="italic text-gradient-gold relative">
                modernidade
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </span>.
            </span>
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-balance opacity-0 animate-reveal-up [animation-delay:600ms] [animation-fill-mode:forwards]">
            Elevamos o conceito de barbearia a uma experiência sensorial completa, onde cada detalhe é projetado para o homem que não abre mão da excelência.
          </p>

          {/* CTA cluster */}
          <div className="flex flex-col items-center justify-center gap-8 opacity-0 animate-reveal-up [animation-delay:800ms] [animation-fill-mode:forwards] md:flex-row md:gap-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-primary px-10 py-5 text-[13px] font-bold uppercase tracking-[0.25em] text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.82_0.08_85_/_0.55)] transition-all duration-500 hover:shadow-[0_25px_70px_-10px_oklch(0.82_0.08_85_/_0.7)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <CalendarDays size={18} className="relative z-10 transition-transform duration-500 group-hover:rotate-[-8deg]" />
              <span className="relative z-10">Agendar Horário</span>
              <span className="relative z-10 flex size-6 items-center justify-center rounded-full bg-primary-foreground/10 transition-all duration-500 group-hover:bg-primary-foreground/20 group-hover:translate-x-1">
                <span className="text-sm">→</span>
              </span>
            </a>

            <div className="hidden items-center gap-10 border-l border-white/[0.06] pl-12 md:flex">
              <div className="text-left">
                <div className="mb-1 flex items-center gap-1">
                  <p className="font-heading text-3xl font-bold text-white leading-none">4.9</p>
                  <Star size={14} className="fill-primary text-primary" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Google Reviews</p>
              </div>
              <div className="h-10 w-px bg-white/[0.06]" />
              <div className="text-left">
                <p className="mb-1 font-heading text-3xl font-bold text-white leading-none">+5k</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Clientes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1200ms] [animation-fill-mode:forwards]">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">Explore</span>
            <div className="relative h-12 w-[1px] overflow-hidden bg-white/[0.06]">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Logo Section */}
      <section className="relative overflow-hidden bg-background py-10">
        <div className="mx-auto max-w-2xl px-6">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.03] bg-white/[0.01] p-2 transition-all duration-700 hover:border-primary/20">
            <img 
              src={iiiAsset.url} 
              alt="Sales Barbearia Signature" 
              className="aspect-[21/7] w-full rounded-2xl object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-background py-16 border-b border-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {amenities.map((item, idx) => (
              <div 
                key={item.label} 
                className="group flex flex-col items-center justify-center space-y-3 rounded-2xl border border-white/[0.03] bg-white/[0.01] p-6 text-center transition-all duration-700 hover:bg-white/[0.03] hover:border-primary/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-primary transition-all duration-500 group-hover:scale-110">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-0.5">
                  <p className="font-heading text-lg font-bold text-white tracking-tight">{item.label}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground opacity-50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl animate-pulse" />
              <div className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-1 shadow-[0_0_40px_rgba(199,165,100,0.15)] ring-1 ring-primary/30">
                <img
                  src={logoImage}
                  alt="Sales Barbearia Ancuri"
                  className="size-48 rounded-full object-contain bg-secondary p-4 md:size-56"
                />
              </div>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Nossos <span className="italic text-gradient-gold">Serviços</span></h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Técnicas modernas aliadas à precisão clássica.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.name} 
                className="group glass-card overflow-hidden rounded-2xl backdrop-blur-sm animate-reveal-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="h-full w-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-xl font-bold text-primary tracking-tighter">{service.price}</p>
                  </div>
                  <p className="mb-6 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-primary hover:text-primary-foreground hover:border-transparent active:scale-95"
                  >
                    Reservar agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 border-t border-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Galeria <span className="text-gradient-gold">Sales</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-white/60">Alguns cortes feitos aqui dentro da barbearia.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-secondary/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-[400px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/90">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Localização e Horários */}
      <section id="localizacao" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Bloco de Informações */}
            <div className="space-y-8 animate-reveal-up">
              <div>
                <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Nossa <span className="text-gradient-gold italic">Localização</span></h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="size-14 shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.03] text-primary border border-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-1">Endereço</h3>
                    <p className="text-lg text-white font-medium leading-relaxed">
                      Rua Joaquim Lopes da Costa, 819<br />
                      Centro, Itaitinga - CE, 61880-000
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="size-14 shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.03] text-primary border border-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-1">Horário de Funcionamento</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li className="flex justify-between gap-4"><span className="text-white">Segunda - Sexta:</span> <span>08:00 – 19:00</span></li>
                      <li className="flex justify-between gap-4"><span className="text-white">Sábado:</span> <span>08:00 – 18:00</span></li>
                      <li className="flex justify-between gap-4 text-primary/60"><span>Domingo:</span> <span>Fechado</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="size-14 shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.03] text-primary border border-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                    <div className="flex flex-col items-center">
                      <Wallet size={18} className="mb-0.5" />
                      <CreditCard size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50 mb-1">Pagamento</h3>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-white">
                      <span className="flex items-center gap-1.5"><div className="size-1 rounded-full bg-primary" /> Pix</span>
                      <span className="flex items-center gap-1.5"><div className="size-1 rounded-full bg-primary" /> Crédito</span>
                      <span className="flex items-center gap-1.5"><div className="size-1 rounded-full bg-primary" /> Débito</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Joaquim+Lopes+da+Costa,+819+-+Centro,+Itaitinga+-+CE,+61880000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-primary/30 bg-primary/5 px-10 py-5 text-[13px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_rgba(199,165,100,0.3)]"
                >
                  <MapPin size={18} />
                  <span>Ver rotas no Google Maps</span>
                </a>
              </div>
            </div>
            
            {/* Mapa */}
            <div className="relative animate-reveal-up [animation-delay:200ms]">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl transition-all duration-500 hover:border-primary/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.791539209736!2d-38.52737602422033!3d-3.9510522441957446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c752669e4f16b7%3A0x6715f07010476495!2sR.%20Joaquim%20Lopes%20da%20Costa%2C%20819%20-%20Centro%2C%20Itaitinga%20-%20CE%2C%2061880-000!5e0!3m2!1spt-BR!2sbr!4v1715697200000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full grayscale contrast-125 brightness-75 sepia-[.10] opacity-80 transition-all duration-700 hover:grayscale-0 hover:brightness-100 hover:sepia-0 hover:opacity-100 min-h-[250px] md:min-h-[350px]"
                  title="Localização da Sales Barbearia Ancuri"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-20 border-t border-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-12 font-heading text-3xl font-bold text-white">O que dizem nossos <span className="text-gradient-gold">clientes</span></h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col rounded-3xl border border-white/5 bg-card/40 p-8 text-left transition-all duration-300 hover:bg-card/60 hover:border-primary/20 animate-reveal-up" style={{ animationDelay: `${testimonials.indexOf(t) * 150}ms` }}>
                <div className="mb-4 flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-8 flex-1 italic text-muted-foreground">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="size-14 rounded-full object-cover ring-2 ring-primary/30 shadow-lg shadow-primary/10"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-[11px] uppercase tracking-wider text-primary/80">{t.role}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Agendar via WhatsApp"
      >
        <MessageSquare size={32} />
      </a>

      {/* Client Reviews - antes do rodapé */}
      <section id="depoimentos-clientes" className="py-20 border-t border-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Depoimentos <span className="text-gradient-gold">Verificados</span></h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clientReviews.map((r, idx) => (
              <article
                key={r.name}
                className="flex flex-col rounded-2xl border border-white/5 bg-card/40 p-6 text-left backdrop-blur-xl transition-all duration-500 hover:border-primary/25 hover:bg-card/60 animate-reveal-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </div>
                </div>
                <p className="mb-8 flex-1 italic leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 font-heading text-lg font-bold text-primary ring-2 ring-primary/20">
                    {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold text-white">{r.name}</p>
                    <p className="text-[11px] uppercase tracking-wider text-primary/80">{r.role}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-5xl font-bold text-white mb-8">
                Pronto para uma nova <span className="italic text-gradient-gold">perspectiva</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
                Junte-se à nossa comunidade de clientes que valorizam a estética e o bem-estar. O seu próximo grande corte começa aqui.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="size-14 flex items-center justify-center rounded-2xl bg-white/[0.03] text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">Contato Direto</p>
                    <p className="text-xl font-bold text-white">{formattedPhone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="size-14 flex items-center justify-center rounded-2xl bg-white/[0.03] text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">Localização</p>
                    <p className="text-white">Rua Joaquim Lopes da Costa, 819, Itaitinga, CE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end lg:items-end">
              <div className="mb-10 text-left lg:text-right">
                <p className="text-muted-foreground mb-4 opacity-40 font-medium">Fale conosco agora</p>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-primary px-16 py-7 text-[15px] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_20px_40px_rgba(199,165,100,0.3)] transition-all hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-white/20 transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                  <MessageSquare size={20} className="relative z-10" />
                  <span className="relative z-10">Agendar via WhatsApp</span>
                </a>
              </div>
              <div className="flex gap-8">
                {["Instagram", "Facebook", "Google Reviews"].map((social) => (
                  <a key={social} href="#" className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">{social}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-32 pt-10 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">© {new Date().getFullYear()} Sales Barbearia Ancuri. Todos os direitos reservados.</p>
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
