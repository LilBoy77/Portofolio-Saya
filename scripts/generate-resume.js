const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const fontBoldItalic = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89; // A4
  const MARGIN = 42;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  const colorPrimary = rgb(0.08, 0.08, 0.09);
  const colorSecondary = rgb(0.3, 0.32, 0.35);
  const colorAccent = rgb(0.27, 0.36, 0.91);
  const colorLine = rgb(0.75, 0.77, 0.8);

  function checkPageBreak(neededSpace) {
    if (y - neededSpace < MARGIN) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  }

  function drawText(text, options = {}) {
    const font = options.font || fontRegular;
    const size = options.size || 9.5;
    const color = options.color || colorPrimary;
    const x = options.x !== undefined ? options.x : MARGIN;
    page.drawText(text, { x, y, font, size, color });
  }

  function drawWrappedText(text, maxWidth, options = {}) {
    const font = options.font || fontRegular;
    const size = options.size || 9.5;
    const color = options.color || colorPrimary;
    const lineHeight = options.lineHeight || size * 1.35;
    const indent = options.indent || 0;
    const x = (options.x !== undefined ? options.x : MARGIN) + indent;

    const words = text.split(" ");
    let line = "";

    for (let n = 0; n < words.length; n++) {
      const testLine = line + (line === "" ? "" : " ") + words[n];
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > maxWidth - indent && n > 0) {
        checkPageBreak(lineHeight);
        drawText(line, { font, size, color, x });
        y -= lineHeight;
        line = words[n];
      } else {
        line = testLine;
      }
    }
    if (line !== "") {
      checkPageBreak(lineHeight);
      drawText(line, { font, size, color, x });
      y -= lineHeight;
    }
  }

  function drawSectionHeader(title) {
    y -= 10;
    checkPageBreak(30);
    drawText(title, { font: fontBold, size: 10.5, color: colorPrimary });
    y -= 4;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.75,
      color: colorLine,
    });
    y -= 10;
  }

  // --- HEADER ---
  const nameText = "ULIL ARSYAD RAMADHAN";
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 18);
  drawText(nameText, {
    font: fontBold,
    size: 18,
    color: colorPrimary,
    x: (PAGE_WIDTH - nameWidth) / 2,
  });
  y -= 16;

  const contactText =
    "+62 895-0784-8480 | ulilarsyad011@gmail.com | GitHub | LinkedIn | Bandung, Jawa Barat, Indonesia";
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 8.5);
  drawText(contactText, {
    font: fontRegular,
    size: 8.5,
    color: colorSecondary,
    x: (PAGE_WIDTH - contactWidth) / 2,
  });
  y -= 8;

  // --- RINGKASAN ---
  drawSectionHeader("RINGKASAN");
  drawWrappedText(
    "Mahasiswa D3 Manajemen Informatika tingkat akhir (IPK 3,61/4,00) yang antusias membangun produk web dari nol hingga siap dipakai pengguna. Menguasai pengembangan full-stack dengan JavaScript, React.js, Node.js, dan Express.js, serta terbiasa merancang REST API, autentikasi JWT & RBAC, integrasi database PostgreSQL/Supabase, hingga integrasi payment gateway. Telah menyelesaikan beberapa proyek end-to-end secara mandiri dengan tenggat singkat, cepat belajar teknologi baru, dan siap memberi dampak nyata sebagai Junior Backend/Fullstack Developer.",
    CONTENT_WIDTH,
    { size: 9, lineHeight: 12.5 }
  );

  // --- TECHNICAL SKILLS ---
  drawSectionHeader("TECHNICAL SKILLS");
  const skillsList = [
    { label: "Languages:", text: "JavaScript (ES6+), Java, C, SQL, HTML5 & CSS3." },
    { label: "Backend:", text: "Node.js, Express.js, Spring Boot, REST API, JWT Authentication, RBAC." },
    { label: "Frontend:", text: "React.js, Vite, Tailwind CSS, Bootstrap, React Router." },
    { label: "Database:", text: "PostgreSQL, MySQL, Supabase." },
    { label: "Tools:", text: "Docker, Git & GitHub, Postman, VS Code." },
    { label: "Concepts:", text: "OOP, Database Design, Authentication & Authorization, RESTful API." },
    { label: "Soft Skills:", text: "Kerja tim, komunikasi efektif, problem solving, manajemen waktu, adaptif terhadap teknologi baru." },
  ];

  for (const item of skillsList) {
    checkPageBreak(13);
    drawText("•", { font: fontRegular, size: 9, x: MARGIN + 4 });
    drawText(item.label, { font: fontBold, size: 9, x: MARGIN + 14 });
    const labelWidth = fontBold.widthOfTextAtSize(item.label + " ", 9);
    drawWrappedText(item.text, CONTENT_WIDTH - labelWidth - 14, {
      font: fontRegular,
      size: 9,
      lineHeight: 12,
      x: MARGIN + 14 + labelWidth,
    });
    y -= 1.5;
  }

  // --- PROYEK ---
  drawSectionHeader("PROYEK");

  // Project 1: LilTicket
  checkPageBreak(40);
  drawText("LilTicket — Platform Pemesanan Tiket Event & Konser", { font: fontBold, size: 9.5 });
  y -= 12;
  drawText("Tech Stack: ", { font: fontBoldItalic, size: 8.5, color: colorSecondary });
  drawText("React.js, Vite, Tailwind CSS, Node.js, Express.js, PostgreSQL, Supabase, JWT, Xendit", {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: MARGIN + fontBoldItalic.widthOfTextAtSize("Tech Stack: ", 8.5),
  });
  y -= 12;

  const lilTicketBullets = [
    "Membangun aplikasi full-stack dengan pemisahan frontend dan backend, dilengkapi autentikasi JWT berbasis httpOnly cookie serta hak akses terpisah untuk customer dan admin (RBAC).",
    "Mengembangkan alur end-to-end mulai dari eksplorasi acara (search, filter, sorting, pagination), pemilihan tiket, booking, hingga penerbitan e-ticket dan QR Code.",
    "Mengintegrasikan payment gateway Xendit (test mode) beserta webhook untuk menangani status PAID, EXPIRED, dan FAILED; booking otomatis menjadi CONFIRMED setelah pembayaran berhasil.",
    "Membangun dashboard admin untuk mengelola kategori, venue, acara, jenis tiket, dan pesanan, termasuk fitur check-in tiket melalui validasi QR Code.",
  ];

  for (const b of lilTicketBullets) {
    checkPageBreak(24);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }
  y -= 4;

  // Project 2: Tecca-X
  checkPageBreak(40);
  drawText("Tecca-X — Perpustakaan Digital AI Tools", { font: fontBold, size: 9.5 });
  y -= 12;
  drawText("Tech Stack: ", { font: fontBoldItalic, size: 8.5, color: colorSecondary });
  drawText("React.js, Vite, JavaScript (ES6+), Tailwind CSS, React Router DOM, Context API, Framer Motion", {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: MARGIN + fontBoldItalic.widthOfTextAtSize("Tech Stack: ", 8.5),
  });
  y -= 12;

  const teccaBullets = [
    "Mengembangkan katalog AI tools interaktif dengan tampilan grid & list yang responsif, halaman detail, pencarian real-time, filter kategori, dan sorting data.",
    "Menerapkan CRUD lengkap untuk pengelolaan data tools serta Role-Based Access Control yang membedakan akses Admin (full access) dan User (read only), termasuk proteksi rute.",
    "Meningkatkan pengalaman pengguna melalui toast notification, animasi transisi halaman, dan desain responsif untuk mobile, tablet, serta desktop.",
  ];

  for (const b of teccaBullets) {
    checkPageBreak(24);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }
  y -= 4;

  // Project 3: UAR Gallery
  checkPageBreak(40);
  drawText("UAR Gallery – Web Galeri Seni Interaktif", { font: fontBold, size: 9.5 });
  y -= 12;
  drawText("Tech Stack: ", { font: fontBoldItalic, size: 8.5, color: colorSecondary });
  drawText("HTML5, CSS3, JavaScript (ES6+), REST API (Fetch/Async-Await), LocalStorage, Git", {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: MARGIN + fontBoldItalic.widthOfTextAtSize("Tech Stack: ", 8.5),
  });
  y -= 12;

  const uarBullets = [
    "Pengembangan Frontend Responsif: Membangun aplikasi web galeri seni interaktif multi-halaman dengan UI/UX modern, video hero section, dan navigasi responsif (mobile friendly).",
    "Integrasi REST API Dinamis: Mengonsumsi data karya seni secara real-time dari REST API eksternal menggunakan Fetch API dan Async/Await.",
    "Pencarian, Filter & Paginasi: Mengimplementasikan pencarian karya, pengurutan data (sorting), dan sistem paginasi dinamis untuk kenyamanan penjelajahan pengguna.",
    "Manajemen State Lokal & Navigasi Dinamis: Mengembangkan penandaan karya favorit berbasis localStorage serta penanganan halaman detail dinamis melalui URL query parameters.",
  ];

  for (const b of uarBullets) {
    checkPageBreak(24);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }
  y -= 4;

  // Project 4: Galeri Resep (Page 2 start)
  checkPageBreak(40);
  const grDate = "31 Des 2024 – 9 Jan 2025";
  const grDateWidth = fontRegular.widthOfTextAtSize(grDate, 8.5);
  drawText("Galeri Resep: C Language, File I/O Persistence, Windows API", { font: fontBold, size: 9.5 });
  drawText(grDate, {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: PAGE_WIDTH - MARGIN - grDateWidth,
  });
  y -= 12;

  const resepBullets = [
    "Aplikasi manajemen dan galeri resep berbasis CLI/TUI interaktif yang dikembangkan menggunakan bahasa C dengan sistem penyimpanan data File I/O.",
    "Autentikasi pengguna (Login/Register/Profil), CRUD Resep (Tambah, Edit, Hapus, Lihat) kategori Masakan/Minuman/Dessert, navigasi keyboard (panah), antarmuka TUI kustom, serta sistem Like resep.",
  ];

  for (const b of resepBullets) {
    checkPageBreak(24);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }

  // --- PENDIDIKAN ---
  drawSectionHeader("PENDIDIKAN");
  checkPageBreak(30);
  const eduDate = "2024 – 2027 (est.)";
  const eduDateWidth = fontItalic.widthOfTextAtSize(eduDate, 8.5);
  drawText("D3 Manajemen Informatika — Ilmu Komputer", { font: fontBold, size: 9.5 });
  drawText(eduDate, {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: PAGE_WIDTH - MARGIN - eduDateWidth,
  });
  y -= 12;

  drawText(
    "Universitas Nasional PASIM Bandung | IPK: 3,61 / 4,00 | Penerima Beasiswa PUB",
    { font: fontItalic, size: 8.5, color: colorSecondary }
  );
  y -= 12;

  const eduBullets = [
    "Mempelajari pengembangan perangkat lunak, basis data, struktur data, algoritma, dan OOP.",
    "Menguasai JavaScript, React.js, Node.js, Express.js, Java, SQL, HTML, dan CSS melalui perkuliahan dan proyek mandiri.",
  ];

  for (const b of eduBullets) {
    checkPageBreak(20);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }

  // --- PENDIDIKAN NONFORMAL ---
  drawSectionHeader("PENDIDIKAN NONFORMAL");
  checkPageBreak(30);
  const nonformalDate = "2024 – Sekarang";
  const nonformalDateWidth = fontItalic.widthOfTextAtSize(nonformalDate, 8.5);
  drawText("Pelatihan Pemrograman — PUB (Pemberdayaan Umat Berkelanjutan)", { font: fontBold, size: 9.5 });
  drawText(nonformalDate, {
    font: fontItalic,
    size: 8.5,
    color: colorSecondary,
    x: PAGE_WIDTH - MARGIN - nonformalDateWidth,
  });
  y -= 12;

  drawText("Universitas Nasional PASIM Bandung", { font: fontItalic, size: 8.5, color: colorSecondary });
  y -= 12;

  const trainingBullets = [
    "Logika Algoritma & Pemrograman Dasar (Bahasa C) — Sep 2024 – Jan 2025",
    "Struktur Data & Basis Data — Jan 2025 – Jun 2025",
    "Pemrograman Web (HTML, CSS & JavaScript) — Jun 2025 – Agt 2025",
    "React-Js Fundamental — Agt 2025 – Jan 2026",
    "Git & GitHub — Jan 2026 – Feb 2026",
    "React-Js Lanjutan — Feb 2026 – Juni 2026",
    "Java — Juli 2026 – September 2026",
  ];

  for (const b of trainingBullets) {
    checkPageBreak(16);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }

  // --- ORGANISASI ---
  drawSectionHeader("ORGANISASI");
  checkPageBreak(30);
  drawText("Staff Divisi Kesejahteraan — HIMAMI", { font: fontBold, size: 9.5 });
  y -= 12;
  drawText(
    "Himpunan Mahasiswa Manajemen Informatika, Universitas Nasional PASIM Bandung",
    { font: fontItalic, size: 8.5, color: colorSecondary }
  );
  y -= 12;

  const orgBullets = [
    "Menjalankan program kesejahteraan anggota, termasuk pendataan kebutuhan mahasiswa dan penyaluran informasi beasiswa serta bantuan akademik.",
    "Berkoordinasi dengan divisi lain dalam menyusun dan melaksanakan program kerja organisasi.",
  ];

  for (const b of orgBullets) {
    checkPageBreak(20);
    drawText("•", { font: fontRegular, size: 8.5, x: MARGIN + 4 });
    drawWrappedText(b, CONTENT_WIDTH - 14, { font: fontRegular, size: 8.5, lineHeight: 11.5, x: MARGIN + 14 });
    y -= 1.5;
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, "..", "public", "resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Resume generated successfully at:", outputPath);
}

generateResume().catch(console.error);
