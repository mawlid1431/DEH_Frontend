import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, MapPin, Users, Target } from 'lucide-react';

export function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      period: 'Q4 2025',
      title: 'Foundation & Development',
      status: 'upcoming',
      countries: ['Malaysia', 'Vietnam'],
      description: 'Secure funding, build partnerships, begin platform development, and conduct baseline assessments.',
      milestones: [
        {
          quarter: 'Q4 2025',
          title: 'Project Kickoff',
          deliverables: [
            'Seed funding secured',
            'Partnerships with NGOs & telecom providers',
            'Alpha version of e-learning platform',
            'Baseline community needs assessment'
          ]
        }
      ],
      metrics: {
        students: 100,
        hubs: 0,
        countries: 2,
        trainers: 5
      }
    },
    {
      phase: 'Phase 2',
      period: 'Q1 2026 - Q2 2026',
      title: 'Pilot Launch',
      status: 'planned',
      countries: ['Malaysia', 'Vietnam'],
      description: 'Launch initial hubs, beta test the platform, and train first ambassadors.',
      milestones: [
        {
          quarter: 'Q1 2026',
          title: 'Pilot Hubs',
          deliverables: [
            'First hub launched in rural Malaysia',
            'Second hub launched in Vietnam',
            'Platform beta testing with 200 youth',
            'First Digital Learning Ambassadors trained'
          ]
        },
        {
          quarter: 'Q2 2026',
          title: 'Pilot Expansion',
          deliverables: [
            'Feedback integration into platform',
            'Refinement of localized content',
            'Community engagement programs',
            'Additional 100 students enrolled'
          ]
        }
      ],
      metrics: {
        students: 300,
        hubs: 2,
        countries: 2,
        trainers: 15
      }
    },
    {
      phase: 'Phase 3',
      period: 'Q3 2026',
      title: 'Refinement & Expansion',
      status: 'planned',
      countries: ['Somaliland', 'Türkiye'],
      description: 'Refine based on pilot data and expand into new regions.',
      milestones: [
        {
          quarter: 'Q3 2026',
          title: 'Regional Expansion',
          deliverables: [
            'Platform localized for Somaliland & Türkiye',
            'Launch of additional community hubs',
            'Targeted marketing campaign',
            'Scalability testing and optimization'
          ]
        }
      ],
      metrics: {
        students: 800,
        hubs: 5,
        countries: 4,
        trainers: 30
      }
    },
    {
      phase: 'Phase 4',
      period: 'Q4 2026',
      title: 'Scaling & Impact',
      status: 'planned',
      countries: ['Afghanistan', 'China'],
      description: 'Full platform launch in all countries and first impact report.',
      milestones: [
        {
          quarter: 'Q4 2026',
          title: 'Full Network Deployment',
          deliverables: [
            'Hubs launched in Afghanistan & China',
            'Official platform launch in all 6 countries',
            'First comprehensive social impact report',
            'Scholarship program expansion'
          ]
        }
      ],
      metrics: {
        students: 2000,
        hubs: 10,
        countries: 6,
        trainers: 60
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-400/20 text-green-400 border-green-400/30';
      case 'planned': return 'bg-blue-400/20 text-blue-400 border-blue-400/30';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Our Roadmap</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A carefully planned journey starting October 2025, from pilot to global impact, designed for sustainable growth and community ownership
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => (
            <div key={index} className="bg-black/50 rounded-2xl border border-white/10 overflow-hidden">
              {/* Phase Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200"
                onClick={() => setExpandedPhase(expandedPhase === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-2xl text-white">{phase.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {phase.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {phase.countries.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white">
                    {expandedPhase === index ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPhase === index && (
                <div className="border-t border-white/10 p-6 bg-white/5">
                  <p className="text-gray-300 mb-8">{phase.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl text-white mb-1">{phase.metrics.students.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white mb-1">{phase.metrics.hubs}</div>
                      <div className="text-gray-400 text-sm">Hubs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white mb-1">{phase.metrics.countries}</div>
                      <div className="text-gray-400 text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white mb-1">{phase.metrics.trainers}</div>
                      <div className="text-gray-400 text-sm">Trainers</div>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-6">
                    {phase.milestones.map((milestone, mIndex) => (
                      <div key={mIndex} className="bg-black/30 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                          <h4 className="text-white">{milestone.quarter}: {milestone.title}</h4>
                        </div>
                        <ul className="space-y-2 ml-6">
                          {milestone.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="text-gray-400 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Future Plan Metrics */}
        <div className="mt-20 bg-white/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl text-white mb-8 text-center">Future Plan by the Numbers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-4xl text-white mb-2">5,000+</div>
              <div className="text-gray-400">Students to be Reached</div>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-4xl text-white mb-2">15+</div>
              <div className="text-gray-400">Community Hubs Planned</div>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-4xl text-white mb-2">80%+</div>
              <div className="text-gray-400">Target Employment Rate</div>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-4xl text-white mb-2">24</div>
              <div className="text-gray-400">Months to Global Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
