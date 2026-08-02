# MASTER BUILD SPEC — Immersive Developer Portfolio

> Dokumen ini adalah **source of truth** untuk AI coding agent di Antigravity IDE (Gemini Flash). Baca seluruh dokumen sebelum menulis kode. Implementasikan website, jangan hanya membuat rencana atau mockup.

---

## 0. Instruksi untuk AI Coding Agent

Anda bertindak sebagai **senior creative developer, interaction designer, frontend architect, dan performance engineer**.

Tugas Anda adalah membangun portfolio developer yang:

- Terlihat premium dan memorable.
- Memiliki scroll storytelling yang halus dan sinematik.
- Tidak terlihat seperti template portfolio biasa.
- Responsif dari layar mobile kecil hingga desktop besar.
- Tetap cepat, mudah dibaca, accessible, dan mudah diedit.
- Menggunakan interaksi sebagai pendukung cerita, bukan sekadar dekorasi.

### Aturan kerja wajib

1. Baca seluruh spesifikasi sebelum membuat file.
2. Kerjakan implementasi nyata, bukan pseudocode.
3. Jangan tinggalkan komentar `TODO` untuk fitur utama.
4. Jangan menggunakan lorem ipsum.
5. Simpan semua konten personal di satu file konfigurasi.
6. Gunakan komponen reusable dan TypeScript strict.
7. Pastikan tidak ada error TypeScript, ESLint, atau console.
8. Gunakan native scrolling sebagai fondasi; smooth scrolling tidak boleh merusak aksesibilitas.
9. Hormati `prefers-reduced-motion`.
10. Jika asset 3D belum tersedia, gunakan fallback abstrak yang tetap terlihat premium.
11. Jangan menggunakan musik otomatis, custom cursor yang mengganggu, atau loading screen panjang.
12. Setelah selesai, jalankan build, perbaiki error, dan uji tampilan desktop serta mobile.

---

## 1. Ringkasan Produk

### Nama sementara

**[NAMA ANDA] — Creative Developer Portfolio**

### Positioning

> Developer yang membangun produk digital cepat, interaktif, dan memiliki pengalaman pengguna yang matang.

### Konsep besar

Website berbentuk **perjalanan vertikal sinematik**. Ketika pengguna melakukan scroll, setiap bagian terasa seperti bab dalam satu cerita:

1. **Arrival** — perkenalan yang kuat.
2. **Identity** — siapa developer di balik karya.
3. **Timeline** — perjalanan dan pengalaman.
4. **Selected Works** — proyek sebagai bab utama.
5. **Capabilities** — teknologi dan cara bekerja.
6. **Contact** — penutup sederhana tetapi berkesan.

### Referensi arah

- Struktur profesional: https://brittanychiang.com/
- Atmosfer 3D: https://ameen-abdullah.dev/
- Prinsip: **80% clarity + 20% spectacle**.

Website harus terasa “WOW”, tetapi pengguna tetap dapat memahami nama, posisi, proyek, dan kontak tanpa harus mempelajari navigasi aneh.

### Prioritas mutlak jika instruksi bertabrakan

Urutan prioritas berikut tidak boleh dibalik:

1. **Responsive dan seluruh konten dapat digunakan.**
2. **Scroll storytelling terasa istimewa tetapi tetap natural.**
3. **Project presentation menjadi sumber efek WOW utama.**
4. **Performa dan aksesibilitas tetap terjaga.**
5. **3D hanya bonus, bukan kebutuhan.**

### Mode default tanpa kemampuan membuat 3D

Pemilik website tidak membuat model 3D sendiri. Karena itu, implementasi awal harus **langsung terlihat selesai walaupun `splineSceneUrl` kosong**.

- Jadikan CSS fallback orb dan ambient background sebagai visual utama versi pertama.
- Jangan menampilkan ruang kosong, broken embed, atau pesan “3D belum tersedia”.
- Spline hanya enhancement opsional yang dapat dipasang kemudian dengan mengganti satu URL.
- Jangan meminta file Blender, GLB, texture, atau kemampuan modeling 3D.
- Jangan menunda section lain hanya karena asset 3D tidak tersedia.
- Efek WOW harus tetap berasal dari typography, project chapters, depth, perubahan atmosfer, dan ritme scroll.

### Batas kompleksitas

Jika waktu atau kemampuan agent terbatas, selesaikan urutan berikut terlebih dahulu:

1. Layout responsif dan data terpusat.
2. Hero dengan fallback orb.
3. Project chapters desktop dan versi stacked mobile.
4. Navigation, About, Experience, Capabilities, Contact.
5. Reduced motion, accessibility, dan performance.
6. Spline dan enhancement tambahan hanya setelah seluruh poin sebelumnya stabil.

---

## 2. Tech Stack

Gunakan versi stabil terbaru yang saling kompatibel:

- **Next.js** dengan App Router.
- **TypeScript** strict.
- **Tailwind CSS**.
- **GSAP + ScrollTrigger** untuk scroll storytelling, pinned scenes, dan timeline.
- **Lenis** untuk smooth scrolling yang ringan.
- **Framer Motion** hanya untuk microinteraction dan transisi UI non-scroll.
- **Spline React** untuk satu scene 3D opsional pada hero.
- **Lucide React** untuk ikon.
- **MDX** atau data TypeScript untuk case study.
- **Vercel** sebagai target deployment.

### Jangan gunakan

- Banyak animation library untuk pekerjaan yang sama.
- jQuery.
- Bootstrap.
- Component library dengan tampilan generik.
- Scroll hijacking yang mengubah arah atau kecepatan secara ekstrem.
- Three.js kompleks jika scene Spline sudah memenuhi kebutuhan.

### Instalasi yang diharapkan

```bash
npm install gsap lenis framer-motion lucide-react @splinetool/react-spline
```

Jika package memiliki konflik dengan versi React/Next.js, gunakan versi stabil yang kompatibel dan catat penyesuaiannya di README.

---

## 3. Struktur Folder

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navigation.tsx
│   │   ├── mobile-menu.tsx
│   │   ├── footer.tsx
│   │   └── scroll-progress.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── capabilities-section.tsx
│   │   └── contact-section.tsx
│   ├── project/
│   │   ├── project-chapter.tsx
│   │   ├── project-visual.tsx
│   │   └── project-card.tsx
│   ├── motion/
│   │   ├── smooth-scroll-provider.tsx
│   │   ├── reveal.tsx
│   │   ├── split-text.tsx
│   │   └── reduced-motion.tsx
│   ├── visual/
│   │   ├── hero-scene.tsx
│   │   ├── spline-scene.tsx
│   │   ├── fallback-orb.tsx
│   │   ├── ambient-background.tsx
│   │   └── grain-overlay.tsx
│   └── ui/
│       ├── button.tsx
│       ├── magnetic-link.tsx
│       ├── section-label.tsx
│       └── external-link.tsx
├── content/
│   └── projects/
├── data/
│   └── portfolio.ts
├── hooks/
│   ├── use-media-query.ts
│   ├── use-reduced-motion.ts
│   └── use-active-section.ts
├── lib/
│   ├── animation.ts
│   ├── metadata.ts
│   └── utils.ts
└── types/
    └── portfolio.ts

public/
├── images/
│   ├── profile.webp
│   └── projects/
├── resume.pdf
├── favicon.ico
└── og-image.jpg
```

Boleh menyederhanakan struktur jika diperlukan, tetapi pemisahan antara data, section, motion, dan visual harus tetap jelas.

---

## 4. Satu Sumber Data

Buat `src/data/portfolio.ts`. Semua konten utama harus dapat diganti dari file ini tanpa mengubah komponen.

```ts
export const portfolio = {
  identity: {
    name: "Nama Anda",
    shortName: "NA",
    role: "Creative Frontend Developer",
    location: "Indonesia",
    availability: "Available for selected opportunities",
    email: "hello@example.com",
    intro:
      "Saya membangun pengalaman web yang cepat, interaktif, dan terasa matang.",
    bio: [
      "Tulis paragraf singkat mengenai latar belakang Anda.",
      "Tulis fokus, cara bekerja, dan tipe produk yang ingin Anda bangun."
    ],
    resumeUrl: "/resume.pdf"
  },
  socials: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: ""
  },
  hero: {
    eyebrow: "Creative developer based in Indonesia",
    titleLine1: "I build digital",
    titleLine2: "experiences that move.",
    splineSceneUrl: ""
  },
  experiences: [
    {
      company: "Nama Perusahaan",
      role: "Frontend Developer",
      period: "2025 — Sekarang",
      description: "Ringkasan tanggung jawab dan dampak.",
      achievements: [
        "Mengembangkan fitur utama yang digunakan pengguna.",
        "Meningkatkan performa dan kualitas pengalaman pengguna."
      ]
    }
  ],
  projects: [
    {
      slug: "project-one",
      number: "01",
      title: "Nama Proyek",
      category: "Web Application",
      year: "2026",
      summary: "Satu kalimat mengenai masalah dan solusi.",
      impact: "Tuliskan hasil terukur jika tersedia.",
      role: "Design & Development",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "/images/projects/project-one.webp",
      accent: "#78A9FF",
      liveUrl: "",
      sourceUrl: "",
      featured: true
    }
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "GSAP"
  ]
} as const;
```

Tambahkan type yang sesuai. Jangan menyebarkan hard-coded content di banyak komponen.

---

## 5. Art Direction

### Nuansa

- Minimalis futuristik.
- Industrial dan sinematik.
- Gelap, tenang, dan tajam.
- Terlihat seperti karya creative studio, bukan template SaaS.
- Elemen besar, sedikit, dan terkontrol.

### Palet warna

```css
--background: #090c10;
--surface: #10151c;
--surface-raised: #171d26;
--text-primary: #f4f7fb;
--text-secondary: #9aa5b4;
--border: rgba(255, 255, 255, 0.12);
--accent: #78a9ff;
--accent-soft: rgba(120, 169, 255, 0.12);
```

Setiap proyek boleh memiliki satu warna accent sendiri. Accent hanya memengaruhi glow lembut, nomor proyek, progress, dan detail kecil.

### Tipografi

Gunakan `next/font`:

- Sans utama: **Manrope**, **Inter**, atau **Geist**.
- Mono: **Geist Mono** atau **JetBrains Mono**.

Skala tipografi menggunakan `clamp()`:

```css
--display: clamp(3.4rem, 9vw, 8.5rem);
--h1: clamp(2.8rem, 7vw, 7rem);
--h2: clamp(2.2rem, 5vw, 5rem);
--h3: clamp(1.5rem, 2.5vw, 2.5rem);
--body-large: clamp(1.125rem, 1.6vw, 1.375rem);
--body: 1rem;
```

### Layout

- Max content width: `1200px`.
- Wide visual width: `1440px`.
- Desktop gutter: `clamp(24px, 4vw, 64px)`.
- Mobile gutter: `20px`.
- Gunakan whitespace besar antar-bab.
- Border lebih diutamakan daripada shadow.

### Detail atmosfer

- Grain overlay sangat tipis dengan opacity maksimal `0.035`.
- Radial light mengikuti pointer secara lambat hanya pada desktop.
- Grid atau garis perspektif boleh digunakan pada hero, tetapi sangat halus.
- Jangan menggunakan gradient pelangi.
- Jangan menggunakan glow neon pada seluruh elemen.

---

## 6. Experience Architecture

### Prinsip scroll

Website menggunakan native vertical scroll. Lenis hanya memperhalus gerakan. GSAP ScrollTrigger mengatur scene dan pinned section.

Gunakan tiga jenis ritme:

1. **Free scroll** untuk membaca konten.
2. **Pinned chapter** untuk momen penting seperti proyek unggulan.
3. **Quick transition** untuk perubahan warna, skala, dan posisi antar-bab.

Jangan membuat seluruh halaman pinned. Berikan jeda agar pengalaman tidak melelahkan.

### Scroll progress

Desktop:

- Progress rail vertikal tipis di sisi kanan.
- Menampilkan nomor section aktif: `01 / 06`.
- Klik marker membawa pengguna ke section terkait.

Mobile:

- Gunakan progress bar horizontal setinggi `2px` di bagian atas.
- Jangan menampilkan label yang memenuhi layar.

---

## 7. Detail Setiap Section

## 7.1 Navigation

### Desktop

- Logo monogram di kiri.
- Menu di tengah atau kanan.
- Tombol Resume sebagai outlined button.
- Transparan saat di atas.
- Menjadi surface blur saat scroll lebih dari 40px.
- Sembunyi perlahan saat scroll turun dan muncul saat scroll naik.

### Mobile

- Logo dan tombol menu.
- Fullscreen menu dengan empat link besar.
- Animasi masuk bertahap, tetapi dapat ditutup dengan Escape.
- Lock body scroll ketika menu terbuka.
- Focus trapping dan aria label wajib.

---

## 7.2 Hero — “Arrival”

### Ukuran

- Minimum height desktop: `100svh`.
- Minimum height mobile: `100svh`.

### Komposisi desktop

- Headline besar memenuhi sekitar 65% viewport.
- Scene 3D atau orb berada di belakang/kanan dan tidak menutupi teks.
- Eyebrow di atas headline.
- Intro dan CTA di bawah headline.
- Indikator `Scroll to explore` di bagian bawah.

### Teks

```text
Creative developer based in Indonesia

I build digital
experiences that move.

Saya membangun produk web yang cepat, interaktif,
dan memiliki pengalaman pengguna yang matang.
```

### Animasi masuk

1. Background menyala perlahan.
2. Eyebrow fade-in.
3. Dua baris headline naik dengan clip reveal.
4. Intro dan CTA muncul.
5. Scene 3D/orb masuk dengan scale `0.92` ke `1`.

Total maksimal sekitar 1.4 detik. Jangan menahan pengguna menggunakan preloader panjang.

### Respons terhadap scroll

Pada 0–80% hero scroll:

- Headline bergerak naik sedikit.
- Scene bertambah besar secara lembut.
- Intro memudar.
- Background radial berpindah dari kanan ke tengah.
- Kata terakhir headline boleh mendapatkan outline transition.

### Scene 3D

Jika `splineSceneUrl` tersedia:

- Lazy-load Spline.
- Tampilkan poster/fallback sebelum scene siap.
- Batasi pointer interaction.
- Jangan memblokir klik CTA.

Jika URL kosong:

- Gunakan `fallback-orb.tsx`.
- Buat orb menggunakan layered CSS gradients, blur, pseudo-element, dan transform 3D.
- Orb harus mengikuti pointer secara lembut dan bergerak idle.
- Hindari bentuk glossy generik; gunakan permukaan matte dengan highlight tipis.

Pada mobile atau reduced motion, gunakan poster statis/fallback tanpa pointer tracking.

---

## 7.3 About — “Identity”

Gunakan dua fase scroll:

### Fase 1

Kalimat besar:

> Good products should feel clear before they feel clever.

Kata-kata berubah dari secondary menjadi primary ketika melewati viewport. Gunakan efek word reveal yang tetap terbaca tanpa animasi.

### Fase 2

Layout dua kolom:

- Kiri: portrait atau abstract frame.
- Kanan: bio maksimal tiga paragraf dan link menuju kontak.

Tambahkan tiga nilai kerja:

- Clarity over noise.
- Motion with purpose.
- Performance is design.

Setiap nilai menggunakan nomor kecil, judul, dan satu kalimat. Jangan memakai kartu dengan shadow generik.

---

## 7.4 Experience — “Timeline”

Desktop:

- Timeline horizontal visual tetapi tetap dikendalikan oleh scroll vertikal.
- Section dipin hanya selama 2–3 viewport height.
- Card experience bergerak horizontal dengan jarak yang jelas.
- Tahun besar di background berubah sesuai item aktif.

Mobile:

- Jangan gunakan horizontal pinned scroll.
- Ubah menjadi timeline vertikal normal.
- Gunakan accordion opsional untuk achievements.

Setiap item menunjukkan:

- Periode.
- Role.
- Company.
- Ringkasan.
- 2–4 pencapaian.

Pastikan keyboard dan screen reader tetap mendapatkan urutan DOM yang logis.

---

## 7.5 Projects — “Selected Works”

Ini adalah section paling kuat.

### Intro

Gunakan heading besar:

```text
Selected work,
built with intent.
```

Tambahkan jumlah proyek unggulan.

### Desktop: project chapters

Setiap proyek memiliki tinggi sekitar `160–220svh`. Bagian dalam dipin selama transisi utama.

Komposisi:

- Nomor proyek besar di kiri atas.
- Visual proyek memenuhi 55–65% layar.
- Detail proyek berada di sisi lainnya.
- Warna atmosfer mengikuti `project.accent`.

Urutan animasi setiap chapter:

1. Visual masuk dari scale `0.88` dan opacity rendah.
2. Project number bergerak lambat untuk menciptakan depth.
3. Judul muncul melalui clip reveal.
4. Gambar bergerak dari flat menjadi sedikit perspective.
5. Detail role, stack, dan impact muncul satu per satu.
6. Ketika keluar, visual mengecil dan chapter berikutnya mengambil alih.

Hover pada visual:

- Perspective tilt maksimal `2deg`.
- Image scale maksimal `1.025`.
- Border menjadi sedikit terang.
- Tombol `View case study` muncul tanpa menutupi screenshot.

Jangan membuat efek tilt ekstrem.

### Mobile: stacked chapters

- Jangan pin setiap proyek terlalu lama.
- Setiap proyek berupa section vertikal.
- Gambar full-width dengan aspect ratio stabil.
- Informasi berada setelah gambar.
- Gunakan reveal sederhana.
- Seluruh konten tetap dapat diakses ketika JavaScript gagal.

### Case study

Route `/projects/[slug]` berisi:

1. Overview.
2. Problem.
3. Role.
4. Process.
5. Solution.
6. Outcome.
7. Gallery.
8. Next project.

Gunakan metadata dinamis berdasarkan project.

---

## 7.6 Capabilities — “What I Bring”

Jangan membuat progress bar persentase skill.

Gunakan tiga area:

1. **Build** — frontend, backend, integration.
2. **Craft** — interaction, responsive UI, accessibility.
3. **Ship** — performance, testing, deployment.

Visual desktop:

- Tiga baris besar.
- Baris aktif membuka deskripsi dan technology tags.
- Background bergeser tipis sesuai pointer/focus.

Mobile:

- Accordion accessible.
- Konten pertama terbuka secara default.

Tambahkan marquee teknologi yang sangat lambat hanya sebagai dekorasi. Pause saat hover, focus, reduced motion, atau tab tidak aktif.

---

## 7.7 Contact — “The Last Frame”

Section tinggi minimal `90svh`.

Teks utama:

```text
Have an idea worth
bringing to life?
```

Tombol utama:

```text
Start a conversation ↗
```

Interaksi:

- Tombol memiliki magnetic effect maksimal 6–8px pada desktop.
- Nonaktifkan magnetic effect pada touch device.
- Email dapat diklik dan disalin.
- Social links memiliki focus state yang jelas.

Saat section muncul, background kembali tenang. Akhiri perjalanan dengan ruang kosong yang cukup, bukan ledakan animasi.

---

## 7.8 Footer

- Nama dan tahun otomatis.
- `Designed and built by [Nama]`.
- GitHub, LinkedIn, email.
- Status availability.
- Back to top.

Gunakan border atas tipis. Footer tidak boleh terlihat seperti dashboard.

---

## 8. Motion System

Buat token di `src/lib/animation.ts`:

```ts
export const motion = {
  duration: {
    fast: 0.2,
    normal: 0.45,
    slow: 0.8
  },
  ease: {
    out: [0.22, 1, 0.36, 1],
    inOut: [0.65, 0, 0.35, 1]
  },
  distance: {
    small: 12,
    medium: 32,
    large: 72
  }
};
```

### Aturan

- Gunakan transform dan opacity untuk animasi utama.
- Hindari animasi layout mahal.
- Jangan menganimasikan semua elemen sekaligus.
- Stagger maksimum `0.08s` per item.
- Parallax maksimal sekitar 8–12% dari jarak scroll section.
- Pointer-follow harus menggunakan requestAnimationFrame atau GSAP quickTo.
- Bersihkan seluruh ScrollTrigger pada unmount.
- Recalculate setelah font dan gambar utama siap.
- Pause animasi berat ketika document hidden.

### Reduced motion

Jika `prefers-reduced-motion: reduce`:

- Matikan Lenis.
- Matikan pinning yang tidak esensial.
- Hilangkan parallax, tilt, magnetic movement, dan pointer tracking.
- Tampilkan state akhir tanpa transisi panjang.
- Pertahankan seluruh konten dan navigasi.

---

## 9. Responsive Behavior

### Breakpoint panduan

```text
Mobile: 320–767px
Tablet: 768–1023px
Desktop: 1024–1439px
Wide: 1440px+
```

### Mobile wajib

- Tidak ada horizontal page overflow.
- Touch target minimal `44×44px`.
- Body text minimal `16px`.
- Headline tidak terpotong.
- Tidak ada pinned horizontal section yang sulit dikontrol.
- Visual proyek memiliki ukuran stabil agar tidak layout shift.
- Navigation dapat digunakan dengan satu tangan.
- Scene 3D diganti fallback jika terlalu berat.

### Tablet

- Kurangi intensitas pinning.
- Pastikan landscape dan portrait sama-sama dapat digunakan.
- Hero boleh tetap dua kolom hanya jika teks tidak terjepit.

### Desktop

- Aktifkan pointer effect, project pinning, dan timeline horizontal.
- Jangan mengasumsikan tinggi viewport selalu besar.
- Uji pada tinggi sekitar 700px.

---

## 10. Accessibility

Target minimal WCAG AA.

- Gunakan landmark `header`, `nav`, `main`, `section`, dan `footer`.
- Satu `h1` per halaman.
- Heading mengikuti urutan hierarkis.
- Semua link dan button memiliki focus-visible state.
- Tambahkan skip link menuju konten utama.
- Mobile menu dapat ditutup dengan Escape.
- Jangan menyampaikan informasi hanya melalui warna.
- Alt text mendeskripsikan fungsi gambar, bukan dekorasinya.
- Elemen dekoratif memakai `aria-hidden="true"`.
- Pastikan kontras teks normal minimal 4.5:1.
- Animasi tidak boleh menjadi syarat untuk memahami konten.

---

## 11. Performance Budget

Target:

- Lighthouse Performance ≥ 90 pada production build.
- Accessibility ≥ 95.
- Best Practices ≥ 95.
- SEO ≥ 95.
- LCP ideal < 2.5 detik.
- CLS < 0.1.
- INP < 200 ms.

### Implementasi

- Gunakan `next/image` dengan ukuran yang tepat.
- Gunakan AVIF/WebP.
- Lazy-load Spline dan section berat.
- Dynamic import untuk komponen visual client-only.
- Tampilkan fallback saat dynamic import berjalan.
- Jangan mengirim model 3D besar ke mobile jika tidak diperlukan.
- Gunakan poster statis untuk scene 3D.
- Preload hanya font dan hero asset penting.
- Hindari video background besar.
- Hapus dependency yang tidak digunakan.

Jika efek WOW membuat skor turun drastis, prioritaskan kelancaran dan keterbacaan. Website yang patah bukan website premium.

---

## 12. SEO dan Metadata

Implementasikan:

- Title template.
- Meta description.
- Canonical URL.
- Open Graph image.
- Twitter card.
- Favicon.
- `robots.txt`.
- `sitemap.xml`.
- JSON-LD `Person` atau `ProfilePage` jika sesuai.
- Metadata dinamis untuk setiap project case study.

Contoh title:

```text
Nama Anda — Creative Frontend Developer
```

Contoh description:

```text
Portfolio Nama Anda, developer Indonesia yang membangun pengalaman web cepat, interaktif, dan mudah digunakan.
```

---

## 13. Empty States dan Fallback

- Jika portrait tidak tersedia, tampilkan monogram dalam frame editorial.
- Jika screenshot proyek tidak tersedia, gunakan placeholder lokal sederhana berisi nama proyek, bukan gambar random dari internet.
- Jika Spline URL kosong, render fallback orb.
- Jika live URL kosong, sembunyikan tombol live demo.
- Jika source URL kosong, sembunyikan tombol source code.
- Jika hanya ada satu experience, timeline tetap terlihat proporsional.
- Jika JavaScript gagal, konten utama tetap muncul sebagai dokumen vertikal.

---

## 14. Anti-Pattern yang Dilarang

- Splash screen “Enter website”.
- Preloader lebih dari kebutuhan teknis.
- Suara otomatis.
- Custom cursor yang mengganti pointer sepenuhnya.
- Scroll snap pada seluruh halaman.
- Scroll hijacking ekstrem.
- Gradient pelangi.
- Glow neon di semua komponen.
- Glassmorphism pada setiap section.
- Kartu membulat untuk seluruh konten.
- Skill bars dengan persentase subjektif.
- Logo teknologi berputar memenuhi hero.
- Animasi teks per karakter pada semua heading.
- Section yang semuanya memiliki pola visual sama.
- Tombol palsu atau link kosong yang tetap terlihat aktif.
- Menggunakan gambar stock yang tidak relevan.

---

## 15. Tahapan Implementasi

AI agent harus mengerjakan sesuai urutan berikut.

### Fase 1 — Foundation

- Inisialisasi Next.js + TypeScript + Tailwind.
- Buat token warna, typography, spacing, dan global styles.
- Buat data source `portfolio.ts`.
- Buat semantic page structure.
- Pastikan halaman responsif tanpa animasi.

### Fase 2 — Core Sections

- Navigation.
- Hero.
- About.
- Experience.
- Projects.
- Capabilities.
- Contact dan footer.

Pastikan isi dapat dibaca dan navigasi bekerja sebelum menambahkan efek.

### Fase 3 — Motion

- Pasang Lenis provider.
- Integrasikan GSAP ScrollTrigger.
- Tambahkan reveal system.
- Tambahkan project chapters.
- Tambahkan experience timeline.
- Tambahkan scroll progress.
- Tambahkan microinteraction Framer Motion.

### Fase 4 — 3D/Fallback Visual

- Implementasikan Spline secara lazy.
- Implementasikan fallback orb.
- Tambahkan poster dan loading state.
- Matikan scene berat pada reduced motion/mobile jika diperlukan.

### Fase 5 — Case Studies

- Buat dynamic route.
- Tambahkan metadata.
- Buat navigasi previous/next project.
- Pastikan konten dapat ditulis melalui MDX atau data.

### Fase 6 — QA

- Jalankan TypeScript check.
- Jalankan lint.
- Jalankan production build.
- Uji desktop dan mobile.
- Uji keyboard.
- Uji reduced motion.
- Uji tanpa Spline URL.
- Uji link kosong.
- Periksa console.
- Periksa overflow dan layout shift.
- Ambil screenshot penuh pada viewport `390×844`, `768×1024`, dan `1440×900`.
- Inspeksi screenshot secara visual, bukan hanya memastikan file berhasil dibuat.
- Pastikan tidak ada elemen bertumpuk, teks terpotong, jarak terlalu rapat, atau section kosong.
- Pastikan versi tanpa Spline tetap terlihat final dan premium.
- Ulangi perbaikan dan screenshot sampai seluruh masalah visual selesai.

---

## 16. Commands

Gunakan script standar berikut atau padanan yang tersedia:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Jika belum tersedia, tambahkan script `typecheck`:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```

Jalankan:

```bash
npm run typecheck
npm run lint
npm run build
```

Semua harus berhasil sebelum pekerjaan dinyatakan selesai.

---

## 17. Acceptance Criteria

Website dinyatakan selesai hanya jika seluruh kondisi berikut terpenuhi:

### Visual

- Hero terlihat kuat tanpa memenuhi layar dengan dekorasi.
- Setiap section memiliki komposisi yang berbeda tetapi tetap konsisten.
- Project section menjadi fokus visual utama.
- Tidak ada elemen bertumpuk, terpotong, atau keluar container.
- Tidak ada desain yang terlihat seperti template dashboard/SaaS.

### Interaction

- Scroll terasa halus tetapi tetap natural.
- Pinned section tidak menjebak pengguna.
- Animasi memiliki tujuan dan ritme.
- Navigation aktif mengikuti section.
- Mobile menu dan seluruh CTA bekerja.
- Reduced motion menghasilkan versi yang nyaman.

### Responsive

- Berfungsi pada lebar sekitar 320px, 390px, 768px, 1024px, 1440px, dan 1920px.
- Tidak ada horizontal overflow.
- Tidak ada teks terlalu kecil.
- Tidak ada efek desktop berat yang dipaksakan ke mobile.

### Quality

- Tidak ada error TypeScript.
- Tidak ada error console.
- Lint dan production build berhasil.
- Seluruh konten berasal dari konfigurasi atau content files.
- Metadata dan social preview tersedia.
- Lighthouse mendekati target performance dan accessibility.

---

## 18. Output Akhir yang Harus Diberikan AI Agent

Setelah implementasi, AI agent harus memberikan:

1. Ringkasan apa yang dibangun.
2. Daftar file utama yang dibuat.
3. Cara menjalankan project.
4. Bagian yang harus diganti pengguna:
   - Nama dan bio.
   - Email dan social links.
   - Experience.
   - Project data.
   - Screenshot proyek.
   - Resume.
   - Spline scene URL jika digunakan.
5. Hasil lint, typecheck, dan build.
6. Catatan jika ada kompromi performa.

Jangan hanya berkata “selesai” tanpa menjalankan validasi.

---

## 19. Prompt Eksekusi Singkat

Jika Antigravity IDE membutuhkan instruksi awal, gunakan prompt ini bersama dokumen ini:

```text
Baca file.md sampai selesai dan jadikan sebagai source of truth.
Bangun portfolio Next.js secara penuh sesuai spesifikasi. Mulai dari struktur
responsif dan konten terlebih dahulu, kemudian tambahkan GSAP ScrollTrigger,
Lenis, microinteractions, serta scene Spline dengan fallback CSS. Jangan hanya
membuat rencana. Implementasikan seluruh file, jalankan typecheck, lint, dan
production build, lalu perbaiki semua error sebelum memberi laporan akhir.
```

---

## 20. Prinsip Penutup

Efek “WOW” tidak berasal dari banyaknya animasi. Efek tersebut berasal dari:

- Tipografi yang kuat.
- Komposisi yang berani.
- Perubahan ritme antar-section.
- Transisi yang terkontrol.
- Proyek yang dipresentasikan seperti cerita.
- Detail interaksi yang terasa matang.
- Performa yang tetap halus.

Bangun website yang membuat pengunjung berhenti dan memperhatikan, tetapi jangan membuat mereka kesulitan menemukan informasi penting.
