const experiences = [
  {
    role: 'Продюсер (пре- и постпродакшен)',
    project: 'К/м фильм «Во спасение» Веры Колосовой',
    description: 'Координировала творческую команду, обеспечивала соблюдение сроков и качества. Участвовала в ключевых решениях по визуальному и звуковому оформлению.',
    tags: ['Продюсирование', 'Постпродакшен', 'Кино'],
  },
  {
    role: 'Диктор и специалист по озвучиванию',
    project: 'Аудиокнига «Пятая дисциплина» + реклама',
    description: 'Озвучила аудиокнигу объёмом 15 часов. Выполняю заказы по озвучиванию рекламных роликов — работаю с разными интонациями и стилями.',
    tags: ['Дикция', 'Студийная запись', 'Реклама'],
  },
  {
    role: 'Журналист и автор контента',
    project: 'Социальные проекты и медиа',
    description: 'Снимаю и монтирую социальные опросы, создаю подборки мнений по актуальным темам. Помогаю привлекать внимание к общественным вопросам.',
    tags: ['Журналистика', 'Монтаж', 'Видео'],
  },
  {
    role: 'Ведущая и организатор мероприятий',
    project: 'Конференции по лингвистике',
    description: 'Веду сессии, модерирую дискуссии, взаимодействую с докладчиками и аудиторией. Обеспечиваю высокий уровень организации и динамики мероприятий.',
    tags: ['Модерация', 'Публичные выступления', 'Организация'],
  },
  {
    role: 'Сценарист-постановщик и актриса',
    project: 'КВН — 7 лет',
    description: '4 года — актриса: импровизация, сценическое мастерство, харизма. 3 года — сценарист-постановщик: создавала сценарии, выстраивала драматургию, руководила репетициями.',
    tags: ['Сценарий', 'Сцена', 'КВН'],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#111111]">
      <div className="container mx-auto max-w-5xl">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Опыт</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16">Проекты и достижения</h2>

        <div className="space-y-px">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-8 text-white/20 font-light text-sm pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-light mb-1">{exp.role}</h3>
                  <p className="text-white/40 text-sm mb-4">{exp.project}</p>
                  <p className="text-white/60 leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
