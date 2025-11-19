function App() {
  const menuSections = [
    {
      title: "Entrées",
      items: [
        {
          name: "Salade César",
          desc: "Laitue croquante, poulet grillé, parmesan",
          price: "8,90€",
          img: "https://images.unsplash.com/photo-1569058242567-94c4e6c58c44?q=80&w=300&auto=format&fit=crop"
        },
        {
          name: "Bruschetta",
          desc: "Tomate, basilic, huile d'olive",
          price: "6,50€",
          img: "https://images.unsplash.com/photo-1604909052743-89e7c6f5233d?q=80&w=300&auto=format&fit=crop"
        }
      ]
    },
    {
      title: "Plats",
      items: [
        {
          name: "Pâtes à la Truffe",
          desc: "Crème légère, éclats de truffe noire",
          price: "16,90€",
          img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=300&auto=format&fit=crop"
        },
        {
          name: "Burger Maison",
          desc: "Bœuf, cheddar, sauce secrète",
          price: "14,50€",
          img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=300&auto=format&fit=crop"
        },
        {
          name: "Saumon Grillé",
          desc: "Citron, herbes fraîches",
          price: "18,00€",
          img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=300&auto=format&fit=crop"
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Tiramisu",
          desc: "Classique crémeux au café",
          price: "6,90€",
          img: "https://images.unsplash.com/photo-1600353060656-0057e51c7f94?q=80&w=300&auto=format&fit=crop"
        },
        {
          name: "Fondant au chocolat",
          desc: "Cœur coulant, glace vanille",
          price: "7,50€",
          img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=300&auto=format&fit=crop"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative min-h-screen flex flex-col items-center justify-start p-8">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="/flame-icon.svg"
                alt="Flames"
                className="w-16 h-16 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              />
            </div>

            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Flames Blue
            </h1>
            <p className="text-base text-blue-200">
              Build applications through conversation
            </p>
          </div>

          {/* 3D Menu Card - single primary color theme (blue) with thumbnails */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Carte menu 3D</h2>

            <div
              className="group relative rounded-3xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div
                className="p-6 sm:p-8 transition-transform duration-500 ease-out"
                style={{ transform: "rotateX(6deg)", transformStyle: "preserve-3d" }}
              >
                {/* Top gloss */}
                <div className="pointer-events-none absolute inset-0 opacity-40 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

                {/* Header bar in primary color only */}
                <div className="mb-6 rounded-2xl bg-gradient-to-r from-blue-600/30 to-blue-500/20 border border-blue-400/20 p-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.7)]"></div>
                  <p className="text-blue-200 text-sm">Découvrez nos sélections du moment</p>
                </div>

                {/* Sections */}
                <div className="grid md:grid-cols-3 gap-6">
                  {menuSections.map((section) => (
                    <div key={section.title} className="rounded-2xl bg-slate-900/40 border border-blue-500/10 p-4">
                      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {section.title}
                      </h3>

                      <ul className="space-y-4">
                        {section.items.map((item) => (
                          <li key={item.name} className="flex items-center gap-3">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover border border-blue-500/20"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-white font-medium leading-tight">{item.name}</p>
                                <span className="text-blue-300 text-sm font-semibold">{item.price}</span>
                              </div>
                              <p className="text-blue-200/70 text-xs mt-0.5">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Shadow base */}
                <div className="mt-8" style={{ transform: "translateZ(-40px)" }}>
                  <div className="h-10 rounded-full bg-blue-900/30 blur-2xl"></div>
                </div>
              </div>

              {/* Hover tilt for 3D feel */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-400/10 group-hover:scale-[1.01] group-hover:-rotate-1 transition-transform duration-500 ease-out" />
            </div>
          </section>

          {/* Footer */}
          <div className="text-center mt-10">
            <p className="text-sm text-blue-300/60">Couleurs uniformes (bleu) avec vignettes à côté des plats</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
