export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#1f1f1f]">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="text-2xl font-semibold tracking-wide">MEYOME</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#shop">Shop</a>
          <a href="#order">How to Order</a>
          <a href="#shipping">Shipping</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a6f4d]">
            Worldwide Shipping
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-7xl">
            Curated Bags for Global Customers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Premium selected handbags shipped from Korea to the United States,
            Europe, Australia, Japan, and more.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#shop"
              className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white"
            >
              View Collection
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black px-8 py-4 text-sm font-medium"
            >
              Contact to Order
            </a>
          </div>
        </div>
      </section>

      <section id="shop" className="px-6 py-14 md:px-12">
        <h2 className="mb-8 text-3xl font-semibold">Best Sellers</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "TPU Handbag",
            "PVC Handbag",
            "Daily Shoulder Bag",
          ].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-5 aspect-[4/5] rounded-2xl bg-[#e8ded0]" />
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Available for international order.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block rounded-full bg-black px-5 py-3 text-sm text-white"
              >
                Ask Price
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="bg-white px-6 py-16 md:px-12">
        <h2 className="mb-8 text-3xl font-semibold">How to Order</h2>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            "Choose item",
            "Contact us",
            "Pay by PayPal",
            "Receive tracking",
          ].map((step, index) => (
            <div key={step} className="rounded-3xl border p-6">
              <p className="mb-4 text-sm text-neutral-500">Step {index + 1}</p>
              <h3 className="text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="shipping" className="px-6 py-16 md:px-12">
        <h2 className="mb-6 text-3xl font-semibold">Worldwide Shipping</h2>
        <p className="max-w-2xl leading-7 text-neutral-600">
          We ship internationally from Korea. Shipping fees vary by country and
          package quantity. Tracking number will be provided after shipment.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6">USA / Europe</div>
          <div className="rounded-3xl bg-white p-6">Japan / Taiwan</div>
          <div className="rounded-3xl bg-white p-6">Australia / Canada</div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-16 text-white md:px-12">
        <h2 className="mb-6 text-3xl font-semibold">Secure Payment</h2>
        <p className="max-w-2xl leading-7 text-neutral-300">
          International orders are processed through PayPal for secure global
          payment. Bank transfer may be available for selected customers.
        </p>
      </section>

      <section id="contact" className="px-6 py-16 text-center md:px-12">
        <h2 className="text-3xl font-semibold">Contact to Order</h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Send us the item name, quantity, destination country, and shipping
          address. We will reply with the total price and payment guide.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@meyome.kr"
            className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white"
          >
            Email Order
          </a>
          <a
            href="https://www.instagram.com/"
            className="rounded-full border border-black px-8 py-4 text-sm font-medium"
          >
            Instagram DM
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-neutral-500">
        © 2026 MEYOME. Worldwide shipping from Korea.
      </footer>
    </main>
  );
}
