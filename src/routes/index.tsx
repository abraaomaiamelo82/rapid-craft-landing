import { createFileRoute } from "@tanstack/react-router";
import { 
  Scissors, 
  CalendarDays, 
  Star, 
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageSquare,
  Instagram,
  Share2,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const phone = "5585994255462";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário no Studio WL Barbeshop.")}`;

const services = [
  { name: "Corte Social", price: "R$ 35,00", duration: "40 min" },
  { name: "Corte Degradê", price: "R$ 40,00", duration: "45 min" },
  { name: "Corte Degradê Navalhado", price: "R$ 45,00", duration: "50 min" },
  { name: "Barba", price: "R$ 30,00", duration: "30 min" },
  { name: "Corte + Barba", price: "R$ 60,00", duration: "70 min" },
  { name: "Sobrancelha", price: "R$ 15,00", duration: "15 min" },
  { name: "Pézinho", price: "R$ 10,00", duration: "10 min" },
];

const testimonials = [
  { name: "Carlos Eduardo", text: "Melhor salão da cidade, atendimento sensacional e o tratamento top.", rating: 5 },
  { name: "Ricardo Souza", text: "Pessoal é muito profissional e muito atencioso, o corte é nota 10!!!", rating: 5 },
  { name: "Felipe Mendes", text: "Ambiente fantástico e profissionais que sabem exatamente o que fazem.", rating: 5 },
];

const professionals = [
  { name: "Wesley Lopes", role: "Master Barber", specialty: "Cortes Modernos & Barba" },
  { name: "Lucas Silva", role: "Barbeiro", specialty: "Degradê & Pigmentação" },
  { name: "Marcos Oliveira", role: "Barbeiro", specialty: "Cortes Clássicos" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      // Monday to Saturday: 08:00 - 19:00, Sunday: Closed
      if (day >= 1 && day <= 6 && hour >= 8 && hour < 19) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const shareSite = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Studio WL Barbeshop',
        text: 'Confira a melhor barbearia de Itaitinga!',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-600 selection:text-white">
      {/* Floating WhatsApp */}
      <a 
        href={whatsappUrl} 
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="Agendar via WhatsApp"
      >
        <MessageSquare className="text-white fill-white" size={28} />
      </a>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-yellow-700/20 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex flex-col">
            <h1 className="font-heading text-lg font-bold tracking-tight text-white md:text-2xl">Studio WL <span className="text-yellow-600">Barbeshop</span></h1>
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-yellow-500/80">
              <Star size={10} className="fill-yellow-500" />
              <span>5,0 (151 avaliações no Google)</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium">
            {['Início', 'Serviços', 'Profissionais', 'Avaliações', 'Localização', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o').replace('á', 'a')}`} className="hover:text-yellow-600 transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={whatsappUrl} className="hidden sm:flex items-center gap-2 rounded-full border border-yellow-600 px-6 py-2 text-xs font-bold uppercase hover:bg-yellow-600 hover:text-black transition-all">Agendar agora</a>
            <button className="lg:hidden text-yellow-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-yellow-700/20 py-8 px-4 flex flex-col gap-6 animate-reveal-up">
            {['Início', 'Serviços', 'Profissionais', 'Avaliações', 'Localização', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o').replace('á', 'a')}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-heading font-bold">{item}</a>
            ))}
            <a href={whatsappUrl} className="w-full text-center rounded-full bg-yellow-600 py-4 font-bold uppercase tracking-widest">Agendar agora</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.2] transition-transform duration-1000 hover:scale-105" style={{backgroundImage: "url('/images/hero.jpg')"}} />
        <div className="relative text-center px-4 max-w-5xl animate-reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-600/10 px-6 py-2 mb-8 border border-yellow-600/30">
            <Star className="fill-yellow-600 text-yellow-600" size={14} />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">5,0 ⭐ — 151 avaliações no Google</span>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">Mais que um corte,<br />é uma <span className="text-yellow-600 italic">experiência.</span></h2>
          <p className="text-zinc-400 text-sm md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">Equipe de profissionais especializados, dedicados a transformar seu visual com excelência e sofisticação.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-600 px-10 py-5 text-sm md:text-base font-bold text-black hover:bg-yellow-500 hover:scale-105 transition-all shadow-xl shadow-yellow-600/20 uppercase tracking-widest">
              Agendar agora <ChevronRight size={20} />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-sm md:text-base font-bold hover:bg-white/10 transition-all uppercase tracking-widest">Ver serviços</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="size-16 bg-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-yellow-600/20">
            <Scissors className="text-yellow-600" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Barbearia Premium em <span className="text-yellow-600">Itaitinga</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
            O Studio WL Barbeshop nasceu da paixão pelo cuidado masculino. Nossa equipe de profissionais especializados é dedicada a proporcionar não apenas um corte, mas uma experiência completa de cuidado, estilo e bem-estar em um ambiente moderno e exclusivo.
          </p>
          <div className="inline-block bg-zinc-900 border border-yellow-600/30 px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Nota no Google</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-600 text-yellow-600" />)}
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Avaliações</p>
                <p className="text-2xl font-bold">151+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs">Exclusividade</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2">Nossos <span className="text-yellow-600 italic">Serviços</span></h2>
            </div>
            <p className="text-zinc-500 max-w-md text-sm">Oferecemos tratamentos completos para o homem moderno, unindo técnicas clássicas e tendências contemporâneas.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-yellow-600 transition-colors">{s.name}</h3>
                    <Clock size={16} className="text-zinc-600" />
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">{s.price}</p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">{s.duration}</span>
                  <a href={whatsappUrl} className="text-[11px] font-bold border border-yellow-600/30 px-6 py-2 rounded-full uppercase hover:bg-yellow-600 hover:text-black transition-all">Agendar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section id="profissionais" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Nossa <span className="text-yellow-600 italic">Equipe</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {professionals.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
                <div className="aspect-[3/4] bg-zinc-800 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
                   {/* Placeholder for real images */}
                   <Scissors size={64} className="text-zinc-700/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                  <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-1">{p.role}</p>
                  <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                  <p className="text-zinc-400 text-sm font-light">{p.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold">O que dizem <span className="text-yellow-600 italic">nossos clientes</span></h2>
            <p className="text-zinc-500 mt-4 uppercase tracking-[0.2em] text-xs font-bold">Nota Geral: 5,0 ⭐ (151 Avaliações)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative">
                <div className="absolute top-8 right-8 text-yellow-600/20">
                  <Star size={48} className="fill-current" />
                </div>
                <div className="flex gap-1 text-yellow-600 mb-6">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-yellow-600"/>)}
                </div>
                <p className="text-zinc-300 mb-8 italic text-lg font-light leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-yellow-600/20 flex items-center justify-center border border-yellow-600/20 text-yellow-600 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="localizacao" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs">Onde estamos</span>
              <h2 className="text-4xl font-heading font-bold mt-4 mb-8">Nossa <span className="text-yellow-600 italic">Unidade</span></h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-yellow-600/10 flex items-center justify-center shrink-0 border border-yellow-600/20">
                    <MapPin className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Itaitinga, Ceará</p>
                    <p className="text-zinc-400 font-light">Rua Joaquim Lopes da Costa, 819 - Centro, Itaitinga - CE, 61880-000</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-yellow-600/10 flex items-center justify-center shrink-0 border border-yellow-600/20">
                    <Clock className="text-yellow-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-lg">Horário de Funcionamento</p>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${isOpen ? 'bg-green-500/10 border-green-500/50 text-green-500' : 'bg-red-500/10 border-red-500/50 text-red-500'}`}>
                        {isOpen ? 'Aberto agora' : 'Fechado'}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-light">Segunda a Sábado: 08:00 às 19:00</p>
                    <p className="text-zinc-500 text-xs mt-1">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-12">
                <a href="https://maps.google.com/?q=Studio+WL+Barbeshop+Itaitinga" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs hover:bg-zinc-200 transition-all">
                  <ExternalLink size={16} /> Ver rotas
                </a>
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-bold uppercase text-xs hover:bg-white/10 transition-all">
                  <Phone size={16} /> Ligar agora
                </a>
              </div>
            </div>
            <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden grayscale border border-white/10 hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.907994689!2d-38.52864195!3d-3.957581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753b89098492d%3A0xc3f5c93c4e36567c!2sR.%20Joaquim%20Lopes%20da%20Costa%2C%20819%20-%20Itaitinga%2C%20CE%2C%2061880-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contato" className="py-16 bg-black border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-3xl font-heading font-bold mb-4 tracking-tighter">Studio WL <span className="text-yellow-600 italic">Barbeshop</span></p>
          <p className="text-zinc-500 mb-10 text-sm font-light max-w-md mx-auto">Experiência premium de barbearia em Itaitinga. Tradição e modernidade para o seu visual.</p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://instagram.com/studiowlbarbeshop" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all">
              <Instagram size={20} />
            </a>
            <button onClick={shareSite} className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all">
              <Share2 size={20} />
            </button>
            <a href="https://www.google.com/search?q=Studio+WL+Barbeshop+Itaitinga#lrd=0x7c753b89098492d:0xc3f5c93c4e36567c,3" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all">
              <Star size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a href={whatsappUrl} className="inline-flex items-center gap-3 bg-yellow-600 px-10 py-5 rounded-full font-bold uppercase text-sm text-black hover:scale-105 transition-all shadow-xl shadow-yellow-600/10">
              Agendar via WhatsApp
            </a>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Studio WL Barbeshop © {new Date().getFullYear()} — Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
