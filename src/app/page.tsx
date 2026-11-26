
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#242424]">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:px-12">
        <div className="flex-1">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="NOVA Store Logo"
              width={55}
              height={55}
              priority
            />
            <span className="text-2xl font-bold tracking-[0.2em]">
              NOVA
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Discover Something New
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-7xl">
            Elevate Your Everyday Style.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Discover thoughtfully selected products that bring
            quality, style, and simplicity into your everyday life.
          </p>

          <div className="mt-8">
            <span className="inline-block rounded-full bg-[#242424] px-8 py-4 text-sm font-semibold text-white">
              Explore Our Collection
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl bg-[#eee9df] p-4">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Modern fashion store"
              width={700}
              height={650}
              className="h-[400px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Curated For You
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Featured Collection
          </h2>
          <p className="mt-3 text-gray-500">
            A glimpse of what makes our store special.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Everyday Essentials",
              description: "Simple products for daily living.",
              image:
                "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
            },
            {
              name: "Modern Accessories",
              description: "Details that complete your style.",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
            },
            {
              name: "Premium Lifestyle",
              description: "Quality meets thoughtful design.",
              image:
                "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=600",
            },
          ].map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={450}
                className="h-64 w-full rounded-xl object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 NOVA Store. All rights reserved.
      </footer>
    </main>
  );
}
