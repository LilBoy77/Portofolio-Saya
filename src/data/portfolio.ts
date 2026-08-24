import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  identity: {
    name: "Ulil Arsyad Ramadhan",
    shortName: "UAR",
    role: "Junior Creative Full-Stack Developer",
    location: "Bandung, Indonesia",
    availability: "Available for selected remote & contract work",
    email: "ulilarsyad011@gmail.com",
    intro:
      "I design and build fast, cinematic, interactive, and high-performance web experiences, combining modern frontend and backend technologies with a strong focus on clean architecture, seamless user interactions, scalability, and attention to detail.",
    bio: [
      "I’m a Full-Stack Developer with a strong focus on Frontend Development. I build digital products end-to-end—from data architecture and API integration to fast, responsive, and intuitive user interfaces.",
      "To me, frontend development is more than just making interfaces look good. Every layout, interaction, and animation should serve a purpose: helping users understand the product, accomplish their goals, and enjoy a seamless experience along the way.",
      "With experience in React, Next.js, Java Spring Boot, backend integration, and database systems, I approach products as complete, interconnected systems. My goal is to create digital experiences that are not only visually refined, but also well-structured, scalable, maintainable, and built to evolve."
    ],
    resumeUrl: "/resume.pdf"
  },
  socials: {
    github: "https://github.com/LilBoy77",
    linkedin: "https://www.linkedin.com/in/ulil-arsyad-ramadhan-130651412?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  hero: {
    eyebrow: "Creative Developer & Frontend Engineer — Based in Indonesia",
    titleLine1: "I build digital",
    titleLine2: "experiences that move.",
    splineSceneUrl: "" // Set URL Spline 3D di sini jika tersedia, contoh: "https://prod.spline.design/your-scene/scene.splinecode"
  },
  experiences: [
    {
      company: "Universitas Nasional Pasim",
      role: "Diploma III in Information Management",
      period: "2024 - Present",
      description: "PUB (Pemberdayaan Ummat Berkelanjutan) scholarship student with an accelerated 3-to-2-year program through short semesters at the end of each even semester. Following an intensive programming training program that includes weekly quizzes, assignments, midterms, and final exams consisting of a 10-day project plus presentation.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "Logic & Algorithm Programming",
      period: "Sep – Dec 2024",
      description: "Studied algorithmic logic using the C programming language through weekly quizzes, assignments, midterm exams, and a 10-day final project. Developed Galeri Resep, an interactive CLI/TUI-based recipe management and gallery application featuring File I/O data persistence and a custom Windows API interface.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "Data Structure & Database",
      period: "Jan - May 2025",
      description: "Studied data structures using C (linked lists, stacks, queues, trees) and database management using MySQL. Each session includes quizzes and assignments, with a written midterm exam and a written final exam.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "Web Fundamentals",
      period: "Jun – Aug 2025",
      description: "Learned and applied modern web development fundamentals using HTML5, CSS3, and JavaScript (ES6+) without relying on frontend frameworks. Developed UAR Gallery, an interactive multi-page art gallery web application featuring a modern responsive UI/UX, dynamic REST API integration, and local state management.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "Git & GitHub",
      period: "Aug 2025",
      description: "Intensive 1-month training on version control using Git and GitHub. Covered branching, merging, pull requests, and team collaboration. No midterm exam. Includes quizzes, assignments, and a written final exam.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "React Fundamental",
      period: "Sep - Dec 2025",
      description: "Learned core React concepts including components, props, state management, React Router, and Context API through weekly quizzes, assignments, midterm exams, and a 10-day final project. Developed Tecca-X, an interactive digital library for AI tools featuring a responsive grid/list catalog, real-time search, category filtering, sorting, and dynamic detail pages.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "React Advanced",
      period: "Jan – Jun 2026",
      description: "Deepened my full-stack development skills by building LilTicket, a ticket booking platform for events and concerts. Developed a separated frontend and backend architecture using React.js, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL, Supabase, JWT, and Xendit.",
      achievements: []
    },
    {
      company: "PUB Training",
      role: "Java Fundamental",
      period: "May - Sep 2026",
      description: "Learning Java fundamentals including OOP, exception handling, collections, and basic GUI. Each session includes quizzes and assignments. Midterm exam completed; the final exam will be a 10-day project plus presentation. (Currently ongoing)",
      achievements: []
    }
  ],
  projects: [
    {
      slug: "lilticket",
      number: "01",
      title: "LilTicket",
      category: "Full-Stack Web Application / Event Ticketing",
      year: "2026",
      summary:
        "An end-to-end event and concert ticketing platform covering event discovery, ticket reservation, secure checkout, and QR-code check-in validation. Built with React and Express, featuring JWT authentication, Xendit payment gateway integration, QR code issuance, and an administrative dashboard.",
      impact: "Integrated e-ticketing ecosystem with instant QR Code validation and automated Xendit payment webhooks.",
      role: "Full-Stack Development",
      stack: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "JWT",
        "Xendit",
        "QR Code"
      ],
      image: "/images/projects/lilticket.webp",
      accent: "#455CE9",
      liveUrl: "https://lilticket-booking-frontend.vercel.app/",
      sourceUrl: "https://github.com/LilBoy77",
      featured: true,
      context: "React Advanced Project",
      highlights: [
        "Customer and administrator authentication",
        "Event search, category filters, and ticket booking",
        "Xendit payment gateway with automated webhook processing",
        "Digital e-ticket issuance with QR Code check-in scanner",
        "Administrative dashboard for event and order management"
      ],
      problem:
        "Traditional ticket reservation systems frequently suffer from friction in real-time payment confirmation, slow manual gate verification during live events, and the absence of an efficient analytics dashboard for event organizers.",
      solution:
        "LilTicket combines a robust Express.js RESTful API and PostgreSQL/Supabase database with a fast, intuitive React frontend. Automated Xendit webhooks instantly confirm transactions, automatically generating unique QR-coded e-tickets for seamless gate check-ins.",
      process: [
        "Architected the relational database schema and implemented dual-role JWT authentication (Admin & Customer).",
        "Integrated Xendit API payment gateway with webhook handlers for real-time transaction lifecycle updates.",
        "Engineered the QR-coded e-ticket generator and live gate scanner validation module.",
        "Built an administrative analytics dashboard for monitoring ticket quotas, event status, and transaction history."
      ],
      gallery: ["/images/projects/lilticket.webp"]
    },
    {
      slug: "tecca-x",
      number: "02",
      title: "Tecca-X",
      category: "Frontend Web Application / AI Directory",
      year: "2025",
      summary:
        "An interactive digital library for discovering and exploring AI tools categorized by use case, pricing model, and popularity. Features authentication, role-based access for Admin and User, full CRUD management, real-time search, category filtering, and a responsive layout.",
      impact: "Structured AI discovery platform with real-time multi-filter search & role-based access control.",
      role: "Frontend Development",
      stack: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Framer Motion"
      ],
      image: "/images/projects/tecca-x.webp",
      accent: "#38BDF8",
      liveUrl: "https://uas-ulil-react.vercel.app/",
      sourceUrl: "https://github.com/LilBoy77",
      featured: true,
      context: "UAS React Project 2025",
      highlights: [
        "Interactive AI directory with dynamic Grid and List views",
        "Real-time search, category filtering, and sorting",
        "Authentication and protected routes",
        "Role-based access control for Admins and Users",
        "Complete CRUD capabilities for managing AI tool entries"
      ],
      problem:
        "The artificial intelligence ecosystem is expanding rapidly, making it difficult for users to evaluate and find the right AI tools tailored to their workflow, budget, and feature requirements.",
      solution:
        "Tecca-X provides a centralized discovery hub with real-time keyword search, dynamic Grid/List view switching, and secure role-based CRUD operations for managing tools seamlessly.",
      process: [
        "Architected client-side state management using React Context API and established role-based route protection.",
        "Crafted interactive UI components with fluid Framer Motion micro-animations and responsive Tailwind CSS layouts.",
        "Developed multi-property search algorithms, instant category filters, and popularity sorting logic.",
        "Conducted comprehensive CRUD feature testing and performance optimizations using Vite."
      ],
      gallery: ["/images/projects/tecca-x.webp"]
    },
    {
      slug: "uar-gallery",
      number: "03",
      title: "UAR Gallery",
      category: "Frontend Web Application / Art Gallery",
      year: "2025",
      summary:
        "An interactive multi-page art gallery web application with modern responsive UI/UX, video hero section, dynamic external REST API data consumption, real-time search, sorting, dynamic pagination, and localStorage-based favorites system.",
      impact: "Dynamic art discovery web app with real-time REST API consumption and local favorites state management.",
      role: "Frontend Development",
      stack: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "REST API",
        "LocalStorage",
        "Git"
      ],
      image: "",
      accent: "#8B5CF6",
      liveUrl: "",
      sourceUrl: "https://github.com/LilBoy77",
      featured: true,
      context: "Web Fundamentals Project 2025",
      highlights: [
        "Interactive multi-page gallery with video hero section",
        "Real-time external REST API integration (Fetch & Async/Await)",
        "Keyword search, sorting, and dynamic pagination",
        "Local state management for favorites with localStorage",
        "Dynamic detail view handling via URL query parameters"
      ],
      problem:
        "Digital art enthusiasts need a fluid, accessible, and interactive platform to discover, sort, and save artworks without clunky reloads or complex dependencies.",
      solution:
        "UAR Gallery provides a lightweight vanilla JavaScript architecture that communicates asynchronously with art APIs, rendering fast responsive layouts and persistent client-side favorites.",
      process: [
        "Designed mobile-first responsive layout with custom CSS3 grid and video hero header.",
        "Implemented asynchronous REST API fetching pipelines with dynamic error handling.",
        "Built instant search, multi-field sorting, and client-side pagination components.",
        "Integrated localStorage state persistence for marking and reviewing favorite art pieces."
      ],
      gallery: []
    }
  ],
  capabilities: [
    {
      title: "Build",
      subtitle: "Full-Stack Web Development",
      description:
        "Building scalable full-stack web applications with JavaScript, React.js, Node.js, and Express.js — from REST API design to database integration.",
      skills: [
        "React.js & Vite",
        "Node.js & Express.js",
        "REST API Design",
        "JWT Authentication & RBAC",
        "PostgreSQL & Supabase",
        "State Management (Context API)"
      ]
    },
    {
      title: "Craft",
      subtitle: "Interaction & UI Development",
      description:
        "Crafting responsive, accessible interfaces with reusable component patterns, clean UX feedback, and smooth micro-interactions.",
      skills: [
        "Tailwind CSS & Bootstrap",
        "Framer Motion Animations",
        "React Router DOM",
        "Responsive, Mobile-First Design",
        "Toast Notifications & UX Feedback",
        "Role-Based UI (Admin & User Views)"
      ]
    },
    {
      title: "Ship",
      subtitle: "Integration & Quality Engineering",
      description:
        "Ensuring reliable authentication, secure payment flows, and clean, deployment-ready code across every project.",
      skills: [
        "Payment Gateway Integration (Xendit) & Webhooks",
        "Git & GitHub Version Control",
        "Docker Containerization",
        "Postman API Testing",
        "CRUD & Data Validation",
        "Cross-Browser & Cross-Device Testing"
      ]
    }
  ],
  values: [
    {
      number: "01",
      title: "Frontend With Purpose",
      description: "Every component, interaction, and animation is thoughtfully designed to enhance the user experience—not simply to serve as decoration."
    },
    {
      number: "02",
      title: "Full-Stack Perspective",
      description: "I understand the product as a complete system, from the interface and state management to APIs, authentication, backend services, and databases."
    },
    {
      number: "03",
      title: "Performance Is Experience",
      description: "Speed, accessibility, and responsiveness are not just technical requirements—they are essential parts of an experience that users feel in every interaction."
    }
  ],
  skills: [
    "React.js",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Git",
    "Docker"
  ]
};
