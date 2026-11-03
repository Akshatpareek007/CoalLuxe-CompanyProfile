import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/images/logo_transparent.png',
  url,
  type = 'website',
  noindex = false,
}) => {
  const brandName = 'CoalLuxe';
  const fullTitle = title.includes(brandName) ? title : `${title} | ${brandName}`;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const logoFavicon = '/images/logo_transparent.png';
  const pngFavicon = '/favicon.png';
  const icoFavicon = '/favicon.ico';

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper: update or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper: update or create link tag
    const setLinkTag = (rel: string, href: string, type?: string, sizes?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (sizes) selector += `[sizes="${sizes}"]`;
      let element = document.querySelector(selector) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (sizes) element.setAttribute('sizes', sizes);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      if (type) element.setAttribute('type', type);
    };

    // Primary Meta Tags
    setMetaTag('name', 'title', fullTitle);
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Robots Indexing
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
    }

    // Open Graph / Facebook
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    if (currentUrl) setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:site_name', brandName);

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // Canonical link
    if (currentUrl) {
      setLinkTag('canonical', currentUrl);
    }

    // Set brand logo favicons on every page
    setLinkTag('icon', logoFavicon, 'image/png');
    setLinkTag('icon', pngFavicon, 'image/png', '32x32');
    setLinkTag('shortcut icon', icoFavicon, 'image/x-icon');
    setLinkTag('apple-touch-icon', logoFavicon);
  }, [fullTitle, description, keywords, image, currentUrl, type, noindex, logoFavicon, pngFavicon, icoFavicon]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={brandName} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {currentUrl && <link rel="canonical" href={currentUrl} />}
      
      {/* Brand logo favicon on every page */}
      <link rel="icon" type="image/png" href={logoFavicon} />
      <link rel="icon" type="image/png" sizes="32x32" href={pngFavicon} />
      <link rel="shortcut icon" type="image/x-icon" href={icoFavicon} />
      <link rel="apple-touch-icon" href={logoFavicon} />
    </>
  );
};

export default SEO;
