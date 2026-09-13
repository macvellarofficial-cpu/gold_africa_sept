import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, recentArticlesList, regionalGuidesList } from '../data/articlesData';
import { SafeImage } from '../components/SafeImage';
import { SEO } from '../components/SEO';
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/schemaGenerator';

interface BlogArticlePageProps {
  onOpenQuoteModal: (slug?: string) => void;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || 'buy-gold-in-south-africa';
  const article = getArticleBySlug(currentSlug);

  // Sidebar Quote Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@buygold.blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          article_context: article.title,
          message: formData.message || 'Requested gold quotation via article sidebar',
          _subject: `🔔 New Quote Lead from Article: ${article.title.slice(0, 40)}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Blog lead submit error:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 6000);
    }
  };

  const schemas: any[] = [
    generateArticleSchema(article),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: article.category, url: '/products' },
      { name: article.title, url: `/${article.slug}` },
    ]),
  ];

  if (article.faqs && article.faqs.length > 0) {
    schemas.push(generateFAQSchema(article.faqs));
  }

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-8 text-[#2C2410]">
      <SEO
        title={`${article.title} | Gold Africa`}
        description={article.metaDescription}
        canonical={`/${article.slug}`}
        keywords={`buy gold in africa, ${article.category.toLowerCase()}, ${article.title.toLowerCase()}, gold trading africa, gold bars africa`}
        ogType="article"
        ogImage={article.featuredImage}
        author={article.author || 'Gold Africa'}
        schema={combinedSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS */}
        <nav className="text-xs sm:text-sm text-[#7A6A4E] mb-6 flex flex-wrap items-center gap-1.5 font-medium">
          <Link to="/" className="hover:text-[#B8860B] transition">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#B8860B] transition">{article.category}</Link>
          <span>/</span>
          <span className="text-[#3A301A] line-clamp-1">{article.title}</span>
        </nav>

        {/* TWO-COLUMN LAYOUT MATCHING USER SCREENSHOTS */}
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full max-w-full">
          
          {/* LEFT MAIN ARTICLE COLUMN (70%) */}
          <article className="w-full lg:w-[70%] min-w-0 max-w-full bg-white p-4 sm:p-8 md:p-10 rounded-lg shadow-sm border border-[#E8DFC8] break-words">
            
            {/* ARTICLE HEADER */}
            <header className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#F4ECD8] text-[#8C6B1B] text-xs font-bold uppercase tracking-wider rounded mb-3">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A1408] leading-tight mb-3">
                {article.title}
              </h1>
              <p className="text-base sm:text-lg text-[#6A5A3B] italic font-medium leading-relaxed mb-4">
                {article.subtitle}
              </p>

              {/* METADATA BAR */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#7F7256] border-y border-[#ECE4D0] py-3">
                <span className="font-semibold text-[#3C3218]">By {article.author}</span>
                <span>•</span>
                <span>Published {article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">✓ Verified LBMA Assay</span>
              </div>
            </header>

            {/* FEATURED IMAGE */}
            <div className="mb-8 overflow-hidden rounded-md shadow-sm border border-[#E5DAC0]">
              <SafeImage
                src={article.featuredImage}
                alt={article.title}
                fallbackCategory="bars"
                className="w-full h-auto max-h-[460px] object-cover hover:scale-[1.01] transition duration-300"
              />
              <div className="bg-[#FAF6EC] px-4 py-2 text-xs text-[#7A6A4E] italic border-t border-[#E5DAC0]">
                Certified 24K and 22K gold bullion bars with registered refinery hallmark stamps and unalterable assay documentation.
              </div>
            </div>

            {/* LEAD INTRO PARAGRAPH */}
            <div className="text-base sm:text-lg text-[#2C2410] leading-relaxed font-serif mb-8 first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#B8860B]">
              {article.leadParagraph}
            </div>

            {/* SECTIONS */}
            {article.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1408] mb-4 pb-2 border-b border-[#EADFC7]">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#382F18] text-sm sm:text-base leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mb-6 ml-1">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-sm sm:text-base text-[#382F18]">
                        <span className="text-[#B8860B] font-bold mr-2.5 mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="bg-[#FAF3E0] border-l-4 border-[#B8860B] p-4 sm:p-5 rounded-r my-6 shadow-sm">
                    <p className="text-sm sm:text-base text-[#4F3E16] font-medium leading-relaxed">
                      {section.callout}
                    </p>
                  </div>
                )}

                {/* INSERT SECONDARY IMAGE AFTER SECTION 1 */}
                {idx === 1 && (
                  <div className="my-8 overflow-hidden rounded-md shadow-sm border border-[#E5DAC0]">
                    <SafeImage
                      src={article.secondaryImage}
                      alt={`${article.title} inspection and assay`}
                      fallbackCategory="handHoldingBar"
                      className="w-full h-auto max-h-[400px] object-cover"
                    />
                    <div className="bg-[#FAF6EC] px-4 py-2 text-xs text-[#7A6A4E] italic border-t border-[#E5DAC0]">
                      Fine gold bars undergoing physical examination and non-destructive X-ray fluorescence assay verification.
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* COMPARISON TABLE */}
            {article.table && (
              <section className="my-10">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1408] mb-3">
                  {article.table.caption}
                </h3>
                <div className="overflow-x-auto rounded-lg border border-[#DACDB0] shadow-sm">
                  <table className="min-w-full divide-y divide-[#DACDB0] text-left text-xs sm:text-sm">
                    <thead className="bg-[#241A06] text-[#E8D499]">
                      <tr>
                        {article.table.headers.map((header, hIdx) => (
                          <th key={hIdx} className="px-3.5 py-3 font-semibold tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#EFE7D5]">
                      {article.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F0]'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-3.5 py-3 text-[#362D17] whitespace-nowrap sm:whitespace-normal font-medium">
                              {cIdx === 0 ? <strong className="text-[#1A1408]">{cell}</strong> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* INTERNAL BACKLINKS / RELATED RESOURCES (FIXING USER ISSUE) */}
            <section className="my-10 p-6 bg-[#FAF6EC] rounded-lg border border-[#E5DAC0]">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1408] mb-4 flex items-center gap-2">
                <span>🔗</span> Essential Gold Sourcing & Regulatory Guides
              </h3>
              <p className="text-xs sm:text-sm text-[#665738] mb-4">
                Explore in-depth technical procedures, purity benchmarks, and legal frameworks across key African and international bullion hubs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {article.backlinks.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    to={link.url}
                    className="p-3 bg-white rounded border border-[#E2D6BC] hover:border-[#B8860B] hover:shadow-sm transition flex flex-col group"
                  >
                    <span className="text-sm font-bold text-[#8C6B1B] group-hover:text-[#B8860B] transition flex items-center justify-between">
                      {link.text}
                      <span className="text-xs text-[#A89878]">→</span>
                    </span>
                    <span className="text-xs text-[#6B5C3D] mt-1 leading-snug">
                      {link.context}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="my-10">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1408] mb-6 pb-2 border-b border-[#EADFC7]">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                  {article.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-5 bg-[#FAF7F0] rounded-lg border border-[#E8DFC8]">
                      <h4 className="text-base sm:text-lg font-bold text-[#1A1408] mb-2 font-serif">
                        Q: {faq.question}
                      </h4>
                      <p className="text-sm sm:text-base text-[#382F18] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BOTTOM INLINE CTA */}
            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#2A1F08] to-[#3D2E0E] text-[#F3EADA] rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#EED89F] mb-1">
                  Ready to Purchase Certified Gold Bullion?
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C2A5] max-w-xl">
                  Connect directly with our institutional trading desk in Kampala and Johannesburg for live spot quotations, assay verifications, and insured international air delivery.
                </p>
              </div>
              <button
                onClick={() => onOpenQuoteModal(article.slug)}
                className="whitespace-nowrap px-6 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1A1408] font-bold text-sm uppercase tracking-wider rounded shadow-md transition transform active:scale-95"
              >
                Request a Quote →
              </button>
            </div>
          </article>

          {/* RIGHT SIDEBAR COLUMN (30%) - EXACT REPLICATION OF LIVE ASTRA THEME */}
          <aside className="w-full lg:w-[30%] min-w-0 max-w-full space-y-6 lg:sticky lg:top-24">
            
            {/* WIDGET 1: REQUEST A QUOTE FORM */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8DFC8]">
              <h3 className="text-lg font-serif font-bold text-[#1A1408] uppercase tracking-wide border-b border-[#E8DFC8] pb-2 mb-4">
                Request a Quote!
              </h3>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded text-emerald-800 text-sm">
                  <p className="font-bold mb-1">✓ Thank you for your inquiry!</p>
                  <p className="text-xs leading-relaxed">
                    Our bullion desk has received your request. A senior representative will review your inquiry and contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#57492D] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 text-sm border border-[#D5C7AA] rounded focus:outline-none focus:border-[#B8860B] bg-[#FFFDF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#57492D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-sm border border-[#D5C7AA] rounded focus:outline-none focus:border-[#B8860B] bg-[#FFFDF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#57492D] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 text-sm border border-[#D5C7AA] rounded focus:outline-none focus:border-[#B8860B] bg-[#FFFDF9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#57492D] mb-1">
                      Inquiry Details (Quantity & Destination)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. 5kg 24K bars CIF Dubai / Zurich..."
                      className="w-full px-3 py-2 text-sm border border-[#D5C7AA] rounded focus:outline-none focus:border-[#B8860B] bg-[#FFFDF9]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 bg-[#C5A059] hover:bg-[#B38D45] text-white font-bold text-sm rounded shadow transition transform active:scale-98 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? 'Transmitting to Trading Desk...' : 'Submit Inquiry →'}
                  </button>
                  <p className="text-[11px] text-[#8C7D60] text-center italic">
                    Strict AML/KYC protocols apply. Confidential & insured handling.
                  </p>
                </form>
              )}
            </div>

            {/* WIDGET 2: GOLD BUYING GUIDE CARD */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E8DFC8]">
              <h4 className="text-sm font-serif font-bold text-[#1A1408] uppercase tracking-wider mb-3">
                Gold Buying Guide
              </h4>
              <Link to="/documents-required-to-buy-gold" className="block group">
                <div className="overflow-hidden rounded mb-2.5">
                  <SafeImage
                    src="https://goldbarsuppliers.com/wp-content/uploads/2025/10/buygold.jpeg"
                    alt="Gold Buying Guide"
                    fallbackCategory="bars"
                    className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h5 className="text-sm font-bold text-[#2A200B] group-hover:text-[#B8860B] transition leading-snug">
                  How to Safely Buy Gold Online: The Complete 2026 Investor Guide
                </h5>
                <p className="text-xs text-[#6F6043] mt-1 line-clamp-2">
                  Learn mandatory compliance steps, avoid counterfeit scams, and secure insured vault-to-vault freight.
                </p>
                <span className="text-xs font-bold text-[#B8860B] mt-2 inline-block">
                  Read Full Guide →
                </span>
              </Link>
            </div>

            {/* WIDGET 3: SAFELY BUY GOLD ONLINE (REGIONAL BUTTONS) */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E8DFC8]">
              <h4 className="text-sm font-serif font-bold text-[#1A1408] uppercase tracking-wider mb-3">
                Safely Buy Gold Online
              </h4>
              <p className="text-xs text-[#7A6B4E] mb-3">
                Select your destination country for localized customs, duties, and insured air freight information:
              </p>
              <div className="space-y-2">
                {regionalGuidesList.map((region, rIdx) => (
                  <Link
                    key={rIdx}
                    to={`/${region.slug}`}
                    className="block w-full text-left px-3 py-2 text-xs font-semibold text-[#3C321B] bg-[#FAF7F1] hover:bg-[#F3EADA] hover:text-[#B8860B] border border-[#E4D8BE] rounded transition"
                  >
                    📍 {region.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* WIDGET 4: RECENTLY PUBLISHED ARTICLES */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E8DFC8]">
              <h4 className="text-sm font-serif font-bold text-[#1A1408] uppercase tracking-wider mb-3">
                Recently Published
              </h4>
              <ul className="divide-y divide-[#EFE7D5] text-xs">
                {recentArticlesList.map((item, idx) => (
                  <li key={idx} className="py-2.5 first:pt-0 last:pb-0">
                    <Link
                      to={`/${item.slug}`}
                      className="font-semibold text-[#2F2612] hover:text-[#B8860B] transition line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <span className="text-[11px] text-[#8A7B5F] mt-0.5 block">
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WIDGET 5: INSTANT WHATSAPP / TELEPHONE DESK */}
            <div className="bg-[#241A06] text-[#E8DAB5] p-5 rounded-lg shadow-sm border border-[#443314]">
              <h4 className="text-sm font-serif font-bold text-[#EDD79C] uppercase tracking-wider mb-2">
                Direct Trading Desk
              </h4>
              <p className="text-xs text-[#C6B696] mb-3 leading-relaxed">
                Need urgent price indications, prompt assay verification, or physical inspection in Kampala or Johannesburg?
              </p>
              <a
                href="https://wa.me/256762079775"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded transition shadow"
              >
                <span>💬 Chat on WhatsApp (+256 762 079775)</span>
              </a>
              <div className="mt-3 text-center">
                <Link
                  to="/contact"
                  className="text-xs text-[#D8C69F] hover:text-[#FFF] underline font-medium"
                >
                  Or schedule an in-person refinery visit
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;
