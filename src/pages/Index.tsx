import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "companies", label: "Компании" },
  { id: "about", label: "О платформе" },
  { id: "blog", label: "Блог" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  { icon: "Building2", title: "Строительство и ремонт", count: 142, color: "from-blue-500 to-blue-700" },
  { icon: "Truck", title: "Транспорт и логистика", count: 89, color: "from-violet-500 to-violet-700" },
  { icon: "Utensils", title: "Рестораны и кафе", count: 203, color: "from-orange-500 to-orange-700" },
  { icon: "Stethoscope", title: "Медицина и здоровье", count: 76, color: "from-cyan-500 to-cyan-700" },
  { icon: "GraduationCap", title: "Образование", count: 58, color: "from-emerald-500 to-emerald-700" },
  { icon: "Laptop", title: "IT и технологии", count: 94, color: "from-pink-500 to-pink-700" },
];

const COMPANIES = [
  {
    name: "ВладСтрой Групп",
    category: "Строительство",
    rating: 4.9,
    reviews: 127,
    description: "Ведущая строительная компания города. Жилые и коммерческие объекты.",
    verified: true,
    badge: "Топ",
  },
  {
    name: "Техно-Мир",
    category: "IT услуги",
    rating: 4.7,
    reviews: 89,
    description: "Разработка сайтов, IT-аутсорсинг, сервисное обслуживание техники.",
    verified: true,
    badge: "Рекомендуем",
  },
  {
    name: "ЭкспрессЛогист",
    category: "Транспорт",
    rating: 4.8,
    reviews: 214,
    description: "Грузоперевозки по Владимиру и области. Работаем 24/7.",
    verified: false,
    badge: null,
  },
  {
    name: "МедиаСтудия Владимир",
    category: "Реклама",
    rating: 4.6,
    reviews: 63,
    description: "Создание контента, SMM, брендинг для вашего бизнеса.",
    verified: true,
    badge: null,
  },
  {
    name: "АкваСтрой",
    category: "Строительство",
    rating: 4.5,
    reviews: 41,
    description: "Монтаж водоснабжения, отопления, канализации под ключ.",
    verified: false,
    badge: null,
  },
  {
    name: "Юридическая Группа",
    category: "Юридические услуги",
    rating: 5.0,
    reviews: 38,
    description: "Консультации, сопровождение сделок, защита бизнеса.",
    verified: true,
    badge: "Эксперт",
  },
];

const REVIEWS = [
  {
    author: "Михаил Рогозин",
    company: "ВладСтрой Групп",
    rating: 5,
    text: "Отличная компания! Построили офис точно в срок и с высоким качеством. Рекомендую всем, кто ищет надёжного подрядчика.",
    date: "15 апреля 2026",
    avatar: "М",
  },
  {
    author: "Светлана Петрова",
    company: "Техно-Мир",
    rating: 5,
    text: "Очень оперативно сделали корпоративный сайт. Профессиональная команда, понятная коммуникация.",
    date: "10 апреля 2026",
    avatar: "С",
  },
  {
    author: "Алексей Дмитриев",
    company: "ЭкспрессЛогист",
    rating: 4,
    text: "Грузы доставляют в срок, менеджеры на связи. Единственное — хотелось бы онлайн-отслеживание.",
    date: "5 апреля 2026",
    avatar: "А",
  },
];

const BLOG_POSTS = [
  {
    tag: "Бизнес",
    title: "Как увеличить поток клиентов через рейтинг на платформе",
    date: "20 апреля 2026",
    read: "5 мин",
    color: "from-blue-500/20 to-violet-500/20",
  },
  {
    tag: "Тренды",
    title: "Топ-10 растущих отраслей Владимира в 2026 году",
    date: "16 апреля 2026",
    read: "7 мин",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    tag: "Советы",
    title: "Как правильно оформить профиль компании для привлечения клиентов",
    date: "12 апреля 2026",
    read: "4 мин",
    color: "from-cyan-500/20 to-emerald-500/20",
  },
];

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={s <= Math.floor(rating) ? "#f97316" : "rgba(255,255,255,0.15)"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [reviewForm, setReviewForm] = useState({ name: "", company: "", text: "", rating: 5 });
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredCompanies = COMPANIES.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter =
      activeFilter === "all"
        ? true
        : activeFilter === "verified"
        ? c.verified
        : true;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-600/8 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* НАВИГАЦИЯ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl grad-bg flex items-center justify-center glow">
                <span className="font-display font-bold text-white text-lg">В</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">БизнесВладимир</div>
                <div className="text-xs text-white/40">Деловая платформа</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Войти</button>
              <button className="grad-btn px-5 py-2 rounded-xl text-sm font-semibold text-white">
                Добавить компанию
              </button>
            </div>

            <button
              className="lg:hidden text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-white/5 px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full grad-btn px-5 py-3 rounded-xl text-sm font-semibold text-white mt-2">
              Добавить компанию
            </button>
          </div>
        )}
      </nav>

      {/* ГЛАВНАЯ */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/e5df1aec-02d2-4875-8c04-247843b43287/files/86356762-53f5-4327-8b29-9291615a3a38.jpg)`,
          }}
        />
        <div className="absolute inset-0 grad-bg opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-spin-slow" />
          <div
            className="absolute w-[400px] h-[400px] rounded-full border border-violet-500/10 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "15s" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-300 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Владимир · 1 200+ компаний на платформе
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl text-white mb-6 animate-fade-up stagger-1 leading-tight">
            ДЕЛОВОЙ
            <br />
            <span className="grad-text">ВЛАДИМИР</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-up stagger-2 leading-relaxed">
            Найдите лучшие компании и услуги города. Реальные рейтинги, честные отзывы, проверенные партнёры.
          </p>

          <div className="max-w-2xl mx-auto animate-fade-up stagger-3">
            <div className="flex gap-3 glass p-2 rounded-2xl">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Icon name="Search" size={20} className="text-white/40 shrink-0" />
                <input
                  type="text"
                  placeholder="Найти компанию или услугу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none text-sm"
                />
              </div>
              <button onClick={() => scrollTo("companies")} className="grad-btn px-6 py-3 rounded-xl font-semibold text-white text-sm whitespace-nowrap">
                Найти
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12 animate-fade-up stagger-4">
            {[
              { value: "1 200+", label: "Компаний" },
              { value: "8 500+", label: "Отзывов" },
              { value: "15+", label: "Категорий" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4">
                <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm text-blue-400 mb-4">
              <Icon name="Layers" size={14} />
              Все категории
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              ПОПУЛЯРНЫЕ <span className="grad-text">УСЛУГИ</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Выберите нужное направление и найдите лучших специалистов</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <button key={service.title} className="card-hover grad-card rounded-2xl p-6 text-left group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon} size={22} className="text-white" fallback="Briefcase" />
                </div>
                <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-white/40">{service.count} компаний</p>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="glass px-6 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
              Показать все категории →
            </button>
          </div>
        </div>
      </section>

      {/* КОМПАНИИ */}
      <section id="companies" className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full text-sm text-violet-400 mb-4">
              <Icon name="Building" size={14} />
              Рейтинг компаний
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              ЛУЧШИЕ <span className="grad-text">КОМПАНИИ</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {[
              { id: "all", label: "Все" },
              { id: "verified", label: "✓ Проверенные" },
              { id: "top", label: "★ Топ рейтинга" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === f.id ? "grad-btn text-white" : "glass text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-10">
            <div className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
              <Icon name="Search" size={18} className="text-white/30" />
              <input
                type="text"
                placeholder="Поиск по названию или категории..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCompanies.map((company) => (
              <div key={company.name} className="card-hover grad-card rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 flex items-center justify-center text-xl font-display font-bold text-white">
                      {company.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white text-sm">{company.name}</h3>
                        {company.verified && (
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                            <Icon name="Check" size={10} className="text-white" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-white/40">{company.category}</span>
                    </div>
                  </div>
                  {company.badge && (
                    <span className="text-xs px-2 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-medium border border-orange-500/20">
                      {company.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/50 leading-relaxed">{company.description}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <StarRating rating={company.rating} />
                    <span className="text-sm font-bold text-orange-400">{company.rating}</span>
                  </div>
                  <span className="text-xs text-white/30">{company.reviews} отзывов</span>
                </div>

                <button className="w-full glass py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium">
                  Подробнее →
                </button>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-16 text-white/40">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
              <p>Компании не найдены. Попробуйте другой запрос.</p>
            </div>
          )}
        </div>
      </section>

      {/* О ПЛАТФОРМЕ */}
      <section id="about" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm text-cyan-400 mb-6">
                <Icon name="Info" size={14} />
                О платформе
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
                ПЛАТФОРМА ДЛЯ <span className="grad-text">БИЗНЕСА</span>
                <br />
                ВЛАДИМИРА
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                БизнесВладимир — это независимая деловая платформа, где компании и клиенты находят друг друга. Мы
                помогаем местному бизнесу расти и развиваться, создавая прозрачную среду для честных отзывов и реальных
                рейтингов.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "ShieldCheck", title: "Верификация компаний", desc: "Проверяем документы и реальность бизнеса" },
                  { icon: "Star", title: "Честные рейтинги", desc: "Только реальные отзывы от настоящих клиентов" },
                  { icon: "TrendingUp", title: "Аналитика для бизнеса", desc: "Статистика просмотров и обращений" },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 glass rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon name={f.icon} size={18} className="text-blue-400" fallback="Check" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{f.title}</div>
                      <div className="text-xs text-white/40 mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grad-card rounded-3xl p-8 glow">
                <div className="font-display font-bold text-6xl grad-text mb-2">2020</div>
                <div className="text-white/40 text-sm mb-8">Год основания платформы</div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1 200+", label: "Компаний" },
                    { value: "8 500+", label: "Отзывов" },
                    { value: "45 000+", label: "Пользователей" },
                    { value: "98%", label: "Довольных клиентов" },
                  ].map((s) => (
                    <div key={s.label} className="glass rounded-xl p-4 text-center">
                      <div className="font-display font-bold text-2xl text-white">{s.value}</div>
                      <div className="text-xs text-white/40 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass rounded-2xl p-3 border border-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Платформа работает</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-400 mb-4">
              <Icon name="MessageSquare" size={14} />
              Отзывы
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              ЧТО ГОВОРЯТ <span className="grad-text">КЛИЕНТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {REVIEWS.map((review) => (
              <div key={review.author} className="card-hover grad-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.author}</div>
                    <div className="text-xs text-white/40">{review.company}</div>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-sm text-white/60 mt-3 leading-relaxed">"{review.text}"</p>
                <div className="text-xs text-white/25 mt-4">{review.date}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grad-card rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-2">Оставить отзыв</h3>
              <p className="text-white/40 text-sm mb-6">Расскажите о своём опыте работы с компанией</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">Ваше имя</label>
                    <input
                      type="text"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none border border-transparent focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">Название компании</label>
                    <input
                      type="text"
                      value={reviewForm.company}
                      onChange={(e) => setReviewForm({ ...reviewForm, company: e.target.value })}
                      placeholder="ООО Ромашка"
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none border border-transparent focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 mb-2 block">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} onClick={() => setReviewForm({ ...reviewForm, rating: s })} className="transition-transform hover:scale-110">
                        <svg width={28} height={28} viewBox="0 0 20 20" fill={s <= reviewForm.rating ? "#f97316" : "rgba(255,255,255,0.15)"}>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/40 mb-2 block">Ваш отзыв</label>
                  <textarea
                    rows={4}
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                    placeholder="Расскажите подробнее о качестве услуг, сроках, общем впечатлении..."
                    className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none resize-none border border-transparent focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <button className="w-full grad-btn py-4 rounded-xl font-semibold text-white text-sm">
                  Отправить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОГ */}
      <section id="blog" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-sm text-emerald-400 mb-4">
              <Icon name="BookOpen" size={14} />
              Блог
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              СТАТЬИ И <span className="grad-text">СОВЕТЫ</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">Полезные материалы для развития вашего бизнеса во Владимире</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post) => (
              <div key={post.title} className="card-hover grad-card rounded-2xl overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <Icon name="FileText" size={40} className="text-white/20" />
                </div>
                <div className="p-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/50 font-medium">{post.tag}</span>
                  <h3 className="font-semibold text-white mt-3 mb-4 leading-snug">{post.title}</h3>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span>{post.date}</span>
                    <span>{post.read} чтения</span>
                  </div>
                  <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Читать →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="glass px-8 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
              Все статьи →
            </button>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm text-blue-400 mb-4">
              <Icon name="Mail" size={14} />
              Контакты
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              СВЯЖИТЕСЬ <span className="grad-text">С НАМИ</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">Хотите разместить компанию или у вас есть вопросы?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="grad-card rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Наши контакты</h3>
                <div className="space-y-4">
                  {[
                    { icon: "MapPin", label: "Адрес", value: "г. Владимир, ул. Большая Московская, 1" },
                    { icon: "Phone", label: "Телефон", value: "+7 (4922) 00-00-00" },
                    { icon: "Mail", label: "Email", value: "info@biznes-vladimir.ru" },
                    { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 18:00" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                        <Icon name={c.icon} size={18} className="text-blue-400" fallback="Info" />
                      </div>
                      <div>
                        <div className="text-xs text-white/30">{c.label}</div>
                        <div className="text-sm text-white/80">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grad-card rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  {["ВКонтакте", "Telegram", "WhatsApp"].map((social) => (
                    <button key={social} className="flex-1 glass py-3 rounded-xl text-xs text-white/60 hover:text-white hover:bg-white/10 transition-all font-medium">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grad-card rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Напишите нам</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">Имя</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none border border-transparent focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">Телефон</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none border border-transparent focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-2 block">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none border border-transparent focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-2 block">Сообщение</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Ваш вопрос или предложение..."
                    className="w-full glass px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none resize-none border border-transparent focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <button className="w-full grad-btn py-4 rounded-xl font-semibold text-white">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl grad-bg flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">В</span>
              </div>
              <div>
                <div className="font-display font-bold text-white">БизнесВладимир</div>
                <div className="text-xs text-white/30">Деловая платформа города</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/40">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-white transition-colors">
                  {item.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-white/20 text-center">© 2026 БизнесВладимир. Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}