const products = [
  "Archive Bag 01",
  "Archive Bag 02",
  "Archive Bag 03",
  "Archive Bag 04",
  "Archive Bag 05",
  "Archive Bag 06",
];

export default function Home() {
  return (
    <main className="bg-white text-black">
      <header className="fixed left-0 top-0 z-10 flex w-full justify-between bg-white px-5 py-4 text-xs tracking-wide md:px-10">
        <a href="#">MEYOME GLOBAL</a>
        <nav className="flex gap-5">
          <a href="#shop">SHOP</a>
          <a href="#order">ORDER</a>
          <a href="#shipping">SHIPPING</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="min-h-screen px-5 pt-32 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.35em]">
          Meyome Seoul Archive
        </p>

        <h1 className="max-w-3xl text-4xl font-normal leading-tight md:text-7xl">
          Curated bags from Seoul, shipped worldwide.
        </h1>

        <p className="mt-8 max-w-md text-sm leading-7 text-neutral-600">
          A quiet archive of selected bags available for international order.
          Payment is available through PayPal.
        </p>
      </section>

      <section id="shop" className="px-5 py-24 md:px-10">
        <div className="mb-10 flex justify-between text-xs uppercase tracking-wide">
          <h2>Shop</h2>
          <p>Available Items</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3">
          {products.map((name, index) => (
            <div key={name}>
              <div className="aspect-[3/4] bg-neutral-100" />
              <div className="mt-3 flex justify-between text-xs">
                <p>{name}</p>
                <p>#{String(index + 1).padStart(2, "0")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="order" className="border-t px-5 py-24 md:px-10">
        <h2 className="mb-10 text-xs uppercase tracking-wide">How to Order</h2>

        <div className="grid gap-8 text-sm leading-7 md:grid-cols-4">
          <div>
            <p className="mb-2 text-xs text-neutral-400">01</p>
            <p>Choose the item you want.</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-neutral-400">02</p>
            <p>Send us the item name and destination country.</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-neutral-400">03</p>
            <p>We will send the total price with shipping fee.</p>
          </div>
          <div>
            <p className="mb-2 text-xs text-neutral-400">04</p>
            <p>Pay by PayPal and receive your tracking number.</p>
          </div>
        </div>
      </section>

      <section id="shipping" className="border-t px-5 py-24 md:px-10">
        <h2 className="mb-10 text-xs uppercase tracking-wide">Shipping</h2>

        <div className="max-w-2xl text-sm leading-7 text-neutral-700">
          <p>
            We ship worldwide from Korea. Shipping fees vary depending on the
            destination country and package quantity.
          </p>
          <p className="mt-5">
            Tracking information will be provided after shipment.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t px-5 py-24 md:px-10">
        <h2 className="mb-10 text-xs uppercase tracking-wide">Contact</h2>

        <div className="space-y-3 text-sm leading-7">
          <p>Email: hello@meyome.kr</p>
          <p>Instagram: @meyome</p>
          <p>PayPal available for international orders.</p>
        </div>
      </section>

      <footer className="border-t px-5 py-6 text-xs text-neutral-400 md:px-10">
        © 2026 MEYOME GLOBAL
      </footer>
    </main>
  );
}
