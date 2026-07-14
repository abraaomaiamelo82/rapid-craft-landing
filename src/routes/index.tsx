import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

import heroImage from "../assets/benicios-hero.jpg";
import corteImage from "../assets/benicios-corte.jpg";
import barbaImage from "../assets/benicios-barba.jpg";
import tratamentoImage from "../assets/benicios-tratamento.jpg";

const phone = "5585997739843";
const whatsappText = encodeURIComponent(
  "Olá, Benício’s Barber Shop! Quero agendar um horário."
);
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;

const services = [
  {
    title: "Corte Masculino",
    price: "R$ 60",
    description:
      "Degradê limpo, acabamento preciso e consultoria de estilo para valorizar seu rosto.",
    image: corteImage,
    alt: "Corte masculino com degradê em barbearia premium",
  },
  {
    title: "Barba",
    price: "R$ 45",
    description:
      "Toalha quente, navalha e finalização alinhada para uma barba marcante e bem desenhada.",
    image: barbaImage,
    alt: "Barba sendo alinhada com navalha em barbearia premium",
  },
  {
    title: "Tratamento Capilar",
    price: "R$ 80",
    description:
      "Cuidado completo para força, brilho e controle dos fios com produtos profissionais.",
    image: tratamentoImage,
    alt: "Tratamento capilar masculino em ambiente de barbearia",
  },
];

const gallery = [
  { image: heroImage, alt: "Interior premium da Benício’s Barber Shop" },
  { image: corteImage, alt: "Acabamento de corte masculino" },
  { image: barbaImage, alt: "Serviço de barba com navalha" },
  { image: tratamentoImage, alt: "Finalização de tratamento capilar masculino" },
];

const stats = [
  { value: "15+", label: "anos de experiência" },
  { value: "10.000+", label: "clientes atendidos" },
  { value: "5", label: "barbeiros especialistas" },
  { value: "4.9", label: "nota de avaliação" },
];

const testimonials = [
  {
    name: "Tiago Alcântara",
    meta: "4 avaliações · 3 semanas atrás",
    text: "Muito bom! Deixou meu cabelo e o cabelo dos meus filhos excelentes e tratou meu filho menor muito bem.",
  },
  {
    name: "Denise Nogueira",
    meta: "2 avaliações · 5 meses atrás",
    text: "Perfeita 🤩 nota infinita. Meu filho é uma criança autista, ele ficou super à vontade com o Helder, sendo que com o barbeiro antigo não parava quieto. Muito satisfeita pelo excelente trabalho.",
  },
  {
    name: "Marcos Vinícius",
    meta: "Cliente fiel · 2 meses atrás",
    text: "Atendimento impecável, ambiente agradável e acabamento perfeito. Virei cliente fiel da Benício’s.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

function openWhatsApp(message: string) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const service = String(form.get("service") || "").trim();
  const message = String(form.get("message") || "").trim();
  const composedMessage = [
    "Olá, Benício’s Barber Shop! Quero agendar um horário.",
    name ? `Nome: ${name}` : "",
    service ? `Serviço: ${service}` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  openWhatsApp(composedMessage);
}

function Index() {
  return (
    <main className="barber-shell min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Benício’s Barber Shop - início">
            <span className="grid size-10 place-items-center rounded-md border border-primary/50 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Scissors className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block font-heading text-lg font-bold uppercase tracking-normal">Benício’s</span>
              <span className="block text-xs font-bold uppercase tracking-normal text-primary">Barber Shop</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold uppercase tracking-normal text-muted-foreground md:flex">
            <a className="transition hover:text-primary" href="#servicos">Serviços</a>
            <a className="transition hover:text-primary" href="#galeria">Galeria</a>
            <a className="transition hover:text-primary" href="#sobre">Sobre</a>
            <a className="transition hover:text-primary" href="#contato">Contato</a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-black uppercase tracking-normal text-primary-foreground transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Agendar</span>
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[92vh] overflow-hidden pt-20 sm:min-h-[88vh]">
        <img
          src={heroImage}
          alt="Ambiente premium da Benício’s Barber Shop em Itaitinga"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/20" />
        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="reveal-up mb-6 inline-flex items-center gap-2 border border-primary/45 bg-secondary/75 px-3 py-2 text-xs font-black uppercase tracking-normal text-primary backdrop-blur">
              <Star className="size-4 fill-current" aria-hidden="true" />
              Barbearia premium em Itaitinga
            </div>
            <h1 className="reveal-up font-heading text-5xl font-bold uppercase leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Benício’s Barber Shop
            </h1>
            <p className="reveal-up reveal-delay-1 mt-5 max-w-2xl text-xl font-bold text-primary sm:text-2xl">
              Onde o corte vira arte.
            </p>
            <p className="reveal-up reveal-delay-1 mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Corte, barba e tratamento capilar com padrão de excelência, atendimento pontual e acabamento pensado para homens que exigem presença.
            </p>
            <div className="reveal-up reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-black uppercase tracking-normal text-primary-foreground transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                <CalendarDays className="size-5" aria-hidden="true" />
                Agendamento Online
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="tel:+5585997739843"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/45 bg-secondary/80 px-6 py-4 text-sm font-black uppercase tracking-normal text-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                <Phone className="size-5" aria-hidden="true" />
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/55 px-4 py-5 sm:px-6 lg:px-8" aria-label="Diferenciais">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-bold uppercase tracking-normal text-muted-foreground sm:grid-cols-3">
          <div className="flex items-center gap-3"><Sparkles className="size-5 text-primary" aria-hidden="true" /> Acabamento de alto padrão</div>
          <div className="flex items-center gap-3"><Clock className="size-5 text-primary" aria-hidden="true" /> Atendimento com hora marcada</div>
          <div className="flex items-center gap-3"><MapPin className="size-5 text-primary" aria-hidden="true" /> R. Cândido Meireles, 1269</div>
        </div>
      </section>

      <section id="servicos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-bold uppercase tracking-normal text-primary">Serviços</p>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-normal text-foreground sm:text-5xl">
              Sua imagem tratada como assinatura.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group overflow-hidden rounded-md border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-normal text-foreground">{service.title}</h3>
                    <span className="shrink-0 rounded-md bg-primary px-3 py-1 text-sm font-black text-primary-foreground">{service.price}</span>
                  </div>
                  <p className="mt-4 min-h-20 leading-7 text-muted-foreground">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(`Olá, Benício’s Barber Shop! Quero agendar: ${service.title}.`)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/45 bg-secondary px-4 py-3 text-sm font-black uppercase tracking-normal text-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <CalendarDays className="size-4" aria-hidden="true" />
                    Agendar serviço
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-normal text-primary">Galeria</p>
              <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-normal sm:text-5xl">
                Ambiente, técnica e resultado no mesmo padrão.
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-muted-foreground lg:justify-self-end">
              Cada detalhe foi pensado para entregar uma experiência local-first: atendimento próximo, execução firme e visual premium sem exageros.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <figure key={item.alt} className={index === 0 ? "overflow-hidden rounded-md border border-border bg-card sm:col-span-2 lg:col-span-2" : "overflow-hidden rounded-md border border-border bg-card"}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width={index === 0 ? 1600 : 900}
                  height={index === 0 ? 1000 : 700}
                  loading="lazy"
                  className="h-72 w-full object-cover sm:h-80"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="subtle-float overflow-hidden rounded-md border border-primary/30 bg-card">
            <img
              src={heroImage}
              alt="Cadeiras e espelhos da Benício’s Barber Shop"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full min-h-96 w-full object-cover"
            />
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-normal text-primary">Sobre Nós</p>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-normal sm:text-5xl">
              Tradição, autoridade e excelência no cuidado masculino.
            </h2>
            <p className="mt-6 leading-8 text-muted-foreground">
              A Benício’s Barber Shop une técnica clássica, acabamento moderno e atendimento direto para transformar o ritual do corte em uma experiência de confiança. Aqui, cada cliente recebe orientação, precisão e uma entrega consistente do primeiro contato à finalização.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-border bg-secondary p-5">
                  <strong className="block font-heading text-3xl font-bold text-primary">{stat.value}</strong>
                  <span className="mt-1 block text-sm font-bold uppercase tracking-normal text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-border bg-secondary/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-normal text-primary">Contato</p>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-normal sm:text-5xl">
              Reserve seu horário hoje.
            </h2>
            <div className="mt-8 space-y-4">
              <a href="https://maps.google.com/?q=R.%20C%C3%A2ndido%20Meireles%2C%201269%2C%20Itaitinga%20-%20CE%2C%2061880-000" target="_blank" rel="noreferrer" className="flex gap-4 rounded-md border border-border bg-card p-5 transition hover:border-primary">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span><strong className="block text-foreground">Endereço</strong><span className="text-muted-foreground">R. Cândido Meireles, 1269, Itaitinga - CE, 61880-000</span></span>
              </a>
              <a href="tel:+5585997739843" className="flex gap-4 rounded-md border border-border bg-card p-5 transition hover:border-primary">
                <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span><strong className="block text-foreground">Telefone</strong><span className="text-muted-foreground">(85) 99773-9843</span></span>
              </a>
              <div className="flex gap-4 rounded-md border border-border bg-card p-5">
                <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span><strong className="block text-foreground">Horário de funcionamento</strong><span className="text-muted-foreground">Segunda a sábado, com agendamento online</span></span>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="rounded-md border border-primary/25 bg-card p-6 shadow-2xl shadow-primary/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold uppercase tracking-normal text-muted-foreground">
                Nome
                <input name="name" required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring" placeholder="Seu nome" />
              </label>
              <label className="space-y-2 text-sm font-bold uppercase tracking-normal text-muted-foreground">
                Telefone
                <input name="phone" type="tel" required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring" placeholder="(85) 00000-0000" />
              </label>
            </div>
            <label className="mt-5 block space-y-2 text-sm font-bold uppercase tracking-normal text-muted-foreground">
              Serviço desejado
              <select name="service" required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring">
                <option value="">Selecione um serviço</option>
                <option>Corte Masculino</option>
                <option>Barba</option>
                <option>Tratamento Capilar</option>
                <option>Pacote completo</option>
              </select>
            </label>
            <label className="mt-5 block space-y-2 text-sm font-bold uppercase tracking-normal text-muted-foreground">
              Mensagem
              <textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring" placeholder="Melhor dia e horário para atendimento" />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-black uppercase tracking-normal text-primary-foreground transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Entrar em contato
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold uppercase tracking-normal text-foreground">Benício’s Barber Shop</p>
          <p>Onde o corte vira arte · Itaitinga - CE</p>
          <a className="font-bold text-primary transition hover:text-accent" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}