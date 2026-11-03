import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CharcoalSparks } from './components/CharcoalSparks';
import ScrollToTop from './components/ScrollToTop';
import { LogoIntroAnimation } from './components/LogoIntroAnimation';
import { AnimationProvider } from './context/AnimationContext';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ManufacturingPage from './pages/ManufacturingPage';
import QualityPage from './pages/QualityPage';
import PackagingExportPage from './pages/PackagingExportPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main-content"
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ minHeight: '80vh' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/packaging-export" element={<PackagingExportPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<ArticleDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export function App() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <AnimationProvider>
      <Router>
        <ScrollToTop />
        {introActive && (
          <LogoIntroAnimation onComplete={() => setIntroActive(false)} />
        )}
        {/* Orange Charcoal Spark Background - Outside app-layout */}
        <CharcoalSparks />
        <div className="app-layout" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
          {/* Primary Navigation Header */}
          <Header hideLogoUntilIntroDone={introActive} />

          {/* Main Routed Content with Page Transitions */}
          <AnimatedRoutes />

          {/* Comprehensive B2B Footer */}
          <Footer />

          {/* Floating Quick Action Controls */}
          <FloatingActions />
        </div>
      </Router>
    </AnimationProvider>
  );
}

export default App;
