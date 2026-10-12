export type Metric = { value: string; label: string }

export type Project = {
  slug: string
  name: string
  /** Display name used in the work index and prev/next cards. */
  short: string
  category: string
  stack: string[]
  description: string
  role: string
  year: string
  links: { code?: string; demo?: string }
  /** Image paths under /public. Missing entries render as placeholders. */
  media: { hero?: string; s2?: string; a1?: string; a2?: string }
  caseStudy: {
    overview: string
    problem: string
    approach: string
    outcome: string
    metrics: Metric[]
  }
}

const PLACEHOLDER_METRICS: Metric[] = [
  { value: '[metric]', label: 'e.g. users / installs' },
  { value: '[metric]', label: 'e.g. speed or accuracy' },
  { value: '[metric]', label: 'e.g. award / result' },
]

function placeholderCaseStudy(name: string): Project['caseStudy'] {
  return {
    overview: `[One paragraph: what ${name} is, who uses it, and the single most interesting thing about it.]`,
    problem: '[What was broken or missing. Two or three sentences.]',
    approach: '[Architecture and the key technical decisions. Pair each with a visual below.]',
    outcome: "[What you learned, or what's next.]",
    metrics: PLACEHOLDER_METRICS,
  }
}

type ProjectInput = Omit<Project, 'slug' | 'short' | 'role' | 'year' | 'caseStudy'> &
  Partial<Pick<Project, 'short' | 'role' | 'year' | 'caseStudy'>>

const INPUT: ProjectInput[] = [
  {
    name: 'StyleSense',
    category: 'DevTools & Systems',
    stack: ['Rust', 'TypeScript', 'Tree-sitter', 'LSP'],
    description:
      'Real-time customizable code style enforcement VSCode extension with custom Language Server Protocol implementation',
    links: { code: 'https://github.com/tamzeedq/StyleSense' },
    media: {},
  },
  {
    name: 'Breathe App',
    category: 'Full-Stack AI/ML',
    stack: ['React', 'TypeScript', 'Flask', 'C++'],
    description: 'Air quality monitoring dashboard with real-time sensor data and AI analysis',
    links: { code: 'https://github.com/ryanarnouk/nwhacks-2024' },
    media: {
      hero: '/images/nwHacks2024_project/nwhacks_1.png',
      s2: '/images/nwHacks2024_project/nwhacks_2.png',
    },
  },
  {
    name: 'Track My Form',
    category: 'AI/ML',
    stack: ['React', 'TensorFlow', 'TypeScript'],
    description: 'AI-driven exercise form tracking and analysis using pose estimation',
    links: { demo: 'https://trackmyform.netlify.app/' },
    media: {
      hero: '/images/form_tracker_project/form_tracker_1.png',
      s2: '/images/form_tracker_project/form_tracker_2.png',
    },
  },
  {
    name: 'Solar Race Optimizer',
    category: 'AI/ML & Data Analysis',
    stack: ['Python', 'PyGad', 'NumPy'],
    description:
      'Race strategy optimization system using a genetic algorithm for solar vehicle competitions',
    links: { code: 'https://github.com/UBC-Solar/Simulation' },
    media: { hero: '/images/simulation/simulation_1.png' },
  },
  {
    name: 'GestureCV',
    category: 'AI/ML',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    description:
      'Real-time gesture recognition system using computer vision for hand tracking and ML-powered system interaction',
    links: { code: 'https://github.com/tamzeedq/GestureCV' },
    media: { hero: '/images/gesturecv/gesturecv_1.png' },
  },
  {
    name: 'Hoppon Bot',
    category: 'Backend & Cloud',
    stack: ['Python', 'Docker', 'AWS EC2'],
    description:
      'Scalable Discord bot supporting 30+ concurrent users for music streaming via Spotify and YouTube APIs',
    links: { code: 'https://github.com/tamzeedq/DiscordBot' },
    media: {
      hero: '/images/hoppon_project/hoppon_bot1.png',
      s2: '/images/hoppon_project/hoppon_bot2.png',
    },
  },
  {
    name: 'Pace Pal',
    category: 'IoT & Data Analysis',
    stack: ['C++', 'Python', 'Firebase'],
    description: 'IoT pace tracking system with real-time data storage and visualization tools',
    links: { code: 'https://github.com/tamzeedq/PacePal' },
    media: {},
  },
  {
    name: 'Solar Race Simulation GUI',
    short: 'Solar Sim GUI',
    category: 'Full-Stack',
    stack: ['Python', 'React', 'Electron'],
    description: 'Race simulation GUI for solar vehicle competitions',
    links: { code: 'https://github.com/UBC-Solar/Simulation-Client' },
    media: {
      hero: '/images/simulation_client/simulation_client_1.png',
      s2: '/images/simulation_client/simulation_client_2.png',
    },
  },
]

export const PROJECTS: Project[] = INPUT.map((p) => ({
  ...p,
  slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  short: p.short ?? p.name,
  role: p.role ?? '[your role]',
  year: p.year ?? '[year]',
  caseStudy: p.caseStudy ?? placeholderCaseStudy(p.name),
}))

/** Two-digit display number, e.g. "01". */
export const projectNum = (index: number) => String(index + 1).padStart(2, '0')

/** Short tag shown in the work index, e.g. "AI/ML & Data Analysis" -> "AI/ML". */
export const projectTag = (p: Project) => p.category.replace(/ & (Data Analysis|Systems|Cloud)/, '')

export const stackStr = (p: Project) => p.stack.join(' · ')

export const getProject = (slug: string) => {
  const index = PROJECTS.findIndex((p) => p.slug === slug)
  return index === -1 ? undefined : { project: PROJECTS[index], index }
}

export const TICKER = [
  'TypeScript', 'Python', 'Rust', 'Java', 'C++', 'React',
  'Next.js', 'Flask', 'PostgreSQL', 'TensorFlow', 'AWS', 'Docker',
]
