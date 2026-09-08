import { ProjectItem, EducationItem, CertificateItem, AchievementItem, BeyondCodeItem } from '../types';

export const PORTRAIT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSzIHwiu-0jenkN8trhazb9J5lgcMoU50owlx_9cwLqL8aXBkF6V58_T37sj7-QJ4SKCsuuHN2w37zZm-5hpX1Wjwcei76aJwdIt3KTbTs-M121misyZGBf3f1g3MIy-Os5hWyMowV0LfYCdbpFOAdT-M4vH3ctJsaFxYcimMJDt8_1yNrjY1QnSMbwHJfJyTFeB4q7DAxkCK122NDIyWIi-dixqfV6Wqyl6O3Zd5PAUTqDyYXzuE';
export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida/AEtjO1UbJZCqjyAn63p5Oubp3GITT15vb3Fsdppispacr01pVAnspuNjrN7pmZHY_zmlYxve0eqt7mbzOo1dLU6WcLBTYPgXU-rQwzHJCIwFxIO7qbP4ly6QQNI0xSTO9jcGw2U_GRCvY3qijEHxq4Ubzjybti7FjP12uM4VlhZzJvRfOnnPipJKIXWesF5KbI08B5Lbf-bgGF9LO_Q6ASlQpqhvkQRfloPRgWEZGQnKxzAdbYv2bezyvQ4C';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Beyond Code', href: '#beyond-code' },
  { label: 'Contact', href: '#contact' },
];

export const METRICS = [
  { value: "B.Tech '27", label: 'AI & DATA SCIENCE' },
  { value: '10+', label: 'CORE TECH SKILLS' },
  { value: 'Bangalore', label: 'INDIA HUB' },
  { value: '100%', label: 'CURIOSITY DRIVEN' },
];

export const IDENTITY_CHIPS = [
  { title: 'AI & Data', subtitle: 'Core Discipline', icon: 'smart_toy' },
  { title: 'Creative Builder', subtitle: 'Rapid Prototyping', icon: 'bolt' },
  { title: 'Tech Explorer', subtitle: 'Deep Dives', icon: 'science' },
  { title: 'Music & Vocals', subtitle: 'Creative Outlet', icon: 'mic' },
  { title: 'Continuous Learner', subtitle: 'Embracing Emerging AI & Modern Stacks', icon: 'trending_up', fullSpan: true },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'graphics-editor',
    number: '01',
    category: 'SYSTEMS // GRAPHICS',
    title: '2D Graphics Editor',
    description:
      'A bespoke 2D graphics editor developed natively in C demonstrating low-level programming fundamentals, custom rasterization and rendering techniques, interactive canvas drawing, and algorithmic computational geometry.',
    tags: ['C', 'Computer Graphics', 'Algorithms'],
    githubUrl: 'https://github.com/akashSahani31',
    details: {
      overview:
        'A native C graphics system built from scratch without third-party graphics engines. It features custom pixel manipulation, direct frame buffer memory management, and computational line generation.',
      highlights: [
        'Implemented Bresenham’s Line and Circle Drawing algorithms directly in memory buffers',
        'Custom flood-fill and scanline polygon rasterization implementations',
        'Interactive vector transformations including 2D translation, matrix rotation, and scaling',
        'Zero external graphical dependencies, focusing on pure algorithmic computational geometry',
      ],
      techStack: ['C Language', 'GCC', 'Algorithms', 'Linear Algebra', 'Direct Memory Addressing'],
    },
  },
  {
    id: 'unihustle',
    number: '02',
    category: 'CAMPUS // ECOSYSTEM',
    title: 'UniHustle',
    description:
      'A student-focused platform engineered around flexible part-time gig opportunities, skill monetization, and campus networking. Designed to remove economic barriers and empower collegiate peers through peer-to-peer services.',
    tags: ['Web Application', 'Student Ecosystem', 'UI/UX'],
    githubUrl: 'https://github.com/akashSahani31',
    details: {
      overview:
        'UniHustle is an on-campus student gig marketplace engineered to connect talented undergraduates with peers requiring specialized project assistance, campus logistics, notes digitization, and creative design.',
      highlights: [
        'Campus-verified identity framework ensuring safety and reliability within universities',
        'Micro-escrow mechanism designed to protect collegiate workers upon milestone approvals',
        'Hyper-localized task feed categorized by academic disciplines, design, and tech gigs',
        'Intuitive responsive dashboard optimized for mobile student workflows',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API Architecture'],
    },
  },
  {
    id: 'portfolio',
    number: '03',
    category: 'WEB // BRANDING',
    title: 'Personal Portfolio Website',
    description:
      'Premium futuristic dark-themed developer portfolio crafted for professional recruitment. Showcasing responsive design, high-contrast typography, interactive particle visualizers, and polished design systems.',
    tags: ['Next.js / HTML5', 'Tailwind CSS', 'Modern UI/UX'],
    githubUrl: 'https://github.com/akashSahani31',
    demoUrl: '#home',
    details: {
      overview:
        'A developer portfolio designed following modern cybernetic minimalism, featuring particle neural net animations, high-contrast typographic pairing, and interactive credential verification.',
      highlights: [
        'Interactive real-time HTML5 canvas neural particle simulation with dynamic mouse proximity nodes',
        'Strict mathematical design hierarchy pairing Space Grotesk, Inter, and JetBrains Mono',
        'Zero bloat, accessible high-contrast palette calibrated for deep OLED screens',
        'Live interactive certificate viewer and contact transmission module',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'Motion'],
    },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    level: 'CURRENT ENROLLMENT',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'REVA University, Bangalore',
    period: '2023 – 2027 (2nd Year)',
    isCurrent: true,
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'AI Foundations & Ethics',
      'Linear Algebra & Probability',
      'Database Management Systems (DBMS)',
      'Computer Graphics & Visualization',
    ],
  },
  {
    level: 'SECONDARY HIGHER EDUCATION',
    title: 'Pre-University Science (PCMC)',
    institution: 'Pre-University College',
    period: 'Completed',
    status: 'Completed',
    isCurrent: false,
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science Fundamentals'],
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'wf-cert',
    title: 'Course Completion Certificate',
    organization: 'Wadhwani Foundation',
    tag: 'Wadhwani Foundation',
    description:
      'Wadhwani Foundation — Entrepreneurship & Core Employability / Innovation Program focusing on real-world team problem solving and technological application.',
    detailedScope:
      'Entrepreneurship & Core Employability / Innovation Curriculum emphasizing practical project lifecycle, analytical reasoning, collaborative team execution, and technology-driven problem resolution.',
    verificationCode: 'WF-2024-VLD',
    icon: 'verified',
  },
  {
    id: 'py-cert',
    title: 'Python Programming Certification',
    organization: 'Technical Program',
    tag: 'Technical Program',
    description:
      'Comprehensive Python Fundamentals, Data Structures & Scripting coursework including algorithmic exercises, file I/O, and OOP architecture.',
    detailedScope:
      'Comprehensive mastery of Python syntax, object-oriented concepts, functional paradigms, data parsing, scientific computational pipelines, and algorithmic problem solving.',
    verificationCode: 'PY-DEV-2024-DS',
    icon: 'terminal',
  },
  {
    id: 'aids-cert',
    title: 'AI & Data Science Foundation',
    organization: 'Foundations Course',
    tag: 'Foundations Course',
    description:
      'Foundational coursework in machine learning concepts, analytical thinking, statistics, and supervised learning methodologies.',
    detailedScope:
      'Theoretical and practical principles of artificial intelligence, linear algebra mechanics, statistical analysis, feature engineering, and supervised learning model validation.',
    verificationCode: 'AIDS-FND-8891',
    icon: 'psychology',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    tag: 'COLLABORATION // SPRINT',
    title: 'University Hackathon Participant',
    description:
      'Engaged in 24-hour collegiate hackathons formulating technical prototypes, rapid UI systems, and collaborative Git codebases under tight deadlines.',
    icon: 'emoji_events',
  },
  {
    tag: 'TECHNICAL DEMO',
    title: 'Academic Project Exhibitor',
    description:
      'Demonstrated custom C-based 2D graphic rendering tools to faculty and peers, highlighting direct memory management and mathematical drawing primitives.',
    icon: 'integration_instructions',
  },
  {
    tag: 'DEVELOPER FORUMS',
    title: 'Workshops & Tech Meetups',
    description:
      'Regular attendee of campus AI roundtables and local developer seminars in Bangalore, staying updated with emerging LLM paradigms and system architectures.',
    icon: 'groups',
  },
];

export const BEYOND_CODE: BeyondCodeItem[] = [
  {
    tag: 'Harmonics',
    title: 'Singing & Vocal Performance',
    description:
      'Singing serves as a meditative discipline and artistic counterbalance to structured programming logic, refining tone, pitch, and vocal cadence.',
    icon: 'mic',
  },
  {
    tag: 'Ideation',
    title: 'Building New Things',
    description:
      'Constant side-project incubation. Transforming everyday inconveniences into tiny, functioning software experiments and utility scripts.',
    icon: 'lightbulb',
  },
  {
    tag: 'Frontend',
    title: 'Websites & Interactive UIs',
    description:
      'Crafting responsive, high-contrast digital interfaces that fuse kinetic responsiveness with clean typographic hierarchy.',
    icon: 'language',
  },
  {
    tag: 'Mobile / Web',
    title: 'Digital Applications',
    description:
      'Exploring workflows that streamline student productivity, peer collaboration, and campus resource distribution.',
    icon: 'smartphone',
  },
  {
    tag: 'Aesthetics',
    title: 'Creative Exploration',
    description:
      'Visual design composition, typography curation, and dark-mode color balance across digital media and layouts.',
    icon: 'palette',
  },
  {
    tag: 'R&D',
    title: 'Tech & AI Exploration',
    description:
      'Following transformer breakthroughs, small open models, and local edge inference architectures as the frontier moves rapidly.',
    icon: 'rocket_launch',
  },
];
