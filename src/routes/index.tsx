import { createFileRoute } from "@tanstack/react-router";
import { 
  Scissors, 
  CalendarDays, 
  Wifi, 
  Car, 
  Accessibility, 
  Baby, 
  Star, 
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Users,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const phone = "5585994255462";
const whatsappText = encodeURIComponent("Olá! Gostaria de agendar um horário no Studio WL Barbeshop.");
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

const services = [
  { name: "Corte Social", price: "R$ 35,00", duration: "40 min" },
  { name: "Corte Degradê", price: "R$ 40,00", duration: "45 min" },
  { name: "Corte Degradê Navalhado", price: "R$ 45,00", duration: "50 min" },
  { name: "Barba", price: "R$ 30,00", duration: "30 min" },
  { name: "Corte + Barba", price: "R$ 60,00", duration: "70 min" },
  { name: "Sobrancelha", price: "R$ 15,00", duration: "15 min" },
  { name: "Pézinho", price: "R$ 15,00", duration: "15 min" },
  { name: "Hidratação Capilar", price: "R$ 25,00", duration: "20 min" },
  { name: "Pigmentação de Barba", price: "R$ 35,00", duration: "30 min" },
  { name: "Combo Completo", price: "R$ 70,00", duration: "80 min" },
];

const testimonials = [
  { name: "Carlos Eduardo", text: "Melhor salão da cidade, atendimento sensacional e o tratamento top.", rating: 5 },
  { name: "Ricardo Souza", text: "Pessoal é muito profissional e muito atencioso, o corte é nota 10!!!", rating: 5 },
  { name: "Felipe Mendes", text: "Ambiente fantástico e profissionais que sabem exatamente o que fazem.", rating: 5 },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkStatus = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return (day >= 1 && day <= 6 && hour >= 8 && hour < 19) ? "Aberto agora" : "Fechado";
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-yellow-700/30 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <h1 className="font-heading text-xl font-bold tracking-tight text-white md:text-2xl">
            Studio <span className="text-yellow-600">WL</span> Barbeshop
          </h1>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest">
            {['Início', 'Serviços', 'Profissionais', 'Avaliações', 'Localização'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o').replace('á', 'a')}`} className="hover:text-yellow-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <a href={whatsappUrl} className="hidden md:flex items-center gap-2 rounded-full border border-yellow-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-yellow-600 transition-all">
            Agendar agora
          </a>
          
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center brightness-50" />
        <div className="relative text-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-600/20 px-4 py-1 mb-6 border border-yellow-600/50">
            <Star className="fill-yellow-600 text-yellow-600" size={16} />
            <span className="text-sm font-bold">5,0 ⭐ (151 avaliações no Google)</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">Mais que um corte,<br />é uma <span className="text-yellow-600">experiência.</span></h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10">Equipe de profissionais especializados</p>
          <a href={whatsappUrl} className="inline-flex items-center gap-3 rounded-full bg-yellow-600 px-10 py-5 text-lg font-bold hover:scale-105 transition-all">
            Agendar agora <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Nossos <span className="text-yellow-600">Serviços</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-yellow-900/30 bg-zinc-900 p-6 flex flex-col justify-between hover:border-yellow-600 transition-all">
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <p className="text-yellow-600 font-bold text-lg">{s.price}</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={14}/> {s.duration}</span>
                  <a href={whatsappUrl} className="text-xs font-bold border border-white/20 px-3 py-1 rounded-lg hover:bg-white hover:text-black">Agendar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-yellow-900/30 bg-black text-center px-4">
        <h2 className="text-2xl font-heading font-bold mb-8">Studio <span className="text-yellow-600">WL</span> Barbeshop</h2>
        <div className="flex justify-center gap-4 mb-8">
          <a href={whatsappUrl} className="bg-yellow-600 px-6 py-3 rounded-full font-bold">Agendar via WhatsApp</a>
        </div>
        <p className="text-gray-500 mb-4">Rua Joaquim Lopes da Costa, 819 - Centro, Itaitinga - CE</p>
        <p className="text-sm font-bold text-yellow-600 uppercase">Status: {checkStatus()}</p>
      </footer>
    </div>
  );
}
