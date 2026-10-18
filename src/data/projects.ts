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
  /** Optional image paths under /public. Missing entries are left out of the layout. */
  media: {
    hero?: string
    s2?: string
    a1?: string
    a2?: string
    /** CSS object-position for cropping every image above, e.g. "left center". Defaults to centred. */
    position?: string
  }
  /** Text fields may contain inline links as `[label](https://…)`; CaseBody renders them as external links. */
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
  Partial<Pick<Project, 'short' | 'role' | 'year' | 'caseStudy'>> & {
    /** Keep the entry but leave it off the site (no list row, page or sitemap entry). */
    hidden?: boolean
  }

const INPUT: ProjectInput[] = [
  {
    name: 'Atlasic',
    category: 'DevTools & Systems',
    stack: ['TypeScript', 'Rust', 'Gemini', 'VSCode API'],
    description:
      'VSCode extension that maps a codebase into an interactive atlas of its dependencies, with heatmaps, search and AI-assisted diff review. nwHacks 2026 finalist',
    year: '2026',
    role: 'Co-creator (team of 2)',
    caseStudy: {
      overview:
        'Atlasic is a VS Code extension that turns a codebase into an interactive atlas of its dependencies. One click maps every file and import into a graph you can pan, search and colour by how heavily each file is depended on, with Gemini-powered help for reviewing diffs and debugging from ticket context. I built it with my friend [Diego Armstrong](https://www.diegoarmstrong.com/) at nwHacks 2026, where it was a finalist, and it is published on the VS Code Marketplace.',
      problem:
        "Getting oriented in an unfamiliar codebase takes far longer than it should, whether you're building your first feature at a new job, looking for what to refactor, or explaining a change to your team. Code and documentation are walls of text, but most people understand structure faster when they can see it.",
      approach:
        "The extension scans the workspace with include/exclude rules and builds an in-memory graph: files and modules are nodes, and dependencies parsed with regex are edges. The graph is serialized to JSON and sent over VS Code's postMessage bridge to a Webview, where a TypeScript renderer lays it out and handles zoom, pan, search and highlighting without blocking the extension host. The extension stays the controller, pushing fresh snapshots when the repo or settings change. When very large repos slowed graph generation down, we rewrote the file-discovery step in Rust as a Node.js addon with NAPI-RS, which made it noticeably faster.",
      outcome:
        "We tested Atlasic on large real-world codebases, including VS Code itself and the Linux kernel, and published it to the Marketplace, where it has passed 40 downloads. Next is moving more of the heavy work into Rust, and adding ticket-aware context and adjustable \"context layers\" so the map can be as detailed or as abstract as you need.",
      metrics: [
        { value: 'Finalist', label: 'nwHacks 2026' },
        { value: 'Linux', label: 'kernel-scale codebases mapped' },
        { value: '40+', label: 'downloads on the VS Code Marketplace' },
      ],
    },
    links: { demo: 'https://marketplace.visualstudio.com/items?itemName=atlasic.atlasic' },
    media: {
      hero: '/images/atlasic/atlasic_1.png',
      s2: '/images/atlasic/atlasic_2.png',
      a1: '/images/atlasic/atlasic_3.png',
      a2: '/images/atlasic/atlasic_4.png',
    },
  },
  {
    name: 'Hoppon Bot',
    category: 'Backend & Cloud',
    stack: ['Python', 'Docker', 'AWS EC2'],
    description:
      'Scalable Discord bot supporting 30+ concurrent users for music streaming via Spotify and YouTube APIs',
    links: { code: 'https://github.com/tamzeedq/DiscordBot' },
    year: '2022–2024',
    role: 'Solo project',
    media: {
      hero: '/images/hoppon_project/hoppon_bot4.png',
      s2: '/images/hoppon_project/hoppon_bot3.png',
      // Discord screenshots start at the left edge, so keep the avatars in frame.
      position: 'left center',
    },
    caseStudy: {
      overview:
        'Hoppon, a play on "hop on", is a Discord bot I built for my friends\' server. It streams music into voice channels from a search, a YouTube link or a Spotify track, album or playlist, keeps a shared queue, and can autoqueue similar songs so the music keeps going. It also covers the small things the server used, like polls, coin flips, random numbers and prayer times, and it runs in Docker on AWS EC2.',
      problem:
        'Instead of juggling several general-purpose bots, my friends and I wanted one built around how we actually used our server: music with a shared queue that understood both YouTube and Spotify links, plus quick polls and a few everyday utilities.',
      approach:
        "The bot is a discord.py cog with 15 commands, with the music logic in its own class. Searches and YouTube links go through yt-dlp for audio metadata, which is queued and streamed into the voice channel with FFmpeg, and each track's completion callback starts the next one. Spotify links are resolved with Spotipy, mapping every track in an album or playlist to a YouTube match. Autoqueue parses the artist and title of the last song, asks Spotify for a recommendation and queues the closest YouTube result. Along the way I fixed audio cutting out mid-song and started fetching and caching YouTube results as soon as a song is queued, then containerized the bot with Docker and deployed it on AWS EC2.",
      outcome:
        'Hoppon runs our server from an EC2 instance, and the README documents the setup so anyone can clone it, add their own tokens and run it locally or in Docker. Still on the list are smarter search suggestions and friendlier error handling for bad input.',
      metrics: [
        { value: '30+', label: 'concurrent users' },
        { value: '15', label: 'commands, including 3 ways to queue music (search, YouTube, Spotify)' },
        { value: 'EC2', label: 'containerized with Docker on AWS' },
      ],
    },
  },
  {
    name: 'Pace Pal',
    category: 'IoT & Data Analysis',
    stack: ['C++', 'Python', 'Firebase'],
    description: 'IoT pace tracking system with real-time data storage and visualization tools',
    links: { code: 'https://github.com/tamzeedq/PacePal' },
    year: '2024',
    role: 'Solo project',
    media: { hero: '/images/pace_pal/pace_pal_1.jpg' },
    caseStudy: {
      overview:
        'Pace Pal is a running tracker I built when I took up running and wanted to keep an eye on my pace without buying a GPS watch. An Arduino Nano 33 IoT and a GPS module log my position once a second while I run, work out distance and pace on the board, and push each reading to a Firebase Realtime Database over Wi-Fi. Afterwards, a small Python script pulls a day\'s run and plots my route coloured by pace, inspired by how Strava shows runs.',
      problem:
        'Holding a steady pace matters a lot in distance running, but the usual answer is an Apple Watch, Fitbit or similar. I wanted the pace data without buying another device, and I wanted to choose for myself how detailed the charts were and which metrics they showed. That meant building the whole chain: the hardware I wear, a place to store the readings, and a way to look at a run afterwards.',
      approach:
        "The hardware is an Arduino Nano 33 IoT wired to a Beitian BN-220 GPS module over a 9600-baud serial link, mounted on a cap for runs. The sketch parses the NMEA stream with TinyGPSPlus and waits for a valid fix, date and time before it starts, using a 'smart delay' that keeps feeding the GPS parser between readings and lighting the onboard LED only while readings are valid. Each second it measures the distance from the previous point, adds it to a running total in kilometres and turns it into a pace in min/km, then writes latitude, longitude, total distance and pace as JSON to Firebase under a /run/<date>/<time> path. On the desktop side, a Python script uses the Firebase Admin SDK to fetch one day's readings and draws the route as a matplotlib scatter coloured by pace, with mplcursors hover tooltips for pace and distance at each point.",
      outcome:
        'The result is a working pipeline from a GPS module on my cap to a pace-coloured map of the run on my laptop, with every reading kept in Firebase by date and time. It gave me the pace tracking I wanted without buying a watch, on metrics I chose, and the README documents the full setup so anyone with the same parts can rebuild it.',
      metrics: [
        { value: '1 s', label: 'GPS sampling interval' },
        { value: '4', label: 'metrics logged per reading' },
        { value: 'Live', label: 'cloud sync to Firebase over Wi-Fi from a 2-part rig' },
      ],
    },
  },
  {
    name: 'Solar Race Optimizer',
    category: 'AI/ML & Data Analysis',
    stack: ['Python', 'PyGad', 'NumPy'],
    description:
      'Race strategy optimization system using a genetic algorithm for solar vehicle competitions',
    links: { code: 'https://github.com/UBC-Solar/Simulation' },
    year: '2023–2024',
    role: 'Strategy Software Developer, UBC Solar (team project)',
    media: {
      hero: '/images/simulation/simulation_1.png',
      // Keep the speed plot (what the optimizer tunes) in view when cropped.
      position: 'left top',
    },
    caseStudy: {
      overview:
        "The Solar Race Optimizer is part of UBC Solar's race strategy simulation. The simulation models our solar car over a race route, from the solar arrays, battery, motor and regen to the weather and sunlight along the way, and predicts how far and how fast we can go. A genetic algorithm sits on top and searches for the driving speeds that cover the most distance without draining the battery. I worked on it as a Strategy Software Developer alongside the rest of the strategy team.",
      problem:
        "In a solar car race the speed you pick is a trade-off: drive faster and you cover more ground, but you use more energy than the array puts back. The right speeds depend on the route, the forecast and the battery's state of charge, so guessing them by hand doesn't work. The team needed a simulator that could test a full speed plan for a race like FSGP, and an optimizer that could search those plans for us.",
      approach:
        "The optimizer uses PyGAD. Each chromosome is a normalized array of driving speeds, one gene per interval, and fitness comes from running the whole simulation on it, counting only the distance covered before state of charge drops below zero. A teammate wrote the first version of the GA. I added a diversity measure, the average standard deviation of each gene across the population, so we could see whether runs were converging or stuck, replaced the Perlin-noise starting population with Gaussian noise, and logged diversity and the stopping generation with every run. Around that I moved the GIS and weather API calls out of the simulation into a separate caching CLI, loaded FSGP track coordinates from a KML file, and added low-voltage system energy loss to the energy model.",
      outcome:
        'My changes went in over 5 merged pull requests between late 2023 and May 2024, and the team used the simulator and optimizer to plan race speeds for FSGP 2024. Together with an Electron/React visualization app and a data analysis notebook I built for the team, it fed into UBC Solar\'s highest-ever Formula Sun Grand Prix placement that year.',
      metrics: [
        { value: 'Best', label: 'FSGP placement in team history (2024)' },
        { value: '72 h', label: 'FSGP race window simulated per run' },
        { value: '24', label: 'speed plans evolved per generation, with diversity tracked' },
      ],
    },
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
      // Frame the map and chart rather than the controls panel when cropped.
      position: '65% center',
    },
    year: '2023',
    role: 'Strategy Software Developer, UBC Solar (team project)',
    caseStudy: {
      overview:
        "Solar Sim GUI is a desktop app for UBC Solar's strategy team that sits on top of our race simulation. You set a few simulation parameters, press Run, and it plots the car's predicted speed and state of charge and draws the route on a map, next to the latest telemetry from the car. I worked on it as a Strategy Software Developer alongside four other contributors.",
      problem:
        'The race simulation was a Python package you ran from scripts, which made it awkward to try different settings during strategy work. The app already had a React interface, but its Run button only sent a bare "run" command: none of the settings reached the simulation, and the Python side still read results through an older interface that had been stubbed out.',
      approach:
        'The app runs as three Electron processes: the main process passes messages, a React window holds the UI, and a hidden window runs a Python script through python-shell. I wired the settings through end to end, so the React side sends the simulation arguments as JSON with the run command over an Electron message port, and the Python script parses them and passes granularity and the Go-accelerated option into the simulation package. I replaced the stubbed results code with a real call to the simulation\'s export function, which parses the returned values, samples the long time series down for charting and writes them to JSON for the UI. On the front end I added hover tooltips to the Recharts line charts, rounded the value table and reworked the layout of the graph column.',
      outcome:
        'The GUI could run the simulation with the settings chosen in the interface and show the results as zoomable speed and state-of-charge charts and a route map with time, charge and distance along the way. It was part of the strategy software I worked on at UBC Solar, alongside genetic-algorithm speed optimization and a data analysis notebook, which contributed to the team\'s highest-ever Formula Sun Grand Prix placement in 2024.',
      metrics: [
        { value: '1 click', label: 'from UI settings to speed, charge and route visuals' },
        { value: 'GPS', label: 'simulation output georeferenced along the race route' },
        { value: '400×', label: 'fewer points to chart, so results stay responsive' },
      ],
    },
  },
  {
    name: 'GestureCV',
    category: 'AI/ML',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    description:
      'Real-time gesture recognition system using computer vision for hand tracking and ML-powered system interaction',
    links: { code: 'https://github.com/tamzeedq/GestureCV' },
    year: '2024',
    role: 'Solo project',
    media: { hero: '/images/gesturecv/gesturecv_1.png' },
    caseStudy: {
      overview:
        "GestureCV lets me control my laptop with hand gestures through the webcam. It follows my index finger to move the cursor, a pinch of my thumb and index finger clicks, and a peace sign opens YouTube. I built it because I watch YouTube while I eat and didn't want to touch my trackpad with messy hands, and because I wanted to try out computer vision tools.",
      problem:
        "When your hands are busy or messy, you still end up touching the trackpad to pause a video or open the next one. I wanted a hands-off way to point, click and get to what I was about to watch, using only the webcam already on the laptop. Longer term, a more polished version could help people who can't use a traditional mouse and keyboard.",
      approach:
        "Each webcam frame from OpenCV goes through Google's MediaPipe Hands model, which returns 21 landmarks for one hand, and the landmarks are drawn back over the video so you can see what it's tracking. The index fingertip's position is mapped from camera coordinates to screen coordinates and mirrored, and PyAutoGUI moves the cursor there. A click fires when the distance between the thumb and index fingertips drops below a small threshold, and a peace sign, detected when the index and middle fingertips sit above their lower joints, opens YouTube through Python's webbrowser module. I also tried running it in Docker, but the container couldn't reach the webcam and display, so the repo keeps a sample Dockerfile.",
      outcome:
        'It works as a hands-free mouse for the basics: pointing, clicking and opening YouTube from across the table. Next would be smoother cursor movement, more gestures for things like scrolling and pausing, and tuning the click threshold so it fits different hands and cameras.',
      metrics: [
        { value: 'Live', label: 'cursor follows your fingertip on every webcam frame' },
        { value: '21', label: 'hand landmarks read from each frame by MediaPipe' },
        { value: '3', label: 'gestures: point, pinch to click, peace sign' },
      ],
    },
  },
  {
    name: 'StyleSense',
    // Hidden for now; delete this line to show it again.
    hidden: true,
    category: 'DevTools & Systems',
    stack: ['Rust', 'TypeScript', 'Tree-sitter', 'LSP'],
    description:
      'Real-time customizable code style enforcement VSCode extension with custom Language Server Protocol implementation',
    links: { code: 'https://github.com/tamzeedq/StyleSense' },
    media: {},
  },
]

/** Display order follows INPUT. */
export const PROJECTS: Project[] = INPUT.filter((p) => !p.hidden).map(({ hidden: _hidden, ...p }) => ({
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
