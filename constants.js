const DATA = {
  name: "Pragnya",
  role: "Full Stack Developer",
  intro: "Building scalable web applications with React & Generative AI.",
  tagline: "CS Engineering student passionate about software development and AI-powered solutions.",
  resume: "https://drive.google.com/file/d/1OYPKUZu6U0gQ6nyUBEbr3UAZyu9_prZk/view?usp=drive_link",
  contact: {
    location: "Raichur, Karnataka",
    phone: "+91 8867419535",
    email: "",
    linkedin: "https://www.linkedin.com/in/pragnyap",
    github: "https://github.com/reddyPragnya"
  },
    skills: {
    "Languages": ["Java", "Python", "JavaScript", "SQL"],
    "Frameworks": ["Spring Boot", "Spring Security", "React.js"],
    "Databases": ["MySQL", "MongoDB"],
    "AI & APIs": ["Google Gemini API", "NLP", "REST APIs"],
    "Tools": ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"]
  },
  experience: [
    {
      company: "SpectoV",
      role: "GenAI Trainee",
      duration: "Jun – Sept 2025",
      type: "Remote",
      points: [
        "Contributed to developing a coding assistant for AR & VR developers.",
        "Worked on integrating GenAI models to enhance developer productivity.",
        "Collaborated on multiple AI-driven solutions and innovative use cases."
      ]
    }
  ],
  projects: [
        {
      name: "CareerBridge AI",
      tag: "Full-Stack AI Portal",
      year: "2026",
      description: "Intelligent campus placement platform featuring automated resume ATS reviews, match eligibility prediction, dynamic learning path advisor, and recruiter-admin workflow management.",
      points: [
        "Developed a decoupled 3-tier architecture with a React.js client interface and a Spring Boot REST API layer secured with stateless JWT token filters.",
        "Engineered a polyglot database model using MySQL for transactional tables (interviews, applications, jobs) and MongoDB (GridFS) for storing and streaming resume PDF binaries.",
        "Integrated Google Gemini AI alongside Apache PDFBox to automate candidate resume parsers, calculate job description compatibility, and render dynamic career roadmaps."
      ],
      tech: ["React.js", "Spring Boot", "MySQL", "MongoDB", "Generative AI", "JWT"],
      live: null, // (You can replace this with your live URL tomorrow once deployed!)
      github: "https://github.com/reddyPragnya/careerbridge-ai-placement-portal"
    },
    {
      name: "Auto Newsroom Agent System",
      tag: "Final Year Project",
      year: "2025",
      description: "AI-powered automated newsroom system to collect, summarize, and publish news articles with intelligent agents and NLP.",
      points: [
        "Designed intelligent agents to fetch news from multiple sources and classify content.",
        "Integrated NLP techniques and GenAI models to improve relevance and readability.",
        "Automated end-to-end pipeline from collection to publishing."
      ],
      tech: ["Python", "NLP", "Generative AI", "APIs"],
      live: null,
      github: "https://github.com/reddyPragnya/Auto-Newsroom-Agent-System"
    },
    {
      name: "Aletheia AI",
      tag: "AI Dashboard",
      year: "2025",
      description: "Intelligent news analysis dashboard that fetches, categorizes, and analyzes news in real-time — with AI-powered credibility scoring and auto-generated blog & social media content.",
      points: [
        "Built real-time news fetching via Google News RSS with AI-powered categorization and sentiment analysis.",
        "Integrated Google Gemini API via LangChain for credibility scoring and content generation.",
        "Auto-generates blog summaries and social media posts with a glassmorphism Streamlit UI."
      ],
      tech: ["Python", "Streamlit", "LangChain", "Google Gemini API", "RSS"],
      live: null,
      github: "https://github.com/reddyPragnya/Aletheia-AI"
    },
    {
      name: "LinkedIn Post Generator",
      tag: "GenAI Tool",
      year: "2025",
      description: "AI-powered tool that generates professional LinkedIn posts using few-shot prompting and the Groq LLM API with a Streamlit interface.",
      points: [
        "Implemented few-shot prompting to match tone and style of real LinkedIn content.",
        "Integrated Groq LLM API for fast, high-quality text generation.",
        "Built an interactive Streamlit UI for seamless post customization."
      ],
      tech: ["Python", "Groq API", "Streamlit", "Few-Shot Prompting"],
      live: null,
      github: "https://github.com/reddyPragnya/LinkedIn-post-generator"
    },
    {
      name: "LUCY – Voice Assistant",
      tag: "May – Jun 2025",
      year: "2025",
      description: "Python-based voice assistant capable of executing voice commands with speech recognition and task automation.",
      points: [
        "Built with speech recognition, text-to-speech, and automation libraries.",
        "Improved user interaction through command-based workflows."
      ],
      tech: ["Python", "Speech Recognition", "TTS", "Automation"],
      live: null,
      github: "https://github.com/reddyPragnya/PERSONAL_VOICE_ASSISTANT"
    },
    {
      name: "Simon Game",
      tag: "Web Game",
      year: "2024",
      description: "Interactive browser-based Simon memory game with increasing difficulty levels, sound feedback, and smooth animations.",
      points: [
        "Built game logic with JavaScript handling sequences, user input, and level progression.",
        "Added audio feedback and CSS animations for an engaging user experience."
      ],
      tech: ["JavaScript", "HTML", "CSS"],
      live: null,
      github: "https://github.com/reddyPragnya/simon-game"
    },
    {
      name: "Spotify Clone",
      tag: "Nov – Dec 2024",
      year: "2024",
      description: "Responsive Spotify-inspired UI with focus on layout accuracy, styling consistency, and user experience.",
      points: [
        "Developed responsive UI using HTML and CSS.",
        "Focused on pixel-perfect layout and UX design."
      ],
      tech: ["HTML", "CSS"],
      live: null,
      github: "https://github.com/reddyPragnya/spotify-clone"
    }
  ],
  education: [
    { degree: "B.E. in CSE", institute: "Navodaya Institute of Technology", year: "2022–2026", score: "CGPA: 8.88" },
    { degree: "2nd PUC", institute: "Sri Chaitanya PU College", year: "2020–2022", score: "Score: 8.7" },
    { degree: "10th Grade", institute: "Sri Chaitanya Techno School", year: "2019–2020", score: "Score: 8.5" }
  ],
  certifications: [
    { name: "Artificial Intelligence Primer", issuer: "Infosys", date: "Aug 2024" },
    { name: "Principles of Generative AI", issuer: "Infosys", date: "Aug 2024" },
    { name: "Cybersecurity Analyst Simulation", issuer: "Tata Forage", date: "Mar 2025" }
  ]
};