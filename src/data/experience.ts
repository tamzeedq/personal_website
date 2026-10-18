export type Job = {
  co: string
  role: string
  dates: string
  where: string
  /** Start / end in months from Jan 2023 (0), used to place the timeline bar. */
  start: number
  end: number
  row: 0 | 1
  points: string[]
  /** Image path under /public. Missing renders as a placeholder labelled `mediaLabel`. */
  media?: string
  /** CSS object-position for cropping `media`, e.g. "center 80%". Defaults to centred. */
  mediaPosition?: string
  mediaLabel: string
  /** Square logo tile under /public (e.g. /images/companies/x-tile.png). Missing shows a typeset monogram. */
  logo?: string
}

/**
 * Timeline span in months, Jan 2023 through Mar 2027. The extra room past
 * today keeps an ongoing role's bar (end = TIMELINE_SPAN) from spilling off
 * the right edge at narrow desktop widths.
 */
export const TIMELINE_SPAN = 51
export const TIMELINE_YEARS = ['2023', '2024', '2025', '2026', '2027']

/**
 * Education, shaped like a Job so it can reuse the detail panel.
 * Starts before the timeline (month -16 = Sep 2021), so layouts must clip or extend for it.
 */
export const EDUCATION: Job = {
  co: 'UBC',
  role: 'BSc, Combined Major in Computer Science and Statistics',
  dates: 'Sep 2021–May 2026',
  where: 'Vancouver',
  start: -16,
  end: 41,
  row: 0,
  points: [
    'Combined Major in Computer Science and Statistics.',
    "Dean's List.",
    'Clubs and Activities: UBC LaunchPad, UBC Solar, UBC IRC (Core Volunteer), UBC Rec Volleyball.',
  ],
  media: '/images/ubc/nwhacks_2026.jpg',
  // Presenters stand near the bottom of the frame.
  mediaPosition: 'center 85%',
  mediaLabel: 'Presenting Atlasic at nwHacks 2026',
  logo: '/images/companies/ubc-tile.png',
}

/** Newest first: the first job is the one shown by default. */
export const EXPERIENCE: Job[] = [
  {
    co: 'Mastercard',
    role: 'Software Engineer',
    dates: 'Aug 2026–Present',
    where: 'Vancouver',
    start: 43,
    end: TIMELINE_SPAN,
    row: 0,
    points: [
      'Built a containerized local test environment for a fraud rules service with Docker, Testcontainers and Java gRPC mocks.',
      "Built the functional test suite for the service's gRPC API and migrated it to a new protobuf contract.",
    ],
    media: '/images/mastercard/vancouver_skyline.jpg',
    mediaLabel: 'Mastercard logo over the Vancouver skyline',
    logo: '/images/companies/mastercard-tile.png',
  },
  {
    co: 'UBC Civil Eng',
    role: 'Undergraduate Research Assistant',
    dates: 'Nov 2025–Mar 2026',
    where: 'UBC',
    start: 34,
    end: 39,
    row: 1,
    points: [
      'Built a Python Streamlit app that makes water network resilience analysis accessible to non-programmers.',
      'Cut batch simulation runtime by 3.2× through parallel processing.',
      'Helped train a PyTorch autoencoder for water leak detection that reached 97.5% accuracy on simulated data.',
    ],
    media: '/images/ubc_civil_eng/wntr_earthquake.png',
    // Keep the two network maps in view when the box crops.
    mediaPosition: 'center 75%',
    mediaLabel: 'Earthquake scenario in the Streamlit app',
    logo: '/images/companies/ubc-civil-eng-tile.png',
  },
  {
    co: 'Mastercard',
    role: 'Software Engineer Intern',
    dates: 'May–Aug 2025',
    where: 'Vancouver',
    start: 28,
    end: 32,
    row: 0,
    points: [
      'Built a POC data quality service with AWS Redshift, Java and Next.js, featured in quarterly engineering highlights.',
      'Finalist in an internal hackathon for an admin/applicant portal for Venture for Canada.',
    ],
    media: '/images/mastercard/vancouver_office.jpg',
    mediaLabel: 'Mastercard Vancouver office',
    logo: '/images/companies/mastercard-tile.png',
  },
  {
    co: 'UBC Solar',
    role: 'Strategy Software Developer',
    dates: 'Sep 2023–Jan 2025',
    where: 'UBC',
    start: 8,
    end: 24,
    row: 1,
    points: [
      'Built genetic algorithms in Python to optimize race speeds for the solar car.',
      'Built an Electron + React app to visualize race simulation data.',
      "Created a reusable Jupyter notebook for data analysis, contributing to the team's highest-ever Formula Sun Grand Prix placement in 2024.",
    ],
    media: '/images/ubc_solar/team.jpg',
    // Team and car fill the lower middle of the frame.
    mediaPosition: 'center 80%',
    mediaLabel: 'UBC Solar team with the car',
    logo: '/images/companies/ubc-solar-tile.png',
  },
  {
    co: 'Tetra Tech',
    role: 'Software Developer Co-op',
    dates: 'Jan–Aug 2023',
    where: 'Vancouver',
    start: 0,
    end: 8,
    row: 0,
    points: [
      'Built a real-time hazard alert system that cut incident response time by 80% and won the 2025 ACEC-BC Award of Excellence.',
      'Launched a web app to 1000+ users on Azure VM and Blob Storage.',
      'Cut computer-vision preprocessing time by 90% and sped up PostgreSQL queries by 30% with PostGIS.',
    ],
    media: '/images/tetra_tech/fusionmap.jpg',
    mediaLabel: 'FusionMap 3D terrain view with hazard layers',
    logo: '/images/companies/tetra-tech-tile.png',
  },
]
