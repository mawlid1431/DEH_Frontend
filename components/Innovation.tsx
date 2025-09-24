import { Wifi, WifiOff, Users, Smartphone, Globe, BookOpen } from 'lucide-react';

export function Innovation() {
  const innovations = [
    {
      phase: '01',
      title: 'Offline-First Architecture',
      description: 'Revolutionary learning platform that works without internet',
      details: [
        'Content synchronization when connected',
        'Peer-to-peer knowledge sharing via local networks',
        'Progressive Web App technology',
        'Local content caching and management'
      ],
      icon: <WifiOff className="w-8 h-8" />
    },
    {
      phase: '02',
      title: 'Train-the-Trainer Ambassador Program',
      description: 'Community-led scaling model for sustainable growth',
      details: [
        'Local youth become certified trainers',
        'Culturally relevant curriculum adaptation',
        'Peer mentorship and support networks',
        'Community ownership and leadership'
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      phase: '03',
      title: 'Adaptive Learning System',
      description: 'AI-powered personalization for diverse learning needs',
      details: [
        'Skill-based learning paths',
        'Multi-language content delivery',
        'Cultural context integration',
        'Performance analytics and insights'
      ],
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      phase: '04',
      title: 'Solar-Powered Hub Network',
      description: 'Sustainable technology centers in remote communities',
      details: [
        'Off-grid solar power systems',
        'Satellite internet connectivity',
        'Device repair and maintenance',
        'Community meeting and collaboration spaces'
      ],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const timeline = [
    {
      year: '2025',
      quarter: 'Q4',
      milestone: 'Technology Development',
      status: 'In Progress',
      description: 'Platform development and testing'
    },
    {
      year: '2026',
      quarter: 'Q1',
      milestone: 'Pilot Program Launch',
      status: 'Planned',
      description: 'First hubs in Türkiye and Malaysia'
    },
    {
      year: '2026',
      quarter: 'Q2',
      milestone: 'Ambassador Training',
      status: 'Planned',
      description: 'Train first cohort of community leaders'
    },
    {
      year: '2026',
      quarter: 'Q3',
      milestone: 'Platform Beta Release',
      status: 'Planned',
      description: 'Mobile app and web platform launch'
    },
    {
      year: '2025',
      quarter: 'Q4',
      milestone: 'Expansion Phase 1',
      status: 'Planned',
      description: 'Add Somaliland and Vietnam'
    },
    {
      year: '2027',
      quarter: 'Q1',
      milestone: 'Full Network Launch',
      status: 'Planned',
      description: 'All 6 countries operational'
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Innovation at Our Core</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering solutions that work in the real world, designed for communities with limited resources
          </p>
        </div>

        {/* Innovation Process */}
        <div className="mb-20">
          <h3 className="text-3xl text-white mb-12 text-center">Revolutionary Approach</h3>
          <div className="space-y-12">
            {innovations.map((innovation, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-900/50 rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-6">
                      <div className="bg-white/10 rounded-full p-3 mr-4">
                        <div className="text-white">
                          {innovation.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Phase {innovation.phase}</div>
                        <h4 className="text-2xl text-white">{innovation.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{innovation.description}</p>
                    <ul className="space-y-3">
                      {innovation.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/20">
                    <div className="text-white text-4xl">{innovation.phase}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-gray-900/50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl text-white mb-12 text-center">Development Timeline</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-white">{item.year}</div>
                  <div className="text-gray-400 text-sm">{item.quarter}</div>
                </div>
                <div className="flex-shrink-0 mx-8">
                  <div className={`w-4 h-4 rounded-full ${item.status === 'In Progress' ? 'bg-green-400' : 'bg-white/40'}`}></div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h4 className="text-white mr-4">{item.milestone}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      item.status === 'In Progress' ? 'bg-green-400/20 text-green-400' : 'bg-white/10 text-white/60'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl text-white mb-8">Built for Resilience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg p-6">
              <Smartphone className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-3">Mobile-First Design</h4>
              <p className="text-gray-400 text-sm">Optimized for smartphones, the primary internet access point in developing regions</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <WifiOff className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-3">Offline Capability</h4>
              <p className="text-gray-400 text-sm">Full functionality without internet, syncing when connection is available</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <Wifi className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-white mb-3">Peer Networks</h4>
              <p className="text-gray-400 text-sm">Local device-to-device content sharing and collaborative learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}