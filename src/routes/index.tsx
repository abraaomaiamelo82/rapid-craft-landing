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
  MessageSquare
} from "lucide-react";
import { useState } from "react";

const phone = "5585994255462";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário no Studio WL Barbeshop.")}`;

const services = [
  { name: "Corte Social", price: "R$ 35,00", duration: "40 min" },
  { name: "Corte Degradê", price: "R$ 40,00", duration: "45 min" },
  { name: "Corte Degradê Navalhado", price: "R$ 45,00", duration: "50 min" },
  { name: "Barba", price: "R$ 30,00", duration: "30 min" },
  { name: "Corte + Barba", price: "R$ 60,00", duration: "70 min" },
  { name: "Sobrancelha", price: "R$ 15,00", duration: "15 min" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-yellow-700/30 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="font-heading text-xl font-bold tracking-tight text-white md:text-2xl">Studio WL <span className="text-yellow-600">Barbeshop</span></h1>
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest">
            {['Início', 'Serviços', 'Profissionais', 'Avaliações', 'Localização'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o').replace('á', 'a')}`} className="hover:text-yellow-600 transition-colors">{item}</a>
            ))}
          </nav>
          <a href={whatsappUrl} className="flex items-center gap-2 rounded-full border border-yellow-600 px-6 py-2 text-xs font-bold uppercase hover:bg-yellow-600 transition-all">Agendar agora</a>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.3]" style={{backgroundImage: "url('/images/hero.jpg')"}} />
        <div className="relative text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-600/20 px-4 py-1 mb-6 border border-yellow-600/50">
            <Star className="fill-yellow-600 text-yellow-600" size={16} />
            <span className="text-xs font-bold uppercase">5,0 ⭐ (151 avaliações no Google)</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-6">Mais que um corte,<br />é uma <span className="text-yellow-600">experiência.</span></h2>
          <a href={whatsappUrl} className="inline-flex items-center gap-3 rounded-full bg-yellow-600 px-10 py-5 text-lg font-bold hover:scale-105 transition-all mt-8">
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
                  <h3 className="text-lg font-bold mb-1">{s.name}</h3>
                  <p className="text-yellow-600 font-bold">{s.price}</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs text-gray-500">{s.duration}</span>
                  <a href={whatsappUrl} className="text-[10px] font-bold border border-white/20 px-3 py-1 rounded-lg uppercase hover:bg-white hover:text-black">Agendar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Avaliações <span className="text-yellow-600">Reais</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <div className="flex gap-1 text-yellow-600 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-yellow-600"/>)}</div>
                <p className="text-gray-400 mb-6 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-yellow-900/30 bg-black text-center px-4">
        <p className="text-xl font-bold mb-8">Studio WL Barbeshop</p>
        <p className="text-gray-500 mb-8">Rua Joaquim Lopes da Costa, 819 - Centro, Itaitinga - CE</p>
        <a href={whatsappUrl} className="inline-flex items-center gap-2 bg-yellow-600 px-8 py-3 rounded-full font-bold uppercase text-sm">
          <MessageSquare size={16} /> (85) 99425-5462
        </a>
      </footer>
    </div>
  );
}
