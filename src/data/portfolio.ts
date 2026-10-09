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
      slug: "nutrivago",
      number: "01",
      title: "NutrivaGo",
      category: "Full-Stack Web Application / Healthy Meal & Catering",
      year: "2026",
      summary:
        "NutrivaGo adalah platform pemesanan makanan sehat harian (Healthy Meal) dan paket langganan katering (Healthy Catering) berbasis web full-stack. NutrivaGo dirancang untuk memenuhi kebutuhan gaya hidup sehat masyarakat modern melalui kurasi menu bergizi, informasi kalori transparan, multi-filter program diet, checkout terstruktur dengan pilihan kurir, integrasi pembayaran digital otomatis melalui Xendit Payment Gateway (Invoice API Sandbox), serta pemantauan status pesanan hingga diterima.",
      impact:
        "Full-stack healthy catering ecosystem featuring transparent calorie metrics, automated Xendit sandbox invoice webhooks, Google OAuth 2.0 authentication, and 57 automated integration tests (108 assertions).",
      role: "Full-Stack Architecture & Development",
      stack: [
        "React 19",
        "Java 17",
        "Spring Boot 3.3.3",
        "Spring Security 6",
        "JWT",
        "MySQL",
        "Spring Data JPA",
        "Tailwind CSS v4",
        "Xendit",
        "Google OAuth 2.0",
        "Postman / Newman",
        "Vite"
      ],
      image: "/images/projects/nutrivago.png",
      accent: "#166534",
      liveUrl: "",
      sourceUrl: "https://github.com/LilBoy77",
      featured: true,
      context: "Full-Stack Project 2026",
      highlights: [
        "Kurasi menu bergizi & paket langganan katering dengan kalori transparan",
        "Multi-filter program diet (Vegetarian, Weight Loss, Mom & Kids, Medical Care, Healthy Meal, Smoothie & Detox)",
        "Integrasi pembayaran otomatis Xendit Invoice API & Webhook Callback status real-time",
        "Dual Auth: Google Sign-In OAuth 2.0 & Stateless JWT dengan RBAC (ROLE_ADMIN & ROLE_CUSTOMER)",
        "Admin Console terproteksi di route khusus /admin/login dengan analitik penjualan real-time",
        "Customer Membership Strategy (Tier loyalitas pelanggan) & manajemen status pengiriman kurir",
        "57 automated integration tests (108 assertions) dengan Newman CLI mencakup validasi DTO, idempotensi webhook, dan proteksi harga"
      ],
      problem:
        "Mengadopsi pola hidup sehat sering kali terhambat oleh kurangnya transparansi informasi nutrisi/kalori makanan harian, pilihan paket katering yang kaku, serta proses checkout yang berbelit-belit. Di sisi operasional bisnis, pencatatan pesanan manual, rekonsiliasi pembayaran yang lambat, dan tidak adanya visualisasi performa penjualan menghambat skalabilitas penyedia katering sehat.",
      solution:
        "NutrivaGo menghadirkan arsitektur full-stack terintegrasi: frontend Single Page Application (SPA) reaktif berbasis React 19 dan Tailwind CSS v4, dipadukan dengan backend enterprise Java 17 Spring Boot 3.3.3 berarsitektur MVC. Sistem menyediakan kalkulasi kalori transparan, checkout otomatis dengan invoice multi-channel Xendit, serta Admin Console khusus untuk memantau performa penjualan secara real-time dan mengelola katalog secara terpusat.",
      process: [
        "Merancang skema relasional database MySQL 8.x dengan Hibernate ORM dan Spring Data JPA, menerapkan Single Table Inheritance untuk diferensiasi produk serta pagination/sorting backend.",
        "Mengimplementasikan sistem keamanan Spring Security 6 dan JJWT 0.12.6 stateless yang dipadukan dengan verifikasi Google ID Token resmi dan Role-Based Access Control (RBAC).",
        "Mengintegrasikan Xendit Invoice API serta webhook callback handler dengan prinsip idempotensi untuk memastikan pembaruan status pembayaran seketika tanpa duplikasi.",
        "Membangun frontend SPA yang responsif menggunakan React 19, Vite, Tailwind CSS v4, Lucide React, serta React Context API (AuthContext & CartContext) untuk manajemen sesi dan keranjang belanja.",
        "Menyusun dan mengeksekusi 57 automated integration tests (108 assertions) dengan Postman dan Newman CLI yang mencakup autentikasi, otorisasi RBAC, validasi skema DTO, dan full CRUD."
      ],
      gallery: ["/images/projects/nutrivago.png"],
      techStackDetails: [
        {
          component: "Frontend Framework",
          technologies: "React 19, Vite, JavaScript (ES Modules)",
          description: "Single Page Application (SPA) reaktif dengan functional components & hooks (useState, useEffect, useContext, useMemo)."
        },
        {
          component: "Styling & Icons",
          technologies: "Tailwind CSS v4, Lucide React",
          description: "Sistem desain modern, responsif desktop & mobile, glassmorphism, dan transisi mikro-interaktif."
        },
        {
          component: "State Management",
          technologies: "React Context API",
          description: "AuthContext (JWT session & user profile) dan CartContext (manajemen keranjang belanja)."
        },
        {
          component: "Customer Auth",
          technologies: "@react-oauth/google",
          description: "Google Sign-In OAuth 2.0 resmi untuk pendaftaran & login instan pelanggan."
        },
        {
          component: "Backend Framework",
          technologies: "Java 17, Spring Boot 3.3.3",
          description: "Enterprise RESTful API dengan arsitektur MVC (Model-View-Controller)."
        },
        {
          component: "Security & Auth",
          technologies: "Spring Security 6, JJWT 0.12.6, BCrypt",
          description: "Autentikasi JWT Stateless, verifikasi Google ID Token, serta Role-Based Access Control (RBAC: ROLE_ADMIN, ROLE_CUSTOMER)."
        },
        {
          component: "Database & ORM",
          technologies: "MySQL 8.x / MariaDB 10.x, Spring Data JPA",
          description: "Relational database dengan Hibernate ORM, Single Table Inheritance (Produk), JPQL queries, dan pagination/sorting backend."
        },
        {
          component: "Payment Gateway",
          technologies: "Xendit Invoice API & Webhook Callback",
          description: "Pembuatan link invoice pembayaran multi-channel otomatis & callback instan status PAID/EXPIRED."
        },
        {
          component: "API Testing",
          technologies: "Postman, Newman CLI",
          description: "57 automated integration tests (108 assertions) mencakup autentikasi, otorisasi RBAC, validasi DTO, idempotensi webhook, proteksi harga, dan full CRUD."
        }
      ]
    },
    {
      slug: "lilticket",
      number: "02",
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
      number: "03",
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
      number: "04",
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
        "Building scalable full-stack web applications with Java Spring Boot, React 19, Next.js, Node.js, and Express — from REST API design to database integration and security.",
      skills: [
        "Java 17 & Spring Boot 3",
        "React 19 & Next.js",
        "Spring Security 6 & JWT",
        "MySQL & PostgreSQL",
        "Spring Data JPA & Hibernate",
        "REST API Architecture"
      ]
    },
    {
      title: "Craft",
      subtitle: "Interaction & UI Development",
      description:
        "Crafting responsive, accessible interfaces with reusable component patterns, clean UX feedback, and smooth micro-interactions.",
      skills: [
        "Tailwind CSS v4 & v3",
        "Framer Motion Animations",
        "React Router DOM & Vite",
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
        "Payment Gateway (Xendit) & Webhooks",
        "Google OAuth 2.0 Integration",
        "Postman & Newman CLI Testing",
        "Docker Containerization",
        "Git & GitHub Version Control",
        "CRUD & Data Schema Validation"
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
    "Java",
    "Spring Boot",
    "TypeScript",
    "Next.js",
    "MySQL",
    "PostgreSQL",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Spring Security",
    "JWT",
    "Xendit",
    "Docker",
    "Git",
    "Postman"
  ]
};
