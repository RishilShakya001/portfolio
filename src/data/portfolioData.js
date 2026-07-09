export const portfolioData = {
  personalInfo: {
    name: "Rishil Shakya",
    title: "ECE Undergraduate at MNNIT Allahabad",
    roles: [
      "Full Stack MERN Developer",
      "AI Enthusiast",
      "Competitive Programmer"
    ],
    intro: "I build scalable full-stack applications, solve challenging DSA problems, and explore AI-powered solutions to create impactful software.",
    aboutMe: [
      "I am a third-year Electronics and Communication Engineering student at MNNIT Allahabad, passionate about computer science, full-stack web development, and AI technologies.",
      "With a strong foundation in Data Structures and Algorithms, I enjoy solving complex problems on various competitive programming platforms.",
      "I love creating scalable, high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js) and integrating intelligence through generative AI APIs.",
      "Continuously learning and experimenting with emerging technologies is what drives me to grow as a software engineer."
    ],
    resumeUrl: "#", // To be linked to the user's PDF resume or a placeholder
    email: "shakyarishil837@gmail.com"
  },
  socialLinks: {
    github: "https://github.com/RishilShakya001/RishilShakya001",
    linkedin: "https://www.linkedin.com/in/rishil-shakya-41b223332/",
    leetcode: "https://leetcode.com/u/Rishil_Shakya/",
    email: "mailto:shakyarishil837@gmail.com"
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: "Coffee" },
        { name: "JavaScript", icon: "Code" },
        { name: "C++", icon: "Terminal" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "Atom" },
        { name: "Vite", icon: "Zap" },
        { name: "Tailwind CSS", icon: "Palette" },
        { name: "HTML", icon: "FileCode" },
        { name: "CSS", icon: "Brush" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "Server" },
        { name: "Express.js", icon: "Cpu" },
        { name: "MongoDB", icon: "Database" },
        { name: "REST APIs", icon: "Globe" },
        { name: "JWT Authentication", icon: "Key" }
      ]
    },
    {
      category: "AI & APIs",
      items: [
        { name: "Gemini API", icon: "Sparkles" },
        { name: "OpenAI API", icon: "BrainCircuit" },
        { name: "Prompt Engineering", icon: "Wand2" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "GitBranch" },
        { name: "GitHub", icon: "Github" },
        { name: "VS Code", icon: "Laptop" },
        { name: "Postman", icon: "Compass" },
        { name: "Vercel", icon: "Triangle" },
        { name: "Render", icon: "Cloud" }
      ]
    }
  ],
  projects: [
    {
      id: "hellfirescholar",
      title: "HellfireScholar",
      description: "A full-stack academic platform that helps students manage notes, attendance, study resources, and academic progress through a clean and intuitive dashboard.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Google OAuth"],
      features: [
        "JWT Authentication",
        "Google OAuth Login",
        "Notes & Resource Management",
        "Attendance Tracker",
        "Progress Analytics Dashboard",
        "Syllabus Management",
        "Responsive Design",
        "REST API Integration"
      ],
      githubUrl: "https://github.com/RishilShakya001/HellfireScholar",
      demoUrl: "https://hellfire-scholar.vercel.app",
      imageUrl: "/assets/hellfirescholar.png"
    },
    {
      id: "spendwise",
      title: "SpendWise",
      description: "A modern expense tracking and budget management application that allows users to monitor spending habits and visualize financial insights through interactive dashboards.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Chart.js/Recharts"],
      features: [
        "Add/Edit/Delete Expenses",
        "Budget Planning",
        "Expense Categorization",
        "Interactive Charts",
        "Monthly Reports",
        "Analytics Dashboard",
        "Responsive UI",
        "Secure Data Storage"
      ],
      githubUrl: "https://github.com/RishilShakya001/SpendWise",
      demoUrl: "https://spendwise-tracker.vercel.app",
      imageUrl: "/assets/spendwise.png"
    },
    {
      id: "eventpulse",
      title: "EventPulse",
      description: "A full-stack event discovery platform where students can discover hackathons, workshops, internships, competitions, and collaborate using a Team Finder system.",
      techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      features: [
        "College Event Discovery",
        "Team Finder",
        "Admin Dashboard",
        "Event Search & Filtering",
        "Bookmark Events",
        "Secure Authentication",
        "REST API Integration",
        "Responsive Design"
      ],
      githubUrl: "https://github.com/RishilShakya001/EventPulse",
      demoUrl: "https://eventpulse-events.vercel.app",
      imageUrl: "/assets/eventpulse.png"
    }
  ],
  codingProfiles: [
    {
      name: "LeetCode",
      icon: "Code2",
      stats: "734 Solved | 1824 Peak Rating",
      link: "https://leetcode.com/u/Rishil_Shakya/",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "Codeforces",
      icon: "Codeforces",
      stats: "176 Solved | Newbie (1026 Rating)",
      link: "https://codeforces.com/profile/Rishil007",
      color: "from-blue-500 via-red-500 to-yellow-500"
    },
    {
      name: "GitHub",
      icon: "Github",
      stats: "6 Public Repositories | 1 Follower",
      link: "https://github.com/RishilShakya001/RishilShakya001",
      color: "from-zinc-650 to-zinc-800"
    },
    {
      name: "GeeksforGeeks",
      icon: "BookOpen",
      stats: "205 Solved | MNNIT Rank 1274",
      link: "https://www.geeksforgeeks.org/profile/shakyari0fbl",
      color: "from-emerald-600 to-green-700"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      stats: "ECE Undergraduate | 3rd Year Student",
      link: "https://www.linkedin.com/in/rishil-shakya-41b223332/",
      color: "from-blue-600 to-indigo-700"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Solved 1100+ DSA Problems",
      description: "Successfully solved over 1115 questions across LeetCode, GeeksforGeeks, and Codeforces, maintaining high problem-solving metrics."
    },
    {
      id: 2,
      title: "Built Multiple Full Stack MERN Projects",
      description: "Designed, developed, and deployed full-stack web applications with advanced state management, secure auth, and responsive frontends."
    },
    {
      id: 3,
      title: "Active Competitive Programmer",
      description: "Regular participant in contests, achieving a peak rating of 1824 on LeetCode and 1082 on Codeforces."
    },
    {
      id: 4,
      title: "Exploring AI-powered Web Applications",
      description: "Integrating Gemini and OpenAI APIs into web interfaces to build smart tools, utilizing prompt engineering and system instructions."
    }
  ],
  education: {
    institute: "MNNIT Allahabad",
    degree: "Bachelor of Technology",
    major: "Electronics and Communication Engineering",
    duration: "2024 - 2028",
    cgpa: "CGPA: 8.38 / 10 (till 4th sem)"
  }
};
