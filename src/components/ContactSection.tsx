export default function ContactSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-[#111111]">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Контакты</p>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
              Давайте работать<br />
              <span className="text-white/40">вместе</span>
            </h2>
            <p className="text-white/50 max-w-md leading-relaxed">
              Открыта к творческим проектам, стажировкам в медиа и журналистским коллаборациям. Напишите — и мы найдём формат сотрудничества.
            </p>
          </div>

          <div className="space-y-4 shrink-0">
            <a
              href="mailto:"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
              <span>Написать на почту</span>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
              <span>Telegram</span>
            </a>
            <a
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
              <span>ВКонтакте</span>
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">Наталья Хомич — Калининград</p>
          <p className="text-white/20 text-sm">Журналист · Продюсер · Диктор</p>
        </div>
      </div>
    </section>
  );
}
