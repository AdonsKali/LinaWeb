import { Helmet } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import LinaMainPage from "./pages/LinaMainPage"

export default function App() {
  const primaryKeywords = ['ИИ', 'ассистент', 'аниме', 'чиби', 'ai', 'character', 'agent', 'локальный', 'автоматизация', 'помощник', 'агент'];
  
  return (
    <>
      <Helmet>
        <title>Lina AI - Персональный AI-агент в образе аниме-чибика</title>
        <meta name="description" content="Lina AI - ваш персональный AI-агент в виде милого аниме-чибика. Помощь в задачах, напоминания, общение и улучшение вашего дня." />
        <meta name="keywords" content={primaryKeywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#ffc0cb" />

        {/* Open Graph */}
        <meta property="og:title" content="Lina AI - Персональный AI-агент в образе аниме-чибика" />
        <meta property="og:description" content="Lina AI - ваш персональный AI-агент в виде милого аниме-чибика. Помощь в задачах, напоминания, общение и улучшение вашего дня." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linaweb-coral.vercel.app" />
        <meta property="og:image" content="https://linaweb-coral.vercel.app/chibis/lina_sit.png" />
        <meta property="og:image:alt" content="Lina AI - персональный AI-агент в образе аниме-чибика" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lina AI - Персональный AI-агент в образе аниме-чибика" />
        <meta name="twitter:description" content="Lina AI - ваш персональный AI-агент в виде милого аниме-чибика. Помощь в задачах, напоминания, общение и улучшение вашего дня." />
        <meta name="twitter:image" content="https://linaweb-coral.vercel.app/chibis/lina_sit.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://linaweb-coral.vercel.app" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      <I18nextProvider i18n={i18n}>
        <LinaMainPage />
      </I18nextProvider>
    </>
  )
}