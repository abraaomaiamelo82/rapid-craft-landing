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
  Smartphone
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-sales.jpeg.asset.json";
import logoImage from "@/assets/sales-logo.jpeg.asset.json";
import avatarTiago from "@/assets/avatar-tiago.jpg";
import avatarDenise from "@/assets/avatar-denise.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";

const phone = "5585988016749";
const formattedPhone = "+55 85 98801‑6749";
const whatsappText = encodeURIComponent("Olá! Gostaria de agendar um horário na Sales Barbearia Ancuri.");
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

const services = [
  { name: "Barba", price: "R$ 25,00", duration: "45 min", description: "A partir de R$ 25,00" },
  { name: "Corte Degradê", price: "R$ 30,00", duration: "45 min", description: "Corte moderno com transição suave" },
  { name: "Corte Degradê Navalhado", price: "R$ 30,00", duration: "45 min", description: "Acabamento ultra rente com navalha" },
  { name: "Corte Social", price: "R$ 30,00", duration: "45 min", description: "Corte clássico e elegante" },
  { name: "Degradê + Barba", price: "R$ 45,00", duration: "60 min", description: "Combo completo de estilo" },
  { name: "Pezinho", price: "R$ 10,00", duration: "15 min", description: "Apenas o contorno" },
  { name: "Risquinho", price: "R$ 10,00", duration: "15 min", description: "Detalhe artístico no corte" },
  { name: "Sobrancelha", price: "Consultar", duration: "15 min", description: "Design e limpeza" },
  { name: "Social + Barba", price: "R$ 45,00", duration: "60 min", description: "O clássico completo" },
];

const testimonials = [
  { name: "Tiago Alcântara", rating: 5, text: "Muito bom! Deixou meu cabelo e o cabelo dos meus filhos excelentes. Atendimento nota 10, ambiente limpo e voltarei sempre.", date: "3 semanas atrás", avatar: avatarTiago, role: "Cliente frequente" },
  { name: "Denise Nogueira", rating: 5, text: "Perfeita 🤩 nota infinita… ambiente acolhedor e profissionalismo em cada detalhe. Levo meu filho e ele adora!", date: "5 meses atrás", avatar: avatarDenise, role: "Cliente há 2 anos" },
  { name: "Marcos Oliveira", rating: 5, text: "Excelente atendimento e técnica impecável. O degradê ficou perfeito e a barba impecável. Recomendo fortemente.", date: "1 mês atrás", avatar: avatarMarcos, role: "Cliente novo" },
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
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="font-heading text-xl font-bold tracking-tight text-white md:text-2xl">
                SALES BARBEARIA <span className="text-primary">ANCURI</span>
              </h1>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="font-bold text-primary">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-1">(+100 avaliações)</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">Início</a>
            <a href="#servicos" className="text-sm font-medium transition-colors hover:text-primary">Serviços</a>
            <a href="#profissionais" className="text-sm font-medium transition-colors hover:text-primary">Profissionais</a>
            <a href="#avaliacoes" className="text-sm font-medium transition-colors hover:text-primary">Avaliações</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              className="hidden rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:block"
            >
              Meus Agendamentos
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Agendar agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-1000" style={{ backgroundImage: `url(${heroImage.url})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            A melhor experiência de Itaitinga
          </span>
          <h2 className="mb-6 font-heading text-5xl font-extrabold leading-tight text-white md:text-7xl animate-reveal-up">
            Uma nova experiência para uma <span className="italic text-primary">antiga tradição</span>.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground md:text-xl animate-reveal-up [animation-delay:200ms] text-balance">
            Excelência no atendimento, precisão no corte e o estilo que você merece em um ambiente exclusivo e sofisticado.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-reveal-up [animation-delay:400ms]">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/40 transition-all hover:scale-105 sm:w-auto"
            >
              <CalendarDays size={24} />
              Agendar agora
            </a>
            <div className="flex items-center gap-8 border-l border-white/10 pl-8 hidden md:flex">
              <div>
                <p className="text-2xl font-bold text-white">4.9</p>
                <p className="text-xs text-muted-foreground uppercase">Avaliação Google</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">+5k</p>
                <p className="text-xs text-muted-foreground uppercase">Atendimentos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="border-y border-white/5 bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {amenities.map((item) => (
              <div 
                key={item.label} 
                className="relative cursor-pointer transition-all duration-300 hover:scale-110 group/amenity"
                onMouseEnter={() => setActiveTooltip(item.label)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => setActiveTooltip(activeTooltip === item.label ? null : item.label)}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-2xl bg-white/5 p-4 text-primary backdrop-blur-sm transition-all duration-300 group-hover/amenity:bg-primary/20 group-hover/amenity:shadow-[0_0_20px_rgba(184,146,64,0.3)]">
                    <item.icon size={28} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                </div>
                {activeTooltip === item.label && (
                  <div className="absolute bottom-full left-1/2 mb-4 w-48 -translate-x-1/2 rounded-lg bg-card p-3 text-center text-xs shadow-xl border border-white/10 animate-in fade-in slide-in-from-bottom-2">
                    <p className="font-bold text-primary mb-1">{item.label}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-card border-r border-b border-white/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-10 relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse" />
              <div className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-primary/30 via-primary/5 to-transparent p-1 shadow-[0_0_50px_rgba(212,175,55,0.2)] ring-1 ring-primary/40">
                <img
                  src={logoImage.url}
                  alt="Sales Barbearia Ancuri"
                  className="size-56 rounded-full object-contain bg-background/60 p-3 md:size-72"
                />

              </div>
              <div className="mt-6">
                <span className="inline-block rounded-full bg-primary/10 px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/20 backdrop-blur-sm">
                  Nossa Casa
                </span>
              </div>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">Nossos <span className="italic text-primary">Serviços</span></h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
            <p className="mt-6 max-w-md text-muted-foreground">Técnicas modernas aliadas à precisão clássica.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="group glass-card overflow-hidden rounded-3xl p-8 backdrop-blur-sm animate-reveal-up" style={{ animationDelay: `${services.indexOf(service) * 100}ms` }}>
                <div className="mb-6 flex items-start justify-between">
                  <div className="rounded-2xl bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Scissors size={24} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                    <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                      <Clock size={12} /> {service.duration}
                    </p>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.name}</h3>
                <p className="mb-8 text-sm text-muted-foreground">{service.description}</p>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-bold text-white transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Agendar este serviço
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-8 font-heading text-4xl font-bold text-white">Onde nos <span className="text-primary">encontrar</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Endereço</h4>
                    <p className="text-muted-foreground">Av Dionísio Leonel Alencar, 2317 - 1209 - 61880-000, Ancuri - Itaitinga/CE</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horário de Atendimento</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex justify-between border-b border-white/5 pb-1"><span>Segunda a Sábado</span> <span>07:00 - 12:00 e 13:00 - 20:00</span></li>
                      <li className="flex justify-between pt-1"><span>Domingo</span> <span className="font-bold text-red-400">Fechado</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Formas de Pagamento</h4>
                    <div className="mt-3 flex gap-4 text-muted-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <Wallet size={20} />
                        <span className="text-[10px] uppercase font-bold">Dinheiro</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <CreditCard size={20} />
                        <span className="text-[10px] uppercase font-bold">Crédito</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone size={20} />
                        <span className="text-[10px] uppercase font-bold">Pix</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-card p-2 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.026405232491!2d-38.51465242502621!3d-3.8398459961340176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74ec81014cc67%3A0xe5a363a0a6713289!2sAv.%20Dion%C3%ADsio%20Leonel%20Alencar%2C%202317%20-%20Ancuri%2C%20Fortaleza%20-%20CE%2C%2060874-212!5e0!3m2!1spt-BR!2sbr!4v1715694852943!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl grayscale contrast-125 opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-16 font-heading text-4xl font-bold text-white">O que dizem nossos <span className="text-primary">clientes</span></h2>
          
          <div className="grid gap-8 md:grid-cols-3">
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

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                SALES BARBEARIA <span className="text-primary">ANCURI</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Elevando o padrão de barbearia no Ancuri. Cortes modernos, ambiente sofisticado e tradição em cada detalhe.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="rounded-full bg-white/5 p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><Instagram size={20} /></a>
                <a href="#" className="rounded-full bg-white/5 p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><Facebook size={20} /></a>
                <a href={whatsappUrl} className="rounded-full bg-white/5 p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"><MessageSquare size={20} /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div>
                <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Acesso Rápido</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><a href="#inicio" className="transition-colors hover:text-primary">Início</a></li>
                  <li><a href="#servicos" className="transition-colors hover:text-primary">Serviços</a></li>
                  <li><a href="#avaliacoes" className="transition-colors hover:text-primary">Avaliações</a></li>
                  <li><a href={whatsappUrl} className="transition-colors hover:text-primary">Agendar Horário</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Informações</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li><a href="#localizacao" className="transition-colors hover:text-primary">Localização</a></li>
                  <li><a href="#" className="transition-colors hover:text-primary">Favoritos</a></li>
                  <li><a href="#" className="transition-colors hover:text-primary">Meus Agendamentos</a></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white text-xs">Fale Conosco</h4>
              <p className="mb-4 text-lg font-bold text-primary">{formattedPhone}</p>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                className="inline-block rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Sales Barbearia Ancuri. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Termos de Uso</a>
              <a href="#" className="hover:text-primary">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
