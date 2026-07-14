import { useState } from "react";

export default function App() {
  const phone = "(817) 609-2192";
  const phoneHref = "tel:8176092192";

  const address = "Fort Worth, TX & surrounding DFW areas";

  const services = [
    {
      name: "Standard House Cleaning",
      price: "Starting at $100",
      time: "2-3 hrs",
      desc: "A complete home cleaning service including dusting, vacuuming, mopping, kitchen cleaning, bathroom cleaning, and general tidying. Perfect for keeping your home fresh and comfortable.",
    },
    {
      name: "Deep Cleaning",
      price: "Starting at $200",
      time: "4-6 hrs",
      desc: "A detailed top-to-bottom cleaning for homes needing extra attention. Includes baseboards, detailed bathroom cleaning, kitchen deep cleaning, hard-to-reach areas, and more.",
    },
    {
      name: "Move In / Move Out Cleaning",
      price: "Custom Quote",
      time: "Based on home size",
      desc: "Preparing your home for a fresh start. We clean empty or occupied properties so they are ready for new owners, renters, or a smooth move.",
    },
    {
      name: "Kitchen Cleaning",
      price: "Custom Quote",
      time: "1-2 hrs",
      desc: "Professional kitchen cleaning including counters, appliances, cabinets, floors, and detailed areas that collect dirt and buildup.",
    },
    {
      name: "Bathroom Cleaning",
      price: "Custom Quote",
      time: "1 hr+",
      desc: "A thorough bathroom cleaning service focused on removing buildup, sanitizing surfaces, and leaving your bathroom fresh and spotless.",
    },
    {
      name: "Recurring Cleaning Service",
      price: "Custom Quote",
      time: "Weekly / Biweekly",
      desc: "Keep your home consistently clean with scheduled cleaning visits designed around your needs and lifestyle.",
    },
  ];

  const gallery = [
    {
      title: "Fresh and spotless homes",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Detailed kitchen cleaning",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Clean living spaces",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Professional cleaning results",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const features = [
    "Reliable home cleaning",
    "Professional service",
    "Serving Fort Worth & DFW",
    "Easy scheduling by phone",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,10,10,0.78), rgba(10,10,10,0.88)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
              Fort Worth House Cleaning Service
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Jissel's House Cleaning
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Professional house cleaning services designed to keep your home
              fresh, clean, and comfortable. Reliable service, attention to
              detail, and quality you can trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={phoneHref}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-900/30 transition hover:scale-[1.02] hover:bg-blue-500"
              >
                Request Quote
              </a>

              <button
                onClick={() => scrollToSection("services")}
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                View Services
              </button>

              <a
                href={phoneHref}
                className="rounded-2xl border border-white/20 bg-black/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Call Now
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-neutral-400">Phone</p>
                <a
                  href={phoneHref}
                  className="mt-1 block font-medium hover:text-blue-300"
                >
                  {phone}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:col-span-2">
                <p className="text-sm text-neutral-400">Service Area</p>
                <p className="mt-1 font-medium">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 text-sm text-neutral-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
              Services
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Cleaning services and pricing
            </h2>
          </div>

          <a
            href={phoneHref}
            className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
          >
            Request A Quote
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {service.name}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-400">
                    {service.time}
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 px-3 py-2 text-base font-bold text-blue-300">
                  {service.price}
                </div>
              </div>

              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="mt-4 text-sm font-medium text-blue-300 transition hover:text-blue-200"
              >
                {openIndex === i
                  ? "Hide Description"
                  : "Read Description"}
              </button>

              {openIndex === i && (
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {service.desc}
                </p>
              )}

              <a
                href={phoneHref}
                className="mt-5 block w-full rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
              Gallery
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              A cleaner home starts here
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-400">
              Professional cleaning results designed to make your home feel
              fresh, organized, and comfortable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
              Contact
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Ready for a cleaner home?
            </h2>

            <p className="mt-4 text-neutral-400">
              Contact Jissel's House Cleaning today for a quote and schedule a
              cleaning service that fits your needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={phoneHref}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
              >
                Call For Quote
              </a>

              <a
                href={phoneHref}
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/5"
              >
                {phone}
              </a>
            </div>
          </div>


          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-6">
            <h3 className="text-2xl font-bold">
              Company Info
            </h3>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">
                  Service Area
                </p>

                <p className="mt-1">
                  {address}
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">
                  Phone
                </p>

                <a
                  href={phoneHref}
                  className="mt-1 block hover:text-blue-300"
                >
                  {phone}
                </a>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-neutral-400">
                  Hours / Availability
                </p>

                <p className="mt-1 text-neutral-300">
                  Appointments available through phone scheduling.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">

          <p>
            Jissel's House Cleaning
          </p>

          <div className="flex gap-4">

            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-white"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-white"
            >
              Gallery
            </button>

            <a
              href={phoneHref}
              className="hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>
      </footer>

    </div>
  );
}