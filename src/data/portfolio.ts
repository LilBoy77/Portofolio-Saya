import { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  identity: {
    name: "Ulil Arsyad Ramadhan",
    shortName: "UAR",
    role: "Senior Creative Frontend Developer",
    location: "Indonesia",
    availability: "Available for selected remote & contract work",
    email: "ulil.arsyad.dev@gmail.com",
    intro:
      "Saya merancang & membangun pengembahan web yang cepat, sinematik, interaktif, dan berkinerja tinggi dengan perhatian penuh pada detail.",
    bio: [
      "Sebagai Creative Developer & Frontend Engineer dengan latar belakang mendalam dalam interaksi web modern, saya menjembatani celah antara estetika desain tingkat tinggi dan arsitektur kode yang tangguh.",
      "Fokus utama saya adalah membangun aplikasi web modern, platform interaktif, serta sistem antarmuka berbasis Next.js, GSAP, dan TypeScript yang responsif, terakses, dan mulus di semua ukuran layar.",
      "Saya percaya bahwa produk terbaik lahir dari keseimbangan antara kejelasan navigasi (clarity), estetika yang memikat (spectacle), dan optimasi performa tanpa kompromi."
    ],
    resumeUrl: "/resume.pdf"
  },
  socials: {
    github: "https://github.com/ulilarsyad",
    linkedin: "https://linkedin.com/in/ulilarsyad",
    instagram: "https://instagram.com/ulilarsyad"
  },
  hero: {
    eyebrow: "Creative Developer & Frontend Engineer — Based in Indonesia",
    titleLine1: "I build digital",
    titleLine2: "experiences that move.",
    splineSceneUrl: "" // Set URL Spline 3D di sini jika tersedia, contoh: "https://prod.spline.design/your-scene/scene.splinecode"
  },
  experiences: [
    {
      company: "Apex Labs Studio",
      role: "Lead Creative Developer",
      period: "2024 — Sekarang",
      description: "Memimpin pengembangan antarmuka web interaktif, visual storytelling, dan arsitektur micro-frontend berkinerja tinggi.",
      achievements: [
        "Meningkatkan skor Lighthouse Performance dari 72 ke 98 pada 12 web portal klien.",
        "Mengembangkan perpustakaan komponen animasi GSAP & Lenis yang digunakan di seluruh tim.",
        "Mengurangi LCP rata-rata aplikasi dari 3.4 detik menjadi 1.1 detik."
      ]
    },
    {
      company: "Kinetix Interactive",
      role: "Senior Frontend Engineer",
      period: "2022 — 2024",
      description: "Mengembangkan aplikasi SaaS kompleks, dashboard data interaktif, dan design system enterprise berbasis Next.js & Tailwind CSS.",
      achievements: [
        "Merancang design system reusable dengan 40+ komponen accessible (WCAG AA).",
        "Mengimplementasikan real-time data visualizer menggunakan Canvas 2D & WebGL fallback.",
        "Meminimalkan bundle size JavaScript hingga 35% melalui code splitting dan dynamic import."
      ]
    },
    {
      company: "Vanguard Media",
      role: "UI/UX & Interactive Developer",
      period: "2021 — 2022",
      description: "Membangun website landing page berskala besar, microsite kampanye sinematik, dan motion prototype.",
      achievements: [
        "Mengirimkan 15+ microsite kampanye interaktif berkinerja tinggi.",
        "Mengatur integrasi CMS headless (Sanity & Strapi) untuk alur pengeditan konten yang cepat."
      ]
    }
  ],
  projects: [
    {
      slug: "nexus-analytics",
      number: "01",
      title: "Nexus Quantum Analytics",
      category: "Web Application & Data Platform",
      year: "2026",
      summary: "Platform analisis data real-time sinematik dengan visualisasi grafik interaktif dan waktu muat di bawah 1 detik.",
      impact: "Meningkatkan retensi pengguna sebesar 42% dan memproses 1M+ event per detik.",
      role: "Lead Frontend Engineer & Motion Designer",
      stack: ["Next.js 15", "TypeScript", "GSAP", "Tailwind CSS", "Canvas API"],
      image: "/images/projects/nexus.svg",
      accent: "#78A9FF",
      liveUrl: "https://nexus-analytics.demo",
      sourceUrl: "https://github.com/ulilarsyad/nexus-analytics",
      featured: true,
      problem: "Sistem analitik lama lambat, sarat beban JavaScript, dan memiliki antarmuka yang kaku sehingga pengguna kesulitan membaca wawasan bisnis secara cepat.",
      solution: "Kami membangun ulang seluruh antarmuka menggunakan Next.js App Router dengan arsitektur streaming data real-time, grafik Canvas 2D yang dipercepat hardware, serta transisi GSAP yang memikat.",
      process: [
        "Audit arsitektur lama & identifikasi bottleneck rendering UI.",
        "Penyusunan design tokens dan komponen UI modular berkemampuan dark mode sinematik.",
        "Integrasi rendering Canvas kustom untuk grafik tren tinggi.",
        "Pengujian performa ekstrem pada koneksi 3G dan perangkat mobile kelas menengah."
      ],
      gallery: [
        "/images/projects/nexus-detail-1.svg",
        "/images/projects/nexus-detail-2.svg"
      ]
    },
    {
      slug: "lumina-design-system",
      number: "02",
      title: "Lumina Studio Systems",
      category: "Design System & Core Library",
      year: "2025",
      summary: "Design system premium berbasis React & Tailwind CSS untuk aplikasi enterprise dengan kepatuhan penuh WCAG 2.1 AA.",
      impact: "Mempercepat waktu rilis fitur baru hingga 60% pada 4 produk utama perusahaan.",
      role: "Design System Architect",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
      image: "/images/projects/lumina.svg",
      accent: "#38BDF8",
      liveUrl: "https://lumina-system.demo",
      sourceUrl: "https://github.com/ulilarsyad/lumina-system",
      featured: true,
      problem: "Duplikasi komponen antarmuka antar-tim menimbulkan ketidakstabilan visual dan menurunkan konsistensi brand serta aksesibilitas pengguna.",
      solution: "Merancang Lumina: sistem antarmuka berbasis headless primitives (Radix UI) yang dikombinasikan dengan utility Tailwind CSS dan token warna yang dikurasi secara terpusat.",
      process: [
        "Investigasi kebutuhan 12 tim pengembang dan desainer produk.",
        "Penyusunan panduan aksesibilitas keyboard dan pembaca layar.",
        "Pembuatan komponen interaktif dengan animasi mikro Framer Motion yang halus.",
        "Dokumentasi interaktif menggunakan Storybook dan Next.js."
      ],
      gallery: [
        "/images/projects/lumina-detail-1.svg"
      ]
    },
    {
      slug: "Aetheria-creative-engine",
      number: "03",
      title: "Aetheria Audio Visual",
      category: "Interactive Web Experience",
      year: "2025",
      summary: "Pengalaman web audio-visual immersive dengan scroll storytelling sinematik dan efek cahaya ambient ambient dynamic.",
      impact: "Mencapai 250k+ pengunjung unik di bulan pertama tanpa iklan berbayar.",
      role: "Creative Developer",
      stack: ["Next.js", "GSAP ScrollTrigger", "Lenis", "Web Audio API", "Tailwind CSS"],
      image: "/images/projects/aetheria.svg",
      accent: "#A78BFA",
      liveUrl: "https://aetheria-experience.demo",
      sourceUrl: "https://github.com/ulilarsyad/aetheria-experience",
      featured: true,
      problem: "Landing page kampanye album musik generik tidak mampu memberikan keterikatan emosional dan pengalaman visual yang berkesan.",
      solution: "Menggabungkan GSAP ScrollTrigger dengan Web Audio API untuk menyelaraskan animasi scroll dengan respons frekuensi audio secara halus.",
      process: [
        "Penyusunan alur cerita vertikal sinematik dari bab 1 hingga bab 6.",
        "Pengalaman audio opsional dengan tombol mute yang terlihat dan teruji keyboard.",
        "Optimasi fallback CSS untuk perangkat berdaya rendah dan mode prefers-reduced-motion."
      ],
      gallery: [
        "/images/projects/aetheria-detail-1.svg"
      ]
    },
    {
      slug: "hyperion-finance",
      number: "04",
      title: "Hyperion DeFi Protocol",
      category: "Fintech & Web3 App",
      year: "2024",
      summary: "Dashboard keuangan terdesentralisasi yang cepat, aman, dan dirancang dengan estetika industrial modern.",
      impact: "Mengurangi bounce rate sebesar 38% dan memproses transaksi senilai $50M+ USD.",
      role: "Senior Frontend Engineer",
      stack: ["Next.js", "TypeScript", "Ethers.js", "Tailwind CSS", "Recharts"],
      image: "/images/projects/hyperion.svg",
      accent: "#F43F5E",
      liveUrl: "https://hyperion-fi.demo",
      sourceUrl: "",
      featured: true,
      problem: "Aplikasi DeFi umumnya memiliki UI rumit, sarat informasi statistik berantakan, dan lambat pada koneksi mobile.",
      solution: "Antarmuka Hyperion dirancang minimalis dan tajam dengan pembagian area kerja yang jelas serta feedback transaksi seketika.",
      process: [
        "Uji keterbacaan kontras tinggi dan hierarki tipografi besar.",
        "Optimasi alur transaksi dari koneksi dompet hingga konfirmasi blok.",
        "Pengujian performa tinggi pada jaringan buruk."
      ],
      gallery: []
    }
  ],
  capabilities: [
    {
      title: "Build",
      subtitle: "Frontend Architecture & Applications",
      description: "Membangun arsitektur web modern yang bersih, terskala, dan aman dari tipe error dengan TypeScript & React.",
      skills: ["React & Next.js App Router", "TypeScript Strict Architecture", "REST & GraphQL API Integration", "State Management & Server Components", "Performance Optimization & Auditing"]
    },
    {
      title: "Craft",
      subtitle: "Interaction & Design System",
      description: "Menghadirkan rasa, ritme, animasi mikro, dan sistem komponen yang menawan tanpa mengorbankan aksesibilitas.",
      skills: ["GSAP ScrollTrigger & Pinned Storytelling", "Smooth Scrolling (Lenis Integration)", "Framer Motion Microinteractions", "Tailwind CSS & Token Systems", "WCAG 2.1 AA Accessibility Standards"]
    },
    {
      title: "Ship",
      subtitle: "Performance & Quality Engineering",
      description: "Menjamin kecepatan waktu muat, keandalan deployment, SEO optimal, serta pengalaman mobile yang sempurna.",
      skills: ["Core Web Vitals & Lighthouse Optimization", "Next.js Dynamic Importing & Code Splitting", "SEO, OpenGraph & Structured JSON-LD Data", "Cross-browser & Cross-device Testing", "Vercel Deployment & Continuous Integration"]
    }
  ],
  values: [
    {
      number: "01",
      title: "Clarity Over Noise",
      description: "Desain yang hebat harus terasa jernih sebelum terlihat cerdas. Elemen visual melayani pesan, bukan sebaliknya."
    },
    {
      number: "02",
      title: "Motion With Purpose",
      description: "Setiap gerakan, transisi, dan scroll pin diciptakan untuk memandu perhatian pengguna dan menceritakan produk."
    },
    {
      number: "03",
      title: "Performance Is Design",
      description: "Kecepatan muat dan responsivitas antarmuka adalah bagian utama dari kenyamanan pengguna yang sejati."
    }
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP ScrollTrigger",
    "Lenis",
    "Framer Motion",
    "Node.js",
    "PostgreSQL",
    "Canvas 2D API",
    "Accessibility (WCAG)",
    "Vercel"
  ]
};
