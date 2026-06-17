export const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    workMode: 'Remote',
    salary: '$120k - $160k',
    matchPercentage: 92,
    postedTime: '2 days ago',
    jobType: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team...',
    requirements: [
      'React.js and TypeScript expertise',
      '5+ years of frontend development',
      'Experience with modern build tools',
      'Strong CSS and responsive design skills',
      'Team collaboration experience',
    ],
    benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Unlimited PTO'],
    skillsMatch: {
      required: ['React', 'TypeScript', 'CSS', 'Git', 'REST APIs'],
      yourSkills: ['React', 'TypeScript', 'CSS', 'Git'],
      missing: ['REST APIs'],
    },
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    workMode: 'Hybrid',
    salary: '$100k - $140k',
    matchPercentage: 85,
    postedTime: '1 week ago',
    jobType: 'Full-time',
    description: 'Join our fast-growing startup and help build innovative solutions...',
    requirements: [
      'Full-stack development experience',
      'Node.js and React expertise',
      'Database design knowledge',
      'Cloud deployment experience',
      'Agile methodology',
    ],
    benefits: ['Equity Options', 'Flexible Hours', 'Learning Budget', 'Gym Membership'],
    skillsMatch: {
      required: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      yourSkills: ['React', 'Node.js', 'PostgreSQL'],
      missing: ['AWS', 'Docker'],
    },
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'Digital Solutions',
    location: 'Austin, TX',
    workMode: 'Remote',
    salary: '$90k - $130k',
    matchPercentage: 88,
    postedTime: '3 days ago',
    jobType: 'Full-time',
    description: 'Looking for a passionate React developer to build cutting-edge web applications...',
    requirements: [
      '3+ years React experience',
      'State management (Redux/Context)',
      'Testing frameworks knowledge',
      'Performance optimization',
      'Version control (Git)',
    ],
    benefits: ['Remote First', 'Health & Dental', 'Annual Bonus', 'Tech Stipend'],
    skillsMatch: {
      required: ['React', 'Redux', 'Jest', 'TypeScript', 'Webpack'],
      yourSkills: ['React', 'Redux', 'TypeScript', 'Webpack'],
      missing: ['Jest'],
    },
  },
  {
    id: '4',
    title: 'UI/UX Developer',
    company: 'DesignHub',
    location: 'Seattle, WA',
    workMode: 'Office',
    salary: '$85k - $115k',
    matchPercentage: 78,
    postedTime: '5 days ago',
    jobType: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our clients...',
    requirements: [
      'Strong HTML/CSS skills',
      'JavaScript frameworks',
      'Design tools (Figma, Sketch)',
      'Responsive design',
      'Accessibility standards',
    ],
    benefits: ['On-site Gym', 'Catered Lunches', 'Professional Development', 'Transit Pass'],
    skillsMatch: {
      required: ['HTML', 'CSS', 'JavaScript', 'Figma', 'WCAG'],
      yourSkills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      missing: ['WCAG'],
    },
  },
];

export const careerHealthData = {
  overallScore: 78,
  skillsMatch: 78,
  marketDemand: 85,
  profileStrength: 60,
};

export const skillsGapData = {
  critical: [
    {
      name: 'Docker & Kubernetes',
      demand: 'High',
      timeToLearn: '6-8 weeks',
      courses: [
        { name: 'Docker Mastery', platform: 'Udemy', duration: '12 hours', rating: 4.7, price: '$79' },
        { name: 'Kubernetes for Developers', platform: 'Coursera', duration: '4 weeks', rating: 4.8, price: '$49/mo' },
      ],
    },
    {
      name: 'System Design',
      demand: 'Very High',
      timeToLearn: '8-12 weeks',
      courses: [
        { name: 'System Design Interview', platform: 'educative.io', duration: '40 hours', rating: 4.9, price: '$79' },
        { name: 'Designing Data-Intensive Applications', platform: 'O\'Reilly', duration: 'Self-paced', rating: 4.8, price: '$39/mo' },
      ],
    },
  ],
  toImprove: [
    {
      name: 'TypeScript',
      currentLevel: 60,
      targetLevel: 90,
      gap: 30,
    },
    {
      name: 'Testing (Jest/RTL)',
      currentLevel: 50,
      targetLevel: 85,
      gap: 35,
    },
    {
      name: 'GraphQL',
      currentLevel: 40,
      targetLevel: 80,
      gap: 40,
    },
  ],
  excellent: [
    { name: 'React.js', demand: 'Very High', jobCount: 12500 },
    { name: 'JavaScript', demand: 'Very High', jobCount: 15000 },
    { name: 'CSS/Tailwind', demand: 'High', jobCount: 8000 },
  ],
};

export const learningPath = [
  { week: '1-2', title: 'Docker Fundamentals', type: 'Course', status: 'upcoming' },
  { week: '3-4', title: 'Container Orchestration with Kubernetes', type: 'Course', status: 'upcoming' },
  { week: '5', title: 'Build a Microservices Project', type: 'Project', status: 'upcoming' },
  { week: '6-7', title: 'System Design Principles', type: 'Course', status: 'upcoming' },
  { week: '8', title: 'Kubernetes Certification', type: 'Certification', status: 'upcoming' },
];

export const careerRoadmapData = {
  current: {
    role: 'Frontend Developer',
    experience: '3 years',
    skills: ['React', 'TypeScript', 'CSS', 'Git', 'REST APIs'],
  },
  paths: [
    {
      id: 'senior-frontend',
      name: 'Senior Frontend Developer',
      milestones: [
        {
          timeframe: '3-6 Months',
          role: 'Frontend Developer → Senior Frontend',
          skills: ['Advanced React Patterns', 'Performance Optimization', 'Mentoring'],
          courses: ['Advanced React', 'Web Performance'],
          salaryJump: '+$20k',
        },
        {
          timeframe: '6-12 Months',
          role: 'Senior Frontend → Lead Frontend',
          skills: ['Architecture Design', 'Team Leadership', 'Code Review'],
          courses: ['Software Architecture', 'Tech Leadership'],
          salaryJump: '+$35k',
        },
        {
          timeframe: '1-2 Years',
          role: 'Lead Frontend → Engineering Manager',
          skills: ['People Management', 'Strategic Planning', 'Stakeholder Communication'],
          courses: ['Engineering Management', 'Communication Skills'],
          salaryJump: '+$50k',
        },
      ],
      comparison: {
        timeInvestment: '1-2 years',
        salaryGrowth: '+$50k',
        jobSatisfaction: '4.2/5',
        marketDemand: 'Very High',
        workLifeBalance: '3.8/5',
      },
    },
    {
      id: 'full-stack',
      name: 'Full Stack Developer',
      milestones: [
        {
          timeframe: '3-6 Months',
          role: 'Frontend → Full Stack Developer',
          skills: ['Node.js', 'Databases', 'APIs', 'DevOps Basics'],
          courses: ['Backend Development', 'Database Design'],
          salaryJump: '+$15k',
        },
        {
          timeframe: '6-12 Months',
          role: 'Full Stack → Senior Full Stack',
          skills: ['Microservices', 'Cloud Architecture', 'CI/CD'],
          courses: ['Cloud Computing', 'System Design'],
          salaryJump: '+$30k',
        },
        {
          timeframe: '1-2 Years',
          role: 'Senior Full Stack → Solutions Architect',
          skills: ['Enterprise Architecture', 'Cloud Expertise', 'Technical Strategy'],
          courses: ['AWS Solutions Architect', 'Enterprise Patterns'],
          salaryJump: '+$60k',
        },
      ],
      comparison: {
        timeInvestment: '1.5-2 years',
        salaryGrowth: '+$60k',
        jobSatisfaction: '4.5/5',
        marketDemand: 'Extremely High',
        workLifeBalance: '3.5/5',
      },
    },
  ],
};

export const interviewPrepData = {
  commonQuestions: [
    'Tell me about yourself and your experience',
    'What is your approach to component architecture in React?',
    'How do you handle state management in large applications?',
    'Explain the virtual DOM and its benefits',
    'How do you optimize React application performance?',
  ],
  technicalFocus: [
    'React Hooks and custom hooks',
    'Performance optimization techniques',
    'Testing strategies (unit, integration, e2e)',
    'TypeScript type systems',
    'Modern build tools and bundlers',
  ],
  behavioralQuestions: [
    'Describe a challenging project you worked on',
    'How do you handle disagreements with team members?',
    'Tell me about a time you had to learn something quickly',
    'How do you prioritize tasks when working on multiple projects?',
  ],
  companyInsights: {
    culture: 'Fast-paced, innovation-focused, collaborative',
    values: ['Customer First', 'Continuous Learning', 'Transparency', 'Excellence'],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    interviewProcess: '1. Phone Screen → 2. Technical Round → 3. System Design → 4. Final Round',
  },
};

export const analyticsData = {
  applications: {
    sent: 24,
    inReview: 8,
    interviews: 3,
    rejected: 11,
    offers: 2,
  },
  responseRate: 45,
  successRate: 8,
  weeklyApplications: [
    { week: 'Week 1', count: 5 },
    { week: 'Week 2', count: 7 },
    { week: 'Week 3', count: 6 },
    { week: 'Week 4', count: 6 },
  ],
  rejectionReasons: [
    { reason: 'Lack of required experience', percentage: 35 },
    { reason: 'Skills mismatch', percentage: 28 },
    { reason: 'Location preference', percentage: 20 },
    { reason: 'Salary expectations', percentage: 17 },
  ],
  marketTrends: [
    { month: 'Jan', demand: 65 },
    { month: 'Feb', demand: 72 },
    { month: 'Mar', demand: 78 },
    { month: 'Apr', demand: 85 },
    { month: 'May', demand: 88 },
    { month: 'Jun', demand: 92 },
  ],
  hotSkills: [
    { name: 'AI/ML', growth: '+45%', demand: 'Very High' },
    { name: 'TypeScript', growth: '+38%', demand: 'Very High' },
    { name: 'React', growth: '+25%', demand: 'Very High' },
    { name: 'Docker/K8s', growth: '+42%', demand: 'High' },
    { name: 'GraphQL', growth: '+35%', demand: 'High' },
  ],
  salaryInsights: {
    yourExpected: 120000,
    marketAverage: 115000,
    percentile: 65,
    byCity: [
      { city: 'San Francisco', average: 145000 },
      { city: 'New York', average: 130000 },
      { city: 'Austin', average: 110000 },
      { city: 'Seattle', average: 135000 },
      { city: 'Boston', average: 125000 },
    ],
  },
};

export const notifications = [
  {
    id: '1',
    category: 'job-match',
    title: 'New job match: 92%',
    description: 'Senior Frontend Developer at TechCorp matches your profile',
    time: '5 min ago',
    read: false,
  },
  {
    id: '2',
    category: 'application',
    title: 'Application Update',
    description: 'Your application for Full Stack Engineer has been viewed',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '3',
    category: 'skill',
    title: 'Skill Alert',
    description: 'Docker demand increased by 15% this week',
    time: '1 day ago',
    read: true,
  },
  {
    id: '4',
    category: 'learning',
    title: 'Complete your learning path',
    description: 'You have 2 courses in progress',
    time: '2 days ago',
    read: true,
  },
  {
    id: '5',
    category: 'job-match',
    title: '3 new job matches',
    description: 'Check out opportunities that match your skills',
    time: '3 days ago',
    read: true,
  },
];
