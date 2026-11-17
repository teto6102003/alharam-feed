import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  MapPin,
  MessageCircle,
  PackageSearch,
  Search,
  Wheat,
  X,
} from 'lucide-react';

type ProductGroup = {
  name: string;
  items: string[];
};

const groups: ProductGroup[] = [
  {
    name: 'أعلاف الهرم',
    items: ['خلطة بط الهرم سوبر', 'خلطة مواشي سوبر', 'خلطة مواشي اقتصادي', 'علف كلفة حمام الهرم'],
  },
  {
    name: 'أعلاف العز',
    items: ['بادي نامي ٢٥ك ٢١٪؜ بروتين', 'كسب العز ٥٠ ك ١٦٪؜ بروتين', 'بياض العز ١٤٪؜'],
  },
  {
    name: 'أعلاف دواجن التسمين الإيمان',
    items: ['سوبر بادى', 'علف سوبر نامى', 'علف سوبر ناهى', 'علف بادى نامى', 'علف بادى للتربية المنزلية', 'علف نامى للتربية المنزلية', 'علف ناهى للتربية المنزلية'],
  },
  {
    name: 'أعلاف دواجن البياض الإيمان',
    items: ['علف بادي بياض', 'علف نامى بياض', 'علف قبل وضع البيض', 'علف بياض انتاجى'],
  },
  {
    name: 'أعلاف البط الإيمان',
    items: ['علف بط تسمين', 'علف بط بياض سوبر'],
  },
  {
    name: 'أعلاف مواشي الإيمان',
    items: ['علف مواشي تسمين فطام', 'علف مواشي تسمين', 'علف مواشي حلاب', 'علف مواشي حلاب عالي الادرار'],
  },
  {
    name: 'علف أغنام وماعز الإيمان',
    items: [],
    // No varieties are currently available.
  },
  {
    name: 'أعلاف أرانب الإيمان',
    items: ['علف ارانب تسمين', 'علف ارانب مرضعات', 'علف ارانب سوبر مرضعات'],
  },
  {
    name: 'علف نماء',
    items: ['سوبر بادي % 23', 'سوبر نامى%21', 'سوبر ناهي 19 %', 'سوبر بادي نامي %21 10ك', 'بادي نامي 21 % منزلي', 'بياض 10 %14ك', 'بياض %25 14ك', 'بياض %16', 'بياض %18'],
  },
  {
    name: 'أعلاف الفجر',
    items: [],
    // Seasonal availability will be confirmed directly with the shop.
  },
  {
    name: 'خامات',
    items: ['دشيشه ناعم', 'دشيشة خشن', 'صويا ٤٦', 'شامى مستورد', 'شامي مطحون', 'شامي حصى', 'شامى محلى'],
  },
];

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const productCount = groups.reduce((sum, group) => sum + group.items.length, 0);
const productImages: Record<string, string> = {
  'خلطة بط الهرم سوبر': '/products/duck-super.webp',
  'كسب العز ٥٠ ك ١٦٪؜ بروتين': '/products/alaz-kasb.webp',
  'بياض العز ١٤٪؜': '/products/alaz-layer-14.webp',
  'بادي نامي ٢٥ك ٢١٪؜ بروتين': '/products/alaz-starter-grower.webp',
};
const contactNumber = '+201287561570';
const whatsappUrl = 'https://wa.me/201287561570';
const mapUrl = 'https://maps.app.goo.gl/dWeCdeb4dKt28Xsm7?g_st=ic';

function ContactLink({ className = '' }: { className?: string }) {
  return (
    <a className={`contact-link ${className}`} href={`tel:${contactNumber}`} data-testid="link-contact-phone">
      <MessageCircle size={16} strokeWidth={2} aria-hidden="true" />
      <span>تواصل معنا</span>
    </a>
  );
}

function Home() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');
  const normalizedQuery = query.trim().toLocaleLowerCase('ar');

  const visibleGroups = useMemo(() => groups
    .filter((group) => activeCategory === 'الكل' || group.name === activeCategory)
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        !normalizedQuery ||
        item.toLocaleLowerCase('ar').includes(normalizedQuery) ||
        group.name.toLocaleLowerCase('ar').includes(normalizedQuery),
      ),
    }))
    .filter((group) => group.items.length > 0 || (!normalizedQuery && group.items.length === 0)), [activeCategory, normalizedQuery]);

  const filteredCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  function selectCategory(category: string) {
    setActiveCategory(category);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div dir="rtl" lang="ar">
      <header className="site-header">
        <div className="catalog-shell header-inner">
          <a className="brand-lockup" href="#top" aria-label="العودة إلى بداية الصفحة" data-testid="link-home">
            <img className="brand-logo" src={publicAsset("/alharam-logo.jpeg")} alt="شعار الهرم للأعلاف" data-testid="img-brand-logo" />
            <span>
              <span className="brand-name">الهرم للأعلاف</span>
              <span className="brand-caption">خير أرضنا، لكل تربية</span>
            </span>
          </a>
          <div className="header-actions">
            <a className="location-link" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-store-location">
              <span className="location-icon"><MapPin size={17} aria-hidden="true" /></span>
              <span>المنيا - بني محمد سلطان</span>
            </a>
            <ContactLink />
          </div>
        </div>
      </header>

      <main id="top" className="catalog-shell">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-art" src={publicAsset("/alharam-logo.jpeg")} alt="" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow">من قلب الأرض المصرية</div>
            <h1 id="hero-title">غذاءٌ يصنع فرقاً <span>في كل يوم.</span></h1>
            <p>اختيارات موثوقة من أعلاف الهرم والعلامات التي نعتز بتوفيرها. منتجات متنوعة للدواجن والمواشي، لتجد ما يناسب تربيتك في مكان واحد.</p>
            <div className="hero-actions">
              <a className="hero-primary" href="#catalog" data-testid="link-browse-catalog">
                تصفّح المنتجات <ArrowLeft size={15} aria-hidden="true" />
              </a>
              <a className="hero-secondary" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-whatsapp-hero">
                <MessageCircle size={15} aria-hidden="true" /> واتساب المحل
              </a>
            </div>
          </div>
          <div className="hero-mark" aria-label="ثقة من أرض المنيا">ثقة<br />من أرض<br />المنيا</div>
        </section>

        <div className="intro-line">
          <p>من اختيار العلف المناسب إلى السؤال عن المتاح، إحنا هنا علشان نسهّلها عليك.</p>
          <div className="proof-note"><Check size={15} aria-hidden="true" /> تواصل مباشر مع المحل</div>
        </div>

        <section id="catalog" className="catalog-section" aria-labelledby="catalog-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">الكتالوج</div>
              <h2 id="catalog-title">اختار اللي يناسب تربيتك</h2>
              <p>تصفّح العلامات والأصناف المتاحة، واسألنا عن التوفر.</p>
            </div>
            <div className="result-count" aria-live="polite" data-testid="text-product-count">
              {filteredCount} من {productCount} صنف
            </div>
          </div>

          <div className="catalog-tools">
            <label className="search-wrap">
              <Search size={17} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ابحث عن علف أو علامة تجارية..."
                aria-label="ابحث في المنتجات"
                data-testid="input-product-search"
              />
              {query && (
                <button className="search-clear" type="button" onClick={() => setQuery('')} aria-label="مسح البحث" data-testid="button-clear-search">
                  <X size={15} aria-hidden="true" />
                </button>
              )}
            </label>
            <span className="filter-count">اختر فئة لعرض أصنافها</span>
          </div>

          <div className="category-list" role="group" aria-label="تصفية حسب الفئة">
            {['الكل', ...groups.map((group) => group.name)].map((category, index) => (
              <button
                key={category}
                className={`category-chip${activeCategory === category ? ' active' : ''}`}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                data-testid={`button-category-${index}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid" aria-live="polite" data-testid="list-products">
            {visibleGroups.length === 0 ? (
              <div className="empty-state" data-testid="status-no-results">
                <PackageSearch size={28} aria-hidden="true" />
                <strong>ملقيناش صنف بالاسم ده</strong>
                <p>جرّب كلمة تانية أو امسح البحث علشان تشوف كل المنتجات.</p>
              </div>
            ) : visibleGroups.map((group, groupIndex) => (
              <section className="category-block" key={group.name} aria-label={group.name}>
                {activeCategory === 'الكل' && <h3 className="category-title">{group.name}</h3>}
                {group.items.length === 0 ? (
                  <div className="coming-soon" data-testid={`status-coming-soon-${groupIndex}`}>
                    <strong>{group.name}</strong>
                    <span>{group.name.includes('الفجر') ? 'قريباً' : 'لا توجد أصناف حالياً — قريباً'}</span>
                  </div>
                ) : (
                  <div className="product-grid">
                    {group.items.map((item, itemIndex) => (
                      <article className={`product-card${productImages[item] ? ' product-card-with-image' : ''}`} key={`${group.name}-${item}`} style={{ animationDelay: `${Math.min(itemIndex * 35, 280)}ms` }} data-testid={`card-product-${groupIndex}-${itemIndex}`}>
                        {productImages[item] ? (
                          <img
                            className="product-image"
                            src={publicAsset(productImages[item])}
                            alt={`صورة ${item}`}
                            loading="lazy"
                            decoding="async"
                            data-testid={`img-product-${groupIndex}-${itemIndex}`}
                          />
                        ) : (
                          <span className="product-symbol"><Wheat size={17} aria-hidden="true" /></span>
                        )}
                        <div>
                          <h4 className="product-name">{item}</h4>
                          <div className="product-brand">{group.name}</div>
                        </div>
                        <ChevronLeft className="product-arrow" size={16} aria-hidden="true" />
                      </article>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="contact-band" aria-labelledby="contact-title">
          <div>
            <h3 id="contact-title">بتدور على صنف معيّن؟</h3>
            <p>كلّمنا واسأل عن المتاح، ونساعدك تختار اللي يناسب احتياجك.</p>
          </div>
          <ContactLink />
        </section>

        <footer className="site-footer">
          <div>
            <div className="footer-brand">الهرم للأعلاف</div>
            <div>من قلب الأرض المصرية، لخدمة أهل المنيا.</div>
          </div>
          <nav className="footer-links" aria-label="روابط التواصل">
            <a href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-footer-location">المنيا - بني محمد سلطان</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">واتساب</a>
            <a href={`tel:${contactNumber}`} data-testid="link-footer-phone">اتصل بنا</a>
          </nav>
          <div className="developer-credit" data-testid="text-developer-credit">
            <strong lang="ar" dir="rtl">المهندس فادي ايمن</strong>
            <span lang="en" dir="ltr">Designed &amp; Developed by Fady Ayman © 2026</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
