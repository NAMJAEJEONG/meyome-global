const products = [
  { name: "Classic Shoulder Bag", price: "USD 128", tag: "New" },
  { name: "Soft Tote Bag", price: "USD 148", tag: "Best" },
  { name: "Mini Archive Bag", price: "USD 118", tag: "New" },
  { name: "Daily Hobo Bag", price: "USD 138", tag: "Best" },
  { name: "PVC Handbag", price: "USD 98", tag: "TPU / PVC" },
  { name: "Structured Tote", price: "USD 158", tag: "Limited" },
  { name: "Seoul Archive Bag", price: "USD 132", tag: "Archive" },
  { name: "Minimal Crossbody", price: "USD 108", tag: "New" },
];

const categories = ["Shoulder Bags", "Tote Bags", "Mini Bags", "TPU / PVC"];

export default function Home() {
  return (
    <main className="bg-white text-black">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-5 md:px-10">
          <a href="#" className="text-sm font-semibold tracking-[0.25em]">
            MEYOME
          </a>

          <nav className="hidden items-center gap-8 text-xs tracking-wide md:flex">
            <a href="#new">NEW IN</a>
            <a href="#shop">BAGS</a>
            <a href="#order">HOW TO ORDER</a>
            <a href="#shipping">SHIPPING</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <a href="#contact" className="text-xs tracking-wide">
            ORDER
          </a>
        </div>
      </header>

      <section className="grid min-h-[82vh] md:grid-cols-2">
        <div className="flex items-center px-5 py-20 md:px-10">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Seoul based global shop
            </p>
            <h1 className="max-w-xl text-5xl font-normal leading-[1.05] md:text-7xl">
              Curated bags from Seoul.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
              Selected handbags available for international order. Worldwide
              shipping from Korea with PayPal payment.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#new"
                className="bg-black px-6 py-3 text-xs tracking-wide text-white"
              >
                SHOP NEW IN
              </a>
              <a
                href="#order"
                className="border border-black px-6 py-3 text-xs tracking-wide"
              >
                HOW TO ORDER
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-[520px] bg-neutral-100">
          <div className="flex h-full items-end justify-between p-5 text-xs text-neutral-500 md:p-10">
            <span>MEYOME GLOBAL</span>
            <span>2026 COLLECTION</span>
          </div>
        </div>
      </section>

      <section id="new" className="px-5 py-20 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              New arrivals
            </p>
            <h2 className="mt-2 text-3xl font-normal">Freshly selected</h2>
          </div>
          <a href="#shop" className="text-xs underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {products.slice(0, 4).map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="border-y">
        <div className="grid md:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category}
              href="#shop"
              className="group border-b px-5 py-16 md:border-b-0 md:border-r md:px-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Category
              </p>
              <h3 className="mt-3 text-2xl font-normal">{category}</h3>
              <p className="mt-8 text-xs underline opacity-0 transition group-hover:opacity-100">
                Shop now
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="shop" className="px-5 py-20 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Best sellers
            </p>
            <h2 className="mt-2 text-3xl font-normal">Available bags</h2>
          </div>
          <p className="text-xs text-neutral-500">Order via DM / Email</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4">
          {products.map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="order" className="border-t px-5 py-20 md:px-10">
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-neutral-500">
          How to order
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            "Choose your item",
            "Send item name and country",
            "Receive total price",
            "Pay via PayPal",
          ].map((step, index) => (
            <div key={step}>
              <p className="mb-4 text-xs text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="shipping"
        className="grid border-t px-5 py-20 md:grid-cols-2 md:px-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Shipping
          </p>
        </div>
        <div className="mt-8 max-w-xl text-sm leading-7 text-neutral-600 md:mt-0">
          <p>
            Worldwide shipping from Korea. Shipping fee depends on destination
            country and package quantity.
          </p>
          <p className="mt-4">
            Tracking number will be provided after shipment.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t bg-black px-5 py-20 text-white md:px-10"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Contact
        </p>
        <h2 className="max-w-2xl text-4xl font-normal leading-tight md:text-6xl">
          Send us the item name and your country.
        </h2>

        <div className="mt-10 flex flex-col gap-3 text-sm md:flex-row">
          <a href="mailto:hello@meyome.kr" className="border px-6 py-3">
            Email Order
          </a>
          <a
            href="https://www.instagram.com/"
            className="border px-6 py-3"
          >
            Instagram DM
          </a>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t px-5 py-8 text-xs text-neutral-500 md:flex-row md:justify-between md:px-10">
        <p>© 2026 MEYOME GLOBAL</p>
        <p>Worldwide shipping from Korea · PayPal available</p>
      </footer>
    </main>
  );
}

function ProductCard({
  item,
  index,
}: {
  item: { name: string; price: string; tag: string };
  index: number;
}) {
  return (
    <a href="#contact" className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <div className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] uppercase tracking-wide">
          {item.tag}
        </div>
        <div className="flex h-full items-end justify-between p-3 text-[10px] text-neutral-400">
          <span>IMAGE</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="mt-3 flex justify-between gap-3 text-xs">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>

      <p className="mt-2 text-[11px] text-neutral-500 opacity-0 transition group-hover:opacity-100">
        Order via DM
      </p>
    </a>
  );
}
