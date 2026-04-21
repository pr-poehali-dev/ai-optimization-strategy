const skills = [
  { label: 'Журналистика и медиа', desc: 'Съёмка, монтаж видео, работа с опросами' },
  { label: 'Продюсирование', desc: 'Координация проектов, пре- и постпродакшен' },
  { label: 'Озвучивание', desc: 'Чёткая дикция, студийная запись, реклама' },
  { label: 'Сценарное мастерство', desc: 'КВН, стендап, драматургия номеров' },
  { label: 'Публичные выступления', desc: 'Сцена, модерация, конференции' },
  { label: 'Фотография', desc: 'Композиция, работа со светом' },
  { label: 'Английский язык', desc: 'Свободное владение' },
  { label: 'Итальянский / Немецкий', desc: 'Базовые знания' },
];

const creative = [
  { label: 'Танцы', value: '10 лет' },
  { label: 'КВН — актриса', value: '4 года' },
  { label: 'КВН — сценарист', value: '3 года' },
  { label: 'Стендап', value: 'сценарист' },
  { label: 'Кино-видеопроизводство', value: 'курсы' },
  { label: 'Форум «БалтАртек»', value: 'участник' },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Навыки</p>
            <h2 className="text-3xl font-light text-white mb-12">Что умею</h2>
            <div className="space-y-6">
              {skills.map((s) => (
                <div key={s.label} className="border-b border-white/10 pb-6">
                  <p className="text-white font-light mb-1">{s.label}</p>
                  <p className="text-white/40 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Творчество</p>
            <h2 className="text-3xl font-light text-white mb-12">Сцена и сценарий</h2>
            <div className="grid grid-cols-2 gap-4">
              {creative.map((c) => (
                <div key={c.label} className="border border-white/10 p-5 rounded-sm">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{c.value}</p>
                  <p className="text-white font-light">{c.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-white/10 p-6 rounded-sm">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Личные качества</p>
              <div className="flex flex-wrap gap-2">
                {['Креативность', 'Ответственность', 'Командный игрок', 'Инициативность', 'Внимание к деталям', 'Работоспособность'].map((q) => (
                  <span key={q} className="text-sm text-white/60 border border-white/10 px-3 py-1 rounded-full">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
