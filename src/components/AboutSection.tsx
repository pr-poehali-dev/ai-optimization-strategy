export default function AboutSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">О себе</p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 leading-snug">
              Медиа — это<br />
              <span className="text-white/50">моя среда</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Мне 18 лет, я из Калининграда. Готовлюсь к поступлению на факультет журналистики — и уже сейчас активно работаю в медиасфере.
            </p>
            <p className="text-white/50 leading-relaxed">
              Создаю журналистский контент, продюсирую творческие проекты, озвучиваю аудиокниги и рекламу. Умею работать с камерой, монтажом и аудиторией — на сцене и за микрофоном.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-white/10 p-6 rounded-sm">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Цель</p>
              <p className="text-white/80 leading-relaxed">
                Поступить на журфак и развиваться в сфере медиа — журналистика, продюсирование, сценарное мастерство. Создавать качественный и социально значимый контент.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-white/10 p-4 rounded-sm text-center">
                <p className="text-2xl font-light text-white mb-1">15ч</p>
                <p className="text-white/40 text-xs">аудиокниги</p>
              </div>
              <div className="border border-white/10 p-4 rounded-sm text-center">
                <p className="text-2xl font-light text-white mb-1">7 лет</p>
                <p className="text-white/40 text-xs">в КВН</p>
              </div>
              <div className="border border-white/10 p-4 rounded-sm text-center">
                <p className="text-2xl font-light text-white mb-1">10 лет</p>
                <p className="text-white/40 text-xs">танцев</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
