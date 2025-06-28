import React, { useState } from 'react';
// Si usas Next.js, descomenta la siguiente línea:
// import Head from 'next/head';
import countriesData from '../data/en/countries.json';

// Lista de países populares (slugs del JSON real)
const popularSlugs = [
  'how-much-to-tip-in-united-states',
  'how-much-to-tip-in-united-kingdom',
  'how-much-to-tip-in-france',
  'how-much-to-tip-in-japan',
  'how-much-to-tip-in-brazil'
];

const CountryCard = ({ country }) => (
  <div className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:scale-105">
    <div className="p-4 text-center">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${country.flag.toLowerCase()}.svg`}
          alt={`Flag of ${country.country}`}
          className="w-8 h-8 rounded-full shadow-sm group-hover:shadow-md transition-shadow"
          loading="lazy"
        />
        <span className="text-sm font-medium text-gray-800 group-hover:text-teal-600 transition-colors">
          {country.country}
        </span>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/80 rounded-lg p-6 shadow text-center">
    <div className="mb-2">{icon && icon({ style: { fontSize: 28 } })}</div>
    <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>{title}</h3>
    <p className="text-sm text-slate-700" style={{ fontFamily: 'Arial, sans-serif' }}>{description}</p>
  </div>
);

// Mock icons (reemplaza por los de lucide-react o tu librería preferida)
const Star = (props) => <span {...props}>★</span>;
const Globe = (props) => <span {...props}>🌍</span>;
const Calculator = (props) => <span {...props}></span>;
const Users = (props) => <span {...props}></span>;
const MapPin = (props) => <span {...props}></span>;
const Search = (props) => <span {...props}>🔍</span>;
const Sparkles = (props) => <span {...props}></span>;

const emojiFont = {
  fontFamily: `'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Arial', 'sans-serif'`
};

// Variante 1: SVGs con fondo blanco, borde negro y relleno negro
const RestaurantIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="#000" style={{background:'#fff',borderRadius:'4px',marginRight:'7px',border:'1px solid #000',display:'inline',verticalAlign:'middle'}} aria-hidden="true"><rect width="22" height="22" rx="4" fill="#fff"/><path d="M5 3v8a2 2 0 1 0 4 0V3M7 20v-5M15 3v8a2 2 0 1 0 4 0V3M17 20v-5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/></svg>
);
const TaxiIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="#000" style={{background:'#fff',borderRadius:'4px',marginRight:'7px',border:'1px solid #000',display:'inline',verticalAlign:'middle'}} aria-hidden="true"><rect width="22" height="22" rx="4" fill="#fff"/><rect x="4" y="9" width="14" height="6" rx="2" stroke="#000" strokeWidth="1.5"/><circle cx="7" cy="16" r="1" fill="#000"/><circle cx="15" cy="16" r="1" fill="#000"/></svg>
);
const HotelIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="#000" style={{background:'#fff',borderRadius:'4px',marginRight:'7px',border:'1px solid #000',display:'inline',verticalAlign:'middle'}} aria-hidden="true"><rect width="22" height="22" rx="4" fill="#fff"/><rect x="4" y="8" width="14" height="8" rx="2" stroke="#000" strokeWidth="1.5"/><rect x="8" y="12" width="2" height="2" fill="#000"/><rect x="12" y="12" width="2" height="2" fill="#000"/></svg>
);
const CafeIcon1 = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="#000" style={{background:'#fff',borderRadius:'4px',marginRight:'7px',border:'1px solid #000',display:'inline',verticalAlign:'middle'}} aria-hidden="true"><rect width="22" height="22" rx="4" fill="#fff"/><ellipse cx="11" cy="16" rx="6" ry="2" stroke="#000" strokeWidth="1.5"/><path d="M7 16V7a4 4 0 1 1 8 0v9" stroke="#000" strokeWidth="1.5"/></svg>
);
// Variante 2: SVGs como imágenes base64
const RestaurantIcon2 = () => (
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTUgM3Y4YTIgMiAwIDEgMCA0IDBWMyBNNyAyMHYtNU0xNSAzdjhhMiAyIDAgMSAwIDQgMFYzTTE3IDIwdjUtIiBzdHJva2U9IiMwMDAiIHN0cm9rZVdpZHRoPSIxLjUiIHN0cm9rZUxpbmVjYXA9InJvdW5kIi8+PC9zdmc+" alt="Restaurant" width="22" height="22" style={{marginRight:'7px',verticalAlign:'middle',display:'inline'}} />
);
const TaxiIcon2 = () => (
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNCIgeT0iOSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjYiIHJ4PSIyIiBzdHJva2U9IiMwMDAiIHN0cm9rZVdpZHRoPSIxLjUiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMTYiIHI9IjEiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjE2IiByPSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+" alt="Taxi" width="22" height="22" style={{marginRight:'7px',verticalAlign:'middle',display:'inline'}} />
);
const HotelIcon2 = () => (
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNCIgeT0iOCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjgiIHJ4PSIyIiBzdHJva2U9IiMwMDAiIHN0cm9rZVdpZHRoPSIxLjUiLz48cmVjdCB4PSI4IiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjEyIiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==" alt="Hotel" width="22" height="22" style={{marginRight:'7px',verticalAlign:'middle',display:'inline'}} />
);
const CafeIcon2 = () => (
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHJ4PSI0IiBmaWxsPSIjZmZmIi8+PGVsbGlwc2UgY3g9IjExIiBjeT0iMTYiIHJ4PSI2IiByeT0iMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2VXaWR0aD0iMS41Ii8+PHBhdGggZD0iTTcgMTZWN2E0IDQgMCAxIDEgOCAwdjkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlV2lkdGg9IjEuNSIvPjwvc3ZnPg==" alt="Cafe" width="22" height="22" style={{marginRight:'7px',verticalAlign:'middle',display:'inline'}} />
);

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado de países
  const filteredCountries = countriesData.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Países populares
  const popularCountries = countriesData.filter(country =>
    popularSlugs.includes(country.slug)
  );

  return (
    <>
      {/* SEO y datos estructurados */}
      {/* Si usas Next.js, pon esto dentro de <Head> */}
      <head>
        <title>Tip Global Calculator | Tipping Guide for Every Country (2025)</title>
        <meta name="description" content="Discover tipping customs, recommended percentages, and how much to tip in every country. The ultimate global tipping guide for travelers, backpackers, and business people in 2025." />
        <meta property="og:title" content="Tip Global Calculator | Tipping Guide for Every Country (2025)" />
        <meta property="og:description" content="Discover tipping customs, recommended percentages, and how much to tip in every country. The ultimate global tipping guide for travelers, backpackers, and business people in 2025." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tippingin.com/" />
        <meta property="og:image" content="https://www.tippingin.com/social/social-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tip Global Calculator | Tipping Guide for Every Country (2025)" />
        <meta name="twitter:description" content="Discover tipping customs, recommended percentages, and how much to tip in every country. The ultimate global tipping guide for travelers, backpackers, and business people in 2025." />
        <meta name="twitter:image" content="https://www.tippingin.com/social/social-default.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Tip Global Calculator",
          "url": "https://www.tippingin.com/",
          "description": "Discover tipping customs, recommended percentages, and how much to tip in every country."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is tipping mandatory in most countries?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tipping is not mandatory, but it is customary to leave between 10% and 15% in restaurants in many countries."
              }
            },
            {
              "@type": "Question",
              "name": "How can I find out how much to tip in a specific country?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the Tip Global Calculator to instantly discover tipping customs and recommended percentages for every country."
              }
            }
          ]
        }) }} />
      </head>
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Tip Global Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Welcome to the ultimate global tip calculator and tipping guide. Instantly discover how much to tip in restaurants, hotels, taxis, and more in every country. Perfect for travelers, backpackers, and business people who want to respect local customs and avoid awkward moments.
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the ultimate global tipping guide. Instantly learn how much to tip in restaurants, hotels, taxis, and more in every country. Perfect for travelers, backpackers, and business professionals.
            </p>
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a country..."
                className="pl-10 py-3 text-lg border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/30 w-full rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for a country"
              />
            </div>
          </div>

          {/* Sección de Países Populares */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2" style={{fontFamily: 'Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Noto Color Emoji\", sans-serif'}}>
              <span role="img" aria-label="estrella" className="text-yellow-300 text-3xl">⭐️</span>
              Destinos Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {popularCountries.map((country) => (
                <CountryCard key={country.slug} country={country} />
              ))}
            </div>
          </div>

          {/* Enlaces internos a países populares para SEO */}
          <div className="mb-12 text-center">
            <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {popularCountries.map((country) => (
                <a
                  key={country.slug}
                  href={`/en/${country.slug}`}
                  className="text-teal-200 underline hover:text-white transition-colors text-base"
                >
                  {country.country}
                </a>
              ))}
            </div>
          </div>

          {/* Todos los Países */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2" style={{fontFamily: 'Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Noto Color Emoji\", sans-serif'}}>
              <span role="img" aria-label="globo" className="text-white text-3xl">🌍</span>
              Todos los Países
            </h2>
            <div className="border-0 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="p-6">
                <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-transparent">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {filteredCountries.map((country) => (
                      <CountryCard key={country.slug} country={country} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
              Why Choose Tip Global Calculator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <FeatureCard
                icon={MapPin}
                title="Global Coverage"
                description="Find tipping rules for restaurants, bars, taxis, hotels and more in every country."
              />
              <FeatureCard
                icon={Calculator}
                title="Instant Results"
                description="Get immediate calculations and avoid awkward moments."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
              <FeatureCard
                icon={Users}
                title="Trusted Worldwide"
                description="Used by travelers and locals in over 200 countries."
              />
              <FeatureCard
                icon={Sparkles}
                title="Always Updated"
                description="We keep our data fresh and accurate for every destination."
              />
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="border-0 bg-white/10 backdrop-blur-sm max-w-4xl mx-auto mb-8 rounded-lg">
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>Quick Tipping Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Restaurants</h4>
                  <p className="text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>Most countries expect 10-15 percent for good service, but some include service charges.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Taxis</h4>
                  <p className="text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>Rounding up the fare is common, but not always required.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Hotels</h4>
                  <p className="text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>Tip bellhops, housekeeping, and valets a small amount for good service.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Cafes</h4>
                  <p className="text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>Leaving small change is appreciated, but not mandatory.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-white/80 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span>&copy; {new Date().getFullYear()} Tip Global Calculator. All rights reserved.</span>
              <a href="/privacy" className="text-white hover:text-teal-200 transition-colors underline">
                Privacy Policy
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index; 