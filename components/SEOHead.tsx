import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = "Digital Empowerment Hub - Bridging the Digital Divide",
  description = "Transforming lives through digital education and sustainable technology solutions for marginalized youth worldwide. Join our mission to empower youth aged 18-25 across Türkiye, China, Somalia, Vietnam, Afghanistan, and Malaysia.",
  keywords = "digital empowerment, youth education, digital divide, social business, Muhammad Yunus, digital skills, technology access, sustainable development, SDG, online learning, offline education",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://digitalhub.org"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Digital Empowerment Hub');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Digital Empowerment Hub', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Additional meta tags
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('msapplication-navbutton-color', '#000000');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Digital Empowerment Hub",
      "alternateName": "DEH",
      "url": canonicalUrl,
      "logo": `${canonicalUrl}/logo.png`,
      "description": description,
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Digital Empowerment Hub Team"
      },
      "mission": "Bridging the digital divide and empowering marginalized youth through sustainable technology solutions",
      "areaServed": [
        {"@type": "Country", "name": "Turkey"},
        {"@type": "Country", "name": "China"},
        {"@type": "Country", "name": "Somaliland"},
        {"@type": "Country", "name": "Vietnam"},
        {"@type": "Country", "name": "Afghanistan"},
        {"@type": "Country", "name": "Malaysia"}
      ],
      "sameAs": [
        "https://linkedin.com/company/digitalhub",
        "https://twitter.com/digitalhub",
        "https://facebook.com/digitalhub"
      ]
    };
    
    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}