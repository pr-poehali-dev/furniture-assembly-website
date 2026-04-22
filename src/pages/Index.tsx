import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    icon: "Armchair",
    title: "Сборка корпусной мебели",
    desc: "Шкафы-купе, кухни, комоды, тумбы, стеллажи — соберём любую мебель быстро и аккуратно.",
    color: "#d4845a",
  },
  {
    icon: "PaintBucket",
    title: "Профессиональная шпаклёвка",
    desc: "Выравнивание стен под покраску или обои. Идеально гладкая поверхность без трещин и неровностей.",
    color: "#7aab8a",
  },
  {
    icon: "Hammer",
    title: "Чистовая отделка",
    desc: "Финишные работы под ключ: покраска, декоративные покрытия, финальная доводка помещения.",
    color: "#b5651d",
  },
  {
    icon: "LayoutGrid",
    title: "Укладка ламината",
    desc: "Профессиональная кладка ламината с подложкой на любую площадь. Ровно, тихо, надолго.",
    color: "#8a9a6a",
  },
  {
    icon: "Minus",
    title: "Карнизы и плинтусы",
    desc: "Установка потолочных карнизов, напольных и потолочных плинтусов. Аккуратные стыки и углы.",
    color: "#c09050",
  },
  {
    icon: "Layers",
    title: "Поклейка обоев",
    desc: "Виниловые, флизелиновые, обои под покраску — поклеим любые обои без пузырей и стыков.",
    color: "#e8a87c",
  },
  {
    icon: "Wrench",
    title: "Мелкий ремонт",
    desc: "Устранение неисправностей, мелкие доработки: замена розеток, заделка трещин, монтаж полок.",
    color: "#9e7a5a",
  },
];

const ADVANTAGES = [
  { icon: "Clock", title: "Работаем быстро", desc: "Соблюдаем сроки без задержек" },
  { icon: "ShieldCheck", title: "Гарантия качества", desc: "Даём гарантию на все виды работ" },
  { icon: "Banknote", title: "Честная цена", desc: "Без скрытых доплат и накруток" },
  { icon: "Star", title: "Опыт 10+ лет", desc: "Сотни довольных клиентов в городе" },
];

const WORKS = [
  { label: "Сборка кухни", tag: "Мебель" },
  { label: "Укладка ламината", tag: "Полы" },
  { label: "Поклейка обоев", tag: "Отделка" },
  { label: "Шпаклёвка стен", tag: "Отделка" },
  { label: "Установка плинтусов", tag: "Монтаж" },
  { label: "Чистовая отделка", tag: "Отделка" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* ===== НАВИГАЦИЯ ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl hero-gradient flex items-center justify-center">
              <Icon name="Hammer" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-[#5c3310] text-base leading-none">МастерОтделка</div>
              <div className="text-xs text-orange-400">Владимир · ремонт и отделка</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7a5030]">
            {[["services","Услуги"],["advantages","Почему мы"],["works","Работы"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-orange-500 transition-colors">{label}</button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button onClick={() => scrollTo("contacts")} className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm">
              Оставить заявку
            </button>
          </div>

          <button className="md:hidden text-[#7a5030]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 px-4 py-4 space-y-2">
            {[["services","Услуги"],["advantages","Почему мы"],["works","Работы"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left px-4 py-3 rounded-xl text-sm text-[#7a5030] hover:bg-orange-50 font-medium transition-colors">
                {label}
              </button>
            ))}
            <button onClick={() => scrollTo("contacts")} className="w-full btn-primary py-3 rounded-xl font-semibold text-sm mt-1">
              Оставить заявку
            </button>
          </div>
        )}
      </header>

      {/* ===== ГЕРОЙ ===== */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Фото фон */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/e5df1aec-02d2-4875-8c04-247843b43287/files/7eef9ffe-5e0a-459a-9480-72f56c98c073.jpg)` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />

        {/* Декор */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fdf8f3] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              Принимаем заявки · Владимир и область
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5 animate-fade-up stagger-1">
              РЕМОНТ И ОТДЕЛКА
              <br />
              <span className="text-orange-200">ПОД КЛЮЧ</span>
            </h1>

            <p className="text-white/85 text-lg leading-relaxed mb-8 animate-fade-up stagger-2">
              Сборка мебели, шпаклёвка, ламинат, обои, карнизы и плинтусы —<br className="hidden sm:block" />
              всё за один звонок. Работаем быстро и с гарантией.
            </p>

            <ul className="checkmark-list space-y-2 text-white/80 text-sm mb-10 animate-fade-up stagger-3">
              <li>Опыт более 10 лет, сотни выполненных объектов</li>
              <li>Выезд мастера и расчёт стоимости — бесплатно</li>
              <li>Гарантия на все виды работ</li>
            </ul>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
              <button
                onClick={() => scrollTo("contacts")}
                className="btn-primary px-8 py-4 rounded-2xl font-bold text-base shadow-lg"
              >
                Получить расчёт бесплатно
              </button>
              <a
                href="tel:+74920000000"
                className="btn-outline-warm bg-white/10 border-white/50 text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-2xl font-bold text-base"
              >
                📞 Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== УСЛУГИ ===== */}
      <section id="services" className="py-20 px-4 bg-[#fdf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Наши услуги
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#3d2010] mb-3">
              ВСЁ ДЛЯ ВАШЕГО РЕМОНТА
            </h2>
            <p className="text-[#8a6a50] max-w-xl mx-auto">
              Выполняем полный спектр отделочных и монтажных работ — от сборки мебели до чистовой отделки
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 card-shadow border border-orange-50">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.color}22` }}
                >
                  <Icon name={s.icon} size={22} fallback="Wrench" style={{ color: s.color }} />
                </div>
                <h3 className="font-semibold text-[#3d2010] mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#8a6a50] leading-relaxed">{s.desc}</p>
              </div>
            ))}

            {/* CTA карточка */}
            <div className="hero-gradient rounded-2xl p-6 flex flex-col justify-between card-shadow">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon name="PhoneCall" size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Не нашли нужное?</h3>
                <p className="text-white/80 text-sm">Позвоните — обсудим любой вид работ и рассчитаем стоимость</p>
              </div>
              <button
                onClick={() => scrollTo("contacts")}
                className="mt-6 bg-white text-orange-700 font-bold text-sm py-3 rounded-xl hover:bg-orange-50 transition-colors"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ПРЕИМУЩЕСТВА ===== */}
      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Почему выбирают нас
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#3d2010] mb-5">
                РАБОТАЕМ С ДУШОЙ,<br />РЕЗУЛЬТАТ РАДУЕТ
              </h2>
              <p className="text-[#8a6a50] mb-8 leading-relaxed">
                Мы не просто делаем ремонт — мы создаём уют. Каждый объект принимаем близко к сердцу и доводим до идеала. Убедитесь сами.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {ADVANTAGES.map((a) => (
                  <div key={a.title} className="flex gap-4 p-4 rounded-2xl bg-[#fdf8f3] border border-orange-50">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <Icon name={a.icon} size={18} className="text-orange-500" fallback="Check" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#3d2010] text-sm">{a.title}</div>
                      <div className="text-xs text-[#8a6a50] mt-0.5">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Счётчики */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "350+", label: "Выполненных объектов", color: "bg-orange-50 border-orange-100" },
                { num: "10+", label: "Лет опыта в отделке", color: "bg-green-50 border-green-100" },
                { num: "100%", label: "Клиентов рекомендуют нас", color: "bg-amber-50 border-amber-100" },
                { num: "1 день", label: "Выезд и замер бесплатно", color: "bg-stone-50 border-stone-100" },
              ].map((s) => (
                <div key={s.label} className={`${s.color} border rounded-2xl p-6 text-center card-shadow`}>
                  <div className="font-display font-bold text-3xl text-[#b5651d] mb-2">{s.num}</div>
                  <div className="text-sm text-[#7a5030] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ВИДЫ РАБОТ / ПОРТФОЛИО-ТИЗЕР ===== */}
      <section id="works" className="py-20 px-4 bg-[#fdf8f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Виды работ
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#3d2010] mb-3">
              ЧТО МЫ ДЕЛАЕМ
            </h2>
            <p className="text-[#8a6a50] max-w-lg mx-auto">
              Берёмся за любые задачи — от мелкого ремонта до полного преображения квартиры
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {WORKS.map((w, i) => (
              <div
                key={w.label}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 card-shadow border border-orange-50 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                  <span className="font-display font-bold text-orange-600 text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#3d2010]">{w.label}</div>
                  <div className="text-xs text-[#8a6a50]">{w.tag}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Призыв */}
          <div className="hero-gradient rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                ГОТОВЫ НАЧАТЬ?
              </h3>
              <p className="text-white/80">Оставьте заявку — перезвоним и рассчитаем стоимость бесплатно</p>
            </div>
            <button
              onClick={() => scrollTo("contacts")}
              className="shrink-0 bg-white text-orange-700 font-bold px-8 py-4 rounded-2xl hover:bg-orange-50 transition-colors shadow-lg text-sm"
            >
              Получить расчёт →
            </button>
          </div>
        </div>
      </section>

      {/* ===== ФОРМА ЗАЯВКИ ===== */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Левая часть */}
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Связаться с нами
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#3d2010] mb-4">
                ОСТАВЬТЕ ЗАЯВКУ —<br />МЫ ПЕРЕЗВОНИМ
              </h2>
              <p className="text-[#8a6a50] mb-8 leading-relaxed">
                Расскажите о задаче — приедем, замерим и предложим оптимальное решение. Выезд и консультация бесплатно.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (4922) 00-00-00" },
                  { icon: "MapPin", label: "Город", value: "Владимир и Владимирская область" },
                  { icon: "Clock", label: "Время работы", value: "Ежедневно 8:00 – 20:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4 p-4 rounded-2xl bg-[#fdf8f3] border border-orange-50">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={18} className="text-orange-500" fallback="Info" />
                    </div>
                    <div>
                      <div className="text-xs text-[#8a6a50]">{c.label}</div>
                      <div className="font-semibold text-[#3d2010] text-sm">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Форма */}
            <div className="bg-[#fdf8f3] rounded-3xl p-7 border border-orange-100 shadow-sm">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#3d2010] mb-2">Заявка отправлена!</h3>
                  <p className="text-[#8a6a50]">Мы перезвоним вам в течение 15 минут в рабочее время.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", service: "", comment: "" }); }}
                    className="mt-6 btn-outline-warm px-6 py-2.5 rounded-xl text-sm font-semibold"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-2xl text-[#3d2010] mb-1">Заявка на расчёт</h3>
                  <p className="text-sm text-[#8a6a50] mb-6">Бесплатно, без обязательств</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#8a6a50] mb-1.5">Ваше имя *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Петров"
                        className="w-full bg-white border border-orange-100 rounded-xl px-4 py-3 text-sm text-[#3d2010] placeholder:text-[#c8a888] outline-none focus:border-orange-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8a6a50] mb-1.5">Телефон *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (000) 000-00-00"
                        className="w-full bg-white border border-orange-100 rounded-xl px-4 py-3 text-sm text-[#3d2010] placeholder:text-[#c8a888] outline-none focus:border-orange-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8a6a50] mb-1.5">Вид работы</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white border border-orange-100 rounded-xl px-4 py-3 text-sm text-[#3d2010] outline-none focus:border-orange-400 transition-colors"
                      >
                        <option value="">Выберите услугу</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Другое">Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8a6a50] mb-1.5">Комментарий</label>
                      <textarea
                        rows={3}
                        value={form.comment}
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        placeholder="Опишите задачу, площадь, особые пожелания..."
                        className="w-full bg-white border border-orange-100 rounded-xl px-4 py-3 text-sm text-[#3d2010] placeholder:text-[#c8a888] outline-none resize-none focus:border-orange-400 transition-colors"
                      />
                    </div>

                    <button type="submit" className="w-full btn-primary py-4 rounded-xl font-bold text-base shadow-md">
                      Отправить заявку →
                    </button>

                    <p className="text-xs text-center text-[#c8a888]">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ФУТЕР ===== */}
      <footer className="bg-[#3d2010] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <Icon name="Hammer" size={14} className="text-white" />
            </div>
            <span className="font-display font-bold text-white">МастерОтделка</span>
          </div>
          <div className="text-white/40 text-xs text-center">
            Владимир · Ремонт и отделка квартир · Ежедневно 8:00–20:00
          </div>
          <a href="tel:+74920000000" className="text-orange-300 font-semibold hover:text-orange-200 transition-colors">
            +7 (4922) 00-00-00
          </a>
        </div>
      </footer>

    </div>
  );
}
