import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Navbar, WHATSAPP, PHONE } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import logo from "@/assets/logo.png.asset.json";
import smallChops from "@/assets/small-chops.jpg.asset.json";
import samosa from "@/assets/samosa.jpg.asset.json";
import springRolls from "@/assets/spring-rolls.jpg.asset.json";
import lumpia from "@/assets/lumpia.jpg.asset.json";
import fries from "@/assets/fries.jpg.asset.json";
import sliders from "@/assets/sliders.jpg.asset.json";
import hotRolls from "@/assets/hot-rolls.jpg.asset.json";
import pizza from "@/assets/pizza.jpg.asset.json";

const TITLE = "JJ Snacks Box | Fresh Snacks & Small Chops in Port Harcourt";
const DESC =
  "Freshly prepared snacks, small chops, pastries and party packs in Port Harcourt. Order snack boxes for birthdays, weddings and corporate events on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  { name: "Meat Pies", desc: "Golden, flaky crust packed with seasoned minced beef and potatoes." },
  { name: "Sausage Rolls", desc: "Buttery pastry wrapped around juicy, well-spiced sausage." },
  { name: "Doughnuts", desc: "Soft, fluffy rings rolled in sugar or finished with glaze." },
  { name: "Puff-Puff", desc: "Light, airy Nigerian classic — fried fresh, golden and sweet." },
  { name: "Spring Rolls", desc: "Crisp wrappers filled with seasoned vegetables and chicken." },
  { name: "Samosa", desc: "Crunchy triangles with a rich, spiced minced-meat filling." },
  { name: "Chicken Pies", desc: "Tender chicken and herbs baked in a rich shortcrust." },
  { name: "Cakes & Cupcakes", desc: "Moist celebration cakes and beautifully frosted cupcakes." },
  { name: "Cookies", desc: "Chewy, buttery cookies baked in small, fresh batches." },
  { name: "Small Chops", desc: "The full tray: puff-puff, samosa, spring rolls and peppered wings." },
  { name: "Snack Boxes", desc: "Ready-to-go boxes curated for one, two or the whole crew." },
  { name: "Party Packs", desc: "Bulk trays plated and presented for events of any size." },
];

const boxes = [
  {
    name: "Classic Snack Box",
    img: samosa.url,
    desc: "A dependable everyday mix — samosa, spring rolls and puff-puff.",
    tag: "Everyday favourite",
  },
  {
    name: "Party Snack Box",
    img: smallChops.url,
    desc: "Loaded small chops tray with peppered chicken and dipping sauces.",
    tag: "Best seller",
  },
  {
    name: "Family Snack Box",
    img: sliders.url,
    desc: "Generous sharing box of sliders, pies and pastries for the household.",
    tag: "Feeds 4–6",
  },
  {
    name: "Premium Snack Box",
    img: hotRolls.url,
    desc: "Our finest selection, elegantly plated for gifting and VIP guests.",
    tag: "Signature",
  },
  {
    name: "Custom Snack Box",
    img: springRolls.url,
    desc: "Tell us your budget and taste — we build the box exactly your way.",
    tag: "Built for you",
  },
];

const why = [
  ["Fresh & Delicious", "Everything is prepared the same day it reaches you."],
  ["Quality Ingredients", "We source carefully and never cut corners on taste."],
  ["Hygienically Prepared", "Clean kitchen, strict handling, safe packaging."],
  ["Affordable Pricing", "Premium snacks at prices that stay friendly."],
  ["Beautiful Presentation", "Trays and boxes plated to impress your guests."],
  ["Fast Response", "Message us on WhatsApp and get a quick, clear reply."],
  ["Perfect for Events", "From small meetings to full wedding receptions."],
];

const events = [
  "Birthdays",
  "Weddings",
  "Corporate Events",
  "Parties",
  "Meetings",
  "School Events",
  "Family Gatherings",
  "Celebrations",
];

const gallery = [
  { url: smallChops.url, alt: "Party tray of Nigerian small chops with peppered chicken wings" },
  { url: hotRolls.url, alt: "Freshly baked stuffed hot roll sandwiches on a wooden board" },
  { url: sliders.url, alt: "Trays of sesame seed mini burger sliders for an event" },
  { url: springRolls.url, alt: "Crispy vegetable spring rolls with chilli dipping sauce" },
  { url: samosa.url, alt: "Golden fried samosas served on a plate" },
  { url: lumpia.url, alt: "Extra crispy lumpia spring rolls with sweet chilli sauce" },
  { url: fries.url, alt: "Hand holding thick seasoned potato fries" },
  { url: pizza.url, alt: "Freshly baked homemade pizza sliced on trays" },
];

const testimonials = [
  {
    name: "Chidinma O.",
    role: "Birthday host, GRA",
    text: "The small chops tray disappeared in twenty minutes. Everything was hot, crisp and beautifully arranged.",
  },
  {
    name: "Emeka A.",
    role: "Office manager",
    text: "We order snack boxes for every board meeting now. Always fresh, always on time, always neat.",
  },
  {
    name: "Blessing T.",
    role: "Bride, Port Harcourt",
    text: "Our guests kept asking who catered the snacks. Great value and the presentation was stunning.",
  },
  {
    name: "Tunde K.",
    role: "Regular customer",
    text: "Meat pies taste homemade in the best way. Fair prices and the fastest WhatsApp replies in PH.",
  },
];

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hello JJ Snacks Box! My name is ${data.get("name")}. ${data.get("message")} (Phone: ${data.get("phone")})`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Opening WhatsApp with your message…");
    e.currentTarget.reset();
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Toaster />
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={hotRolls.url}
          alt="Freshly prepared snacks arranged on a wooden serving board"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-dark)]" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur">
              Port Harcourt • Snacks Brand
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
              Good Snacks.{" "}
              <span className="text-gradient-gold block sm:inline">Great Moments.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Freshly prepared, deliciously satisfying snacks made to brighten every moment.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Explore Our Snacks
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/50 bg-card/50 px-7 py-3.5 text-sm font-bold text-foreground backdrop-blur transition-colors hover:bg-card"
              >
                Order Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={smallChops.url}
                alt="A full tray of Nigerian small chops with puff-puff, samosa and chicken"
                loading="lazy"
                className="w-full rounded-[2rem] object-cover shadow-card"
              />
              <div className="absolute -bottom-6 -right-2 rounded-2xl bg-gradient-gold px-6 py-4 text-primary-foreground shadow-glow sm:right-6">
                <p className="font-display text-2xl font-extrabold">Made Fresh Daily</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                About Us
              </p>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                A snacks brand built on taste and trust
              </h2>
              <p className="mt-5 text-muted-foreground">
                JJ Snacks Box is a quality-focused snacks brand based in Port Harcourt. We prepare
                every pie, roll and tray of small chops fresh, using ingredients we would happily
                serve our own family. Whether it is an ordinary Tuesday craving or a hall full of
                wedding guests, we deliver snacks that look as good as they taste.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Freshly prepared snacks",
                  "Quality ingredients",
                  "Great taste, every time",
                  "Hygienic preparation",
                  "Affordable prices",
                  "Excellent customer service",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-gold" />
                    <span className="min-w-0">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Our Menu
              </p>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Snacks worth the crave</h2>
              <p className="mt-4 text-muted-foreground">
                Everything below is available fresh. Message us for today's pricing and quantities.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 90}>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Hello JJ Snacks Box, I'd like to order ${item.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.desc}</p>
                  <span className="mt-5 text-sm font-semibold text-primary opacity-70 transition-opacity group-hover:opacity-100">
                    Order this →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature boxes */}
      <section id="boxes" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Signature
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Snack boxes for every mood</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boxes.map((b, i) => (
            <Reveal key={b.name} delay={(i % 3) * 90}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/60">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                    {b.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Hello JJ Snacks Box, I'd like to order the ${b.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Order Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Why choose JJ Snacks Box?</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/60">
                  <div className="h-1 w-10 rounded-full bg-gradient-gold" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events & bulk */}
      <section id="events" className="relative overflow-hidden py-24">
        <img
          src={sliders.url}
          alt="Large catering trays of mini burger sliders prepared for an event"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/88" />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Events & Bulk Orders
              </p>
              <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Feeding a crowd? We've got the trays.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us your headcount and budget — we'll plan, plate and deliver snacks that make
                your event memorable.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {events.map((e, i) => (
              <Reveal key={e} delay={i * 50}>
                <span className="rounded-full border border-border bg-card/70 px-5 py-2.5 text-sm font-medium backdrop-blur">
                  {e}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Hello JJ Snacks Box, I'd like to request a bulk order for my event.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Request a Bulk Order
            </a>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Gallery
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Straight from our kitchen</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.url} delay={(i % 4) * 80}>
              <button
                onClick={() => setLightbox(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-border ${
                  i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={g.url}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-background/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View photo
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">What our customers say</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                  <div className="text-primary">★★★★★</div>
                  <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold sm:text-6xl">
            Craving <span className="text-gradient-gold">something delicious?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Place your order today and enjoy freshly prepared snacks from JJ Snacks Box.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Order on WhatsApp
            </a>
            <a
              href={PHONE}
              className="rounded-full border border-primary/50 px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-card"
            >
              Call Us — 0818 782 1414
            </a>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Find us & get in touch</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    WhatsApp / Phone
                  </p>
                  <a href={PHONE} className="mt-2 block text-2xl font-bold">
                    0818 782 1414
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Address
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Oak Park, Opposite Air Force Base, Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Business Hours
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex justify-between gap-4">
                      <span>Monday – Friday</span>
                      <span className="text-foreground">8:00 AM – 8:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span className="text-foreground">9:00 AM – 8:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Sunday</span>
                      <span className="text-foreground">1:00 PM – 7:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title="JJ Snacks Box location map"
                    src="https://www.google.com/maps?q=Oak%20Park%2C%20Air%20Force%20Base%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&output=embed"
                    loading="lazy"
                    className="h-64 w-full border-0"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-border bg-background p-7 shadow-card"
              >
                <h3 className="text-2xl font-bold">Send us an order request</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill this in and we'll continue the chat on WhatsApp.
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                      placeholder="e.g. Ada Nwosu"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                      placeholder="0801 234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      What would you like to order?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                      placeholder="I need 3 party snack boxes for Saturday…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo.url}
              alt="JJ Snacks Box logo"
              className="h-20 w-20 rounded-full bg-cream object-contain p-1"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Sweet • Savory • Crunchy. Freshly prepared snacks and party trays in Port Harcourt.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["about", "menu", "boxes", "events", "gallery", "contact"].map((h) => (
                <li key={h}>
                  <a href={`#${h}`} className="capitalize hover:text-primary">
                    {h === "boxes" ? "Snack Boxes" : h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Menu</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {menu.slice(0, 6).map((m) => (
                <li key={m.name}>
                  <a href="#menu" className="hover:text-primary">
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={PHONE} className="hover:text-primary">
                  0818 782 1414
                </a>
              </li>
              <li>Oak Park, Opposite Air Force Base, Port Harcourt</li>
              <li>Mon–Fri: 8AM–8PM</li>
              <li>Sat: 9AM–8PM · Sun: 1PM–7PM</li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm">
              {[
                ["WhatsApp", WHATSAPP],
                ["Instagram", "https://instagram.com"],
                ["Facebook", "https://facebook.com"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-3 py-1.5 text-xs hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} JJ Snacks Box. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with JJ Snacks Box on WhatsApp"
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        Chat on WhatsApp
      </a>

      <Lightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </div>
  );
}
