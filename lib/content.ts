// CMS-Ready Content Configuration
// This file centralizes all website content for easy CMS integration

export interface ContentSection {
  id: string;
  title: string;
  content: any;
  lastUpdated: string;
  published: boolean;
}

export const siteContent = {
  // Hero Section
  hero: {
    title: "Bridging the Digital Divide, Empowering Youth",
    subtitle: "Transforming lives through digital education and sustainable technology solutions for marginalized youth worldwide",
    ctaButtons: [
      { text: "Join Us", action: "join", primary: true },
      { text: "Learn More", action: "learn", primary: false }
    ],
    stats: [
      { number: "6", label: "Target Countries" },
      { number: "18-25", label: "Age Group" },
      { number: "100%", label: "Social Impact" },
      { number: "2025", label: "Launch Year" }
    ]
  },

  // About Section
  about: {
    title: "About Digital Empowerment Hub",
    subtitle: "A social business dedicated to breaking down digital barriers and creating sustainable pathways to economic opportunity",
    mission: "The Digital Empowerment Hub (DEH) exists to bridge the digital divide that prevents millions of young people from accessing economic opportunities in our increasingly connected world.",
    inspiration: "Inspired by Muhammad Yunus's social business principles",
    targetCountries: [
      "Türkiye", "China", "Somalia", "Vietnam", "Afghanistan", "Malaysia"
    ],
    problemStats: [
      { stat: "73%", description: "of young people in developing countries lack basic digital skills" },
      { stat: "2.9B", description: "people worldwide still lack internet access" }
    ]
  },

  // Solutions Section
  solutions: {
    title: "Our Solutions",
    subtitle: "Three interconnected approaches to sustainable digital empowerment",
    solutions: [
      {
        title: "Mobile-First E-Learning Platform",
        description: "Accessible digital education designed for smartphones with offline capabilities",
        icon: "smartphone",
        features: [
          "Offline-first architecture for areas with limited connectivity",
          "Localized content in multiple languages",
          "Adaptive learning pathways",
          "Peer-to-peer knowledge sharing",
          "Micro-learning modules optimized for mobile"
        ],
        highlight: "Works without internet connection"
      },
      {
        title: "Community Digital Learning Hubs",
        description: "Physical spaces that bring technology and learning to local communities",
        icon: "users",
        features: [
          "Solar-powered technology centers",
          "Community-managed learning spaces",
          "Train-the-trainer programs",
          "Local language support",
          "Collaborative project spaces"
        ],
        highlight: "Sustainable and community-owned"
      },
      {
        title: "Sustainable Business Model",
        description: "A no-dividend social business model that reinvests all profits into expansion",
        icon: "dollar-sign",
        features: [
          "Zero dividend to investors",
          "100% profit reinvestment",
          "Scholarship programs for underserved youth",
          "Community partnership revenue",
          "Transparent impact reporting"
        ],
        highlight: "All profits fund more scholarships"
      }
    ]
  },

  // Impact Section
  impact: {
    title: "Our Impact",
    subtitle: "Measuring success through lives transformed and communities empowered",
    metrics: [
      { number: "10,000+", label: "Youth to be Empowered", description: "Projected reach by 2026" },
      { number: "85%", label: "Course Completion Rate", description: "Target engagement metric" },
      { number: "70%", label: "Employment Rate", description: "Job placement within 6 months" },
      { number: "100%", label: "Social Impact", description: "All profits reinvested" }
    ],
    sdgs: [
      { number: "1", title: "No Poverty", description: "Creating pathways to economic opportunity" },
      { number: "4", title: "Quality Education", description: "Accessible digital learning for all" },
      { number: "5", title: "Gender Equality", description: "Empowering women and girls in tech" },
      { number: "8", title: "Decent Work", description: "Building skills for digital economy jobs" }
    ]
  },

  // Innovation Section
  innovation: {
    title: "Innovation at Our Core",
    subtitle: "Pioneering solutions that work in the real world, designed for communities with limited resources",
    approaches: [
      {
        phase: "01",
        title: "Offline-First Architecture",
        description: "Revolutionary learning platform that works without internet",
        details: [
          "Content synchronization when connected",
          "Peer-to-peer knowledge sharing via local networks",
          "Progressive Web App technology",
          "Local content caching and management"
        ]
      },
      {
        phase: "02",
        title: "Train-the-Trainer Ambassador Program",
        description: "Community-led scaling model for sustainable growth",
        details: [
          "Local youth become certified trainers",
          "Culturally relevant curriculum adaptation",
          "Peer mentorship and support networks",
          "Community ownership and leadership"
        ]
      }
    ]
  },

  // Roadmap Section
  roadmap: {
    title: "Our Roadmap",
    subtitle: "A carefully planned journey from pilot to global impact, designed for sustainable growth and community ownership",
    phases: [
      {
        phase: "Phase 1",
        period: "Q1 2025 - Q2 2025",
        title: "Foundation & Pilot",
        status: "upcoming",
        countries: ["Türkiye", "Malaysia"],
        description: "Establish core infrastructure and launch pilot programs in two strategic markets"
      },
      {
        phase: "Phase 2", 
        period: "Q3 2025 - Q4 2025",
        title: "Expansion & Optimization",
        status: "planned",
        countries: ["Somalia", "Vietnam"],
        description: "Scale successful pilot model to new regions with enhanced platform features"
      },
      {
        phase: "Phase 3",
        period: "Q1 2026 - Q4 2026", 
        title: "Full Network Launch",
        status: "planned",
        countries: ["Afghanistan", "China"],
        description: "Complete network deployment across all target countries with full feature set"
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get Involved",
    subtitle: "Join us in building a more digitally inclusive world. Together, we can create lasting change.",
    involvementTypes: [
      {
        title: "Corporate Partnership",
        description: "Technology partnerships, funding, and corporate social responsibility programs",
        icon: "briefcase"
      },
      {
        title: "Sponsorship", 
        description: "Financial support for scholarships, hub development, and program expansion",
        icon: "heart"
      },
      {
        title: "Volunteering",
        description: "Skills-based volunteering, mentorship, and community engagement",
        icon: "users"
      },
      {
        title: "Student Enrollment",
        description: "Join our learning programs and become part of the digital empowerment community",
        icon: "graduation-cap"
      }
    ],
    contactInfo: {
      email: "contact@digitalhub.org",
      phone: "+1 (555) 123-4567",
      address: "Global Headquarters, Virtual First"
    }
  },

  // Site Settings
  site: {
    name: "Digital Empowerment Hub",
    shortName: "DEH",
    description: "Bridging the digital divide and empowering marginalized youth through sustainable technology solutions",
    languages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
      { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
      { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
      { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' }
    ],
    socialMedia: {
      linkedin: "#",
      twitter: "#", 
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  }
};

// Helper function to get content by section
export const getContent = (section: keyof typeof siteContent) => {
  return siteContent[section];
};

// Helper function for CMS integration
export const updateContent = (section: keyof typeof siteContent, newContent: any) => {
  // This would integrate with your CMS API
  console.log(`Updating ${section} content:`, newContent);
  return newContent;
};